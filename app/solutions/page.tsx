import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { personas, solutions, solutionsFlow } from "@/lib/solutions";
import { ctaLibrary } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP Solutions | Lead Generation, Marketing, Sales, Support & Automation",
  description:
    "Solutions built around your business journey — lead generation, marketing, sales, customer support, customer engagement, business automation and payment journeys.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        icon="Route"
        title="Solutions Built Around Your Business Journey"
        description="Whether you're capturing leads, running campaigns, supporting customers or collecting payments, WALOOP connects the capabilities each journey needs."
        visual={<FlowDiagram flow={solutionsFlow} />}
      />

      <Section>
        <SectionHeading eyebrow="Seven solutions" title="Pick the Journey You Want to Improve" />
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

      {/* §51 personas */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Who it's for"
          title="Value for Every Team"
          description="Feature availability can depend on plan and configuration."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <RevealItem key={p.role} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-green-deep">
                <DynamicIcon name={p.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-text">{p.role}</h3>
                <p className="mt-1 text-sm text-text-muted">{p.need}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTASection heading={ctaLibrary.journeys.heading} description={ctaLibrary.journeys.description} />
    </>
  );
}
