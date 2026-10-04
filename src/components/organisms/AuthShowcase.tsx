import { Ornament } from "@/src/components/atoms/Ornament";
import { CourseCard } from "@/src/components/molecules/CourseCard";
import { StudentsRatingCard } from "@/src/components/molecules/StudentsRatingCard";
import { COURSES } from "@/src/data/courses";
import { STUDENT_AVATARS } from "@/src/data/showcase";
import { cn } from "@/src/lib/cn";
import type { Course, OrnamentItem } from "@/src/types";

function pickCourse(id: string): Course {
  const course = COURSES.find((c) => c.id === id);
  if (!course) throw new Error(`Course "${id}" not found in data/courses.ts`);
  return course;
}

const BACK_COURSE = pickCourse("build-digital-asset");
const FRONT_COURSE = pickCourse("the-power-of-big-data");

const PYRAMIDS = {
  lime: "/images/hero/ornament-pyramid-lime.webp",
  white: "/images/hero/ornament-pyramid-lime.webp",
} as const;

/** Ornaments in collage space (548 × 585), drawn above the cards in this order. */
function ornaments(pyramid: keyof typeof PYRAMIDS): OrnamentItem[] {
  return [
    {
      src: "/images/hero/ornament-coil-white.png",
      left: 375,
      top: 321,
      size: 175,
      mirrored: true,
    },
    {
      src: "/images/hero/ornament-torus-lime.webp",
      left: 52,
      top: 15,
      size: 146,
    },
    { src: PYRAMIDS[pyramid], left: -2, top: 397, size: 188 },
  ];
}

export interface AuthShowcaseProps {
  title: string;
  description: string;
  /**
   * Title color classes. Must be set on the <h2> itself: the global `h1–h4 { color }` base rule
   * would override a color inherited from a parent. Default: Shuttle Gray/50 (#F5F5F6).
   */
  titleClassName?: string;
  /** Paragraph color classes (sign-in: on-dark #F5F5F6 · sign-up: "text-placeholder" #B0B0B0). */
  descriptionClassName?: string;
  /** Color of the pyramid ornament — lime on sign-in, white on sign-up. */
  pyramid?: keyof typeof PYRAMIDS;
  className?: string;
}

/**
 * Left side of the auth pages — Figma › Login/Register › Text + collage.
 * Tagline (Poppins SemiBold 32 / 40) → 16px → paragraph (475px max). On desktop the
 * 548 × 585 collage is pinned 185px below the top of the column (Figma y 305 vs 120),
 * so it stays put whatever the paragraph's height. Hidden below lg.
 */
export function AuthShowcase({
  title,
  description,
  titleClassName = "text-on-dark",
  descriptionClassName = "text-on-dark",
  pyramid = "lime",
  className,
}: AuthShowcaseProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="flex max-w-[500px] flex-col gap-4 lg:ml-0.5">
        <h2
          className={cn(
            "font-heading text-[32px] leading-10 font-semibold tracking-[-0.01em]",
            titleClassName,
          )}
        >
          {title}
        </h2>
        <p className={cn("type-body-l", descriptionClassName)}>{description}</p>
      </div>

      <div
        aria-hidden="true"
        className="hidden h-[585px] w-[548px] lg:absolute lg:top-[185px] lg:-left-[23px] lg:block"
      >
        <CourseCard
          course={BACK_COURSE}
          starClassName="text-accent"
          overflowClassName="bg-black-950 font-medium text-white"
          className="absolute top-[89px] left-[25px] w-[373px]"
        />
        <CourseCard
          course={FRONT_COURSE}
          starClassName="text-accent"
          overflowClassName="bg-black-950 font-medium text-white"
          className="absolute top-[-450] left-[136px] w-[373px]"
        />
        <StudentsRatingCard
          tone="accent"
          title="Happy Students"
          rating="4.5 (240)"
          avatars={STUDENT_AVATARS}
          overflowLabel="2K+"
          className="absolute top-[435px] left-[251px]"
        />
        {ornaments(pyramid).map((item) => (
          <Ornament key={item.src} {...item} />
        ))}
      </div>
    </div>
  );
}
