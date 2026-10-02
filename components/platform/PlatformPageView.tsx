import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarCheck, Check, Info } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { PlatformVisual } from "@/components/visuals/PlatformVisual";
import { ProductFAQSection } from "@/components/product/ProductFAQSection";
import { Ecosystem3D } from "@/components/three/Scenes";
import { ctas, siteConfig } from "@/lib/content";
import { getPlatformArea, platformHref, type ContentGroup, type PlatformArea } from "@/lib/platform";
import { cn } from "@/lib/utils";

function Note({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-muted", className)}>
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-deep" /> {children}
    </p>
  );
}

function GroupSection({ group, tinted }: { group: ContentGroup; tinted: boolean }) {
  const hasLists = group.items.some((i) => i.list);
  return (
    <Section tone={tinted ? "tint" : "default"}>
      <div className={cn("grid grid-cols-1 gap-12", group.flow && "items-start lg:grid-cols-[1.1fr_0.9fr]")}>
        <div>
          <SectionHeading eyebrow={group.eyebrow} title={group.heading} description={group.description} align="left" />
          <RevealGroup
            className={cn(
              "mt-10 grid grid-cols-2 gap-3",
              hasLists ? "sm:grid-cols-2" : group.flow ? "sm:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4",
            )}
          >
            {group.items.map((item) => (
              <RevealItem key={item.title} className={cn("rounded-2xl border border-border bg-surface p-4", hasLists && "col-span-2 sm:col-span-1")}>
                <div className="flex items-center gap-3">
                  {item.icon && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/[0.08] text-brand-green-deep">
                      <DynamicIcon name={item.icon} className="h-[18px] w-[18px]" />
                    </span>
                  )}
                  <p className="font-heading text-sm font-bold text-text">{item.title}</p>
                </div>
                {item.description && <p className="mt-2 text-sm text-text-muted">{item.description}</p>}
                {item.list && (
                  <ul className="mt-3 space-y-1.5">
                    {item.list.map((l) => (
                      <li key={l} className="flex items-center gap-2 text-sm text-text-muted">
                        <Check className="h-3.5 w-3.5 text-brand-green" /> {l}
                      </li>
                    ))}
                  </ul>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
          {group.note && <Note className="mt-6">{group.note}</Note>}
        </div>
        {group.flow && (
          <Reveal delay={0.1}>
            <FlowDiagram flow={group.flow} />
          </Reveal>
        )}
      </div>
    </Section>
  );
}

/** Product page template (spec §73): hero → problem → solution → features → example → diagram → connections → use cases → CTA. */
export function PlatformPageView({ area }: { area: PlatformArea }) {
  const connected = area.connections.map((c) => ({ ...c, area: getPlatformArea(c.slug)! }));

  return (
    <>
      {/* 1. Hero */}
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
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-widest text-brand-green-deep shadow-card">
              <DynamicIcon name={area.icon} className="h-3.5 w-3.5" /> {area.hero.eyebrow}
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

      {/* 2–3. What is it · Problem · Solution (§76) */}
      <Section>
        <RevealGroup className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <RevealItem className="soft-panel p-7">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand-green-deep">What is it?</p>
            <p className="mt-4 text-lg font-semibold leading-snug text-text">{area.whatIsIt}</p>
          </RevealItem>
          <RevealItem className="soft-panel p-7">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-text-soft">The problem</p>
            <h2 className="mt-4 font-heading text-xl font-bold text-text">{area.problem.heading}</h2>
            {area.problem.body.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </RevealItem>
          <RevealItem className="border-brand-gradient rounded-[var(--radius-panel)] p-7 shadow-glow">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand-green">How WALOOP solves it</p>
            <h2 className="mt-4 font-heading text-xl font-bold text-text">{area.solution.heading}</h2>
            {area.solution.body.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </RevealItem>
        </RevealGroup>
      </Section>

      {/* 4. Features */}
      <Section tone="tint">
        <SectionHeading eyebrow={area.name} title={area.features.heading} description={area.features.description} align="left" />
        <RevealGroup
          className={cn(
            "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2",
            area.features.items.length === 2 || area.features.items.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3",
          )}
        >
          {area.features.items.map((f) => (
            <RevealItem key={f.title} className="soft-panel h-full p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <DynamicIcon name={f.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-text">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{f.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        {area.note && <Note className="mt-8">{area.note}</Note>}
      </Section>

      {/* 5–6. Example journey + diagram */}
      <Section>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <Badge className="mb-4">Example journey</Badge>
            <h2 className="text-balance font-heading text-3xl font-bold text-text sm:text-4xl">{area.flow.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{area.flow.caption}</p>
            <div className="mt-8">
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-text-soft">Use cases</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {area.useCases.map((u) => (
                  <span key={u} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text-muted">
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <FlowDiagram flow={area.flow} showCaption={false} />
        </div>

        {area.extraFlows && (
          <div className={cn("mt-14 grid grid-cols-1 gap-6", area.extraFlows.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2")}>
            {area.extraFlows.map((flow) => (
              <Reveal key={flow.title}>
                <FlowDiagram flow={flow} className="h-full" />
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      {/* Additional content groups (channel value, departments, lead source, media, content sources…) */}
      {area.groups?.map((group, i) => <GroupSection key={group.heading} group={group} tinted={i % 2 === 0} />)}

      {/* 8. Connections */}
      <Section tone={area.groups && area.groups.length % 2 === 1 ? "default" : "tint"}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Connected with"
              title={`How ${area.name} connects to the rest of WALOOP`}
              description="Every capability is part of one customer journey."
              align="left"
            />
            <ul className="mt-10 space-y-3">
              {connected.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={platformHref(c.slug)}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-brand-blue/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-green-deep group-hover:bg-brand-gradient group-hover:text-white">
                      <DynamicIcon name={c.area.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-heading text-sm font-bold text-text">{c.area.name}</span>
                      <span className="block text-sm text-text-muted">{c.how}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-text-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <Ecosystem3D
              centerLabel={area.name}
              nodes={connected.map((c) => c.area.name)}
              radius={1.9}
              className="mx-auto max-w-[480px]"
            />
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <ProductFAQSection heading={`${area.name} — questions`} items={area.faqs} />

      {/* 10. CTA */}
      <CTASection
        heading={area.cta.heading}
        description={area.cta.description}
        primary={{ label: area.cta.label, href: siteConfig.appUrl }}
      />
    </>
  );
}
