import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { JourneyRail } from "@/components/diagrams/JourneyRail";
import { guides } from "@/lib/resources";
import { getPlatformArea, platformHref } from "@/lib/platform";
import { ctas } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP Guides | Build Chatbots, Automations, Mini-Apps, Payments & AI",
  description:
    "Step-by-step overview guides for building with WALOOP — your first chatbot, a lead automation, a WhatsApp Mini-App, a payment journey, AI on your content and team setup.",
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        icon="Compass"
        title="Step-by-Step Guides for Common Journeys"
        description="Overview walkthroughs for the most common WALOOP builds. For hands-on help in your workspace, the WALOOP team is a message away."
        primary={ctas.getStarted}
        secondary={{ label: "Get Support", href: "/support" }}
      >
        <nav aria-label="Guides" className="mt-6 flex flex-wrap gap-2">
          {guides.map((g) => (
            <a key={g.slug} href={`#${g.slug}`} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-text-muted hover:text-text">
              {g.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {guides.map((g, i) => {
        const area = getPlatformArea(g.area)!;
        return (
          <Section key={g.slug} id={g.slug} tone={i % 2 ? "tint" : "default"}>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <DynamicIcon name={g.icon} className="h-6 w-6" />
                </span>
                <p className="mt-5 font-heading text-xs font-bold uppercase tracking-widest text-text-soft">Guide {i + 1} · {area.name}</p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-text">{g.title}</h2>
                <p className="mt-3 text-base text-text-muted">{g.summary}</p>
                <Link href={platformHref(area.slug)} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-green-deep hover:underline">
                  Learn about {area.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
              <JourneyRail steps={g.steps} vertical />
            </div>
          </Section>
        );
      })}

      <CTASection heading="Ready to Build It?" description="Open WALOOP and start your first journey — or book a guided demo." />
    </>
  );
}
