import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { resourceHub } from "@/lib/resources";
import { ctaLibrary } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP Resources | Documentation, Guides, Use Cases, FAQ & Support",
  description: "Learn how WALOOP works — documentation, guides, complete use-case journeys, FAQ, blog and support.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        icon="Library"
        title="Learn How WALOOP Connects the Customer Journey"
        description="Documentation, guides, use cases and answers — everything you need to plan and build with WALOOP."
        secondary={null}
      />
      <Section>
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceHub.map((r) => (
            <RevealItem key={r.href} className="h-full">
              <Link href={r.href} className="group soft-panel flex h-full flex-col p-7 transition-shadow hover:shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <DynamicIcon name={r.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-5 flex items-center gap-1 font-heading text-xl font-bold text-text">
                  {r.title}
                  <ArrowUpRight className="h-4 w-4 text-text-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </h2>
                <p className="mt-2 text-sm text-text-muted">{r.description}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <CTASection heading={ctaLibrary.next.heading} description={ctaLibrary.next.description} />
    </>
  );
}
