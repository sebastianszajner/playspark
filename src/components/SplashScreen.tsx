import { useEffect, useState } from "react";

const SPLASH_KEY = "playspark_splash_v2";

interface SplashScreenProps {
  onDone: () => void;
}

export function SplashScreen({ onDone }: SplashScreenProps) {
  const [phase, setPhase] = useState<"hidden" | "enter" | "show" | "exit">("hidden");

  useEffect(() => {
    const shown = sessionStorage.getItem(SPLASH_KEY);
    if (shown) { onDone(); return; }
    sessionStorage.setItem(SPLASH_KEY, "1");

    const t0 = setTimeout(() => setPhase("enter"), 50);
    const t1 = setTimeout(() => setPhase("show"), 150);
    const t2 = setTimeout(() => setPhase("exit"), 1700);
    const t3 = setTimeout(() => onDone(), 2100);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{
        background: "linear-gradient(135deg, #0a0c17 0%, #1a1a2e 100%)",
        opacity: phase === "exit" ? 0 : 1,
        transition: phase === "exit" ? "opacity 0.4s ease-out" : "none",
      }}
    >
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute rounded-full"
            style={{
              width: 3 + (i % 4) * 2 + "px",
              height: 3 + (i % 4) * 2 + "px",
              left: (i * 8.3) % 100 + "%",
              top: (i * 13.7) % 100 + "%",
              background: ["#FF6B6B", "#FF8E53", "#F59E0B", "#A855F7"][i % 4],
              opacity: 0.15 + (i % 3) * 0.08,
              animation: `float ${5 + (i % 5)}s infinite ease-in-out`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Logo area */}
      <div
        style={{
          transform: phase === "enter" ? "scale(0.7) translateY(16px)" : "scale(1) translateY(0)",
          opacity: phase === "enter" ? 0 : 1,
          transition: "transform 0.55s cubic-bezier(.34,1.56,.64,1), opacity 0.4s ease",
        }}
        className="text-center"
      >
        <div className="text-[64px] mb-3 leading-none" style={{ filter: "drop-shadow(0 0 24px #FF6B6B88)" }}>⚡</div>
        <div className="font-black text-[32px] text-white tracking-tight"
          style={{ textShadow: "0 0 40px rgba(255,107,107,0.4)" }}>
          PlaySpark
        </div>
        <div className="text-white/40 text-[13px] mt-1.5 tracking-wide">zabawy przez które dzieci rosną</div>

        <div className="mt-6 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20"
              style={{
                animation: "splash-dot 1s infinite ease-in-out",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
