import { cn } from "@/src/lib/cn";
import { ReactNode } from "react";

export function Stage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 left-1/2 hidden h-[1024px] w-[1440px] -translate-x-1/2 lg:block",
        className,
      )}
    >
      {children}
    </div>
  );
}
