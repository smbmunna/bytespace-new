import type { ComponentPropsWithoutRef } from "react";

import { FacebookIcon, GoogleIcon } from "@/src/components/atoms/SocialIcons";
import { cn } from "@/src/lib/cn";
import type { SocialProvider } from "@/src/types";

const PROVIDERS: Record<SocialProvider, { label: string; Icon: typeof FacebookIcon }> = {
  facebook: { label: "Continue with Facebook", Icon: FacebookIcon },
  google: { label: "Continue with Google", Icon: GoogleIcon },
};

export interface SocialButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children" | "aria-label"> {
  provider: SocialProvider;
}

/** Figma › Login social button: 72 × 72, radius 24, 1px #D1D1D1 border, 40px black icon. */
export function SocialButton({ provider, className, ...rest }: SocialButtonProps) {
  const { label, Icon } = PROVIDERS[provider];

  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "grid size-[72px] cursor-pointer place-items-center rounded-card border border-border-input bg-white text-black transition-colors hover:bg-surface",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...rest}
    >
      <Icon />
    </button>
  );
}