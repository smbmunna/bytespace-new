import type { Metadata } from "next";

import { AuthShowcase } from "@/src/components/organisms/AuthShowcase";
import { SignUpCard } from "@/src/components/organisms/SignUpCard";
import { AuthLayout } from "@/src/components/templates/AuthLayout";

export const metadata: Metadata = {
  title: "Create an account | ByteSpace",
  description: "Join ByteSpace for free and start learning or creating courses today.",
};

/**
 * Sign-up page — Figma › Design › "Register". Lives at /join so the existing
 * "Join Us", "Join as Creator" and "Create an account" links already point here.
 */
export default function JoinPage() {
  return (
    <AuthLayout
      card={<SignUpCard />}
      showcase={
        <AuthShowcase
          title="Sign up and come in"
          description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          
        />
      }
    />
  );
}