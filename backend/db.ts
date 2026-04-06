import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/cinereview";

export async function connectDB() {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Successfully connected to MongoDB Atlas");
  } catch (error: any) {
    console.error("❌ MongoDB connection error:", error.message);
    if (error.message.includes("IP not whitelisted")) {
      console.error("👉 Please whitelist your IP address in MongoDB Atlas Network Access.");
    } else if (error.message.includes("auth failed")) {
      console.error("👉 Check your username and password in the .env file.");
    }
    process.exit(1);
  }
}

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB runtime error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected. Attempting to reconnect...");
});
