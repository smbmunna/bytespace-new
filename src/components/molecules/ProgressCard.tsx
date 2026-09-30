import { ProgressBar } from "@/src/components/atoms/ProgressBar";
import { cn } from "@/src/lib/cn";

export interface ProgressCardProps {
  label: string;
  /** 0–100 */
  value: number;
  className?: string;
}

/**
 * White "Learning Progress" card — Figma › Frame 11: 232px wide, radius 16, padding 16,
 * 14px label, 48px value (#242528), 200 × 8 bar with lime fill.
 */
export function ProgressCard({ label, value, className }: ProgressCardProps) {
  return (
    <div
      className={cn(
        "flex w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]",
        className,
      )}
    >
      <p className="text-label-s leading-6 font-medium text-label">{label}</p>
      <p className="type-metric text-label">{value}%</p>
      <ProgressBar value={value} label={label} />
    </div>
  );
}