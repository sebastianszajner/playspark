import { useState } from "react";
import { Zap, MapPin, Baby, Shuffle, Battery } from "lucide-react";
import { ACTIVITIES } from "../data/activities";
import { ALL_AGES, ALL_PLACES, AGE_COLORS, type Place } from "../data/types";
import { PlaceIcon } from "./TypeIcons";
import type { Activity } from "../data/types";

interface RescueModeProps {
  onSelectActivity: (activity: Activity) => void;
  darkMode: boolean;
}

const SITUATIONS = [
  { id: "nudzi-sie", label: "Nudzi się", icon: "😴", desc: "Jakakolwiek zabawa" },
  { id: "za-duzo-energii", label: "Za dużo energii", icon: "⚡", desc: "Ruch, rytm, kalambury" },
  { id: "marudzi", label: "Marudzi", icon: "😤", desc: "Angażujące umysłowo" },
  { id: "czeka", label: "Musi czekać", icon: "⏳", desc: "Ciche, na miejscu" },
  { id: "cisza", label: "Potrzeba ciszy", icon: "🤫", desc: "Spokojne, kreatywne" },
  { id: "razem", label: "Chcemy być razem", icon: "🫂", desc: "Budujące relację" },
];

const ENERGY_LEVELS = [
  { id: "low", label: "Mało energii", icon: "🔋", desc: "Siedząca, spokojna" },
  { id: "medium", label: "Średnio", icon: "⚡", desc: "Umiarkowany ruch" },
  { id: "high", label: "Pełna moc!", icon: "💥", desc: "Aktywna, energetyczna" },
];

function matchesEnergy(a: Activity, energy: string): boolean {
  switch (energy) {
    case "low": return a.type === "obserwacja" || a.type === "rysowanie" || a.type === "narracja" || a.type === "poznawcze";
    case "medium": return a.type === "budowanie" || a.type === "zgadywanka" || a.type === "kalambury";
    case "high": return a.type === "ruch" || a.type === "rytm";
    default: return true;
  }
}

function matchesSituation(a: Activity, situation: string): boolean {
  switch (situation) {
    case "nudzi-sie": return true;
    case "za-duzo-energii": return a.type === "ruch" || a.type === "kalambury" || a.type === "rytm";
    case "marudzi": return a.type === "poznawcze" || a.type === "narracja" || a.type === "zgadywanka";
    case "czeka": return a.place.includes("poczekalnia") || a.place.includes("restauracja");
    case "cisza": return a.type === "obserwacja" || a.type === "rysowanie" || a.type === "budowanie";
    case "razem": return a.competencies.includes("współpraca") || a.competencies.includes("zaufanie") || a.competencies.includes("empatia");
    default: return true;
  }
}

