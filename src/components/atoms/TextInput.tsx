import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string };

export function TextInput({ label, id, className = "", ...props }: Props) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        className={`type-body-m h-13 w-full min-w-0 rounded-pill border border-border-input bg-white px-5 text-label placeholder:text-label focus-visible:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
        {...props}
      />
    </>
  );
}