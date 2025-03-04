import { HeroSection } from "@/components/home/hero-section";
import { ConceptSection } from "@/components/home/concept-section";
import { WorksSection } from "@/components/home/works-section";
import { ServiceSection } from "@/components/home/service-section";
import { InstallationFlowSection } from "@/components/home/installation-flow-section";
import { PriceGuideSection } from "@/components/home/price-guide-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <ServiceSection />
      <WorksSection />
      <InstallationFlowSection />
      <PriceGuideSection />
      <ContactSection />
    </>
  );
}
