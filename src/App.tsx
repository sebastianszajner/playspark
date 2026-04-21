import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { LayoutGrid, CreditCard, Shuffle, Star, User, Zap, Search, X, ArrowUp, SortAsc, Moon, Sun, CheckCircle2, Play, Mic, BarChart2, Wand2, MessageSquarePlus, Grid3x3, Send, Baby } from "lucide-react";
import { ACTIVITIES } from "./data/activities";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { ActivityCard } from "./components/ActivityCard";
import { MatrixView } from "./components/MatrixView";
import { ReelsView } from "./components/ReelsView";
import { RescueMode } from "./components/RescueMode";
import { AboutPage } from "./components/AboutPage";
import { WowHeroScreen } from "./components/WowHeroScreen";
import { SplashScreen } from "./components/SplashScreen";
import { Confetti } from "./components/Confetti";
import { StatsModal } from "./components/StatsModal";
import { ActivityWizard } from "./components/ActivityWizard";
import { DevelopmentHub } from "./components/DevelopmentHub";
import type { SortOption, Activity } from "./data/types";
import { parseDuration, SORT_OPTIONS, TYPE_META } from "./data/types";
import { WEEKLY_INSIGHTS } from "./data/parentCoach";

type Tab = "start" | "activities" | "about" | "development";

const FAVORITES_KEY = "playspark_favorites";
const DARK_MODE_KEY = "playspark_dark";
const COMPLETED_KEY = "playspark_completed";
const NOTES_KEY = "playspark_notes";
const STREAK_KEY = "playspark_streak";
const LAST_COMPLETE_KEY = "playspark_last_complete";
const XP_KEY = "playspark_xp";
const HISTORY_KEY = "playspark_history";
const RATINGS_KEY = "playspark_ratings";
const PROPOSALS_KEY = "playspark_proposals";
const COMBO_DATE_KEY = "playspark_combo_date";
const COMBO_TYPES_KEY = "playspark_combo_types";

const ACHIEVEMENTS = [
  { id: "first",  emoji: "🌟", label: "Pierwsza zabawa!",       count: 1  },
  { id: "five",   emoji: "⭐", label: "5 zabaw — dobra robota!", count: 5  },
  { id: "ten",    emoji: "🏆", label: "Złota Dziesiątka!",       count: 10 },
  { id: "twenty", emoji: "🔥", label: "20 zabaw — PRO rodzic!",  count: 20 },
  { id: "fifty",  emoji: "👑", label: "50 zabaw — Legenda!",     count: 50 },
];

function loadStreak(): number {
  try {
    const last = localStorage.getItem(LAST_COMPLETE_KEY);
    const count = parseInt(localStorage.getItem(STREAK_KEY) || "0");
    if (!last) return 0;
    const today = new Date().toDateString();
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    return (last === today || last === yesterday.toDateString()) ? count : 0;
  } catch { return 0; }
}

function updateStreak(currentStreak: number): number {
  const today = new Date().toDateString();
  const last = localStorage.getItem(LAST_COMPLETE_KEY);
  if (last === today) return currentStreak;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  const newCount = last === yesterday.toDateString() ? currentStreak + 1 : 1;
  localStorage.setItem(STREAK_KEY, String(newCount));
  localStorage.setItem(LAST_COMPLETE_KEY, today);
  return newCount;
}

function getDailyActivity(activities: Activity[]): Activity {
  const dateStr = new Date().toDateString();
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash = ((hash * 31) + dateStr.charCodeAt(i)) >>> 0;
  const pool = activities.filter(a => a.prep.length === 1 && a.prep[0] === "zero prep");
  const src = pool.length >= 10 ? pool : activities;
  return src[hash % src.length];
}

function loadFavorites(): number[] {
  try { const raw = localStorage.getItem(FAVORITES_KEY); return raw ? JSON.parse(raw) : []; }
  catch { return []; }
}
function saveFavorites(ids: number[]) { localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids)); }

function loadDarkMode(): boolean {
  try {
    const stored = localStorage.getItem(DARK_MODE_KEY);
    if (stored !== null) return stored === "true";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  } catch { return false; }
}

function loadCompleted(): number[] {
  try { const raw = localStorage.getItem(COMPLETED_KEY); return raw ? JSON.parse(raw) : []; }
  catch { return []; }
}

function loadNotes(): Record<number, string> {
  try { const raw = localStorage.getItem(NOTES_KEY); return raw ? JSON.parse(raw) : {}; }
  catch { return {}; }
}

function loadXp(): number {
  try { return parseInt(localStorage.getItem(XP_KEY) || "0"); }
  catch { return 0; }
}

function loadHistory(): string[] {
  try { const raw = localStorage.getItem(HISTORY_KEY); return raw ? JSON.parse(raw) : []; }
  catch { return []; }
}

function loadRatings(): Record<number, number> {
  try { const raw = localStorage.getItem(RATINGS_KEY); return raw ? JSON.parse(raw) : {}; }
  catch { return {}; }
}

