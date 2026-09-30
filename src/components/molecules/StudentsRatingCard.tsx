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
  className?: string;
}

/**
 * White "Happy Students" card — Figma › Frame 12: 258px wide, radius 16, padding 16,
 * lime star, 43px avatars with 2px white ring overlapping by 16, lime "2K+" bubble.
 */
export function StudentsRatingCard({
  title,
  rating,
  avatars,
  overflowLabel,
  className,
}: StudentsRatingCardProps) {
  return (
    <div
      className={cn(
        "flex w-[258px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]",
        className,
      )}
    >
      <div>
        <p className="text-label-m leading-6 font-medium text-label">{title}</p>
        <p className="flex items-center text-[10px] leading-[1.5] text-shuttle-gray-400">
          {rating}
          <StarIcon className="text-accent" />
        </p>
      </div>
      <AvatarStack
        avatars={avatars}
        size={43}
        overlap={16}
        ring
        overflowLabel={overflowLabel}
        overflowClassName="bg-accent font-bold text-label"
      />
    </div>
  );
}