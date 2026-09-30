import type { Stat } from "@/src/types";

/** Figma › stat block: value Poppins Medium 36 (brand blue) over a Body L label. */
export function StatItem({ value, label }: Stat) {
  return (
    <div className="flex flex-col">
      <p className="type-heading-s text-brand">{value}</p>
      <p className="type-body-l text-body">{label}</p>
    </div>
  );
}