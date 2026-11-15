import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { JourneyRail } from "@/components/diagrams/JourneyRail";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { getSolution, solutions } from "@/lib/solutions";
import { ctaLibrary } from "@/lib/content";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  return solution
    ? {
        title: solution.seo.title,
        description: solution.seo.description,
        keywords: [solution.keyword],
        alternates: { canonical: `/solutions/${solution.slug}` },
      }
    : {};
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <JsonLd
        data={[
          faqSchema([{ question: `What is ${solution.keyword}?`, answer: `${solution.short} ${solution.hero.description}` }]),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: solution.name, path: `/solutions/${solution.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={solution.keyword}
        icon={solution.icon}
        breadcrumb={{ label: "Solutions", href: "/solutions" }}
        title={solution.hero.title}
        description={solution.hero.description}
        visual={<FlowDiagram flow={solution.flow} />}
      />

      <Section>
        <AnswerBlock question={`What is ${solution.keyword}?`} answer={solution.short} />
        <JourneyRail steps={solution.steps} className="mt-14" />
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="Capabilities used" title={`WALOOP Features for ${solution.name}`} />
        <PlatformCards slugs={solution.uses} numbered={false} className="mt-14 lg:grid-cols-3" />
      </Section>

      <CTASection heading={ctaLibrary.automate.heading} description={ctaLibrary.automate.description} />
    </>
  );
}
