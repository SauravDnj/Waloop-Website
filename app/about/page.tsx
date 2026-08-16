import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconGrid } from "@/components/product/IconGrid";
import { StatStrip } from "@/components/product/StatStrip";
import { ProductCTA } from "@/components/product/ProductCTA";
import { hero, mission, values, companyStats, companyFacts, closingCta } from "@/lib/products/about";

export const metadata: Metadata = {
  title: "About Us — WALOOP",
  description:
    "WALOOP is an enterprise-grade communications platform built to make WhatsApp, RCS, SMS, IVR and AI voice communication simple, secure, and scalable for every business.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={hero.badge} title={hero.title} description={hero.description} tagline={hero.tagline} />

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button as="a" href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="a" href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={mission.eyebrow} title={mission.heading} />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-base leading-relaxed text-text-muted sm:text-lg">
              {mission.description}
            </p>
          </Reveal>
        </div>
      </section>

      <IconGrid
        eyebrow={values.eyebrow}
        heading={values.heading}
        description={values.description}
        items={values.items}
        columns={4}
        tinted
      />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Impact" title="Trusted at Scale" />
          <div className="mt-14">
            <StatStrip stats={companyStats} />
          </div>
        </div>
      </section>

      <IconGrid
        eyebrow={companyFacts.eyebrow}
        heading={companyFacts.heading}
        description={companyFacts.description}
        items={companyFacts.items}
        columns={4}
        tinted
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
