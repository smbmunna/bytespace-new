import Image from "next/image";

import { cn } from "@/src/lib/cn";
import type { OrnamentItem } from "@/src/types";

export interface OrnamentProps extends OrnamentItem {
  className?: string;
}

/** A pre-tinted 3D render, absolutely positioned at its Figma coordinates. */
export function Ornament({ src, left, top, size, mirrored = false, className }: OrnamentProps) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      sizes={`${size}px`}
      className={cn(
        "pointer-events-none absolute max-w-none select-none",
        mirrored && "-scale-x-100",
        className,
      )}
      style={{ left, top, width: size, height: size }}
    />
  );
}