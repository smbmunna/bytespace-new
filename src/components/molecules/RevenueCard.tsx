import { Chip } from "@/src/components/atoms/Chip";
import { ProgressBar } from "@/src/components/atoms/ProgressBar";
import { cn } from "@/src/lib/cn";

export interface RevenueCardProps {
  title: string;
  period: string;
  amount: string;
  delta: string;
  /** When set: amount and delta share a row and a progress bar is shown (0–100). */
  progress?: number;
  className?: string;
}

function Amount({ children }: { children: string }) {
  return (
    <p className="type-metric-sm w-fit bg-clip-text text-transparent [background-image:var(--gradient-text-fade)]">
      {children}
    </p>
  );
}

/**
 * Blue stat card — Figma › Frame 12 (Total Revenue / Year to Date).
 * Persian Blue/800, radius 16, padding 16, gap 8.
 */
export function RevenueCard({
  title,
  period,
  amount,
  delta,
  progress,
  className,
}: RevenueCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-2xl bg-brand p-4 backdrop-blur-[10px]",
        className,
      )}
    >
      <div>
        <p className="type-label-m text-chip">{title}</p>
        <p className="text-[10px] leading-[1.2] text-on-dark-muted">{period}</p>
      </div>

      {progress === undefined ? (
        <>
          <Amount>{amount}</Amount>
          <Chip tone="accent" size="sm" className="self-start">
            {delta}
          </Chip>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between gap-2">
            <Amount>{amount}</Amount>
            <Chip tone="accent" size="sm">
              {delta}
            </Chip>
          </div>
          <ProgressBar
            value={progress}
            label={`${title} progress`}
            trackClassName="bg-white"
          />
        </>
      )}
    </div>
  );
}