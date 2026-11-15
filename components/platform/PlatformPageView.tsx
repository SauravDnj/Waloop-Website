import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Info } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { PlatformVisual } from "@/components/visuals/PlatformVisual";
import { ProductFAQSection } from "@/components/product/ProductFAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { ctas, siteConfig } from "@/lib/content";
import { platformHref, type PlatformArea } from "@/lib/platform";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

/** Platform page template: hero → "What is {keyword}?" → features → journey → FAQ → CTA. */
export function PlatformPageView({ area }: { area: PlatformArea }) {
  const faqs = [{ question: area.question, answer: area.whatIsIt }, ...area.faqs];

  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Platform", path: "/platform" },
            { name: area.name, path: platformHref(area.slug) },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-hero-glow" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-xs font-semibold text-text-soft">
              <Link href="/platform" className="hover:text-text">
                Platform
              </Link>
              <span>/</span>
              <span className="text-text">{area.name}</span>
            </nav>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-brand-green-deep shadow-card">
              <DynamicIcon name={area.icon} className="h-3.5 w-3.5" /> {area.keyword}
            </span>
            <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl">{area.hero.title}</h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">{area.hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {area.hero.bullets.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/[0.07] px-3 py-1 text-sm font-semibold text-text">
                  <Check className="h-3.5 w-3.5 text-brand-green" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href={siteConfig.appUrl} variant="brand" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                {area.cta.label}
              </Button>
              <Button as="a" href={ctas.bookDemo.href} variant="secondary" size="lg">
                <CalendarCheck className="h-4 w-4" /> {ctas.bookDemo.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-xl">
            <PlatformVisual visual={area.visual} />
          </Reveal>
        </div>
      </section>

      {/* Direct answer (AEO) + features */}
      <Section tone="tint">
        <AnswerBlock question={area.question} answer={area.whatIsIt} />
        <h2 className="mt-16 text-center font-heading text-2xl font-bold text-text sm:text-3xl">{area.features.heading}</h2>
        <RevealGroup
          className={cn(
            "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2",
            area.features.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2",
          )}
        >
          {area.features.items.map((f) => (
            <RevealItem key={f.title} className="soft-panel flex h-full items-start gap-4 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <DynamicIcon name={f.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-text">{f.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{f.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        {area.note && (
          <p className="mx-auto mt-8 flex max-w-3xl items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-deep" /> {area.note}
          </p>
        )}
      </Section>

      {/* Journey */}
      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="How it works" title={area.flow.title} description={area.flow.caption} align="left" />
            <div className="mt-8 flex flex-wrap gap-2">
              {area.useCases.map((u) => (
                <span key={u} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text-muted">
                  {u}
                </span>
              ))}
            </div>
          </div>
          <FlowDiagram flow={area.flow} showCaption={false} />
        </div>
      </Section>

      <ProductFAQSection heading={`${area.keyword} — FAQ`} items={faqs} />

      <CTASection
        heading={area.cta.heading}
        description={area.cta.description}
        primary={{ label: area.cta.label, href: siteConfig.appUrl }}
      />
    </>
  );
}
