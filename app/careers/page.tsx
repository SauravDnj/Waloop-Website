import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconGrid } from "@/components/product/IconGrid";
import { ProductCTA } from "@/components/product/ProductCTA";
import { hero, culture, openRoles, closingCta } from "@/lib/products/careers";

export const metadata: Metadata = {
  title: "Careers — WALOOP",
  description:
    "Join WALOOP's team of 50+ communication and AI experts building the communications infrastructure that powers 500+ enterprises across WhatsApp, RCS, SMS, IVR, and AI voice.",
};

export default function CareersPage() {
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

      <IconGrid
        eyebrow={culture.eyebrow}
        heading={culture.heading}
        description={culture.description}
        items={culture.items}
        columns={4}
      />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={openRoles.eyebrow} title={openRoles.heading} description={openRoles.description} />

          <Reveal className="mt-10 flex flex-col items-center gap-4 text-center" delay={0.1}>
            <Mail className="h-7 w-7 text-brand-green" />
            <p className="max-w-xl text-sm leading-relaxed text-text-muted">
              Email us at{" "}
              <a href={`mailto:${openRoles.email}`} className="font-semibold text-brand-green-deep hover:underline dark:text-brand-green">
                {openRoles.email}
              </a>{" "}
              with a bit about yourself and what you&apos;d want to work on.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href={`mailto:${openRoles.email}`} size="md">
                Email Us
              </Button>
              <Button as="a" href="/contact" variant="secondary" size="md">
                Contact Page
              </Button>
            </div>
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
