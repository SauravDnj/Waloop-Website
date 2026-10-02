"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Info } from "lucide-react";
import type { Flow, FlowBranch, FlowStep } from "@/lib/flows";
import { cn } from "@/lib/utils";

const nodeVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/** Vertical connector with a travelling pulse — the visual "flow" between steps. */
function Connector({ short = false }: { short?: boolean }) {
  return (
    <div aria-hidden className={cn("relative mx-auto w-px overflow-hidden bg-border", short ? "h-4" : "h-6")}>
      <span className="animate-flow-y absolute left-1/2 top-0 h-3 w-[3px] -translate-x-1/2 rounded-full bg-brand-gradient motion-reduce:hidden" />
    </div>
  );
}

function Node({ label, tone = "default" }: { label: string; tone?: "start" | "end" | "default" | "branch" }) {
  const [main, detail] = label.split(" — ");
  return (
    <motion.div
      variants={nodeVariants}
      className={cn(
        "relative mx-auto w-full max-w-[19rem] rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-text shadow-card",
        tone === "start" && "border-brand-gradient",
        tone === "end" && "border border-brand-green/40 bg-brand-green/[0.08]",
        tone === "default" && "border border-border bg-surface",
        tone === "branch" && "border border-brand-blue/30 bg-brand-blue/[0.06] text-brand-green-deep",
      )}
    >
      <span className="block leading-snug">{main}</span>
      {detail && <span className="mt-0.5 block text-xs font-medium text-text-muted">{detail}</span>}
    </motion.div>
  );
}

function Branches({ branches, isLast }: { branches: FlowBranch[]; isLast: boolean }) {
  const cols = branches.length >= 4 ? "grid-cols-2 sm:grid-cols-4" : branches.length === 3 ? "grid-cols-3" : "grid-cols-2";
  return (
    <div className="relative">
      {/* horizontal split rail */}
      <div aria-hidden className="mx-[12%] hidden h-px bg-border sm:block" />
      <div className={cn("grid gap-x-3 gap-y-4", cols)}>
        {branches.map((branch) => {
          const labelOnly = branch.steps.length === 0;
          return (
            <div key={branch.label} className="flex min-w-0 flex-col">
              <Connector short />
              {labelOnly ? (
                <Node label={branch.label} tone="branch" />
              ) : (
                <>
                  <motion.span
                    variants={nodeVariants}
                    className="mx-auto rounded-full bg-brand-gradient px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                  >
                    {branch.label}
                  </motion.span>
                  {branch.steps.map((step, i) => (
                    <React.Fragment key={step}>
                      <Connector short />
                      <Node label={step} tone={isLast && i === branch.steps.length - 1 ? "end" : "default"} />
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
      {!isLast && <div aria-hidden className="mx-[12%] mt-4 hidden h-px bg-border sm:block" />}
    </div>
  );
}

function StepView({ step, index, total }: { step: FlowStep; index: number; total: number }) {
  const isLast = index === total - 1;
  if (typeof step === "string") {
    return <Node label={step} tone={index === 0 ? "start" : isLast ? "end" : "default"} />;
  }
  return <Branches branches={step.branches} isLast={isLast} />;
}

type FlowDiagramProps = {
  flow: Flow;
  className?: string;
  /** Hide the card chrome when the diagram is embedded inside another panel. */
  bare?: boolean;
  showCaption?: boolean;
};

export function FlowDiagram({ flow, className, bare = false, showCaption = true }: FlowDiagramProps) {
  return (
    <figure className={cn(!bare && "soft-panel p-5 sm:p-7", className)}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <p className="font-heading text-xs font-bold uppercase tracking-widest text-text-soft">{flow.title}</p>
        {flow.conceptual && (
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-text-muted">
            <Info className="h-3 w-3" /> Conceptual example
          </span>
        )}
      </div>

      <motion.div
        role="list"
        aria-label={flow.title}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col"
      >
        {flow.steps.map((step, i) => (
          <div role="listitem" key={i}>
            {i > 0 && <Connector />}
            <StepView step={step} index={i} total={flow.steps.length} />
          </div>
        ))}
      </motion.div>

      {showCaption && <figcaption className="mt-6 text-sm leading-relaxed text-text-muted">{flow.caption}</figcaption>}
    </figure>
  );
}
