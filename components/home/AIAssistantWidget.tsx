"use client";

import * as React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { TypingIndicator } from "@/components/ui/TypingIndicator";

const messages = [
  { from: "bot", text: "Hi! I'm the WALOOP AI Assistant. Ask me anything about WhatsApp API, SMS, or IVR." },
  { from: "user", text: "Can I automate order confirmations on WhatsApp?" },
];

const finalReply = "Yes — templates + AI Agent handle confirmation, COD verification, and follow-ups automatically.";

export function AIAssistantWidget() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-15% 0px" });
  const [stage, setStage] = React.useState<"messages" | "typing" | "reply">("messages");

  React.useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setStage("typing"), 700);
    const t2 = setTimeout(() => setStage("reply"), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [inView]);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(closest-side,rgba(152,255,3,0.16),transparent)] blur-2xl" />
      <div className="soft-panel overflow-hidden">
        <div className="flex items-center justify-between bg-[image:var(--gradient-dark-btn)] px-5 py-4 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">WALOOP AI Assistant</p>
              <p className="flex items-center gap-1 text-[11px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Online · Replies in seconds
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5 py-6">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className={m.from === "user" ? "ml-auto max-w-[80%]" : "mr-auto max-w-[85%]"}
            >
              <div
                className={
                  m.from === "user"
                    ? "rounded-2xl rounded-tr-sm bg-brand-green-dark px-4 py-2.5 text-sm text-white"
                    : "rounded-2xl rounded-tl-sm bg-surface-alt px-4 py-2.5 text-sm text-text"
                }
              >
                {m.text}
              </div>
            </motion.div>
          ))}

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
            {stage === "reply" && (
              <motion.div
                key="reply"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mr-auto max-w-[85%]"
              >
                <div className="rounded-2xl rounded-tl-sm bg-surface-alt px-4 py-2.5 text-sm text-text">{finalReply}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 border-t border-border px-4 py-3">
          <input
            disabled
            placeholder="Type your message..."
            className="flex-1 rounded-full bg-surface-alt px-4 py-2.5 text-sm text-text placeholder:text-text-soft focus:outline-none"
          />
          <button
            type="button"
            aria-label="Send"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green-dark text-white"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
