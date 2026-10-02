"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RailStep = { title: string; description?: string; step?: string };

/**
 * Linear journey timeline — horizontal on desktop, vertical on mobile (§40, §74).
 * Every step carries its own text so the diagram is never the only source of information.
 */
export function JourneyRail({ steps, className, vertical = false }: { steps: RailStep[]; className?: string; vertical?: boolean }) {
  const h = !vertical; // horizontal layout on desktop
  return (
    <ol
      className={cn("flex flex-col", h && "lg:grid lg:gap-3", className)}
      // grid-template only takes effect at lg, where the list switches to grid
      style={h ? { gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` } : undefined}
    >
      {steps.map((s, i) => (
        <motion.li
          key={s.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className={cn("relative flex gap-4 pb-6 last:pb-0", h && "lg:flex-col lg:gap-3 lg:pb-0")}
        >
          {i < steps.length - 1 && (
            <>
              <span aria-hidden className={cn("absolute bottom-0 left-[17px] top-9 w-px overflow-hidden bg-border", h && "lg:hidden")}>
                <span className="animate-flow-y absolute left-0 top-0 h-4 w-px bg-brand-gradient motion-reduce:hidden" />
              </span>
              {h && (
                <span aria-hidden className="absolute left-10 right-[-0.5rem] top-[17px] hidden h-px overflow-hidden bg-border lg:block">
                  <span className="animate-flow-x absolute left-0 top-0 h-px w-8 bg-brand-gradient motion-reduce:hidden" />
                </span>
              )}
            </>
          )}
          <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-heading text-xs font-bold text-white shadow-brand-glow">
            {s.step ?? String(i + 1).padStart(2, "0")}
          </span>
          <div className={cn("min-w-0 pt-1", h && "lg:pt-0")}>
            <p className="font-heading text-sm font-bold uppercase tracking-wide text-text">{s.title}</p>
            {s.description && <p className="mt-1 text-sm leading-relaxed text-text-muted">{s.description}</p>}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
