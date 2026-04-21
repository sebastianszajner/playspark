import { X, ChevronDown, ChevronUp, Package, Beaker } from "lucide-react";
import { useState, useMemo } from "react";
import {
  ALL_TYPES, ALL_PLACES, ALL_AGES, ALL_METHODS,
  FILTER_COMPETENCIES, FILTER_TOPICS, MOOD_FILTERS, MOOD_ICONS,
  TYPE_META, AGE_COLORS, METHOD_META,
  type ActivityType, type Activity, type Method,
} from "../data/types";
import { TypeIcon, PlaceIcon } from "./TypeIcons";

interface FilterBarProps {
  typeFilters: string[];
  placeFilters: string[];
  compFilters: string[];
  topicFilters: string[];
  ageFilters: string[];
  moodFilters: string[];
  methodFilters: string[];
  prepFilters: string[];
  onTypeChange: (v: string[]) => void;
  onPlaceChange: (v: string[]) => void;
  onCompChange: (v: string[]) => void;
  onTopicChange: (v: string[]) => void;
  onAgeChange: (v: string[]) => void;
  onMoodChange: (v: string[]) => void;
  onMethodChange: (v: string[]) => void;
  onPrepChange: (v: string[]) => void;
  darkMode: boolean;
  activities: Activity[];
}

function toggle(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
}

