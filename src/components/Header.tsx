import { useEffect, useRef, useState } from "react";
import { ACTIVITIES } from "../data/activities";

function useAnimatedCounter(target: number, duration = 800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export function Header({ darkMode }: { darkMode: boolean }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const uniqueComp = new Set(ACTIVITIES.flatMap((a) => a.competencies)).size;
  const zeroPrepCount = ACTIVITIES.filter((a) => a.prep.length === 1 && a.prep[0] === "zero prep").length;

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const scrollY = window.scrollY;
      headerRef.current.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        el.style.transform = `translateY(${scrollY * (Number(el.dataset.parallax) || 0)}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={headerRef} className="relative overflow-hidden px-6 pt-12 pb-10 text-white"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)" }}>
      <div data-parallax="0.1" className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="680" cy="80" r="120" fill="url(#hg1)" opacity="0.12" />
          <circle cx="100" cy="300" r="180" fill="url(#hg2)" opacity="0.08" />
          <circle cx="400" cy="50" r="60" fill="url(#hg3)" opacity="0.1" />
          <circle cx="350" cy="250" r="90" fill="url(#hg4)" opacity="0.06" />
          <g opacity="0.3">
            <circle cx="150" cy="60" r="1.5" fill="white" /><circle cx="200" cy="90" r="1" fill="white" /><circle cx="180" cy="40" r="1.2" fill="white" />
            <line x1="150" y1="60" x2="200" y2="90" stroke="white" strokeWidth="0.3" /><line x1="150" y1="60" x2="180" y2="40" stroke="white" strokeWidth="0.3" />
            <circle cx="550" cy="120" r="1.5" fill="white" /><circle cx="600" cy="80" r="1" fill="white" /><circle cx="580" cy="140" r="1.2" fill="white" />
            <line x1="550" y1="120" x2="600" y2="80" stroke="white" strokeWidth="0.3" /><line x1="550" y1="120" x2="580" y2="140" stroke="white" strokeWidth="0.3" />
            <circle cx="350" cy="300" r="1" fill="white" /><circle cx="380" cy="280" r="1.5" fill="white" />
            <line x1="350" y1="300" x2="380" y2="280" stroke="white" strokeWidth="0.3" />
          </g>
          <polygon points="700,200 720,240 680,240" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <rect x="60" y="150" width="20" height="20" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" transform="rotate(15 70 160)" />
          <circle cx="750" cy="320" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <defs>
            <radialGradient id="hg1"><stop offset="0%" stopColor="#FF6B6B" /><stop offset="100%" stopColor="transparent" /></radialGradient>
            <radialGradient id="hg2"><stop offset="0%" stopColor="#4ECDC4" /><stop offset="100%" stopColor="transparent" /></radialGradient>
            <radialGradient id="hg3"><stop offset="0%" stopColor="#A855F7" /><stop offset="100%" stopColor="transparent" /></radialGradient>
            <radialGradient id="hg4"><stop offset="0%" stopColor="#F59E0B" /><stop offset="100%" stopColor="transparent" /></radialGradient>
          </defs>
        </svg>
      </div>

      <div data-parallax="0.25" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-16 w-2 h-2 rounded-full bg-amber-400/30 animate-float" />
        <div className="absolute top-20 right-40 w-1.5 h-1.5 rounded-full bg-pink-400/25 animate-float" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-12 left-20 w-2.5 h-2.5 rounded-full bg-cyan-400/20 animate-float" style={{ animationDelay: "1.4s" }} />
        <div className="absolute top-6 left-[40%] w-1.5 h-1.5 rounded-full bg-emerald-400/25 animate-float" style={{ animationDelay: "2.1s" }} />
        <div className="absolute bottom-20 right-[30%] w-2 h-2 rounded-full bg-violet-400/20 animate-float" style={{ animationDelay: "2.8s" }} />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="flex items-start gap-5 mb-6">
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl animate-glow"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)", boxShadow: "0 8px 32px rgba(255, 107, 107, 0.3)" }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M20 3L8 20H17L14 33L28 14H19L20 3Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black animate-bounce-in"
              style={{ background: "#4ECDC4", color: "#1a1a2e", animationDelay: "300ms" }}>
              ✓
            </div>
          </div>
          <div>
            <h1 className="text-[2.5rem] font-black tracking-tight leading-none mb-1">
              Play<span className="gradient-text" style={{ WebkitTextFillColor: "transparent" }}>Spark</span>
            </h1>
            <p className="text-white/60 text-sm font-medium tracking-wide">Manual rodzica — zabawy offline 3-7 lat</p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <StatBadge value={ACTIVITIES.length} label="zabaw" accent="#FF6B6B" delay={0} />
          <StatBadge value={uniqueComp} label="kompetencji" accent="#F59E0B" delay={80} />
          <StatBadge value={zeroPrepCount} label="zero prep" accent="#22C55E" delay={160} />
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1200 40" preserveAspectRatio="none" style={{ height: "20px" }}>
        <path d="M0,40 C300,10 900,10 1200,40 L1200,40 L0,40Z" fill={darkMode ? "#0f0f1a" : "#FAFAF7"} />
      </svg>
    </div>
  );
}

function StatBadge({ label, value, accent, delay }: { label: string; value: number; accent: string; delay: number }) {
  const animated = useAnimatedCounter(value);
  return (
    <div className="rounded-xl px-4 py-2 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
      <span className="text-xl font-black" style={{ color: accent }}>{animated}</span>
      <span className="text-[11px] ml-1.5 text-white/50 font-semibold">{label}</span>
    </div>
  );
}