function loadProposals(): string[] {
  try { const raw = localStorage.getItem(PROPOSALS_KEY); return raw ? JSON.parse(raw) : []; }
  catch { return []; }
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  const isAchievement = /[🌟⭐🏆🔥👑💫🎉⚡]/.test(message);
  useEffect(() => {
    const t = setTimeout(onClose, isAchievement ? 3500 : 2500);
    return () => clearTimeout(t);
  }, [onClose, isAchievement]);

  if (isAchievement) {
    return (
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 toast-achievement">
        <div className="text-center px-6 py-3 rounded-2xl shadow-2xl"
          style={{ background: "linear-gradient(135deg, #1a1204, #1a1a2e)", border: "2px solid #F59E0B", minWidth: 200 }}>
          <div className="text-2xl mb-1">{message.split(" ")[0]}</div>
          <div className="text-white text-[14px] font-black">{message.split(" ").slice(1).join(" ")}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 toast">
      <div className="bg-[#1a1a2e] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl shadow-xl flex items-center gap-2">
        {message}
      </div>
    </div>
  );
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [tab, setTab] = useState<Tab>("start");
  const activitiesRef = useRef<HTMLDivElement>(null);
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  const [placeFilters, setPlaceFilters] = useState<string[]>([]);
  const [compFilters, setCompFilters] = useState<string[]>([]);
  const [topicFilters, setTopicFilters] = useState<string[]>([]);
  const [ageFilters, setAgeFilters] = useState<string[]>([]);
  const [moodFilters, setMoodFilters] = useState<string[]>([]);
  const [methodFilters, setMethodFilters] = useState<string[]>([]);
  const [prepFilters, setPrepFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [view, setView] = useState<"cards" | "matrix" | "reels" | "compact">("cards");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [favorites, setFavorites] = useState<number[]>(loadFavorites);
  const [completed, setCompleted] = useState<number[]>(loadCompleted);
  const [notes, setNotes] = useState<Record<number, string>>(loadNotes);
  const [darkMode, setDarkMode] = useState(loadDarkMode);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [streak, setStreak] = useState(loadStreak);
  const dailyActivity = useMemo(() => getDailyActivity(ACTIVITIES), []);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const expandedRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Gamification state
  const [xp, setXp] = useState(loadXp);
  const [history, setHistory] = useState<string[]>(loadHistory);
  const [ratings, setRatings] = useState<Record<number, number>>(loadRatings);
  const [showConfetti, setShowConfetti] = useState(false);

  // UI state
  const [showStats, setShowStats] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const [showProposals, setShowProposals] = useState(false);
  const [proposals, setProposals] = useState<string[]>(loadProposals);
  const [proposalText, setProposalText] = useState("");

  // Session state — recently viewed
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);

  // Dark mode sync
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem(DARK_MODE_KEY, String(darkMode));
  }, [darkMode]);

  // URL hash routing
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#activity-")) {
      const id = parseInt(hash.replace("#activity-", ""));
      if (!isNaN(id)) { setExpanded(id); setTab("activities"); }
    } else if (hash === "#about") {
      setTab("about");
    } else if (hash === "#activities") {
      setTab("activities");
    } else if (hash === "#development") {
      setTab("development");
    }
  }, []);

  useEffect(() => {
    if (expanded !== null) {
      window.history.replaceState(null, "", `#activity-${expanded}`);
    } else if (tab === "about") {
      window.history.replaceState(null, "", "#about");
    } else if (tab === "activities") {
      window.history.replaceState(null, "", "#activities");
    } else if (tab === "development") {
      window.history.replaceState(null, "", "#development");
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [expanded, tab]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
      setShowBackToTop(scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === "Escape") {
        if (showStats) { setShowStats(false); return; }
        if (showWizard) { setShowWizard(false); return; }
        if (showProposals) { setShowProposals(false); return; }
        if (expanded !== null) setExpanded(null);
        else if (searchQuery) setSearchQuery("");
        else searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expanded, searchQuery, showStats, showWizard, showProposals]);

  const showToast = useCallback((msg: string) => setToast(msg), []);

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      saveFavorites(next);
      return next;
    });
  }, []);

  const markComplete = useCallback((id: number) => {
    setCompleted((prev) => {
      const wasCompleted = prev.includes(id);
      const next = wasCompleted ? prev.filter((c) => c !== id) : [...prev, id];
      localStorage.setItem(COMPLETED_KEY, JSON.stringify(next));

      if (!wasCompleted) {
        const today = new Date().toISOString().slice(0, 10);

        // History
        setHistory(h => {
          const nh = [...h, today];
          localStorage.setItem(HISTORY_KEY, JSON.stringify(nh));
          return nh;
        });

        // XP
        const activity = ACTIVITIES.find(a => a.id === id);
        const baseXp = 10;
        const bonusXp = streak >= 3 ? 5 : 0;
        const gainedXp = baseXp + bonusXp;
        setXp(x => {
          const nx = x + gainedXp;
          localStorage.setItem(XP_KEY, String(nx));
          return nx;
        });

        // Streak
        setStreak(s => {
          const newStreak = updateStreak(s);
          if (newStreak > s && newStreak > 1) {
            setTimeout(() => showToast(`🔥 ${newStreak} dni z rzędu!`), 400);
          }
          return newStreak;
        });

        // Achievements
        const newCount = next.length;
        const hit = ACHIEVEMENTS.find(a => a.count === newCount);
        if (hit) {
          setTimeout(() => {
            showToast(`${hit.emoji} ${hit.label}`);
            setShowConfetti(true);
          }, 800);
        }

        // Combo: 3 different types today
        if (activity) {
          const todayStr = new Date().toDateString();
          const comboDate = localStorage.getItem(COMBO_DATE_KEY);
          let comboTypes: string[] = [];
          if (comboDate === todayStr) {
            try { comboTypes = JSON.parse(localStorage.getItem(COMBO_TYPES_KEY) || "[]"); } catch { comboTypes = []; }
          }
          if (!comboTypes.includes(activity.type)) {
            comboTypes = [...comboTypes, activity.type];
            localStorage.setItem(COMBO_DATE_KEY, todayStr);
            localStorage.setItem(COMBO_TYPES_KEY, JSON.stringify(comboTypes));
            if (comboTypes.length === 3) {
              setTimeout(() => showToast("🎉 COMBO! 3 różne typy dziś — +20 XP bonus!"), 1200);
              setXp(x => { const nx = x + 20; localStorage.setItem(XP_KEY, String(nx)); return nx; });
              setShowConfetti(true);
            }
          }
        }

        if (gainedXp > 0) {
          setTimeout(() => showToast(`⚡ +${gainedXp} XP${bonusXp > 0 ? " (seria bonus)" : ""}`), 200);
        }
      }
      return next;
    });
  }, [showToast, streak]);

  const saveNote = useCallback((id: number, text: string) => {
    setNotes((prev) => {
      const next = { ...prev, [id]: text };
      localStorage.setItem(NOTES_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const saveRating = useCallback((id: number, stars: number) => {
    setRatings((prev) => {
      const next = { ...prev, [id]: stars };
      localStorage.setItem(RATINGS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const handleExpand = useCallback((id: number | null) => {
    setExpanded(id);
    if (id !== null) {
      setRecentlyViewed(prev => {
        const next = [id, ...prev.filter(x => x !== id)].slice(0, 10);
        return next;
      });
    }
  }, []);

  const { filtered, relaxedFilters } = useMemo(() => {
    const applyFilters = (overrides: Partial<Record<string, string[]>> = {}) => {
      const tf = overrides.type ?? typeFilters;
      const pf = overrides.place ?? placeFilters;
      const cf = overrides.comp ?? compFilters;
      const tpf = overrides.topic ?? topicFilters;
      const af = overrides.age ?? ageFilters;
      const mf = overrides.mood ?? moodFilters;
      const mtf = overrides.method ?? methodFilters;
      const ppf = overrides.prep ?? prepFilters;

      return ACTIVITIES.filter((a) => {
        if (showFavoritesOnly && !favorites.includes(a.id)) return false;
        if (showCompletedOnly && !completed.includes(a.id)) return false;
        if (tf.length > 0 && !tf.includes(a.type)) return false;
        if (pf.length > 0 && !pf.some((p) => a.place.includes(p as any))) return false;
        if (cf.length > 0 && !cf.some((c) => a.competencies.includes(c))) return false;
        if (tpf.length > 0 && !tpf.some((t) => a.topics.includes(t))) return false;
        if (af.length > 0 && !af.some((age) => a.age.includes(Number(age)))) return false;
        if (mf.length > 0 && !mf.some((m) => a.childNeeds.emotions.some((e) => e.toLowerCase().includes(m.toLowerCase())))) return false;
        if (mtf.length > 0 && !mtf.includes(a.method)) return false;
        if (ppf.length === 1) {
          if (ppf[0] === "zero" && !(a.prep.length === 1 && a.prep[0] === "zero prep")) return false;
          if (ppf[0] === "needed" && a.prep.length === 1 && a.prep[0] === "zero prep") return false;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const searchable = [a.name, a.description, a.type, ...a.competencies, ...a.topics, a.method, ...a.phrases, a.tellChild, a.tip].join(" ").toLowerCase();
          if (!searchable.includes(q)) return false;
        }
        return true;
      });
    };

    let result = applyFilters();
    if (result.length > 0 || searchQuery.trim()) {
      return { filtered: sortActivities(result, sortBy), relaxedFilters: [] as string[] };
    }

    const relaxOrder = [
      { key: "topic", label: "temat" }, { key: "comp", label: "kompetencja" },
      { key: "mood", label: "nastrój" }, { key: "prep", label: "przygotowanie" },
      { key: "method", label: "metoda" }, { key: "place", label: "miejsce" },
      { key: "type", label: "typ" }, { key: "age", label: "wiek" },
    ];
    const overrides: Record<string, string[]> = {};
    const relaxed: string[] = [];

    for (const { key, label } of relaxOrder) {
      overrides[key] = [];
      result = applyFilters(overrides);
      relaxed.push(label);
      if (result.length > 0) return { filtered: sortActivities(result, sortBy), relaxedFilters: relaxed };
    }

    return { filtered: sortActivities(ACTIVITIES, sortBy), relaxedFilters: ["wszystkie"] };
  }, [typeFilters, placeFilters, compFilters, topicFilters, ageFilters, moodFilters, methodFilters, prepFilters, showFavoritesOnly, showCompletedOnly, favorites, completed, searchQuery, sortBy]);

  const pickRandom = useCallback(() => {
    if (filtered.length === 0) return;
    const randomActivity = filtered[Math.floor(Math.random() * filtered.length)];
    handleExpand(randomActivity.id);
    showToast(`Wylosowano: ${randomActivity.name}`);
  }, [filtered, showToast, handleExpand]);

  const handleRescueSelect = (activity: Activity) => {
    setTab("activities");
    handleExpand(activity.id);
  };

  const resetAllFilters = () => {
    setTypeFilters([]); setPlaceFilters([]);
    setCompFilters([]); setTopicFilters([]);
    setAgeFilters([]); setMoodFilters([]);
    setMethodFilters([]); setPrepFilters([]);
    setSearchQuery(""); setShowFavoritesOnly(false); setShowCompletedOnly(false);
  };

  // Voice search
  const startVoiceSearch = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { showToast("Przeglądarka nie obsługuje wyszukiwania głosowego"); return; }
    const rec = new SR();
    rec.lang = "pl-PL";
    rec.onresult = (e: any) => {
      const text = e.results[0][0].transcript;
      setSearchQuery(text);
      showToast(`🎤 "${text}"`);
    };
    rec.onerror = () => showToast("Nie udało się nagrać — spróbuj ponownie");
    rec.start();
    showToast("🎤 Słucham...");
  }, [showToast]);

  // Proposals
  const submitProposal = () => {
    if (!proposalText.trim()) return;
    const next = [proposalText.trim(), ...proposals].slice(0, 50);
    setProposals(next);
    localStorage.setItem(PROPOSALS_KEY, JSON.stringify(next));
    setProposalText("");
    showToast("💌 Propozycja zapisana — dziękuję!");
    setShowProposals(false);
  };

  const filterKey = [typeFilters.join(","), placeFilters.join(","), compFilters.join(","), topicFilters.join(","), ageFilters.join(","), moodFilters.join(","), methodFilters.join(","), prepFilters.join(","), searchQuery, sortBy, showFavoritesOnly, showCompletedOnly].join("|");

  const hasAnyFilter = typeFilters.length > 0 || placeFilters.length > 0 ||
    compFilters.length > 0 || topicFilters.length > 0 ||
    ageFilters.length > 0 || moodFilters.length > 0 ||
    methodFilters.length > 0 || prepFilters.length > 0 || searchQuery.trim() !== "" ||
    showFavoritesOnly || showCompletedOnly;

  useEffect(() => {
    if (expanded !== null && expandedRef.current) {
      setTimeout(() => expandedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [expanded]);

  // Stats data for StatsModal
  const activityTypes = useMemo(() => {
    return completed.map(id => ACTIVITIES.find(a => a.id === id)?.type ?? "").filter(Boolean);
  }, [completed]);

  const recentActivities = useMemo(() => {
    return recentlyViewed.map(id => ACTIVITIES.find(a => a.id === id)).filter(Boolean) as Activity[];
  }, [recentlyViewed]);

  if (!splashDone) {
    return <SplashScreen onDone={() => setSplashDone(true)} />;
  }

  return (
    <div className={`font-sans min-h-screen transition-colors duration-300 ${darkMode ? "bg-[#0f0f1a] text-[#e0e0e8]" : "bg-warmwhite"}`}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {tab !== "start" && <Header darkMode={darkMode} />}

      <nav className={`sticky top-0 z-30 backdrop-blur-lg border-b transition-colors duration-300 ${
        tab === "start"
          ? "bg-[#0a0c17]/80 border-white/5"
          : darkMode ? "bg-[#0f0f1a]/80 border-gray-800" : "bg-warmwhite/80 border-gray-200/50"
      }`}>
        <div className="flex px-4 gap-1 items-center justify-between">
          <div className="flex gap-1">
            <TabButton active={tab === "start"} onClick={() => setTab("start")} icon={<Zap size={14} />} label="Start" darkMode={darkMode} forceLight={tab === "start"} />
            <TabButton active={tab === "activities"} onClick={() => setTab("activities")} icon={<LayoutGrid size={14} />} label="Zabawy" count={ACTIVITIES.length} darkMode={darkMode} forceLight={tab === "start"} />
            <TabButton active={tab === "development"} onClick={() => setTab("development")} icon={<Baby size={14} />} label="Rozwój" darkMode={darkMode} forceLight={tab === "start"} />
            <TabButton active={tab === "about"} onClick={() => setTab("about")} icon={<User size={14} />} label="O mnie" darkMode={darkMode} forceLight={tab === "start"} />
          </div>
          <div className="flex items-center gap-2">
            {tab === "activities" && xp > 0 && (
              <button onClick={() => setShowStats(true)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold border-none cursor-pointer transition-all"
                style={{ background: "linear-gradient(135deg, #A855F720, #3B82F620)", color: "#A855F7", border: "1px solid #A855F730" }}>
                <Zap size={11} />⚡{xp} XP
              </button>
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-200 border-none cursor-pointer ${tab === "start" ? "bg-white/5 text-white/40 hover:text-white/70" : darkMode ? "bg-gray-800 text-yellow-300" : "bg-gray-100 text-gray-500"}`}
              aria-label="Tryb ciemny"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </nav>

      <div key={tab} style={{ animation: "ps-page-in 0.28s cubic-bezier(.16,1,.3,1) both" }}>
      {tab === "start" ? (
        <WowHeroScreen onExplore={() => setTab("activities")} />
      ) : tab === "about" ? (
        <AboutPage darkMode={darkMode} />
      ) : tab === "development" ? (
        <DevelopmentHub darkMode={darkMode} onOpenActivity={(id) => { setExpanded(id); setTab("activities"); }} />
      ) : (
        <>
          <div ref={activitiesRef} />

          {/* Daily Challenge */}
          <DailyChallenge
            activity={dailyActivity}
            isCompleted={completed.includes(dailyActivity.id)}
            onOpen={() => { handleExpand(dailyActivity.id); }}
            darkMode={darkMode}
          />

          <RescueMode onSelectActivity={handleRescueSelect} darkMode={darkMode} />

          <ParentInsightCard darkMode={darkMode} />

          {/* Recently viewed */}
          {recentActivities.length > 0 && (
            <div className="px-4 pt-3">
              <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                Ostatnio otwarte
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {recentActivities.map((a) => {
                  const meta = TYPE_META[a.type];
                  return (
                    <button key={a.id} onClick={() => { handleExpand(a.id); }}
                      className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] font-bold border-none cursor-pointer transition-all"
                      style={{
                        background: darkMode ? `${meta.accent}15` : meta.bg,
                        border: `1.5px solid ${meta.accent}30`,
                        color: darkMode ? "white" : "#1a1a2e",
                      }}>
                      <div className="w-5 h-5 rounded-lg flex items-center justify-center text-[11px]"
                        style={{ background: meta.accent, color: "white" }}>
                        {a.type.charAt(0).toUpperCase()}
                      </div>
                      <span className="max-w-[100px] truncate">{a.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Search */}
          <div className="px-4 pt-3">
            <div className={`relative rounded-xl overflow-hidden transition-all duration-200 ${darkMode ? "bg-[#1a1a2e]" : "bg-white"}`} style={{ border: `1.5px solid ${darkMode ? "#2a2a40" : "#EDEDEA"}` }}>
              <Search size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-500" : "text-gray-400"}`} />
              <input ref={searchRef} type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Szukaj zabawy... (Cmd+K)"
                className={`w-full py-2.5 pl-10 pr-20 text-[14px] font-medium border-none outline-none search-glow transition-colors ${darkMode ? "bg-transparent text-white placeholder:text-gray-500" : "bg-transparent text-[#1a1a2e] placeholder:text-gray-400"}`}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="bg-transparent border-none cursor-pointer p-0.5">
                    <X size={14} className="text-gray-400" />
                  </button>
                )}
                <button onClick={startVoiceSearch}
                  className="p-1.5 rounded-lg border-none cursor-pointer transition-all"
                  style={{ background: darkMode ? "#2a2a40" : "#f0f0ec" }}
                  title="Szukaj głosowo">
                  <Mic size={14} className={darkMode ? "text-gray-400" : "text-gray-500"} />
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-2 px-5 pt-3 justify-between items-center flex-wrap">
            <div className="flex gap-1.5 flex-wrap">
              <ViewToggle active={view === "cards"} onClick={() => setView("cards")} icon={<CreditCard size={14} />} label="Karty" darkMode={darkMode} />
              <ViewToggle active={view === "matrix"} onClick={() => setView("matrix")} icon={<LayoutGrid size={14} />} label="Macierz" darkMode={darkMode} />
              <ViewToggle active={view === "compact"} onClick={() => setView("compact")} icon={<Grid3x3 size={14} />} label="Mini" darkMode={darkMode} />
              <ViewToggle active={view === "reels"} onClick={() => setView("reels")} icon={<Play size={14} />} label="Reels" darkMode={darkMode} accent />
            </div>
            <div className="flex gap-1.5 items-center flex-wrap">
              <div className="relative">
                <button onClick={() => setShowSortMenu(!showSortMenu)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold cursor-pointer transition-all duration-200 border-none ${darkMode ? "bg-gray-800 text-gray-300" : "bg-[#E8E8E0] text-gray-500"}`}>
                  <SortAsc size={13} />
                  {SORT_OPTIONS.find((s) => s.id === sortBy)?.label}
                </button>
                {showSortMenu && (
                  <>
                    <div className="fixed inset-0 z-20" onClick={() => setShowSortMenu(false)} />
                    <div className={`absolute right-0 top-full mt-1 rounded-xl shadow-xl z-30 overflow-hidden min-w-[120px] ${darkMode ? "bg-[#1a1a2e] border border-gray-700" : "bg-white border border-gray-200"}`}>
                      {SORT_OPTIONS.map((opt) => (
                        <button key={opt.id} onClick={() => { setSortBy(opt.id); setShowSortMenu(false); }}
                          className={`w-full text-left px-3.5 py-2 text-[12px] font-semibold border-none cursor-pointer transition-colors ${sortBy === opt.id ? "bg-[#FF6B6B] text-white" : darkMode ? "bg-transparent text-gray-300 hover:bg-gray-800" : "bg-transparent text-gray-600 hover:bg-gray-50"}`}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                title={`Ulubione (${favorites.length})`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-bold cursor-pointer transition-all duration-200 border-none ${showFavoritesOnly ? "bg-amber-400 text-white" : darkMode ? "bg-gray-800 text-gray-300" : "bg-[#E8E8E0] text-gray-500"}`}>
                <Star size={14} fill={showFavoritesOnly ? "white" : favorites.length > 0 ? "#F59E0B" : "none"} stroke={favorites.length > 0 ? "#F59E0B" : "currentColor"} />
                {favorites.length > 0 && <span>{favorites.length}</span>}
              </button>
              <button onClick={() => setShowCompletedOnly(!showCompletedOnly)}
                title={`Ukończone (${completed.length})`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-bold cursor-pointer transition-all duration-200 border-none ${showCompletedOnly ? "bg-emerald-500 text-white" : darkMode ? "bg-gray-800 text-gray-300" : "bg-[#E8E8E0] text-gray-500"}`}>
                <CheckCircle2 size={14} stroke={completed.length > 0 ? "#22C55E" : "currentColor"} />
                {completed.length > 0 && <span>{completed.length}</span>}
              </button>
              <button onClick={pickRandom}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-bold cursor-pointer transition-all duration-200 border-none text-white shadow-sm active:scale-95"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }} disabled={filtered.length === 0}>
                <Shuffle size={14} /> Losuj
              </button>
            </div>
          </div>

          {/* Quick action row: Wizard + Stats + Proposals */}
          <div className="flex gap-2 px-5 pt-2">
            <button onClick={() => setShowWizard(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border-none cursor-pointer transition-all ${darkMode ? "bg-purple-900/40 text-purple-300 hover:bg-purple-900/60" : "bg-purple-50 text-purple-600 hover:bg-purple-100"}`}>
              <Wand2 size={13} /> Wizard
            </button>
            <button onClick={() => setShowStats(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border-none cursor-pointer transition-all ${darkMode ? "bg-blue-900/40 text-blue-300 hover:bg-blue-900/60" : "bg-blue-50 text-blue-600 hover:bg-blue-100"}`}>
              <BarChart2 size={13} /> Statystyki
            </button>
            <button onClick={() => setShowProposals(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border-none cursor-pointer transition-all ${darkMode ? "bg-emerald-900/40 text-emerald-300 hover:bg-emerald-900/60" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`}>
              <MessageSquarePlus size={13} /> Propozycja
            </button>
          </div>

          <FilterBar
            typeFilters={typeFilters} placeFilters={placeFilters} compFilters={compFilters}
            topicFilters={topicFilters} ageFilters={ageFilters} moodFilters={moodFilters}
            methodFilters={methodFilters} prepFilters={prepFilters}
            onTypeChange={setTypeFilters} onPlaceChange={setPlaceFilters}
            onCompChange={setCompFilters} onTopicChange={setTopicFilters}
            onAgeChange={setAgeFilters} onMoodChange={setMoodFilters}
            onMethodChange={setMethodFilters} onPrepChange={setPrepFilters}
            darkMode={darkMode} activities={ACTIVITIES}
          />

          <div className={`px-6 pt-1 pb-2.5 text-[13px] font-semibold flex items-center justify-between ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            <div className="flex items-center gap-3 flex-wrap">
              <span>Pokazuję <span className="text-[#FF6B6B] font-extrabold">{filtered.length}</span> z {ACTIVITIES.length} zabaw</span>
              {streak > 0 && (
                <span className="flex items-center gap-1 text-[12px] font-extrabold text-amber-500 streak-badge">
                  🔥 {streak} {streak === 1 ? "dzień" : "dni"} z rzędu
                </span>
              )}
              {showFavoritesOnly && <span className="ml-1.5 text-amber-500">(ulubione)</span>}
              {showCompletedOnly && <span className="ml-1.5 text-emerald-600">(ukończone)</span>}
              {relaxedFilters.length > 0 && <span className="ml-1.5 text-amber-600 text-[12px]">— poluzowano: {relaxedFilters.join(", ")}</span>}
            </div>
            {hasAnyFilter && (
              <button onClick={resetAllFilters} className="text-[12px] text-[#FF6B6B] font-bold bg-transparent border-none cursor-pointer hover:underline flex items-center gap-1">
                <X size={12} /> Wyczyść
              </button>
            )}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 px-6">
              <div className="text-6xl mb-4 opacity-30">🔍</div>
              <div className={`text-[15px] font-bold mb-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Brak wyników</div>
              <div className={`text-[13px] mb-4 ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                {searchQuery ? `Nie znaleziono zabaw dla "${searchQuery}"` : "Spróbuj zmienić filtry"}
              </div>
              <button onClick={resetAllFilters} className="px-4 py-2 rounded-full text-[13px] font-bold text-white border-none cursor-pointer" style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }}>
                Resetuj filtry
              </button>
            </div>
          )}

          {filtered.length > 0 && view === "cards" ? (
            <div key={filterKey} className="px-4 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((a, i) => (
                <div key={a.id} ref={expanded === a.id ? expandedRef : undefined} className={expanded === a.id ? "col-span-full" : ""}
                  style={{ animation: "card-in 0.38s cubic-bezier(.16,1,.3,1) both", animationDelay: `${Math.min(i, 10) * 35}ms` }}>
                  <ActivityCard activity={a} expanded={expanded === a.id} onToggle={() => handleExpand(expanded === a.id ? null : a.id)}
                    isFavorite={favorites.includes(a.id)} onToggleFavorite={toggleFavorite}
                    isCompleted={completed.includes(a.id)} onMarkComplete={markComplete}
                    note={notes[a.id] ?? ""} onSaveNote={saveNote}
                    allActivities={ACTIVITIES} onOpenActivity={(id) => handleExpand(id)}
                    darkMode={darkMode} showToast={showToast}
                    rating={ratings[a.id] ?? 0} onSaveRating={saveRating}
                  />
                </div>
              ))}
            </div>
          ) : filtered.length > 0 && view === "compact" ? (
            <div key={filterKey} className="px-3 pb-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {filtered.map((a, i) => (
                <CompactCard key={a.id} activity={a}
                  isFavorite={favorites.includes(a.id)}
                  isCompleted={completed.includes(a.id)}
                  darkMode={darkMode}
                  onClick={() => { setView("cards"); handleExpand(a.id); }}
                  animDelay={Math.min(i, 15) * 20}
                />
              ))}
            </div>
          ) : filtered.length > 0 && view === "matrix" ? (
            <MatrixView activities={filtered} darkMode={darkMode} onOpenActivity={(id) => handleExpand(id)} />
          ) : filtered.length > 0 && view === "reels" ? (
            <ReelsView
              activities={filtered}
              favorites={favorites}
              completed={completed}
              onToggleFavorite={toggleFavorite}
              onMarkComplete={markComplete}
              onOpenDetail={(id) => { setView("cards"); handleExpand(id); }}
              darkMode={darkMode}
            />
          ) : null}
        </>
      )}
      </div>

      <footer className={`py-6 px-4 border-t ${darkMode ? "border-gray-800 text-gray-600" : "border-gray-200 text-gray-400"}`}>
        {completed.length > 0 && (
          <div className="mb-4 max-w-sm mx-auto">
            <div className={`flex justify-between text-[11px] font-bold mb-1.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              <span className="text-emerald-500">Postęp: {completed.length} / {ACTIVITIES.length} zabaw</span>
              <span>{Math.round((completed.length / ACTIVITIES.length) * 100)}%</span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${(completed.length / ACTIVITIES.length) * 100}%`, background: "linear-gradient(90deg, #22C55E, #16A34A)" }} />
            </div>
          </div>
        )}
        <div className="text-center">
          <div className={`text-[11px] font-semibold ${darkMode ? "text-gray-600" : "text-gray-400"}`}>PlaySpark v2.0 — stworzone z miłości do zabawy</div>
          <div className="text-[10px] mt-1 opacity-60">{ACTIVITIES.length} zabaw &middot; {new Set(ACTIVITIES.flatMap(a => a.competencies)).size} kompetencji &middot; {new Set(ACTIVITIES.map(a => a.method)).size} metod</div>
          <div className="text-[10px] mt-1 opacity-40">Cmd+K szukaj &middot; Esc zamknij</div>
        </div>
      </footer>

      <button className={`back-to-top ${showBackToTop ? "visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Wróć na górę">
        <ArrowUp size={20} />
      </button>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* Confetti */}
      <Confetti active={showConfetti} onDone={() => setShowConfetti(false)} />

      {/* Stats Modal */}
      {showStats && (
        <StatsModal
          data={{ completed, streak, xp, history, activityTypes }}
          onClose={() => setShowStats(false)}
          darkMode={darkMode}
          totalActivities={ACTIVITIES.length}
        />
      )}

      {/* Activity Wizard */}
      {showWizard && (
        <ActivityWizard
          onSelectActivity={(a) => { setTab("activities"); handleExpand(a.id); }}
          onClose={() => setShowWizard(false)}
          darkMode={darkMode}
        />
      )}

      {/* Proposals Modal */}
      {showProposals && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowProposals(false); }}>
          <div className={`w-full sm:max-w-sm rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl ${darkMode ? "bg-[#0f0f1a]" : "bg-white"}`}>
            <div className="flex justify-between items-center mb-4">
              <div className={`text-[17px] font-extrabold ${darkMode ? "text-white" : "text-[#1a1a2e]"}`}>
                💌 Zaproponuj zabawę
              </div>
              <button onClick={() => setShowProposals(false)} className="bg-transparent border-none cursor-pointer">
                <X size={18} className={darkMode ? "text-gray-500" : "text-gray-400"} />
              </button>
            </div>
            <div className={`text-[13px] mb-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Masz pomysł na aktywność? Opisz ją poniżej — będę go pamiętać.
            </div>
            <textarea
              value={proposalText}
              onChange={(e) => setProposalText(e.target.value)}
              placeholder="Np. Zabawa w cienie z latarką — świetna na wieczór, zero przygotowań"
              rows={4}
              className={`w-full text-[13px] rounded-xl p-3 mb-3 border-none outline-none resize-none leading-relaxed ${
                darkMode ? "bg-[#1a1a2e] text-gray-200 placeholder:text-gray-600" : "bg-gray-50 text-gray-700 placeholder:text-gray-400"
              }`}
              style={{ border: `1.5px solid ${darkMode ? "#2a2a40" : "#e8e8e0"}` }}
            />
            <button onClick={submitProposal} disabled={!proposalText.trim()}
              className="w-full py-3 rounded-2xl text-white font-extrabold text-[14px] border-none cursor-pointer flex items-center justify-center gap-2 disabled:opacity-40"
              style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}>
              <Send size={16} /> Wyślij propozycję
            </button>
            {proposals.length > 0 && (
              <div className={`mt-3 text-[11px] text-center ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                Masz {proposals.length} zapisanych propozycji
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CompactCard({ activity: a, isFavorite, isCompleted, darkMode, onClick, animDelay }: {
  activity: Activity; isFavorite: boolean; isCompleted: boolean;
  darkMode: boolean; onClick: () => void; animDelay: number;
}) {
  const meta = TYPE_META[a.type];
  return (
    <button onClick={onClick}
      className="rounded-2xl p-3 text-left border-none cursor-pointer transition-all duration-150 hover:scale-[1.04] active:scale-[0.97]"
      style={{
        background: darkMode ? `${meta.accent}12` : meta.bg,
        border: `1.5px solid ${meta.accent}${isCompleted ? "60" : "25"}`,
        animation: `card-in 0.35s cubic-bezier(.16,1,.3,1) both`,
        animationDelay: `${animDelay}ms`,
        outline: isCompleted ? `2px solid ${meta.accent}40` : "none",
      }}>
      <div className="flex items-start justify-between mb-1.5">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-black text-white"
          style={{ background: meta.accent }}>
          {a.type.charAt(0).toUpperCase()}
        </div>
        <div className="flex gap-0.5">
          {isFavorite && <Star size={10} fill="#F59E0B" stroke="#F59E0B" />}
          {isCompleted && <span className="text-[10px] text-emerald-500">✓</span>}
        </div>
      </div>
      <div className={`text-[11px] font-extrabold leading-tight line-clamp-2 ${darkMode ? "text-white" : "text-[#1a1a2e]"}`}>
        {a.name}
      </div>
      <div className="flex gap-0.5 mt-1 flex-wrap">
        {a.age.slice(0, 2).map(yr => (
          <span key={yr} className="text-[9px] font-bold px-1 py-0.5 rounded-full text-white"
            style={{ background: meta.accent + "99" }}>{yr}</span>
        ))}
      </div>
    </button>
  );
}

function ParentInsightCard({ darkMode }: { darkMode: boolean }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  const weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const insight = WEEKLY_INSIGHTS[weekNum % WEEKLY_INSIGHTS.length];
  const dm = darkMode;

  return (
    <div className="mx-4 mt-3">
      <div className={`rounded-2xl p-3.5 relative overflow-hidden ${dm ? "bg-[#1a1204]" : "bg-[#FFFBEB]"}`}
        style={{ border: `1.5px solid ${dm ? "#78350f50" : "#FDE68A"}` }}>
        <button onClick={() => setDismissed(true)}
          className={`absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] border-none cursor-pointer ${dm ? "bg-amber-900/40 text-amber-500" : "bg-amber-100 text-amber-600"}`}>
          ✕
        </button>
        <div className="flex items-start gap-2.5 pr-6">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}>
            <span className="text-[14px]">🧪</span>
          </div>
          <div>
            <div className={`text-[10px] font-black uppercase tracking-wider mb-1 ${dm ? "text-amber-500" : "text-amber-700"}`}>
              Wiedza rodzica · co tydzień
            </div>
            <p className={`text-[12px] leading-snug ${dm ? "text-amber-200" : "text-amber-900"}`}>
              {insight.text}
            </p>
            <p className={`text-[10px] mt-1 ${dm ? "text-amber-700" : "text-amber-500"}`}>
              {insight.source}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DailyChallenge({ activity, isCompleted, onOpen, darkMode }: {
  activity: Activity; isCompleted: boolean; onOpen: () => void; darkMode: boolean;
}) {
  return (
    <div
      className="mx-4 mt-3 rounded-2xl overflow-hidden cursor-pointer daily-challenge-card"
      onClick={onOpen}
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #1a1204 0%, #1a1a2e 100%)"
          : "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
        border: "2px solid",
        borderColor: isCompleted ? "#22C55E" : "#F59E0B",
        boxShadow: isCompleted ? "0 0 0 0 transparent" : "0 0 16px rgba(245,158,11,0.25), 0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="shrink-0">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
            style={{ background: isCompleted ? "#22C55E20" : "#F59E0B20" }}>
            {isCompleted ? "✅" : "⭐"}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-black uppercase tracking-widest"
              style={{ color: isCompleted ? "#22C55E" : "#F59E0B" }}>
              {isCompleted ? "Zrobione dziś!" : "Zabawa dnia"}
            </span>
            {!isCompleted && <span className="daily-pulse-dot" />}
          </div>
          <div className={`text-[14px] font-extrabold truncate ${darkMode ? "text-white" : "text-[#1a1a2e]"}`}>
            {activity.name}
          </div>
          <div className={`text-[11px] mt-0.5 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            {activity.prep[0] === "zero prep" ? "Zero przygotowań" : activity.prep.join(", ")} · {activity.duration}
          </div>
        </div>
        <div className={`text-[11px] font-bold shrink-0 ${isCompleted ? "text-emerald-500" : darkMode ? "text-amber-400" : "text-amber-600"}`}>
          {isCompleted ? "✓" : "Zagraj →"}
        </div>
      </div>
    </div>
  );
}

function sortActivities(activities: Activity[], sortBy: SortOption): Activity[] {
  const sorted = [...activities];
  switch (sortBy) {
    case "name": return sorted.sort((a, b) => a.name.localeCompare(b.name, "pl"));
    case "age-asc": return sorted.sort((a, b) => Math.min(...a.age) - Math.min(...b.age));
    case "age-desc": return sorted.sort((a, b) => Math.max(...b.age) - Math.max(...a.age));
    case "type": return sorted.sort((a, b) => a.type.localeCompare(b.type, "pl"));
    case "duration": return sorted.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
    default: return sorted;
  }
}

function TabButton({ active, onClick, icon, label, count, darkMode, forceLight }: {
  active: boolean; onClick: () => void; icon: React.ReactNode; label: string; count?: number; darkMode: boolean; forceLight?: boolean;
}) {
  const isDark = forceLight || darkMode;
  return (
    <button onClick={onClick}
      className={`flex items-center gap-1.5 px-4 py-3 text-[13px] font-bold cursor-pointer transition-all duration-200 border-none bg-transparent relative whitespace-nowrap ${active ? isDark ? "text-white" : "text-[#1a1a2e]" : isDark ? "text-white/30 hover:text-white/60" : "text-gray-400 hover:text-gray-600"}`}>
      {icon} {label}
      {count !== undefined && <span className={`text-[10px] font-extrabold ml-0.5 ${active ? "text-[#FF6B6B]" : "opacity-50"}`}>{count}</span>}
      {active && <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, #FF6B6B, #FF8E53)" }} />}
    </button>
  );
}

function ViewToggle({ active, onClick, icon, label, darkMode, accent }: {
  active: boolean; onClick: () => void; icon: React.ReactNode; label: string; darkMode: boolean; accent?: boolean;
}) {
  return (
    <button onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-bold cursor-pointer transition-all duration-200 border-none ${active ? accent ? "text-white" : "bg-[#1a1a2e] text-white" : darkMode ? "bg-gray-800 text-gray-400" : "bg-[#E8E8E0] text-gray-500"}`}
      style={active && accent ? { background: "linear-gradient(135deg, #FF6B6B, #A855F7)" } : undefined}>
      {icon} {label}
    </button>
  );
}
