import { Button } from "@/src/components/atoms/Button";
import { GridOverlay } from "@/src/components/atoms/GridOverlay";
import { OrnamentField } from "@/src/components/molecules/OrnamentField";
import { cn } from "@/src/lib/cn";
import type { OrnamentItem } from "@/src/types";

const COPY = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  description:
    "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  button: "Join as Creator",
} as const;

/**
 * Ornaments in CTA_Frame space (1440 × 488), bottom → top as in Figma.
 * Coordinates = Group 6 offset (−118, −162) + each frame + its image offset.
 * Tints follow the final design: lime #D4FB20 and white #F5F5F6 (baked into the assets).
 */
const ORNAMENTS: readonly OrnamentItem[] = [
  { src: "/images/hero/ornament-pyramid-lime.webp", left: 1078, top: 0, size: 188 },
  { src: "/images/hero/ornament-coil-lime-2.webp", left: 1107, top: 289, size: 331 },
  { src: "/images/hero/ornament-coil-lime.webp", left: -122, top: -162, size: 386 },
  { src: "/images/hero/ornament-coil-white.webp", left: 180, top: 5, size: 175, mirrored: true },
  { src: "/images/hero/ornament-cone-white.webp", left: -50, top: 225, size: 188 },
  { src: "/images/hero/ornament-torus-lime.webp", left: 16, top: 298, size: 343 },
  { src: "/images/hero/ornament-cylinder-white.webp", left: 1222, top: 5, size: 371 },
];

export interface CreatorCtaProps {
  /** Where "Join as Creator" points. */
  href?: string;
  className?: string;
}

/**
 * Creator call-to-action — Figma › Home › CTA_Frame (1440 × 488, Persian Blue/800).
 * Centered 964px content column: title (52/64) → 40px → paragraph → 40px → button,
 * 85px of padding above and below, grid overlay + 3D ornaments behind.
 */
export function CreatorCta({ href = "/join", className }: CreatorCtaProps) {
  return (
    <section
      aria-labelledby="creator-cta-heading"
      className={cn("relative isolate overflow-hidden bg-brand pt-[85px] pb-[84px]", className)}
    >
      <GridOverlay />
      <OrnamentField items={ORNAMENTS} />

      <div className="container-content relative z-10 flex flex-col items-center gap-10 text-center">
        <h2
          id="creator-cta-heading"
          className="type-cta-heading max-w-cta-title text-on-dark max-md:text-heading-s! max-md:leading-[1.2]!"
        >
          {COPY.title}
        </h2>
        <p className="type-body-l max-w-cta-text text-border-input">{COPY.description}</p>
        <Button href={href} variant="secondary" size="lg">
          {COPY.button}
        </Button>
      </div>
    </section>
  );
}