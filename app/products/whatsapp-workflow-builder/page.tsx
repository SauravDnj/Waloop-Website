import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { HeroText } from "@/components/product/HeroText";
import { StatStrip } from "@/components/product/StatStrip";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { HowItWorks } from "@/components/product/HowItWorks";
import { ChipShowcase } from "@/components/product/ChipShowcase";
import { ProductFAQSection } from "@/components/product/ProductFAQSection";
import { ProductCTA } from "@/components/product/ProductCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  hero,
  overviewLead,
  overviewStats,
  features,
  howItWorks,
  useCases,
  whyWaloop,
  faqs,
  closingCta,
} from "@/lib/products/whatsapp-workflow-builder";

export const metadata: Metadata = {
  title: "WhatsApp No-Code Workflow Builder — WALOOP",
  description:
    "Build WhatsApp automations visually with WALOOP's no-code workflow builder. Connect triggers, conditions, and actions to run notifications, follow-ups, and full customer journeys on the official WhatsApp Business API.",
};

export default function WhatsAppWorkflowBuilderPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
        />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center">
            <HeroText
              badge={hero.badge}
              title={hero.title}
              description={hero.description}
              bullets={hero.bullets}
              primaryCta={hero.primaryCta}
              secondaryCta={hero.secondaryCta}
            />
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-pretty text-base leading-relaxed text-text-muted sm:text-lg">{overviewLead}</p>
          </Reveal>
          <div className="mt-10">
            <StatStrip stats={overviewStats} />
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="What it does"
        heading="Key Capabilities"
        description="Everything you need to design, connect, and launch WhatsApp automations without engineering help."
        items={features}
        tinted
      />

      <HowItWorks
        eyebrow="Getting started"
        heading="How It Works"
        description="From first conversation to a live workflow, WALOOP keeps the setup short and simple."
        steps={howItWorks}
      />

      <ChipShowcase
        eyebrow="Use cases"
        heading="Where It Works Best"
        description="Popular flows teams launch first on the WALOOP workflow builder."
        chips={useCases}
      />

      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why WALOOP" title="Why Teams Choose Us" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyWaloop.map((point, i) => (
              <Reveal key={point} delay={i * 0.08} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <p className="text-sm font-medium leading-relaxed text-text">{point}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQSection heading="Frequently Asked Questions" items={faqs} />

      <ProductCTA
        heading={closingCta.heading}
        description={closingCta.description}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
      />
    </>
  );
}
