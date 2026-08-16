import { Hero } from "@/components/home/Hero";
import { AISuite } from "@/components/home/AISuite";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { BusinessSolutions } from "@/components/home/BusinessSolutions";
import { AIPlatform } from "@/components/home/AIPlatform";
import { Integrations } from "@/components/home/Integrations";
import { DeploySteps } from "@/components/home/DeploySteps";
import { Industries } from "@/components/home/Industries";
import { TrustSection } from "@/components/home/TrustSection";
import { StatsBand } from "@/components/home/StatsBand";
import { FAQ } from "@/components/home/FAQ";
import { ContactForm } from "@/components/home/ContactForm";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AISuite />
      <ProductsGrid />
      <BusinessSolutions />
      <AIPlatform />
      <Integrations />
      <DeploySteps />
      <Industries />
      <TrustSection />
      <StatsBand />
      <FAQ />
      <ContactForm />
      <CTABanner />
    </>
  );
}
