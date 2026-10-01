import type { ReactNode } from "react";

/* -------------------------------------------------------------------------
 * Children / className wrappers
 * ---------------------------------------------------------------------- */
export type WithChildren = { children: ReactNode };
export type WithOptionalChildren = { children?: ReactNode };
export type WithClassName = { className?: string };
export type WithChildrenAndClassName = WithChildren & WithClassName;

/* -------------------------------------------------------------------------
 * Component variants (mirrors variants found in the Figma file)
 * ---------------------------------------------------------------------- */
export type ButtonVariant = "primary" | "secondary" | "outlined";
export type ButtonSize = "sm" | "md" | "lg";

export type CardVariant = "outlined" | "filled" | "plain" | "elevated";
export type CardPadding = "none" | "sm" | "md";

export type IconStyle = "outlined" | "filled" | "round";

/* -------------------------------------------------------------------------
 * Domain entities (content seen on the Home frame)
 * ---------------------------------------------------------------------- */
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  creatorName: string;
  categorySlug: string;
  level: CourseLevel;
  price: number; // USD, e.g. 25
  priceSuffix?: string; // e.g. "/lifetime"
  rating: number; // e.g. 4.5
  lessonCount: number; // e.g. 17
  durationLabel: string; // e.g. "2 hours 16 mins"
  commentCount: number; // e.g. 59
  studentCount?: number; // avatar stack label, e.g. 26
  imageUrl: string;
  imageAlt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconSrc?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Enthusiastic Learner"
  quote: string;
  avatarUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface FooterLinkGroup {
  title: string; // e.g. "Browse"
  links: NavItem[];
}

export interface Stat {
  value: string; // e.g. "12K"
  label: string; // e.g. "Students"
}

export interface Partner {
  id: string;
  name: string;
  logoSrc: string;
}

/* -------------------------------------------------------------------------
 * Mock data parameters
 * ---------------------------------------------------------------------- */
export interface MockParams {
  /** Number of items to generate. */
  count?: number;
  /** Deterministic seed so SSR and client output match. */
  seed?: number;
}

export interface CourseFilter {
  categorySlug?: string;
  level?: CourseLevel;
  query?: string;
}

export interface MockListParams<TFilter = Record<string, never>>
  extends MockParams {
  offset?: number;
  limit?: number;
  filter?: TFilter;
  /** Simulated latency for loading-state testing. */
  delayMs?: number;
}

export interface MockListResult<T> {
  items: T[];
  total: number;
  offset: number;
  limit: number;
}

export type MockFactory<T, P extends MockParams = MockParams> = (
  params?: P,
) => T[];

export type ChipTone = "glass" | "surface" | "accent";
export type ChipSize = "sm" | "md";

/* -------------------------------------------------------------------------
 * for creators cta section
 * ---------------------------------------------------------------------- */
export interface OrnamentItem {
  src: string;
  left: number;
  top: number;
  /** Square render size in px. */
  size: number;
  /** Flip horizontally (Figma: the white coil is mirrored). */
  mirrored?: boolean;
}

/* -------------------------------------------------------------------------
 * for Testimonial section
 * ---------------------------------------------------------------------- */

export type TestimonialWithAvatar = Testimonial & { avatarUrl: string };

/* -------------------------------------------------------------------------
 * for courses section
 * ---------------------------------------------------------------------- */

export interface CategoryTab {
  id: string; // matches Course.categorySlug (except the "featured" tab)
  label: string;
}