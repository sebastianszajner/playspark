import { useEffect, useRef, useState } from "react";
import { ChevronDown, Zap } from "lucide-react";
import { ACTIVITIES } from "../data/activities";

const PILLARS = [
  {
    key: "P", word: "PLAY", color: "#FF6B6B",
    stat: String(ACTIVITIES.length), statLabel: "zabaw",
    title: "Zabawa offline",
    desc: "120 przetestowanych aktywności bez ekranu. Każda ma naukowe uzasadnienie i działa naprawdę.",
  },
  {
    key: "L", word: "LEARN", color: "#A855F7",
    stat: String(new Set(ACTIVITIES.flatMap(a => a.competencies)).size), statLabel: "kompetencji",
    title: "Rozwój przez ruch",
    desc: "Motoryka, emocje, mowa, relacje. 10 wymiarów każdej zabawy — znajdziesz idealną w 5 sekund.",
  },
  {
    key: "A", word: "ACT", color: "#4ECDC4",
    stat: String(ACTIVITIES.filter(a => a.prep.length === 1 && a.prep[0] === "zero prep").length), statLabel: "zero prep",
    title: "Zero przygotowań",
    desc: "Większość zabaw zaczyna się natychmiast. Żadnych zakupów, żadnego drukowania, tylko Ty i dziecko.",
  },
  {
    key: "Y", word: "YOU", color: "#F59E0B",
    stat: "3–7", statLabel: "lat",
    title: "Dla rodzica",
    desc: "Stworzone przez tatę Klary i Kuby. Każda zabawa przetestowana w boju — nie w teorii.",
  },
];

function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    color: PILLARS[Math.floor(Math.random() * PILLARS.length)].color,
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 5,
    opacity: 0.08 + Math.random() * 0.18,
  }));
}

const PARTICLES = generateParticles(28);

