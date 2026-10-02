"use client";

import * as React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CalendarDays, RotateCcw, Send } from "lucide-react";
import { Bubble, PhoneFrame, ReplyButton } from "@/components/mockups/PhoneFrame";
import { TypingIndicator } from "@/components/ui/TypingIndicator";

// §26 — the realistic WhatsApp conversation example.
type Item =
  | { kind: "customer"; text: string }
  | { kind: "bot"; text: string; buttons?: string[]; plans?: string[]; actions?: { icon: "date" | "send"; label: string }[] };

const script: Item[] = [
  { kind: "customer", text: "Hi, I want to know about your product." },
  { kind: "bot", text: "Absolutely! What would you like to explore?", buttons: ["Products", "Pricing", "Book a Demo"] },
  { kind: "customer", text: "Pricing" },
  {
    kind: "bot",
    text: "Choose the option that fits your business.",
    plans: ["Starter — ₹15,000/year", "Growth — ₹30,000/year", "Enterprise — Custom Pricing"],
  },
  { kind: "customer", text: "Book a Demo" },
  {
    kind: "bot",
    text: "Great. Please select a preferred date and provide your contact details.",
    actions: [
      { icon: "date", label: "Select Date" },
      { icon: "send", label: "Submit Details" },
    ],
  },
];

export function WhatsAppConversation({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const [shown, setShown] = React.useState(0);
  const [typing, setTyping] = React.useState(false);
  const scroller = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!inView || shown >= script.length) return;
    const next = script[shown];
    const isBot = next.kind === "bot";
    let typingTimer: ReturnType<typeof setTimeout> | undefined;
    if (isBot) typingTimer = setTimeout(() => setTyping(true), 300);
    const timer = setTimeout(
      () => {
        setTyping(false);
        setShown((n) => n + 1);
      },
      isBot ? 1500 : 900,
    );
    return () => {
      clearTimeout(timer);
      if (typingTimer) clearTimeout(typingTimer);
    };
  }, [inView, shown]);

  React.useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  return (
    <div ref={ref} className={className}>
      <PhoneFrame
        footer={
          <div className="flex items-center gap-2 bg-[#f0f2f5] px-2.5 py-2 dark:bg-[#202c33]">
            <span className="flex-1 rounded-full bg-white px-3 py-1.5 text-xs text-[#667781] dark:bg-[#2a3942] dark:text-[#8696a0]">
              Message
            </span>
            <button
              type="button"
              onClick={() => setShown(0)}
              aria-label="Replay conversation"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008069] text-white dark:bg-[#00a884]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        }
      >
        <div ref={scroller} className="no-scrollbar flex h-full flex-col gap-2 overflow-y-auto px-3 py-3">
          <span className="mx-auto rounded-md bg-white/80 px-2 py-0.5 text-[10px] text-[#54656f] shadow-sm dark:bg-[#182229] dark:text-[#8696a0]">
            TODAY
          </span>
          <AnimatePresence initial={false}>
            {script.slice(0, shown).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-1"
              >
                {item.kind === "customer" ? (
                  <Bubble from="customer">{item.text}</Bubble>
                ) : (
                  <>
                    <Bubble from="business">
                      {item.text}
                      {item.plans && (
                        <span className="mt-1.5 flex flex-col gap-1 border-t border-black/5 pt-1.5 dark:border-white/10">
                          {item.plans.map((p) => (
                            <span key={p} className="font-semibold">
                              {p}
                            </span>
                          ))}
                        </span>
                      )}
                    </Bubble>
                    {item.buttons && (
                      <div className="flex max-w-[85%] flex-col gap-1">
                        {item.buttons.map((b) => (
                          <ReplyButton key={b}>{b}</ReplyButton>
                        ))}
                      </div>
                    )}
                    {item.actions && (
                      <div className="flex max-w-[85%] flex-col gap-1">
                        {item.actions.map((a) => (
                          <ReplyButton key={a.label}>
                            <span className="inline-flex items-center gap-1.5">
                              {a.icon === "date" ? <CalendarDays className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
                              {a.label}
                            </span>
                          </ReplyButton>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {typing && <TypingIndicator className="bg-white dark:bg-[#202c33]" />}
        </div>
      </PhoneFrame>
    </div>
  );
}
