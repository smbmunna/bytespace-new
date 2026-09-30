import type { ReactNode } from "react";

import { cn } from "@/src/lib/cn";
import type { ChipSize, ChipTone } from "@/src/types";

export interface ChipProps {
  tone?: ChipTone;
  size?: ChipSize;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** glass: #F6F6F6 @ 60% (on photos) · surface: #F5F5F6 (level badge) · accent: lime (delta badge) */
const tones: Record<ChipTone, string> = {
  glass: "bg-chip/60 text-body",
  surface: "bg-surface text-shuttle-gray-700",
  accent: "bg-accent text-label",
};

/** md: 12×6 padding, 12px text · sm: 8×2 padding, 10px text (all with 20px line height) */
const sizes: Record<ChipSize, string> = {
  md: "gap-1 px-3 py-1.5 text-label-xs",
  sm: "px-2 py-0.5 text-[10px]",
};

export function Chip({ tone = "glass", size = "md", icon, className, children }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-card leading-5 font-medium whitespace-nowrap",
        tones[tone],
        sizes[size],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}