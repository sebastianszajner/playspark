import { useState } from "react";
import { ChevronDown, Baby, Sprout, BookOpen, FlaskConical, AlertCircle, Sparkles, ArrowRight } from "lucide-react";
import { DEVELOPMENT_MILESTONES, DOMAIN_META, AGE_RANGE_META } from "../data/developmentData";
import { ACTIVITIES } from "../data/activities";

interface DevelopmentHubProps {
  darkMode: boolean;
  onOpenActivity?: (id: number) => void;
}

type DomainKey = "motor" | "cognitive" | "social" | "language" | "sensory";

function DomainCard({ domainKey, items, darkMode, defaultOpen }: {
  domainKey: DomainKey;
  items: string[];
  darkMode: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const dm = darkMode;
  const meta = DOMAIN_META[domainKey];

  return (
    <div className={`rounded-2xl overflow-hidden border transition-all duration-200`}
      style={{ borderColor: dm ? `${meta.darkColor}30` : `${meta.color}30`, background: dm ? meta.darkBg : meta.bg }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 cursor-pointer border-none bg-transparent text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-[18px] leading-none">{meta.emoji}</span>
          <span className="text-[12px] font-black uppercase tracking-wider"
            style={{ color: dm ? meta.darkColor : meta.color }}>
            {meta.label}
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
            style={{ background: `${meta.color}20`, color: dm ? meta.darkColor : meta.color }}>
            {items.length}
          </span>
        </div>
        <ChevronDown size={14} className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: dm ? meta.darkColor : meta.color }} />
      </button>

      {open && (
        <div className={`px-3.5 pb-3 border-t`} style={{ borderColor: dm ? `${meta.darkColor}20` : `${meta.color}20` }}>
          <ul className="space-y-1.5 pt-2.5">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: dm ? meta.darkColor : meta.color }} />
                <span className={`text-[12px] leading-snug ${dm ? "text-gray-300" : "text-gray-700"}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PlaySparkActivities({ ages, tip, darkMode, onOpenActivity }: {
  ages: number[];
  tip: string;
  darkMode: boolean;
  onOpenActivity?: (id: number) => void;
}) {
  const dm = darkMode;
  const [open, setOpen] = useState(false);

  const matchingActivities = ACTIVITIES.filter(a =>
    ages.some(age => a.age.includes(age))
  ).slice(0, 6);

  if (matchingActivities.length === 0) return null;

  return (
    <div className={`rounded-2xl overflow-hidden border transition-all duration-200 ${dm ? "border-emerald-900/40 bg-emerald-950/30" : "border-emerald-200 bg-emerald-50"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 cursor-pointer border-none bg-transparent text-left"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
            <Sparkles size={12} className="text-white" />
          </div>
          <span className={`text-[12px] font-black uppercase tracking-wider ${dm ? "text-emerald-400" : "text-emerald-700"}`}>
            Zabawy w PlaySpark
          </span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${dm ? "bg-emerald-900/40 text-emerald-400" : "bg-emerald-100 text-emerald-700"}`}>
            {matchingActivities.length}
          </span>
        </div>
        <ChevronDown size={14} className={`transition-transform duration-200 ${dm ? "text-emerald-600" : "text-emerald-500"}`}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>

      {open && (
        <div className={`px-3.5 pb-3.5 border-t ${dm ? "border-emerald-900/30" : "border-emerald-200"}`}>
          <p className={`text-[11px] italic mt-2.5 mb-2 ${dm ? "text-emerald-400/70" : "text-emerald-700/70"}`}>{tip}</p>
          <div className="space-y-1.5">
            {matchingActivities.map(a => (
              <button
                key={a.id}
                onClick={() => onOpenActivity?.(a.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left cursor-pointer border-none transition-all ${dm ? "bg-emerald-900/20 hover:bg-emerald-900/40" : "bg-white hover:bg-emerald-50"}`}
                style={{ border: `1px solid ${dm ? "#065f4640" : "#A7F3D0"}` }}
              >
                <div>
                  <div className={`text-[12px] font-bold ${dm ? "text-white" : "text-gray-800"}`}>{a.name}</div>
                  <div className={`text-[10px] ${dm ? "text-emerald-500" : "text-emerald-600"}`}>
                    {a.duration} · {a.type}
                  </div>
                </div>
                <ArrowRight size={12} className={dm ? "text-emerald-600" : "text-emerald-400"} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function DevelopmentHub({ darkMode, onOpenActivity }: DevelopmentHubProps) {
  const dm = darkMode;
  const [selectedId, setSelectedId] = useState<string>("1m");

  const milestone = DEVELOPMENT_MILESTONES.find(m => m.id === selectedId)!;
  const rangeGroups = [
    { label: "Niemowlę", ids: ["1m", "2m", "3m", "6m", "9m", "12m"] },
    { label: "Maluch", ids: ["18m", "24m"] },
    { label: "Przedszkolak", ids: ["3y", "4y", "5y"] },
    { label: "Szkolny", ids: ["6y", "7y"] },
  ];

  const rangeMeta = AGE_RANGE_META[milestone.ageRange];

  return (
    <div className={`min-h-screen pb-24 ${dm ? "bg-[#0f0f1a]" : "bg-[#FAF9F6]"}`}>

      {/* Hero header */}
      <div className={`px-4 pt-4 pb-3`}>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}>
            <Baby size={16} className="text-white" />
          </div>
          <div>
            <h1 className={`text-[16px] font-black leading-tight ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
              Etapy Rozwoju
            </h1>
            <p className={`text-[11px] ${dm ? "text-gray-500" : "text-gray-400"}`}>
              Od 1 miesiąca do 7 lat — evidence-based
            </p>
          </div>
        </div>
      </div>

      {/* Age group labels */}
      <div className="px-4 mb-2">
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1">
          {rangeGroups.map(group => {
            const isActive = group.ids.includes(selectedId);
            return (
              <button
                key={group.label}
                onClick={() => setSelectedId(group.ids[0])}
                className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-bold border-none cursor-pointer transition-all`}
                style={{
                  background: isActive ? milestone.colorHex : dm ? "#1a1a2e" : "#F0EFE9",
                  color: isActive ? "white" : dm ? "#666" : "#888",
                }}
              >
                {group.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Age timeline chips */}
      <div className="px-4 mb-4">
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1">
          {DEVELOPMENT_MILESTONES.map(m => {
            const isSelected = m.id === selectedId;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedId(m.id)}
                className={`shrink-0 flex flex-col items-center justify-center px-3 py-2 rounded-2xl border-none cursor-pointer transition-all duration-150`}
                style={{
                  background: isSelected ? m.colorHex : dm ? "#1a1a2e" : "#F5F4F0",
                  minWidth: 58,
                  transform: isSelected ? "scale(1.05)" : "scale(1)",
                  boxShadow: isSelected ? `0 4px 16px ${m.colorHex}60` : "none",
                }}
              >
                <span className={`text-[12px] font-black ${isSelected ? "text-white" : dm ? "text-gray-400" : "text-gray-500"}`}>
                  {m.label.split(" ")[0]}
                </span>
                <span className={`text-[9px] font-medium ${isSelected ? "text-white/70" : dm ? "text-gray-600" : "text-gray-400"}`}>
                  {m.label.split(" ")[1] || ""}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Milestone header */}
      <div className="px-4 mb-4">
        <div className="rounded-3xl p-4" style={{ background: `linear-gradient(135deg, ${milestone.colorHex}CC, ${milestone.colorHex}88)` }}>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  {rangeMeta.label} · {rangeMeta.sublabel}
                </span>
              </div>
              <h2 className="text-[22px] font-black text-white leading-tight">{milestone.label}</h2>
              <p className="text-[13px] text-white/80 mt-0.5 font-medium">{milestone.tagline}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(255,255,255,0.2)" }}>
              <Sprout size={22} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Domain sections */}
      <div className="px-4 space-y-2.5 mb-4">
        <DomainCard domainKey="motor" items={milestone.domains.motor} darkMode={dm} defaultOpen={true} />
        <DomainCard domainKey="cognitive" items={milestone.domains.cognitive} darkMode={dm} />
        <DomainCard domainKey="social" items={milestone.domains.social} darkMode={dm} />
        <DomainCard domainKey="language" items={milestone.domains.language} darkMode={dm} />
        <DomainCard domainKey="sensory" items={milestone.domains.sensory} darkMode={dm} />
      </div>

      {/* Parent section */}
      <div className="px-4 mb-3">
        <div className={`rounded-2xl border overflow-hidden ${dm ? "border-amber-800/40 bg-amber-900/10" : "border-amber-200 bg-amber-50"}`}>
          <div className="flex items-center gap-2 px-3.5 pt-3 pb-1">
            <BookOpen size={14} className={dm ? "text-amber-400" : "text-amber-700"} />
            <span className={`text-[12px] font-black uppercase tracking-wider ${dm ? "text-amber-400" : "text-amber-700"}`}>
              Co robić — aktywności dla rodzica
            </span>
          </div>
          <ul className="px-3.5 pb-3 space-y-2 mt-1">
            {milestone.parent.activities.map((act, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}>
                  {i + 1}
                </span>
                <p className={`text-[12px] leading-snug ${dm ? "text-amber-200" : "text-amber-900"}`}>{act}</p>
              </li>
            ))}
          </ul>

          {/* Coaching tip */}
          <div className={`mx-3.5 mb-3 rounded-xl p-3 ${dm ? "bg-amber-900/20" : "bg-white/70"}`}
            style={{ border: `1px solid ${dm ? "#78350f40" : "#FDE68A"}` }}>
            <p className={`text-[12px] leading-snug italic font-medium ${dm ? "text-amber-300" : "text-amber-800"}`}>
              💡 {milestone.parent.coachingTip}
            </p>
          </div>
        </div>
      </div>

      {/* Watch for */}
      <div className="px-4 mb-3">
        <div className={`rounded-2xl border p-3 flex items-start gap-2.5 ${dm ? "border-red-900/30 bg-red-950/20" : "border-red-100 bg-red-50"}`}>
          <AlertCircle size={14} className={`mt-0.5 shrink-0 ${dm ? "text-red-400" : "text-red-500"}`} />
          <div>
            <span className={`text-[10px] font-black uppercase tracking-wider ${dm ? "text-red-400" : "text-red-600"}`}>
              Kiedy porozmawiaj z pediatrą
            </span>
            <p className={`text-[12px] leading-snug mt-0.5 ${dm ? "text-red-300" : "text-red-700"}`}>
              {milestone.parent.watchFor}
            </p>
          </div>
        </div>
      </div>

      {/* PlaySpark activities */}
      {milestone.playSpark && (
        <div className="px-4 mb-3">
          <PlaySparkActivities
            ages={milestone.playSpark.ages}
            tip={milestone.playSpark.tip}
            darkMode={dm}
            onOpenActivity={onOpenActivity}
          />
        </div>
      )}

      {/* Evidence */}
      <div className="px-4 mb-4">
        <div className={`rounded-2xl border p-3 flex items-start gap-2.5 ${dm ? "border-gray-700/40 bg-gray-800/30" : "border-gray-200 bg-gray-50"}`}>
          <FlaskConical size={13} className={`mt-0.5 shrink-0 ${dm ? "text-gray-500" : "text-gray-400"}`} />
          <div>
            <span className={`text-[10px] font-black uppercase tracking-wider ${dm ? "text-gray-500" : "text-gray-400"}`}>
              Źródła naukowe
            </span>
            <p className={`text-[11px] leading-snug mt-0.5 italic ${dm ? "text-gray-400" : "text-gray-500"}`}>
              {milestone.evidenceSource}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
