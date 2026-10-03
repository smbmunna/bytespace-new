import type { Metadata } from "next";

import { Button } from "@/src/components/atoms/Button";
import { GridOverlay } from "@/src/components/atoms/GridOverlay";
import { Header } from "@/src/components/molecules/Header";
import { Footer } from "@/src/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Page not found | ByteSpace",
  description: "The page you are looking for doesn’t exist.",
};

const COPY = {
  code: "404",
  title: "The page you are looking for doesn’t exist",
  description: "Try to use a correct url or go back to homepage to start again",
  button: "Back to Home",
} as const;


const CODE_FADE =
  "linear-gradient(180deg, rgb(212 251 32 / 1) 0%, rgb(212 251 32 / 0.96) 25%, rgb(212 251 32 / 0.81) 50%, rgb(212 251 32 / 0.61) 68%, rgb(212 251 32 / 0) 100%)";

  export default function NotFound() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-brand">
        <Header />
        <GridOverlay className="z-10" />

        <main className="relative flex flex-col items-center px-4 pt-[max(7.5rem,min(11.111vw,10rem))] pb-[125px] text-center">
          {/* Decorative digits — the <h1> below carries the accessible "404" */}
          <p
            aria-hidden="true"
            className="relative z-0 -mb-[0.248em] bg-clip-text font-heading text-[min(33.333vw,480px)] leading-none font-semibold tracking-[-0.01em] text-transparent select-none"
            style={{ backgroundImage: CODE_FADE }}
          >
            {COPY.code}
          </p>

          <div className="relative z-20 flex flex-col items-center gap-8">
            <h1 className="type-heading-l max-w-hero-title text-white max-lg:text-heading-m! max-sm:text-heading-s!">
              <span className="sr-only">{COPY.code} – </span>
              {COPY.title}
            </h1>
            <p className="type-body-l max-w-xl text-shuttle-gray-100">{COPY.description}</p>
            <Button href="/" variant="secondary" size="lg">
              {COPY.button}
            </Button>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}