const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export function WowHeroScreen({ onExplore }: { onExplore: () => void }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Auto-cycle letters on touch devices
  useEffect(() => {
    if (!isTouchDevice) return;
    const keys = PILLARS.map(p => p.key);
    let idx = 0;
    const cycle = () => {
      if (!userInteractedRef.current) {
        setHovered(keys[idx % keys.length]);
        idx++;
      }
      cycleRef.current = setTimeout(cycle, 2200);
    };
    const startDelay = setTimeout(() => { cycleRef.current = setTimeout(cycle, 800); }, 1400);
    return () => {
      clearTimeout(startDelay);
      if (cycleRef.current) clearTimeout(cycleRef.current);
    };
  }, []);

  // Mouse parallax
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const container = el.parentElement;
    if (!container) return;
    const handleMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    };
    const handleLeave = () => { el.style.transform = "rotateY(0) rotateX(0)"; };
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);
    return () => { container.removeEventListener("mousemove", handleMove); container.removeEventListener("mouseleave", handleLeave); };
  }, []);

  const active = PILLARS.find(p => p.key === hovered);

  return (
    <section
      className="relative overflow-hidden select-none"
      style={{
        minHeight: "100svh",
        background: "#0a0c17",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        perspective: "800px",
      }}
    >
      {/* Ambient background glow */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: active
            ? `radial-gradient(ellipse 70% 60% at 50% 50%, ${active.color}18 0%, ${active.color}06 50%, transparent 75%)`
            : "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,107,0.06) 0%, transparent 70%)",
          transition: "background 0.7s cubic-bezier(.4,0,.2,1)",
        }}
      />

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.opacity,
              animation: `ps-float ${p.duration}s ${p.delay}s ease-in-out infinite`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-full border border-white/[0.025]" style={{ width: 500, height: 500, animation: "ps-spin 30s linear infinite" }} />
        <div className="absolute rounded-full border border-white/[0.015]" style={{ width: 700, height: 700, animation: "ps-spin 50s linear infinite reverse" }} />
      </div>

      {/* 3D wrapper */}
      <div ref={innerRef} className="relative z-10 flex flex-col items-center" style={{ willChange: "transform", transition: "transform .15s ease-out" }}>

        {/* Top badge */}
        <div
          className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <Zap size={13} className="text-amber-400" />
          <span className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Manual rodzica</span>
        </div>

        {/* Giant PLAY letters */}
        <div className="flex items-center gap-2 sm:gap-4 mb-4">
          {PILLARS.map((p, i) => (
            <button
              key={p.key}
              onMouseEnter={() => { if (!isTouchDevice) setHovered(p.key); }}
              onMouseLeave={() => { if (!isTouchDevice) setHovered(null); }}
              onClick={() => {
                userInteractedRef.current = true;
                setHovered(hovered === p.key ? null : p.key);
              }}
              className="border-none bg-transparent cursor-pointer p-0 leading-none"
              style={{
                fontSize: "clamp(52px, 12vw, 130px)",
                fontWeight: 900,
                fontFamily: "inherit",
                color: p.color,
                textShadow: hovered === p.key
                  ? `0 0 60px ${p.color}80, 0 0 120px ${p.color}40`
                  : `0 0 20px ${p.color}30`,
                transform: !visible
                  ? "scale(0.7) translateY(20px)"
                  : hovered === p.key
                  ? "scale(1.18) translateY(-4px)"
                  : hovered !== null
                  ? "scale(0.88) translateY(2px)"
                  : "scale(1)",
                opacity: !visible ? 0 : (hovered !== null && hovered !== p.key ? 0.2 : 1),
                filter: hovered !== null && hovered !== p.key ? "blur(1px)" : "none",
                transition: `all 0.4s cubic-bezier(.4,0,.2,1)`,
                transitionDelay: `${0.1 + i * 0.06}s`,
                willChange: "transform, opacity, filter",
              }}
            >
              {p.key}
            </button>
          ))}
        </div>

        {/* Subtitle — zanika przy hover */}
        <div
          style={{
            opacity: hovered ? 0 : visible ? 0.45 : 0,
            transform: hovered ? "translateY(8px)" : "translateY(0)",
            transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
            pointerEvents: "none",
          }}
        >
          <p className="text-[13px] sm:text-[15px] font-semibold text-white/45 tracking-wide text-center mb-1">
            zabawy offline · 3–7 lat · zero ekranu
          </p>
          <p className="text-[11px] text-white/25 text-center tracking-widest uppercase">
            {isTouchDevice ? "dotknij literę" : "najedź na literę"}
          </p>
        </div>

        {/* Info panel — pojawia się przy hover */}
        <div
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.4s cubic-bezier(.16,1,.3,1)",
            pointerEvents: "none",
            minHeight: 80,
            textAlign: "center",
            maxWidth: 400,
            padding: "0 16px",
          }}
        >
          {active && (
            <>
              <div className="text-[11px] font-black tracking-widest uppercase mb-1.5" style={{ color: active.color }}>
                {active.word}
              </div>
              <h3 className="text-[18px] sm:text-[22px] font-black text-white mb-2 leading-tight">
                {active.title}
              </h3>
              <p className="text-[13px] text-white/55 leading-relaxed">
                {active.desc}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}>
                <span className="text-[20px] font-black" style={{ color: active.color }}>{active.stat}</span>
                <span className="text-[11px] font-bold text-white/40">{active.statLabel}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* CTA — scroll */}
      <button
        onClick={onExplore}
        className="absolute bottom-[120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer group"
        style={{
          opacity: visible ? 0.75 : 0,
          transition: "all 0.5s cubic-bezier(.16,1,.3,1)",
          transitionDelay: "0.5s",
        }}
      >
        <span className="text-[11px] text-white/40 font-bold tracking-widest uppercase group-hover:text-white/70 transition-colors">
          odkryj zabawy
        </span>
        <ChevronDown
          size={20}
          className="text-white/30 group-hover:text-white/60 transition-colors"
          style={{ animation: "ps-bounce 2s ease-in-out infinite" }}
        />
      </button>

      {/* Bottom stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 grid grid-cols-4"
        style={{
          background: "rgba(10,12,23,0.85)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease",
          transitionDelay: "0.6s",
          marginBottom: 48,
        }}
      >
        {PILLARS.map(p => (
          <div
            key={p.key}
            className="flex flex-col items-center py-3 border-r border-white/[0.04] last:border-r-0 cursor-pointer transition-colors"
            onClick={() => setHovered(hovered === p.key ? null : p.key)}
            style={{ background: hovered === p.key ? `${p.color}08` : "transparent" }}
          >
            <span className="text-[18px] sm:text-[24px] font-black leading-none" style={{
              background: `linear-gradient(135deg, ${p.color}, ${p.color}80)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              {p.stat}
            </span>
            <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest mt-0.5">{p.statLabel}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
