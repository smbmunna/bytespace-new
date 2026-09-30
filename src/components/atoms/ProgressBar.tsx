import { cn } from "@/src/lib/cn";

export interface ProgressBarProps {
  /** 0–100 */
  value: number;
  label?: string;
  className?: string;
  /** Replaces the default track color (Figma: #F6F6F6). */
  trackClassName?: string;
  /** Replaces the default fill color (Figma: lime #D4FB20). */
  fillClassName?: string;
}

/** 8px pill progress bar (Figma › "Group": 200 × 8, radius 24). */
export function ProgressBar({
  value,
  label = "Progress",
  className,
  trackClassName = "bg-chip",
  fillClassName = "bg-accent",
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      className={cn("h-2 w-full overflow-hidden rounded-card", trackClassName, className)}
    >
      <div className={cn("h-full rounded-card", fillClassName)} style={{ width: `${pct}%` }} />
    </div>
  );
}