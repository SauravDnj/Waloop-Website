"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SegmentedToggleOption = {
  label: string;
  value: string;
  badge?: string;
};

type SegmentedToggleProps = {
  options: SegmentedToggleOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function SegmentedToggle({ options, value, onChange, className }: SegmentedToggleProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "relative inline-flex items-center gap-1 rounded-btn border border-border bg-surface-alt p-1",
        className,
      )}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.value)}
            className="relative rounded-[8px] px-4 py-2 text-sm font-medium transition-colors"
          >
            {active && (
              <motion.span
                layoutId="segmented-toggle-active"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-[8px] bg-[image:var(--gradient-icon-lime)] shadow-card"
              />
            )}
            <span
              className={cn(
                "relative z-10 inline-flex items-center gap-1.5",
                active ? "text-[#1F1F25]" : "text-text-muted",
              )}
            >
              {option.label}
              {option.badge && (
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                    active ? "bg-[#1F1F25]/10 text-[#1F1F25]" : "bg-brand-green/15 text-brand-green-deep dark:text-brand-green",
                  )}
                >
                  {option.badge}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
