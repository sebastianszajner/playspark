import { useState, useMemo } from "react";
import { X, Star, Trophy, BarChart2, Calendar, Zap, GraduationCap } from "lucide-react";
import { TYPE_META, type ActivityType } from "../data/types";
import { ACTIVITIES } from "../data/activities";
import { PARENT_PROFILES, WEEKLY_INSIGHTS } from "../data/parentCoach";

export interface StatsData {
  completed: number[];
  streak: number;
  xp: number;
  history: string[]; // "YYYY-MM-DD" dates of completions
  activityTypes: string[]; // type per completed activity id
}

interface StatsModalProps {
  data: StatsData;
  onClose: () => void;
  darkMode: boolean;
  totalActivities: number;
}

const ACHIEVEMENTS = [
  { id: "first",   emoji: "🌟", label: "Pierwsza zabawa!",       count: 1,  color: "#F59E0B" },
  { id: "five",    emoji: "⭐", label: "5 zabaw — dobra robota!", count: 5,  color: "#F59E0B" },
  { id: "ten",     emoji: "🏆", label: "Złota Dziesiątka!",       count: 10, color: "#F59E0B" },
  { id: "twenty",  emoji: "🔥", label: "20 zabaw — PRO rodzic!",  count: 20, color: "#EF4444" },
  { id: "fifty",   emoji: "👑", label: "50 zabaw — Legenda!",     count: 50, color: "#A855F7" },
  { id: "streak3", emoji: "💫", label: "3 dni z rzędu!",          count: 0,  color: "#3B82F6", streakReq: 3 },
  { id: "streak7", emoji: "🌈", label: "Tydzień z rzędu!",        count: 0,  color: "#22C55E", streakReq: 7 },
];

const XP_PER_ACTIVITY = 10;
const LEVELS = [
  { min: 0,   label: "Początkujący", color: "#888" },
  { min: 50,  label: "Aktywny rodzic", color: "#3B82F6" },
  { min: 150, label: "Zaangażowany", color: "#22C55E" },
  { min: 300, label: "PRO rodzic", color: "#F59E0B" },
  { min: 500, label: "Ekspert zabawy", color: "#EF4444" },
  { min: 800, label: "Legenda", color: "#A855F7" },
];

function getLevel(xp: number) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].min) return { ...LEVELS[i], nextMin: LEVELS[i + 1]?.min ?? null, index: i };
  }
  return { ...LEVELS[0], nextMin: LEVELS[1].min, index: 0 };
}

type Tab = "xp" | "calendar" | "chart" | "weekly" | "growth";

