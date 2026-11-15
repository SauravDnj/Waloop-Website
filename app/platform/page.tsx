import type { Metadata } from "next";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { Ecosystem3D } from "@/components/three/Scenes";
import { JsonLd } from "@/components/seo/JsonLd";
import { ctaLibrary, ctas } from "@/lib/content";
import { platformAreas } from "@/lib/platform";
import { masterJourney } from "@/lib/journeys";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Customer Engagement Platform | WhatsApp, CRM, Chatbots & Automation | WALOOP",
  description:
    "WALOOP is an all-in-one customer engagement platform: multi-channel messaging, WhatsApp CRM, chatbots, automation, payments and AI.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Platform", path: "/platform" }])} />
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-hero-glow" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Badge className="mb-5">The WALOOP Platform</Badge>
            <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl">
              All-in-One Customer Engagement Platform
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
              Channels, CRM, chatbots, automation, payments and AI — connected in one platform.
            </p>
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
        <SectionHeading eyebrow="Platform areas" title="Ten Capabilities. One Customer Journey." />
        <PlatformCards slugs={platformAreas.map((a) => a.slug)} className="mt-14 lg:grid-cols-5" />
      </Section>

      <Section tone="tint">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="How it connects" title="From First Message to Analytics" description={masterJourney.caption} align="left" />
          <FlowDiagram flow={masterJourney} showCaption={false} />
        </div>
      </Section>

      <CTASection heading={ctaLibrary.next.heading} description={ctaLibrary.next.description} />
    </>
  );
}
