import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { useCaseFlows } from "@/lib/journeys";
import { ctaLibrary } from "@/lib/content";

export const metadata: Metadata = {
  title: "WhatsApp Automation Use Cases | Leads, Support, E-commerce & Payments | WALOOP",
  description:
    "WhatsApp automation use cases with WALOOP: lead generation, customer support, e-commerce, appointments, marketing, sales, payments and AI support.",
  alternates: { canonical: "/use-cases" },
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        icon="Route"
        title="WhatsApp Automation Use Cases"
        description="Real customer journeys built with WALOOP, step by step."
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

      <CTASection heading={ctaLibrary.journeys.heading} description={ctaLibrary.journeys.description} />
    </>
  );
}
