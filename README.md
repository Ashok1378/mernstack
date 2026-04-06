# 🎬 CineStore — Movie Review Application

A full-stack movie review platform where users can browse popular Indian & international films, read community reviews, and submit their own ratings. Built with a modern dark-glass UI design.

![CineStore Banner](https://placehold.co/1200x400/0f0f1a/FACC15?text=CineStore+%7C+Movie+Review+Platform)

---

## ✨ Features

- 🎥 **Browse Movies** — Explore a curated collection of popular Telugu, Tamil, Malayalam, Hindi & English movies
- 🔍 **Real-time Search** — Instant search with 500ms debounce across the entire movie library
- 🌐 **Language Filters** — Filter by Telugu, Hindi, Tamil, Malayalam, English
- 🎭 **Genre Filters** — Filter by Action, Comedy, Drama, Love, Adventure, Sci-Fi
- ⭐ **Community Reviews** — Read and write ratings (1–10) and comments for any movie
- 🎬 **Movie Details** — Full cast info, descriptions, ratings, and official trailer links
- 🔐 **User Authentication** — Register & login to post reviews; guests can browse freely
- 📱 **Responsive Design** — Works on all screen sizes

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Framer Motion | Animations & transitions |
| Lucide React | Icons |
| Vanilla CSS | Styling with glassmorphism design |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| TypeScript | Type safety |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM for MongoDB |
| JWT | User authentication tokens |
| bcryptjs | Password hashing |

### Services
| Service | Purpose |
|---|---|
| Google Gemini AI | AI-powered movie discovery (fallback) |
| Wikipedia/Wikimedia | Movie poster & cast images |
| MongoDB Atlas | Cloud database hosting |

---

## 📁 Project Structure

```
cinereview/
├── backend/
│   ├── server.ts          # Express server & API routes
│   ├── db.ts              # MongoDB connection
│   ├── models/
│   │   ├── User.ts        # User schema
│   │   └── Review.ts      # Review schema
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx        # Main app with all pages & components
│   │   ├── main.tsx       # Entry point
│   │   ├── index.css      # Global styles (glassmorphism theme)
│   │   └── services/
│   │       └── geminiService.ts  # Movie data & AI service
│   ├── public/
│   └── package.json
│
├── .env                   # Environment variables (not committed)
├── package.json           # Root scripts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v8 or higher
- **MongoDB Atlas** account (free tier works)
- **Google Gemini API Key** (optional, for AI movie search)

---

### 1. Clone / Download the Project

```bash
cd "cinereview (2)"
```

---

### 2. Set Up Environment Variables

Create a `.env` file in the **root** of the project:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/cinereview
JWT_SECRET=your_super_secret_jwt_key_here
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

> **Important:** Replace `<username>` and `<password>` with your actual MongoDB Atlas credentials.

---

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free cluster
3. Create a database user (username + password)
4. **Network Access → Add IP Address → `0.0.0.0/0`** (allow all IPs)
5. Get the connection string and paste it into `.env`

---

### 4. Install Dependencies

```bash
# Install all dependencies (root + frontend + backend)
npm install
cd frontend && npm install
cd ../backend && npm install
```

---

### 5. Run the Application

```bash
# From the root directory — starts BOTH frontend and backend
npm run dev
```

Or run them separately:

```bash
# Terminal 1 — Backend (port 5000)
cd backend
npm run dev

# Terminal 2 — Frontend (port 3000 or 3001)
cd frontend
npm run dev
```

Then open: **[http://localhost:3000](http://localhost:3000)**

---

## 🧭 Pages & Routes

| Route | Page | Access |
|---|---|---|
| `/` | Home — Browse & filter movies | Public |
| `/explore` | Explore all movies | Public |
| `/movie/:id` | Movie details, cast & reviews | Public |
| `/auth` | Login / Register | Public |
| `/profile` | User profile | Logged in |

---

## 🎬 Movie Library

The app includes a curated list of popular films:

### Telugu
- Devara: Part 1 (2024)
- Pushpa 2: The Rule (2024)
- Kalki 2898 AD (2024)
- Hanu-Man (2024)
- Salaar: Part 1 (2023)
- Love Story (2021)

### Tamil
- Leo (2023)
- Vikram (2022)

### Malayalam
- Manjummel Boys (2024)
- Lucifer (2019)

### Hindi
- Stree 2 (2024)

### English
- Deadpool & Wolverine (2024)

---

## 🔌 API Endpoints

### Auth
```
POST /api/auth/register    — Create new account
POST /api/auth/login       — Login, returns JWT token
```

### Reviews
```
GET  /api/reviews/:movie_id    — Get all reviews for a movie
POST /api/reviews              — Submit a review (requires auth)
GET  /api/user/reviews         — Get current user's reviews
```

---

## 📸 Screenshots

> The app uses a dark-mode glassmorphism UI with animated movie cards, real-time filtering, and smooth page transitions.

**Home Page** — Movie grid with language & genre filters
**Movie Details** — Cast info, ratings, + community reviews
**Review Form** — 1–10 star rating slider + comment box

---

## ⚙️ Troubleshooting

### Images not loading
- The app uses Wikipedia/Wikimedia image URLs which are publicly accessible
- If a poster fails, a styled placeholder with the movie title is shown automatically

### MongoDB connection error
- Verify your `MONGODB_URI` in `.env` is correct
- Ensure your IP is whitelisted in **MongoDB Atlas → Network Access**
- Try adding `0.0.0.0/0` to allow all IPs (for development)

### Port already in use
```bash
# Kill processes on port 3000 or 5000
npx kill-port 3000
npx kill-port 5000
```

### Reviews not saving
- Make sure you are **logged in** — guest users cannot post reviews
- Check backend console for MongoDB connection errors

---

## 🔐 Authentication Flow

1. User registers with **name, email, password**
2. Password is hashed with **bcryptjs** before storing
3. On login, server returns a **JWT token**
4. Token is saved in **localStorage** on the client
5. Token is sent as `Authorization: Bearer <token>` header for protected routes

---

## 🤖 AI Movie Search (Optional)

The app integrates **Google Gemini AI** to provide dynamic movie search:

- When a user searches for a movie not in the local list, Gemini AI generates movie data
- Falls back to the local curated movie list if the API is unavailable or quota is exceeded
- To enable: Set `GEMINI_API_KEY` in `.env` and `VITE_GEMINI_API_KEY` in `frontend/.env`

---

## 📜 License

This project is for educational/personal use.

---

## 👨‍💻 Author

Built with ❤️ for movie lovers.

> **CineStore** — *Your community for movie reviews.*
