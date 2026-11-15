import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { BrandLockup } from "@/components/layout/Logo";
import { MetaVerifiedBadge } from "@/components/brand/MetaVerifiedBadge";
import { brandPromise, ctas, siteConfig } from "@/lib/content";
import { hero } from "@/lib/products/about";

export const metadata: Metadata = {
  title: "About WALOOP | Customer Engagement & WhatsApp Automation Platform",
  description: hero.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={hero.badge}
        icon="Building2"
        title={hero.title}
        description={hero.description}
        primary={ctas.talkToWaloop}
        visual={
          <div className="flex flex-col items-center gap-6">
            <BrandLockup className="h-56 sm:h-64" />
            <MetaVerifiedBadge size="md" />
          </div>
        }
      />

      {/* §1 Brand promise */}
      <Section tone="tint">
        <SectionHeading eyebrow="Brand promise" title={siteConfig.coreMessage} />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-5">
          {brandPromise.map((p) => (
            <RevealItem key={p.title} className="soft-panel p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <DynamicIcon name={p.icon} className="h-5 w-5" />
              </span>
              <p className="mt-4 font-heading text-lg font-bold text-text">{p.title}</p>
              <p className="mt-1 text-sm text-text-muted">{p.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTASection heading="Build Smarter Customer Journeys With WALOOP." description={siteConfig.tagline} />
    </>
  );
}
