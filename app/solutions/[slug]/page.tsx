import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { JourneyRail } from "@/components/diagrams/JourneyRail";
import { Ecosystem3D } from "@/components/three/Scenes";
import { getSolution, solutions } from "@/lib/solutions";
import { getPlatformArea } from "@/lib/platform";
import { ctaLibrary } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  return solution ? { title: solution.seo.title, description: solution.seo.description } : {};
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <PageHero
        eyebrow={solution.name}
        icon={solution.icon}
        breadcrumb={{ label: "Solutions", href: "/solutions" }}
        title={solution.hero.title}
        description={solution.hero.description}
        visual={
          <Ecosystem3D
            centerLabel={solution.name}
            nodes={solution.uses.map((u) => getPlatformArea(u)!.name)}
            radius={1.9}
            className="mx-auto max-w-[480px]"
          />
        }
      >
        <p className="mt-4 max-w-xl text-sm text-text-muted">{solution.short}</p>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="How it works" title={`${solution.name} in four steps`} />
        <JourneyRail steps={solution.steps} className="mt-14" />
      </Section>

      <Section tone="tint">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <Badge className="mb-4">Example journey</Badge>
            <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">{solution.flow.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{solution.flow.caption}</p>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-text-soft">Built for</p>
              <p className="mt-2 font-heading text-base font-bold text-text">{solution.persona.role}</p>
              <p className="mt-1 text-sm text-text-muted">{solution.persona.need}</p>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {solution.outcomes.map((o) => (
                <li key={o} className="flex items-center gap-2 text-sm font-semibold text-text">
                  <CheckCircle2 className="h-4 w-4 text-brand-green" /> {o}
                </li>
              ))}
            </ul>
          </div>
          <FlowDiagram flow={solution.flow} showCaption={false} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Capabilities used" title="The WALOOP capabilities behind this journey" />
        <PlatformCards slugs={solution.uses} numbered={false} className="mt-14 lg:grid-cols-3" />
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="More solutions" title="Explore other journeys" />
        <RevealGroup className="mt-10 flex flex-wrap justify-center gap-3">
          {solutions
            .filter((s) => s.slug !== solution.slug)
            .map((s) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-brand-blue/40"
                >
                  <DynamicIcon name={s.icon} className="h-4 w-4 text-brand-green-deep" /> {s.name}
                </Link>
              </RevealItem>
            ))}
        </RevealGroup>
      </Section>

      <CTASection heading={ctaLibrary.automate.heading} description={ctaLibrary.automate.description} />
    </>
  );
}
