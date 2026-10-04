import { StarIcon } from "@/src/components/atoms/StarIcon";
import { AvatarStack } from "@/src/components/molecules/AvatarStack";
import { cn } from "@/src/lib/cn";

export interface StudentsRatingCardProps {
  title: string;
  /** e.g. "4.5 (240)" */
  rating: string;
  avatars: readonly string[];
  /** e.g. "2K+" */
  overflowLabel: string;
  /** light: white card, lime star + bubble · accent: lime card, blue star, dark bubble (sign-in) */
  tone?: "light" | "accent";
  className?: string;
}

const TONES = {
  light: {
    card: "bg-white",
    star: "text-accent",
    bubble: "bg-accent font-bold text-label",
  },
  accent: {
    card: "bg-accent",
    star: "text-brand",
    bubble: "bg-label font-bold text-chip",
  },
} as const;

/**
 * "Happy Students" card — Figma › Frame 12 / Login › Group 8: 258px wide, radius 16, padding 16,
 * 43px avatars with a 2px white ring overlapping by 16, trailing "2K+" bubble.
 */
export function StudentsRatingCard({
  title,
  rating,
  avatars,
  overflowLabel,
  tone = "light",
  className,
}: StudentsRatingCardProps) {
  const t = TONES[tone];

  return (
    <div
      className={cn(
        "flex w-[258px] flex-col justify-center gap-2 rounded-2xl p-4 backdrop-blur-[10px]",
        t.card,
        className,
      )}
    >
      <div>
        <p className="text-label-m leading-6 font-medium text-label">{title}</p>
        <p className="flex items-center text-[10px] leading-[1.5] text-shuttle-gray-400">
          {rating}
          <StarIcon className={t.star} />
        </p>
      </div>
      <AvatarStack
        avatars={avatars}
        size={43}
        overlap={16}
        ring
        overflowLabel={overflowLabel}
        overflowClassName={t.bubble}
      />
    </div>
  );
}