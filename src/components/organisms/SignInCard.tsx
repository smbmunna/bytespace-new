"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { Button } from "@/src/components/atoms/Button";
import { TextField } from "@/src/components/atoms/TextField";
import { OrDivider } from "@/src/components/molecules/OrDivider";
import { SocialButton } from "@/src/components/molecules/SocialButton";
import { signInWithEmail, signInWithProvider } from "@/src/lib/auth";
import { cn } from "@/src/lib/cn";
import type { SocialProvider } from "@/src/types";

export interface SignInCardProps {
  /** Where "Create an account" points. */
  createAccountHref?: string;
  className?: string;
}

/**
 * Sign-in card — Figma › Login › Register_Frame: 579px wide, white, radius 24,
 * 63px side / 61px top / 40px bottom padding. Three blocks 73px apart:
 * heading + form (40px gap) → "or" divider + social buttons (40px gap) → "New user?" row.
 * Submission calls the placeholders in `@/lib/auth` — connect your auth there.
 */
export function SignInCard({ createAccountHref = "/join", className }: SignInCardProps) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run(task: () => Promise<void>) {
    setPending(true);
    setError(null);
    try {
      await task();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    void run(() =>
      signInWithEmail({
        email: String(data.get("email") ?? ""),
        password: String(data.get("password") ?? ""),
      }),
    );
  }

  function handleSocial(provider: SocialProvider) {
    void run(() => signInWithProvider(provider));
  }

  return (
    <section
      aria-labelledby="sign-in-heading"
      className={cn(
        "flex w-full flex-col gap-12 rounded-card bg-white px-6 py-10 lg:w-[579px] lg:gap-[73px] lg:px-[63px] lg:pt-[61px] lg:pb-10",
        className,
      )}
    >
      <div className="flex flex-col gap-10">
        <div>
          <p className="type-label-l text-brand">Sign In</p>
          <h1 id="sign-in-heading" className="type-heading-m text-label max-sm:text-heading-s!">
            Welcome Back
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
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
            autoComplete="current-password"
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
            {pending ? "Signing in…" : "Sign In"}
          </Button>
        </form>
      </div>

      <div className="flex flex-col items-center gap-10">
        <OrDivider />
        <div className="flex items-center gap-4">
          <SocialButton provider="facebook" disabled={pending} onClick={() => handleSocial("facebook")} />
          <SocialButton provider="google" disabled={pending} onClick={() => handleSocial("google")} />
        </div>
      </div>

      <p className="flex items-center justify-center gap-1 text-body-m leading-6 text-black-400">
        New user?
        <Link
          href={createAccountHref}
          className="font-medium text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Create an account
        </Link>
      </p>
    </section>
  );
}