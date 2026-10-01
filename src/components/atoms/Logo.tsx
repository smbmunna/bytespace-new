import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={`inline-flex items-center gap-2 text-label ${className}`}
    >
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none" aria-hidden="true">
        <path
          d="M0 4.5C0 2 2 0 4.5 0h1C8 0 9 1.5 9 3.5V9h6.5C20.2 9 24 12.8 24 17.5S20.2 26 15.5 26H4.5C2 26 0 24 0 21.5v-17Z"
          fill="var(--color-accent)"
        />
        <path d="M9.5 14.2v7.6l6-3.8-6-3.8Z" fill="var(--color-label)" />
      </svg>
      <span className="type-logo">ByteSpace</span>
    </Link>
  );
}