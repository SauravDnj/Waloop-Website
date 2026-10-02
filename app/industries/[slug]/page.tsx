import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Info } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { Ecosystem3D } from "@/components/three/Scenes";
import { getIndustry, industries } from "@/lib/industries";
import { getPlatformArea } from "@/lib/platform";
import { ctaLibrary } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return industry ? { title: industry.seo.title, description: industry.seo.description } : {};
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow={industry.name}
        icon={industry.icon}
        breadcrumb={{ label: "Industries", href: "/industries" }}
        title={industry.hero.title}
        description={industry.hero.description}
        visual={
          <Ecosystem3D
            centerLabel={industry.name}
            nodes={industry.uses.map((u) => getPlatformArea(u)!.name)}
            radius={1.9}
            className="mx-auto max-w-[480px]"
          />
        }
      />

      <Section>
        <SectionHeading eyebrow="Use cases" title={`What ${industry.name} teams use WALOOP for`} />
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
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <Badge className="mb-4">Example journey</Badge>
            <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">{industry.flow.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{industry.flow.caption}</p>
          </div>
          <FlowDiagram flow={industry.flow} showCaption={false} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Capabilities used" title="The WALOOP capabilities behind it" />
        <PlatformCards slugs={industry.uses} numbered={false} className="mt-14" />
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="More industries" title="Explore other industries" />
        <RevealGroup className="mt-10 flex flex-wrap justify-center gap-3">
          {industries
            .filter((i) => i.slug !== industry.slug)
            .map((i) => (
              <RevealItem key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-brand-blue/40"
                >
                  <DynamicIcon name={i.icon} className="h-4 w-4 text-brand-green-deep" /> {i.name}
                </Link>
              </RevealItem>
            ))}
        </RevealGroup>
      </Section>

      <CTASection heading={ctaLibrary.next.heading} description={ctaLibrary.next.description} />
    </>
  );
}
