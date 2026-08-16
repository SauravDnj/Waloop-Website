import type { Metadata } from "next";
import { HeroText } from "@/components/product/HeroText";
import { OverviewSection } from "@/components/product/OverviewSection";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { HowItWorks } from "@/components/product/HowItWorks";
import { IconGrid } from "@/components/product/IconGrid";
import { ProductFAQSection } from "@/components/product/ProductFAQSection";
import { ProductCTA } from "@/components/product/ProductCTA";
import { VoiceAIHeroWidget } from "@/components/product/heroes/VoiceAIHeroWidget";
import {
  heroContent,
  overview,
  features,
  howItWorks,
  useCases,
  benefits,
  capabilities,
  faq,
  cta,
} from "@/lib/products/voice-ai";

export const metadata: Metadata = {
  title: "Voice AI — Speech Recognition, TTS & NLU Engine | WALOOP",
  description:
    "WALOOP Voice AI is the speech technology platform behind natural voice experiences — real-time speech recognition, human-like text-to-speech, and multi-language NLU with sub-800ms latency.",
};

export default function VoiceAIPage() {
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
          <VoiceAIHeroWidget />
        </div>
      </section>

      <OverviewSection
        eyebrow={overview.eyebrow}
        heading={overview.heading}
        description={overview.description}
        points={overview.points}
        stats={overview.stats}
      />

      <FeatureGrid
        eyebrow={features.eyebrow}
        heading={features.heading}
        description={features.description}
        items={features.items}
        tinted
      />

      <HowItWorks
        eyebrow={howItWorks.eyebrow}
        heading={howItWorks.heading}
        description={howItWorks.description}
        steps={howItWorks.steps}
      />

      <IconGrid
        eyebrow={useCases.eyebrow}
        heading={useCases.heading}
        description={useCases.description}
        items={useCases.items}
        columns={3}
      />

      <IconGrid
        eyebrow={benefits.eyebrow}
        heading={benefits.heading}
        description={benefits.description}
        items={benefits.items}
        columns={2}
        tinted
      />

      <IconGrid
        eyebrow={capabilities.eyebrow}
        heading={capabilities.heading}
        description={capabilities.description}
        items={capabilities.items}
        columns={2}
      />

      <ProductFAQSection heading={faq.heading} description={faq.description} items={faq.items} />

      <ProductCTA
        heading={cta.heading}
        description={cta.description}
        primaryCta={cta.primaryCta}
        secondaryCta={cta.secondaryCta}
      />
    </>
  );
}
