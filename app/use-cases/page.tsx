import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { useCaseFlows, storyboard } from "@/lib/journeys";
import { ctaLibrary } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP Use Cases | Lead Generation, Support, E-commerce, Appointments, Marketing & AI",
  description:
    "Complete WALOOP customer journeys, step by step — lead generation, customer support, e-commerce, appointments, marketing campaigns, sales, payments and AI customer support.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        icon="Route"
        title="Complete Customer Journeys, Diagrammed"
        description="Every example below follows one customer through connected WALOOP capabilities. Conceptual examples are labelled — they show how a capability could be used."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {useCaseFlows.map((flow) => (
            <Reveal key={flow.slug} className="h-full">
              <FlowDiagram flow={flow} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* §70 Full website storyboard */}
      <Section tone="tint">
        <SectionHeading eyebrow="The WALOOP story" title="Ten Scenes, One Journey" />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {storyboard.map((s, i) => (
            <RevealItem key={s.scene} className="soft-panel p-5">
              <span className="font-heading text-xs font-bold text-brand-green-deep">Scene {i + 1}</span>
              <p className="mt-2 font-heading text-base font-bold text-text">{s.scene}</p>
              <p className="mt-1 text-sm text-text-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTASection heading={ctaLibrary.journeys.heading} description={ctaLibrary.journeys.description} />
    </>
  );
}
