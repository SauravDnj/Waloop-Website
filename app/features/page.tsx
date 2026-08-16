import type { Metadata } from "next";
import { HeroText } from "@/components/product/HeroText";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductCTA } from "@/components/product/ProductCTA";
import { hero, features, closingCta } from "@/lib/products/features";

export const metadata: Metadata = {
  title: "Features — WALOOP",
  description:
    "Explore WALOOP's full platform: WhatsApp Business API, RCS Business Messaging, Bulk SMS & Voice Broadcast, a built-in CRM, no-code bot builder, native payments, and more — all from one connected platform.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
        />
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <HeroText
            badge={hero.badge}
            title={hero.title}
            highlight={hero.highlight}
            description={hero.description}
            tagline={hero.tagline}
            bullets={hero.bullets}
            primaryCta={hero.primaryCta}
            secondaryCta={hero.secondaryCta}
          />
        </div>
      </section>

      <FeatureGrid
        eyebrow={features.eyebrow}
        heading={features.heading}
        description={features.description}
        items={features.items}
      />

      <ProductCTA
        heading={closingCta.heading}
        description={closingCta.description}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
      />
    </>
  );
}
