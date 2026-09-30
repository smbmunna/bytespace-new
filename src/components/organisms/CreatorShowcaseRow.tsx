import Image from "next/image";

import { FeatureListItem } from "@/src/components/molecules/FeatureListItem";
import { RevenueCard } from "@/src/components/molecules/RevenueCard";
import { ShowcaseCopy } from "@/src/components/molecules/ShowcaseCopy";
import { StudentsRatingCard } from "@/src/components/molecules/StudentsRatingCard";
import { CREATOR_FEATURES, STUDENT_AVATARS } from "@/src/data/showcase";
import { CUTOUT_SHADOW } from "@/src/lib/shadows";

/**
 * Row B — "Create & Manage Courses Easily."
 * Figma › Frame 14: 541 × 596 visual + 79px gap + 580px text column (= 1200px).
 * DOM order is visual → text; on small screens the text is shown first.
 * Visual z-order: revenue cards < creator photo < students card < lime coil.
 */
export function CreatorShowcaseRow() {
  return (
    <div className="flex flex-col-reverse items-center gap-10 xl:flex-row xl:gap-[79px]">
      <div className="relative h-[596px] w-[541px] shrink-0 max-md:[zoom:0.55]">
        <RevenueCard
          className="absolute top-11 left-0 w-[232px]"
          title="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          delta="+12$"
          progress={56}
        />
        <RevenueCard
          className="absolute top-[194px] left-0"
          title="Year to Date"
          period="2023"
          amount="$1,200.38"
          delta="+12$"
        />

        <Image
          src="/images/showcase/creator-tablet.webp"
          alt="Smiling course creator wearing a headset and holding a tablet"
          width={435}
          height={596}
          sizes="435px"
          className="absolute top-0 left-7 h-[596px] w-[435px] max-w-none"
          style={{ filter: CUTOUT_SHADOW }}
        />

        <StudentsRatingCard
          className="absolute top-[413px] left-[283px]"
          title="Happy Students"
          rating="4.5 (240)"
          avatars={STUDENT_AVATARS}
          overflowLabel="2K+"
        />

        <Image
          src="/images/hero/ornament-coil-lime.webp"
          alt=""
          width={216}
          height={216}
          sizes="216px"
          className="pointer-events-none absolute top-[114px] left-[303px] size-[216px] max-w-none"
        />
      </div>

      <ShowcaseCopy
        className="w-full xl:w-[580px] xl:shrink-0"
        title="Create & Manage Courses Easily."
        description={
          <>
            <strong className="font-bold text-label">ByteSpace</strong> supports individuals or
            entities in the creation, publication, and administration of educational courses.
          </>
        }
      >
        <ul className="flex flex-col gap-4">
          {CREATOR_FEATURES.map((feature) => (
            <FeatureListItem key={feature}>{feature}</FeatureListItem>
          ))}
        </ul>
      </ShowcaseCopy>
    </div>
  );
}