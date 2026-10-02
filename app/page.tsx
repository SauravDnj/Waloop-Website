import { Hero } from "@/components/home/Hero";
import { TrustIntro } from "@/components/home/TrustIntro";
import { ProblemSection } from "@/components/home/ProblemSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { JourneySection } from "@/components/home/JourneySection";
import { ConversationShowcase } from "@/components/home/ConversationShowcase";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { AnalyticsSection } from "@/components/home/AnalyticsSection";
import { HowItWorksSection, WhyWaloopSection } from "@/components/home/HowItWorksSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { ctaLibrary } from "@/lib/content";

// Homepage section order follows spec §46: hero → trust → problem → solution → ecosystem →
// platform capabilities → customer journey → use cases → industries → analytics → pricing → FAQ → CTA.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <ProblemSection />
      <EcosystemSection />
      <PlatformShowcase />
      <JourneySection />
      <ConversationShowcase />
      <UseCasesSection />
      <IndustriesSection />
      <AnalyticsSection />
      <HowItWorksSection />
      <WhyWaloopSection />
      <PricingSection
        heading="Choose the WALOOP Plan That Fits Your Business"
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
