import { useState } from "react";
import { GraduationCap, ChevronDown, Brain, MessageCircle, User, FlaskConical } from "lucide-react";
import { getParentCoach } from "../data/parentCoach";
import type { ActivityType } from "../data/types";

interface ParentCoachProps {
  activityType: ActivityType;
  darkMode: boolean;
}

export function ParentCoach({ activityType, darkMode }: ParentCoachProps) {
  const [open, setOpen] = useState(false);
  const dm = darkMode;
  const data = getParentCoach(activityType);

  return (
    <div className={`rounded-xl overflow-hidden border transition-all duration-200 ${dm ? "border-amber-800/40 bg-amber-900/10" : "border-amber-200 bg-amber-50"}`}>
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 cursor-pointer border-none bg-transparent text-left"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}>
            <GraduationCap size={13} className="text-white" />
          </div>
          <span className={`text-[13px] font-extrabold uppercase tracking-wide ${dm ? "text-amber-400" : "text-amber-800"}`}>
            Strefa Rodzica
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${dm ? "bg-amber-900/40 text-amber-500" : "bg-amber-100 text-amber-700"}`}>
            evidence-based
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""} ${dm ? "text-amber-600" : "text-amber-500"}`}
        />
      </button>

      {/* Collapsible content */}
      {open && (
        <div className={`px-3.5 pb-3.5 space-y-3 border-t ${dm ? "border-amber-800/30" : "border-amber-200"}`}>

          {/* Brain network */}
          <div className="pt-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Brain size={13} className={dm ? "text-amber-500" : "text-amber-700"} />
              <span className={`text-[11px] font-black uppercase tracking-wider ${dm ? "text-amber-500" : "text-amber-700"}`}>
                Co ćwiczy w mózgu
              </span>
            </div>
            <div className={`text-[13px] font-bold mb-0.5 ${dm ? "text-amber-300" : "text-amber-900"}`}>
              {data.brainNetwork}
            </div>
            <p className={`text-[12px] leading-snug ${dm ? "text-amber-400/80" : "text-amber-800/80"}`}>
              {data.brainNetworkDetail}
            </p>
          </div>

          {/* Coaching questions */}
          <div className={`rounded-xl p-3 ${dm ? "bg-amber-900/20" : "bg-white/70"}`} style={{ border: `1px solid ${dm ? "#78350f40" : "#FDE68A"}` }}>
            <div className="flex items-center gap-1.5 mb-2">
              <MessageCircle size={13} className={dm ? "text-amber-500" : "text-amber-700"} />
              <span className={`text-[11px] font-black uppercase tracking-wider ${dm ? "text-amber-500" : "text-amber-700"}`}>
                3 pytania, które zadaj
              </span>
            </div>
            <ol className="space-y-1.5">
              {data.coachingQuestions.map((q, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}>
                    {i + 1}
                  </span>
                  <p className={`text-[12px] leading-snug italic ${dm ? "text-amber-200" : "text-amber-900"}`}>
                    {q}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Parent learning */}
          <div className={`rounded-xl p-3 ${dm ? "bg-blue-900/20" : "bg-blue-50"}`} style={{ border: `1px solid ${dm ? "#1e3a5f" : "#BFDBFE"}` }}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <User size={13} className={dm ? "text-blue-400" : "text-blue-700"} />
              <span className={`text-[11px] font-black uppercase tracking-wider ${dm ? "text-blue-400" : "text-blue-700"}`}>
                Czego uczysz się Ty
              </span>
            </div>
            <p className={`text-[12px] leading-snug ${dm ? "text-blue-300" : "text-blue-900"}`}>
              {data.parentLearning}
            </p>
          </div>

          {/* Evidence */}
          <div className={`rounded-xl p-3 ${dm ? "bg-gray-800/60" : "bg-gray-50"}`} style={{ border: `1px solid ${dm ? "#2a2a40" : "#E8E8E0"}` }}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <FlaskConical size={13} className={dm ? "text-gray-400" : "text-gray-500"} />
              <span className={`text-[11px] font-black uppercase tracking-wider ${dm ? "text-gray-500" : "text-gray-400"}`}>
                Dowód naukowy
              </span>
            </div>
            <p className={`text-[12px] leading-snug italic ${dm ? "text-gray-300" : "text-gray-700"}`}>
              {data.evidence}
            </p>
            <p className={`text-[10px] mt-1 ${dm ? "text-gray-600" : "text-gray-400"}`}>
              {data.evidenceSource}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
