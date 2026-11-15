import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Info } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { JsonLd } from "@/components/seo/JsonLd";
import { getIndustry, industries } from "@/lib/industries";
import { ctaLibrary } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return industry
    ? {
        title: industry.seo.title,
        description: industry.seo.description,
        keywords: [industry.keyword],
        alternates: { canonical: `/industries/${industry.slug}` },
      }
    : {};
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />
      <PageHero
        eyebrow={industry.keyword}
        icon={industry.icon}
        breadcrumb={{ label: "Industries", href: "/industries" }}
        title={industry.hero.title}
        description={industry.hero.description}
        visual={<FlowDiagram flow={industry.flow} />}
      />

      <Section>
        <SectionHeading eyebrow="Use cases" title={`${industry.keyword} Use Cases`} />
        <RevealGroup className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industry.useCases.map((u) => (
            <RevealItem key={u} className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
                <Check className="h-4 w-4" />
              </span>
              <span className="font-heading text-base font-bold text-text">{u}</span>
            </RevealItem>
          ))}
        </RevealGroup>
        {industry.note && (
          <p className="mt-8 flex items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-deep" /> {industry.note}
          </p>
        )}
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="Capabilities used" title={`WALOOP Features for ${industry.name}`} />
        <PlatformCards slugs={industry.uses} numbered={false} className="mt-14" />
      </Section>

      <CTASection heading={ctaLibrary.next.heading} description={ctaLibrary.next.description} />
    </>
  );
}
