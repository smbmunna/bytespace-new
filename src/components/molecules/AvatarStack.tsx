import { Avatar } from "@/src/components/atoms/Avatar";
import { cn } from "@/src/lib/cn";

export interface AvatarStackProps {
  avatars: readonly string[];
  /** Avatar diameter in px. */
  size?: number;
  /** How far each avatar overlaps the previous one, in px. */
  overlap?: number;
  ring?: boolean;
  /** Optional trailing bubble, e.g. "2K+" or "26+". */
  overflowLabel?: string;
  /** Bubble colors / weight, e.g. "bg-accent text-label font-bold". */
  overflowClassName?: string;
  className?: string;
}

export function AvatarStack({
  avatars,
  size = 32,
  overlap = 8,
  ring = false,
  overflowLabel,
  overflowClassName,
  className,
}: AvatarStackProps) {
  return (
    <div aria-hidden="true" className={cn("flex items-center", className)}>
      {avatars.map((src, i) => (
        <span key={src} className="shrink-0" style={{ marginLeft: i === 0 ? 0 : -overlap }}>
          <Avatar src={src} size={size} ring={ring} />
        </span>
      ))}
      {overflowLabel && (
        <span
          className={cn(
            "grid shrink-0 place-items-center rounded-full text-body-xs",
            ring && "border-2 border-white",
            overflowClassName,
          )}
          style={{ width: size, height: size, marginLeft: avatars.length ? -overlap : 0 }}
        >
          {overflowLabel}
        </span>
      )}
    </div>
  );
}