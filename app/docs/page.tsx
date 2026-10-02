import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { platformAreas, platformHref } from "@/lib/platform";
import { ctas } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP Documentation | How Each Platform Capability Works",
  description:
    "Documentation overview for WALOOP — channels, CRM, chatbots, automations, WhatsApp Mini-Apps, payments, dynamic experiences, AI, analytics and workspace.",
};

export default function DocsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        icon="BookOpen"
        title="How Each WALOOP Capability Works"
        description="A plain-language reference for every platform area: what it is, what it includes and how it connects. Exact capabilities can depend on your plan and configuration."
        primary={{ label: "Browse Guides", href: "/guides" }}
        secondary={{ label: "Get Support", href: "/support" }}
      />

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_1fr]">
          <nav aria-label="Documentation sections" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1">
              {platformAreas.map((a) => (
                <li key={a.slug}>
                  <a href={`#${a.slug}`} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-text-muted hover:bg-surface-alt hover:text-text">
                    <DynamicIcon name={a.icon} className="h-4 w-4" /> {a.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            {platformAreas.map((a) => (
              <Reveal key={a.slug}>
                <article id={a.slug} className="soft-panel scroll-mt-24 p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                      <DynamicIcon name={a.icon} className="h-5 w-5" />
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-text">{a.name}</h2>
                  </div>
                  <p className="mt-4 text-base text-text">{a.whatIsIt}</p>
                  <h3 className="mt-6 font-heading text-xs font-bold uppercase tracking-widest text-text-soft">Includes</h3>
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {a.features.items.map((f) => (
                      <li key={f.title} className="flex gap-2 text-sm text-text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        <span>
                          <span className="font-semibold text-text">{f.title}</span> — {f.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {a.note && <p className="mt-5 text-xs text-text-soft">{a.note}</p>}
                  <Link href={platformHref(a.slug)} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-green-deep hover:underline">
                    Read the full {a.name} overview <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection heading="Need Help in Your Workspace?" description="Raise a support ticket in WALOOP or talk to the team on WhatsApp." primary={ctas.talkToWaloop} />
    </>
  );
}
