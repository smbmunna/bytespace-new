import { LogoCloud } from "@/src/components/organisms/LogoCloud";
import { CourseExplorer } from "@/src/components/organisms/CourseExplorer";
import { FeatureShowcase } from "../components/organisms/FeatureShowcase";
import { CreatorCta } from "@/src/components/organisms/CreatorCta";
import { Testimonials } from "@/src/components/organisms/Testimonials";
import { Hero } from "../components/organisms/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <CourseExplorer />
      <FeatureShowcase />
      <CreatorCta />
      <Testimonials />
    </div>
  );
}
