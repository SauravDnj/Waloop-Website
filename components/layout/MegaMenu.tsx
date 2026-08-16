"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/lib/content";

export function MegaMenu({ group }: { group: NavGroup }) {
  const [open, setOpen] = React.useState(false);
  const timeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }
  function hide() {
    timeout.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        href={group.href}
        className="flex items-center gap-1 px-3.5 py-2 font-heading text-xs font-semibold uppercase tracking-wide text-text transition-colors hover:text-brand-green-deep dark:hover:text-brand-green"
        aria-expanded={open}
      >
        {group.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,640px)] -translate-x-1/2 overflow-hidden rounded-[8px] border border-border bg-surface shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
          >
            <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
              {group.columns.map((col) => (
                <div key={col.heading}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-soft">{col.heading}</p>
                  <ul className="flex flex-col gap-3.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="group flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                          <span>
                            <span className="block text-sm font-semibold text-text group-hover:text-brand-green-deep dark:group-hover:text-brand-green">
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="mt-0.5 block text-xs text-text-soft">{link.description}</span>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {group.highlight && (
              <div className="flex items-center justify-between gap-4 border-t border-border bg-gradient-to-r from-brand-green/10 to-brand-lime/10 px-6 py-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-green-deep dark:text-brand-green">
                      {group.highlight.badge}
                    </p>
                    <p className="text-sm font-semibold text-text">{group.highlight.title}</p>
                    <p className="text-xs text-text-soft">{group.highlight.description}</p>
                  </div>
                </div>
                <Link
                  href={group.highlight.href}
                  className="flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-green hover:underline"
                >
                  {group.highlight.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
