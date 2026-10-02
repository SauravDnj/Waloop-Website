import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Ecosystem3D } from "@/components/three/Scenes";
import { industries } from "@/lib/industries";

/** §33–34 Industries + industry wheel around WALOOP. */
export function IndustriesSection({ tinted = true }: { tinted?: boolean }) {
  return (
    <Section tone={tinted ? "tint" : "default"} id="industries">
      <SectionHeading
        eyebrow="Industries"
        title="Built for Businesses That Communicate With Customers"
        description="WALOOP sits at the center; each industry connects to the platform capabilities it needs."
      />
      <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <Ecosystem3D nodes={industries.map((i) => i.name)} className="mx-auto max-w-[520px]" />
        </Reveal>
        <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {industries.map((ind) => (
            <RevealItem key={ind.slug}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-brand-blue/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-brand-green-deep transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <DynamicIcon name={ind.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1 font-heading text-sm font-bold text-text">
                    {ind.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                  <span className="mt-1 block text-[13px] leading-snug text-text-muted">{ind.useCases.join(" · ")}</span>
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
