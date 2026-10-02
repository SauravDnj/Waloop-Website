"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { PlatformVisual } from "@/components/visuals/PlatformVisual";
import { corePillars, platformAreas, platformHref } from "@/lib/platform";
import { cn } from "@/lib/utils";

const areas = corePillars.map((s) => platformAreas.find((a) => a.slug === s)!);

/** §46.6–13 — Channels, CRM, Chatbots, Automation, Mini-Apps, Payments, Dynamic Experiences, AI. */
export function PlatformShowcase() {
  const [active, setActive] = React.useState(0);
  const area = areas[active];

  return (
    <Section tone="tint" id="capabilities">
      <SectionHeading
        eyebrow="Platform capabilities"
        title="Every Capability, Explained in One Short Section"
        description="Pick a capability to see what it is, what you can do with it, and how it looks inside WALOOP."
      />

      <div role="tablist" aria-label="Platform capabilities" className="no-scrollbar mt-12 flex gap-2 overflow-x-auto pb-2 lg:justify-center">
        {areas.map((a, i) => (
          <button
            key={a.slug}
            role="tab"
            type="button"
            id={`cap-tab-${a.slug}`}
            aria-selected={active === i}
            aria-controls="cap-panel"
            onClick={() => setActive(i)}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-heading text-sm font-semibold transition-all",
              active === i
                ? "border-transparent bg-brand-gradient text-white shadow-brand-glow"
                : "border-border bg-surface text-text-muted hover:text-text",
            )}
          >
            <DynamicIcon name={a.icon} className="h-4 w-4" />
            {a.name}
          </button>
        ))}
      </div>

      <div id="cap-panel" role="tabpanel" aria-labelledby={`cap-tab-${area.slug}`} className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={area.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
          >
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand-green-deep">{area.hero.eyebrow}</p>
              <h3 className="mt-3 text-balance font-heading text-3xl font-bold text-text">{area.hero.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">{area.whatIsIt}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {area.features.items.slice(0, 6).map((f) => (
                  <li key={f.title} className="flex items-start gap-2 text-sm text-text">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>
                      <span className="font-semibold">{f.title}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-text-muted">
                <span className="font-semibold text-text">Why it matters: </span>
                {area.solution.body[0]}
              </p>
              <Button as="a" href={platformHref(area.slug)} variant="primary" className="mt-8" icon={<ArrowRight className="h-4 w-4" />}>
                {area.cta.label}
              </Button>
            </div>
            <div className="mx-auto w-full max-w-xl">
              <PlatformVisual visual={area.visual} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
