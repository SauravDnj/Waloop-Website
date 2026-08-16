import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrations } from "@/lib/content";

export function Integrations() {
  const half = Math.ceil(integrations.length / 2);
  const rowA = integrations.slice(0, half);
  const rowB = integrations.slice(half);

  return (
    <section id="integrations" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Plug into your existing stack"
          description="Native connectors for every major marketing, CRM and engagement platform — no custom engineering needed."
        />
      </div>

      <Reveal delay={0.15} className="mt-16 flex flex-col gap-5">
        <Marquee durationSeconds={32}>
          {rowA.map((partner) => (
            <div key={partner.name} className="flex shrink-0 items-center gap-3 whitespace-nowrap border border-border px-5 py-3">
              <span className="font-heading text-sm font-extrabold text-brand-green-deep dark:text-brand-green">{partner.name.slice(0, 2).toUpperCase()}</span>
              <span className="text-base font-medium text-text">{partner.name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee durationSeconds={36} className="[direction:rtl]">
          {rowB.map((partner) => (
            <div key={partner.name} className="flex shrink-0 items-center gap-3 whitespace-nowrap [direction:ltr]">
              <span className="text-sm font-extrabold text-brand-green">{partner.name.slice(0, 2).toUpperCase()}</span>
              <span className="text-base font-medium text-text">{partner.name}</span>
            </div>
          ))}
        </Marquee>
      </Reveal>

      <Reveal delay={0.25} className="mt-12 text-center">
        <Link href="/integrations" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green-deep dark:text-brand-green">
          Explore All Plugins &amp; API Connectors <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
