import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Check } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { Ecosystem3D } from "@/components/three/Scenes";
import { ctaLibrary, ctas, platformOverview, siteConfig } from "@/lib/content";
import { featureInventory, featureMatrix, platformAreas, platformHref } from "@/lib/platform";
import { dashboardFlow, masterJourney, relationshipMap } from "@/lib/journeys";

export const metadata: Metadata = {
  title: "WALOOP Platform | Channels, CRM, Chatbots, Automation, Payments & AI",
  description:
    "One connected platform: supported channels, conversational CRM, chatbots, automations, WhatsApp Mini-Apps, payments, dynamic experiences, AI, analytics and workspace.",
};

export default function PlatformPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-hero-glow" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Badge className="mb-5">The WALOOP Platform</Badge>
            <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl">
              {platformOverview.heading}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">{platformOverview.intro}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">{siteConfig.supportingStatement}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href={ctas.getStarted.href} variant="brand" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                {ctas.getStarted.label}
              </Button>
              <Button as="a" href={ctas.bookDemo.href} variant="secondary" size="lg">
                <CalendarCheck className="h-4 w-4" /> {ctas.bookDemo.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Ecosystem3D nodes={platformAreas.map((a) => a.name)} className="mx-auto max-w-[560px]" />
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Platform areas"
          title="Ten Capabilities. One Customer Journey."
          description="Each area answers a part of the journey — and connects to the others."
        />
        <PlatformCards slugs={platformAreas.map((a) => a.slug)} className="mt-14 lg:grid-cols-5" />
      </Section>

      {/* §45 relationship map + §43 dashboard */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="How it connects"
          title="Features Work Together — Not in Isolation"
          description="Channel → Conversation → CRM → Chatbot → Automation → Payment → Follow-up → Analytics"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <FlowDiagram flow={relationshipMap} className="h-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <FlowDiagram flow={dashboardFlow} />
              <div className="soft-panel p-6">
                <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand-green-deep">The dashboard</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-text">One Place to See and Manage Your Customer Operations</h3>
                <p className="mt-2 text-sm text-text-muted">
                  The WALOOP dashboard is the control center connecting channels, CRM, chatbots, automations, payments, AI,
                  analytics and workspace — open it at{" "}
                  <a href={siteConfig.appUrl} className="font-semibold text-brand-green-deep hover:underline">
                    {siteConfig.appLabel}
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* §41 Product feature matrix */}
      <Section>
        <SectionHeading eyebrow="Feature matrix" title="What Each Platform Area Does" />
        <Reveal className="mt-12 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">WALOOP product feature matrix</caption>
            <thead className="bg-surface-alt">
              <tr>
                <th scope="col" className="px-5 py-3.5 font-heading text-xs font-bold uppercase tracking-widest text-text-soft">
                  Platform area
                </th>
                <th scope="col" className="px-5 py-3.5 font-heading text-xs font-bold uppercase tracking-widest text-text-soft">
                  Main capabilities
                </th>
                <th scope="col" className="px-5 py-3.5 font-heading text-xs font-bold uppercase tracking-widest text-text-soft">
                  Customer value
                </th>
              </tr>
            </thead>
            <tbody>
              {featureMatrix.map((row) => (
                <tr key={row.area} className="border-t border-border bg-surface">
                  <th scope="row" className="px-5 py-4 font-heading font-bold text-text">
                    {row.slug ? (
                      <Link href={platformHref(row.slug)} className="hover:text-brand-green-deep">
                        {row.area}
                      </Link>
                    ) : (
                      row.area
                    )}
                  </th>
                  <td className="px-5 py-4 text-text-muted">{row.capabilities}</td>
                  <td className="px-5 py-4 font-semibold text-text">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* §42 Master feature inventory */}
      <Section tone="tint">
        <SectionHeading eyebrow="Feature inventory" title="Everything Inside WALOOP" />
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-4">
          {featureInventory.map((g) => (
            <Reveal key={g.group} className="mb-4 break-inside-avoid">
              <div className="soft-panel p-5">
                <p className="font-heading text-sm font-bold text-text">{g.group}</p>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                      <Check className="h-3.5 w-3.5 text-brand-green" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* §71 Master visual */}
      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <Badge className="mb-4">Complete ecosystem</Badge>
            <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">From Customer to Analytics</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{masterJourney.caption}</p>
          </div>
          <FlowDiagram flow={masterJourney} showCaption={false} />
        </div>
      </Section>

      <CTASection heading={ctaLibrary.next.heading} description={ctaLibrary.next.description} />
    </>
  );
}
