import { useState, useMemo } from "react";
import { X, Shuffle, ArrowRight } from "lucide-react";
import { ACTIVITIES } from "../data/activities";
import { ALL_AGES, ALL_PLACES, ALL_TYPES, AGE_COLORS, TYPE_META, type Place, type ActivityType } from "../data/types";
import { TypeIcon, PlaceIcon } from "./TypeIcons";
import type { Activity } from "../data/types";

interface ActivityWizardProps {
  onSelectActivity: (a: Activity) => void;
  onClose: () => void;
  darkMode: boolean;
}

type Step = "age" | "place" | "type" | "result";

export function ActivityWizard({ onSelectActivity, onClose, darkMode }: ActivityWizardProps) {
  const [step, setStep] = useState<Step>("age");
  const [age, setAge] = useState<number | null>(null);
  const [place, setPlace] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [result, setResult] = useState<Activity | null>(null);
  const dm = darkMode;

  const filteredPool = useMemo(() => {
    return ACTIVITIES.filter((a) => {
      if (age && !a.age.includes(age)) return false;
      if (place && !a.place.includes(place as Place)) return false;
      if (type && a.type !== type) return false;
      return true;
    });
  }, [age, place, type]);

  const pickRandom = () => {
    const pool = filteredPool;
    if (pool.length === 0) return;
    setResult(pool[Math.floor(Math.random() * pool.length)]);
    setStep("result");
  };

  const tryAnother = () => {
    const pool = filteredPool.filter((a) => a.id !== result?.id);
    if (pool.length === 0) return;
    setResult(pool[Math.floor(Math.random() * pool.length)]);
  };

  const stepCount = ["age", "place", "type"].indexOf(step) + 1;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`w-full sm:max-w-sm rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl ${dm ? "bg-[#0f0f1a]" : "bg-white"}`}>
        {/* Header */}
        <div className="px-5 pt-5 pb-4">
          <div className="flex justify-between items-center mb-3">
            <div className={`text-[17px] font-extrabold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
              🎯 Znajdź idealną zabawę
            </div>
            <button onClick={onClose} className="bg-transparent border-none cursor-pointer p-1.5 rounded-full"
              style={{ background: dm ? "#1a1a2e" : "#f5f5f0" }}>
              <X size={16} className={dm ? "text-gray-400" : "text-gray-500"} />
            </button>
          </div>

          {step !== "result" && (
            <div className="flex gap-1.5">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 h-1.5 rounded-full transition-all duration-300"
                  style={{ background: s <= stepCount ? "#FF6B6B" : dm ? "#1a1a2e" : "#e8e8e0" }} />
              ))}
            </div>
          )}
        </div>

        <div className="px-5 pb-8 space-y-4">
          {/* STEP 1 — Age */}
          {step === "age" && (
            <>
              <div className={`text-[14px] font-bold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
                Ile lat ma dziecko?
              </div>
              <div className="flex gap-2 flex-wrap">
                {ALL_AGES.map((yr) => (
                  <button key={yr} onClick={() => setAge(age === yr ? null : yr)}
                    className="w-12 h-12 rounded-full text-[15px] font-extrabold border-2 cursor-pointer transition-all duration-150"
                    style={{
                      background: age === yr ? AGE_COLORS[yr] : dm ? "#1a1a2e" : "white",
                      borderColor: age === yr ? AGE_COLORS[yr] : dm ? "#333" : "#e0e0da",
                      color: age === yr ? "white" : dm ? "#aaa" : "#555",
                      transform: age === yr ? "scale(1.12)" : "scale(1)",
                    }}>
                    {yr}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep("place")}
                className="w-full py-3.5 rounded-2xl text-white font-extrabold text-[15px] border-none cursor-pointer flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }}>
                Dalej <ArrowRight size={16} />
              </button>
            </>
          )}

          {/* STEP 2 — Place */}
          {step === "place" && (
            <>
              <div className={`text-[14px] font-bold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
                Gdzie jesteście?
              </div>
              <div className="flex gap-2 flex-wrap">
                {ALL_PLACES.map((p) => (
                  <button key={p} onClick={() => setPlace(place === p ? null : p)}
                    className="rounded-full text-[13px] font-medium cursor-pointer transition-all duration-150 px-3.5 py-2 border-[1.5px] flex items-center gap-1.5"
                    style={{
                      borderColor: place === p ? "#FF6B6B" : dm ? "#333" : "#e0e0da",
                      background: place === p ? "#FF6B6B" : dm ? "#1a1a2e" : "white",
                      color: place === p ? "white" : dm ? "#aaa" : "#555",
                      fontWeight: place === p ? 700 : 500,
                    }}>
                    <PlaceIcon place={p} size={14} color={place === p ? "white" : dm ? "#666" : "#888"} />
                    {p}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setStep("age")}
                  className={`flex-1 py-3 rounded-2xl font-bold text-[14px] border-none cursor-pointer ${dm ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                  Wstecz
                </button>
                <button onClick={() => setStep("type")}
                  className="flex-[2] py-3 rounded-2xl text-white font-extrabold text-[15px] border-none cursor-pointer flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }}>
                  Dalej <ArrowRight size={16} />
                </button>
              </div>
            </>
          )}

          {/* STEP 3 — Type */}
          {step === "type" && (
            <>
              <div className={`text-[14px] font-bold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
                Jaki typ zabawy?
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {ALL_TYPES.map((t) => {
                  const meta = TYPE_META[t as ActivityType];
                  return (
                    <button key={t} onClick={() => setType(type === t ? null : t)}
                      className="rounded-xl text-[12px] font-bold cursor-pointer transition-all duration-150 px-3 py-2 border-[1.5px] flex items-center gap-1.5"
                      style={{
                        borderColor: type === t ? meta.accent : dm ? "#333" : "#e0e0da",
                        background: type === t ? meta.accent : dm ? "#1a1a2e" : "white",
                        color: type === t ? "white" : dm ? "#aaa" : "#555",
                      }}>
                      <TypeIcon type={t} size={14} color={type === t ? "white" : meta.accent} />
                      {t}
                    </button>
                  );
                })}
              </div>
              <div className={`text-[12px] ${dm ? "text-gray-600" : "text-gray-400"}`}>
                Dopasowań: <strong style={{ color: "#FF6B6B" }}>{filteredPool.length}</strong>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setStep("place")}
                  className={`flex-1 py-3 rounded-2xl font-bold text-[14px] border-none cursor-pointer ${dm ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                  Wstecz
                </button>
                <button onClick={pickRandom} disabled={filteredPool.length === 0}
                  className="flex-[2] py-3 rounded-2xl text-white font-extrabold text-[15px] border-none cursor-pointer flex items-center justify-center gap-2 disabled:opacity-40"
                  style={{ background: "linear-gradient(135deg, #FF6B6B, #A855F7)" }}>
                  <Shuffle size={16} /> Losuj!
                </button>
              </div>
            </>
          )}

          {/* RESULT */}
          {step === "result" && result && (
            <div className="space-y-3">
              <div className={`text-[12px] font-bold uppercase tracking-wider text-center ${dm ? "text-gray-500" : "text-gray-400"}`}>
                Proponuję:
              </div>
              <div className="rounded-2xl p-4"
                style={{
                  background: dm ? `${TYPE_META[result.type]?.accent}15` : TYPE_META[result.type]?.bg ?? "#f5f5f0",
                  border: `1.5px solid ${TYPE_META[result.type]?.accent}40`,
                }}>
                <div className={`text-[18px] font-extrabold text-center mb-1 ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
                  {result.name}
                </div>
                <div className={`text-[13px] text-center leading-snug ${dm ? "text-gray-400" : "text-gray-500"}`}>
                  {result.description}
                </div>
                {result.prep[0] === "zero prep" ? (
                  <div className="mt-2 text-center">
                    <span className="text-[11px] text-green-700 bg-green-50 rounded-lg px-2.5 py-1 font-bold">Zero przygotowań!</span>
                  </div>
                ) : (
                  <div className="mt-2 text-center">
                    <span className="text-[11px] text-amber-700 bg-amber-50 rounded-lg px-2.5 py-1 font-bold">
                      Potrzebujesz: {result.prep.join(", ")}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button onClick={() => { onSelectActivity(result); onClose(); }}
                  className="flex-[2] py-3 rounded-2xl text-white font-extrabold text-[15px] border-none cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }}>
                  Otwórz zabawę
                </button>
                <button onClick={tryAnother}
                  className={`flex-1 py-3 rounded-2xl font-bold text-[14px] border-none cursor-pointer flex items-center justify-center gap-1.5 ${dm ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
                  <Shuffle size={14} /> Inna
                </button>
              </div>
              <button onClick={() => { setResult(null); setStep("age"); }}
                className={`w-full text-[12px] font-semibold bg-transparent border-none cursor-pointer ${dm ? "text-gray-600" : "text-gray-400"}`}>
                Zacznij od nowa
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
