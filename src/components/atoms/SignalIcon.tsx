import { cn } from "@/src/lib/cn";

/** "signal_cellular_alt" — three ascending bars, used for the course level badge (20px). */
export function SignalIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={cn("size-5 shrink-0 fill-current", className)}
    >
      <rect x="2.5" y="11.5" width="3.5" height="6" rx="1" />
      <rect x="8.25" y="7" width="3.5" height="10.5" rx="1" />
      <rect x="14" y="2.5" width="3.5" height="15" rx="1" />
    </svg>
  );
}