export function RescueMode({ onSelectActivity, darkMode }: RescueModeProps) {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState<number | null>(null);
  const [place, setPlace] = useState<string | null>(null);
  const [situation, setSituation] = useState<string | null>(null);
  const [energy, setEnergy] = useState<string | null>(null);
  const [result, setResult] = useState<Activity | null>(null);
  const dm = darkMode;

  const findActivity = () => {
    let pool = ACTIVITIES;
    if (age) pool = pool.filter((a) => a.age.includes(age));
    if (place) pool = pool.filter((a) => a.place.includes(place as Place));
    if (situation) pool = pool.filter((a) => matchesSituation(a, situation));
    if (energy) pool = pool.filter((a) => matchesEnergy(a, energy));
    const zeroPrepPool = pool.filter((a) => a.prep.length === 1 && a.prep[0] === "zero prep");
    const finalPool = zeroPrepPool.length >= 3 ? zeroPrepPool : pool;
    if (finalPool.length === 0) {
      setResult(pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null);
      return;
    }
    setResult(finalPool[Math.floor(Math.random() * finalPool.length)]);
  };

  const reset = () => { setAge(null); setPlace(null); setSituation(null); setEnergy(null); setResult(null); };

  if (!open) {
    return (
      <button onClick={() => setOpen(true)}
        className="w-full mx-4 mt-3 py-3.5 px-5 rounded-2xl cursor-pointer flex items-center gap-3 hover:scale-[1.01] active:scale-[0.99]"
        style={{
          maxWidth: "calc(100% - 2rem)",
          background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
          boxShadow: "0 4px 16px rgba(255,107,107,0.35)",
          transition: "transform 0.15s, box-shadow 0.15s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(255,107,107,0.5)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(255,107,107,0.35)"; }}>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Zap size={20} className="text-white" />
        </div>
        <div className="text-left">
          <div className="text-[15px] font-extrabold text-white">Ratuj mnie!</div>
          <div className="text-[12px] text-white/70">Dziecko się nudzi? Marudzi? Potrzebujesz zabawy TERAZ?</div>
        </div>
        <div className="ml-auto text-white/60 text-[11px] font-bold">TAP →</div>
      </button>
    );
  }

  return (
    <div className={`mx-4 mt-3 rounded-2xl border-2 border-[#FF6B6B] shadow-lg overflow-hidden ${dm ? "bg-[#1a1a2e]" : "bg-white"}`}>
      <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white">
          <Zap size={18} /><span className="font-extrabold text-[15px]">Ratuj mnie!</span>
        </div>
        <button onClick={() => { setOpen(false); reset(); }} className="text-white/80 text-[13px] font-bold bg-transparent border-none cursor-pointer">Zamknij</button>
      </div>

      {result ? (
        <div className="p-4 space-y-3">
          <div className="text-center">
            <div className={`text-[13px] font-bold uppercase mb-1 ${dm ? "text-gray-500" : "text-gray-400"}`}>Proponuję:</div>
            <div className={`text-[18px] font-extrabold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>{result.name}</div>
            <div className={`text-[13px] mt-1 ${dm ? "text-gray-400" : "text-gray-500"}`}>{result.description}</div>
            {result.prep[0] !== "zero prep" && (
              <div className="mt-2 text-[12px] text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5 inline-block">Potrzebujesz: {result.prep.join(", ")}</div>
            )}
            {result.prep[0] === "zero prep" && (
              <div className="mt-2 text-[12px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 inline-block">Zero przygotowań!</div>
            )}
          </div>
          <div className={`rounded-xl p-3 ${dm ? "bg-amber-900/20" : "bg-[#FEF9C3]"}`}>
            <div className={`text-[12px] font-bold mb-1 ${dm ? "text-amber-400" : "text-amber-700"}`}>Powiedz dziecku:</div>
            <div className={`text-[14px] italic ${dm ? "text-amber-300" : "text-amber-900"}`}>&ldquo;{result.tellChild}&rdquo;</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => { onSelectActivity(result); setOpen(false); reset(); }}
              className="flex-1 py-2.5 rounded-xl bg-[#FF6B6B] text-white font-bold text-[14px] border-none cursor-pointer">Otwórz zabawę</button>
            <button onClick={findActivity}
              className={`py-2.5 px-4 rounded-xl font-bold text-[14px] border-none cursor-pointer flex items-center gap-1.5 ${dm ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
              <Shuffle size={14} /> Inna
            </button>
          </div>
          <button onClick={reset} className={`w-full text-[12px] font-semibold bg-transparent border-none cursor-pointer ${dm ? "text-gray-500" : "text-gray-400"}`}>Zmień parametry</button>
        </div>
      ) : (
        <div className="p-4 space-y-4">
          <div>
            <div className={`text-[12px] font-bold uppercase mb-1.5 flex items-center gap-1 ${dm ? "text-gray-500" : "text-gray-400"}`}><Baby size={12} /> Wiek dziecka</div>
            <div className="flex gap-1.5 flex-wrap">
              {ALL_AGES.map((yr) => (
                <button key={yr} onClick={() => setAge(age === yr ? null : yr)}
                  className="w-10 h-10 rounded-full text-[14px] font-extrabold border-2 cursor-pointer transition-all duration-150"
                  style={{ background: age === yr ? AGE_COLORS[yr] : dm ? "#1a1a2e" : "white", borderColor: age === yr ? AGE_COLORS[yr] : dm ? "#333" : "#E0E0DA", color: age === yr ? "white" : dm ? "#aaa" : "#555", transform: age === yr ? "scale(1.1)" : "scale(1)" }}>
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className={`text-[12px] font-bold uppercase mb-1.5 flex items-center gap-1 ${dm ? "text-gray-500" : "text-gray-400"}`}><MapPin size={12} /> Gdzie jesteś?</div>
            <div className="flex gap-1.5 flex-wrap">
              {ALL_PLACES.map((p) => (
                <button key={p} onClick={() => setPlace(place === p ? null : p)}
                  className="rounded-full text-[13px] font-medium cursor-pointer transition-all duration-150 px-3 py-1.5 border-[1.5px] flex items-center gap-1.5"
                  style={{ borderColor: place === p ? "#FF6B6B" : dm ? "#333" : "#E0E0DA", background: place === p ? "#FF6B6B" : dm ? "#1a1a2e" : "white", color: place === p ? "white" : dm ? "#aaa" : "#555", fontWeight: place === p ? 700 : 500 }}>
                  <PlaceIcon place={p} size={14} color={place === p ? "white" : dm ? "#666" : "#888"} /> {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className={`text-[12px] font-bold uppercase mb-1.5 flex items-center gap-1 ${dm ? "text-gray-500" : "text-gray-400"}`}><Zap size={12} /> Co się dzieje?</div>
            <div className="flex gap-1.5 flex-wrap">
              {SITUATIONS.map((s) => (
                <button key={s.id} onClick={() => setSituation(situation === s.id ? null : s.id)}
                  className="rounded-xl text-[13px] cursor-pointer transition-all duration-150 px-3 py-2 border-[1.5px] text-left"
                  style={{ borderColor: situation === s.id ? "#FF8E53" : dm ? "#333" : "#E0E0DA", background: situation === s.id ? "#FF8E53" : dm ? "#1a1a2e" : "white", color: situation === s.id ? "white" : dm ? "#aaa" : "#555", fontWeight: situation === s.id ? 700 : 500 }}>
                  <div className="flex items-center gap-1.5">
                    <span>{s.icon}</span>
                    <span className="font-bold">{s.label}</span>
                  </div>
                  <div className={`text-[10px] mt-0.5 ${situation === s.id ? "text-white/70" : dm ? "text-gray-600" : "text-gray-400"}`}>{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className={`text-[12px] font-bold uppercase mb-1.5 flex items-center gap-1 ${dm ? "text-gray-500" : "text-gray-400"}`}><Battery size={12} /> Poziom energii dziecka</div>
            <div className="flex gap-1.5 flex-wrap">
              {ENERGY_LEVELS.map((e) => (
                <button key={e.id} onClick={() => setEnergy(energy === e.id ? null : e.id)}
                  className="rounded-xl text-[13px] cursor-pointer transition-all duration-150 px-3 py-2 border-[1.5px] text-left"
                  style={{ borderColor: energy === e.id ? "#A855F7" : dm ? "#333" : "#E0E0DA", background: energy === e.id ? "#A855F7" : dm ? "#1a1a2e" : "white", color: energy === e.id ? "white" : dm ? "#aaa" : "#555", fontWeight: energy === e.id ? 700 : 500 }}>
                  <div className="flex items-center gap-1.5">
                    <span>{e.icon}</span>
                    <span className="font-bold">{e.label}</span>
                  </div>
                  <div className={`text-[10px] mt-0.5 ${energy === e.id ? "text-white/70" : dm ? "text-gray-600" : "text-gray-400"}`}>{e.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <button onClick={findActivity}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-extrabold text-[15px] border-none cursor-pointer shadow-md transition-transform active:scale-[0.98]">
            Znajdź zabawę!
          </button>
        </div>
      )}
    </div>
  );
}
