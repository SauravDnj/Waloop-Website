"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { StatItem } from "@/components/product/StatStrip";

type BreakdownItem = { label: string; percent: number };

type AnalyticsPreviewProps = {
  eyebrow: string;
  heading: string;
  description: string;
  stats: StatItem[];
  bars: number[];
  breakdown: BreakdownItem[];
};

export function AnalyticsPreview({ eyebrow, heading, description, stats, bars, breakdown }: AnalyticsPreviewProps) {
  const max = Math.max(...bars);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="soft-panel p-4 text-center">
                <AnimatedCounter value={stat.value} className="font-heading text-lg font-extrabold text-gradient-heading sm:text-xl" />
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-text-soft">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal delay={0.1} className="soft-panel p-6 lg:col-span-2">
            <p className="text-sm font-semibold text-text">Daily Traffic &amp; Bot Performance</p>
            <div className="mt-6 flex h-40 items-end gap-2">
              {bars.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(value / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-green to-brand-lime"
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16} className="soft-panel p-6">
            <p className="text-sm font-semibold text-text">Lead Intent Breakdown</p>
            <div className="mt-6 flex flex-col gap-4">
              {breakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{item.label}</span>
                    <span className="font-semibold text-text">{item.percent}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-alt">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-lime"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
