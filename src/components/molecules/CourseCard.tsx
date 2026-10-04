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
  "/images/avatars/avatar-8.webp",
  "/images/avatars/avatar-9.webp",
  "/images/avatars/avatar-10.webp",
];

export interface CourseCardProps {
  course: Course;
  avatars?: readonly string[];
  /** Color of the rating star (default: inherits the gray rating text). Sign-in/sign-up use "text-accent". */
  starClassName?: string;
  /** Classes for the "26+" bubble (default: lime). Sign-in/sign-up use "bg-black-950 font-medium text-white". */
  overflowClassName?: string;
  className?: string;
}

/**
 * Course card — Figma › Course_Card_1: 373px wide in the grid, white, 1px #CED0D3 border,
 * 24px radius, 16px padding. It is a block element, so it fills its container in the grid;
 * set an explicit width via className when absolutely positioning it (e.g. "w-[373px]").
 */
export function CourseCard({
  course,
  avatars = DEFAULT_AVATARS,
  starClassName,
  overflowClassName = "bg-accent font-medium text-label",
  className,
}: CourseCardProps) {
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
        "relative rounded-card border border-border bg-white p-4",
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
        <div className="absolute bottom-[13px] left-2 flex gap-0.5">
          <Chip>{lessonCount} Lessons</Chip>
          <Chip>{durationLabel}</Chip>
          <Chip>{commentCount} Comments</Chip>
        </div>
      </div>

      {/* Rating — top-right of the content area */}
      <p className="absolute top-[232px] right-4 flex items-center text-label-l leading-7 font-medium text-black-400">
        {rating.toFixed(1)}
        <span className="[&>svg]:size-5">
          <StarIcon className={starClassName} />
        </span>
      </p>

      <div className="mt-[21px] flex flex-col gap-4">
        <div className="max-w-[237px]">
          <h3 className="truncate font-heading text-heading-xs leading-7 font-semibold text-heading">
            {title}
          </h3>
          <p className="text-body-xs leading-5 text-brand">by {creatorName}</p>
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
            overflowClassName={overflowClassName}
          />
        </div>

        <p className="flex items-end">
          <span className="font-heading text-heading-xs leading-6 font-semibold text-brand">
            ${price}
          </span>
          {priceSuffix && (
            <span className="text-body-xs leading-5 text-body">
              {priceSuffix}
            </span>
          )}
        </p>
      </div>
    </article>
  );
}