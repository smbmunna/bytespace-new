import type { ReactNode } from "react";

/* -------------------------------------------------------------------------
 * Children / className wrappers
 * ---------------------------------------------------------------------- */
export type WithChildren = { children: ReactNode };
export type WithOptionalChildren = { children?: ReactNode };
export type WithClassName = { className?: string };
export type WithChildrenAndClassName = WithChildren & WithClassName;
