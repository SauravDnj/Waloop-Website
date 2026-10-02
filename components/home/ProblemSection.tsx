"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problem } from "@/lib/content";

const connected = ["Channels", "CRM", "Chatbot", "Automation", "AI", "Mini-Apps / Payments", "Analytics"];

/** §6 Problem — fragmented tools on the left, WALOOP on the right. */
export function ProblemSection() {
  return (
    <Section tone="tint">
      <SectionHeading eyebrow="The problem" title={problem.heading} description={problem.copy[0]} />

      <div className="mt-14 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        {/* Before: silos */}
        <div className="soft-panel p-6">
          <p className="mb-4 flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-text-soft">
            <X className="h-4 w-4 text-red-500" /> Disconnected tools
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {problem.silos.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: i % 2 ? 2 : -2 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-dashed border-text-soft/40 bg-surface px-3 py-4 text-center text-sm font-semibold text-text-muted"
              >
                {s}
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-muted">{problem.copy[1]}</p>
        </div>

        <div className="flex justify-center" aria-hidden>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white shadow-brand-glow">
            <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
          </span>
        </div>

        {/* After: WALOOP */}
        <div className="border-brand-gradient rounded-[var(--radius-panel)] p-6 shadow-glow">
          <div className="flex flex-col items-center">
            <Image src="/brand/waloop-icon.png" alt="" width={512} height={228} className="w-24" />
            <p className="mt-1 font-heading text-lg font-bold text-text">WALOOP</p>
            <div aria-hidden className="mt-3 h-4 w-px bg-brand-blue/40" />
            <div className="flex flex-wrap justify-center gap-2">
              {connected.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="rounded-full border border-brand-blue/25 bg-brand-blue/[0.06] px-3 py-1.5 text-sm font-semibold text-text"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-text-muted">{problem.copy[2]}</p>
        </div>
      </div>
    </Section>
  );
}
