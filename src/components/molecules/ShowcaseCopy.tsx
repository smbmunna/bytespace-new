import type { ReactNode } from "react";

import { cn } from "@/src/lib/cn";

export interface ShowcaseCopyProps {
  title: string;
  description: ReactNode;
  /** e.g. "max-w-[477px]" — the first row's paragraph is narrower than its heading. */
  descriptionClassName?: string;
  /** Stats or feature list, rendered after the paragraph. */
  children?: ReactNode;
  className?: string;
}

/** Text column of a showcase row: H2 (Heading M) → 40px → paragraph (Body L) → 40px → extras. */
export function ShowcaseCopy({
  title,
  description,
  descriptionClassName,
  children,
  className,
}: ShowcaseCopyProps) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <h2 className="font-bold text-4xl">{title}</h2>
      <p className={cn("type-body-l text-body", descriptionClassName)}>{description}</p>
      {children}
    </div>
  );
}