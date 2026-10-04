import Link from "next/link";
import type { ReactNode } from "react";

import { GridOverlay } from "@/src/components/atoms/GridOverlay";
import { AuthLogoMark } from "@/src/components/atoms/AuthLogoMark";

export interface AuthLayoutProps {
  /** The white form card (right column on desktop). */
  card: ReactNode;
  /** Tagline + collage (left column on desktop). */
  showcase: ReactNode;
}

/**
 * Shared shell of the sign-in and sign-up pages — Figma › Login / Register (1440 × 1024,
 * Persian Blue/800, 12% grid overlay). Logo mark only (no nav) at (122, 35); content starts
 * at y 120 in two columns: showcase left, 579px card right (on the 1320px content edge).
 * DOM order is card → showcase so the form comes first on mobile.
 */
export function AuthLayout({ card, showcase }: AuthLayoutProps) {
  return (
    <div className="relative isolate overflow-hidden bg-brand lg:min-h-[1024px]">
      <GridOverlay />

      <div className="container-content relative">
        <Link
          href="/"
          className="absolute top-[35px] left-0.5 z-10 rounded-media focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <AuthLogoMark />
          <span className="sr-only">ByteSpace home</span>
        </Link>

        <main className="grid grid-cols-1 gap-10 pt-28 pb-16 lg:grid-cols-[1fr_579px] lg:gap-0 lg:pt-[120px] lg:pb-[120px]">
          <div className="lg:col-start-2 lg:row-start-1">{card}</div>
          <div className="lg:col-start-1 lg:row-start-1">{showcase}</div>
        </main>
      </div>
    </div>
  );
}