"use client";

import { motion } from "framer-motion";
import { PhoneCall, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { VoiceWaveform } from "@/components/ui/VoiceWaveform";
import { heroWidgetStats } from "@/lib/products/ai-voice-agent";

const transcript = [
  {
    from: "caller",
    text: "Hi, I'd like to book an appointment for tomorrow at 3 PM...",
  },
  {
    from: "agent",
    text: "You're all set — I've booked you in for tomorrow at 3 PM and sent a confirmation to your number.",
  },
];

export function VoiceAgentHeroWidget() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(closest-side,rgba(152,255,3,0.18),transparent)] blur-2xl" />

      <div className="soft-panel overflow-hidden">
        <div className="flex items-center justify-between bg-[image:var(--gradient-dark-btn)] px-5 py-4 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <PhoneCall className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">WALOOP Voice Agent</p>
              <p className="flex items-center gap-1 text-[11px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> ONLINE · PROCESSING CALL
              </p>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> Live
          </motion.span>
        </div>

        <div className="grid grid-cols-2 gap-3 px-5 pt-5">
          {heroWidgetStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-border bg-surface-alt p-3 text-center"
            >
              <AnimatedCounter value={stat.value} className="font-heading text-lg font-extrabold text-gradient-heading" />
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-text-soft">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center border-t border-border px-5 py-4">
          <VoiceWaveform />
        </div>

        <div className="px-5 py-6">
          <p className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-soft">
            <Sparkles className="h-3.5 w-3.5 text-brand-green" /> Live Transcript
          </p>
          <div className="flex flex-col gap-3">
            {transcript.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
                className={m.from === "caller" ? "ml-auto max-w-[85%]" : "mr-auto max-w-[85%]"}
              >
                <p className="mb-1 px-1 text-[10px] font-medium uppercase tracking-wide text-text-soft">
                  {m.from === "caller" ? "Caller" : "WALOOP AI"}
                </p>
                <div
                  className={
                    m.from === "caller"
                      ? "rounded-2xl rounded-tr-sm bg-brand-green-dark px-4 py-2.5 text-sm text-white"
                      : "rounded-2xl rounded-tl-sm bg-surface-alt px-4 py-2.5 text-sm text-text"
                  }
                >
                  {m.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
