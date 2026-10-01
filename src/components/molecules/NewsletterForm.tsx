"use client";

import { useState, type FormEvent } from "react";

import { TextInput } from "../atoms/TextInput";
import { ButtonFooter } from "../atoms/ButtonFooter";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to your newsletter endpoint
    console.log("subscribe:", email);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <TextInput
        id="footer-email"
        type="email"
        name="email"
        label="Email address"
        placeholder="Enter your email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="sm:max-w-[320px]"
      />
      {/* Figma says "Search"; change to "Subscribe" if that's a slip */}
      <ButtonFooter type="submit" className="w-full sm:w-auto">
        Search
      </ButtonFooter>
    </form>
  );
}