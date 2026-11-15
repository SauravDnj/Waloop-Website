import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FAQ } from "@/components/home/FAQ";
import { faqs } from "@/lib/content";
import { closingCta, hero, pricingNotes } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "WALOOP Pricing | WhatsApp CRM & Automation Plans from ₹15,000/year",
  description:
    "WALOOP pricing: Starter ₹15,000/year, Growth ₹30,000/year, Enterprise custom. WhatsApp/Meta, usage and gateway charges are separate.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = faqs.filter((f) => ["How much does WALOOP cost?", "Are WhatsApp/Meta charges included?"].includes(f.question));

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow={hero.badge} icon="Tag" title={hero.title} description={hero.description} secondary={null} />

      <PricingSection />

      {/* §36 pricing notes — charges explained separately */}
      <Section tone="tint">
        <SectionHeading eyebrow="Clear pricing conditions" title={pricingNotes.heading} description={pricingNotes.description} />
        <RevealGroup className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {pricingNotes.items.map((item, i) => (
            <RevealItem
              key={item.title}
              className={i === 0 ? "border-brand-gradient rounded-2xl p-4 sm:p-5" : "rounded-2xl border border-border bg-surface p-4 sm:p-5"}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/[0.08] text-brand-green-deep">
                <DynamicIcon name={item.icon} className="h-[18px] w-[18px]" />
              </span>
              <p className="mt-3 font-heading text-sm font-bold text-text">{item.title}</p>
              <p className="mt-1 text-sm text-text-muted">{item.description}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-text-soft">
                {i === 0 ? "Your WALOOP plan" : "Billed separately"}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FAQ items={pricingFaqs} heading="Pricing questions" showMore={false} />

      <CTASection
        heading={closingCta.heading}
        description={closingCta.description}
        primary={closingCta.primaryCta}
        secondary={closingCta.secondaryCta}
      />
    </>
  );
}
