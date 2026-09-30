import { cn } from "@/src/lib/cn";
import { Header } from "../molecules/Header";
import { Stage } from "../atoms/Stage";
import { place } from "../atoms/Place";
import { HeroSearch } from "../molecules/HeroSearch";
import Image from "next/image";
import { LearningProgressCard } from "../molecules/LearningProgressCard";
import { HappyStudentsCard } from "../molecules/HappyStudentsCard";
import { FeaturedTopicCard } from "../molecules/FeaturedTopicCard";

export interface HeroProps {  
  searchAction?: string;
  className?: string;
}


//Contents
export const COPY = {
  title: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  searchPlaceholder: "Course, topic, creator",
  searchLabel: "Search courses, topics or creators",
  searchButton: "Search",
  imageAlt: "Smiling student wearing headphones and holding a laptop",
} as const;

const ORNAMENTS = [
  {
    src: "/images/hero/ornament-coil-lime.webp",    
    left: -122,
    top: 221,
    size: 386,
  },
  {
    src: "/images/hero/ornament-cylinder-lime.svg",
    left: 1160,
    top: 220,
    size: 350,
  },
  {
    src: "/images/hero/ornament-pyramid-lime.png",
    left: 1104,
    top: 464,
    size: 188,
  },
  {
    src: "/images/hero/ornament-coil-white.svg",
    left: 230,
    top: 510,
    size: 175,
  },
  {    
    src: "/images/hero/ornament-coil-lime-2.svg",
    left: 1124,
    top: 672,
    size: 331,
  },
  {
    src: "/images/hero/ornament-torus-lime.svg",
    left: 14,
    top: 681,
    size: 343,
  },
] as const;

/** Figma drop-shadow stack on the student image (8 layers, black). */
const IMAGE_SHADOW = [
  "drop-shadow(0.52px 0.74px 3.04px rgb(0 0 0 / 0.04))",
  "drop-shadow(2.23px 3.19px 5.72px rgb(0 0 0 / 0.06))",
  "drop-shadow(5.38px 7.69px 9.57px rgb(0 0 0 / 0.07))",
  "drop-shadow(10.21px 14.58px 16.09px rgb(0 0 0 / 0.08))",
  "drop-shadow(16.95px 24.21px 24px rgb(0 0 0 / 0.09))",
  "drop-shadow(25.84px 36.91px 36px rgb(0 0 0 / 0.1))",
  "drop-shadow(37.12px 53.03px 56px rgb(0 0 0 / 0.11))",
  "drop-shadow(51.04px 72.91px 72px rgb(0 0 0 / 0.13))",
].join(" ");



export function Hero({ searchAction = "/courses", className }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate overflow-hidden bg-brand lg:min-h-[1024px]",
        className,
      )}
    >
      <Header />

      {/* 12-col grid overlay: 2px white lines every 120px @ 12% opacity, anchored to center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#fff_0_2px,transparent_2px),linear-gradient(to_bottom,#fff_0_2px,transparent_2px)] [background-position:calc(50%+60px)_0] [background-size:120px_120px]"
      />      

      {/* Lime ring (Figma › Ellipse 7: 1149px circle, 320px inside stroke, #CBFC01) */}
      <Stage>
        <div
          className="absolute rounded-full border-[320px] border-electric-lime-500"
          style={place(145, 582, 1149, 1149)}
        />
      </Stage>

      {/* Text block: H1 → 32px → subtext → 60px → search */}
      <div className="container-content relative z-10 flex flex-col items-center gap-[60px] pt-36 text-center lg:pt-[169px]">
        <div className="flex flex-col items-center gap-8">
          <h1
            id="hero-heading"
            className="type-heading-l max-w-hero-title text-white max-lg:text-heading-m! max-sm:text-heading-s!"
          >
            {COPY.title}
          </h1>
          <p className="type-body-l max-w-hero-text text-placeholder">
            {COPY.description}
          </p>
        </div>
        <HeroSearch action={searchAction} />
      </div>

      {/* Student cut-out: 578 × 541 @ (431, 512) — bleeds off the bottom edge on desktop */}
      <div className="relative z-20 mx-auto mt-12 w-[578px] max-w-[90%] lg:absolute lg:top-[512px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
        <Image
          src="/images/hero/hero-student.webp"
          alt={COPY.imageAlt}
          width={578}
          height={541}
          priority
          sizes="(min-width: 1024px) 578px, 90vw"
          className="h-auto w-full"
          style={{ filter: IMAGE_SHADOW }}
        />
      </div>

      {/* Ornaments + floating cards (desktop only) */}
      <Stage className="z-30">
        <LearningProgressCard />
        <HappyStudentsCard />
        {ORNAMENTS.map(({ src, left, top, size }) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={size}
            height={size}
            className="absolute max-w-none"
            style={place(left, top, size, size)}
          />
        ))}
        <FeaturedTopicCard />
      </Stage>
    </section>
  );
}