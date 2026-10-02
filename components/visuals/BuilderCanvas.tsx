"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type BuilderNode = { type: string; title: string; tone?: "trigger" | "action" | "logic" | "end" };
export type BuilderBranch = { label: string; nodes: BuilderNode[] };

const toneClass: Record<NonNullable<BuilderNode["tone"]>, string> = {
  trigger: "bg-brand-blue text-white",
  action: "bg-brand-cyan text-white",
  logic: "bg-amber-500 text-white",
  end: "bg-brand-green text-white",
};

function NodeCard({ node, delay }: { node: BuilderNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      className="mx-auto w-full max-w-[13.5rem] overflow-hidden rounded-xl border border-border bg-surface text-left shadow-soft"
    >
      <span className={cn("block px-3 py-1 text-[9px] font-bold uppercase tracking-widest", toneClass[node.tone ?? "action"])}>
        {node.type}
      </span>
      <span className="block px-3 py-2 text-[12.5px] font-semibold leading-snug text-text">{node.title}</span>
    </motion.div>
  );
}

function Wire() {
  return (
    <div aria-hidden className="relative mx-auto h-5 w-px overflow-hidden bg-brand-blue/40">
      <span className="animate-flow-y absolute left-0 top-0 h-2.5 w-px bg-brand-blue motion-reduce:hidden" />
    </div>
  );
}

/** Visual "builder" canvas used to illustrate the Chatbot and Automation builders. */
export function BuilderCanvas({
  label,
  nodes,
  branches,
  after,
  className,
}: {
  label: string;
  nodes: BuilderNode[];
  branches?: BuilderBranch[];
  after?: BuilderNode[];
  className?: string;
}) {
  let i = 0;
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-surface-alt/60 p-5 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px]",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-md bg-surface px-2 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-text-soft shadow-card">
          {label}
        </span>
        <span className="flex gap-1" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </span>
      </div>

      {nodes.map((n, idx) => (
        <div key={n.title}>
          {idx > 0 && <Wire />}
          <NodeCard node={n} delay={0.08 * i++} />
        </div>
      ))}

      {branches && (
        <>
          <Wire />
          <div className="mx-[16%] h-px bg-brand-blue/40" aria-hidden />
          <div className={cn("grid gap-2", branches.length >= 3 ? "grid-cols-3" : "grid-cols-2")}>
            {branches.map((b) => (
              <div key={b.label} className="flex flex-col">
                <Wire />
                <span className="mx-auto rounded-full bg-surface px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-green-deep shadow-card">
                  {b.label}
                </span>
                {b.nodes.map((n) => (
                  <div key={n.title}>
                    <Wire />
                    <NodeCard node={n} delay={0.08 * i++} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}

      {after?.map((n) => (
        <div key={n.title}>
          <Wire />
          <NodeCard node={n} delay={0.08 * i++} />
        </div>
      ))}
    </div>
  );
}
