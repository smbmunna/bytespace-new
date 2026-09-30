export type ClassValue = string | false | null | undefined;

/** Tiny classnames joiner (no dependencies). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}