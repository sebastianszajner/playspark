import type { Activity } from "../data/types";
import {
  ALL_TYPES,
  TYPE_META,
  PLACE_ICONS,
  AGE_COLORS,
  type Place,
} from "../data/types";

interface MatrixViewProps {
  activities: Activity[];
}

export function MatrixView({ activities }: MatrixViewProps) {
  const typeGroups = ALL_TYPES
    .map((type) => ({
      type,
      items: activities.filter((a) => a.type === type),
      col: TYPE_META[type],
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="px-4 pb-8">
      {typeGroups.map(({ type, items, col }) => (
        <div
          key={type}
          className="mb-5 bg-white rounded-2xl overflow-hidden border-[1.5px]"
          style={{ borderColor: col.accent + "33" }}
        >
          {/* Group header */}
          <div
            className="px-4 py-2.5 flex items-center gap-2 border-b-[1.5px]"
            style={{
              background: col.bg,
              borderBottomColor: col.accent + "22",
            }}
          >
            <span className="text-xl">{col.icon}</span>
            <span
              className="font-extrabold text-[15px] capitalize"
              style={{ color: col.accent }}
            >
              {type}
            </span>
            <span
              className="ml-auto text-xs text-white px-2.5 py-0.5 rounded-[10px] font-bold"
              style={{ background: col.accent }}
            >
              {items.length}
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-[#FAFAF7]">
                  {["Aktywność", "Wiek", "Miejsca", "Kompetencje", "Tematy", "Metoda"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-3 py-2 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wide border-b border-[#EDEDE8] whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {items.map((a, i) => (
                  <tr
                    key={a.id}
                    className={`align-top ${i % 2 ? "bg-[#FAFAF7]" : "bg-white"}`}
                  >
                    <td className="px-3 py-2 font-bold text-[#1a1a2e] whitespace-nowrap">
                      {a.name}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className="text-[11px] px-1.5 py-0.5 rounded-lg font-bold"
                        style={{
                          background: (AGE_COLORS[a.age] ?? "#888") + "20",
                          color: AGE_COLORS[a.age] ?? "#888",
                        }}
                      >
                        {a.age}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1 flex-wrap">
                        {a.place.map((p) => (
                          <span
                            key={p}
                            className="text-[11px] bg-[#F0F0EC] rounded-md px-1.5 py-0.5 text-gray-500"
                          >
                            {PLACE_ICONS[p as Place]}
                            {p}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1 flex-wrap">
                        {a.competencies.map((c) => (
                          <span
                            key={c}
                            className="text-[11px] rounded-md px-1.5 py-0.5 font-semibold"
                            style={{
                              background: col.accent + "18",
                              color: col.accent,
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1 flex-wrap">
                        {a.topics.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] bg-emerald-50 text-emerald-700 rounded-md px-1.5 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-400 italic">
                      {a.method}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