export function FilterBar(props: FilterBarProps) {
  const [collapsed, setCollapsed] = useState(true);

  const hasFilters =
    props.typeFilters.length > 0 || props.placeFilters.length > 0 ||
    props.compFilters.length > 0 || props.topicFilters.length > 0 ||
    props.ageFilters.length > 0 || props.moodFilters.length > 0 ||
    props.methodFilters.length > 0 || props.prepFilters.length > 0;

  const activeCount = [
    props.typeFilters, props.placeFilters, props.compFilters,
    props.topicFilters, props.ageFilters, props.moodFilters,
    props.methodFilters, props.prepFilters,
  ].filter((f) => f.length > 0).length;

  const counts = useMemo(() => {
    const c = {
      type: {} as Record<string, number>,
      place: {} as Record<string, number>,
      age: {} as Record<string, number>,
      method: {} as Record<string, number>,
      prep: { zero: 0, needed: 0 },
    };
    props.activities.forEach((a) => {
      c.type[a.type] = (c.type[a.type] || 0) + 1;
      a.place.forEach((p) => { c.place[p] = (c.place[p] || 0) + 1; });
      a.age.forEach((yr) => { c.age[String(yr)] = (c.age[String(yr)] || 0) + 1; });
      c.method[a.method] = (c.method[a.method] || 0) + 1;
      if (a.prep.length === 1 && a.prep[0] === "zero prep") c.prep.zero++;
      else c.prep.needed++;
    });
    return c;
  }, [props.activities]);

  const resetAll = () => {
    props.onTypeChange([]); props.onPlaceChange([]);
    props.onCompChange([]); props.onTopicChange([]);
    props.onAgeChange([]); props.onMoodChange([]);
    props.onMethodChange([]); props.onPrepChange([]);
  };

  const dm = props.darkMode;

  return (
    <div className="mx-4 mt-3 rounded-2xl overflow-hidden transition-colors duration-300" style={{
      background: dm ? "#1a1a2e" : "white",
      border: `1px solid ${dm ? "#2a2a40" : "#EDEDEA"}`,
      boxShadow: dm ? "0 2px 8px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
    }}>
      <div className="flex justify-between items-center px-4 py-3 cursor-pointer select-none"
        onClick={() => setCollapsed(!collapsed)}
        style={{ borderBottom: collapsed ? "none" : `1px solid ${dm ? "#2a2a40" : "#F0F0EC"}` }}>
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={dm ? "text-gray-500" : "text-gray-400"}>
            <path d="M1 3H15M3 8H13M5 13H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className={`text-[13px] font-extrabold uppercase tracking-wider ${dm ? "text-gray-300" : "text-gray-700"}`}>Filtry</span>
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#FF6B6B] text-white text-[10px] font-bold flex items-center justify-center">{activeCount}</span>
          )}
          {!collapsed && hasFilters && (
            <span className={`text-[11px] ${dm ? "text-gray-500" : "text-gray-400"}`}>— kliknij kilka filtrów naraz</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasFilters && (
            <button onClick={(e) => { e.stopPropagation(); resetAll(); }}
              className="text-xs text-[#FF6B6B] font-bold flex items-center gap-1 bg-transparent border-none cursor-pointer hover:underline">
              <X size={12} /> Wyczyść filtry
            </button>
          )}
          {collapsed ? <ChevronDown size={16} className={dm ? "text-gray-500" : "text-gray-400"} /> : <ChevronUp size={16} className={dm ? "text-gray-500" : "text-gray-400"} />}
        </div>
      </div>

      {!collapsed && (
        <div className="px-4 pb-4 pt-1 space-y-3">
          {/* Age */}
          <FilterSection label="Wiek dziecka" darkMode={dm}>
            <div className="flex gap-1.5 flex-wrap">
              <Pill active={props.ageFilters.length === 0} onClick={() => props.onAgeChange([])} color="#888" darkMode={dm}>wszystkie</Pill>
              {ALL_AGES.map((yr) => (
                <Pill key={yr} active={props.ageFilters.includes(String(yr))} onClick={() => props.onAgeChange(toggle(props.ageFilters, String(yr)))} color={AGE_COLORS[yr]} darkMode={dm}>
                  {yr} lat <span className="pill-count">{counts.age[String(yr)] || 0}</span>
                </Pill>
              ))}
            </div>
          </FilterSection>

          {/* Mood */}
          <FilterSection label="Nastrój / emocje" darkMode={dm}>
            <div className="flex gap-1.5 flex-wrap">
              <Pill active={props.moodFilters.length === 0} onClick={() => props.onMoodChange([])} color="#F59E0B" darkMode={dm}>wszystkie</Pill>
              {MOOD_FILTERS.map((m) => (
                <Pill key={m.id} active={props.moodFilters.includes(m.id)} onClick={() => props.onMoodChange(toggle(props.moodFilters, m.id))} color="#F59E0B" darkMode={dm}>
                  <span className="text-[11px] mr-0.5">{MOOD_ICONS[m.id]}</span> {m.label}
                </Pill>
              ))}
            </div>
          </FilterSection>

          {/* Type */}
          <FilterSection label="Typ zabawy" darkMode={dm}>
            <div className="flex gap-1.5 flex-wrap">
              <Pill active={props.typeFilters.length === 0} onClick={() => props.onTypeChange([])} color="#888" darkMode={dm}>wszystkie</Pill>
              {ALL_TYPES.map((t) => {
                const meta = TYPE_META[t as ActivityType];
                const isActive = props.typeFilters.includes(t);
                return (
                  <Pill key={t} active={isActive} onClick={() => props.onTypeChange(toggle(props.typeFilters, t))} color={meta?.accent} darkMode={dm}>
                    <TypeIcon type={t} size={14} color={isActive ? "white" : meta?.accent} />
                    <span className="ml-0.5">{t}</span>
                    <span className="pill-count">{counts.type[t] || 0}</span>
                  </Pill>
                );
              })}
            </div>
          </FilterSection>

          {/* Place */}
          <FilterSection label="Miejsce" darkMode={dm}>
            <div className="flex gap-1.5 flex-wrap">
              <Pill active={props.placeFilters.length === 0} onClick={() => props.onPlaceChange([])} color="#888" darkMode={dm}>wszystkie</Pill>
              {ALL_PLACES.map((p) => {
                const isActive = props.placeFilters.includes(p);
                return (
                  <Pill key={p} active={isActive} onClick={() => props.onPlaceChange(toggle(props.placeFilters, p))} color="#555" darkMode={dm}>
                    <PlaceIcon place={p} size={14} color={isActive ? "white" : dm ? "#888" : "#888"} />
                    <span className="ml-0.5">{p}</span>
                    <span className="pill-count">{counts.place[p] || 0}</span>
                  </Pill>
                );
              })}
            </div>
          </FilterSection>

          {/* Method */}
          <FilterSection label="Metoda pedagogiczna" darkMode={dm}>
            <div className="flex gap-1.5 flex-wrap">
              <Pill active={props.methodFilters.length === 0} onClick={() => props.onMethodChange([])} color="#888" darkMode={dm}>wszystkie</Pill>
              {ALL_METHODS.map((m) => {
                const meta = METHOD_META[m as Method];
                return (
                  <Pill key={m} active={props.methodFilters.includes(m)} onClick={() => props.onMethodChange(toggle(props.methodFilters, m))} color={meta?.color} darkMode={dm}>
                    <Beaker size={12} className="mr-0.5" />
                    {meta?.label}
                    <span className="pill-count">{counts.method[m] || 0}</span>
                  </Pill>
                );
              })}
            </div>
          </FilterSection>

          {/* Prep */}
          <FilterSection label="Przygotowanie" darkMode={dm}>
            <div className="flex gap-1.5 flex-wrap">
              <Pill active={props.prepFilters.length === 0} onClick={() => props.onPrepChange([])} color="#888" darkMode={dm}>wszystkie</Pill>
              <Pill active={props.prepFilters.includes("zero")} onClick={() => props.onPrepChange(toggle(props.prepFilters, "zero"))} color="#22C55E" darkMode={dm}>
                <span className="text-[11px] mr-0.5">✅</span> zero prep
                <span className="pill-count">{counts.prep.zero}</span>
              </Pill>
              <Pill active={props.prepFilters.includes("needed")} onClick={() => props.onPrepChange(toggle(props.prepFilters, "needed"))} color="#F59E0B" darkMode={dm}>
                <Package size={12} className="mr-0.5" /> wymaga prep
                <span className="pill-count">{counts.prep.needed}</span>
              </Pill>
            </div>
          </FilterSection>

          {/* Competency */}
          <FilterSection label="Kompetencja" darkMode={dm}>
            <div className="flex gap-1.5 flex-wrap">
              <Pill active={props.compFilters.length === 0} onClick={() => props.onCompChange([])} color="#6C63FF" darkMode={dm}>wszystkie</Pill>
              {FILTER_COMPETENCIES.map((c) => (
                <Pill key={c} active={props.compFilters.includes(c)} onClick={() => props.onCompChange(toggle(props.compFilters, c))} color="#6C63FF" darkMode={dm}>{c}</Pill>
              ))}
            </div>
          </FilterSection>

          {/* Topic */}
          <FilterSection label="Temat" darkMode={dm}>
            <div className="flex gap-1.5 flex-wrap">
              <Pill active={props.topicFilters.length === 0} onClick={() => props.onTopicChange([])} color="#22C55E" darkMode={dm}>wszystkie</Pill>
              {FILTER_TOPICS.map((t) => (
                <Pill key={t} active={props.topicFilters.includes(t)} onClick={() => props.onTopicChange(toggle(props.topicFilters, t))} color="#22C55E" darkMode={dm}>{t}</Pill>
              ))}
            </div>
          </FilterSection>
        </div>
      )}
    </div>
  );
}

function FilterSection({ label, children, darkMode }: { label: string; children: React.ReactNode; darkMode: boolean }) {
  return (
    <div>
      <div className={`text-[11px] font-bold uppercase tracking-wider mb-1.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{label}</div>
      {children}
    </div>
  );
}

function Pill({ active, onClick, color, children, darkMode }: {
  active: boolean; onClick: () => void; color?: string; children: React.ReactNode; darkMode: boolean;
}) {
  const c = color ?? "#888";
  return (
    <button onClick={onClick}
      className="rounded-full text-xs cursor-pointer px-2.5 py-1 border-[1.5px] flex items-center gap-0.5"
      style={{
        borderColor: active ? c : darkMode ? "#333" : "#E8E8E0",
        background: active ? c : darkMode ? "#1a1a2e" : "white",
        color: active ? "white" : darkMode ? "#aaa" : "#555",
        fontWeight: active ? 700 : 500,
        transform: active ? "scale(1.04)" : "scale(1)",
        transition: "background 0.12s, color 0.12s, border-color 0.12s, transform 0.12s",
        animation: active ? "ps-chip-pop 0.2s cubic-bezier(.34,1.56,.64,1) both" : "none",
      }}>
      {children}
    </button>
  );
}
