"use client";

import Link from "next/link";
import type { FormEvent } from "react";

import { Button } from "@/src/components/atoms/Button";
import { TextField } from "@/src/components/atoms/TextField";
import { signUpWithEmail } from "@/src/lib/auth";
import { cn } from "@/src/lib/cn";
import { useAsyncAction } from "@/src/lib/useAsyncAction";

export interface SignUpCardProps {
  /** Where "Login" points. */
  signInHref?: string;
  className?: string;
}

/**
 * Sign-up card — Figma › Register › Register_Frame: 579px wide, white, radius 24,
 * 63px sides, 61px top, 51px bottom. Two blocks 122px apart:
 * heading + three fields + "Continue" (40px / 24px gaps) → "Already have an account? Login".
 * Submission calls the placeholder in `@/lib/auth` — connect your registration there.
 */
export function SignUpCard({ signInHref = "/sign-in", className }: SignUpCardProps) {
  const { pending, error, run } = useAsyncAction();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    void run(() =>
      signUpWithEmail({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        password: String(data.get("password") ?? ""),
      }),
    );
  }

  return (
    <section
      aria-labelledby="sign-up-heading"
      className={cn(
        "flex w-full flex-col gap-12 rounded-card bg-white px-6 py-10 lg:w-[579px] lg:gap-[122px] lg:px-[63px] lg:pt-[61px] lg:pb-[51px]",
        className,
      )}
    >
      <div className="flex flex-col gap-10">
        <div>
          <p className="type-label-l text-brand">Create an Account</p>
          <h1 id="sign-up-heading" className="font-semibold text-4xl text-label max-sm:text-heading-s!">
            Welcome to ByteSpace
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
          <TextField
            label="Full Name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jamie Davis"
            required
            disabled={pending}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            required
            disabled={pending}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="********"
            required
            disabled={pending}
          />

          {error && (
            <p role="alert" className="type-body-s w-full text-red-600">
              {error}
            </p>
          )}

          <Button type="submit" variant="secondary" size="lg" disabled={pending}>
            {pending ? "Creating account…" : "Continue"}
          </Button>
        </form>
      </div>

      <p className="flex items-center justify-center gap-1 text-body-m leading-6 text-black-400">
        Already have an account?
        <Link
          href={signInHref}
          className="font-medium text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Login
        </Link>
      </p>
    </section>
  );
}