import { cn } from "@/src/lib/cn";

export interface SectionHeadingProps {
  title: string;
  description: string;
  /** id for the <h2>, so the parent <section> can reference it with aria-labelledby. */
  id?: string;
  /** muted: Shuttle Gray/400 (course discovery) · body: #4F4F4F */
  descriptionTone?: "muted" | "body";
  className?: string;
}

const tones = {
  muted: "text-shuttle-gray-400",
  body: "text-body",
} as const;

/**
 * Centered section intro — Figma › Frame 3: Heading M (Vulcan/950) → 16px →
 * Body L paragraph, max 917px wide. The title wraps at 588px.
 */
export function SectionHeading({
  title,
  description,
  id,
  descriptionTone = "muted",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center gap-4 text-center", className)}>
      <h2 id={id} className="type-heading-m max-w-[588px] text-vulcan-950">
        {title}
      </h2>
      <p className={cn("type-body-l max-w-section-intro", tones[descriptionTone])}>{description}</p>
    </div>
  );
}