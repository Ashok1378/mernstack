import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import net from "net";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env"), override: true });

import express from "express";
import { createServer as createViteServer } from "vite";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "./models/User.js";
import { Review } from "./models/Review.js";
import { connectDB } from "./db.js";


const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/cinereview";

async function isPortAvailable(port: number, host = "0.0.0.0"): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", () => {
      resolve(false);
    });

    server.once("listening", () => {
      server.close(() => resolve(true));
    });

    server.listen(port, host);
  });
}

async function findAvailablePort(startPort: number, host = "0.0.0.0", maxAttempts = 25): Promise<number> {
  for (let i = 0; i < maxAttempts; i++) {
    const candidate = startPort + i;
    // Probe sequential ports to avoid crashing when previous dev instances are still running.
    const available = await isPortAvailable(candidate, host);
    if (available) return candidate;
  }

  throw new Error(`No available port found from ${startPort} to ${startPort + maxAttempts - 1}`);
}

async function startServer() {
  const app = express();
  const preferredPort = Number(process.env.PORT || 3000);
  const preferredHmrPort = Number(process.env.HMR_PORT || 24678);
  const PORT = await findAvailablePort(preferredPort, "0.0.0.0");
  const hmrPort = await findAvailablePort(preferredHmrPort, "127.0.0.1");

  if (PORT !== preferredPort) {
    console.warn(`Port ${preferredPort} is busy, using ${PORT} instead.`);
  }
  if (hmrPort !== preferredHmrPort) {
    console.warn(`HMR port ${preferredHmrPort} is busy, using ${hmrPort} instead.`);
  }

  // Connect to MongoDB
  await connectDB();

  app.use(express.json());

  // Auth Routes
  app.post("/api/auth/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      
      const token = jwt.sign({ userId: user._id, username }, JWT_SECRET);
      res.json({ token, user: { id: user._id, username, email } });
    } catch (error: any) {
      res.status(400).json({ error: error.code === 11000 ? "User already exists" : "Signup failed" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET);
      res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Review Routes
  app.post("/api/reviews", async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      const { movie_id, movie_title, rating, comment } = req.body;

      const review = new Review({
        user_id: decoded.userId,
        movie_id,
        movie_title,
        rating,
        comment
      });
      await review.save();
      
      res.json({ success: true, reviewId: review._id });
    } catch (error) {
      res.status(401).json({ error: "Invalid token" });
    }
  });

  app.get("/api/reviews/:movieId", async (req, res) => {
    try {
      const reviews = await Review.find({ movie_id: req.params.movieId })
        .populate('user_id', 'username')
        .sort({ created_at: -1 });
      
      const formattedReviews = reviews.map(r => ({
        ...r.toJSON(),
        username: (r.user_id as any).username
      }));
      
      res.json(formattedReviews);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  app.get("/api/user/reviews", async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      const reviews = await Review.find({ user_id: decoded.userId })
        .sort({ created_at: -1 });
      res.json(reviews);
    } catch (error) {
      res.status(401).json({ error: "Invalid token" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const hmr = process.env.DISABLE_HMR === "true" ? false : { port: hmrPort, host: "localhost" };
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr },
      appType: "spa",
      root: path.resolve(__dirname, "../frontend"),
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "../frontend/dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
