import { cn } from "@/src/lib/cn";

const COLORS = {
  blue: "var(--color-brand)", // #003BE2
  lime: "var(--color-electric-lime-500)", // #CBFC01
} as const;

export interface GlowBlobProps {
  color: keyof typeof COLORS;
  /** Position + size in px, in the parent's coordinate space. */
  left: number;
  top: number;
  size: number;
  /** Figma paint opacity (0–1). */
  opacity: number;
  className?: string;
}

/**
 * Soft radial glow (Figma › Ellipse 8–12): a circle whose color fades
 * 100% → 23% (53%) → 6% (75%) → 0% (edge), then dimmed by the paint opacity.
 */
export function GlowBlob({ color, left, top, size, opacity, className }: GlowBlobProps) {
  const c = COLORS[color];
  const stop = (pct: number) => `color-mix(in srgb, ${c} ${pct}%, transparent)`;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        left,
        top,
        width: size,
        height: size,
        opacity,
        backgroundImage: `radial-gradient(closest-side, ${stop(100)} 0%, ${stop(23)} 53%, ${stop(6)} 75%, transparent 100%)`,
      }}
    />
  );
}