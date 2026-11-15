import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { Ecosystem3D } from "@/components/three/Scenes";
import type { Flow } from "@/lib/flows";
import { ctas } from "@/lib/content";

export const metadata: Metadata = {
  title: "WhatsApp Integrations | APIs, Webhooks, CRM & Payment Gateways | WALOOP",
  description:
    "Connect WALOOP with CRM systems, business apps, payment gateways, APIs and webhooks.",
  alternates: { canonical: "/integrations" },
};

// §35 Integration categories — no specific third-party names until verified (§66).
const categories = [
  { icon: "MessagesSquare", title: "Communication services", description: "Supported channels and communication providers." },
  { icon: "Contact", title: "CRM systems", description: "Keep customer records connected across systems." },
  { icon: "AppWindow", title: "Business applications", description: "Connect the applications your teams already use." },
  { icon: "CreditCard", title: "Payment services", description: "Supported payment gateway connections." },
  { icon: "Megaphone", title: "Marketing systems", description: "Connect campaigns and audience data." },
  { icon: "Database", title: "Data systems", description: "Move structured data in and out of WALOOP." },
  { icon: "Code2", title: "Custom APIs", description: "Connect custom systems where supported." },
  { icon: "Webhook", title: "Webhooks", description: "Send and receive events to keep systems in sync." },
  { icon: "Workflow", title: "Automation services", description: "Use App Authentications inside WALOOP workflows." },
];

const integrationFlow: Flow = {
  title: "Integration visual",
  caption: "CRM, payments, business apps, APIs, webhooks and data systems connect to WALOOP, which runs the customer journey.",
  steps: [
    { branches: [
      { label: "CRM", steps: [] },
      { label: "Payments", steps: [] },
      { label: "Business Apps", steps: [] },
      { label: "APIs", steps: [] },
    ] },
    "WALOOP",
    "Customer Journey",
  ],
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        icon="Plug"
        title="Connect WALOOP With Your Business Stack"
        description="Connect WALOOP to your CRM, apps, payments, APIs and webhooks."
        visual={
          <Ecosystem3D
            nodes={["CRM", "Payments", "Business Apps", "APIs", "Webhooks", "Data Systems", "Marketing", "Automation"]}
            className="mx-auto max-w-[520px]"
          />
        }
        primary={ctas.talkToSales}
      />

      <Section>
        <SectionHeading eyebrow="Integration categories" title="What WALOOP Can Connect With" />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <RevealItem key={c.title} className="soft-panel flex gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <DynamicIcon name={c.icon} className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-heading text-base font-bold text-text">{c.title}</h2>
                <p className="mt-1 text-sm text-text-muted">{c.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="tint">
        <Reveal className="mx-auto max-w-3xl">
          <FlowDiagram flow={integrationFlow} />
        </Reveal>
        <p className="mx-auto mt-12 flex max-w-3xl items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-deep" />
          Available integrations depend on your configuration. Contact us to confirm a specific app or service.
        </p>
      </Section>

      <CTASection
        heading="Have a System You Need to Connect?"
        description="Tell us your stack and we'll confirm what WALOOP connects with."
        primary={ctas.talkToSales}
      />
    </>
  );
}
