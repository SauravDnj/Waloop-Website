"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCheck, Contact, Send } from "lucide-react";
import { ChannelIcon } from "@/components/brand/ChannelIcon";

type Msg = { id: number; from: "customer" | "bot"; text: string };

// One short WhatsApp exchange that plays on a loop next to the infinity loop.
const SCRIPT: (Msg | "typing")[] = [
  { id: 1, from: "customer", text: "Hi! I want to book a demo" },
  "typing",
  { id: 2, from: "bot", text: "Sure! Which day suits you?" },
  { id: 3, from: "customer", text: "Tuesday, 11 AM" },
  "typing",
  { id: 4, from: "bot", text: "Done — demo booked for Tue, 11 AM" },
];

const STEP_MS = 1700;
const HOLD_STEPS = 3; // pause on the finished chat before restarting

function useChatStep() {
  const reduce = useReducedMotion();
  const [step, setStep] = React.useState(reduce ? SCRIPT.length : 0);
  React.useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setStep((s) => (s >= SCRIPT.length + HOLD_STEPS ? 0 : s + 1)), STEP_MS);
    return () => window.clearInterval(id);
  }, [reduce]);
  return step;
}

/** Mini WhatsApp chat that types itself — sits under the loop in the hero. */
export function HeroChatCard({ className }: { className?: string }) {
  const step = useChatStep();
  const shown = SCRIPT.slice(0, Math.min(step, SCRIPT.length));
  const typing = shown[shown.length - 1] === "typing";
  const messages = shown.filter((m): m is Msg => m !== "typing").slice(-3);

  return (
    <div
      aria-hidden
      className={`w-[17rem] overflow-hidden rounded-2xl border border-border bg-[#efeae2] shadow-soft dark:bg-[#0b141a] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2.5 bg-[#008069] px-3 py-2 text-white dark:bg-[#1f2c34]">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          <ChannelIcon channel="whatsapp" className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="font-heading text-xs font-bold">WALOOP Bot</p>
          <p className="text-[11px] text-white/80">{typing ? "typing…" : "online"}</p>
        </div>
      </div>

      <div className="flex h-[9.5rem] flex-col justify-end gap-1.5 px-2.5 py-2.5">
        <AnimatePresence initial={false} mode="popLayout">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              layout
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={
                m.from === "customer"
                  ? "max-w-[85%] self-start rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 text-xs text-[#111b21] shadow-sm dark:bg-[#202c33] dark:text-[#e9edef]"
                  : "max-w-[85%] self-end rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 text-xs text-[#111b21] shadow-sm dark:bg-[#005c4b] dark:text-[#e9edef]"
              }
            >
              {m.text}
              {m.from === "bot" && <CheckCheck className="ml-1 inline h-3 w-3 text-[#53bdeb]" />}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-1 self-end rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 dark:bg-[#005c4b]"
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

      <div className="flex items-center gap-2 border-t border-black/5 bg-[#f0f2f5] px-2.5 py-2 dark:border-white/5 dark:bg-[#1f2c34]">
        <span className="flex-1 rounded-full bg-white px-3 py-1 text-[11px] text-[#667781] dark:bg-[#2a3942] dark:text-[#8696a0]">Message</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00a884] text-white">
          <Send className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

/** Floating WhatsApp badge with a pulsing ring and unread counter. */
export function HeroWhatsAppBadge({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      <span className="relative block">
      <span className="absolute inset-0 animate-ping rounded-2xl bg-[#25D366]/40 motion-reduce:animate-none" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-soft">
        <ChannelIcon channel="whatsapp" className="h-8 w-8" />
      </span>
      <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-bg bg-[#ff3b30] px-1 font-heading text-xs font-bold text-white">
        3
      </span>
      </span>
    </motion.div>
  );
}

const TOASTS = ["New lead saved to CRM", "Follow-up scheduled", "Payment received"];

/** Small notification that cycles through what WALOOP does after each chat. */
export function HeroToast({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % TOASTS.length), 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div aria-hidden className={`h-11 ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-soft backdrop-blur"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-btn)] text-white">
            <Contact className="h-4 w-4" />
          </span>
          <span className="whitespace-nowrap font-heading text-xs font-bold text-text">{TOASTS[i]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
