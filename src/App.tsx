import { useState, useMemo } from "react";
import { LayoutGrid, CreditCard } from "lucide-react";
import { ACTIVITIES } from "./data/activities";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { ActivityCard } from "./components/ActivityCard";
import { MatrixView } from "./components/MatrixView";

export default function App() {
  const [typeFilter, setTypeFilter] = useState("wszystkie");
  const [placeFilter, setPlaceFilter] = useState("wszystkie");
  const [compFilter, setCompFilter] = useState("wszystkie");
  const [topicFilter, setTopicFilter] = useState("wszystkie");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [view, setView] = useState<"cards" | "matrix">("cards");

  const filtered = useMemo(() => {
    return ACTIVITIES.filter((a) => {
      if (typeFilter !== "wszystkie" && a.type !== typeFilter) return false;
      if (placeFilter !== "wszystkie" && !a.place.includes(placeFilter as any))
        return false;
      if (
        compFilter !== "wszystkie" &&
        !a.competencies.includes(compFilter)
      )
        return false;
      if (topicFilter !== "wszystkie" && !a.topics.includes(topicFilter))
        return false;
      return true;
    });
  }, [typeFilter, placeFilter, compFilter, topicFilter]);

  return (
    <div className="font-sans bg-warmwhite min-h-screen">
      <Header />

      {/* View toggle */}
      <div className="flex gap-2 px-5 pt-3.5 justify-end">
        <ViewToggle
          active={view === "cards"}
          onClick={() => setView("cards")}
          icon={<CreditCard size={14} />}
          label="Karty"
        />
        <ViewToggle
          active={view === "matrix"}
          onClick={() => setView("matrix")}
          icon={<LayoutGrid size={14} />}
          label="Macierz"
        />
      </div>

      <FilterBar
        typeFilter={typeFilter}
        placeFilter={placeFilter}
        compFilter={compFilter}
        topicFilter={topicFilter}
        onTypeChange={setTypeFilter}
        onPlaceChange={setPlaceFilter}
        onCompChange={setCompFilter}
        onTopicChange={setTopicFilter}
      />

      {/* Result count */}
      <div className="px-6 pt-1 pb-2.5 text-[13px] text-gray-400 font-semibold">
        Pokazuję{" "}
        <span className="text-[#FF6B6B] font-extrabold">{filtered.length}</span>{" "}
        z {ACTIVITIES.length} aktywności
      </div>

      {/* Content */}
      {view === "cards" ? (
        <div className="px-4 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-10 text-gray-400 text-[15px]">
              Brak aktywności dla tych filtrów — spróbuj zmienić kombinację
            </div>
          ) : (
            filtered.map((a) => (
              <ActivityCard
                key={a.id}
                activity={a}
                expanded={expanded === a.id}
                onToggle={() =>
                  setExpanded(expanded === a.id ? null : a.id)
                }
              />
            ))
          )}
        </div>
      ) : (
        <MatrixView activities={filtered} />
      )}
    </div>
  );
}

function ViewToggle({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-bold cursor-pointer transition-all duration-200 border-none ${
        active
          ? "bg-[#1a1a2e] text-white"
          : "bg-[#E8E8E0] text-gray-500"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
