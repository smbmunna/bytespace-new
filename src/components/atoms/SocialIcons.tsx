import { cn } from "@/src/lib/cn";

interface IconProps {
  className?: string;
}

/** Facebook "f" mark — exact Figma vector (40 × 40 frame, black). */
export function FacebookIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={cn("size-10 shrink-0 fill-current", className)}>
      <path d="M36.67 20C36.67 10.8 29.2 3.33 20 3.33C10.8 3.33 3.33 10.8 3.33 20C3.33 28.32 9.43 35.21 17.4 36.46L17.4 24.82L13.16 24.82L13.16 20L17.4 20L17.4 16.33C17.4 12.15 19.88 9.84 23.69 9.84C25.51 9.84 27.42 10.17 27.42 10.17L27.42 14.27L25.32 14.27C23.25 14.27 22.6 15.56 22.6 16.87L22.6 20L27.23 20L26.49 24.82L22.6 24.82L22.6 36.46C30.57 35.21 36.67 28.32 36.67 20Z" />
    </svg>
  );
}

/** Google "G" mark — exact Figma vectors (40 × 40 frame, black). */
export function GoogleIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={cn("size-10 shrink-0 fill-current stroke-current", className)}
      strokeWidth={0.15}
    >
      <path d="M35.96 20.37C35.96 19.28 35.86 18.24 35.69 17.22L20 17.22L20 23.49L28.99 23.49C28.58 25.54 27.4 27.28 25.65 28.46L25.65 32.62L31.01 32.62C34.15 29.72 35.96 25.44 35.96 20.37Z" />
      <path d="M20 9.93C22.46 9.93 24.65 10.78 26.39 12.43L31.14 7.68C28.26 4.99 24.5 3.33 20 3.33C13.49 3.33 7.86 7.08 5.12 12.53L10.65 16.82C11.97 12.86 15.65 9.93 20 9.93Z" />
      <path
        fillRule="evenodd"
        d="M20 36.67C13.49 36.67 7.86 32.92 5.12 27.47L10.65 23.18C11.97 27.14 15.65 30.07 20 30.07C22.25 30.07 24.15 29.46 25.65 28.46L31.01 32.62C28.26 35.17 24.5 36.67 20 36.67ZM10.65 16.82L10.65 12.53L5.12 12.53L10.65 16.82Z"
      />
      <path d="M5.12 23.18L10.65 23.18C10.31 22.18 10.12 21.11 10.12 20C10.12 18.89 10.32 17.82 10.65 16.82L5.12 12.53C3.99 14.78 3.33 17.31 3.33 20C3.33 22.69 3.99 25.22 5.12 27.47L5.12 23.18Z" />
      <path d="M10.65 23.18L5.12 23.18L5.12 27.47L10.65 23.18Z" />
    </svg>
  );
}