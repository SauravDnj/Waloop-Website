"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { MetaVerifiedBadge } from "@/components/brand/MetaVerifiedBadge";
import { ChannelIcon, channelMeta, type ChannelKey } from "@/components/brand/ChannelIcon";
import { InfinityJourney3D } from "@/components/three/Scenes";
import { ctas, hero, siteConfig } from "@/lib/content";

const channels: ChannelKey[] = ["whatsapp", "instagram", "facebook", "rcs"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] bg-hero-glow" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <MetaVerifiedBadge size="sm" />
            <span className="rounded-full border border-border bg-surface px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-widest text-text-muted shadow-card">
              {siteConfig.coreMessage}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-[3.5rem]"
          >
            The Intelligent Platform for{" "}
            <span className="text-gradient-brand">Customer Conversations, Automation &amp; Growth</span>
          </motion.h1>

          {hero.copy.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 + i * 0.06 }}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button as="a" href={ctas.getStarted.href} variant="brand" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {ctas.getStarted.label}
            </Button>
            <Button as="a" href={ctas.bookDemo.href} variant="secondary" size="lg">
              <CalendarCheck className="h-4 w-4" />
              {ctas.bookDemo.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-text-soft">Supported channels</span>
            {channels.map((c) => (
              <span key={c} className="flex items-center gap-1.5 text-sm font-semibold text-text">
                <span className="flex h-6 w-6 items-center justify-center rounded-md text-white" style={{ background: channelMeta[c].color }}>
                  <ChannelIcon channel={c} className="h-3.5 w-3.5" />
                </span>
                {channelMeta[c].label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div aria-hidden className="absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(11,92,255,0.22),rgba(20,201,95,0.12),transparent)] blur-2xl" />
          <InfinityJourney3D />
          <p className="-mt-2 text-center text-xs text-text-soft">
            One connected loop — from the first message to analytics.
          </p>
        </motion.div>
      </div>

      {/* Supporting feature strip (§5) */}
      <div className="border-t border-border bg-surface/60 py-4">
        <Marquee durationSeconds={36}>
          {hero.featureStrip.map((f) => (
            <span key={f} className="flex items-center gap-2 whitespace-nowrap font-heading text-sm font-semibold text-text-muted">
              <Check className="h-4 w-4 text-brand-green" /> {f}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
