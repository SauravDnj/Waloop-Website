import type { Metadata } from "next";
import { HeroText } from "@/components/product/HeroText";
import { StatStrip } from "@/components/product/StatStrip";
import { ProductLinkGrid } from "@/components/product/ProductLinkGrid";
import { HowItWorks } from "@/components/product/HowItWorks";
import { IconGrid } from "@/components/product/IconGrid";
import { ProductFAQSection } from "@/components/product/ProductFAQSection";
import { ProductCTA } from "@/components/product/ProductCTA";
import { StatsBand } from "@/components/home/StatsBand";
import { IntegrationsLinkScene } from "@/components/three/IntegrationsLinkSceneLoader";
import { integrations } from "@/lib/content";
import {
  hero,
  heroStats,
  categoryIntro,
  howItWorksContent,
  benefitsContent,
  faqContent,
  closingCta,
  toProductLinkItems,
} from "@/lib/integrations-overview";

export const metadata: Metadata = {
  title: "Integrations | WALOOP — Connect Your Entire Stack",
  description:
    "Native, two-way integrations for MoEngage, WebEngage, CleverTap, Zoho, HubSpot, Salesforce, Shopify, Razorpay, and 5,000+ apps via Zapier — plus a REST API and webhooks for anything else.",
};

const CATEGORY_ORDER = ["Marketing & Engagement", "CRM & Sales", "Commerce & Payments", "Automation"];

const categories = CATEGORY_ORDER.map((category) => ({
  category,
  intro: categoryIntro[category],
  items: toProductLinkItems(integrations.filter((item) => item.category === category)),
})).filter((group) => group.items.length > 0);

export default function IntegrationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
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
            <StatStrip stats={heroStats} className="mt-12" />
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(152,255,3,0.22),transparent)] blur-2xl" />
            <IntegrationsLinkScene />
          </div>
        </div>
      </section>

      {categories.map((group, i) => (
        <ProductLinkGrid
          key={group.category}
          eyebrow={group.intro.eyebrow}
          heading={group.intro.heading}
          description={group.intro.description}
          items={group.items}
          tinted={i % 2 === 1}
        />
      ))}

      <HowItWorks
        eyebrow={howItWorksContent.eyebrow}
        heading={howItWorksContent.heading}
        description={howItWorksContent.description}
        steps={howItWorksContent.steps}
        tinted
      />

      <IconGrid
        eyebrow={benefitsContent.eyebrow}
        heading={benefitsContent.heading}
        description={benefitsContent.description}
        items={benefitsContent.items}
        columns={3}
      />

      <StatsBand />

      <ProductFAQSection heading={faqContent.heading} description={faqContent.description} items={faqContent.items} />

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
