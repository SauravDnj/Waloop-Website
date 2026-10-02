import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { comingSoon, hero, topics } from "@/lib/products/blog";
import { ctas } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP Blog | Customer Engagement, WhatsApp Automation & AI",
  description: hero.description,
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow={hero.badge} icon="Newspaper" title={hero.title} description={hero.description} primary={{ label: "Read the Guides", href: "/guides" }} secondary={null} />

      <Section size="narrow">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
            <PenLine className="h-6 w-6" />
          </span>
          <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">{comingSoon.heading}</h2>
          <p className="max-w-xl text-base text-text-muted">{comingSoon.description}</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {topics.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-4 hover:border-brand-blue/40"
            >
              <span>
                <span className="block font-heading text-sm font-bold text-text">{t.title}</span>
                <span className="block text-xs text-text-muted">Meanwhile: {t.hrefLabel}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-text-soft transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </Section>

      <CTASection heading="Stay in the Loop" description="Follow WALOOP's updates and explore the platform while our first articles come together." primary={ctas.getStarted} />
    </>
  );
}
