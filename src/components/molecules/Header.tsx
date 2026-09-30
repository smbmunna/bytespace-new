import Link from "next/link";

import { cn } from "@/src/lib/cn";
import type { NavItem } from "@/src/types";


const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const ACCOUNT_NAV: NavItem[] = [
  { label: "Sign In", href: "/sign-in" },
  { label: "Join Us", href: "/join" },
];

/* -------------------------------------------------------------------------
 * Icons
 * ---------------------------------------------------------------------- */
function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28.875 31.5"
      className="h-[31px] w-[28px] shrink-0 fill-accent-button"
    >
      <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0L0 21C0 26.799 4.701 31.5 10.5 31.5L10.5 10.5Z" />
      <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21L21 21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" />
      <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21L21 21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" />
    </svg>
  );
}

/** Material Symbols "shopping_bag" (Outlined)*/
function BagIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 -960 960 960"
      className={cn("size-6 shrink-0 fill-current", className)}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 -960 960 960" className="size-6 fill-current">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Header
 * ---------------------------------------------------------------------- */
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export interface HeaderProps {
  navItems?: NavItem[];
  accountItems?: NavItem[];
  cartHref?: string;
  className?: string;
}

export function Header({
  navItems = MAIN_NAV,
  accountItems = ACCOUNT_NAV,
  cartHref = "/cart",
  className,
}: HeaderProps) {
  return (
    <header className={cn("absolute inset-x-0 top-0 z-40", className)}>
      <div className="container-content grid h-[120px] grid-cols-[1fr_auto] items-start md:grid-cols-[1fr_auto_1fr]">
        {/* Logo — Figma: x 122, y 35; wordmark sits 7px below the mark's top */}
        <Link
          href="/"
          className={cn(
            "mt-[35px] ml-0.5 flex items-start gap-[9px] justify-self-start",
            focusRing,
          )}
        >
          <LogoMark />
          <span className="type-logo mt-2.5 text-on-dark">ByteSpace</span>
        </Link>

        {/* Center nav — Figma: y 47, gap 24, centered on the 1440 frame */}
        <nav aria-label="Primary" className="mt-[47px] hidden items-center gap-6 md:flex">
          {navItems.map(({ label, href, active }) => (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "type-body-m transition-colors",
                active
                  ? "font-bold! text-on-dark"
                  : "text-on-dark-muted hover:text-on-dark",
                focusRing,
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right group — Figma: y 48, ends at the 1320px content edge */}
        <div className="mt-12 hidden items-center gap-6 justify-self-end md:flex">
          <nav aria-label="Account" className="flex items-center gap-6">
            {accountItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "type-body-m text-on-dark-muted transition-colors hover:text-on-dark",
                  focusRing,
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href={cartHref}
            aria-label="Shopping bag"
            className={cn("text-on-dark-muted transition-colors hover:text-on-dark", focusRing)}
          >
            <BagIcon />
          </Link>
        </div>

        {/* Mobile menu (not in Figma — desktop-only design) */}
        <details className="group relative mt-[34px] justify-self-end md:hidden">
          <summary
            aria-label="Toggle menu"
            className={cn(
              "grid size-8 cursor-pointer list-none place-items-center rounded-media text-on-dark [&::-webkit-details-marker]:hidden",
              focusRing,
            )}
          >
            <MenuIcon />
          </summary>
          <div className="absolute top-full right-0 z-50 mt-3 flex w-56 flex-col gap-1 rounded-card border border-border bg-white p-3">
            {[...navItems, ...accountItems, { label: "Shopping bag", href: cartHref }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={"active" in item && item.active ? "page" : undefined}
                  className={cn(
                    "type-body-m rounded-media px-3 py-2 text-body hover:bg-surface",
                    "active" in item && item.active && "font-bold! text-heading",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </details>
      </div>
    </header>
  );
}