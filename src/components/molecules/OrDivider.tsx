import { cn } from "@/src/lib/cn";

/** Figma › Frame 18: two 1px #D1D1D1 rules around an "or" (#888888, Body L), 11px gaps. */
export function OrDivider({ label = "or", className }: { label?: string; className?: string }) {
  return (
    <div role="separator" aria-label={label} className={cn("flex w-full items-center gap-[11px]", className)}>
      <span aria-hidden="true" className="h-px flex-1 bg-border-input" />
      <span aria-hidden="true" className="type-body-l text-black-400">
        {label}
      </span>
      <span aria-hidden="true" className="h-px flex-1 bg-border-input" />
    </div>
  );
}