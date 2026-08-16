"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const BAR_COUNT = 24;
// Deterministic pseudo-random heights so server and client render identically (no hydration mismatch).
const HEIGHTS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const n = Math.sin(i * 12.9898) * 43758.5453;
  return 0.3 + (n - Math.floor(n)) * 0.7;
});

export function VoiceWaveform({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("flex h-10 items-center gap-[3px]", className)}>
      {HEIGHTS.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-brand-green to-brand-lime"
          initial={{ height: `${h * 100}%` }}
          animate={reduceMotion ? { height: `${h * 100}%` } : { height: [`${h * 40}%`, `${h * 100}%`, `${h * 40}%`] }}
          transition={{
            duration: 0.8 + (i % 5) * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  );
}
