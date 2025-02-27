import { HeroSection } from "@/components/home/hero-section";
import { ConceptSection } from "@/components/home/concept-section";
import { WorksSection } from "@/components/home/works-section";
import { ServiceSection } from "@/components/home/service-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <WorksSection />
      <ServiceSection />
    </>
  );
}
