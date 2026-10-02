"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { useCaseFlows } from "@/lib/journeys";
import { cn } from "@/lib/utils";

const featured = useCaseFlows.filter((f) => ["lead-generation", "customer-support", "e-commerce", "appointment"].includes(f.slug));

/** §27–30 complete examples as a tabbed set of journeys. */
export function UseCasesSection() {
  const [active, setActive] = React.useState(0);
  const flow = featured[active];
  return (
    <Section id="use-cases">
      <SectionHeading
        eyebrow="Use cases"
        title="Complete Journeys, Step by Step"
        description="Real examples of how WALOOP capabilities connect — from the first message to the final action."
      />
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div role="tablist" aria-label="Use cases" className="flex flex-col gap-2">
          {featured.map((f, i) => (
            <button
              key={f.slug}
              role="tab"
              type="button"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors",
                active === i ? "border-brand-blue/40 bg-brand-blue/[0.05]" : "border-border bg-surface hover:bg-surface-alt",
              )}
            >
              <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", active === i ? "bg-brand-gradient text-white" : "bg-surface-alt text-brand-green-deep")}>
                <DynamicIcon name={f.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-heading text-base font-bold text-text">{f.title}</span>
                <span className="mt-1 line-clamp-2 text-sm text-text-muted">{f.caption}</span>
              </span>
            </button>
          ))}
          <Link href="/use-cases" className="mt-2 inline-flex items-center gap-1 px-1 text-sm font-semibold text-brand-green-deep hover:underline">
            See all use cases <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <FlowDiagram key={flow.slug} flow={flow} />
      </div>
    </Section>
  );
}
