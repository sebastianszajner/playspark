import { useState, useEffect, useRef } from "react";
import { ChevronDown, Clock, BookOpen, Lightbulb, Brain, Heart, Target, Footprints, MessageCircle, Package, Star, Baby, Copy, Share2, ArrowRight, Check, CheckCircle2, Timer, TimerOff, StickyNote, Printer } from "lucide-react";
import type { Activity } from "../data/types";
import { TYPE_META, AGE_COLORS, METHOD_META, parseDuration, type Method } from "../data/types";
import { TypeIcon, PlaceIcon } from "./TypeIcons";
import { ParentCoach } from "./ParentCoach";

const REACTIONS = ["😄", "😮", "😅", "🔥", "❤️"];

interface ActivityCardProps {
  activity: Activity;
  expanded: boolean;
  onToggle: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  isCompleted: boolean;
  onMarkComplete: (id: number) => void;
  note: string;
  onSaveNote: (id: number, text: string) => void;
  allActivities: Activity[];
  onOpenActivity: (id: number) => void;
  darkMode: boolean;
  showToast: (msg: string) => void;
  rating: number;
  onSaveRating: (id: number, stars: number) => void;
}

export function ActivityCard({ activity: a, expanded, onToggle, isFavorite, onToggleFavorite, isCompleted, onMarkComplete, note, onSaveNote, allActivities, onOpenActivity, darkMode, showToast, rating, onSaveRating }: ActivityCardProps) {
  const col = TYPE_META[a.type];
  const isZeroPrep = a.prep.length === 1 && a.prep[0] === "zero prep";
  const methodMeta = METHOD_META[a.method as Method];
  const dm = darkMode;

  // Scroll reveal
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); } },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Timer state
  const durationMins = parseDuration(a.duration);
  const [timerSecs, setTimerSecs] = useState<number | null>(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Notes state
  const [noteText, setNoteText] = useState(note);
  const [showNotes, setShowNotes] = useState(false);
  const noteTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reaction state
  const [reaction, setReaction] = useState<string | null>(null);
  const [showReactions, setShowReactions] = useState(false);

  // Sync note from props
  useEffect(() => { setNoteText(note); }, [note]);

  // Auto-save notes with debounce
  const handleNoteChange = (val: string) => {
    setNoteText(val);
    if (noteTimeoutRef.current) clearTimeout(noteTimeoutRef.current);
    noteTimeoutRef.current = setTimeout(() => onSaveNote(a.id, val), 600);
  };

  // Timer logic
  useEffect(() => {
    if (timerRunning && timerSecs !== null && timerSecs > 0) {
      intervalRef.current = setInterval(() => setTimerSecs((s) => (s !== null ? s - 1 : null)), 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerSecs === 0 && timerRunning) {
        setTimerRunning(false);
        setTimerDone(true);
        showToast("Czas minal! Swietna robota!");
      }
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [timerRunning, timerSecs, showToast]);

  // Cleanup on collapse
  useEffect(() => {
    if (!expanded) {
      setTimerRunning(false);
      setTimerSecs(null);
      setTimerDone(false);
      setShowNotes(false);
      setShowReactions(false);
    }
  }, [expanded]);

  const startTimer = () => {
    setTimerSecs(durationMins * 60);
    setTimerRunning(true);
    setTimerDone(false);
  };

  const stopTimer = () => {
    setTimerRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimerSecs(null);
    setTimerDone(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const timerPercent = timerSecs !== null ? (1 - timerSecs / (durationMins * 60)) * 100 : 0;

  const copyTellChild = () => {
    navigator.clipboard.writeText(a.tellChild).then(() => showToast("Skopiowano tekst!"));
  };

  const shareActivity = () => {
    const url = `${window.location.origin}${window.location.pathname}#activity-${a.id}`;
    if (navigator.share) {
      navigator.share({ title: a.name, text: a.description, url });
    } else {
      navigator.clipboard.writeText(url).then(() => showToast("Link skopiowany!"));
    }
  };

  const printActivity = () => {
    const printWin = window.open("", "_blank", "width=600,height=800");
    if (!printWin) return;
    printWin.document.write(`
      <html><head><title>${a.name}</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; max-width: 500px; margin: 24px auto; color: #1a1a2e; }
        h1 { font-size: 22px; margin-bottom: 6px; }
        .badge { display: inline-block; background: #f5f5f5; padding: 2px 8px; border-radius: 8px; font-size: 11px; font-weight: bold; margin: 2px; }
        .section { margin: 14px 0; padding: 12px; background: #f9f9f7; border-radius: 10px; }
        .section h2 { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 6px; }
        ol li { margin: 6px 0; font-size: 13px; }
        .tell { font-style: italic; color: #333; }
      </style></head><body>
      <h1>${a.name}</h1>
      <div><span class="badge">${a.type}</span><span class="badge">${a.duration}</span><span class="badge">${a.prep[0] === "zero prep" ? "Zero prep!" : a.prep.join(", ")}</span></div>
      <div class="section"><h2>Opis</h2><p>${a.description}</p></div>
      <div class="section"><h2>Powiedz dziecku</h2><p class="tell">"${a.tellChild}"</p></div>
      <div class="section"><h2>Krok po kroku</h2><ol>${a.steps.map(s => `<li>${s}</li>`).join("")}</ol></div>
      <div class="section"><h2>Tip dla rodzica</h2><p>${a.tip}</p></div>
      </body></html>
    `);
    printWin.document.close();
    printWin.print();
  };

  const handleComplete = () => {
    onMarkComplete(a.id);
    if (!isCompleted) {
      showToast("Brawo! Aktywność ukończona!");
      setShowReactions(true);
    }
  };

  const handleReaction = (emoji: string) => {
    setReaction(emoji);
    setShowReactions(false);
    showToast(`${emoji} Super!`);
  };

  // Find similar activities (same type or overlapping competencies)
  const similar = allActivities
    .filter((other) => other.id !== a.id && (other.type === a.type || other.competencies.some((c) => a.competencies.includes(c))))
    .slice(0, 3);

  // Difficulty estimate based on age range
  const difficulty = a.age.length >= 4 ? "latwa" : a.age[0] >= 5 ? "trudniejsza" : "srednia";
  const diffColor = difficulty === "latwa" ? "#22C55E" : difficulty === "trudniejsza" ? "#F59E0B" : "#3B82F6";
  const diffLabel = difficulty === "latwa" ? "latwa" : difficulty === "trudniejsza" ? "trudniejsza" : "srednia";

  return (
    <div ref={cardRef} className="rounded-2xl overflow-hidden border-2 group"
      style={{
        background: expanded ? (dm ? `linear-gradient(135deg, ${col.accent}15, #1a1a2e)` : `linear-gradient(135deg, ${col.bg}, white)`) : dm ? "#1a1a2e" : "white",
        borderColor: isCompleted ? "#22C55E" : expanded ? col.accent : dm ? "#2a2a40" : "#EDEDEA",
        boxShadow: isCompleted
          ? "0 2px 12px rgba(34, 197, 94, 0.15)"
          : expanded
          ? `0 8px 32px ${col.accent}20, 0 2px 8px rgba(0,0,0,0.06)`
          : "0 1px 3px rgba(0,0,0,0.04)",
        opacity: revealed ? 1 : 0,
        transition: "opacity 0.3s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s cubic-bezier(.16,1,.3,1), background 0.3s ease",
      }}
      onMouseEnter={e => { if (!expanded) (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${col.accent}25, 0 2px 8px rgba(0,0,0,0.06)`; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = isCompleted ? "0 2px 12px rgba(34,197,94,0.15)" : expanded ? `0 8px 32px ${col.accent}20, 0 2px 8px rgba(0,0,0,0.06)` : "0 1px 3px rgba(0,0,0,0.04)"; }}
    >
      {/* Header */}
      <div onClick={onToggle} className="p-4 cursor-pointer">
        <div className="flex justify-between items-start mb-2.5">
          <div className="flex gap-3 items-center flex-1 min-w-0">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                style={{ background: dm ? `${col.accent}20` : col.bg }}>
                <TypeIcon type={a.type} size={22} color={col.accent} />
              </div>
              {isCompleted && (
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check size={10} color="white" strokeWidth={3} />
                </div>
              )}
            </div>
            <div className="min-w-0">
              <div className={`text-[15px] font-extrabold leading-tight ${dm ? "text-white" : "text-[#1a1a2e]"} ${isCompleted ? "line-through opacity-70" : ""}`}>{a.name}</div>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: col.accent }}>{a.type}</span>
                <span className={`text-[11px] flex items-center gap-0.5 ${dm ? "text-gray-500" : "text-gray-400"}`}>
                  <Clock size={10} />{a.duration}
                </span>
                {isZeroPrep && (
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 rounded-md px-1.5 py-0.5 font-bold border border-emerald-200">zero prep</span>
                )}
                <span className="text-[10px] font-bold rounded-md px-1.5 py-0.5" style={{ background: `${diffColor}15`, color: diffColor }}>{diffLabel}</span>
                {note && <span className={`text-[10px] rounded-md px-1.5 py-0.5 font-bold ${dm ? "bg-purple-900 text-purple-300" : "bg-purple-50 text-purple-600"}`}>notatka</span>}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button onClick={(e) => { e.stopPropagation(); onToggleFavorite(a.id); }}
              className="bg-transparent border-none cursor-pointer p-1 transition-transform duration-150 active:scale-125 rounded-full hover:bg-gray-100"
              aria-label={isFavorite ? "Usun z ulubionych" : "Dodaj do ulubionych"}>
              <Star size={18} fill={isFavorite ? "#F59E0B" : "none"} stroke={isFavorite ? "#F59E0B" : dm ? "#555" : "#ccc"} strokeWidth={2} />
            </button>
            <div className="flex gap-0.5">
              {a.age.map((yr) => (
                <span key={yr} className="text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ background: AGE_COLORS[yr] ?? "#888" }}>{yr}</span>
              ))}
            </div>
            <ChevronDown size={16} className={`transition-transform duration-200 ml-0.5 ${dm ? "text-gray-500" : "text-gray-400"}`}
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0)" }} />
          </div>
        </div>

        <div className="flex gap-1.5 flex-wrap">
          {a.place.map((p) => (
            <span key={p} className={`text-[11px] rounded-lg px-2 py-0.5 flex items-center gap-1 ${dm ? "bg-gray-800 text-gray-400" : "bg-[#F5F5F0] text-gray-500"}`}>
              <PlaceIcon place={p} size={12} color={dm ? "#666" : "#999"} /> {p}
            </span>
          ))}
          {methodMeta && (
            <span className="text-[11px] rounded-lg px-2 py-0.5 font-semibold method-badge transition-all duration-150 cursor-default tooltip-trigger"
              style={{ background: `${methodMeta.color}15`, color: methodMeta.color }}>
              {methodMeta.label}
              <span className="tooltip">{methodMeta.description}</span>
            </span>
          )}
        </div>

        {!expanded && (
          <p className={`text-[13px] mt-2.5 line-clamp-2 leading-snug ${dm ? "text-gray-400" : "text-gray-500"}`}>{a.description}</p>
        )}
      </div>

      {/* EXPANDED */}
      {expanded && (
        <div className="px-4 pb-5 space-y-4 animate-fade-up">
          {/* Action bar */}
          <div className="flex gap-2 flex-wrap">
            <button onClick={handleComplete}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold border-none cursor-pointer transition-all duration-200 ${
                isCompleted
                  ? "bg-emerald-500 text-white shadow-sm"
                  : dm ? "bg-gray-800 text-gray-300 hover:bg-emerald-900 hover:text-emerald-300" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
              }`}>
              {isCompleted ? <CheckCircle2 size={12} /> : <Check size={12} />}
              {isCompleted ? "Zrobione!" : "Zrobione?"}
            </button>
            <button onClick={copyTellChild}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold border-none cursor-pointer transition-all ${dm ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              <Copy size={12} /> Kopiuj
            </button>
            <button onClick={shareActivity}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold border-none cursor-pointer transition-all ${dm ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              <Share2 size={12} /> Udostępnij
            </button>
            <button onClick={printActivity}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold border-none cursor-pointer transition-all ${dm ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              <Printer size={12} /> Drukuj
            </button>
            <button onClick={() => setShowNotes(!showNotes)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold border-none cursor-pointer transition-all ${
                showNotes || note
                  ? "bg-purple-500 text-white"
                  : dm ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              <StickyNote size={12} /> Notatka
            </button>
          </div>

          {/* Emoji reactions */}
          {showReactions && (
            <div className={`rounded-xl p-3 flex items-center gap-3 flex-wrap ${dm ? "bg-[#1a1a2e]" : "bg-gray-50"}`}>
              <span className={`text-[12px] font-bold ${dm ? "text-gray-400" : "text-gray-500"}`}>Jak poszło?</span>
              {REACTIONS.map((emoji) => (
                <button key={emoji} onClick={() => handleReaction(emoji)}
                  className="text-2xl bg-transparent border-none cursor-pointer transition-transform hover:scale-125 active:scale-90">
                  {emoji}
                </button>
              ))}
            </div>
          )}
          {reaction && (
            <div className={`text-[12px] ${dm ? "text-gray-500" : "text-gray-400"}`}>
              Twoja ocena: <span className="text-xl">{reaction}</span>
            </div>
          )}

          {/* Star rating */}
          <div className="flex items-center gap-1.5">
            <span className={`text-[11px] font-bold ${dm ? "text-gray-500" : "text-gray-400"}`}>Ocena:</span>
            {[1, 2, 3, 4, 5].map((s) => (
              <button key={s} onClick={() => onSaveRating(a.id, s)}
                className="bg-transparent border-none cursor-pointer p-0.5 transition-transform hover:scale-110 active:scale-90">
                <Star size={16}
                  fill={s <= rating ? "#F59E0B" : "none"}
                  stroke={s <= rating ? "#F59E0B" : dm ? "#444" : "#ccc"}
                />
              </button>
            ))}
            {rating > 0 && (
              <button onClick={() => onSaveRating(a.id, 0)}
                className={`text-[10px] bg-transparent border-none cursor-pointer ${dm ? "text-gray-600" : "text-gray-400"}`}>
                ✕
              </button>
            )}
          </div>

          {/* Timer */}
          <div className={`rounded-xl p-3 flex items-center gap-3 ${dm ? "bg-gray-800/60" : "bg-gray-50"} border ${dm ? "border-gray-700" : "border-gray-100"}`}>
            <div className="relative w-12 h-12 shrink-0">
              <svg viewBox="0 0 48 48" className="w-12 h-12 -rotate-90">
                <circle cx="24" cy="24" r="20" fill="none" stroke={dm ? "#333" : "#e5e7eb"} strokeWidth="4" />
                <circle cx="24" cy="24" r="20" fill="none"
                  stroke={timerDone ? "#22C55E" : timerRunning ? col.accent : (dm ? "#444" : "#d1d5db")}
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - timerPercent / 100)}`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 1s linear, stroke 0.3s" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                {timerDone ? (
                  <Check size={18} className="text-emerald-500" strokeWidth={3} />
                ) : (
                  <Timer size={16} style={{ color: timerRunning ? col.accent : dm ? "#555" : "#9ca3af" }} />
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className={`text-[11px] font-bold uppercase tracking-wide mb-0.5 ${dm ? "text-gray-500" : "text-gray-400"}`}>Timer aktywnosci</div>
              {timerSecs !== null ? (
                <div className="flex items-center gap-2">
                  <span className="text-[22px] font-extrabold tabular-nums" style={{ color: timerSecs < 30 ? "#EF4444" : col.accent }}>
                    {formatTime(timerSecs)}
                  </span>
                  <span className={`text-[11px] ${dm ? "text-gray-500" : "text-gray-400"}`}>/ {durationMins}:00</span>
                </div>
              ) : (
                <div className={`text-[15px] font-bold ${dm ? "text-gray-400" : "text-gray-500"}`}>{a.duration}</div>
              )}
            </div>
            <div className="flex gap-1.5">
              {timerSecs === null ? (
                <button onClick={startTimer}
                  className="px-3 py-1.5 rounded-lg text-[12px] font-bold text-white border-none cursor-pointer transition-all active:scale-95"
                  style={{ background: `linear-gradient(135deg, ${col.accent}, ${col.accent}cc)` }}>
                  Start
                </button>
              ) : (
                <>
                  <button onClick={() => setTimerRunning(!timerRunning)}
                    className="px-3 py-1.5 rounded-lg text-[12px] font-bold border-none cursor-pointer transition-all active:scale-95"
                    style={{ background: `${col.accent}20`, color: col.accent }}>
                    {timerRunning ? "Pauza" : "Wznow"}
                  </button>
                  <button onClick={stopTimer}
                    className={`px-2 py-1.5 rounded-lg text-[12px] font-bold border-none cursor-pointer ${dm ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-500"}`}>
                    <TimerOff size={12} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Notes */}
          {showNotes && (
            <div className={`rounded-xl p-3.5 border ${dm ? "bg-purple-900/20 border-purple-800" : "bg-purple-50 border-purple-200"}`}>
              <div className="flex items-center gap-1.5 mb-2">
                <StickyNote size={13} className="text-purple-500" />
                <span className="text-[12px] font-bold text-purple-600 uppercase tracking-wide">Twoje notatki</span>
              </div>
              <textarea
                value={noteText}
                onChange={(e) => handleNoteChange(e.target.value)}
                placeholder="Jak poszlo? Co zmienisz nastepnym razem? Reakcja dziecka?"
                rows={3}
                className={`w-full text-[13px] rounded-xl p-3 border-none outline-none resize-none leading-relaxed ${
                  dm ? "bg-gray-800 text-gray-200 placeholder:text-gray-600" : "bg-white text-gray-700 placeholder:text-gray-400"
                }`}
                style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)" }}
              />
              {noteText && <div className="text-[10px] text-purple-400 text-right mt-1">Zapisano automatycznie</div>}
            </div>
          )}

          <p className={`text-[14px] leading-relaxed font-medium ${dm ? "text-gray-200" : "text-[#1a1a2e]"}`}>{a.description}</p>

          {!isZeroPrep && (
            <Section icon={<Package size={14} className="text-orange-500" />} title="Przygotuj" bg={dm ? "bg-orange-900/20" : "bg-orange-50"} border={dm ? "border-orange-800" : "border-orange-200"}>
              <ul className="space-y-0.5">
                {a.prep.map((item, i) => (
                  <li key={i} className={`text-[13px] leading-snug flex gap-2 ${dm ? "text-orange-300" : "text-orange-800"}`}>
                    <span className="shrink-0 w-4 h-4 rounded-full bg-orange-200 text-orange-700 text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section icon={<Baby size={14} className="text-blue-500" />} title="Powiedz dziecku" bg={dm ? "bg-blue-900/20" : "bg-blue-50"} border={dm ? "border-blue-800" : "border-blue-200"}>
            <p className={`text-[14px] leading-snug italic ${dm ? "text-blue-300" : "text-blue-900"}`}>&ldquo;{a.tellChild}&rdquo;</p>
          </Section>

          <section className="rounded-xl p-3.5 space-y-2.5" style={{ background: `${col.accent}08`, border: `1px solid ${col.accent}15` }}>
            <div className="flex items-center gap-1.5">
              <Heart size={14} style={{ color: col.accent }} />
              <span className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: col.accent }}>Dlaczego to wazne dla dziecka</span>
            </div>
            <p className={`text-[13px] leading-snug ${dm ? "text-gray-300" : "text-[#1a1a2e]"}`}>{a.childNeeds.why}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="flex-1 min-w-[140px]">
                <div className="flex items-center gap-1 mb-1">
                  <Target size={11} className={dm ? "text-gray-500" : "text-gray-500"} />
                  <span className={`text-[11px] font-bold uppercase ${dm ? "text-gray-500" : "text-gray-500"}`}>Cele rozwojowe</span>
                </div>
                <ul className="space-y-0.5">
                  {a.childNeeds.goals.map((g, i) => (
                    <li key={i} className={`text-[12px] leading-snug flex gap-1 ${dm ? "text-gray-300" : "text-[#1a1a2e]"}`}>
                      <span className="shrink-0" style={{ color: col.accent }}>&#8250;</span>{g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-[120px]">
                <div className="flex items-center gap-1 mb-1">
                  <Heart size={11} className="text-gray-500" />
                  <span className="text-[11px] font-bold text-gray-500 uppercase">Emocje</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {a.childNeeds.emotions.map((e) => (
                    <span key={e} className="text-[11px] px-1.5 py-0.5 rounded-lg font-semibold" style={{ background: `${col.accent}12`, color: col.accent }}>{e}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-1.5 mb-2">
              <Footprints size={14} style={{ color: col.accent }} />
              <span className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: col.accent }}>Krok po kroku</span>
            </div>
            <ol className="space-y-2.5">
              {a.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white mt-0.5 shadow-sm"
                    style={{ background: `linear-gradient(135deg, ${col.accent}, ${col.accent}cc)` }}>{i + 1}</span>
                  <p className={`text-[13px] leading-snug flex-1 ${dm ? "text-gray-300" : "text-[#1a1a2e]"}`}>{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <Section icon={<MessageCircle size={14} className="text-emerald-600" />} title="Co mowic" bg={dm ? "bg-emerald-900/20" : "bg-emerald-50"} border={dm ? "border-emerald-800" : "border-emerald-200"}>
            <div className="space-y-1.5">
              {a.phrases.map((phrase, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <svg width="14" height="14" viewBox="0 0 16 16" className="shrink-0 mt-0.5" fill="none">
                    <path d="M2 4C2 2.9 2.9 2 4 2H12C13.1 2 14 2.9 14 4V9C14 10.1 13.1 11 12 11H6L3 14V11H4C2.9 11 2 10.1 2 9V4Z" stroke="#10B981" strokeWidth="1.2" />
                  </svg>
                  <p className={`text-[13px] leading-snug italic ${dm ? "text-emerald-300" : "text-emerald-900"}`}>&ldquo;{phrase}&rdquo;</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={<Lightbulb size={14} className="text-amber-600" />} title="Tip dla rodzica" bg={dm ? "bg-amber-900/20" : "bg-amber-50"} border={dm ? "border-amber-800" : "border-amber-200"}>
            <p className={`text-[13px] leading-snug ${dm ? "text-amber-300" : "text-amber-900"}`}>{a.tip}</p>
          </Section>

          <ParentCoach activityType={a.type} darkMode={dm} />

          <section className="rounded-xl p-3.5" style={{ background: dm ? "#1a1a2e" : "#F8F8F5", border: `1px solid ${dm ? "#2a2a40" : "#E8E8E0"}` }}>
            <div className="flex items-center gap-1.5 mb-1">
              <Brain size={14} className="text-gray-500" />
              <span className="text-[13px] font-extrabold text-gray-500 uppercase tracking-wide">Dlaczego to dziala</span>
            </div>
            <p className={`text-[13px] leading-snug ${dm ? "text-gray-400" : "text-gray-600"}`}>{a.whyItWorks}</p>
          </section>

          {/* Tags */}
          <div className="pt-3 border-t space-y-2" style={{ borderColor: `${col.accent}20` }}>
            <TagRow icon={<BookOpen size={11} />} label="Kompetencje" items={a.competencies} color={col.accent} />
            <TagRow icon={<BookOpen size={11} />} label="Tematy" items={a.topics} color="#666" />
            <div className={`flex justify-between items-center text-[11px] pt-1 ${dm ? "text-gray-600" : "text-gray-400"}`}>
              <span>Metoda: <strong className={dm ? "text-gray-400" : "text-gray-500"}>{a.method}</strong></span>
              <span className="opacity-50">#{a.id}</span>
            </div>
          </div>

          {/* Similar activities */}
          {similar.length > 0 && (
            <div className="pt-3 border-t" style={{ borderColor: `${col.accent}20` }}>
              <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${dm ? "text-gray-500" : "text-gray-400"}`}>Podobne zabawy</div>
              <div className="flex gap-2 flex-wrap">
                {similar.map((s) => {
                  const sc = TYPE_META[s.type];
                  return (
                    <button key={s.id} onClick={() => onOpenActivity(s.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] font-bold border-none cursor-pointer transition-all hover:scale-[1.02] ${dm ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}>
                      <TypeIcon type={s.type} size={16} color={sc.accent} />
                      {s.name}
                      <ArrowRight size={12} className="opacity-40" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Section({ icon, title, bg, border, children }: { icon: React.ReactNode; title: string; bg: string; border: string; children: React.ReactNode }) {
  return (
    <section className={`rounded-xl p-3.5 ${bg} border ${border}`}>
      <div className="flex items-center gap-1.5 mb-1.5">{icon}<span className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: "inherit" }}>{title}</span></div>
      {children}
    </section>
  );
}

function TagRow({ icon, label, items, color }: { icon: React.ReactNode; label: string; items: string[]; color: string }) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">{icon}<span className="text-[11px] font-bold text-gray-400 uppercase">{label}</span></div>
      <div className="flex gap-1 flex-wrap">
        {items.map((item) => (
          <span key={item} className="text-[11px] px-2 py-0.5 rounded-[10px] font-semibold" style={{ background: color + "12", color }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
