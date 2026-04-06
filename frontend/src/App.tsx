import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
  useNavigate,
  Link,
  useParams
} from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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
  Library,
  TrendingUp,
  Heart
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { searchMovies, getMovieDetails, type Movie } from './services/geminiService';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const BottomNav = () => {
  const navigate = useNavigate();
  const location = window.location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: MessageSquare, label: 'Reviews', path: '/library' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg/80 backdrop-blur-xl border-t border-white/5 px-6 py-3 flex justify-between items-center md:hidden z-50">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => navigate(item.path)}
          className={cn(
            "flex flex-col items-center gap-1 transition-all",
            location === item.path ? "text-accent" : "text-white/40"
          )}
        >
          <item.icon className="w-6 h-6" />
          <span className="text-[10px] font-medium uppercase tracking-widest">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-bg text-white selection:bg-accent selection:text-black">
      {children}
      <BottomNav />
    </div>
  );
};

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-black hover:bg-accent/90',
      secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10',
      ghost: 'bg-transparent text-white hover:bg-white/5',
    };
    return (
      <button
        ref={ref}
        className={cn(
          'px-6 py-2.5 rounded-full font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all',
        className
      )}
      {...props}
    />
  )
);

// --- Pages ---

const AuthPage = ({ type }: { type: 'login' | 'signup' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/auth/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md glass rounded-[2rem] p-8 md:p-10 border border-white/10">
        <div className="mb-8 text-center">
          <div className="w-14 h-14 bg-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(var(--accent),0.25)]">
            <Film className="w-7 h-7 text-black" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            {type === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-white/60 mt-2">
            {type === 'login' ? 'Sign in to continue your movie journey' : 'Join CineStore and start reviewing'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="rounded-xl bg-red-500/15 border border-red-400/30 text-red-200 text-sm px-4 py-3">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full h-11" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Please wait...
              </>
            ) : type === 'login' ? 'Login' : 'Sign Up'}
          </Button>
        </form>

        <p className="text-center text-white/60 mt-6 text-sm">
          {type === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Link
            to={type === 'login' ? '/signup' : '/login'}
            className="text-accent font-semibold hover:opacity-90"
          >
            {type === 'login' ? 'Sign up' : 'Login'}
          </Link>
        </p>

        <button
          type="button"
          onClick={() => {
            // Remove token to ensure we aren't stuck in a redirect loop
            localStorage.removeItem('token');
            navigate('/');
          }}
          className="w-full mt-3 text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [genre, setGenre] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [userReviews, setUserReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const navigate = useNavigate();

  const genres = ['Comedy', 'Drama', 'Love', 'Adventure', 'Action'];
  const languages = ['Telugu', 'Hindi', 'English', 'Tamil', 'Malayalam'];

  const fetchUserReviews = async () => {
    try {
      const res = await fetch('/api/user/reviews', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUserReviews(data);
      }
    } catch (error) {
      console.error("Failed to fetch user reviews", error);
    }
  };

  const handleSearch = async (searchQuery: string = query, searchLang: string = language, searchGenre: string = genre) => {
    if (!searchQuery && !searchLang && !searchGenre) return;
    setLoading(true);
    setError(null);
    
    // Construct a more specific query
    let finalQuery = searchQuery;
    
    // Special handling for Telugu to show Prabhas movies first
    if (searchLang === 'Telugu' && !searchQuery && !searchGenre) {
      finalQuery = 'Prabhas movies';
    } else if (searchGenre) {
      finalQuery = searchQuery ? `${searchGenre} ${searchQuery}` : `${searchGenre} movies`;
    }
    
    try {
      const results = await searchMovies(finalQuery, searchLang, searchGenre);
      setMovies(results);
    } catch (err: any) {
      if (err.message === "MISSING_GEMINI_API_KEY") {
        setError("Gemini API key is missing. Add GEMINI_API_KEY in your .env file and restart npm run dev.");
      } else if (err.message === "RATE_LIMIT_EXCEEDED") {
        setError("Mawa, Gemini API quota ayipoyindi! Please try again in 1 minute or refresh.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Real-time filtering effect with debounce
  useEffect(() => {
    if (!query && !language && !genre) {
      handleSearch('Trending movies', '', '');
      return;
    }

    const timeoutId = setTimeout(() => {
      handleSearch(query, language, genre);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, language, genre]);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Layout>
      <div className="min-h-screen pb-24">
        {/* Header */}
        <header className="p-6 flex items-center justify-between max-w-7xl mx-auto sticky top-0 bg-bg/50 backdrop-blur-md z-40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(var(--accent),0.3)]">
              <Film className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter">CineStore</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium">{user.username}</span>
              <span className="text-xs text-white/40">{user.email}</span>
            </div>
            <button 
              onClick={() => navigate('/profile')} 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden"
            >
              <User className="w-5 h-5 text-white/60" />
            </button>
          </div>
        </header>

        {/* Featured Banner */}
        <section className="px-6 mb-12 max-w-7xl mx-auto">
          <div className="relative aspect-[16/7] md:aspect-[21/7] rounded-[2.5rem] overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/trending/1920/1080" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Featured" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-accent text-black text-[10px] font-bold uppercase tracking-tighter">Trending Now</span>
                <span className="text-white/60 text-xs font-medium">#1 in Movies Today</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Next Favorite Story</h2>
              <Button onClick={() => handleSearch('Trending movies')}>Explore Now</Button>
            </div>
          </div>
        </section>

        {/* Search & Categories */}
        <section className="px-6 mb-12 max-w-7xl mx-auto space-y-6">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-accent transition-colors" />
            <input 
              type="text"
              placeholder="Search movies, actors, genres..."
              className="w-full bg-white/5 border border-white/10 rounded-[2rem] pl-16 pr-6 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-white/20"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {/* Language Selection */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono ml-4">Select Language</p>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                <button
                  onClick={() => { setLanguage(''); setGenre(''); }}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                    language === '' 
                      ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(var(--accent),0.3)]" 
                      : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                  )}
                >
                  All Languages
                </button>
                {languages.map(l => (
                  <button
                    key={l}
                    onClick={() => { setLanguage(l); setGenre(''); }}
                    className={cn(
                      "px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                      language === l 
                        ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(var(--accent),0.3)]" 
                        : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Genre Selection (Visible if language is selected or for all) */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono ml-4">
                {language ? `${language} Genres` : 'Popular Genres'}
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {genres.map(g => (
                  <button
                    key={g}
                    onClick={() => setGenre(genre === g ? '' : g)}
                    className={cn(
                      "px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                      genre === g 
                        ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(var(--accent),0.3)]" 
                        : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                    )}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <TrendingUp className="text-accent" />
              {genre ? `${genre} Movies` : query ? `Results for "${query}"` : 'Recommended for You'}
            </h3>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Languages className="w-4 h-4 text-white/40" />
              </button>
            </div>
          </div>

          {error ? (
            <div className="text-center py-20">
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-3xl inline-block max-w-md">
                <p className="text-red-400 font-bold mb-2">Oops! Quota Issue</p>
                <p className="text-white/60 text-sm">{error}</p>
                <Button 
                  variant="secondary" 
                  className="mt-4 border-red-500/20 hover:bg-red-500/10 text-red-400"
                  onClick={() => handleSearch()}
                >
                  Try Again
                </Button>
              </div>
            </div>
          ) : loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="aspect-[2/3] rounded-[2rem] bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <AnimatePresence mode="popLayout">
                {movies.map((movie, idx) => (
                  <motion.div
                    key={movie.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: Math.min(idx * 0.03, 0.3) }}
                    onClick={() => navigate(`/movie/${movie.id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[2/3] relative rounded-[2rem] overflow-hidden mb-4 shadow-xl border border-white/5">
                      <img 
                        src={movie.posterUrl} 
                        alt={movie.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/500x750/1a1a2e/FACC15?text=${encodeURIComponent(movie.title)}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <div className="flex items-center gap-1 text-accent mb-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-bold">{movie.rating}</span>
                        </div>
                        <p className="text-xs text-white/60 line-clamp-2">{movie.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h4 className="font-bold text-lg leading-tight group-hover:text-accent transition-colors truncate">{movie.title}</h4>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-white/40 font-mono uppercase tracking-widest">{movie.year} • {movie.language}</p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/movie/${movie.id}#reviews`);
                        }}
                        className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 hover:underline"
                      >
                        Review <MessageSquare className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>

        {/* Recent Activity */}
        {userReviews.length > 0 && (
          <section className="px-6 py-20 max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="text-accent" />
              Your Recent Activity
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userReviews.slice(0, 3).map((rev, idx) => (
                <div key={idx} className="glass p-6 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-accent group-hover:underline cursor-pointer" onClick={() => navigate(`/movie/${rev.movie_id}`)}>
                      {rev.movie_title}
                    </h4>
                    <div className="flex items-center gap-1 text-accent">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold">{rev.rating}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm italic line-clamp-2">"{rev.comment}"</p>
                  <p className="text-[10px] text-white/20 uppercase tracking-widest font-mono mt-4">
                    {new Date(rev.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [newReviewId, setNewReviewId] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const reviewsRef = React.useRef<HTMLDivElement>(null);
  const formRef = React.useRef<HTMLDivElement>(null);

  const fetchReviews = async () => {
    if (!id) return;
    try {
      const revRes = await fetch(`/api/reviews/${id}`);
      const revData = await revRes.json();
      setReviews(revData);
    } catch (error) {
      console.error("Failed to fetch reviews", error);
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
    } catch (err: any) {
      if (err.message === "MISSING_GEMINI_API_KEY") {
        setError("Gemini API key is missing. Add GEMINI_API_KEY in your .env file and restart npm run dev.");
      } else if (err.message === "RATE_LIMIT_EXCEEDED") {
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
    if (!loading && window.location.hash === '#reviews') {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [loading]);

  const handleReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!movie) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          movie_id: id, // Use the ID from URL to ensure consistency
          movie_title: movie.title,
          rating,
          comment
        }),
      });
      if (res.ok) {
        const result = await res.json();
        setComment('');
        setRating(5);
        await fetchReviews();
        
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);

        // Highlight the new review
        if (result.reviewId) {
          setNewReviewId(result.reviewId);
          setTimeout(() => setNewReviewId(null), 5000);
        }

        // Scroll to reviews
        reviewsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to post review');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-12 h-12 text-accent animate-spin" />
    </div>
  );

  if (error || !movie) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="glass p-10 rounded-[3rem] max-w-md">
        <Film className="w-16 h-16 text-accent mx-auto mb-6 opacity-20" />
        <h2 className="text-2xl font-bold mb-4">{error || "Movie not found"}</h2>
        <p className="text-white/40 mb-8">
          {error ? "Gemini API is currently busy or quota is exhausted. Please try again in a minute." : "We couldn't find the details for this movie."}
        </p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen pb-24">
        {/* Background Backdrop */}
        <div className="fixed inset-0 -z-10">
          <img 
            src={movie.backdropUrl || movie.posterUrl} 
            className="w-full h-full object-cover opacity-10 blur-xl" 
            referrerPolicy="no-referrer" 
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-bg/90" />
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="grid md:grid-cols-[350px_1fr] gap-12">
            {/* Poster & Quick Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 mb-6 relative group">
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title} 
                  className="w-full h-auto" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/500x750/1a1a2e/FACC15?text=${encodeURIComponent(movie.title)}`;
                  }}
                />
              </div>
              <div className="glass p-6 rounded-[2rem] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-sm uppercase tracking-widest font-mono">Rating</span>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-xl font-bold">{movie.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-sm uppercase tracking-widest font-mono">Year</span>
                  <span className="font-bold">{movie.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-sm uppercase tracking-widest font-mono">Language</span>
                  <span className="font-bold">{movie.language}</span>
                </div>
              </div>
            </motion.div>

            {/* Details & Reviews */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">{movie.title}</h1>
                <div className="flex gap-3">
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="gap-2 px-8 py-4 text-lg"
                      onClick={() => {
                        const url = movie.trailerDirectUrl || movie.trailerUrl;
                        if (url) window.open(url, '_blank');
                      }}
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Watch Trailer
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="px-8 py-4 text-lg"
                      onClick={() => reviewsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Read Reviews
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {movie.genre.map(g => (
                  <span key={g} className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium border border-white/10">
                    {g}
                  </span>
                ))}
              </div>

              {/* Video Player / Link */}
              <div className="mb-12 trailer-section">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Play className="text-accent fill-current" />
                    Movie Trailer
                  </h3>
                </div>
                
                <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass flex flex-col items-center justify-center p-8 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <Play className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white/60">Watch Official Trailer</p>
                    <p className="text-sm text-white/40 mb-4">Mawa, YouTube lo full trailer chusi enjoys cheyyi!</p>
                    <Button 
                      onClick={() => window.open(movie.trailerDirectUrl || movie.trailerUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' trailer')}`, '_blank')}
                    >
                      Watch on YouTube
                    </Button>
                  </div>
                </div>
              </div>

              <p className="text-xl text-white/70 leading-relaxed mb-12">
                {movie.description}
              </p>

              {/* Watch Links */}
              {movie.watchLinks && movie.watchLinks.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Film className="text-accent" />
                    Where to Watch
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {movie.watchLinks.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center gap-3 px-6 py-4 rounded-2xl transition-all group border",
                          link.platform.toLowerCase().includes('net mirror') 
                            ? "bg-accent/10 border-accent/30 hover:bg-accent/20 hover:border-accent" 
                            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-accent/50"
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                          link.platform.toLowerCase().includes('net mirror')
                            ? "bg-accent text-black"
                            : "bg-accent/10 group-hover:bg-accent"
                        )}>
                          <Play className={cn(
                            "w-5 h-5 transition-colors",
                            link.platform.toLowerCase().includes('net mirror')
                              ? "text-black"
                              : "text-accent group-hover:text-black"
                          )} />
                        </div>
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-widest font-mono">
                            {link.platform.toLowerCase().includes('net mirror') ? 'Mirror Link' : 'Stream on'}
                          </p>
                          <p className="font-bold">{link.platform}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Cast Section */}
              {movie.cast && movie.cast.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <User className="text-accent" />
                    Meet the Cast
                  </h3>
                  <div className="flex gap-4 overflow-x-auto pb-6 snap-x no-scrollbar">
                    {movie.cast.map((member, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-3 rounded-3xl text-center group min-w-[150px] flex-shrink-0 snap-start"
                      >
                        <div className="aspect-square rounded-2xl overflow-hidden mb-3 bg-white/5">
                          <img 
                            src={member.imageUrl} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=8b5cf6&color=fff&size=200`;
                            }}
                          />
                        </div>
                        <p className="font-bold text-sm truncate">{member.name}</p>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">{member.role}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews List */}
              <div ref={reviewsRef} className="space-y-6 scroll-mt-10 mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Community Reviews</h3>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">
                    {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
                  </span>
                </div>
                {reviews.length > 0 ? reviews.map((rev, idx) => (
                  <motion.div 
                    key={rev.id} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: newReviewId === rev.id ? [1, 1.02, 1] : 1,
                      borderColor: newReviewId === rev.id ? 'rgba(var(--accent), 0.5)' : 'rgba(255, 255, 255, 0.05)'
                    }}
                    transition={{ 
                      delay: newReviewId === rev.id ? 0 : idx * 0.1,
                      scale: { duration: 0.5, repeat: 2 }
                    }}
                    className={cn(
                      "p-6 rounded-3xl border transition-all duration-500",
                      newReviewId === rev.id ? "bg-accent/5 border-accent shadow-[0_0_20px_rgba(var(--accent),0.1)]" : "border-white/5 bg-white/[0.02]"
                    )}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                          {rev.username ? rev.username[0].toUpperCase() : '?'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-bold">{rev.username || 'Anonymous'}</p>
                            {newReviewId === rev.id && (
                              <span className="text-[10px] bg-accent text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">New</span>
                            )}
                          </div>
                          <p className="text-xs text-white/30">{new Date(rev.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold">{rev.rating}/10</span>
                      </div>
                    </div>
                    <p className="text-white/70 italic">"{rev.comment}"</p>
                  </motion.div>
                )) : (
                  <p className="text-white/30 italic">No reviews yet. Be the first to share your thoughts!</p>
                )}
              </div>

              {/* Review Form */}
              <div ref={formRef} className="glass p-8 rounded-[2.5rem] mb-12 scroll-mt-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageSquare className="text-accent" />
                  Write a Review
                </h3>
                
                {localStorage.getItem('token') ? (
                  <form onSubmit={handleReview} className="space-y-6">
                    <AnimatePresence>
                      {showSuccess && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-accent/10 border border-accent/20 p-4 rounded-2xl text-accent text-sm font-bold flex items-center gap-2 overflow-hidden"
                        >
                          <Star className="w-4 h-4 fill-current" />
                          Review posted successfully, mawa!
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div>
                      <label className="block text-sm text-white/40 uppercase tracking-widest font-mono mb-3">Your Rating</label>
                      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => setRating(n)}
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all flex-shrink-0",
                              rating >= n ? "bg-accent text-black" : "bg-white/5 text-white/40 hover:bg-white/10"
                            )}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/40 uppercase tracking-widest font-mono mb-3">Your Thoughts</label>
                      <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[120px]"
                        placeholder="What did you think about the movie?"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full md:w-auto" disabled={submitting}>
                      {submitting ? <Loader2 className="animate-spin" /> : 'Post Review'}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-white/60 mb-6 italic">Mawa, reviews post cheyalanukunte login avvali!</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                      <Button onClick={() => navigate('/login')}>Login to Review</Button>
                      <Button variant="secondary" onClick={() => navigate('/signup')}>Create Account</Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// --- Placeholder Pages ---

const ExplorePage = () => (
  <Layout>
    <div className="min-h-screen p-6 pb-24">
      <h1 className="text-4xl font-bold mb-8">Explore</h1>
      <div className="grid grid-cols-2 gap-4">
        {['Trending', 'New Releases', 'Top Rated', 'Coming Soon'].map(category => (
          <div key={category} className="aspect-video glass rounded-[2rem] flex items-center justify-center border border-white/5 hover:border-accent/30 transition-all cursor-pointer group">
            <span className="text-lg font-bold group-hover:text-accent">{category}</span>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

const LibraryPage = () => {
  const [userReviews, setUserReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserReviews = async () => {
    try {
      const res = await fetch('/api/user/reviews', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
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

  return (
    <Layout>
      <div className="min-h-screen p-6 pb-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Reviews</h1>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-accent animate-spin" />
          </div>
        ) : userReviews.length > 0 ? (
          <div className="grid gap-6">
            {userReviews.map((rev, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-all group cursor-pointer"
                onClick={() => navigate(`/movie/${rev.movie_id}`)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-xl text-accent group-hover:underline">
                    {rev.movie_title}
                  </h4>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">{rev.rating}/10</span>
                  </div>
                </div>
                <p className="text-white/70 italic mb-4">"{rev.comment}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-white/20 uppercase tracking-widest font-mono">
                    {new Date(rev.created_at).toLocaleDateString()}
                  </p>
                  <span className="text-[10px] text-accent uppercase tracking-widest font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Movie <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass rounded-[2.5rem] border border-dashed border-white/10">
            <MessageSquare className="w-16 h-16 text-white/10 mx-auto mb-4" />
            <p className="text-white/30 italic">Mawa, nuvvu inka reviews emi raayaledu.</p>
            <Button variant="ghost" className="mt-4" onClick={() => navigate('/')}>Explore Movies</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [userReviews, setUserReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserReviews = async () => {
    try {
      const res = await fetch('/api/user/reviews', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    navigate('/login');
  };

  return (
    <Layout>
      <div className="min-h-screen p-6 pb-24 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold">Profile</h1>
          <button onClick={logout} className="p-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest">Logout</span>
            <LogOut className="w-5 h-5" />
          </button>
        </div>
        
        <div className="glass p-8 rounded-[2.5rem] border border-white/5 mb-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-4xl font-bold text-black shadow-[0_0_30px_rgba(var(--accent),0.3)]">
              {user.username ? user.username[0].toUpperCase() : '?'}
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">{user.username}</h2>
              <p className="text-white/40 font-mono text-sm">{user.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 text-center">
              <p className="text-accent text-3xl font-bold">{userReviews.length}</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Total Reviews</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 text-center">
              <p className="text-accent text-3xl font-bold">0</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Watchlist</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <MessageSquare className="text-accent" />
            Your Reviews
          </h3>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-accent animate-spin" />
            </div>
          ) : userReviews.length > 0 ? (
            <div className="grid gap-6">
              {userReviews.map((rev, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-all group cursor-pointer"
                  onClick={() => navigate(`/movie/${rev.movie_id}`)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-xl text-accent group-hover:underline">
                      {rev.movie_title}
                    </h4>
                    <div className="flex items-center gap-1 text-accent">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold">{rev.rating}/10</span>
                    </div>
                  </div>
                  <p className="text-white/70 italic mb-4">"{rev.comment}"</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-white/20 uppercase tracking-widest font-mono">
                      {new Date(rev.created_at).toLocaleDateString()}
                    </p>
                    <span className="text-[10px] text-accent uppercase tracking-widest font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Movie <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass rounded-[2.5rem] border border-dashed border-white/10">
              <MessageSquare className="w-12 h-12 text-white/10 mx-auto mb-4" />
              <p className="text-white/30 italic">Mawa, nuvvu inka reviews emi raayaledu.</p>
              <Button variant="ghost" className="mt-4" onClick={() => navigate('/')}>Explore Movies</Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <AuthPage type="login" /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuthenticated ? <AuthPage type="signup" /> : <Navigate to="/" />} />
        
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        
        {/* Protected Routes */}
        <Route path="/library" element={isAuthenticated ? <LibraryPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
