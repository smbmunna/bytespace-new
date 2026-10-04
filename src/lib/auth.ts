import type { SignInValues, SocialProvider,SignUpValues } from "@/src/types";


export async function signInWithEmail(values: SignInValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.info("[auth] signInWithEmail is not connected yet", { email: values.email });
}

export async function signInWithProvider(provider: SocialProvider): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  console.info("[auth] signInWithProvider is not connected yet", { provider });
}

export async function signUpWithEmail(values: SignUpValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.info("[auth] signUpWithEmail is not connected yet", { email: values.email });
}