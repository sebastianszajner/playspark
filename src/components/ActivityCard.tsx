import type { Activity } from "../data/types";
import { TYPE_META, PLACE_ICONS, AGE_COLORS, type Place } from "../data/types";

interface ActivityCardProps {
  activity: Activity;
  expanded: boolean;
  onToggle: () => void;
}

export function ActivityCard({ activity: a, expanded, onToggle }: ActivityCardProps) {
  const col = TYPE_META[a.type];

  return (
    <div
      onClick={onToggle}
      className="rounded-2xl p-3.5 cursor-pointer transition-all duration-200 border-2"
      style={{
        background: expanded ? col.bg : "white",
        borderColor: expanded ? col.accent : "#EDEDEA",
        boxShadow: expanded
          ? `0 4px 20px ${col.accent}33`
          : "0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      {/* Top row */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-2 items-center">
          <span className="text-[22px]">{col.icon}</span>
          <div>
            <div className="text-[15px] font-extrabold text-[#1a1a2e] leading-tight">
              {a.name}
            </div>
            <div
              className="text-[11px] font-bold mt-0.5 uppercase tracking-wide"
              style={{ color: col.accent }}
            >
              {a.type}
            </div>
          </div>
        </div>
        <span
          className="text-[11px] font-extrabold px-2 py-0.5 rounded-[10px] border shrink-0"
          style={{
            background: (AGE_COLORS[a.age] ?? "#888") + "22",
            color: AGE_COLORS[a.age] ?? "#888",
            borderColor: (AGE_COLORS[a.age] ?? "#888") + "44",
          }}
        >
          {a.age} lat
        </span>
      </div>

      {/* Places */}
      <div className="flex gap-1 flex-wrap">
        {a.place.map((p) => (
          <span
            key={p}
            className="text-[11px] bg-[#F5F5F0] rounded-lg px-1.5 py-0.5 text-gray-500"
          >
            {PLACE_ICONS[p as Place]} {p}
          </span>
        ))}
      </div>

      {/* Expanded */}
      {expanded && (
        <div
          className="mt-2.5 pt-2.5 border-t"
          style={{ borderColor: col.accent + "33" }}
        >
          <ExpandSection
            label="💡 Kompetencje"
            items={a.competencies}
            color={col.accent}
          />
          <ExpandSection label="🌍 Tematy" items={a.topics} color="#666" />
          <div className="mt-2 flex justify-between items-center">
            <span className="text-[11px] text-gray-400">
              Metoda: <strong className="text-gray-500">{a.method}</strong>
            </span>
            <span className="text-[11px] text-gray-400">ID #{a.id}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ExpandSection({
  label,
  items,
  color,
}: {
  label: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="mb-1.5">
      <div className="text-[11px] text-gray-400 font-bold mb-1">{label}</div>
      <div className="flex gap-1 flex-wrap">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs px-2 py-0.5 rounded-[10px] font-semibold"
            style={{ background: color + "18", color }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
