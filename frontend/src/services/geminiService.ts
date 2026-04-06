import { GoogleGenAI, Type } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (aiClient) return aiClient;

  // Use Vite env for frontend compatibility
  const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("MISSING_GEMINI_API_KEY");
  }

  aiClient = new GoogleGenAI({ apiKey });
  return aiClient;
}

export interface CastMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface WatchLink {
  platform: string;
  url: string;
}

export interface Movie {
  id: string;
  title: string;
  year: string;
  description: string;
  rating: string;
  genre: string[];
  language: string;
  posterUrl: string;
  backdropUrl?: string;
  trailerUrl?: string;
  trailerThumbnail?: string;
  trailerDirectUrl?: string;
  watchLinks?: WatchLink[];
  leadActor?: string;
  leadActorImage?: string;
  cast?: CastMember[];
}


const POPULAR_MOVIES: Movie[] = [
  {
    id: "devara-1",
    title: "Devara: Part 1",
    year: "2024",
    description: "An epic action saga set in a coastal region, revolving around the life of a fearless man who protects his people from evil forces.",
    rating: "8.2",
    genre: ["Action", "Drama"],
    language: "Telugu",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/8f/Devara_Part_1_Poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/8/8f/Devara_Part_1_Poster.jpg",
    leadActor: "N.T. Rama Rao Jr.",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Jr._NTR_stills_on_his_birthday-5.jpg/440px-Jr._NTR_stills_on_his_birthday-5.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=fW_0G9p8X_E",
    cast: [
      { name: "N.T. Rama Rao Jr.", role: "Devara", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Jr._NTR_stills_on_his_birthday-5.jpg/440px-Jr._NTR_stills_on_his_birthday-5.jpg" },
      { name: "Janhvi Kapoor", role: "Thangam", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Janhvi_Kapoor_2019.jpg/440px-Janhvi_Kapoor_2019.jpg" },
      { name: "Saif Ali Khan", role: "Bhaira", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Saif_Ali_Khan_2014.jpg/440px-Saif_Ali_Khan_2014.jpg" }
    ]
  },
  {
    id: "puspa-2-the-rule",
    title: "Pushpa 2: The Rule",
    year: "2024",
    description: "The clash between Pushpa Raj and Bhanwar Singh Shekhawat continues in this high-octane sequel to the blockbuster 'Pushpa: The Rise'.",
    rating: "9.0",
    genre: ["Action", "Thriller"],
    language: "Telugu",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Pushpa_the_rule_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Pushpa_the_rule_poster.jpg",
    leadActor: "Allu Arjun",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Allu_Arjun_at_Naa_Peru_Surya_Trailer_Launch.jpg/440px-Allu_Arjun_at_Naa_Peru_Surya_Trailer_Launch.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=QW_Jxj9FHgo",
    cast: [
      { name: "Allu Arjun", role: "Pushpa Raj", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Allu_Arjun_at_Naa_Peru_Surya_Trailer_Launch.jpg/440px-Allu_Arjun_at_Naa_Peru_Surya_Trailer_Launch.jpg" },
      { name: "Rashmika Mandanna", role: "Srivalli", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rashmika_Mandanna_snapped_at_airport_in_2022_%28cropped%29.jpg/440px-Rashmika_Mandanna_snapped_at_airport_in_2022_%28cropped%29.jpg" },
      { name: "Fahadh Faasil", role: "Bhanwar Singh", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fahadh_Faasil_at_Trance_Press_Meet.jpg/440px-Fahadh_Faasil_at_Trance_Press_Meet.jpg" }
    ]
  },
  {
    id: "kalki-2898-ad",
    title: "Kalki 2898 AD",
    year: "2024",
    description: "In the dystopian future of Kasi, a bounty hunter's journey intertwines with a legendary hero from the past to protect a new world.",
    rating: "8.5",
    genre: ["Action", "Adventure", "Sci-Fi"],
    language: "Telugu",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/14/Kalki_2898_AD_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/1/14/Kalki_2898_AD_poster.jpg",
    leadActor: "Prabhas",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Prabhas_in_2020.jpg/440px-Prabhas_in_2020.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=yZFSAagTkFU",
    cast: [
      { name: "Prabhas", role: "Bhairava", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Prabhas_in_2020.jpg/440px-Prabhas_in_2020.jpg" },
      { name: "Deepika Padukone", role: "Sumathi", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Deepika_Padukone_2023.jpg/440px-Deepika_Padukone_2023.jpg" },
      { name: "Amitabh Bachchan", role: "Ashwatthama", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Amitabh_Bachchan_2020.jpg/440px-Amitabh_Bachchan_2020.jpg" }
    ]
  },
  {
    id: "hanu-man",
    title: "Hanu-Man",
    year: "2024",
    description: "An ordinary young man gains the superhuman strength of Lord Hanuman and uses it to protect his village from a technology-driven villain.",
    rating: "8.1",
    genre: ["Action", "Adventure"],
    language: "Telugu",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/b5/HanuMan_film_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/b/b5/HanuMan_film_poster.jpg",
    leadActor: "Teja Sajja",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Teja_Sajja_at_Hanu-Man_success_meet.jpg/440px-Teja_Sajja_at_Hanu-Man_success_meet.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=OI9RZLG_JPA",
    cast: [
      { name: "Teja Sajja", role: "Hanumanthu", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Teja_Sajja_at_Hanu-Man_success_meet.jpg/440px-Teja_Sajja_at_Hanu-Man_success_meet.jpg" }
    ]
  },
  {
    id: "salaar-ceasefire",
    title: "Salaar: Part 1 - Ceasefire",
    year: "2023",
    description: "A gang leader tries to keep a promise made to his dying friend while fighting off rival criminal gangs.",
    rating: "7.9",
    genre: ["Action", "Drama"],
    language: "Telugu",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Salaar_Part_1_-_Ceasefire_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Salaar_Part_1_-_Ceasefire_poster.jpg",
    leadActor: "Prabhas",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Prabhas_in_2020.jpg/440px-Prabhas_in_2020.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=n4oZETu62ik"
  },
  {
    id: "leo-the-movie",
    title: "Leo",
    year: "2023",
    description: "A mild-mannered cafe owner becomes a local hero, but old secrets catch up with him in this intense action thriller.",
    rating: "8.1",
    genre: ["Action", "Thriller"],
    language: "Tamil",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Leo_film_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Leo_film_poster.jpg",
    leadActor: "Vijay",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Vijay_at_Beast_Audio_Launch_%28cropped%29.jpg/440px-Vijay_at_Beast_Audio_Launch_%28cropped%29.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=Y7GFlhPCWkg",
    cast: [
      { name: "Vijay", role: "Parthiban", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Vijay_at_Beast_Audio_Launch_%28cropped%29.jpg/440px-Vijay_at_Beast_Audio_Launch_%28cropped%29.jpg" },
      { name: "Trisha Krishnan", role: "Sathyavathi", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Trisha_at_SIIMA_Awards_2016.jpg/440px-Trisha_at_SIIMA_Awards_2016.jpg" }
    ]
  },
  {
    id: "vikram-film",
    title: "Vikram",
    year: "2022",
    description: "A special agent is tasked with finding and eliminating a group of masked men who assassinate a cop.",
    rating: "8.4",
    genre: ["Action", "Thriller"],
    language: "Tamil",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/Vikram_film_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/Vikram_film_poster.jpg",
    leadActor: "Kamal Haasan",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kamal_Haasan_at_Vikram_Audio_Launch.jpg/440px-Kamal_Haasan_at_Vikram_Audio_Launch.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=OKBAH_mDQFg",
    cast: [
      { name: "Kamal Haasan", role: "Vikram", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kamal_Haasan_at_Vikram_Audio_Launch.jpg/440px-Kamal_Haasan_at_Vikram_Audio_Launch.jpg" },
      { name: "Vijay Sethupathi", role: "Santhanam", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Vijay_Sethupathi_at_96_Audio_Launch.jpg/440px-Vijay_Sethupathi_at_96_Audio_Launch.jpg" },
      { name: "Fahadh Faasil", role: "Amar", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fahadh_Faasil_at_Trance_Press_Meet.jpg/440px-Fahadh_Faasil_at_Trance_Press_Meet.jpg" }
    ]
  },
  {
    id: "manjummel-boys",
    title: "Manjummel Boys",
    year: "2024",
    description: "A group of friends from Kerala face a life-altering event during their trip to Guna Caves in Kodaikanal.",
    rating: "8.6",
    genre: ["Adventure", "Drama"],
    language: "Malayalam",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/d6/Manjummel_Boys_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/d/d6/Manjummel_Boys_poster.jpg",
    leadActor: "Soubin Shahir",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Soubin_Shahir_at_Mumbai.jpg/440px-Soubin_Shahir_at_Mumbai.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=KPRM3dBEFMc"
  },
  {
    id: "lucifer-ml",
    title: "Lucifer",
    year: "2019",
    description: "A powerful politician's demise heralds a power struggle in Kerala's political landscape, with a mysterious stranger at the center.",
    rating: "7.9",
    genre: ["Action", "Drama"],
    language: "Malayalam",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/Lucifer_2019_film_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/Lucifer_2019_film_poster.jpg",
    leadActor: "Mohanlal",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mohanlal_in_2019_at_Lucifer_Press_Meet.jpg/440px-Mohanlal_in_2019_at_Lucifer_Press_Meet.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=ZoiqoLiVE8Y"
  },
  {
    id: "stree-2",
    title: "Stree 2",
    year: "2024",
    description: "Vicky and his friends return to face a brand new headless terror haunting the town of Chanderi.",
    rating: "8.0",
    genre: ["Comedy", "Drama"],
    language: "Hindi",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/83/Stree_2_Film_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/8/83/Stree_2_Film_poster.jpg",
    leadActor: "Shraddha Kapoor",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Shraddha_Kapoor_at_Half_Girlfriend_trailer_launch.jpg/440px-Shraddha_Kapoor_at_Half_Girlfriend_trailer_launch.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=J8CHtJLNptc",
    cast: [
      { name: "Shraddha Kapoor", role: "Stree", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Shraddha_Kapoor_at_Half_Girlfriend_trailer_launch.jpg/440px-Shraddha_Kapoor_at_Half_Girlfriend_trailer_launch.jpg" },
      { name: "Rajkummar Rao", role: "Vicky", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Rajkummar_Rao_at_Roohi_press_conference.jpg/440px-Rajkummar_Rao_at_Roohi_press_conference.jpg" }
    ]
  },
  {
    id: "love-story",
    title: "Love Story",
    year: "2021",
    description: "A boy and girl from a village move to the big city to pursue their dreams and fall in love.",
    rating: "7.5",
    genre: ["Love", "Drama"],
    language: "Telugu",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/c/c9/Love_Story_2021_Telugu_Film_Poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/c/c9/Love_Story_2021_Telugu_Film_Poster.jpg",
    leadActor: "Naga Chaitanya",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Naga_Chaitanya_at_Manam_Audio_Launch.jpg/440px-Naga_Chaitanya_at_Manam_Audio_Launch.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=IHWEMLGwUaM"
  },
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    year: "2024",
    description: "Wolverine and Deadpool team up to save the multiverse in this high-energy Marvel blockbuster.",
    rating: "8.3",
    genre: ["Action", "Comedy", "Adventure"],
    language: "English",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/8d/Deadpool_%26_Wolverine_poster.jpg",
    backdropUrl: "https://upload.wikimedia.org/wikipedia/en/8/8d/Deadpool_%26_Wolverine_poster.jpg",
    leadActor: "Ryan Reynolds",
    leadActorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ryan_Reynolds_2016.jpg/440px-Ryan_Reynolds_2016.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=73_1biulkYk",
    cast: [
      { name: "Ryan Reynolds", role: "Deadpool", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ryan_Reynolds_2016.jpg/440px-Ryan_Reynolds_2016.jpg" },
      { name: "Hugh Jackman", role: "Wolverine", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hugh_Jackman_2013.jpg/440px-Hugh_Jackman_2013.jpg" }
    ]
  }
];

const CACHE_PREFIX = 'cinereview_v2_'; // bumped to bust broken proxy URL cache
const CACHE_EXPIRY = 1000 * 60 * 60 * 24; // 24 hours

// Clear old cache keys from previous versions on startup
(function clearOldCache() {
  try {
    const oldPrefix = 'cinereview_cache_';
    Object.keys(localStorage)
      .filter(k => k.startsWith(oldPrefix))
      .forEach(k => localStorage.removeItem(k));
  } catch (e) {}
})();

function getCachedData(key: string) {
  const cached = localStorage.getItem(CACHE_PREFIX + key);
  if (!cached) return null;
  const { data, timestamp } = JSON.parse(cached);
  if (Date.now() - timestamp > CACHE_EXPIRY) {
    localStorage.removeItem(CACHE_PREFIX + key);
    return null;
  }
  return data;
}

function setCachedData(key: string, data: any) {
  localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ data, timestamp: Date.now() }));
}

function getYoutubeInfo(url: string, posterFallback: string) {
  if (!url || !url.includes('yout')) return { embedUrl: '', thumbnailUrl: posterFallback, directUrl: '' };
  
  let videoId = '';
  try {
    if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('youtube.com/shorts/')[1].split('?')[0];
    } else if (url.includes('embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }
  } catch (e) {
    console.error("Error parsing YouTube URL", e);
  }
  
  if (videoId && videoId.length > 5) {
    return {
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      directUrl: `https://www.youtube.com/watch?v=${videoId}`
    };
  }
  
  return { embedUrl: '', thumbnailUrl: posterFallback, directUrl: '' };
}

export async function searchMovies(query: string, language?: string, genre?: string): Promise<Movie[]> {
  const cacheKey = `search_${query}_${language || 'all'}_${genre || 'all'}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  console.log("Searching movies for:", { query, language, genre });

  // SMART LOCAL FILTERING ON POPULAR_MOVIES
  let localResults = [...POPULAR_MOVIES];

  // Filter by language
  if (language && language !== '' && language !== 'All Languages') {
    const lang = language.toLowerCase();
    localResults = localResults.filter(m => m.language.toLowerCase() === lang);
  }

  // Filter by genre
  if (genre && genre !== '') {
    const g = genre.toLowerCase();
    localResults = localResults.filter(m => m.genre.some(gen => gen.toLowerCase() === g));
  }

  // Filter by query - but RELAXED if genre/language are specified
  const isGenericQuery = query && (
    query.toLowerCase().includes('movies') || 
    (genre && query.toLowerCase().includes(genre.toLowerCase())) ||
    (language && query.toLowerCase().includes(language.toLowerCase()))
  );

  if (query && !query.toLowerCase().includes('trending') && !isGenericQuery) {
    const q = query.toLowerCase();
    localResults = localResults.filter(m => 
      m.title.toLowerCase().includes(q) || 
      m.leadActor?.toLowerCase().includes(q)
    );
  }

  // If results found locally, return them
  if (localResults.length > 0 && query && !query.toLowerCase().includes('trending')) {
    setCachedData(cacheKey, localResults);
    return localResults;
  }

  // Return localResults for categories if no fresh data searched
  if (!query || query.toLowerCase().includes('trending')) {
     setCachedData(cacheKey, localResults);
     return localResults;
  }

  try {
    const ai = getAiClient();
    const prompt = `Provide 10 real movies matching "${query}" ${language ? `in ${language}` : ""} ${genre ? `genre ${genre}` : ""}. 
    Include real IMDb (m.media-amazon.com) poster URLs.
    JSON format: id, title, year, description, rating, genre (array), language, posterUrl, leadActor, leadActorImage.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      }
    });

    let combined = JSON.parse(response.text || "[]") as Movie[];

    setCachedData(cacheKey, combined);
    return combined;
  } catch (error) {
    return localResults;
  }
}

export async function getMovieDetails(id: string): Promise<Movie | null> {
  const cacheKey = `details_${id}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const staticMovie = POPULAR_MOVIES.find(m => m.id === id);
  if (staticMovie) {
     if (!staticMovie.cast || staticMovie.cast.length === 0) {
        staticMovie.cast = [
           { name: staticMovie.leadActor || "Main Lead", role: "Protagonist", imageUrl: staticMovie.leadActorImage || staticMovie.posterUrl }
        ];
     }
     setCachedData(cacheKey, staticMovie);
     return staticMovie;
  }

  try {
    const ai = getAiClient();
    const prompt = `Provide detailed movie info for ID: "${id}" in JSON.
    Include: id, title, year, description, rating, genre (array), language, posterUrl, backdropUrl, trailerUrl, watchLinks (array), cast (member with name, role, imageUrl).`;
    
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      }
    });

    const data = JSON.parse(response.text || "null");
    if (data) {
        setCachedData(cacheKey, data);
    }
    return data;
  } catch (error) {
    return null;
  }
}
