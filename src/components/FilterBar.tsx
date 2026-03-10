import { X } from "lucide-react";
import {
  ALL_TYPES,
  ALL_PLACES,
  FILTER_COMPETENCIES,
  FILTER_TOPICS,
  TYPE_META,
  PLACE_ICONS,
  type ActivityType,
  type Place,
} from "../data/types";

interface FilterBarProps {
  typeFilter: string;
  placeFilter: string;
  compFilter: string;
  topicFilter: string;
  onTypeChange: (v: string) => void;
  onPlaceChange: (v: string) => void;
  onCompChange: (v: string) => void;
  onTopicChange: (v: string) => void;
}

export function FilterBar(props: FilterBarProps) {
  const hasFilters =
    props.typeFilter !== "wszystkie" ||
    props.placeFilter !== "wszystkie" ||
    props.compFilter !== "wszystkie" ||
    props.topicFilter !== "wszystkie";

  const resetAll = () => {
    props.onTypeChange("wszystkie");
    props.onPlaceChange("wszystkie");
    props.onCompChange("wszystkie");
    props.onTopicChange("wszystkie");
  };

  return (
    <div className="bg-white mx-4 mt-3 rounded-2xl shadow-sm p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[13px] font-extrabold text-gray-700 uppercase tracking-wide">
          Filtry
        </span>
        {hasFilters && (
          <button
            onClick={resetAll}
            className="text-xs text-[#FF6B6B] font-bold flex items-center gap-1 bg-transparent border-none cursor-pointer"
          >
            <X size={12} /> Resetuj
          </button>
        )}
      </div>

      <FilterRow
        label="🎯 Typ zabawy"
        options={["wszystkie", ...ALL_TYPES]}
        value={props.typeFilter}
        onChange={props.onTypeChange}
        getColor={(opt) => TYPE_META[opt as ActivityType]?.accent}
        getIcon={(opt) => TYPE_META[opt as ActivityType]?.icon}
      />
      <FilterRow
        label="📍 Miejsce"
        options={["wszystkie", ...ALL_PLACES]}
        value={props.placeFilter}
        onChange={props.onPlaceChange}
        getIcon={(opt) => PLACE_ICONS[opt as Place]}
      />
      <FilterRow
        label="💡 Kompetencja"
        options={["wszystkie", ...FILTER_COMPETENCIES]}
        value={props.compFilter}
        onChange={props.onCompChange}
        defaultColor="#6C63FF"
      />
      <FilterRow
        label="🌍 Temat"
        options={["wszystkie", ...FILTER_TOPICS]}
        value={props.topicFilter}
        onChange={props.onTopicChange}
        defaultColor="#22C55E"
      />
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
  getColor,
  getIcon,
  defaultColor,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  getColor?: (opt: string) => string | undefined;
  getIcon?: (opt: string) => string | undefined;
  defaultColor?: string;
}) {
  return (
    <div className="mb-2.5">
      <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wide mb-1.5">
        {label}
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {options.map((opt) => {
          const isActive = value === opt;
          const color =
            opt !== "wszystkie"
              ? getColor?.(opt) ?? defaultColor ?? "#888"
              : "#888";
          const icon =
            opt !== "wszystkie" ? getIcon?.(opt) : undefined;

          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className="rounded-full text-xs font-medium cursor-pointer transition-all duration-150 px-2.5 py-1 border-[1.5px]"
              style={{
                borderColor: isActive ? color : "#E0E0DA",
                background: isActive ? color : "white",
                color: isActive ? "white" : "#555",
                fontWeight: isActive ? 700 : 500,
                transform: isActive ? "scale(1.04)" : "scale(1)",
              }}
            >
              {icon ? `${icon} ` : ""}
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
