import Image from "next/image";

import { cn } from "@/src/lib/cn";

export interface AvatarProps {
  src: string;
  /** Rendered size in px (Figma: 32 in course cards, 43 in rating cards). */
  size: number;
  alt?: string;
  /** 2px white inside stroke, as on the Happy Students avatars. */
  ring?: boolean;
  className?: string;
}

export function Avatar({ src, size, alt = "", ring = false, className }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={cn(
        "shrink-0 rounded-full object-cover",
        ring && "border-2 border-white",
        className,
      )}
    />
  );
}