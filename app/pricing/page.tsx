import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FAQ } from "@/components/home/FAQ";
import { ProductCTA } from "@/components/product/ProductCTA";
import { hero, plans, closingCta } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing — WALOOP",
  description:
    "Simple, transparent pricing for WALOOP's communications platform — WhatsApp Business API, AI Voice Agent, RCS, Bulk SMS, and Voice IVR, on one connected plan.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={hero.badge}
            title={`${hero.title} ${hero.highlight}`}
            description={hero.description}
            tagline={hero.tagline}
          />
        </div>
      </section>

      <PricingSection heading="Simple, transparent pricing" plans={plans} />

      <FAQ />

      <ProductCTA
        heading={closingCta.heading}
        highlight={closingCta.highlight}
        description={closingCta.description}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
      />
    </>
  );
}
