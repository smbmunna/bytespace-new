import { LogoCloud } from "@/src/components/organisms/LogoCloud";
import { CourseExplorer } from "@/src/components/organisms/CourseExplorer";

import { FeatureShowcase } from "../components/organisms/FeatureShowcase";
import { CreatorCta } from "@/src/components/organisms/CreatorCta";
import { Testimonials } from "@/src/components/organisms/Testimonials";
import { Hero } from "../components/organisms/Hero";
import ExploreCategories from "../components/organisms/ExploreCategories";
import { Footer } from "../components/organisms/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <CourseExplorer />
      <ExploreCategories />
      <FeatureShowcase />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </div>
  );
}
