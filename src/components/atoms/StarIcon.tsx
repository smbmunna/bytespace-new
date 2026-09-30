import { cn } from "@/src/lib/cn";

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 -960 960 960"
      className={cn("size-4 shrink-0 fill-current", className)}
    >
      <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
    </svg>
  );
}
