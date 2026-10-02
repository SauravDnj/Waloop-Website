"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { connectedJourney, interactiveJourney, masterJourney } from "@/lib/journeys";
import { cn } from "@/lib/utils";

/** §47 "From First Message to Meaningful Action" + §50 interactive journey + §25 master diagram. */
export function JourneySection() {
  const [active, setActive] = React.useState(0);
  const step = interactiveJourney[active];

  return (
    <Section tone="dark" id="journey">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow opacity-70" />
      <div className="relative">
        <SectionHeading
          eyebrow="Customer journey"
          title={
            <>
              From First Message to <span className="text-gradient-brand">Meaningful Action</span>
            </>
          }
          description="A customer journey can start with a simple message. WALOOP can connect that conversation with customer data, automated questions, team routing, interactive experiences, payment-related actions, follow-up, and available analytics."
        />

        {/* Connected journey strip (§47) */}
        <ol className="mt-12 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2" aria-label="Connected journey">
          {connectedJourney.map((s, i) => (
            <li key={s} className="flex items-center gap-1.5">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-text">
                {s}
              </span>
              {i < connectedJourney.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-brand-cyan" aria-hidden />}
            </li>
          ))}
        </ol>

        {/* Interactive explorer (§50) */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div role="tablist" aria-label="Journey steps" className="flex flex-col gap-2">
            {interactiveJourney.map((s, i) => (
              <button
                key={s.key}
                role="tab"
                type="button"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "group flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all",
                  active === i ? "border-brand-cyan/50 bg-white/[0.08]" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]",
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                    active === i ? "bg-brand-gradient text-white" : "bg-white/10 text-text-muted",
                  )}
                >
                  <DynamicIcon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-heading text-[11px] font-bold uppercase tracking-widest text-text-soft">Step {i + 1}</span>
                  <span className="block font-heading text-base font-bold text-text">{s.label}</span>
                </span>
                <ChevronRight className={cn("h-4 w-4 text-text-soft transition-transform", active === i && "translate-x-1 text-brand-cyan")} />
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand-glow">
                  <DynamicIcon name={step.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-text sm:text-3xl">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text-muted">{step.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold text-text">
                      <CheckCircle2 className="h-4 w-4 text-brand-green" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2" aria-hidden>
                  {interactiveJourney.map((s, i) => (
                    <span key={s.key} className={cn("h-1.5 rounded-full transition-all", i === active ? "w-8 bg-brand-gradient" : "w-3 bg-white/15")} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Master customer journey (§25) */}
        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand-cyan">Master diagram</p>
            <h3 className="mt-3 font-heading text-3xl font-bold text-text">One customer. One connected journey.</h3>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{masterJourney.caption}</p>
            <p className="mt-4 text-sm text-text-soft">
              CONNECT → CAPTURE → UNDERSTAND → ENGAGE → AUTOMATE → CONVERT → SUPPORT → ANALYZE
            </p>
          </div>
          <FlowDiagram flow={masterJourney} showCaption={false} className="bg-none" />
        </div>
      </div>
    </Section>
  );
}
