import type { Metadata } from "next";

import { SignInCard } from "@/src/components/organisms/SignInCard";
import { AuthShowcase } from "@/src/components/organisms/AuthShowcase";
import { AuthLayout } from "@/src/components/templates/AuthLayout";

export const metadata: Metadata = {
  title: "Sign in | ByteSpace",
  description: "Sign in to ByteSpace and pick up your learning where you left off.",
};

export default function SignInPage() {
  return (
    <AuthLayout
      card={<SignInCard />}
      showcase={
        <AuthShowcase
          title="Sign in with ease"
          description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        />
      }
    />
  );
}