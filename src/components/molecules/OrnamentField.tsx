import { Ornament } from "@/src/components/atoms/Ornament";
import { cn } from "@/src/lib/cn";
import type { OrnamentItem } from "@/src/types";

export interface OrnamentFieldProps {
  /** Rendered in order: later items sit on top. */
  items: readonly OrnamentItem[];
  className?: string;
}


export function OrnamentField({ items, className }: OrnamentFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 lg:block",
        className,
      )}
    >
      {items.map((item) => (
        <Ornament key={`${item.src}-${item.left}-${item.top}`} {...item} />
      ))}
    </div>
  );
}