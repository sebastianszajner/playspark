import { useEffect, useRef, useState } from "react";
import { BookOpen, Heart, Sparkles, GraduationCap, Users, ChevronDown, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { ACTIVITIES } from "../data/activities";
import { METHOD_META, type Method } from "../data/types";

// ─── Particle helpers ───────────────────────────────────────────────
function generateParticles(count: number) {
  const colors = ["#FF6B6B", "#A855F7", "#4ECDC4", "#F59E0B", "#22C55E"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: 6 + Math.random() * 10,
    delay: Math.random() * 6,
    opacity: 0.07 + Math.random() * 0.16,
  }));
}
const AUTHOR_PARTICLES = generateParticles(20);

// ─── Author WOW Section ─────────────────────────────────────────────
const EXPERTISE = ["AI w biznesie", "Psychologia sprzedaży", "Train the Trainer", "Zarządzanie L&D", "Systemy kompetencji", "Interwencja kryzysowa"];
const CLIENTS = ["Noble Bank", "Philip Morris", "JTI", "Packhelp", "Lyreco", "Deloitte", "Capgemini", "Generali", "Lidl", "Allegro", "InPost", "Youth Business PL"];

const AUTHOR_STATS = [
  { value: "10+", label: "lat L&D", color: "#FF6B6B" },
  { value: "6k", label: "godz. szkoleń", color: "#A855F7" },
  { value: "+20%", label: "efektywność", color: "#4ECDC4" },
  { value: "15+", label: "klientów", color: "#F59E0B" },
];

