import { useId, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/src/lib/cn";

export interface TextFieldProps extends Omit<ComponentPropsWithoutRef<"input">, "className"> {
  label: string;
  className?: string;
}

/**
 * Labelled input — Figma › Login: Label S (14, #242528) → 8px → input 52px tall,
 * 12px radius, 1px #E5E6E8 border, 24×12 padding, Body L text, #82868E placeholder.
 */
export function TextField({ label, id, className, ...rest }: TextFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <label htmlFor={inputId} className="text-label-s leading-5 font-medium text-label">
        {label}
      </label>
      <input
        id={inputId}
        className="type-body-l w-full rounded-media border border-shuttle-gray-100 bg-white px-6 py-3 text-label outline-none transition-colors placeholder:text-shuttle-gray-400 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-60"
        {...rest}
      />
    </div>
  );
}