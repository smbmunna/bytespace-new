import Link from "next/link";

import { Pill } from "@/src/components/atoms/Pill";
import { cn } from "@/src/lib/cn";
import type { CategoryTab } from "@/src/types";

export interface CategoryTabsProps {
  /** Pills grouped into centered rows, as laid out in Figma (8 / 6 / 4 + "More"). */
  rows: CategoryTab[][];
  activeId: string;
  onSelect: (id: string) => void;
  moreHref?: string;
  className?: string;
}

/**
 * Staggered, centered pill rows — Figma › Tab_Categories + Frame 6 + Frame 7:
 * 16px between pills, ≈21px between rows. Rows still wrap on narrow screens.
 */
export function CategoryTabs({
  rows,
  activeId,
  onSelect,
  moreHref = "/courses",
  className,
}: CategoryTabsProps) {
  return (
    <div
      role="group"
      aria-label="Course categories"
      className={cn("flex flex-col items-center gap-y-[21px]", className)}
    >
      {rows.map((row, rowIndex) => (
        <div key={row[0]?.id ?? rowIndex} className="flex flex-wrap items-center justify-center gap-4">
          {row.map((tab) => (
            <Pill key={tab.id} active={tab.id === activeId} onClick={() => onSelect(tab.id)}>
              {tab.label}
            </Pill>
          ))}
          {rowIndex === rows.length - 1 && (
            <Link
              href={moreHref}
              className="type-label-m rounded-card font-normal! text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              + More
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}