import { ACTIVITIES } from "../data/activities";
import { ALL_TYPES, ALL_PLACES } from "../data/types";

export function Header() {
  return (
    <div className="bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FFC107] px-6 pt-7 pb-5 text-white">
      <div className="flex items-center gap-3 mb-1.5">
        <span className="text-3xl">⚡</span>
        <div>
          <div className="text-2xl font-extrabold tracking-tight">PlaySpark</div>
          <div className="text-xs font-semibold tracking-widest uppercase opacity-85">
            Taksonomia zabaw · 3–7 lat
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-4 flex-wrap">
        <StatBadge label="zabaw" value={ACTIVITIES.length} />
        <StatBadge label="typów" value={ALL_TYPES.length} />
        <StatBadge label="miejsc" value={ALL_PLACES.length} />
        <StatBadge label="kompetencji" value="12" />
      </div>
    </div>
  );
}

function StatBadge({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white/25 rounded-[10px] px-3 py-1 backdrop-blur-sm">
      <span className="text-lg font-black">{value}</span>
      <span className="text-[11px] ml-1 opacity-85">{label}</span>
    </div>
  );
}
