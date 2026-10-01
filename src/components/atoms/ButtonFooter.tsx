import type { ButtonHTMLAttributes } from "react";

export function ButtonFooter({
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`type-label-l inline-flex h-13 shrink-0 cursor-pointer items-center justify-center rounded-pill bg-accent px-8 text-heading transition-colors hover:bg-electric-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
      {...props}
    />
  );
}