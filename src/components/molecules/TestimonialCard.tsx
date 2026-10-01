import { Avatar } from "@/src/components/atoms/Avatar";
import { cn } from "@/src/lib/cn";
import type { TestimonialWithAvatar } from "@/src/types";

export interface TestimonialCardProps {
  testimonial: TestimonialWithAvatar;
  className?: string;
}


export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const { name, role, quote, avatarUrl } = testimonial;

  return (
    <figure
      className={cn(
        "flex w-full flex-col gap-6 rounded-card bg-white p-6 md:w-[374px] md:shrink-0",
        className,
      )}
    >
      <Avatar src={avatarUrl} size={80} alt={`Portrait of ${name}`} />

      <figcaption>
        <p className="type-heading-xs text-heading">{name}</p>
        <p className="type-body-l text-brand">{role}</p>
      </figcaption>

      <blockquote className="type-body-l text-body">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
    </figure>
  );
}