import { cn } from "@/src/lib/cn";


export function GridOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#fff_0_2px,transparent_2px),linear-gradient(to_bottom,#fff_0_2px,transparent_2px)] [background-position:calc(50%+60px)_0] [background-size:120px_120px]",
        className,
      )}
    />
  );
}