export function StatsModal({ data, onClose, darkMode, totalActivities }: StatsModalProps) {
  const [tab, setTab] = useState<Tab>("xp");
  const dm = darkMode;
  const level = getLevel(data.xp);

  const tabs: { id: Tab; icon: React.ReactNode; label: string }[] = [
    { id: "xp", icon: <Zap size={13} />, label: "XP" },
    { id: "calendar", icon: <Calendar size={13} />, label: "Kalendarz" },
    { id: "chart", icon: <BarChart2 size={13} />, label: "Typy" },
    { id: "weekly", icon: <Trophy size={13} />, label: "Raport" },
    { id: "growth", icon: <GraduationCap size={13} />, label: "Rozwój" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl ${dm ? "bg-[#0f0f1a]" : "bg-white"}`}
        style={{ maxHeight: "90vh", overflowY: "auto" }}>
        {/* Header */}
        <div className="sticky top-0 z-10 px-5 pt-5 pb-3"
          style={{ background: dm ? "linear-gradient(180deg, #0f0f1a 80%, transparent)" : "linear-gradient(180deg, white 80%, transparent)" }}>
          <div className="flex justify-between items-center mb-3">
            <div className={`text-[17px] font-extrabold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
              Twoje statystyki
            </div>
            <button onClick={onClose} className="bg-transparent border-none cursor-pointer p-1.5 rounded-full"
              style={{ background: dm ? "#1a1a2e" : "#f5f5f0" }}>
              <X size={16} className={dm ? "text-gray-400" : "text-gray-500"} />
            </button>
          </div>

          {/* Tabs */}
          <div className={`flex gap-1 p-1 rounded-xl ${dm ? "bg-[#1a1a2e]" : "bg-gray-100"}`}>
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-[12px] font-bold border-none cursor-pointer transition-all"
                style={{
                  background: tab === t.id ? (dm ? "#2a2a40" : "white") : "transparent",
                  color: tab === t.id ? "#FF6B6B" : dm ? "#666" : "#999",
                  boxShadow: tab === t.id ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                }}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 pb-8">
          {tab === "xp" && <XPTab data={data} dm={dm} level={level} totalActivities={totalActivities} />}
          {tab === "calendar" && <CalendarTab history={data.history} dm={dm} />}
          {tab === "chart" && <ChartTab completed={data.completed} activityTypes={data.activityTypes} dm={dm} />}
          {tab === "weekly" && <WeeklyTab data={data} dm={dm} />}
          {tab === "growth" && <GrowthTab completed={data.completed} dm={dm} />}
        </div>
      </div>
    </div>
  );
}

function XPTab({ data, dm, level, totalActivities }: { data: StatsData; dm: boolean; level: ReturnType<typeof getLevel>; totalActivities: number }) {
  const xpInLevel = data.xp - level.min;
  const xpToNext = level.nextMin ? level.nextMin - level.min : 1;
  const progress = level.nextMin ? Math.min((xpInLevel / xpToNext) * 100, 100) : 100;

  return (
    <div className="space-y-5">
      {/* XP Card */}
      <div className="rounded-2xl p-4 text-center"
        style={{ background: `linear-gradient(135deg, ${level.color}20, ${level.color}08)`, border: `1.5px solid ${level.color}30` }}>
        <div className="text-[40px] font-black tabular-nums" style={{ color: level.color }}>{data.xp}</div>
        <div className="text-[12px] font-bold uppercase tracking-wider mt-0.5" style={{ color: level.color }}>XP</div>
        <div className="text-[15px] font-extrabold mt-2" style={{ color: level.color }}>{level.label}</div>
        {level.nextMin && (
          <>
            <div className={`text-[11px] mt-1 ${dm ? "text-gray-500" : "text-gray-400"}`}>
              {level.nextMin - data.xp} XP do następnego poziomu
            </div>
            <div className={`mt-3 h-2.5 rounded-full overflow-hidden ${dm ? "bg-gray-800" : "bg-gray-100"}`}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${level.color}, ${level.color}aa)` }} />
            </div>
          </>
        )}
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { value: data.completed.length, label: "Zabaw", icon: "🎯" },
          { value: data.streak, label: "Dni z rzędu", icon: "🔥" },
          { value: Math.round((data.completed.length / totalActivities) * 100) + "%", label: "Ukończono", icon: "✅" },
        ].map((s) => (
          <div key={s.label} className={`rounded-xl p-3 text-center ${dm ? "bg-[#1a1a2e]" : "bg-gray-50"}`}>
            <div className="text-lg">{s.icon}</div>
            <div className={`text-[18px] font-extrabold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>{s.value}</div>
            <div className={`text-[10px] font-bold uppercase ${dm ? "text-gray-500" : "text-gray-400"}`}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div>
        <div className={`text-[12px] font-bold uppercase tracking-wider mb-2 ${dm ? "text-gray-500" : "text-gray-400"}`}>
          Odznaki
        </div>
        <div className="grid grid-cols-4 gap-2">
          {ACHIEVEMENTS.map((ach) => {
            const earned = ach.streakReq
              ? data.streak >= (ach.streakReq ?? 0)
              : data.completed.length >= ach.count;
            return (
              <div key={ach.id} className={`rounded-xl p-2 text-center transition-all ${earned ? "" : "opacity-30"}`}
                style={{ background: earned ? `${ach.color}18` : dm ? "#1a1a2e" : "#f5f5f0", border: earned ? `1.5px solid ${ach.color}40` : "1.5px solid transparent" }}>
                <div className="text-[22px]">{ach.emoji}</div>
                <div className={`text-[9px] font-bold mt-0.5 leading-tight ${dm ? "text-gray-400" : "text-gray-500"}`}
                  style={{ color: earned ? ach.color : undefined }}>
                  {ach.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CalendarTab({ history, dm }: { history: string[]; dm: boolean }) {
  const historySet = useMemo(() => new Set(history), [history]);

  // Build last 8 weeks grid
  const today = new Date();
  const days: Date[] = [];
  for (let i = 55; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d);
  }

  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  const dayNames = ["N", "P", "W", "Ś", "C", "P", "S"];

  // Group into weeks
  const startDow = days[0].getDay();
  const paddedDays: (Date | null)[] = Array(startDow).fill(null).concat(days);

  return (
    <div className="space-y-4">
      <div className={`text-[13px] font-semibold ${dm ? "text-gray-400" : "text-gray-500"}`}>
        Aktywność z ostatnich 8 tygodni
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {dayNames.map((d) => (
          <div key={d} className={`text-[10px] font-bold text-center ${dm ? "text-gray-600" : "text-gray-400"}`}>{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {paddedDays.map((day, i) => {
          if (!day) return <div key={i} />;
          const dateStr = fmt(day);
          const isToday = dateStr === fmt(today);
          const count = history.filter(h => h === dateStr).length;
          const active = historySet.has(dateStr);
          return (
            <div key={i} title={dateStr}
              className="aspect-square rounded-[5px] flex items-center justify-center"
              style={{
                background: active
                  ? count >= 3 ? "#FF6B6B" : count >= 2 ? "#FF6B6B99" : "#FF6B6B55"
                  : dm ? "#1a1a2e" : "#f0f0ec",
                border: isToday ? "2px solid #FF6B6B" : "2px solid transparent",
              }}
            >
              {isToday && !active && (
                <div className="w-1 h-1 rounded-full" style={{ background: "#FF6B6B" }} />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <div className={`text-[11px] font-semibold ${dm ? "text-gray-600" : "text-gray-400"}`}>Intensywność:</div>
        {["#FF6B6B33", "#FF6B6B66", "#FF6B6B99", "#FF6B6B"].map((c, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-sm" style={{ background: c }} />
            <span className={`text-[10px] ${dm ? "text-gray-600" : "text-gray-400"}`}>{[1, 2, 3, "4+"][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChartTab({ completed, activityTypes, dm }: { completed: number[]; activityTypes: string[]; dm: boolean }) {
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    activityTypes.forEach(t => { counts[t] = (counts[t] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [activityTypes]);

  const maxCount = typeCounts[0]?.[1] ?? 1;

  if (typeCounts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-3 opacity-30">📊</div>
        <div className={`text-[14px] font-bold ${dm ? "text-gray-500" : "text-gray-400"}`}>
          Ukończ zabawy żeby zobaczyć wykres
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className={`text-[13px] font-semibold ${dm ? "text-gray-400" : "text-gray-500"}`}>
        {completed.length} zabaw ukończono łącznie
      </div>
      {typeCounts.map(([type, count]) => {
        const meta = TYPE_META[type as ActivityType];
        const pct = (count / maxCount) * 100;
        return (
          <div key={type} className="flex items-center gap-3">
            <div className={`text-[12px] font-bold w-28 shrink-0 truncate ${dm ? "text-gray-400" : "text-gray-600"}`}>{type}</div>
            <div className={`flex-1 h-6 rounded-full overflow-hidden ${dm ? "bg-gray-800" : "bg-gray-100"}`}>
              <div className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-700"
                style={{ width: `${pct}%`, background: meta?.accent ?? "#888", minWidth: count > 0 ? 24 : 0 }}>
                <span className="text-[10px] font-extrabold text-white">{count}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function GrowthTab({ completed, dm }: { completed: number[]; dm: boolean }) {
  const completedActivities = useMemo(
    () => ACTIVITIES.filter(a => completed.includes(a.id)),
    [completed]
  );

  // Top competencies
  const compCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    completedActivities.forEach(a => a.competencies.forEach(c => { counts[c] = (counts[c] || 0) + 1; }));
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [completedActivities]);

  // Parent profile — dominant type
  const typeCounts: Record<string, number> = {};
  completedActivities.forEach(a => { typeCounts[a.type] = (typeCounts[a.type] || 0) + 1; });
  const dominantType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] as ActivityType | undefined;
  const profile = dominantType ? PARENT_PROFILES[dominantType] : null;

  // Weekly insight — rotate by week number
  const weekNum = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const insight = WEEKLY_INSIGHTS[weekNum % WEEKLY_INSIGHTS.length];
  const maxComp = compCounts[0]?.[1] ?? 1;

  if (completed.length === 0) {
    return (
      <div className="text-center py-12 space-y-3">
        <div className="text-4xl opacity-30">🎓</div>
        <div className={`text-[14px] font-bold ${dm ? "text-gray-500" : "text-gray-400"}`}>
          Ukończ pierwszą zabawę, żeby zobaczyć swój profil rodzicielski
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Parent profile */}
      {profile && (
        <div className="rounded-2xl p-4 text-center"
          style={{ background: "linear-gradient(135deg, #F59E0B18, #D9770618)", border: "1.5px solid #F59E0B30" }}>
          <div className="text-[36px] mb-1">{profile.emoji}</div>
          <div className={`text-[17px] font-extrabold mb-1 ${dm ? "text-white" : "text-[#1a1a2e]"}`}>{profile.label}</div>
          <div className={`text-[12px] ${dm ? "text-gray-400" : "text-gray-500"}`}>{profile.desc}</div>
        </div>
      )}

      {/* Top competencies */}
      {compCounts.length > 0 && (
        <div>
          <div className={`text-[12px] font-bold uppercase tracking-wider mb-3 ${dm ? "text-gray-500" : "text-gray-400"}`}>
            Kompetencje, które ćwiczysz najczęściej
          </div>
          <div className="space-y-2">
            {compCounts.map(([comp, count]) => (
              <div key={comp} className="flex items-center gap-3">
                <div className={`text-[12px] font-bold w-32 shrink-0 truncate ${dm ? "text-gray-300" : "text-gray-600"}`}>{comp}</div>
                <div className={`flex-1 h-5 rounded-full overflow-hidden ${dm ? "bg-gray-800" : "bg-gray-100"}`}>
                  <div className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-700"
                    style={{ width: `${(count / maxComp) * 100}%`, background: "linear-gradient(90deg, #F59E0B, #D97706)", minWidth: 24 }}>
                    <span className="text-[9px] font-extrabold text-white">{count}×</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weekly insight */}
      <div className={`rounded-2xl p-4 ${dm ? "bg-[#1a1a2e]" : "bg-gray-50"}`}
        style={{ border: `1.5px solid ${dm ? "#2a2a40" : "#E8E8E0"}` }}>
        <div className={`text-[11px] font-black uppercase tracking-wider mb-2 ${dm ? "text-gray-500" : "text-gray-400"}`}>
          🧪 Insight tygodniowy
        </div>
        <p className={`text-[13px] leading-snug ${dm ? "text-gray-200" : "text-gray-700"}`}>
          {insight.text}
        </p>
        <p className={`text-[10px] mt-2 ${dm ? "text-gray-600" : "text-gray-400"}`}>
          {insight.source}
        </p>
      </div>
    </div>
  );
}

function WeeklyTab({ data, dm }: { data: StatsData; dm: boolean }) {
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  weekStart.setHours(0, 0, 0, 0);

  const thisWeekHistory = data.history.filter(d => new Date(d) >= weekStart);
  const thisWeekCount = thisWeekHistory.length;

  const typeCounts: Record<string, number> = {};
  data.activityTypes.forEach(t => { typeCounts[t] = (typeCounts[t] || 0) + 1; });
  const favType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0];

  const xpThisWeek = thisWeekCount * XP_PER_ACTIVITY;

  return (
    <div className="space-y-4">
      <div className={`text-[13px] font-semibold ${dm ? "text-gray-400" : "text-gray-500"}`}>
        Raport tygodniowy
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: "🎯", value: thisWeekCount, label: "Zabaw ten tydzień" },
          { icon: "⚡", value: `+${xpThisWeek} XP`, label: "Zdobyte XP" },
          { icon: "🔥", value: `${data.streak} dni`, label: "Obecna seria" },
          { icon: "🏆", value: data.completed.length, label: "Łącznie ukończono" },
        ].map((item) => (
          <div key={item.label} className={`rounded-2xl p-4 ${dm ? "bg-[#1a1a2e]" : "bg-gray-50"}`}>
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className={`text-[20px] font-extrabold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>{item.value}</div>
            <div className={`text-[11px] font-semibold mt-0.5 ${dm ? "text-gray-500" : "text-gray-400"}`}>{item.label}</div>
          </div>
        ))}
      </div>

      {favType && (
        <div className="rounded-2xl p-4"
          style={{ background: `${TYPE_META[favType[0] as ActivityType]?.accent ?? "#FF6B6B"}15`, border: `1.5px solid ${TYPE_META[favType[0] as ActivityType]?.accent ?? "#FF6B6B"}30` }}>
          <div className={`text-[11px] font-bold uppercase mb-1 ${dm ? "text-gray-500" : "text-gray-400"}`}>Ulubiony typ zabawy</div>
          <div className="flex items-center gap-2">
            <Star size={16} fill="#F59E0B" stroke="#F59E0B" />
            <span className={`text-[15px] font-extrabold ${dm ? "text-white" : "text-[#1a1a2e]"}`}>{favType[0]}</span>
            <span className={`text-[12px] ${dm ? "text-gray-500" : "text-gray-400"}`}>({favType[1]}×)</span>
          </div>
        </div>
      )}

      {thisWeekCount === 0 && (
        <div className={`text-center py-6 text-[13px] ${dm ? "text-gray-600" : "text-gray-400"}`}>
          Zacznij tę zabawę! Ukończ pierwszą aktywność tego tygodnia 💪
        </div>
      )}
    </div>
  );
}
