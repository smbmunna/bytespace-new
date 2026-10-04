import { cn } from "@/src/lib/cn";

/**
 * ByteSpace logo mark — exact Figma vector paths (28 × 31).
 * Color comes from `fill-*`: lime on the auth pages (#D4FB20), Mindaro in the header.
 */
export function AuthLogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28.875 31.5"
      className={cn("h-[31px] w-[28px] shrink-0 fill-accent", className)}
    >
      <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0L0 21C0 26.799 4.701 31.5 10.5 31.5L10.5 10.5Z" />
      <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21L21 21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" />
      <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21L21 21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" />
    </svg>
  );
}