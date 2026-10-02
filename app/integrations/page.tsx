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
  title: "WALOOP Integrations | Connect WALOOP With Your Business Stack",
  description:
    "Connect customer engagement with your business systems — CRM systems, business applications, payment services, marketing and data systems, custom APIs, webhooks and automation services.",
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

const howItConnects = [
  { icon: "KeyRound", title: "App Authentications", description: "Connect supported external applications that require authentication inside the Automation builder." },
  { icon: "Zap", title: "CRM Triggers", description: "Start actions from supported CRM events and customer activity." },
  { icon: "Landmark", title: "Payment Gateways", description: "Configure supported payment gateway connections for payment journeys." },
  { icon: "ArrowLeftRight", title: "Imports & Exports", description: "Bring existing customer data in and export data for reporting and other workflows." },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        icon="Plug"
        title="Connect WALOOP With Your Business Stack"
        description="WALOOP connects customer engagement with relevant business systems and supported external services — so conversations, data and actions stay in sync."
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Inside WALOOP" title="How connections work in the platform" align="left" />
            <ul className="mt-10 space-y-3">
              {howItConnects.map((h) => (
                <li key={h.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-green-deep">
                    <DynamicIcon name={h.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-bold text-text">{h.title}</span>
                    <span className="block text-sm text-text-muted">{h.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <FlowDiagram flow={integrationFlow} />
          </Reveal>
        </div>
        <p className="mx-auto mt-12 flex max-w-3xl items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-deep" />
          Available integrations depend on your configuration. Talk to the WALOOP team to confirm a specific application, API or
          payment service for your use case.
        </p>
      </Section>

      <CTASection
        heading="Have a System You Need to Connect?"
        description="Tell us about your stack and we'll confirm what WALOOP can connect with for your journey."
        primary={ctas.talkToSales}
      />
    </>
  );
}
