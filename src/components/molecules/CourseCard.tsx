import Image from "next/image";

import { Chip } from "@/src/components/atoms/Chip";
import { SignalIcon } from "@/src/components/atoms/SignalIcon";
import { StarIcon } from "@/src/components/atoms/StarIcon";
import { AvatarStack } from "@/src/components/molecules/AvatarStack";
import { cn } from "@/src/lib/cn";
import type { Course } from "@/src/types";

/** Figma › Course_Card_1 avatars (same photos as avatar-2 + three extra). */
const DEFAULT_AVATARS = [
  "/images/avatars/avatar-2.webp",
  "/images/avatars/avatar-5.webp",
  "/images/avatars/avatar-6.webp",
  "/images/avatars/avatar-7.webp",
];

export interface CourseCardProps {
  course: Course;
  avatars?: readonly string[];
  className?: string;
}

/**
 * Course card — Figma › Course_Card_1: 373px wide, white, 1px #CED0D3 border,
 * 24px radius, 16px padding. Reusable for the course grid.
 */
export function CourseCard({ course, avatars = DEFAULT_AVATARS, className }: CourseCardProps) {
  const {
    title,
    creatorName,
    level,
    price,
    priceSuffix,
    rating,
    lessonCount,
    durationLabel,
    commentCount,
    studentCount,
    imageUrl,
    imageAlt,
  } = course;

  return (
    <article
      className={cn(
        "relative w-[373px] rounded-card border border-border bg-white p-4",
        className,
      )}
    >
      {/* Thumbnail 341 × 195, radius 12, meta chips pinned bottom-left */}
      <div className="relative h-[195px] overflow-hidden rounded-media">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="341px"
          className="object-cover"
        />
        <div className="absolute bottom-[13px] left-3 flex gap-3">
          <Chip>{lessonCount} Lessons</Chip>
          <Chip>{durationLabel}</Chip>
          <Chip>{commentCount} Comments</Chip>
        </div>
      </div>

      {/* Rating — top-right of the content area */}
      <p className="type-label-l absolute top-[232px] right-4 flex items-center leading-7 font-medium text-body">
        {rating.toFixed(1)}
        <span className="[&>svg]:size-6">
          <StarIcon className="text-[#D4750B]" />
        </span>
      </p>

      <div className="mt-[21px] flex flex-col gap-4">
        <div>
          <h3 className="font-heading text-heading-xs leading-7 font-semibold text-heading">
            {title}
          </h3>
          <p className="text-body-xs leading-5 text-body">by {creatorName}</p>
        </div>

        <div className="flex items-center gap-3">
          <Chip tone="surface" icon={<SignalIcon />}>
            {level}
          </Chip>
          <AvatarStack
            avatars={avatars}
            size={32}
            overlap={8}
            overflowLabel={studentCount ? `${studentCount}+` : undefined}
            overflowClassName="bg-black-950 font-medium text-white"
          />
        </div>

        <p className="flex items-end">
          <span className="font-heading text-heading-xs leading-6 font-semibold text-electric-violet-950">
            ${price}
          </span>
          {priceSuffix && <span className="text-body-xs leading-5 text-body">{priceSuffix}</span>}
        </p>
      </div>
    </article>
  );
}