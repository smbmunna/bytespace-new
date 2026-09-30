import { CSSProperties } from "react";

export function place(
  left: number,
  top: number,
  width?: number,
  height?: number,
): CSSProperties {
  return { left, top, width, height };
}