function AuthorWow() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = avatarRef.current;
    if (!el) return;
    const container = el.closest(".author-parallax-root") as HTMLElement;
    if (!container) return;
    const handleMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.03)`;
    };
    const handleLeave = () => { el.style.transform = "rotateY(0) rotateX(0) scale(1)"; };
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);
    return () => { container.removeEventListener("mousemove", handleMove); container.removeEventListener("mouseleave", handleLeave); };
  }, []);

  return (
    <div className="author-parallax-root relative overflow-hidden rounded-2xl mb-5" style={{ background: "#0a0c17", perspective: "800px" }}>
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {AUTHOR_PARTICLES.map(p => (
          <div key={p.id} className="absolute rounded-full" style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: p.color, opacity: p.opacity,
            animation: `ps-float ${p.duration}s ${p.delay}s ease-in-out infinite`,
            willChange: "transform",
          }} />
        ))}
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(83,52,131,0.25) 0%, transparent 65%)",
      }} />

      {/* Header row */}
      <div className="relative z-10 px-5 pt-6 pb-4 flex items-center gap-4">
        {/* 3D Avatar */}
        <div ref={avatarRef} style={{ willChange: "transform", transition: "transform .15s ease-out", flexShrink: 0 }}>
          <div
            className="w-20 h-20 rounded-2xl overflow-hidden"
            style={{
              border: "2px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 32px rgba(83,52,131,0.5), 0 0 60px rgba(83,52,131,0.2)",
              opacity: reveal ? 1 : 0,
              transform: reveal ? "scale(1)" : "scale(0.8)",
              transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(.34,1.56,.64,1)",
            }}
          >
            <img
              src="/playspark/sebastian-szajner.jpg"
              alt="Sebastian Szajner"
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                const fallback = t.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="w-full h-full hidden items-center justify-center font-black text-2xl text-white"
              style={{ background: "linear-gradient(135deg, #533483 0%, #0e2954 100%)", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              SS
            </div>
          </div>
        </div>

        {/* Name + title */}
        <div style={{ opacity: reveal ? 1 : 0, transform: reveal ? "translateX(0)" : "translateX(-12px)", transition: "all 0.5s cubic-bezier(.16,1,.3,1) 0.1s" }}>
          <h3 className="text-[20px] font-black text-white leading-tight">Sebastian Szajner</h3>
          <p className="text-[12px] font-semibold mt-0.5" style={{ color: "#7DD3FC" }}>
            Trener · Konsultant · Tata Klary i Kuby
          </p>
          {/* Expertise tags */}
          <div className="flex flex-wrap gap-1 mt-2">
            {EXPERTISE.map(t => (
              <span key={t} className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 grid grid-cols-4 mx-5 mb-4 rounded-xl overflow-hidden"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
        {AUTHOR_STATS.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center py-2.5 border-r border-white/[0.05] last:border-r-0"
            style={{
              opacity: reveal ? 1 : 0,
              transition: `opacity 0.5s ease ${0.2 + i * 0.07}s`,
            }}>
            <span className="text-[18px] font-black leading-none" style={{
              background: `linear-gradient(135deg, ${s.color}, ${s.color}70)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{s.value}</span>
            <span className="text-[9px] text-white/30 font-bold uppercase tracking-wide mt-0.5">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="relative z-10 px-5 pb-4">
        <p className="text-[12px] leading-relaxed text-white/55 mb-2">
          Trener i konsultant z ponad <strong className="text-white/80">10-letnim doświadczeniem</strong> w L&amp;D.
          Wcześniej w sprzedaży (Noble Bank), przeszedł pełną ścieżkę od trenera wewnętrznego po Kierownika Szkoleń.
          Budował matryce kompetencji i systemy sprzedaży dla kilkuset-osobowych zespołów
          — rynki PL, DACH, ES, UK, FR.
          Ponad <strong className="text-white/80">6&nbsp;000 godzin</strong> pracy warsztatowej.
          Lider merytoryczny AI w Nowe Motywacje, autor narzędzia diagnostycznego <strong className="text-white/80">FLUX</strong>.
          Mentor Youth Business Poland.
        </p>
        {/* Credentials */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {["Psycholog SWPS", "Interwenient kryzysowy", "NEO-FFI diagnosta", "300+ dni szkoleń"].map(c => (
            <span key={c} className="text-[9px] font-bold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(168,85,247,0.12)", color: "rgba(216,180,254,0.8)", border: "1px solid rgba(168,85,247,0.2)" }}>
              {c}
            </span>
          ))}
        </div>

        {/* Klienci */}
        <div className="mb-4">
          <p className="text-[9px] font-black uppercase tracking-widest text-white/25 mb-2">Wybrani klienci</p>
          <div className="flex flex-wrap gap-1.5">
            {CLIENTS.map(c => (
              <span key={c} className="text-[10px] font-semibold px-2 py-0.5 rounded-lg"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* PlaySpark kontekst */}
        <div className="rounded-xl px-4 py-3 mb-4" style={{ background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.15)" }}>
          <p className="text-[11px] text-white/60 leading-relaxed">
            <span style={{ color: "#FF6B6B", fontWeight: 800 }}>PlaySpark</span> to narzędzie, którego sam potrzebowałem jako tata
            Klary i Kuby — zabawy offline, z naukowym uzasadnieniem, gotowe na start bez przygotowań.
            Bo najlepsza zabawa to taka, w której dziecko nie widzi nauki, a rodzic nie widzi wysiłku.
          </p>
        </div>

        {/* Kontakt */}
        <div className="flex flex-col gap-2">
          <a href="https://www.linkedin.com/in/sebastianszajner/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12px] font-semibold active:scale-95 transition-transform"
            style={{ background: "rgba(10,102,194,0.15)", color: "#60A5FA", border: "1px solid rgba(10,102,194,0.2)" }}>
            <Linkedin size={15} />
            <span>linkedin.com/in/sebastianszajner</span>
            <ExternalLink size={11} className="ml-auto opacity-40" />
          </a>
          <div className="grid grid-cols-2 gap-2">
            <a href="mailto:sebastianszajner@gmail.com"
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[12px] font-semibold active:scale-95 transition-transform"
              style={{ background: "rgba(234,67,53,0.1)", color: "#FCA5A5", border: "1px solid rgba(234,67,53,0.15)" }}>
              <Mail size={14} />
              <span className="truncate">e-mail</span>
            </a>
            <a href="tel:+48694431605"
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[12px] font-semibold active:scale-95 transition-transform"
              style={{ background: "rgba(34,197,94,0.1)", color: "#86EFAC", border: "1px solid rgba(34,197,94,0.15)" }}>
              <Phone size={14} />
              <span>+48 694 431 605</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Philosophy card ─────────────────────────────────────────────────
function PhilosophyCard({ icon, accent, title, text, darkMode }: {
  icon: React.ReactNode; accent: string; title: string; text: string; darkMode: boolean;
}) {
  const dm = darkMode;
  return (
    <div className="rounded-2xl p-4 transition-all duration-200 hover:shadow-md"
      style={{ background: dm ? "#1a1a2e" : "white", border: `1px solid ${dm ? "#2a2a40" : "#EDEDEA"}` }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: `${accent}15`, color: accent }}>
          {icon}
        </div>
        <div>
          <h4 className={`text-[14px] font-extrabold mb-1 ${dm ? "text-white" : "text-[#1a1a2e]"}`}>{title}</h4>
          <p className={`text-[13px] leading-relaxed ${dm ? "text-gray-400" : "text-gray-500"}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────
function FAQ({ q, a, darkMode }: { q: string; a: string; darkMode: boolean }) {
  const [open, setOpen] = useState(false);
  const dm = darkMode;
  return (
    <div className={`rounded-xl overflow-hidden transition-all duration-200 ${dm ? "bg-[#1a1a2e]" : "bg-white"}`}
      style={{ border: `1px solid ${dm ? "#2a2a40" : "#EDEDEA"}` }}>
      <button onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer border-none bg-transparent ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
        <span className="text-[13px] font-semibold pr-2">{q}</span>
        <ChevronDown size={16} className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${dm ? "text-gray-500" : "text-gray-400"}`} />
      </button>
      {open && (
        <div className={`px-4 pb-3 text-[13px] leading-relaxed ${dm ? "text-gray-400" : "text-gray-500"}`}>
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Stat item (for bottom dark block) ───────────────────────────────
function StatItem({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[22px] font-black" style={{ color: accent }}>{value}</span>
      <span className="text-[10px] text-white/40 font-semibold uppercase tracking-wide">{label}</span>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────
export function AboutPage({ darkMode }: { darkMode: boolean }) {
  const dm = darkMode;
  const uniqueComp = new Set(ACTIVITIES.flatMap((a) => a.competencies)).size;
  const uniqueMethods = new Set(ACTIVITIES.map((a) => a.method)).size;
  const zeroPrepCount = ACTIVITIES.filter((a) => a.prep.length === 1 && a.prep[0] === "zero prep").length;
  const methodList = Array.from(new Set(ACTIVITIES.map((a) => a.method)));

  return (
    <div className="px-4 pb-10 max-w-2xl mx-auto">
      {/* WOW Author section — pierwsza na stronie */}
      <div className="mt-6 mb-6">
        <AuthorWow />
      </div>

      {/* Tool header */}
      <div className="mb-6 text-center">
        <div className="w-16 h-16 rounded-2xl mx-auto mb-4 overflow-hidden shadow-xl"
          style={{ boxShadow: "0 8px 32px rgba(83,52,131,0.3)" }}>
          <img src="/playspark/playspark-logo.svg" alt="PlaySpark" className="w-full h-full object-cover" />
        </div>
        <h2 className={`text-[22px] font-black mb-2 ${dm ? "text-white" : "text-[#1a1a2e]"}`}>O PlaySpark</h2>
        <p className={`text-[14px] leading-relaxed max-w-sm mx-auto ${dm ? "text-gray-400" : "text-gray-500"}`}>
          Narzędzie stworzone przez rodzica-praktyka i trenera L&amp;D.
          Każda zabawa ma naukowe uzasadnienie i jest przetestowana w boju.
        </p>
      </div>

      {/* Philosophy */}
      <div className="space-y-3 mb-8">
        <PhilosophyCard icon={<Heart size={18} />} accent="#FF6B6B" title="Filozofia" darkMode={dm}
          text="Wychowanie przez zabawę, nie przez szkolenie. Dziecko uczy się najlepiej, gdy jest zaangażowane emocjonalnie — dlatego każda aktywność zaczyna się od radości, a kończy na kompetencji." />
        <PhilosophyCard icon={<GraduationCap size={18} />} accent="#A855F7" title="Podstawy naukowe" darkMode={dm}
          text="Zabawy oparte na uznanych metodach: Montessori (sensoryka i samodzielność), Integracja Sensoryczna, metoda Labana (ruch twórczy), Orff (rytm i muzyka), Sherborne (relacja przez ruch). Każda aktywność ma źródło naukowe." />
        <PhilosophyCard icon={<BookOpen size={18} />} accent="#3B82F6" title="Taksonomia 10-wymiarowa" darkMode={dm}
          text="Każda zabawa jest opisana w 10 wymiarach: typ, miejsce, wiek, kompetencje, tematy, metoda, emocje, cele rozwojowe, czas trwania i przygotowania. Dzięki temu znajdziesz idealną zabawę w 5 sekund." />
        <PhilosophyCard icon={<Sparkles size={18} />} accent="#F59E0B" title="Dla kogo" darkMode={dm}
          text="Dla rodziców dzieci 3–7 lat, którzy szukają wartościowych zabaw offline. Nie potrzebujesz specjalnych materiałów — większość zabaw to zero prep. Wystarczy TY i Twoje dziecko." />
        <PhilosophyCard icon={<Users size={18} />} accent="#22C55E" title="Jak korzystać" darkMode={dm}
          text="Użyj filtrów żeby zawęzić: wybierz wiek, miejsce i nastrój. Tryb Ratunkowy znajdzie zabawę natychmiast. Zapisuj ulubione gwiazdką. Losuj, gdy nie wiesz od czego zacząć. Szukaj po nazwie Cmd+K." />
      </div>

      {/* Methods detail */}
      <div className={`rounded-2xl p-5 mb-8 ${dm ? "bg-[#1a1a2e] border border-gray-800" : "bg-white border border-gray-200"}`}>
        <h3 className={`text-[14px] font-extrabold mb-4 ${dm ? "text-white" : "text-[#1a1a2e]"}`}>Metody pedagogiczne w PlaySpark</h3>
        <div className="space-y-3">
          {methodList.map((m) => {
            const meta = METHOD_META[m as Method];
            const count = ACTIVITIES.filter((a) => a.method === m).length;
            return (
              <div key={m} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-base"
                  style={{ background: `${meta?.color ?? "#888"}15` }}>
                  <span style={{ fontSize: 16 }}>📚</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[13px] font-bold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>{m}</span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${dm ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                      {count} zabaw
                    </span>
                  </div>
                  {meta?.description && (
                    <p className={`text-[12px] mt-0.5 ${dm ? "text-gray-500" : "text-gray-400"}`}>{meta.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-8">
        <h3 className={`text-[14px] font-extrabold mb-3 ${dm ? "text-white" : "text-[#1a1a2e]"}`}>Częste pytania</h3>
        <div className="space-y-2">
          <FAQ q="Czy te zabawy są odpowiednie dla mojego dziecka?" darkMode={dm}
            a="Każda zabawa ma oznaczony zakres wiekowy (3–7 lat). Użyj filtra wieku, aby zobaczyć tylko zabawy dopasowane do Twojego dziecka." />
          <FAQ q="Co znaczy 'zero prep'?" darkMode={dm}
            a="Zabawy oznaczone 'zero prep' nie wymagają żadnych materiałów ani przygotowań. Możesz zacząć natychmiast — potrzebujesz tylko siebie i dziecka." />
          <FAQ q="Skąd wzięły się te zabawy?" darkMode={dm}
            a="Każda zabawa jest oparta na uznanej metodzie pedagogicznej i przetestowana w praktyce — m.in. z Klarą i Kubą. Nie teoria, tylko realna zabawa." />
          <FAQ q="Czy mogę korzystać offline?" darkMode={dm}
            a="Tak! PlaySpark działa jako PWA — po pierwszym załadowaniu możesz korzystać bez internetu. Dodaj do ekranu głównego telefonu." />
        </div>
      </div>

      {/* Stats block */}
      <div className="rounded-2xl p-5" style={{
        background: "linear-gradient(135deg, #0a0c17, #111827)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <StatItem value={String(ACTIVITIES.length)} label="zabaw" accent="#FF6B6B" />
          <StatItem value={String(uniqueComp)} label="kompetencji" accent="#A855F7" />
          <StatItem value={String(uniqueMethods)} label="metod" accent="#4ECDC4" />
          <StatItem value={String(zeroPrepCount)} label="zero prep" accent="#22C55E" />
        </div>
        <p className="text-white/25 text-[10px] text-center mt-4 font-medium tracking-wide uppercase">
          Baza stale rośnie — nowe zabawy dodawane regularnie
        </p>
      </div>
    </div>
  );
}
