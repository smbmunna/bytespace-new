import Image from "next/image";

import { CourseCard } from "@/src/components/molecules/CourseCard";
import { ProgressCard } from "@/src/components/molecules/ProgressCard";
import { ShowcaseCopy } from "@/src/components/molecules/ShowcaseCopy";
import { StatItem } from "@/src/components/molecules/StatItem";
import { FEATURED_COURSE, GROWTH_STATS } from "@/src/data/showcase";
import { CUTOUT_SHADOW } from "@/src/lib/shadows";

/**
 * Row A — "Your Path to Professional Growth Starts Here!"
 * Figma › Frame 13: text column 574px + 63px gap + 621 × 552 visual (1258px total,
 * so the visual slightly overhangs the 1200px container on the right).
 * Visual z-order: course card < student photo < progress card < lime coil.
 */
export function GrowthShowcaseRow() {
  return (
    <div className="flex flex-col items-center gap-10 xl:flex-row xl:gap-[63px]">
      <ShowcaseCopy
        className="w-full xl:w-[574px] xl:shrink-0"
        title="Your Path to Professional Growth Starts Here!"
        description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
        descriptionClassName="max-w-[477px]"
      >
        <div className="flex items-end gap-14">
          {GROWTH_STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </ShowcaseCopy>

      <div className="relative h-[552px] w-[621px] shrink-0 max-md:[zoom:0.55]">
        <CourseCard course={FEATURED_COURSE} className="absolute top-0 left-0 w-[373px]" />

        <Image
          src="/images/hero/hero-student.webp"
          alt="Smiling student wearing headphones and holding a laptop"
          width={577}
          height={540}
          sizes="577px"
          className="absolute top-3 left-0 h-[540px] w-[577px] max-w-none"
          style={{ filter: CUTOUT_SHADOW }}
          loading="eager"
        />

        <ProgressCard
          label="Learning Progress"
          value={55}
          className="absolute top-[213px] left-[345px]"
        />

        <Image
          src="/images/hero/ornament-coil-lime-2.webp"
          alt=""
          width={216}
          height={216}
          sizes="216px"
          className="pointer-events-none absolute top-[67px] left-[404px] size-[216px] max-w-none"
        />
      </div>
    </div>
  );
}