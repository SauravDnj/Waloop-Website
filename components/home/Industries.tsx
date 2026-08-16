"use client";

import * as React from "react";
import * as Icons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { industries } from "@/lib/content";

export function Industries() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = industries[activeIndex];
  const Icon = (Icons[active.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Proven messaging solutions for every industry"
          description="WALOOP powers India's most demanding enterprise communication workflows since 2015."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {industries.map((industry, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={industry.tab}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-brand-green bg-brand-green/10 text-brand-green-deep dark:text-brand-green"
                    : "border-transparent bg-surface-alt text-text-muted hover:text-text",
                )}
              >
                {industry.tab}
              </button>
            );
          })}
        </div>

        <div className="soft-panel relative mt-10 overflow-hidden p-8 sm:p-12 lg:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-green-deep dark:text-brand-green">{active.category}</p>
                <h3 className="mt-3 font-sans text-2xl font-semibold text-text sm:text-3xl">{active.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">{active.description}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-medium text-text">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center">
                <div aria-hidden className="absolute inset-0 rounded-full bg-hero-glow blur-2xl" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-[20px] bg-[image:var(--gradient-icon-lime)] text-[#1F1F25] shadow-brand-glow">
                  <Icon className="h-14 w-14" />
                </div>
                <div className="soft-panel absolute -bottom-2 right-2 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-text-soft">Trusted by</p>
                  <p className="text-sm font-bold text-text">{active.count}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
