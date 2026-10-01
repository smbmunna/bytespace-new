import { FeatureShowcase } from "../components/organisms/FeatureShowcase";
import { CreatorCta } from "@/src/components/organisms/CreatorCta";
import { Hero } from "../components/organisms/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureShowcase />
      <CreatorCta />
    </div>
  );
}
