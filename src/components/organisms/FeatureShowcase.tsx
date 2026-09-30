import { GlowBlob, type GlowBlobProps } from "@/src/components/atoms/GlowBlob";
import { CreatorShowcaseRow } from "@/src/components/organisms/CreatorShowcaseRow";
import { GrowthShowcaseRow } from "@/src/components/organisms/GrowthShowcaseRow";

/** Soft background glows — Figma › Frame 15 › Ellipse 8–12 (coordinates in 1440-wide frame space). */
const GLOWS: GlowBlobProps[] = [
  { color: "lime", left: -152, top: -466, size: 1137, opacity: 0.4 },
  { color: "blue", left: 811, top: -458, size: 1137, opacity: 0.08 },
  { color: "blue", left: -508, top: 183, size: 1137, opacity: 0.16 },
  { color: "blue", left: 722, top: 788, size: 1137, opacity: 0.24 },
  { color: "lime", left: -287, top: 946, size: 672, opacity: 0.6 },
];

/**
 * Feature showcase section — Figma › Home › Frame 15 (1440 × 1460, #FAFAFA).
 * 120px vertical padding, 72px between the two rows, blurred lime/blue glows behind.
 */
export function FeatureShowcase() {
  return (
    <section aria-label="Platform benefits" className="relative isolate overflow-hidden bg-surface-alt py-30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-full w-[1440px] -translate-x-1/2"
      >
        {GLOWS.map((glow) => (
          <GlowBlob key={`${glow.color}-${glow.left}-${glow.top}`} {...glow} />
        ))}
      </div>

      <div className="container-content flex flex-col gap-section-gap">
        <GrowthShowcaseRow />
        <CreatorShowcaseRow />
      </div>
    </section>
  );
}