"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/lib/content";

export const NavIcon = DynamicIcon;

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
    <div className="relative" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      <Link
        href={group.href}
        className="flex items-center gap-1 rounded-lg px-2.5 py-2 font-heading text-[13px] font-semibold text-text transition-colors hover:bg-surface-alt hover:text-brand-green-deep"
        aria-expanded={open}
        aria-haspopup="true"
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
            className="absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,720px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_40px_-12px_rgba(7,19,48,0.18)]"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 p-5 sm:grid-cols-2">
              {group.columns.map((col) => (
                <div key={col.heading}>
                  <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-text-soft">{col.heading}</p>
                  <ul className="flex flex-col">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-surface-alt">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/[0.08] text-brand-green-deep transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                            <NavIcon name={link.icon} className="h-[18px] w-[18px]" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-text">{link.label}</span>
                            {link.description && (
                              <span className="mt-0.5 line-clamp-2 text-xs leading-snug text-text-soft">{link.description}</span>
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
              <div className="flex items-center justify-between gap-4 border-t border-border bg-gradient-to-r from-brand-blue/[0.07] to-brand-green/[0.07] px-6 py-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-deep" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-green-deep">{group.highlight.badge}</p>
                    <p className="text-sm font-semibold text-text">{group.highlight.title}</p>
                    <p className="text-xs text-text-soft">{group.highlight.description}</p>
                  </div>
                </div>
                <Link
                  href={group.highlight.href}
                  className="flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-green-deep hover:underline"
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
