import { useRef, useState, useEffect, useCallback } from "react";
import { Star, CheckCircle2, ChevronUp, ChevronDown, Maximize2, Clock, Users } from "lucide-react";
import { TYPE_META, METHOD_META } from "../data/types";
import type { Activity } from "../data/types";

interface ReelsViewProps {
  activities: Activity[];
  favorites: number[];
  completed: number[];
  onToggleFavorite: (id: number) => void;
  onMarkComplete: (id: number) => void;
  onOpenDetail: (id: number) => void;
  darkMode: boolean;
}

const TYPE_LABEL: Record<string, string> = {
  zgadywanka: "Zgadywanka",
  rysowanie: "Rysowanie",
  kalambury: "Kalambury",
  ruch: "Ruch",
  rytm: "Rytm",
  narracja: "Narracja",
  budowanie: "Budowanie",
  obserwacja: "Obserwacja",
  poznawcze: "Poznawcze",
  hotwheels: "Hot Wheels",
};

function ReelsSlide({
  activity,
  index,
  total,
  isFav,
  isCompleted,
  onFav,
  onComplete,
  onOpen,
  visible,
}: {
  activity: Activity;
  index: number;
  total: number;
  isFav: boolean;
  isCompleted: boolean;
  onFav: () => void;
  onComplete: () => void;
  onOpen: () => void;
  visible: boolean;
}) {
  const meta = TYPE_META[activity.type] ?? { bg: "#f5f5f5", accent: "#888", icon: "" };
  const methodMeta = METHOD_META[activity.method as keyof typeof METHOD_META];
  const isZeroPrep = activity.prep.length === 1 && activity.prep[0] === "zero prep";

  return (
    <div
      className="reels-slide relative overflow-hidden select-none"
      style={{
        background: `linear-gradient(160deg, ${meta.accent}22 0%, #0a0c17 45%)`,
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 30%, ${meta.accent}30 0%, transparent 65%)`,
          transition: "background 0.5s ease",
        }}
      />

      {/* Type + method badges */}
      <div
        className="absolute top-4 left-4 flex flex-wrap gap-2"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "all 0.4s cubic-bezier(.16,1,.3,1) 0.05s",
        }}
      >
        <span
          className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: meta.accent, color: "white" }}
        >
          {TYPE_LABEL[activity.type] ?? activity.type}
        </span>
        {methodMeta && (
          <span
            className="text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: `${methodMeta.color}20`, color: methodMeta.color, border: `1px solid ${methodMeta.color}40` }}
          >
            {methodMeta.label}
          </span>
        )}
      </div>

      {/* Index indicator */}
      <div
        className="absolute top-4 right-4 text-[11px] font-bold text-white/30"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease 0.1s",
        }}
      >
        {index + 1}/{total}
      </div>

      {/* Main content */}
      <div
        className="absolute inset-0 flex flex-col justify-center px-6 pb-28 pt-16"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.45s cubic-bezier(.16,1,.3,1) 0.08s",
        }}
      >
        {/* Zero prep badge */}
        {isZeroPrep && (
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">⚡ Zero przygotowań</span>
          </div>
        )}

        {/* Activity name */}
        <h2 className="text-white font-black leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 7vw, 3rem)" }}>
          {activity.name}
        </h2>

        {/* Description */}
        <p className="text-white/60 text-[14px] leading-relaxed mb-5 line-clamp-4">
          {activity.description}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-1.5 text-white/50 text-[12px] font-semibold">
            <Clock size={13} className="text-white/30" />
            {activity.duration}
          </div>
          <div className="flex items-center gap-1.5 text-white/50 text-[12px] font-semibold">
            <Users size={13} className="text-white/30" />
            {activity.age[0]}–{activity.age[activity.age.length - 1]} lat
          </div>
          {activity.prep[0] !== "zero prep" && (
            <div className="flex items-center gap-1.5 text-amber-400/70 text-[12px] font-semibold">
              📦 {activity.prep.slice(0, 2).join(", ")}
            </div>
          )}
        </div>

        {/* Tell child */}
        <div
          className="rounded-2xl px-4 py-3 mb-2"
          style={{ background: `${meta.accent}15`, border: `1px solid ${meta.accent}25` }}
        >
          <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: meta.accent }}>
            Powiedz dziecku
          </div>
          <div className="text-white/75 text-[13px] italic leading-snug">
            &ldquo;{activity.tellChild}&rdquo;
          </div>
        </div>

        {/* Key competencies */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {activity.competencies.slice(0, 3).map((c) => (
            <span
              key={c}
              className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white/50"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {c}
            </span>
          ))}
          {activity.competencies.length > 3 && (
            <span className="text-[10px] font-bold px-2 py-1 text-white/30">
              +{activity.competencies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Bottom action bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4"
        style={{
          background: "linear-gradient(to top, rgba(10,12,23,0.9) 0%, transparent 100%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease 0.15s",
        }}
      >
        <div className="flex gap-3">
          <button
            onClick={onFav}
            className="w-12 h-12 rounded-2xl flex items-center justify-center border-none cursor-pointer transition-all active:scale-90"
            style={{
              background: isFav ? "#F59E0B20" : "rgba(255,255,255,0.08)",
              border: `1.5px solid ${isFav ? "#F59E0B50" : "rgba(255,255,255,0.12)"}`,
            }}
          >
            <Star
              size={20}
              fill={isFav ? "#F59E0B" : "none"}
              stroke={isFav ? "#F59E0B" : "rgba(255,255,255,0.5)"}
            />
          </button>

          <button
            onClick={onComplete}
            className="w-12 h-12 rounded-2xl flex items-center justify-center border-none cursor-pointer transition-all active:scale-90"
            style={{
              background: isCompleted ? "#22C55E20" : "rgba(255,255,255,0.08)",
              border: `1.5px solid ${isCompleted ? "#22C55E50" : "rgba(255,255,255,0.12)"}`,
            }}
          >
            <CheckCircle2
              size={20}
              stroke={isCompleted ? "#22C55E" : "rgba(255,255,255,0.5)"}
            />
          </button>
        </div>

        <button
          onClick={onOpen}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-[13px] border-none cursor-pointer transition-all active:scale-95"
          style={{
            background: `linear-gradient(135deg, ${meta.accent}, ${meta.accent}cc)`,
            color: "white",
            boxShadow: `0 4px 16px ${meta.accent}40`,
          }}
        >
          <Maximize2 size={14} />
          Rozwiń
        </button>
      </div>

      {/* Completed overlay */}
      {isCompleted && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(34,197,94,0.04)" }}
        />
      )}
    </div>
  );
}

export function ReelsView({
  activities,
  favorites,
  completed,
  onToggleFavorite,
  onMarkComplete,
  onOpenDetail,
  darkMode: _darkMode,
}: ReelsViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleMap, setVisibleMap] = useState<Record<number, boolean>>({ 0: true });

  // Track which slide is in view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.getAttribute("data-index") ?? "0");
          if (entry.isIntersecting) {
            setActiveIndex(idx);
            setVisibleMap((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    container.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activities]);

  // Keyboard navigation
  const goNext = useCallback(() => {
    const container = containerRef.current;
    if (!container || activeIndex >= activities.length - 1) return;
    const next = container.querySelector(`[data-index="${activeIndex + 1}"]`);
    next?.scrollIntoView({ behavior: "smooth" });
  }, [activeIndex, activities.length]);

  const goPrev = useCallback(() => {
    const container = containerRef.current;
    if (!container || activeIndex <= 0) return;
    const prev = container.querySelector(`[data-index="${activeIndex - 1}"]`);
    prev?.scrollIntoView({ behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowUp") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // Touch swipe
  const touchStartY = useRef<number | null>(null);
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 50) {
      if (dy > 0) goNext();
      else goPrev();
    }
    touchStartY.current = null;
  }, [goNext, goPrev]);

  if (activities.length === 0) return null;

  return (
    <div className="relative">
      {/* Scroll container */}
      <div ref={containerRef} className="reels-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        {activities.map((activity, i) => (
          <div key={activity.id} data-index={i} className="reels-slide-wrapper">
            <ReelsSlide
              activity={activity}
              index={i}
              total={activities.length}
              isFav={favorites.includes(activity.id)}
              isCompleted={completed.includes(activity.id)}
              onFav={() => onToggleFavorite(activity.id)}
              onComplete={() => onMarkComplete(activity.id)}
              onOpen={() => onOpenDetail(activity.id)}
              visible={visibleMap[i] ?? false}
            />
          </div>
        ))}
      </div>

      {/* Nav arrows */}
      {activeIndex > 0 && (
        <button
          onClick={goPrev}
          className="absolute top-2 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center border-none cursor-pointer transition-all active:scale-90"
          style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
        >
          <ChevronUp size={18} className="text-white/70" />
        </button>
      )}
      {activeIndex < activities.length - 1 && (
        <button
          onClick={goNext}
          className="absolute bottom-24 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center border-none cursor-pointer reels-nav-pulse"
          style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "none" }}
        >
          <ChevronDown size={18} className="text-white/70" />
        </button>
      )}

      {/* Progress dots */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20 pointer-events-none">
        {activities.slice(Math.max(0, activeIndex - 3), Math.min(activities.length, activeIndex + 4)).map((_, relI) => {
          const absI = relI + Math.max(0, activeIndex - 3);
          return (
            <div
              key={absI}
              className="rounded-full transition-all duration-300"
              style={{
                width: absI === activeIndex ? 6 : 4,
                height: absI === activeIndex ? 6 : 4,
                background: absI === activeIndex ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
