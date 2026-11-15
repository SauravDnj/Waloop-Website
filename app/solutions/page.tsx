import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { solutions } from "@/lib/solutions";
import { ctaLibrary } from "@/lib/content";

export const metadata: Metadata = {
  title: "WhatsApp Business Solutions | Lead Generation, Marketing, Sales & Support | WALOOP",
  description:
    "WALOOP solutions for WhatsApp lead generation, marketing, sales, customer support, automation and payments.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        icon="Route"
        title="WhatsApp Business Solutions"
        description="Lead generation, marketing, sales, support, automation and payments — on one platform."
      />

      <Section>
        <SectionHeading eyebrow="Seven solutions" title="Choose Your Solution" />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <RevealItem key={s.slug} className="h-full">
              <Link href={`/solutions/${s.slug}`} className="group soft-panel flex h-full flex-col p-6 transition-shadow hover:shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <DynamicIcon name={s.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-heading text-lg font-bold text-text">{s.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-green-deep">
                  Explore {s.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTASection heading={ctaLibrary.journeys.heading} description={ctaLibrary.journeys.description} />
    </>
  );
}
