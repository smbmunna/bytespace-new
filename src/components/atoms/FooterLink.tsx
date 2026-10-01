import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link>;

export function FooterLink({ className = "", ...props }: Props) {
  return (
    <Link
      className={`rounded-sm transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
      {...props}
    />
  );
}