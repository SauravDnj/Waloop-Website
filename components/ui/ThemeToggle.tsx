"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  // true on the client, false during SSR — avoids a theme-icon hydration mismatch
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-16 items-center overflow-hidden rounded-full border border-border bg-surface-alt px-1 transition-colors",
        "hover:border-brand-green/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60",
        className,
      )}
    >
      <AnimatePresence>
        {isDark && (
          <>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute left-2.5 top-2 h-[3px] w-[3px] rounded-full bg-white/70"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.18, duration: 0.3 }}
              className="absolute left-5 top-3.5 h-[2px] w-[2px] rounded-full bg-white/60"
            />
          </>
        )}
      </AnimatePresence>

      <motion.span
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-card"
      >
        <AnimatePresence mode="wait" initial={false}>
          {mounted && isDark ? (
            <motion.span
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
              className="absolute"
            >
              <Moon className="h-3.5 w-3.5" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
              className="absolute"
            >
              <Sun className="h-3.5 w-3.5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
