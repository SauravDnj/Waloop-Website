import type { Metadata } from "next";
import { PenLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCTA } from "@/components/product/ProductCTA";
import { hero, comingSoon, closingCta } from "@/lib/products/blog";

export const metadata: Metadata = {
  title: "Blog — WALOOP",
  description:
    "Product updates, engineering deep-dives, and communication-industry insights from the team building WALOOP's platform.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={hero.badge} title={hero.title} description={hero.description} tagline={hero.tagline} />
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <PenLine className="h-8 w-8 text-brand-green" />
            <h2 className="text-balance font-sans text-2xl font-semibold text-text sm:text-3xl">{comingSoon.heading}</h2>
            <p className="max-w-xl text-pretty text-base text-text-muted">{comingSoon.description}</p>
          </Reveal>
        </div>
      </section>

      <ProductCTA
        heading={closingCta.heading}
        description={closingCta.description}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
      />
    </>
  );
}
