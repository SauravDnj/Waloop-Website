import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { BrandLockup } from "@/components/layout/Logo";
import { MetaVerifiedBadge } from "@/components/brand/MetaVerifiedBadge";
import { JourneyRail } from "@/components/diagrams/JourneyRail";
import { brandPromise, ctas, siteConfig } from "@/lib/content";
import { journeyStages } from "@/lib/journeys";
import { brandStory, hero, values } from "@/lib/products/about";

export const metadata: Metadata = {
  title: "About WALOOP | Built to Connect the Modern Customer Journey",
  description: hero.description,
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
      >
        <p className="mt-4 max-w-xl text-base text-text-muted">{hero.goal}</p>
      </PageHero>

      {/* §77 Brand story */}
      <Section>
        <SectionHeading eyebrow="Our story" title="Why WALOOP Exists" />
        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative space-y-5 border-l border-border pl-8">
            {brandStory.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[2.6rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand-green-deep">{s.label}</p>
                  <p className="mt-1 text-lg font-semibold text-text">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* §1 Brand promise */}
      <Section tone="tint">
        <SectionHeading eyebrow="Brand promise" title={siteConfig.coreMessage} description={siteConfig.supportingStatement} />
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

      {/* §4 Global story */}
      <Section>
        <SectionHeading eyebrow="The journey" title="Eight Stages, One Platform" />
        <JourneyRail steps={journeyStages.map((s) => ({ title: s.stage, description: s.description }))} className="mt-14" />
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="How we work" title="What WALOOP Stands For" />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <RevealItem key={v.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-green-deep">
                <DynamicIcon name={v.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-text">{v.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{v.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTASection heading="Build Smarter Customer Journeys With WALOOP." description={siteConfig.tagline} />
    </>
  );
}
