"use client";

import { motion } from "framer-motion";
import { AudioLines, Mic, Volume2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { VoiceWaveform } from "@/components/ui/VoiceWaveform";
import { heroWidgetStats } from "@/lib/products/voice-ai";

export function VoiceAIHeroWidget() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(closest-side,rgba(152,255,3,0.18),transparent)] blur-2xl" />

      <div className="soft-panel overflow-hidden">
        <div className="flex items-center justify-between bg-[image:var(--gradient-dark-btn)] px-5 py-4 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <AudioLines className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">WALOOP Voice AI</p>
              <p className="flex items-center gap-1 text-[11px] text-white/80">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" /> ONLINE · PROCESSING VOICE
              </p>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> Live
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 px-5 pt-5">
          {heroWidgetStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-border bg-surface-alt px-4 py-3 text-center"
            >
              <AnimatedCounter value={stat.value} className="font-heading text-lg font-extrabold text-gradient-heading" />
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-text-soft">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center border-t border-border px-5 py-4">
          <VoiceWaveform />
        </div>

        <div className="px-5 pb-6 pt-4">
          <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-soft">
            <Mic className="h-3.5 w-3.5 text-brand-green" /> Voice Processing
          </p>
          <div className="flex flex-col gap-2.5 rounded-2xl border border-border bg-surface-alt p-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="rounded-xl rounded-tl-sm bg-surface px-3.5 py-2.5 text-sm text-text shadow-card"
            >
              &ldquo;I&apos;d like to check my order status...&rdquo;
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="flex items-center gap-2 self-start rounded-full border border-border bg-bg px-3 py-1.5 text-[11px] font-medium text-text-muted"
            >
              Intent: <span className="text-brand-green-deep dark:text-brand-green">order_status</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              Confidence: <span className="font-semibold text-text">97.2%</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="ml-auto max-w-[92%] rounded-xl rounded-tr-sm bg-brand-green-dark px-3.5 py-2.5 text-sm text-white"
            >
              <span className="mb-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                <Volume2 className="h-3 w-3" /> TTS Reply
              </span>
              &ldquo;Your order #4521 shipped today and arrives by Friday.&rdquo;
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
