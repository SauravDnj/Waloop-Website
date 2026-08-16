"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedCheckmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-deep dark:text-brand-green", className)}>
      <motion.svg viewBox="0 0 52 52" className="h-7 w-7" fill="none">
        <motion.circle
          cx="26"
          cy="26"
          r="24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.path
          d="M15 27 L23 35 L38 18"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
        />
      </motion.svg>
    </span>
  );
}
