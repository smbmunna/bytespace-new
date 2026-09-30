import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/src/lib/cn";
import type { ButtonSize, ButtonVariant } from "@/src/types";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonOwnProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonOwnProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-card whitespace-nowrap " +
  "select-none transition-[filter,background-color] duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " +
  "disabled:cursor-not-allowed disabled:border-transparent " +
  "disabled:bg-[#3D3D3D]/24 disabled:text-placeholder disabled:brightness-100";

/** Figma: violet fill / white text · lime fill / #242528 text · 1px #CED0D3 stroke / #4B4C53 text */
const variants: Record<ButtonVariant, string> = {
  primary: "bg-cta text-white hover:brightness-90",
  secondary: "bg-accent text-label hover:brightness-95",
  outlined:
    "border border-border bg-transparent text-shuttle-gray-700 hover:bg-surface",
};

/** Figma: lg 24×12 / Label L (46px) · md 24×8 / Label M (40px) · sm 16×8 / Label M (35px) */
const sizes: Record<ButtonSize, string> = {
  lg: "px-6 py-3 type-label-l",
  md: "min-h-10 px-6 py-2 type-label-m",
  sm: "px-4 py-2 type-label-m",
};

export function Button({
  variant = "primary",
  size = "lg",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (typeof rest.href === "string") {
    return (
      <Link {...rest} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" {...rest} className={classes}>
      {content}
    </button>
  );
}