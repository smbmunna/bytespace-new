import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/src/lib/cn";

export interface PillProps extends ComponentPropsWithoutRef<"button"> {
  active?: boolean;
}

/**
 * Category tab pill — Figma › Tab_Categories: 16×12 padding, radius 24, Label M.
 * Inactive: #F6F6F6 / #4F4F4F · Active: lime #D4FB20 / black (per final design).
 */
export function Pill({ active = false, className, children, ...rest }: PillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "type-label-m cursor-pointer rounded-card px-4 py-3 whitespace-nowrap transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        active ? "bg-accent text-heading" : "bg-chip text-body hover:bg-shuttle-gray-100",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}