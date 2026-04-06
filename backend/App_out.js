import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/C:/Users/HP/Downloads/cinereview (2)/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f3f69c27"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$();
import __vite__cjsImport1_react from "/@fs/C:/Users/HP/Downloads/cinereview (2)/node_modules/.vite/deps/react.js?v=f3f69c27"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Link,
  useParams
} from "/@fs/C:/Users/HP/Downloads/cinereview (2)/node_modules/.vite/deps/react-router-dom.js?v=f3f69c27";
import { motion, AnimatePresence } from "/@fs/C:/Users/HP/Downloads/cinereview (2)/node_modules/.vite/deps/motion_react.js?v=f3f69c27";
import {
  Search,
  Star,
  User,
  LogOut,
  Film,
  ChevronRight,
  Languages,
  ArrowLeft,
  MessageSquare,
  Loader2,
  Play,
  Home,
  Compass,
  TrendingUp,
  Heart
} from "/@fs/C:/Users/HP/Downloads/cinereview (2)/node_modules/.vite/deps/lucide-react.js?v=f3f69c27";
import { clsx } from "/@fs/C:/Users/HP/Downloads/cinereview (2)/node_modules/.vite/deps/clsx.js?v=f3f69c27";
import { twMerge } from "/@fs/C:/Users/HP/Downloads/cinereview (2)/node_modules/.vite/deps/tailwind-merge.js?v=f3f69c27";
import { searchMovies, getMovieDetails } from "/src/services/geminiService.ts";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const BottomNav = () => {
  _s();
  const navigate = useNavigate();
  const location = window.location.pathname;
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Compass, label: "Explore", path: "/explore" },
    { icon: MessageSquare, label: "Reviews", path: "/library" },
    { icon: User, label: "Profile", path: "/profile" }
  ];
  return /* @__PURE__ */ jsxDEV("nav", { className: "fixed bottom-0 left-0 right-0 bg-bg/80 backdrop-blur-xl border-t border-white/5 px-6 py-3 flex justify-between items-center md:hidden z-50", children: navItems.map(
    (item) => /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => navigate(item.path),
        className: cn(
          "flex flex-col items-center gap-1 transition-all",
          location === item.path ? "text-accent" : "text-white/40"
        ),
        children: [
          /* @__PURE__ */ jsxDEV(item.icon, { className: "w-6 h-6" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-medium uppercase tracking-widest", children: item.label }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this)
        ]
      },
      item.label,
      true,
      {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    )
  ) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
};
_s(BottomNav, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = BottomNav;
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg text-white selection:bg-accent selection:text-black", children: [
    children,
    /* @__PURE__ */ jsxDEV(BottomNav, {}, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
};
_c2 = Layout;
const Button = React.forwardRef(
  _c3 = ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-black hover:bg-accent/90",
      secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
      ghost: "bg-transparent text-white hover:bg-white/5"
    };
    return /* @__PURE__ */ jsxDEV(
      "button",
      {
        ref,
        className: cn(
          "px-6 py-2.5 rounded-full font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2",
          variants[variant],
          className
        ),
        ...props
      },
      void 0,
      false,
      {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 88,
        columnNumber: 5
      },
      this
    );
  }
);
_c4 = Button;
const Input = React.forwardRef(
  _c5 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    "input",
    {
      ref,
      className: cn(
        "w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 103,
      columnNumber: 1
    },
    this
  )
);
_c6 = Input;
const AuthPage = ({ type }) => {
  _s2();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/auth/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex items-center justify-center p-6 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 -z-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 opacity-10 blur-[1px] scale-105 pointer-events-none", children: [
      [
        "https://picsum.photos/seed/movie1/300/450",
        "https://picsum.photos/seed/movie2/300/450",
        "https://picsum.photos/seed/movie3/300/450",
        "https://picsum.photos/seed/movie4/300/450",
        "https://picsum.photos/seed/movie5/300/450",
        "https://picsum.photos/seed/movie6/300/450",
        "https://picsum.photos/seed/movie7/300/450",
        "https://picsum.photos/seed/movie8/300/450",
        "https://picsum.photos/seed/movie9/300/450",
        "https://picsum.photos/seed/movie10/300/450",
        "https://picsum.photos/seed/movie11/300/450",
        "https://picsum.photos/seed/movie12/300/450"
      ].map(
        (url, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "aspect-[2/3] rounded-xl overflow-hidden bg-white/5",
            children: /* @__PURE__ */ jsxDEV("img", { src: url, className: "w-full h-full object-cover", alt: "", referrerPolicy: "no-referrer", loading: "lazy" }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this)
          },
          i,
          false,
          {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 166,
            columnNumber: 9
          },
          this
        )
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/80 to-bg/95" }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "w-full max-w-md glass p-8 rounded-[2rem]",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 bg-accent rounded-2xl flex items-center justify-center rotate-12", children: /* @__PURE__ */ jsxDEV(Film, { className: "text-black w-8 h-8" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 183,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 182,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold text-center mb-2", children: type === "login" ? "Welcome Back" : "Create Account" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 187,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-white/50 text-center mb-8", children: type === "login" ? "Sign in to your CineReview account" : "Join our community of movie lovers" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 190,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            type === "signup" && /* @__PURE__ */ jsxDEV(
              Input,
              {
                placeholder: "Username",
                value: username,
                onChange: (e) => setUsername(e.target.value),
                required: true
              },
              void 0,
              false,
              {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 196,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                type: "email",
                placeholder: "Email Address",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true
              },
              void 0,
              false,
              {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 203,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                type: "password",
                placeholder: "Password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                required: true
              },
              void 0,
              false,
              {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 210,
                columnNumber: 11
              },
              this
            ),
            error && /* @__PURE__ */ jsxDEV("p", { className: "text-red-400 text-sm", children: error }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 217,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { type: "submit", className: "w-full h-12", disabled: loading, children: loading ? /* @__PURE__ */ jsxDEV(Loader2, { className: "animate-spin" }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 219,
              columnNumber: 24
            }, this) : type === "login" ? "Sign In" : "Sign Up" }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 218,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 194,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-center text-white/50 text-sm", children: [
            type === "login" ? "Don't have an account? " : "Already have an account? ",
            /* @__PURE__ */ jsxDEV(Link, { to: type === "login" ? "/signup" : "/login", className: "text-accent hover:underline", children: type === "login" ? "Sign Up" : "Sign In" }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 225,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 223,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 177,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
};
_s2(AuthPage, "SsJ0HxpxAa/N5gDN7PQbOWbkXQQ=", false, function() {
  return [useNavigate];
});
_c7 = AuthPage;
const HomePage = () => {
  _s3();
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  const genres = ["Comedy", "Drama", "Love", "Adventure", "Action"];
  const languages = ["Telugu", "Hindi", "English", "Tamil", "Malayalam"];
  const fetchUserReviews = async () => {
    try {
      const res = await fetch("/api/user/reviews", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUserReviews(data);
      }
    } catch (error2) {
      console.error("Failed to fetch user reviews", error2);
    }
  };
  const handleSearch = async (searchQuery = query, searchLang = language, searchGenre = genre) => {
    if (!searchQuery && !searchLang && !searchGenre) return;
    setLoading(true);
    setError(null);
    let finalQuery = searchQuery;
    if (searchLang === "Telugu" && !searchQuery && !searchGenre) {
      finalQuery = "Prabhas movies";
    } else if (searchGenre) {
      finalQuery = searchQuery ? `${searchGenre} ${searchQuery}` : `${searchGenre} movies`;
    }
    try {
      const results = await searchMovies(finalQuery, searchLang);
      setMovies(results);
    } catch (err) {
      if (err.message === "RATE_LIMIT_EXCEEDED") {
        setError("Mawa, Gemini API quota ayipoyindi! Please try again in 1 minute or refresh.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!query && !language && !genre) {
      handleSearch("Trending movies", "", "");
    }
    fetchUserReviews();
  }, []);
  useEffect(() => {
    if (language || genre) {
      handleSearch(query, language, genre);
    }
  }, [language, genre]);
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return /* @__PURE__ */ jsxDEV(Layout, { children: /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "p-6 flex items-center justify-between max-w-7xl mx-auto sticky top-0 bg-bg/50 backdrop-blur-md z-40", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(var(--accent),0.3)]", children: /* @__PURE__ */ jsxDEV(Film, { className: "text-black w-5 h-5" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 319,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 318,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold tracking-tighter", children: "CineStore" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 321,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 317,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex flex-col items-end", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: user.username }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 325,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-white/40", children: user.email }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 326,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 324,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => navigate("/profile"),
            className: "w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden",
            children: /* @__PURE__ */ jsxDEV(User, { className: "w-5 h-5 text-white/60" }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 332,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 328,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 323,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 316,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "px-6 mb-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[16/7] md:aspect-[21/7] rounded-[2.5rem] overflow-hidden group", children: [
      /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: "https://picsum.photos/seed/trending/1920/1080",
          className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
          alt: "Featured"
        },
        void 0,
        false,
        {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 340,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 345,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-8 left-8 right-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 rounded bg-accent text-black text-[10px] font-bold uppercase tracking-tighter", children: "Trending Now" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 348,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-white/60 text-xs font-medium", children: "#1 in Movies Today" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 349,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 347,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: "Discover Your Next Favorite Story" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 351,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Button, { onClick: () => handleSearch("Trending movies"), children: "Explore Now" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 352,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 346,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 339,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 338,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "px-6 mb-12 max-w-7xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxDEV(Search, { className: "absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-accent transition-colors" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 360,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            placeholder: "Search movies, actors, genres...",
            className: "w-full bg-white/5 border border-white/10 rounded-[2rem] pl-16 pr-6 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-white/20",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && handleSearch()
          },
          void 0,
          false,
          {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 361,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 359,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 uppercase tracking-widest font-mono ml-4", children: "Select Language" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 374,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 overflow-x-auto pb-2 no-scrollbar", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => {
                  setLanguage("");
                  setGenre("");
                },
                className: cn(
                  "px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                  language === "" ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(var(--accent),0.3)]" : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                ),
                children: "All Languages"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 376,
                columnNumber: 17
              },
              this
            ),
            languages.map(
              (l) => /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    setLanguage(l);
                    setGenre("");
                  },
                  className: cn(
                    "px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                    language === l ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(var(--accent),0.3)]" : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                  ),
                  children: l
                },
                l,
                false,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 388,
                  columnNumber: 17
                },
                this
              )
            )
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 375,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 373,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 uppercase tracking-widest font-mono ml-4", children: language ? `${language} Genres` : "Popular Genres" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 406,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 overflow-x-auto pb-2 no-scrollbar", children: genres.map(
            (g) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => setGenre(genre === g ? "" : g),
                className: cn(
                  "px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                  genre === g ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(var(--accent),0.3)]" : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                ),
                children: g
              },
              g,
              false,
              {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 411,
                columnNumber: 17
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 409,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 405,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 371,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 358,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV(TrendingUp, { className: "text-accent" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 433,
            columnNumber: 15
          }, this),
          genre ? `${genre} Movies` : query ? `Results for "${query}"` : "Recommended for You"
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 432,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxDEV("button", { className: "p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsxDEV(Languages, { className: "w-4 h-4 text-white/40" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 438,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 437,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 436,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 431,
        columnNumber: 11
      }, this),
      error ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-red-500/10 border border-red-500/20 p-6 rounded-3xl inline-block max-w-md", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-red-400 font-bold mb-2", children: "Oops! Quota Issue" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 446,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-white/60 text-sm", children: error }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 447,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            variant: "secondary",
            className: "mt-4 border-red-500/20 hover:bg-red-500/10 text-red-400",
            onClick: () => handleSearch(),
            children: "Try Again"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 448,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 445,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 444,
        columnNumber: 11
      }, this) : loading ? /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6", children: [...Array(10)].map(
        (_, i) => /* @__PURE__ */ jsxDEV("div", { className: "aspect-[2/3] rounded-[2rem] bg-white/5 animate-pulse" }, i, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 460,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 458,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "popLayout", children: movies.map(
        (movie, idx) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { delay: Math.min(idx * 0.03, 0.3) },
            onClick: () => navigate(`/movie/${movie.id}`),
            className: "group cursor-pointer",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[2/3] rounded-[2rem] overflow-hidden mb-4 shadow-xl border border-white/5", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: movie.posterUrl,
                    alt: movie.title,
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                    referrerPolicy: "no-referrer"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 477,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 text-accent mb-1", children: [
                    /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current" }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 485,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold", children: movie.rating }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 486,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 484,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/60 line-clamp-2", children: movie.description }, void 0, false, {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 488,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 483,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxDEV(Heart, { className: "w-4 h-4 text-white" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 491,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 490,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 476,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-lg leading-tight group-hover:text-accent transition-colors truncate", children: movie.title }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 494,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mt-1", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white/40 font-mono uppercase tracking-widest", children: [
                  movie.year,
                  " • ",
                  movie.language
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 496,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      navigate(`/movie/${movie.id}#reviews`);
                    },
                    className: "text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 hover:underline",
                    children: [
                      "Review ",
                      /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-3 h-3" }, void 0, false, {
                        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                        lineNumber: 504,
                        columnNumber: 32
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 497,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 495,
                columnNumber: 21
              }, this)
            ]
          },
          movie.id,
          true,
          {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 467,
            columnNumber: 15
          },
          this
        )
      ) }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 465,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 464,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 430,
      columnNumber: 9
    }, this),
    userReviews.length > 0 && /* @__PURE__ */ jsxDEV("section", { className: "px-6 py-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-8 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(MessageSquare, { className: "text-accent" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 518,
          columnNumber: 15
        }, this),
        "Your Recent Activity"
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 517,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: userReviews.slice(0, 3).map(
        (rev, idx) => /* @__PURE__ */ jsxDEV("div", { className: "glass p-6 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-colors group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-accent group-hover:underline cursor-pointer", onClick: () => navigate(`/movie/${rev.movie_id}`), children: rev.movie_title }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 525,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 text-accent", children: [
              /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 529,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: rev.rating }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 530,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 528,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 524,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-white/60 text-sm italic line-clamp-2", children: [
            '"',
            rev.comment,
            '"'
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 533,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/20 uppercase tracking-widest font-mono mt-4", children: new Date(rev.created_at).toLocaleDateString() }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 534,
            columnNumber: 19
          }, this)
        ] }, idx, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 523,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 521,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 516,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 314,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 313,
    columnNumber: 5
  }, this);
};
_s3(HomePage, "/M2Kn9eJBf1cDus9iCE5o8gZo8c=", false, function() {
  return [useNavigate];
});
_c8 = HomePage;
const MovieDetailsPage = () => {
  _s4();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [newReviewId, setNewReviewId] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const reviewsRef = React.useRef(null);
  const formRef = React.useRef(null);
  const fetchReviews = async () => {
    if (!id) return;
    try {
      const revRes = await fetch(`/api/reviews/${id}`);
      const revData = await revRes.json();
      setReviews(revData);
    } catch (error2) {
      console.error("Failed to fetch reviews", error2);
    }
  };
  const fetchDetails = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const data = await getMovieDetails(id);
      setMovie(data);
      await fetchReviews();
    } catch (err) {
      if (err.message === "RATE_LIMIT_EXCEEDED") {
        setError("Mawa, quota limit hit ayindi. Please wait a bit!");
      } else {
        setError("Failed to load movie details.");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [id]);
  useEffect(() => {
    if (!loading && window.location.hash === "#reviews") {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [loading]);
  const handleReview = async (e) => {
    e.preventDefault();
    if (!movie) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          movie_id: id,
          // Use the ID from URL to ensure consistency
          movie_title: movie.title,
          rating,
          comment
        })
      });
      if (res.ok) {
        const result = await res.json();
        setComment("");
        setRating(5);
        await fetchReviews();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3e3);
        if (result.reviewId) {
          setNewReviewId(result.reviewId);
          setTimeout(() => setNewReviewId(null), 5e3);
        }
        reviewsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        const err = await res.json();
        alert(err.error || "Failed to post review");
      }
    } catch (error2) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Loader2, { className: "w-12 h-12 text-accent animate-spin" }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 652,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 651,
    columnNumber: 5
  }, this);
  if (error || !movie) return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col items-center justify-center p-6 text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "glass p-10 rounded-[3rem] max-w-md", children: [
    /* @__PURE__ */ jsxDEV(Film, { className: "w-16 h-16 text-accent mx-auto mb-6 opacity-20" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 659,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold mb-4", children: error || "Movie not found" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 660,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text-white/40 mb-8", children: error ? "Gemini API is currently busy or quota is exhausted. Please try again in a minute." : "We couldn't find the details for this movie." }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 661,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Button, { onClick: () => navigate("/"), children: "Back to Home" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 664,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 658,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 657,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ jsxDEV(Layout, { children: /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 -z-10", children: [
      /* @__PURE__ */ jsxDEV("img", { src: movie.backdropUrl || movie.posterUrl, className: "w-full h-full object-cover opacity-10 blur-xl", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 674,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-bg/90" }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 675,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 673,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto p-6", children: [
      /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate(-1), className: "mb-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors", children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-5 h-5" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 680,
          columnNumber: 13
        }, this),
        "Back"
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 679,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-[350px_1fr] gap-12", children: [
        /* @__PURE__ */ jsxDEV(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 mb-6 relative group", children: [
            /* @__PURE__ */ jsxDEV("img", { src: movie.posterUrl, alt: movie.title, className: "w-full h-auto", referrerPolicy: "no-referrer" }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 688,
              columnNumber: 17
            }, this),
            movie.trailerUrl && /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: movie.trailerDirectUrl || movie.trailerUrl.replace("embed/", "watch?v="),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                children: /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 rounded-full bg-accent flex items-center justify-center scale-90 group-hover:scale-100 transition-transform", children: /* @__PURE__ */ jsxDEV(Play, { className: "w-10 h-10 text-black fill-current ml-1" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 697,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 696,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 690,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 687,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "glass p-6 rounded-[2rem] space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-white/40 text-sm uppercase tracking-widest font-mono", children: "Rating" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 704,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 text-accent", children: [
                /* @__PURE__ */ jsxDEV(Star, { className: "w-5 h-5 fill-current" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 706,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold", children: movie.rating }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 707,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 705,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 703,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-white/40 text-sm uppercase tracking-widest font-mono", children: "Year" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 711,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: movie.year }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 712,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 710,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-white/40 text-sm uppercase tracking-widest font-mono", children: "Language" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 715,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: movie.language }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 716,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 714,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 702,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 686,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row md:items-center gap-6 mb-6", children: [
            /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl md:text-7xl font-bold tracking-tighter", children: movie.title }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 724,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              movie.trailerUrl && /* @__PURE__ */ jsxDEV(
                Button,
                {
                  onClick: () => window.open(movie.trailerDirectUrl || movie.trailerUrl.replace("embed/", "watch?v="), "_blank"),
                  className: "bg-red-600 hover:bg-red-700 text-white border-none px-8 py-4 text-lg shadow-[0_0_30px_rgba(220,38,38,0.4)]",
                  children: [
                    /* @__PURE__ */ jsxDEV(Play, { className: "w-6 h-6 fill-current" }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 731,
                      columnNumber: 23
                    }, this),
                    "Watch Trailer"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 727,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  variant: "secondary",
                  onClick: () => formRef.current?.scrollIntoView({ behavior: "smooth" }),
                  className: "px-8 py-4 text-lg border-accent/30 text-accent hover:bg-accent/10",
                  children: [
                    /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-6 h-6" }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 740,
                      columnNumber: 21
                    }, this),
                    "Review"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 735,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 725,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 723,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2 mb-8", children: movie.genre.map(
            (g) => /* @__PURE__ */ jsxDEV("span", { className: "px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium border border-white/10", children: g }, g, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 747,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 745,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mb-12 trailer-section", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(Play, { className: "text-accent fill-current" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 757,
                  columnNumber: 21
                }, this),
                "Trailer Preview"
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 756,
                columnNumber: 19
              }, this),
              movie.trailerUrl && /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => window.open(movie.trailerDirectUrl || movie.trailerUrl.replace("embed/", "watch?v="), "_blank"),
                  className: "text-sm text-accent hover:underline flex items-center gap-1",
                  children: [
                    "Open in YouTube ",
                    /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 765,
                      columnNumber: 39
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 761,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 755,
              columnNumber: 17
            }, this),
            movie.trailerUrl ? /* @__PURE__ */ jsxDEV("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black relative", children: /* @__PURE__ */ jsxDEV(
                "iframe",
                {
                  src: movie.trailerUrl,
                  title: `${movie.title} Trailer`,
                  className: "w-full h-full",
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: true
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 773,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 772,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-6 right-6 z-20 md:hidden", children: /* @__PURE__ */ jsxDEV(
                Button,
                {
                  onClick: () => window.open(movie.trailerDirectUrl || movie.trailerUrl.replace("embed/", "watch?v="), "_blank"),
                  className: "bg-red-600 text-white rounded-full w-14 h-14 p-0 flex items-center justify-center shadow-2xl",
                  children: /* @__PURE__ */ jsxDEV(Play, { className: "w-6 h-6 fill-current ml-1" }, void 0, false, {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 787,
                    columnNumber: 26
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 783,
                  columnNumber: 24
                },
                this
              ) }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 782,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 771,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV("div", { className: "aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass flex flex-col items-center justify-center p-8 text-center gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 rounded-full bg-white/5 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Play, { className: "w-8 h-8 text-white/20" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 794,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 793,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-bold text-white/60", children: "Trailer Not Found" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 797,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white/40 mb-4", children: "Mawa, Gemini trailer link ni find cheyalekapoindi." }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 798,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    variant: "secondary",
                    onClick: () => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + " official trailer " + movie.year)}`, "_blank"),
                    children: "Search on YouTube"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 799,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 796,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 792,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 754,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-white/70 leading-relaxed mb-12", children: movie.description }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 810,
            columnNumber: 15
          }, this),
          movie.watchLinks && movie.watchLinks.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mb-12", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Film, { className: "text-accent" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 818,
                columnNumber: 21
              }, this),
              "Where to Watch"
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 817,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-4", children: movie.watchLinks.map(
              (link, idx) => /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: link.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: cn(
                    "flex items-center gap-3 px-6 py-4 rounded-2xl transition-all group border",
                    link.platform.toLowerCase().includes("net mirror") ? "bg-accent/10 border-accent/30 hover:bg-accent/20 hover:border-accent" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-accent/50"
                  ),
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { className: cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                      link.platform.toLowerCase().includes("net mirror") ? "bg-accent text-black" : "bg-accent/10 group-hover:bg-accent"
                    ), children: /* @__PURE__ */ jsxDEV(Play, { className: cn(
                      "w-5 h-5 transition-colors",
                      link.platform.toLowerCase().includes("net mirror") ? "text-black" : "text-accent group-hover:text-black"
                    ) }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 841,
                      columnNumber: 27
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 835,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/40 uppercase tracking-widest font-mono", children: link.platform.toLowerCase().includes("net mirror") ? "Mirror Link" : "Stream on" }, void 0, false, {
                        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                        lineNumber: 849,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "font-bold", children: link.platform }, void 0, false, {
                        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                        lineNumber: 852,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 848,
                      columnNumber: 25
                    }, this)
                  ]
                },
                idx,
                true,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 823,
                  columnNumber: 19
                },
                this
              )
            ) }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 821,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 816,
            columnNumber: 15
          }, this),
          movie.cast && movie.cast.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mb-12", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(User, { className: "text-accent" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 864,
                columnNumber: 21
              }, this),
              "Meet the Cast"
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 863,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4 overflow-x-auto pb-6 snap-x no-scrollbar", children: movie.cast.map(
              (member, idx) => /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: idx * 0.1 },
                  className: "glass p-3 rounded-3xl text-center group min-w-[150px] flex-shrink-0 snap-start",
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "aspect-square rounded-2xl overflow-hidden mb-3", children: /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        src: member.imageUrl,
                        alt: member.name,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        referrerPolicy: "no-referrer"
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                        lineNumber: 877,
                        columnNumber: 27
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 876,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-sm truncate", children: member.name }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 884,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 uppercase tracking-widest font-mono", children: member.role }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 885,
                      columnNumber: 25
                    }, this)
                  ]
                },
                idx,
                true,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 869,
                  columnNumber: 19
                },
                this
              )
            ) }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 867,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 862,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { ref: reviewsRef, className: "space-y-6 scroll-mt-10 mb-12", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold", children: "Community Reviews" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 895,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20", children: [
                reviews.length,
                " ",
                reviews.length === 1 ? "Review" : "Reviews"
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 896,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 894,
              columnNumber: 17
            }, this),
            reviews.length > 0 ? reviews.map(
              (rev, idx) => /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    scale: newReviewId === rev.id ? [1, 1.02, 1] : 1,
                    borderColor: newReviewId === rev.id ? "rgba(var(--accent), 0.5)" : "rgba(255, 255, 255, 0.05)"
                  },
                  transition: {
                    delay: newReviewId === rev.id ? 0 : idx * 0.1,
                    scale: { duration: 0.5, repeat: 2 }
                  },
                  className: cn(
                    "p-6 rounded-3xl border transition-all duration-500",
                    newReviewId === rev.id ? "bg-accent/5 border-accent shadow-[0_0_20px_rgba(var(--accent),0.1)]" : "border-white/5 bg-white/[0.02]"
                  ),
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-4", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold", children: rev.username ? rev.username[0].toUpperCase() : "?" }, void 0, false, {
                          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                          lineNumber: 921,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxDEV("p", { className: "font-bold", children: rev.username || "Anonymous" }, void 0, false, {
                              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                              lineNumber: 926,
                              columnNumber: 29
                            }, this),
                            newReviewId === rev.id && /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] bg-accent text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter", children: "New" }, void 0, false, {
                              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                              lineNumber: 928,
                              columnNumber: 27
                            }, this)
                          ] }, void 0, true, {
                            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                            lineNumber: 925,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/30", children: new Date(rev.created_at).toLocaleDateString() }, void 0, false, {
                            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                            lineNumber: 931,
                            columnNumber: 27
                          }, this)
                        ] }, void 0, true, {
                          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                          lineNumber: 924,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, true, {
                        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                        lineNumber: 920,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 text-accent", children: [
                        /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current" }, void 0, false, {
                          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                          lineNumber: 935,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: [
                          rev.rating,
                          "/10"
                        ] }, void 0, true, {
                          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                          lineNumber: 936,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, true, {
                        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                        lineNumber: 934,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 919,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-white/70 italic", children: [
                      '"',
                      rev.comment,
                      '"'
                    ] }, void 0, true, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 939,
                      columnNumber: 21
                    }, this)
                  ]
                },
                rev.id,
                true,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 901,
                  columnNumber: 17
                },
                this
              )
            ) : /* @__PURE__ */ jsxDEV("p", { className: "text-white/30 italic", children: "No reviews yet. Be the first to share your thoughts!" }, void 0, false, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 942,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 893,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { ref: formRef, className: "glass p-8 rounded-[2.5rem] mb-12 scroll-mt-10", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(MessageSquare, { className: "text-accent" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 949,
                columnNumber: 19
              }, this),
              "Write a Review"
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 948,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("form", { onSubmit: handleReview, className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV(AnimatePresence, { children: showSuccess && /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  className: "bg-accent/10 border border-accent/20 p-4 rounded-2xl text-accent text-sm font-bold flex items-center gap-2 overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current" }, void 0, false, {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 961,
                      columnNumber: 25
                    }, this),
                    "Review posted successfully, mawa!"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 955,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 953,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { className: "block text-sm text-white/40 uppercase tracking-widest font-mono mb-3", children: "Your Rating" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 967,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 overflow-x-auto pb-2 no-scrollbar", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                  (n) => /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => setRating(n),
                      className: cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all flex-shrink-0",
                        rating >= n ? "bg-accent text-black" : "bg-white/5 text-white/40 hover:bg-white/10"
                      ),
                      children: n
                    },
                    n,
                    false,
                    {
                      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                      lineNumber: 970,
                      columnNumber: 23
                    },
                    this
                  )
                ) }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 968,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 966,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { className: "block text-sm text-white/40 uppercase tracking-widest font-mono mb-3", children: "Your Thoughts" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 985,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "textarea",
                  {
                    className: "w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[120px]",
                    placeholder: "What did you think about the movie?",
                    value: comment,
                    onChange: (e) => setComment(e.target.value),
                    required: true
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 986,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 984,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Button, { type: "submit", className: "w-full md:w-auto", disabled: submitting, children: submitting ? /* @__PURE__ */ jsxDEV(Loader2, { className: "animate-spin" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 995,
                columnNumber: 35
              }, this) : "Post Review" }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 994,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 952,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 947,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 722,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 684,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 678,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 671,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 670,
    columnNumber: 5
  }, this);
};
_s4(MovieDetailsPage, "rvgJg2UzwT/zdP7SSkzNkyQQqL0=", false, function() {
  return [useParams, useNavigate];
});
_c9 = MovieDetailsPage;
const ExplorePage = () => /* @__PURE__ */ jsxDEV(Layout, { children: /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen p-6 pb-24", children: [
  /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-bold mb-8", children: "Explore" }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 1012,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: ["Trending", "New Releases", "Top Rated", "Coming Soon"].map(
    (category) => /* @__PURE__ */ jsxDEV("div", { className: "aspect-video glass rounded-[2rem] flex items-center justify-center border border-white/5 hover:border-accent/30 transition-all cursor-pointer group", children: /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold group-hover:text-accent", children: category }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1016,
      columnNumber: 13
    }, this) }, category, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1015,
      columnNumber: 7
    }, this)
  ) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 1013,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
  lineNumber: 1011,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
  lineNumber: 1010,
  columnNumber: 1
}, this);
_c0 = ExplorePage;
const LibraryPage = () => {
  _s5();
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchUserReviews = async () => {
    try {
      const res = await fetch("/api/user/reviews", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUserReviews(data);
      }
    } catch (error) {
      console.error("Failed to fetch user reviews", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUserReviews();
  }, []);
  return /* @__PURE__ */ jsxDEV(Layout, { children: /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen p-6 pb-24 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-bold mb-8", children: "My Reviews" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1054,
      columnNumber: 9
    }, this),
    loading ? /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center py-20", children: /* @__PURE__ */ jsxDEV(Loader2, { className: "w-12 h-12 text-accent animate-spin" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1058,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1057,
      columnNumber: 9
    }, this) : userReviews.length > 0 ? /* @__PURE__ */ jsxDEV("div", { className: "grid gap-6", children: userReviews.map(
      (rev, idx) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.1 },
          className: "glass p-6 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-all group cursor-pointer",
          onClick: () => navigate(`/movie/${rev.movie_id}`),
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-xl text-accent group-hover:underline", children: rev.movie_title }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 1072,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 text-accent", children: [
                /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 1076,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: [
                  rev.rating,
                  "/10"
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 1077,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 1075,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 1071,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-white/70 italic mb-4", children: [
              '"',
              rev.comment,
              '"'
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 1080,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/20 uppercase tracking-widest font-mono", children: new Date(rev.created_at).toLocaleDateString() }, void 0, false, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 1082,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-accent uppercase tracking-widest font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
                "View Movie ",
                /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3 h-3" }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 1086,
                  columnNumber: 32
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 1085,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
              lineNumber: 1081,
              columnNumber: 17
            }, this)
          ]
        },
        idx,
        true,
        {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1063,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1061,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "text-center py-20 glass rounded-[2.5rem] border border-dashed border-white/10", children: [
      /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-16 h-16 text-white/10 mx-auto mb-4" }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1094,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-white/30 italic", children: "Mawa, nuvvu inka reviews emi raayaledu." }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1095,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { variant: "ghost", className: "mt-4", onClick: () => navigate("/"), children: "Explore Movies" }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1096,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1093,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 1053,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 1052,
    columnNumber: 5
  }, this);
};
_s5(LibraryPage, "kWvBTxtg4BTWAaYRfMI5teVRPAw=", false, function() {
  return [useNavigate];
});
_c1 = LibraryPage;
const ProfilePage = () => {
  _s6();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchUserReviews = async () => {
    try {
      const res = await fetch("/api/user/reviews", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUserReviews(data);
      }
    } catch (error) {
      console.error("Failed to fetch user reviews", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUserReviews();
  }, []);
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return /* @__PURE__ */ jsxDEV(Layout, { children: /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen p-6 pb-24 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-12", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-bold", children: "Profile" }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: logout, className: "p-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold uppercase tracking-widest", children: "Logout" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(LogOut, { className: "w-5 h-5" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1144,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1142,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1140,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "glass p-8 rounded-[2.5rem] border border-white/5 mb-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 rounded-full bg-accent flex items-center justify-center text-4xl font-bold text-black shadow-[0_0_30px_rgba(var(--accent),0.3)]", children: user.username ? user.username[0].toUpperCase() : "?" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold tracking-tighter", children: user.username }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 1154,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-white/40 font-mono text-sm", children: user.email }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 1155,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1153,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1149,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-3xl bg-white/5 border border-white/5 text-center", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-accent text-3xl font-bold", children: userReviews.length }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 1161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 uppercase tracking-widest font-mono", children: "Total Reviews" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 1162,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-3xl bg-white/5 border border-white/5 text-center", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-accent text-3xl font-bold", children: "0" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 1165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 uppercase tracking-widest font-mono", children: "Watchlist" }, void 0, false, {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 1166,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1164,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1159,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1148,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(MessageSquare, { className: "text-accent" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1173,
          columnNumber: 13
        }, this),
        "Your Reviews"
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1172,
        columnNumber: 11
      }, this),
      loading ? /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center py-12", children: /* @__PURE__ */ jsxDEV(Loader2, { className: "w-8 h-8 text-accent animate-spin" }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1179,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1178,
        columnNumber: 11
      }, this) : userReviews.length > 0 ? /* @__PURE__ */ jsxDEV("div", { className: "grid gap-6", children: userReviews.map(
        (rev, idx) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: idx * 0.1 },
            className: "glass p-6 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-all group cursor-pointer",
            onClick: () => navigate(`/movie/${rev.movie_id}`),
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-xl text-accent group-hover:underline", children: rev.movie_title }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 1193,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 text-accent", children: [
                  /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current" }, void 0, false, {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 1197,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: [
                    rev.rating,
                    "/10"
                  ] }, void 0, true, {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 1198,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 1196,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 1192,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white/70 italic mb-4", children: [
                '"',
                rev.comment,
                '"'
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 1201,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/20 uppercase tracking-widest font-mono", children: new Date(rev.created_at).toLocaleDateString() }, void 0, false, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 1203,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-accent uppercase tracking-widest font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
                  "View Movie ",
                  /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3 h-3" }, void 0, false, {
                    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                    lineNumber: 1207,
                    columnNumber: 34
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                  lineNumber: 1206,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
                lineNumber: 1202,
                columnNumber: 19
              }, this)
            ]
          },
          idx,
          true,
          {
            fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
            lineNumber: 1184,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1182,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "text-center py-20 glass rounded-[2.5rem] border border-dashed border-white/10", children: [
        /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-12 h-12 text-white/10 mx-auto mb-4" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1215,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-white/30 italic", children: "Mawa, nuvvu inka reviews emi raayaledu." }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1216,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Button, { variant: "ghost", className: "mt-4", onClick: () => navigate("/"), children: "Explore Movies" }, void 0, false, {
          fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
          lineNumber: 1217,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
        lineNumber: 1214,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1171,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 1139,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 1138,
    columnNumber: 5
  }, this);
};
_s6(ProfilePage, "kWvBTxtg4BTWAaYRfMI5teVRPAw=", false, function() {
  return [useNavigate];
});
_c10 = ProfilePage;
export default function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return /* @__PURE__ */ jsxDEV(Router, { children: /* @__PURE__ */ jsxDEV(Routes, { children: [
    /* @__PURE__ */ jsxDEV(Route, { path: "/login", element: !isAuthenticated ? /* @__PURE__ */ jsxDEV(AuthPage, { type: "login" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1234,
      columnNumber: 58
    }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1234,
      columnNumber: 86
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1234,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/signup", element: !isAuthenticated ? /* @__PURE__ */ jsxDEV(AuthPage, { type: "signup" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1235,
      columnNumber: 59
    }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1235,
      columnNumber: 88
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1235,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: isAuthenticated ? /* @__PURE__ */ jsxDEV(HomePage, {}, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1236,
      columnNumber: 52
    }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1236,
      columnNumber: 67
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1236,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/explore", element: isAuthenticated ? /* @__PURE__ */ jsxDEV(ExplorePage, {}, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1237,
      columnNumber: 59
    }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1237,
      columnNumber: 77
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1237,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/library", element: isAuthenticated ? /* @__PURE__ */ jsxDEV(LibraryPage, {}, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1238,
      columnNumber: 59
    }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1238,
      columnNumber: 77
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1238,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/profile", element: isAuthenticated ? /* @__PURE__ */ jsxDEV(ProfilePage, {}, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1239,
      columnNumber: 59
    }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1239,
      columnNumber: 77
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1239,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/movie/:id", element: isAuthenticated ? /* @__PURE__ */ jsxDEV(MovieDetailsPage, {}, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1240,
      columnNumber: 61
    }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1240,
      columnNumber: 84
    }, this) }, void 0, false, {
      fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
      lineNumber: 1240,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 1233,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx",
    lineNumber: 1232,
    columnNumber: 5
  }, this);
}
_c11 = App;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11;
$RefreshReg$(_c, "BottomNav");
$RefreshReg$(_c2, "Layout");
$RefreshReg$(_c3, "Button$React.forwardRef");
$RefreshReg$(_c4, "Button");
$RefreshReg$(_c5, "Input$React.forwardRef");
$RefreshReg$(_c6, "Input");
$RefreshReg$(_c7, "AuthPage");
$RefreshReg$(_c8, "HomePage");
$RefreshReg$(_c9, "MovieDetailsPage");
$RefreshReg$(_c0, "ExplorePage");
$RefreshReg$(_c1, "LibraryPage");
$RefreshReg$(_c10, "ProfilePage");
$RefreshReg$(_c11, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/HP/Downloads/cinereview (2)/frontend/src/App.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUEsU0FRQSxLQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FVQTtBQUVKO0FBQUNDLE9BaEJ1QkY7QUFBRyxJQUFBRyxJQUFBNUssS0FBQUcsS0FBQVMsS0FBQUUsS0FBQUMsS0FBQThKLEtBQUFDLEtBQUFDLEtBQUFYLEtBQUFZLEtBQUFDLE1BQUFOO0FBQUEsYUFBQUMsSUFBQTtBQUFBLGFBQUE1SyxLQUFBO0FBQUEsYUFBQUcsS0FBQTtBQUFBLGFBQUFTLEtBQUE7QUFBQSxhQUFBRSxLQUFBO0FBQUEsYUFBQUMsS0FBQTtBQUFBLGFBQUE4SixLQUFBO0FBQUEsYUFBQUMsS0FBQTtBQUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBWCxLQUFBO0FBQUEsYUFBQVksS0FBQTtBQUFBLGFBQUFDLE1BQUE7QUFBQSxhQUFBTixNQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdmlnYXRlIiwidXNlTmF2aWdhdGUiLCJMaW5rIiwidXNlUGFyYW1zIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiU2VhcmNoIiwiU3RhciIsIlVzZXIiLCJMb2dPdXQiLCJGaWxtIiwiQ2hldnJvblJpZ2h0IiwiTGFuZ3VhZ2VzIiwiQXJyb3dMZWZ0IiwiTWVzc2FnZVNxdWFyZSIsIkxvYWRlcjIiLCJQbGF5IiwiSG9tZSIsIkNvbXBhc3MiLCJUcmVuZGluZ1VwIiwiSGVhcnQiLCJjbHN4IiwidHdNZXJnZSIsInNlYXJjaE1vdmllcyIsImdldE1vdmllRGV0YWlscyIsImNuIiwiaW5wdXRzIiwiQm90dG9tTmF2IiwiX3MiLCJuYXZpZ2F0ZSIsImxvY2F0aW9uIiwid2luZG93IiwicGF0aG5hbWUiLCJuYXZJdGVtcyIsImljb24iLCJsYWJlbCIsInBhdGgiLCJtYXAiLCJpdGVtIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJfYzIiLCJCdXR0b24iLCJmb3J3YXJkUmVmIiwiX2MzIiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInByb3BzIiwicmVmIiwidmFyaWFudHMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZ2hvc3QiLCJfYzQiLCJJbnB1dCIsIl9jNSIsIl9jNiIsIkF1dGhQYWdlIiwidHlwZSIsIl9zMiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwidXNlciIsImhyZWYiLCJlcnIiLCJtZXNzYWdlIiwidXJsIiwiaSIsIm9wYWNpdHkiLCJ5IiwidGFyZ2V0IiwidmFsdWUiLCJIb21lUGFnZSIsIl9zMyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiZ2VucmUiLCJzZXRHZW5yZSIsIm1vdmllcyIsInNldE1vdmllcyIsInVzZXJSZXZpZXdzIiwic2V0VXNlclJldmlld3MiLCJwYXJzZSIsImdldEl0ZW0iLCJnZW5yZXMiLCJsYW5ndWFnZXMiLCJmZXRjaFVzZXJSZXZpZXdzIiwiY29uc29sZSIsImhhbmRsZVNlYXJjaCIsInNlYXJjaFF1ZXJ5Iiwic2VhcmNoTGFuZyIsInNlYXJjaEdlbnJlIiwiZmluYWxRdWVyeSIsInJlc3VsdHMiLCJsb2dvdXQiLCJjbGVhciIsImtleSIsImwiLCJnIiwiQXJyYXkiLCJfIiwibW92aWUiLCJpZHgiLCJzY2FsZSIsImRlbGF5IiwiTWF0aCIsIm1pbiIsImlkIiwicG9zdGVyVXJsIiwidGl0bGUiLCJyYXRpbmciLCJkZXNjcmlwdGlvbiIsInllYXIiLCJzdG9wUHJvcGFnYXRpb24iLCJsZW5ndGgiLCJzbGljZSIsInJldiIsIm1vdmllX2lkIiwibW92aWVfdGl0bGUiLCJjb21tZW50IiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJNb3ZpZURldGFpbHNQYWdlIiwiX3M0Iiwic2V0TW92aWUiLCJyZXZpZXdzIiwic2V0UmV2aWV3cyIsInNldFJhdGluZyIsInNldENvbW1lbnQiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsIm5ld1Jldmlld0lkIiwic2V0TmV3UmV2aWV3SWQiLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwicmV2aWV3c1JlZiIsInVzZVJlZiIsImZvcm1SZWYiLCJmZXRjaFJldmlld3MiLCJyZXZSZXMiLCJyZXZEYXRhIiwiZmV0Y2hEZXRhaWxzIiwiaGFzaCIsInNldFRpbWVvdXQiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaGFuZGxlUmV2aWV3IiwicmVzdWx0IiwicmV2aWV3SWQiLCJhbGVydCIsImJhY2tkcm9wVXJsIiwieCIsInRyYWlsZXJVcmwiLCJ0cmFpbGVyRGlyZWN0VXJsIiwicmVwbGFjZSIsIm9wZW4iLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3YXRjaExpbmtzIiwibGluayIsInBsYXRmb3JtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNhc3QiLCJtZW1iZXIiLCJpbWFnZVVybCIsIm5hbWUiLCJyb2xlIiwiYm9yZGVyQ29sb3IiLCJkdXJhdGlvbiIsInJlcGVhdCIsInRvVXBwZXJDYXNlIiwiaGVpZ2h0IiwibiIsIkV4cGxvcmVQYWdlIiwiY2F0ZWdvcnkiLCJfYzAiLCJMaWJyYXJ5UGFnZSIsIl9zNSIsIlByb2ZpbGVQYWdlIiwiX3M2IiwiQXBwIiwiaXNBdXRoZW50aWNhdGVkIiwiX2MxMSIsIl9jIiwiX2M3IiwiX2M4IiwiX2M5IiwiX2MxIiwiX2MxMCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBcbiAgUm91dGVzLCBcbiAgUm91dGUsIFxuICBOYXZpZ2F0ZSwgXG4gIHVzZU5hdmlnYXRlLFxuICBMaW5rLFxuICB1c2VQYXJhbXNcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ21vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBcbiAgU2VhcmNoLCBcbiAgU3RhciwgXG4gIFVzZXIsIFxuICBMb2dPdXQsIFxuICBGaWxtLCBcbiAgQ2hldnJvblJpZ2h0LCBcbiAgTGFuZ3VhZ2VzLFxuICBBcnJvd0xlZnQsXG4gIE1lc3NhZ2VTcXVhcmUsXG4gIExvYWRlcjIsXG4gIFBsYXksXG4gIEhvbWUsXG4gIENvbXBhc3MsXG4gIExpYnJhcnksXG4gIFRyZW5kaW5nVXAsXG4gIEhlYXJ0XG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBjbHN4LCB0eXBlIENsYXNzVmFsdWUgfSBmcm9tICdjbHN4JztcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tICd0YWlsd2luZC1tZXJnZSc7XG5pbXBvcnQgeyBzZWFyY2hNb3ZpZXMsIGdldE1vdmllRGV0YWlscywgdHlwZSBNb3ZpZSB9IGZyb20gJy4vc2VydmljZXMvZ2VtaW5pU2VydmljZSc7XG5cbi8vIC0tLSBVdGlscyAtLS1cbmZ1bmN0aW9uIGNuKC4uLmlucHV0czogQ2xhc3NWYWx1ZVtdKSB7XG4gIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSk7XG59XG5cbi8vIC0tLSBDb21wb25lbnRzIC0tLVxuXG5jb25zdCBCb3R0b21OYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBbXG4gICAgeyBpY29uOiBIb21lLCBsYWJlbDogJ0hvbWUnLCBwYXRoOiAnLycgfSxcbiAgICB7IGljb246IENvbXBhc3MsIGxhYmVsOiAnRXhwbG9yZScsIHBhdGg6ICcvZXhwbG9yZScgfSxcbiAgICB7IGljb246IE1lc3NhZ2VTcXVhcmUsIGxhYmVsOiAnUmV2aWV3cycsIHBhdGg6ICcvbGlicmFyeScgfSxcbiAgICB7IGljb246IFVzZXIsIGxhYmVsOiAnUHJvZmlsZScsIHBhdGg6ICcvcHJvZmlsZScgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctYmcvODAgYmFja2Ryb3AtYmx1ci14bCBib3JkZXItdCBib3JkZXItd2hpdGUvNSBweC02IHB5LTMgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1kOmhpZGRlbiB6LTUwXCI+XG4gICAgICB7bmF2SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoaXRlbS5wYXRoKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMSB0cmFuc2l0aW9uLWFsbFwiLFxuICAgICAgICAgICAgbG9jYXRpb24gPT09IGl0ZW0ucGF0aCA/IFwidGV4dC1hY2NlbnRcIiA6IFwidGV4dC13aGl0ZS80MFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApKX1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmcgdGV4dC13aGl0ZSBzZWxlY3Rpb246YmctYWNjZW50IHNlbGVjdGlvbjp0ZXh0LWJsYWNrXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8Qm90dG9tTmF2IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4gJiB7IHZhcmlhbnQ/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdnaG9zdCcgfT4oXG4gICh7IGNsYXNzTmFtZSwgdmFyaWFudCA9ICdwcmltYXJ5JywgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgICBwcmltYXJ5OiAnYmctYWNjZW50IHRleHQtYmxhY2sgaG92ZXI6YmctYWNjZW50LzkwJyxcbiAgICAgIHNlY29uZGFyeTogJ2JnLXdoaXRlLzEwIHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvMjAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCcsXG4gICAgICBnaG9zdDogJ2JnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvNScsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAncHgtNiBweS0yLjUgcm91bmRlZC1mdWxsIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsIGFjdGl2ZTpzY2FsZS05NSBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTInLFxuICAgICAgICAgIHZhcmlhbnRzW3ZhcmlhbnRdLFxuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbik7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgJ3ctZnVsbCBiZy13aGl0ZS81IGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC0yeGwgcHgtNCBweS0zIHRleHQtd2hpdGUgcGxhY2Vob2xkZXI6dGV4dC13aGl0ZS8zMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYWNjZW50LzUwIHRyYW5zaXRpb24tYWxsJyxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbik7XG5cbi8vIC0tLSBQYWdlcyAtLS1cblxuY29uc3QgQXV0aFBhZ2UgPSAoeyB0eXBlIH06IHsgdHlwZTogJ2xvZ2luJyB8ICdzaWdudXAnIH0pID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcignJyk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYXV0aC8ke3R5cGV9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSB9KSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IpO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YS51c2VyKSk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTYgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICB7LyogTW92aWUgUG9zdGVyIEJhY2tncm91bmQgR3JpZCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCAtei0xMCBncmlkIGdyaWQtY29scy0zIG1kOmdyaWQtY29scy00IGxnOmdyaWQtY29scy02IGdhcC00IG9wYWNpdHktMTAgYmx1ci1bMXB4XSBzY2FsZS0xMDUgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuICAgICAgICB7W1xuICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9tb3ZpZTEvMzAwLzQ1MCcsXG4gICAgICAgICAgJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL21vdmllMi8zMDAvNDUwJyxcbiAgICAgICAgICAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvbW92aWUzLzMwMC80NTAnLFxuICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9tb3ZpZTQvMzAwLzQ1MCcsXG4gICAgICAgICAgJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL21vdmllNS8zMDAvNDUwJyxcbiAgICAgICAgICAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvbW92aWU2LzMwMC80NTAnLFxuICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9tb3ZpZTcvMzAwLzQ1MCcsXG4gICAgICAgICAgJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL21vdmllOC8zMDAvNDUwJyxcbiAgICAgICAgICAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvbW92aWU5LzMwMC80NTAnLFxuICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9tb3ZpZTEwLzMwMC80NTAnLFxuICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9tb3ZpZTExLzMwMC80NTAnLFxuICAgICAgICAgICdodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9tb3ZpZTEyLzMwMC80NTAnLFxuICAgICAgICBdLm1hcCgodXJsLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1bMi8zXSByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZS81XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz17dXJsfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIGFsdD1cIlwiIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIiBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICB7LyogT3ZlcmxheSBmb3IgcmVhZGFiaWxpdHkgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iIGZyb20tYmcvOTUgdmlhLWJnLzgwIHRvLWJnLzk1XCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIGdsYXNzIHAtOCByb3VuZGVkLVsycmVtXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgYmctYWNjZW50IHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdGF0ZS0xMlwiPlxuICAgICAgICAgICAgPEZpbG0gY2xhc3NOYW1lPVwidGV4dC1ibGFjayB3LTggaC04XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgIHt0eXBlID09PSAnbG9naW4nID8gJ1dlbGNvbWUgQmFjaycgOiAnQ3JlYXRlIEFjY291bnQnfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzUwIHRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICB7dHlwZSA9PT0gJ2xvZ2luJyA/ICdTaWduIGluIHRvIHlvdXIgQ2luZVJldmlldyBhY2NvdW50JyA6ICdKb2luIG91ciBjb21tdW5pdHkgb2YgbW92aWUgbG92ZXJzJ31cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIHt0eXBlID09PSAnc2lnbnVwJyAmJiAoXG4gICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIFxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwIHRleHQtc21cIj57ZXJyb3J9PC9wPn1cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMlwiIGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlcjIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluXCIgLz4gOiAodHlwZSA9PT0gJ2xvZ2luJyA/ICdTaWduIEluJyA6ICdTaWduIFVwJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyIHRleHQtd2hpdGUvNTAgdGV4dC1zbVwiPlxuICAgICAgICAgIHt0eXBlID09PSAnbG9naW4nID8gXCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFwiIDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gXCJ9XG4gICAgICAgICAgPExpbmsgdG89e3R5cGUgPT09ICdsb2dpbicgPyAnL3NpZ251cCcgOiAnL2xvZ2luJ30gY2xhc3NOYW1lPVwidGV4dC1hY2NlbnQgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICB7dHlwZSA9PT0gJ2xvZ2luJyA/ICdTaWduIFVwJyA6ICdTaWduIEluJ31cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtnZW5yZSwgc2V0R2VucmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8TW92aWVbXT4oW10pO1xuICBjb25zdCBbdXNlclJldmlld3MsIHNldFVzZXJSZXZpZXdzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSB8fCAne30nKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IGdlbnJlcyA9IFsnQ29tZWR5JywgJ0RyYW1hJywgJ0xvdmUnLCAnQWR2ZW50dXJlJywgJ0FjdGlvbiddO1xuICBjb25zdCBsYW5ndWFnZXMgPSBbJ1RlbHVndScsICdIaW5kaScsICdFbmdsaXNoJywgJ1RhbWlsJywgJ01hbGF5YWxhbSddO1xuXG4gIGNvbnN0IGZldGNoVXNlclJldmlld3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXIvcmV2aWV3cycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBzZXRVc2VyUmV2aWV3cyhkYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIHJldmlld3NcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoc2VhcmNoUXVlcnk6IHN0cmluZyA9IHF1ZXJ5LCBzZWFyY2hMYW5nOiBzdHJpbmcgPSBsYW5ndWFnZSwgc2VhcmNoR2VucmU6IHN0cmluZyA9IGdlbnJlKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hRdWVyeSAmJiAhc2VhcmNoTGFuZyAmJiAhc2VhcmNoR2VucmUpIHJldHVybjtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIFxuICAgIC8vIENvbnN0cnVjdCBhIG1vcmUgc3BlY2lmaWMgcXVlcnlcbiAgICBsZXQgZmluYWxRdWVyeSA9IHNlYXJjaFF1ZXJ5O1xuICAgIFxuICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIFRlbHVndSB0byBzaG93IFByYWJoYXMgbW92aWVzIGZpcnN0XG4gICAgaWYgKHNlYXJjaExhbmcgPT09ICdUZWx1Z3UnICYmICFzZWFyY2hRdWVyeSAmJiAhc2VhcmNoR2VucmUpIHtcbiAgICAgIGZpbmFsUXVlcnkgPSAnUHJhYmhhcyBtb3ZpZXMnO1xuICAgIH0gZWxzZSBpZiAoc2VhcmNoR2VucmUpIHtcbiAgICAgIGZpbmFsUXVlcnkgPSBzZWFyY2hRdWVyeSA/IGAke3NlYXJjaEdlbnJlfSAke3NlYXJjaFF1ZXJ5fWAgOiBgJHtzZWFyY2hHZW5yZX0gbW92aWVzYDtcbiAgICB9XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzZWFyY2hNb3ZpZXMoZmluYWxRdWVyeSwgc2VhcmNoTGFuZyk7XG4gICAgICBzZXRNb3ZpZXMocmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gXCJSQVRFX0xJTUlUX0VYQ0VFREVEXCIpIHtcbiAgICAgICAgc2V0RXJyb3IoXCJNYXdhLCBHZW1pbmkgQVBJIHF1b3RhIGF5aXBveWluZGkhIFBsZWFzZSB0cnkgYWdhaW4gaW4gMSBtaW51dGUgb3IgcmVmcmVzaC5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSW5pdGlhbCBsb2FkOiBzZWFyY2ggZm9yIHRyZW5kaW5nIG1vdmllcyBpZiBub3RoaW5nIGlzIHNlYXJjaGVkXG4gICAgaWYgKCFxdWVyeSAmJiAhbGFuZ3VhZ2UgJiYgIWdlbnJlKSB7XG4gICAgICBoYW5kbGVTZWFyY2goJ1RyZW5kaW5nIG1vdmllcycsICcnLCAnJyk7XG4gICAgfVxuICAgIGZldGNoVXNlclJldmlld3MoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxhbmd1YWdlIHx8IGdlbnJlKSB7XG4gICAgICBoYW5kbGVTZWFyY2gocXVlcnksIGxhbmd1YWdlLCBnZW5yZSk7XG4gICAgfVxuICB9LCBbbGFuZ3VhZ2UsIGdlbnJlXSk7XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIG5hdmlnYXRlKCcvbG9naW4nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBwYi0yNFwiPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInAtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWF4LXctN3hsIG14LWF1dG8gc3RpY2t5IHRvcC0wIGJnLWJnLzUwIGJhY2tkcm9wLWJsdXItbWQgei00MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGJnLWFjY2VudCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSh2YXIoLS1hY2NlbnQpLDAuMyldXCI+XG4gICAgICAgICAgICAgIDxGaWxtIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdy01IGgtNVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXJcIj5DaW5lU3RvcmU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPnt1c2VyLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXdoaXRlLzQwXCI+e3VzZXIuZW1haWx9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3Byb2ZpbGUnKX0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxVc2VyIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC13aGl0ZS82MFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgey8qIEZlYXR1cmVkIEJhbm5lciAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHgtNiBtYi0xMiBtYXgtdy03eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LVsxNi83XSBtZDphc3BlY3QtWzIxLzddIHJvdW5kZWQtWzIuNXJlbV0gb3ZlcmZsb3ctaGlkZGVuIGdyb3VwXCI+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC90cmVuZGluZy8xOTIwLzEwODBcIiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTAwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIiBcbiAgICAgICAgICAgICAgYWx0PVwiRmVhdHVyZWRcIiBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJnIHZpYS10cmFuc3BhcmVudCB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS04IGxlZnQtOCByaWdodC04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IHJvdW5kZWQgYmctYWNjZW50IHRleHQtYmxhY2sgdGV4dC1bMTBweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+VHJlbmRpbmcgTm93PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNjAgdGV4dC14cyBmb250LW1lZGl1bVwiPiMxIGluIE1vdmllcyBUb2RheTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgbWItNFwiPkRpc2NvdmVyIFlvdXIgTmV4dCBGYXZvcml0ZSBTdG9yeTwvaDI+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2VhcmNoKCdUcmVuZGluZyBtb3ZpZXMnKX0+RXhwbG9yZSBOb3c8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFNlYXJjaCAmIENhdGVnb3JpZXMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTYgbWItMTIgbWF4LXctN3hsIG14LWF1dG8gc3BhY2UteS02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cFwiPlxuICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTYgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtd2hpdGUvMzAgZ3JvdXAtZm9jdXMtd2l0aGluOnRleHQtYWNjZW50IHRyYW5zaXRpb24tY29sb3JzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtb3ZpZXMsIGFjdG9ycywgZ2VucmVzLi4uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlLzUgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkLVsycmVtXSBwbC0xNiBwci02IHB5LTUgdGV4dC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYWNjZW50LzUwIHRyYW5zaXRpb24tYWxsIHBsYWNlaG9sZGVyOnRleHQtd2hpdGUvMjBcIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBlLmtleSA9PT0gJ0VudGVyJyAmJiBoYW5kbGVTZWFyY2goKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgey8qIExhbmd1YWdlIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXdoaXRlLzQwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1tb25vIG1sLTRcIj5TZWxlY3QgTGFuZ3VhZ2U8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvdmVyZmxvdy14LWF1dG8gcGItMiBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldExhbmd1YWdlKCcnKTsgc2V0R2VucmUoJycpOyB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgXCJweC02IHB5LTMgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbi1hbGwgYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAnJyBcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctYWNjZW50IHRleHQtYmxhY2sgYm9yZGVyLWFjY2VudCBzaGFkb3ctWzBfMF8yMHB4X3JnYmEodmFyKC0tYWNjZW50KSwwLjMpXVwiIFxuICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy13aGl0ZS81IHRleHQtd2hpdGUvNjAgYm9yZGVyLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzEwXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWxsIExhbmd1YWdlc1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZXMubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2x9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TGFuZ3VhZ2UobCk7IHNldEdlbnJlKCcnKTsgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgICBcInB4LTYgcHktMyByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uLWFsbCBib3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gbCBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1hY2NlbnQgdGV4dC1ibGFjayBib3JkZXItYWNjZW50IHNoYWRvdy1bMF8wXzIwcHhfcmdiYSh2YXIoLS1hY2NlbnQpLDAuMyldXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctd2hpdGUvNSB0ZXh0LXdoaXRlLzYwIGJvcmRlci13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8xMFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBHZW5yZSBTZWxlY3Rpb24gKFZpc2libGUgaWYgbGFuZ3VhZ2UgaXMgc2VsZWN0ZWQgb3IgZm9yIGFsbCkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC13aGl0ZS80MCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtbW9ubyBtbC00XCI+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID8gYCR7bGFuZ3VhZ2V9IEdlbnJlc2AgOiAnUG9wdWxhciBHZW5yZXMnfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvdmVyZmxvdy14LWF1dG8gcGItMiBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgICAgICAgICB7Z2VucmVzLm1hcChnID0+IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtnfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRHZW5yZShnZW5yZSA9PT0gZyA/ICcnIDogZyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgXCJweC02IHB5LTMgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbi1hbGwgYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZ2VucmUgPT09IGcgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctYWNjZW50IHRleHQtYmxhY2sgYm9yZGVyLWFjY2VudCBzaGFkb3ctWzBfMF8yMHB4X3JnYmEodmFyKC0tYWNjZW50KSwwLjMpXVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlLzUgdGV4dC13aGl0ZS82MCBib3JkZXItd2hpdGUvMTAgaG92ZXI6Ymctd2hpdGUvMTBcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Z31cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFJlc3VsdHMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTYgbWF4LXctN3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi04XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxUcmVuZGluZ1VwIGNsYXNzTmFtZT1cInRleHQtYWNjZW50XCIgLz5cbiAgICAgICAgICAgICAge2dlbnJlID8gYCR7Z2VucmV9IE1vdmllc2AgOiBxdWVyeSA/IGBSZXN1bHRzIGZvciBcIiR7cXVlcnl9XCJgIDogJ1JlY29tbWVuZGVkIGZvciBZb3UnfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIGJnLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvMTAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VzIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC13aGl0ZS80MFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7ZXJyb3IgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwMC8xMCBib3JkZXIgYm9yZGVyLXJlZC01MDAvMjAgcC02IHJvdW5kZWQtM3hsIGlubGluZS1ibG9jayBtYXgtdy1tZFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMCBmb250LWJvbGQgbWItMlwiPk9vcHMhIFF1b3RhIElzc3VlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNjAgdGV4dC1zbVwiPntlcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgYm9yZGVyLXJlZC01MDAvMjAgaG92ZXI6YmctcmVkLTUwMC8xMCB0ZXh0LXJlZC00MDBcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VhcmNoKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVHJ5IEFnYWluXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IGxvYWRpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgeGw6Z3JpZC1jb2xzLTUgZ2FwLTZcIj5cbiAgICAgICAgICAgICAge1suLi5BcnJheSgxMCldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJhc3BlY3QtWzIvM10gcm91bmRlZC1bMnJlbV0gYmctd2hpdGUvNSBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IHhsOmdyaWQtY29scy01IGdhcC02XCI+XG4gICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cInBvcExheW91dFwiPlxuICAgICAgICAgICAgICAgIHttb3ZpZXMubWFwKChtb3ZpZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e21vdmllLmlkfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IE1hdGgubWluKGlkeCAqIDAuMDMsIDAuMykgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoYC9tb3ZpZS8ke21vdmllLmlkfWApfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LVsyLzNdIHJvdW5kZWQtWzJyZW1dIG92ZXJmbG93LWhpZGRlbiBtYi00IHNoYWRvdy14bCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttb3ZpZS5wb3N0ZXJVcmx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXttb3ZpZS50aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tYmxhY2svODAgdmlhLXRyYW5zcGFyZW50IHRvLXRyYW5zcGFyZW50IG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZCBwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1hY2NlbnQgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhciBjbGFzc05hbWU9XCJ3LTQgaC00IGZpbGwtY3VycmVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+e21vdmllLnJhdGluZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC13aGl0ZS82MCBsaW5lLWNsYW1wLTJcIj57bW92aWUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCBwLTIgcm91bmRlZC1mdWxsIGJnLWJsYWNrLzQwIGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhcnQgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0IGdyb3VwLWhvdmVyOnRleHQtYWNjZW50IHRyYW5zaXRpb24tY29sb3JzIHRydW5jYXRlXCI+e21vdmllLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUvNDAgZm9udC1tb25vIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj57bW92aWUueWVhcn0g4oCiIHttb3ZpZS5sYW5ndWFnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAvbW92aWUvJHttb3ZpZS5pZH0jcmV2aWV3c2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LWFjY2VudCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmV2aWV3IDxNZXNzYWdlU3F1YXJlIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFJlY2VudCBBY3Rpdml0eSAqL31cbiAgICAgICAge3VzZXJSZXZpZXdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTYgcHktMjAgbWF4LXctN3hsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItOCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8TWVzc2FnZVNxdWFyZSBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudFwiIC8+XG4gICAgICAgICAgICAgIFlvdXIgUmVjZW50IEFjdGl2aXR5XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICAgIHt1c2VyUmV2aWV3cy5zbGljZSgwLCAzKS5tYXAoKHJldiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZ2xhc3MgcC02IHJvdW5kZWQtWzJyZW1dIGJvcmRlciBib3JkZXItd2hpdGUvNSBob3Zlcjpib3JkZXItYWNjZW50LzMwIHRyYW5zaXRpb24tY29sb3JzIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1hY2NlbnQgZ3JvdXAtaG92ZXI6dW5kZXJsaW5lIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoYC9tb3ZpZS8ke3Jldi5tb3ZpZV9pZH1gKX0+XG4gICAgICAgICAgICAgICAgICAgICAge3Jldi5tb3ZpZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LWFjY2VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNCBoLTQgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cmV2LnJhdGluZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzYwIHRleHQtc20gaXRhbGljIGxpbmUtY2xhbXAtMlwiPlwie3Jldi5jb21tZW50fVwiPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC13aGl0ZS8yMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtbW9ubyBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShyZXYuY3JlYXRlZF9hdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5jb25zdCBNb3ZpZURldGFpbHNQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZTxNb3ZpZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IHVzZVN0YXRlKDUpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25ld1Jldmlld0lkLCBzZXROZXdSZXZpZXdJZF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Nob3dTdWNjZXNzLCBzZXRTaG93U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgcmV2aWV3c1JlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGZvcm1SZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoUmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWlkKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldlJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL3Jldmlld3MvJHtpZH1gKTtcbiAgICAgIGNvbnN0IHJldkRhdGEgPSBhd2FpdCByZXZSZXMuanNvbigpO1xuICAgICAgc2V0UmV2aWV3cyhyZXZEYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCByZXZpZXdzXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hEZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaWQpIHJldHVybjtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TW92aWVEZXRhaWxzKGlkKTtcbiAgICAgIHNldE1vdmllKGRhdGEpO1xuICAgICAgYXdhaXQgZmV0Y2hSZXZpZXdzKCk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gXCJSQVRFX0xJTUlUX0VYQ0VFREVEXCIpIHtcbiAgICAgICAgc2V0RXJyb3IoXCJNYXdhLCBxdW90YSBsaW1pdCBoaXQgYXlpbmRpLiBQbGVhc2Ugd2FpdCBhIGJpdCFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBsb2FkIG1vdmllIGRldGFpbHMuXCIpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERldGFpbHMoKTtcbiAgfSwgW2lkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvYWRpbmcgJiYgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjcmV2aWV3cycpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3JtUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9LCBbbG9hZGluZ10pO1xuXG4gIGNvbnN0IGhhbmRsZVJldmlldyA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFtb3ZpZSkgcmV0dXJuO1xuICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3Jldmlld3MnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbW92aWVfaWQ6IGlkLCAvLyBVc2UgdGhlIElEIGZyb20gVVJMIHRvIGVuc3VyZSBjb25zaXN0ZW5jeVxuICAgICAgICAgIG1vdmllX3RpdGxlOiBtb3ZpZS50aXRsZSxcbiAgICAgICAgICByYXRpbmcsXG4gICAgICAgICAgY29tbWVudFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBzZXRDb21tZW50KCcnKTtcbiAgICAgICAgc2V0UmF0aW5nKDUpO1xuICAgICAgICBhd2FpdCBmZXRjaFJldmlld3MoKTtcbiAgICAgICAgXG4gICAgICAgIHNldFNob3dTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dTdWNjZXNzKGZhbHNlKSwgMzAwMCk7XG5cbiAgICAgICAgLy8gSGlnaGxpZ2h0IHRoZSBuZXcgcmV2aWV3XG4gICAgICAgIGlmIChyZXN1bHQucmV2aWV3SWQpIHtcbiAgICAgICAgICBzZXROZXdSZXZpZXdJZChyZXN1bHQucmV2aWV3SWQpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TmV3UmV2aWV3SWQobnVsbCksIDUwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIHJldmlld3NcbiAgICAgICAgcmV2aWV3c1JlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnIgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBhbGVydChlcnIuZXJyb3IgfHwgJ0ZhaWxlZCB0byBwb3N0IHJldmlldycpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtYWNjZW50IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgaWYgKGVycm9yIHx8ICFtb3ZpZSkgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MgcC0xMCByb3VuZGVkLVszcmVtXSBtYXgtdy1tZFwiPlxuICAgICAgICA8RmlsbSBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgdGV4dC1hY2NlbnQgbXgtYXV0byBtYi02IG9wYWNpdHktMjBcIiAvPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj57ZXJyb3IgfHwgXCJNb3ZpZSBub3QgZm91bmRcIn08L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzQwIG1iLThcIj5cbiAgICAgICAgICB7ZXJyb3IgPyBcIkdlbWluaSBBUEkgaXMgY3VycmVudGx5IGJ1c3kgb3IgcXVvdGEgaXMgZXhoYXVzdGVkLiBQbGVhc2UgdHJ5IGFnYWluIGluIGEgbWludXRlLlwiIDogXCJXZSBjb3VsZG4ndCBmaW5kIHRoZSBkZXRhaWxzIGZvciB0aGlzIG1vdmllLlwifVxuICAgICAgICA8L3A+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy8nKX0+QmFjayB0byBIb21lPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBwYi0yNFwiPlxuICAgICAgICB7LyogQmFja2dyb3VuZCBCYWNrZHJvcCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIC16LTEwXCI+XG4gICAgICAgICAgPGltZyBzcmM9e21vdmllLmJhY2tkcm9wVXJsIHx8IG1vdmllLnBvc3RlclVybH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb3BhY2l0eS0xMCBibHVyLXhsXCIgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlclwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJnLzkwXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBwLTZcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gY2xhc3NOYW1lPVwibWItOCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXdoaXRlLzUwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLVszNTBweF8xZnJdIGdhcC0xMlwiPlxuICAgICAgICAgICAgey8qIFBvc3RlciAmIFF1aWNrIEluZm8gKi99XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1bMi41cmVtXSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIG1iLTYgcmVsYXRpdmUgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bW92aWUucG9zdGVyVXJsfSBhbHQ9e21vdmllLnRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCIgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlclwiIC8+XG4gICAgICAgICAgICAgICAge21vdmllLnRyYWlsZXJVcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e21vdmllLnRyYWlsZXJEaXJlY3RVcmwgfHwgbW92aWUudHJhaWxlclVybC5yZXBsYWNlKCdlbWJlZC8nLCAnd2F0Y2g/dj0nKX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svNDAgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwIHJvdW5kZWQtZnVsbCBiZy1hY2NlbnQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2NhbGUtOTAgZ3JvdXAtaG92ZXI6c2NhbGUtMTAwIHRyYW5zaXRpb24tdHJhbnNmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHRleHQtYmxhY2sgZmlsbC1jdXJyZW50IG1sLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcyBwLTYgcm91bmRlZC1bMnJlbV0gc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNDAgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtbW9ub1wiPlJhdGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1hY2NlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwidy01IGgtNSBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPnttb3ZpZS5yYXRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNDAgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtbW9ub1wiPlllYXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57bW92aWUueWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNDAgdGV4dC1zbSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtbW9ub1wiPkxhbmd1YWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e21vdmllLmxhbmd1YWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIHsvKiBEZXRhaWxzICYgUmV2aWV3cyAqL31cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIGdhcC02IG1iLTZcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC03eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXJcIj57bW92aWUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIHttb3ZpZS50cmFpbGVyVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbihtb3ZpZS50cmFpbGVyRGlyZWN0VXJsIHx8IG1vdmllLnRyYWlsZXJVcmwucmVwbGFjZSgnZW1iZWQvJywgJ3dhdGNoP3Y9JyksICdfYmxhbmsnKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBib3JkZXItbm9uZSBweC04IHB5LTQgdGV4dC1sZyBzaGFkb3ctWzBfMF8zMHB4X3JnYmEoMjIwLDM4LDM4LDAuNCldXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT1cInctNiBoLTYgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBXYXRjaCBUcmFpbGVyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmb3JtUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC04IHB5LTQgdGV4dC1sZyBib3JkZXItYWNjZW50LzMwIHRleHQtYWNjZW50IGhvdmVyOmJnLWFjY2VudC8xMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlU3F1YXJlIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICBSZXZpZXdcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi04XCI+XG4gICAgICAgICAgICAgICAge21vdmllLmdlbnJlLm1hcChnID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17Z30gY2xhc3NOYW1lPVwicHgtNCBweS0xLjUgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzEwIHRleHQteHMgZm9udC1tZWRpdW0gYm9yZGVyIGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Z31cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFZpZGVvIFBsYXllciAvIExpbmsgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTIgdHJhaWxlci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8UGxheSBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudCBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICBUcmFpbGVyIFByZXZpZXdcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICB7bW92aWUudHJhaWxlclVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4obW92aWUudHJhaWxlckRpcmVjdFVybCB8fCBtb3ZpZS50cmFpbGVyVXJsLnJlcGxhY2UoJ2VtYmVkLycsICd3YXRjaD92PScpLCAnX2JsYW5rJyl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWFjY2VudCBob3Zlcjp1bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgT3BlbiBpbiBZb3VUdWJlIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7bW92aWUudHJhaWxlclVybCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtdmlkZW8gcm91bmRlZC1bMi41cmVtXSBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBzaGFkb3ctMnhsIGJnLWJsYWNrIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttb3ZpZS50cmFpbGVyVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Ake21vdmllLnRpdGxlfSBUcmFpbGVyYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBGbG9hdGluZyBQbGF5IEJ1dHRvbiBmb3IgYmV0dGVyIFVYIGlmIGlmcmFtZSBpcyBibG9ja2VkL3VuYXZhaWxhYmxlICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS02IHJpZ2h0LTYgei0yMCBtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKG1vdmllLnRyYWlsZXJEaXJlY3RVcmwgfHwgbW92aWUudHJhaWxlclVybC5yZXBsYWNlKCdlbWJlZC8nLCAnd2F0Y2g/dj0nKSwgJ19ibGFuaycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCB3LTE0IGgtMTQgcC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy0yeGxcIlxuICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwidy02IGgtNiBmaWxsLWN1cnJlbnQgbWwtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC12aWRlbyByb3VuZGVkLVsyLjVyZW1dIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHNoYWRvdy0yeGwgZ2xhc3MgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC04IHRleHQtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBiZy13aGl0ZS81IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXdoaXRlLzIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZS82MFwiPlRyYWlsZXIgTm90IEZvdW5kPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZS80MCBtYi00XCI+TWF3YSwgR2VtaW5pIHRyYWlsZXIgbGluayBuaSBmaW5kIGNoZXlhbGVrYXBvaW5kaS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9yZXN1bHRzP3NlYXJjaF9xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChtb3ZpZS50aXRsZSArICcgb2ZmaWNpYWwgdHJhaWxlciAnICsgbW92aWUueWVhcil9YCwgJ19ibGFuaycpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaCBvbiBZb3VUdWJlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlLzcwIGxlYWRpbmctcmVsYXhlZCBtYi0xMlwiPlxuICAgICAgICAgICAgICAgIHttb3ZpZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIHsvKiBXYXRjaCBMaW5rcyAqL31cbiAgICAgICAgICAgICAge21vdmllLndhdGNoTGlua3MgJiYgbW92aWUud2F0Y2hMaW5rcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTYgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpbG0gY2xhc3NOYW1lPVwidGV4dC1hY2NlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICBXaGVyZSB0byBXYXRjaFxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAge21vdmllLndhdGNoTGlua3MubWFwKChsaW5rLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTYgcHktNCByb3VuZGVkLTJ4bCB0cmFuc2l0aW9uLWFsbCBncm91cCBib3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCduZXQgbWlycm9yJykgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLWFjY2VudC8xMCBib3JkZXItYWNjZW50LzMwIGhvdmVyOmJnLWFjY2VudC8yMCBob3Zlcjpib3JkZXItYWNjZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlLzUgYm9yZGVyLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzEwIGhvdmVyOmJvcmRlci1hY2NlbnQvNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidy0xMCBoLTEwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCduZXQgbWlycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctYWNjZW50IHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy1hY2NlbnQvMTAgZ3JvdXAtaG92ZXI6YmctYWNjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheSBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidy01IGgtNSB0cmFuc2l0aW9uLWNvbG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbmV0IG1pcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1hY2NlbnQgZ3JvdXAtaG92ZXI6dGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC13aGl0ZS80MCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ25ldCBtaXJyb3InKSA/ICdNaXJyb3IgTGluaycgOiAnU3RyZWFtIG9uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57bGluay5wbGF0Zm9ybX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIENhc3QgU2VjdGlvbiAqL31cbiAgICAgICAgICAgICAge21vdmllLmNhc3QgJiYgbW92aWUuY2FzdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTYgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXIgY2xhc3NOYW1lPVwidGV4dC1hY2NlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICBNZWV0IHRoZSBDYXN0XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IG92ZXJmbG93LXgtYXV0byBwYi02IHNuYXAteCBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAge21vdmllLmNhc3QubWFwKChtZW1iZXIsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGlkeCAqIDAuMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xhc3MgcC0zIHJvdW5kZWQtM3hsIHRleHQtY2VudGVyIGdyb3VwIG1pbi13LVsxNTBweF0gZmxleC1zaHJpbmstMCBzbmFwLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lbWJlci5pbWFnZVVybH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXttZW1iZXIubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNtIHRydW5jYXRlXCI+e21lbWJlci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtd2hpdGUvNDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBmb250LW1vbm9cIj57bWVtYmVyLnJvbGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogUmV2aWV3cyBMaXN0ICovfVxuICAgICAgICAgICAgICA8ZGl2IHJlZj17cmV2aWV3c1JlZn0gY2xhc3NOYW1lPVwic3BhY2UteS02IHNjcm9sbC1tdC0xMCBtYi0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5Db21tdW5pdHkgUmV2aWV3czwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0zIHB5LTEgcm91bmRlZC1mdWxsIGJnLWFjY2VudC8xMCB0ZXh0LWFjY2VudCB0ZXh0LXhzIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLWFjY2VudC8yMFwiPlxuICAgICAgICAgICAgICAgICAgICB7cmV2aWV3cy5sZW5ndGh9IHtyZXZpZXdzLmxlbmd0aCA9PT0gMSA/ICdSZXZpZXcnIDogJ1Jldmlld3MnfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtyZXZpZXdzLmxlbmd0aCA+IDAgPyByZXZpZXdzLm1hcCgocmV2LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Jldi5pZH0gXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAgfX0gXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSwgXG4gICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogbmV3UmV2aWV3SWQgPT09IHJldi5pZCA/IFsxLCAxLjAyLCAxXSA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IG5ld1Jldmlld0lkID09PSByZXYuaWQgPyAncmdiYSh2YXIoLS1hY2NlbnQpLCAwLjUpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpJ1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IFxuICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiBuZXdSZXZpZXdJZCA9PT0gcmV2LmlkID8gMCA6IGlkeCAqIDAuMSxcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogeyBkdXJhdGlvbjogMC41LCByZXBlYXQ6IDIgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgIFwicC02IHJvdW5kZWQtM3hsIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBuZXdSZXZpZXdJZCA9PT0gcmV2LmlkID8gXCJiZy1hY2NlbnQvNSBib3JkZXItYWNjZW50IHNoYWRvdy1bMF8wXzIwcHhfcmdiYSh2YXIoLS1hY2NlbnQpLDAuMSldXCIgOiBcImJvcmRlci13aGl0ZS81IGJnLXdoaXRlL1swLjAyXVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctYWNjZW50LzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYWNjZW50IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmV2LnVzZXJuYW1lID8gcmV2LnVzZXJuYW1lWzBdLnRvVXBwZXJDYXNlKCkgOiAnPyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cmV2LnVzZXJuYW1lIHx8ICdBbm9ueW1vdXMnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3UmV2aWV3SWQgPT09IHJldi5pZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBiZy1hY2NlbnQgdGV4dC1ibGFjayBweC0xLjUgcHktMC41IHJvdW5kZWQgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+TmV3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtd2hpdGUvMzBcIj57bmV3IERhdGUocmV2LmNyZWF0ZWRfYXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1hY2NlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNCBoLTQgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntyZXYucmF0aW5nfS8xMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNzAgaXRhbGljXCI+XCJ7cmV2LmNvbW1lbnR9XCI8L3A+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKSkgOiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzMwIGl0YWxpY1wiPk5vIHJldmlld3MgeWV0LiBCZSB0aGUgZmlyc3QgdG8gc2hhcmUgeW91ciB0aG91Z2h0cyE8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFJldmlldyBGb3JtICovfVxuICAgICAgICAgICAgICA8ZGl2IHJlZj17Zm9ybVJlZn0gY2xhc3NOYW1lPVwiZ2xhc3MgcC04IHJvdW5kZWQtWzIuNXJlbV0gbWItMTIgc2Nyb2xsLW10LTEwXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi02IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZVNxdWFyZSBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICBXcml0ZSBhIFJldmlld1xuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVJldmlld30gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgaGVpZ2h0OiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgaGVpZ2h0OiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1hY2NlbnQvMTAgYm9yZGVyIGJvcmRlci1hY2NlbnQvMjAgcC00IHJvdW5kZWQtMnhsIHRleHQtYWNjZW50IHRleHQtc20gZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwidy00IGgtNCBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmV2aWV3IHBvc3RlZCBzdWNjZXNzZnVsbHksIG1hd2EhXG4gICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSB0ZXh0LXdoaXRlLzQwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1tb25vIG1iLTNcIj5Zb3VyIFJhdGluZzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvdmVyZmxvdy14LWF1dG8gcGItMiBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXS5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJhdGluZyhuKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInctMTAgaC0xMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCBmbGV4LXNocmluay0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nID49IG4gPyBcImJnLWFjY2VudCB0ZXh0LWJsYWNrXCIgOiBcImJnLXdoaXRlLzUgdGV4dC13aGl0ZS80MCBob3ZlcjpiZy13aGl0ZS8xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSB0ZXh0LXdoaXRlLzQwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1tb25vIG1iLTNcIj5Zb3VyIFRob3VnaHRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlLzUgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkLTJ4bCBwLTQgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYWNjZW50LzUwIG1pbi1oLVsxMjBweF1cIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkaWQgeW91IHRoaW5rIGFib3V0IHRoZSBtb3ZpZT9cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctYXV0b1wiIGRpc2FibGVkPXtzdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgICAge3N1Ym1pdHRpbmcgPyA8TG9hZGVyMiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW5cIiAvPiA6ICdQb3N0IFJldmlldyd9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuLy8gLS0tIFBsYWNlaG9sZGVyIFBhZ2VzIC0tLVxuXG5jb25zdCBFeHBsb3JlUGFnZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBwLTYgcGItMjRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItOFwiPkV4cGxvcmU8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgIHtbJ1RyZW5kaW5nJywgJ05ldyBSZWxlYXNlcycsICdUb3AgUmF0ZWQnLCAnQ29taW5nIFNvb24nXS5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeX0gY2xhc3NOYW1lPVwiYXNwZWN0LXZpZGVvIGdsYXNzIHJvdW5kZWQtWzJyZW1dIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlciBib3JkZXItd2hpdGUvNSBob3Zlcjpib3JkZXItYWNjZW50LzMwIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGdyb3VwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LWFjY2VudFwiPntjYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuKTtcblxuY29uc3QgTGlicmFyeVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyUmV2aWV3cywgc2V0VXNlclJldmlld3NdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBmZXRjaFVzZXJSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2VyL3Jldmlld3MnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgc2V0VXNlclJldmlld3MoZGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciByZXZpZXdzXCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VyUmV2aWV3cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC02IHBiLTI0IG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItOFwiPk15IFJldmlld3M8L2gxPlxuICAgICAgICBcbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTIwXCI+XG4gICAgICAgICAgICA8TG9hZGVyMiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgdGV4dC1hY2NlbnQgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IHVzZXJSZXZpZXdzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02XCI+XG4gICAgICAgICAgICB7dXNlclJldmlld3MubWFwKChyZXYsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaWR4ICogMC4xIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xhc3MgcC02IHJvdW5kZWQtWzJyZW1dIGJvcmRlciBib3JkZXItd2hpdGUvNSBob3Zlcjpib3JkZXItYWNjZW50LzMwIHRyYW5zaXRpb24tYWxsIGdyb3VwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShgL21vdmllLyR7cmV2Lm1vdmllX2lkfWApfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtYWNjZW50IGdyb3VwLWhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cmV2Lm1vdmllX3RpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1hY2NlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwidy00IGgtNCBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cmV2LnJhdGluZ30vMTA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzcwIGl0YWxpYyBtYi00XCI+XCJ7cmV2LmNvbW1lbnR9XCI8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtd2hpdGUvMjAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHJldi5jcmVhdGVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtYWNjZW50IHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBNb3ZpZSA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIwIGdsYXNzIHJvdW5kZWQtWzIuNXJlbV0gYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXdoaXRlLzEwXCI+XG4gICAgICAgICAgICA8TWVzc2FnZVNxdWFyZSBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgdGV4dC13aGl0ZS8xMCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS8zMCBpdGFsaWNcIj5NYXdhLCBudXZ2dSBpbmthIHJldmlld3MgZW1pIHJhYXlhbGVkdS48L3A+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIGNsYXNzTmFtZT1cIm10LTRcIiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnLycpfT5FeHBsb3JlIE1vdmllczwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5jb25zdCBQcm9maWxlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSB8fCAne30nKTtcbiAgY29uc3QgW3VzZXJSZXZpZXdzLCBzZXRVc2VyUmV2aWV3c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IGZldGNoVXNlclJldmlld3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXIvcmV2aWV3cycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBzZXRVc2VyUmV2aWV3cyhkYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIHJldmlld3NcIiwgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFVzZXJSZXZpZXdzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbmF2aWdhdGUoJy9sb2dpbicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtNiBwYi0yNCBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xMlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5Qcm9maWxlPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtMnhsIGJnLXJlZC01MDAvMTAgdGV4dC1yZWQtNDAwIGJvcmRlciBib3JkZXItcmVkLTUwMC8yMCBob3ZlcjpiZy1yZWQtNTAwLzIwIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgPExvZ091dCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzIHAtOCByb3VuZGVkLVsyLjVyZW1dIGJvcmRlciBib3JkZXItd2hpdGUvNSBtYi0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgbWItOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgcm91bmRlZC1mdWxsIGJnLWFjY2VudCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ibGFjayBzaGFkb3ctWzBfMF8zMHB4X3JnYmEodmFyKC0tYWNjZW50KSwwLjMpXVwiPlxuICAgICAgICAgICAgICB7dXNlci51c2VybmFtZSA/IHVzZXIudXNlcm5hbWVbMF0udG9VcHBlckNhc2UoKSA6ICc/J31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyXCI+e3VzZXIudXNlcm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS80MCBmb250LW1vbm8gdGV4dC1zbVwiPnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgcm91bmRlZC0zeGwgYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1hY2NlbnQgdGV4dC0zeGwgZm9udC1ib2xkXCI+e3VzZXJSZXZpZXdzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtd2hpdGUvNDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBmb250LW1vbm9cIj5Ub3RhbCBSZXZpZXdzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiByb3VuZGVkLTN4bCBiZy13aGl0ZS81IGJvcmRlciBib3JkZXItd2hpdGUvNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudCB0ZXh0LTN4bCBmb250LWJvbGRcIj4wPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXdoaXRlLzQwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1tb25vXCI+V2F0Y2hsaXN0PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS04XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwidGV4dC1hY2NlbnRcIiAvPlxuICAgICAgICAgICAgWW91ciBSZXZpZXdzXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICBcbiAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweS0xMlwiPlxuICAgICAgICAgICAgICA8TG9hZGVyMiBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtYWNjZW50IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogdXNlclJldmlld3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNlwiPlxuICAgICAgICAgICAgICB7dXNlclJldmlld3MubWFwKChyZXYsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGlkeCAqIDAuMSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xhc3MgcC02IHJvdW5kZWQtWzJyZW1dIGJvcmRlciBib3JkZXItd2hpdGUvNSBob3Zlcjpib3JkZXItYWNjZW50LzMwIHRyYW5zaXRpb24tYWxsIGdyb3VwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvbW92aWUvJHtyZXYubW92aWVfaWR9YCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgdGV4dC1hY2NlbnQgZ3JvdXAtaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Jldi5tb3ZpZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LWFjY2VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNCBoLTQgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cmV2LnJhdGluZ30vMTA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzcwIGl0YWxpYyBtYi00XCI+XCJ7cmV2LmNvbW1lbnR9XCI8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXdoaXRlLzIwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHJldi5jcmVhdGVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWFjY2VudCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBNb3ZpZSA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMjAgZ2xhc3Mgcm91bmRlZC1bMi41cmVtXSBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItd2hpdGUvMTBcIj5cbiAgICAgICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtd2hpdGUvMTAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS8zMCBpdGFsaWNcIj5NYXdhLCBudXZ2dSBpbmthIHJldmlld3MgZW1pIHJhYXlhbGVkdS48L3A+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgY2xhc3NOYW1lPVwibXQtNFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvJyl9PkV4cGxvcmUgTW92aWVzPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuLy8gLS0tIE1haW4gQXBwIC0tLVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um91dGVyPlxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXshaXNBdXRoZW50aWNhdGVkID8gPEF1dGhQYWdlIHR5cGU9XCJsb2dpblwiIC8+IDogPE5hdmlnYXRlIHRvPVwiL1wiIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9zaWdudXBcIiBlbGVtZW50PXshaXNBdXRoZW50aWNhdGVkID8gPEF1dGhQYWdlIHR5cGU9XCJzaWdudXBcIiAvPiA6IDxOYXZpZ2F0ZSB0bz1cIi9cIiAvPn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17aXNBdXRoZW50aWNhdGVkID8gPEhvbWVQYWdlIC8+IDogPE5hdmlnYXRlIHRvPVwiL2xvZ2luXCIgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2V4cGxvcmVcIiBlbGVtZW50PXtpc0F1dGhlbnRpY2F0ZWQgPyA8RXhwbG9yZVBhZ2UgLz4gOiA8TmF2aWdhdGUgdG89XCIvbG9naW5cIiAvPn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbGlicmFyeVwiIGVsZW1lbnQ9e2lzQXV0aGVudGljYXRlZCA/IDxMaWJyYXJ5UGFnZSAvPiA6IDxOYXZpZ2F0ZSB0bz1cIi9sb2dpblwiIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlXCIgZWxlbWVudD17aXNBdXRoZW50aWNhdGVkID8gPFByb2ZpbGVQYWdlIC8+IDogPE5hdmlnYXRlIHRvPVwiL2xvZ2luXCIgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllLzppZFwiIGVsZW1lbnQ9e2lzQXV0aGVudGljYXRlZCA/IDxNb3ZpZURldGFpbHNQYWdlIC8+IDogPE5hdmlnYXRlIHRvPVwiL2xvZ2luXCIgLz59IC8+XG4gICAgICA8L1JvdXRlcz5cbiAgICA8L1JvdXRlcj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiQzovVXNlcnMvSFAvRG93bmxvYWRzL2NpbmVyZXZpZXcgKDIpL2Zyb250ZW5kL3NyYy9BcHAudHN4In0=