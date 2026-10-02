import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { JourneyRail } from "@/components/diagrams/JourneyRail";
import { WhatsAppConversation } from "@/components/mockups/WhatsAppConversation";
import { LeadForm } from "@/components/forms/LeadForm";
import { demoFlow } from "@/lib/journeys";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a WALOOP Demo | See One Connected Customer Journey",
  description:
    "Book a WALOOP demo and follow one continuous customer journey — WhatsApp message, chatbot, CRM, segmentation, automation, department routing, payment, follow-up and analytics.",
};

// §69 — the demo follows a single customer journey rather than opening random features.
const railSteps = demoFlow.map((text, i) => ({ step: String(i + 1).padStart(2, "0"), title: text.replace(/\.$/, "") }));

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        icon="CalendarCheck"
        title="See One Connected Customer Journey"
        description="Our demo follows a single customer from their first WhatsApp message to analytics — so you see how every WALOOP capability connects."
        primary={{ label: "Request a Demo", href: "#demo-form" }}
        secondary={{ label: "Chat on WhatsApp", href: siteConfig.whatsappLink }}
        visual={<WhatsAppConversation />}
      />

      <Section>
        <SectionHeading eyebrow="What you'll see" title="The Demo, Step by Step" description="Eleven steps, one continuous story." />
        <div className="mx-auto mt-14 max-w-2xl">
          <JourneyRail steps={railSteps} vertical />
        </div>
      </Section>

      <Section tone="tint" id="demo-form">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Request your demo" title="Choose a Date. We'll Do the Rest." />
          <Reveal className="mt-12">
            <LeadForm intent="demo" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
