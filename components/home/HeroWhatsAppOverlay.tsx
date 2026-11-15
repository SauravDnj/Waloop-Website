"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bell, CalendarCheck, Check, CheckCheck, Contact, Send } from "lucide-react";
import { ChannelIcon } from "@/components/brand/ChannelIcon";
import { cn } from "@/lib/utils";

type Msg = { id: number; from: "customer" | "bot"; text: string; time: string };
type Step = Msg | "typing";

// One short WhatsApp exchange that plays on a loop in the hero.
const SCRIPT: Step[] = [
  { id: 1, from: "customer", text: "Hi! I want to book a demo", time: "10:41" },
  "typing",
  { id: 2, from: "bot", text: "Sure! Which day suits you?", time: "10:41" },
  { id: 3, from: "customer", text: "Tuesday, 11 AM", time: "10:42" },
  "typing",
  { id: 4, from: "bot", text: "Done! Your demo is booked for Tuesday, 11 AM.", time: "10:42" },
];

// What WALOOP does behind the chat — each item completes once the chat reaches `at`.
const ACTIONS = [
  { icon: Contact, label: "Lead saved to CRM", at: 1 },
  { icon: CalendarCheck, label: "Demo booked", at: 6 },
  { icon: Bell, label: "Reminder scheduled", at: 7 },
];

const STEP_MS = 1600;
const LAST = SCRIPT.length + 1; // one extra beat for the reminder
const HOLD_STEPS = 3;

function useChatStep() {
  const reduce = useReducedMotion();
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setStep((s) => (s >= LAST + HOLD_STEPS ? 0 : s + 1)), STEP_MS);
    return () => window.clearInterval(id);
  }, [reduce]);
  return reduce ? LAST : step;
}

function ChatWindow({ step }: { step: number }) {
  const shown = SCRIPT.slice(0, Math.min(step, SCRIPT.length));
  const typing = shown[shown.length - 1] === "typing";
  const messages = shown.filter((m): m is Msg => m !== "typing").slice(-3);

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 bg-[#008069] px-4 py-3 text-white dark:bg-[#1f2c34]">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#25D366]">
          <ChannelIcon channel="whatsapp" className="h-5 w-5" />
        </span>
        <div className="min-w-0 leading-tight">
          <p className="truncate font-heading text-sm font-bold">WALOOP Bot</p>
          <p className="text-xs text-white/85">{typing ? "typing…" : "online"}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex h-56 flex-col justify-end gap-2 bg-[#efeae2] px-3 py-3 dark:bg-[#0b141a]">
        <span className="mb-auto self-center rounded-md bg-white/80 px-2 py-0.5 text-xs font-medium text-[#54656f] shadow-sm dark:bg-[#182229] dark:text-[#8696a0]">
          Today
        </span>
        <AnimatePresence initial={false} mode="popLayout">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              layout
              initial={{ opacity: 0, y: 12, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className={cn(
                "max-w-[82%] rounded-lg px-3 py-1.5 text-[13px] leading-snug text-[#111b21] shadow-sm dark:text-[#e9edef]",
                m.from === "customer"
                  ? "self-start rounded-tl-none bg-white dark:bg-[#202c33]"
                  : "self-end rounded-tr-none bg-[#d9fdd3] dark:bg-[#005c4b]",
              )}
            >
              {m.text}
              <span className="ml-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[11px] text-[#667781] dark:text-[#8696a0]">
                {m.time}
                {m.from === "bot" && <CheckCheck className="h-3.5 w-3.5 text-[#53bdeb]" />}
              </span>
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-1 self-end rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2.5 shadow-sm dark:bg-[#005c4b]"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[#667781] dark:bg-[#aebac1]"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Composer */}
      <div className="flex items-center gap-2 bg-[#f0f2f5] px-3 py-2.5 dark:bg-[#1f2c34]">
        <span className="flex-1 rounded-full bg-white px-3 py-1.5 text-xs text-[#667781] dark:bg-[#2a3942] dark:text-[#8696a0]">
          Message
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a884] text-white">
          <Send className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

function ActionList({ step }: { step: number }) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <p className="font-heading text-xs font-bold uppercase tracking-widest text-text-soft">WALOOP automation</p>
      {ACTIONS.map((a) => {
        const done = step >= a.at;
        return (
          <motion.div
            key={a.label}
            animate={{ opacity: done ? 1 : 0.55 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2.5 shadow-card"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-btn)] text-white">
              <a.icon className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1 font-heading text-sm font-semibold text-text">{a.label}</span>
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                done ? "border-transparent bg-[#25D366] text-white" : "border-border text-transparent",
              )}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/** Hero demo: a WhatsApp chat that plays itself, with the automation it triggers beside it. */
export function HeroLiveDemo({ className }: { className?: string }) {
  const step = useChatStep();
  return (
    <div aria-hidden className={cn("grid grid-cols-1 items-center gap-4 sm:grid-cols-[1.35fr_1fr]", className)}>
      <ChatWindow step={step} />
      <ActionList step={step} />
    </div>
  );
}
