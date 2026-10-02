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
  title: "WALOOP Pricing | Starter ₹15,000/year, Growth ₹30,000/year, Enterprise",
  description:
    "Choose the WALOOP plan that fits your business: Starter ₹15,000/year, Growth ₹30,000/year, or Enterprise custom pricing. Usage, provider, WhatsApp/Meta and payment gateway charges are separate.",
};

const pricingFaqs = faqs.filter((f) => ["What are the current plans?", "Are third-party charges included?", "What is WALOOP?", "Is WALOOP only for WhatsApp?"].includes(f.question));

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow={hero.badge} icon="Tag" title={hero.title} description={hero.description} secondary={null} />

      <PricingSection heading="Three Plans. One Connected Platform." />

      {/* §36 pricing notes — charges explained separately */}
      <Section tone="tint">
        <SectionHeading eyebrow="Clear pricing conditions" title={pricingNotes.heading} description={pricingNotes.description} />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingNotes.items.map((item, i) => (
            <RevealItem
              key={item.title}
              className={i === 0 ? "border-brand-gradient rounded-2xl p-5" : "rounded-2xl border border-border bg-surface p-5"}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/[0.08] text-brand-green-deep">
                <DynamicIcon name={item.icon} className="h-[18px] w-[18px]" />
              </span>
              <p className="mt-3 font-heading text-sm font-bold text-text">{item.title}</p>
              <p className="mt-1 text-sm text-text-muted">{item.description}</p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-text-soft">
                {i === 0 ? "Your WALOOP plan" : "Billed separately"}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FAQ items={pricingFaqs} heading="Pricing questions" description="Plans, charges and what's included." />

      <CTASection
        heading={closingCta.heading}
        description={closingCta.description}
        primary={closingCta.primaryCta}
        secondary={closingCta.secondaryCta}
      />
    </>
  );
}
