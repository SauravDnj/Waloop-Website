import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ctaLibrary, homeFaqs } from "@/lib/content";
import { faqSchema, organizationSchema, softwareSchema } from "@/lib/seo";

export const metadata = {
  alternates: { canonical: "/" },
};

// Short homepage: hero → problem → capabilities → use cases → pricing → FAQ → CTA.
export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), softwareSchema(), faqSchema(homeFaqs)]} />
      <Hero />
      <ProblemSection />
      <PlatformShowcase />
      <UseCasesSection />
      <PricingSection
        heading="WALOOP Pricing Plans"
        description="Simple yearly plans — Starter, Growth and Enterprise."
        preview
        tinted
      />
      <FAQ />
      <CTASection
        heading={ctaLibrary.journeys.heading}
        description={ctaLibrary.journeys.description}
        primary={ctaLibrary.journeys.cta}
      />
    </>
  );
}
