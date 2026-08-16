import type { Metadata } from "next";
import { HeroText } from "@/components/product/HeroText";
import { ChannelHeroWidget } from "@/components/product/heroes/ChannelHeroWidget";
import { OverviewSection } from "@/components/product/OverviewSection";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { HowItWorks } from "@/components/product/HowItWorks";
import { IconGrid } from "@/components/product/IconGrid";
import { ProductFAQSection } from "@/components/product/ProductFAQSection";
import { ProductCTA } from "@/components/product/ProductCTA";
import {
  benefitsContent,
  ctaContent,
  faqContent,
  featuresContent,
  heroContent,
  heroWidgetProps,
  howItWorksContent,
  industriesContent,
  integrationsContent,
  overviewContent,
} from "@/lib/products/missed-call-service";

export const metadata: Metadata = {
  title: "Missed Call Service | WALOOP — Zero-Cost Lead Capture",
  description:
    "WALOOP's Missed Call Service turns any published phone number into a free, always-on lead-capture channel — with sub-500ms webhook delivery, automatic WhatsApp/SMS follow-up, and per-campaign ROI tracking.",
};

export default function MissedCallServicePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-hero-glow"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <HeroText
            badge={heroContent.badge}
            title={heroContent.title}
            description={heroContent.description}
            bullets={heroContent.bullets}
            primaryCta={heroContent.primaryCta}
            secondaryCta={heroContent.secondaryCta}
          />
          <ChannelHeroWidget {...heroWidgetProps} />
        </div>
      </section>

      <OverviewSection
        eyebrow={overviewContent.eyebrow}
        heading={overviewContent.heading}
        description={overviewContent.description}
        points={overviewContent.points}
      />

      <FeatureGrid
        eyebrow={featuresContent.eyebrow}
        heading={featuresContent.heading}
        description={featuresContent.description}
        items={featuresContent.items}
        tinted
      />

      <HowItWorks
        eyebrow={howItWorksContent.eyebrow}
        heading={howItWorksContent.heading}
        description={howItWorksContent.description}
        steps={howItWorksContent.steps}
      />

      <IconGrid
        eyebrow={industriesContent.eyebrow}
        heading={industriesContent.heading}
        description={industriesContent.description}
        items={industriesContent.items}
        columns={3}
      />

      <IconGrid
        eyebrow={benefitsContent.eyebrow}
        heading={benefitsContent.heading}
        description={benefitsContent.description}
        items={benefitsContent.items}
        columns={2}
        tinted
      />

      <IconGrid
        eyebrow={integrationsContent.eyebrow}
        heading={integrationsContent.heading}
        description={integrationsContent.description}
        items={integrationsContent.items}
        columns={4}
      />

      <ProductFAQSection heading={faqContent.heading} description={faqContent.description} items={faqContent.items} />

      <ProductCTA
        heading={ctaContent.heading}
        description={ctaContent.description}
        primaryCta={ctaContent.primaryCta}
        secondaryCta={ctaContent.secondaryCta}
      />
    </>
  );
}
