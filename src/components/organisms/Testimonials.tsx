"use client";

import { motion } from "framer-motion";

import { GlowBlob, type GlowBlobProps } from "@/src/components/atoms/GlowBlob";
import { TestimonialCard } from "@/src/components/molecules/TestimonialCard";
import { TESTIMONIALS } from "@/src/data/testimonials";
import { cn } from "@/src/lib/cn";
import type { TestimonialWithAvatar } from "@/src/types";

const COPY = {
  title: "Discover What Our Community Is Saying",
  description:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
} as const;

/** Soft background glows — Figma › Testimonials_Frame › Ellipse 8/11/12 (1440-wide frame space). */
const GLOWS: GlowBlobProps[] = [
  { color: "blue", left: -442, top: 149, size: 1137, opacity: 0.24 },
  { color: "lime", left: 842, top: -241, size: 1137, opacity: 0.4 },
  { color: "lime", left: 395, top: -138, size: 672, opacity: 0.6 },
];

export interface TestimonialsProps {
  items?: TestimonialWithAvatar[];
  className?: string;
}

export function Testimonials({ items = TESTIMONIALS, className }: TestimonialsProps) {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className={cn("relative isolate overflow-hidden bg-surface-alt py-[74px]", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-full w-[1440px] -translate-x-1/2"
      >
        {GLOWS.map((glow) => (
          <GlowBlob key={`${glow.color}-${glow.left}-${glow.top}`} {...glow} />
        ))}
      </div>

      <div className="container-content flex flex-col gap-section-gap">
        {/* Header content with fade-in and slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]"
        >
          <h2 id="testimonials-heading" className="font-bold text-4xl lg:w-[577px] lg:shrink-0">
            {COPY.title}
          </h2>
          <p className="type-body-l text-body lg:w-[580px] lg:shrink-0">{COPY.description}</p>
        </motion.div>

        {/* Testimonial cards grid with staggered entrance animations */}
        <div className="flex flex-col items-stretch gap-6 md:flex-row md:flex-wrap md:items-start md:gap-[41px]">
          {items.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Staggers each card appearance slightly
                ease: "easeOut",
              }}
              className="flex-1 min-w-[300px]"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}