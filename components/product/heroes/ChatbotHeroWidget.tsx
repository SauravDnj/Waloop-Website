"use client";

import * as React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { BadgeCheck, Bot, CalendarClock, UserRound } from "lucide-react";
import { TypingIndicator } from "@/components/ui/TypingIndicator";

const slots = [
  { label: "Today 4:00 PM IST", status: "Available" },
  { label: "Tomorrow 11:30 AM IST", status: "Available" },
];

export function ChatbotHeroWidget() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-15% 0px" });
  const [stage, setStage] = React.useState<"user" | "typing" | "reply" | "slots">("user");

  React.useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setStage("typing"), 600);
    const t2 = setTimeout(() => setStage("reply"), 1700);
    const t3 = setTimeout(() => setStage("slots"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [inView]);

  const stageOrder = ["user", "typing", "reply", "slots"];
  const reached = (s: string) => stageOrder.indexOf(stage) >= stageOrder.indexOf(s);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(closest-side,rgba(152,255,3,0.18),transparent)] blur-2xl" />

      <div className="soft-panel overflow-hidden">
        <div className="flex items-center justify-between bg-[image:var(--gradient-dark-btn)] px-5 py-4 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <Bot className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">WALOOP WhatsApp AI Assistant</p>
              <p className="flex items-center gap-1 text-[11px] text-white/85">
                <BadgeCheck className="h-3 w-3" /> Official Business · Verified
              </p>
            </div>
          </div>
        </div>

        <div className="flex min-h-[280px] flex-col gap-3 bg-[radial-gradient(circle_at_top,rgba(152,255,3,0.06),transparent)] px-5 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="ml-auto max-w-[82%]"
          >
            <div className="rounded-2xl rounded-tr-sm bg-brand-green-dark px-4 py-2.5 text-sm text-white">
              Hello! I want to schedule a product demo for Bulk SMS &amp; WhatsApp API.
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {stage === "typing" && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mr-auto"
              >
                <TypingIndicator />
              </motion.div>
            )}
          </AnimatePresence>

          {reached("reply") && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mr-auto max-w-[85%]"
            >
              <div className="rounded-2xl rounded-tl-sm bg-surface-alt px-4 py-2.5 text-sm text-text">
                Hi! 👋 I am your AI assistant. I can schedule a demo with our technical team in 30 seconds.
              </div>
            </motion.div>
          )}

          {reached("slots") && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mr-auto w-[92%] rounded-2xl rounded-tl-sm border border-border bg-bg px-4 py-3.5"
            >
              <p className="flex items-center gap-1.5 text-xs font-semibold text-text">
                <CalendarClock className="h-3.5 w-3.5 text-brand-green-deep dark:text-brand-green" />
                Select Available Time Slot
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {slots.map((slot) => (
                  <div
                    key={slot.label}
                    className="flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2"
                  >
                    <span className="text-xs font-medium text-text">{slot.label}</span>
                    <span className="rounded-full bg-brand-green/15 px-2 py-0.5 text-[10px] font-semibold text-brand-green-deep dark:text-brand-green">
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" className="rounded-full bg-brand-green-dark px-3.5 py-1.5 text-xs font-semibold text-white">
                  Confirm 4:00 PM
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-text"
                >
                  <UserRound className="h-3.5 w-3.5" />
                  Talk to Human
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex items-center gap-2 border-t border-border px-4 py-3">
          <input
            disabled
            placeholder="Type a message..."
            className="flex-1 rounded-full bg-surface-alt px-4 py-2.5 text-sm text-text placeholder:text-text-soft focus:outline-none"
          />
          <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
        </div>
      </div>
    </div>
  );
}
