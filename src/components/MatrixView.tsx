import type { Activity } from "../data/types";
import { ALL_TYPES, TYPE_META, AGE_COLORS, METHOD_META, type Method } from "../data/types";
import { TypeIcon, PlaceIcon } from "./TypeIcons";

interface MatrixViewProps {
  activities: Activity[];
  darkMode: boolean;
  onOpenActivity: (id: number) => void;
}

export function MatrixView({ activities, darkMode, onOpenActivity }: MatrixViewProps) {
  const dm = darkMode;
  const typeGroups = ALL_TYPES
    .map((type) => ({ type, items: activities.filter((a) => a.type === type), col: TYPE_META[type] }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="px-4 pb-8">
      {typeGroups.map(({ type, items, col }) => (
        <div key={type} className="mb-5 rounded-2xl overflow-hidden border-[1.5px]"
          style={{ borderColor: col.accent + "33", background: dm ? "#1a1a2e" : "white" }}>
          <div className="px-4 py-2.5 flex items-center gap-2 border-b-[1.5px]"
            style={{ background: dm ? `${col.accent}15` : col.bg, borderBottomColor: col.accent + "22" }}>
            <TypeIcon type={type} size={20} color={col.accent} />
            <span className="font-extrabold text-[15px] capitalize" style={{ color: col.accent }}>{type}</span>
            <span className="ml-auto text-xs text-white px-2.5 py-0.5 rounded-[10px] font-bold" style={{ background: col.accent }}>{items.length}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className={dm ? "bg-[#0f0f1a]" : "bg-[#FAFAF7]"}>
                  {["Aktywność", "Wiek", "Miejsca", "Metoda", "Kompetencje"].map((h) => (
                    <th key={h} className={`px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wide whitespace-nowrap border-b ${dm ? "text-gray-500 border-gray-800" : "text-gray-400 border-[#EDEDE8]"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((a, i) => {
                  const mm = METHOD_META[a.method as Method];
                  return (
                    <tr key={a.id} className={`align-top cursor-pointer transition-colors hover:bg-opacity-50 ${i % 2 ? (dm ? "bg-[#0f0f1a]" : "bg-[#FAFAF7]") : ""} ${dm ? "hover:bg-gray-800" : "hover:bg-gray-50"}`}
                      onClick={() => onOpenActivity(a.id)}>
                      <td className={`px-3 py-2 font-bold whitespace-nowrap ${dm ? "text-white" : "text-[#1a1a2e]"}`}>
                        {a.name}
                        {a.prep.length === 1 && a.prep[0] === "zero prep" && (
                          <span className="ml-1.5 text-[9px] text-emerald-600 bg-emerald-50 rounded px-1 py-0.5 font-bold">0P</span>
                        )}
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex gap-0.5">
                          {a.age.map((yr) => (
                            <span key={yr} className="text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center text-white" style={{ background: AGE_COLORS[yr] ?? "#888" }}>{yr}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex gap-1 flex-wrap">
                          {a.place.map((p) => (
                            <span key={p} className={`text-[11px] rounded-md px-1.5 py-0.5 flex items-center gap-0.5 ${dm ? "bg-gray-800 text-gray-400" : "bg-[#F0F0EC] text-gray-500"}`}>
                              <PlaceIcon place={p} size={11} color={dm ? "#666" : "#999"} />{p}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        {mm && (
                          <span className="text-[11px] rounded-md px-1.5 py-0.5 font-semibold" style={{ background: `${mm.color}15`, color: mm.color }}>{mm.label}</span>
                        )}
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex gap-1 flex-wrap">
                          {a.competencies.slice(0, 3).map((c) => (
                            <span key={c} className="text-[11px] rounded-md px-1.5 py-0.5 font-semibold" style={{ background: col.accent + "18", color: col.accent }}>{c}</span>
                          ))}
                          {a.competencies.length > 3 && (
                            <span className={`text-[11px] rounded-md px-1.5 py-0.5 ${dm ? "text-gray-500" : "text-gray-400"}`}>+{a.competencies.length - 3}</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
