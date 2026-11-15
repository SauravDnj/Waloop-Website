"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { MetaVerifiedBadge } from "@/components/brand/MetaVerifiedBadge";
import { ChannelIcon, channelMeta, type ChannelKey } from "@/components/brand/ChannelIcon";
import { InfinityJourney3D } from "@/components/three/Scenes";
import { HeroChatCard, HeroToast, HeroWhatsAppBadge } from "@/components/home/HeroWhatsAppOverlay";
import { ctas, hero } from "@/lib/content";

const channels: ChannelKey[] = ["whatsapp", "instagram", "facebook", "rcs"];

// Headline split so each part can carry its own colour and slide in word by word.
const headline: { text: string; className: string }[] = [
  { text: "WhatsApp CRM,", className: "text-[var(--color-accent-text)]" },
  { text: "Chatbot", className: "text-[var(--color-accent-text)]" },
  { text: "& AI Automation", className: "text-brand-green-text" },
  { text: "Platform", className: "text-text" },
];

const pillars = ["Connect.", "Automate.", "Engage.", "Grow."];

/** "Connect. Automate. Engage. Grow." — each word lights up in turn. */
function PillarTicker() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((n) => (n + 1) % pillars.length), 1600);
    return () => window.clearInterval(id);
  }, [reduce]);
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-heading text-xs font-semibold uppercase tracking-widest shadow-card">
      {pillars.map((w, i) => (
        <span key={w} className={i === active ? "text-[var(--color-accent-text)] transition-colors duration-300" : "text-text-muted transition-colors duration-300"}>
          {w}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background: soft dot pattern + slowly drifting blue and green light (the loop's colours). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-hero-dots [mask-image:radial-gradient(80%_70%_at_50%_30%,black,transparent)]" />
        <motion.div
          className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#0b5cff]/15 blur-3xl dark:bg-[#4d8dff]/20"
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-[#14c95f]/15 blur-3xl dark:bg-[#2ee57a]/12"
          animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#07b6e8]/10 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <MetaVerifiedBadge size="sm" />
            <PillarTicker />
          </motion.div>

          <h1
            className="text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-[3.5rem]"
          >
            {headline.map((part, i) => (
              <React.Fragment key={part.text}>
              <motion.span
                initial={{ y: 24 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.08 * i }}
                className={`inline-block ${part.className}`}
              >
                {part.text}
              </motion.span>
              {i < headline.length - 1 && " "}
              </React.Fragment>
            ))}
          </h1>

          {hero.copy.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }} className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
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
            {channels.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-1.5 text-sm font-semibold text-text"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md text-white" style={{ background: channelMeta[c].color }}>
                  <ChannelIcon channel={c} className="h-3.5 w-3.5" />
                </span>
                {channelMeta[c].label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative lg:pb-40"
        >
          <div aria-hidden className="absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(11,92,255,0.18),transparent)] blur-2xl" />
          <InfinityJourney3D />

          {/* WhatsApp-style live activity around the loop */}
          <HeroToast className="absolute left-0 top-0 hidden sm:block" />
          <HeroWhatsAppBadge className="absolute right-2 top-0 hidden sm:block" />
          <HeroChatCard className="mx-auto -mt-4 lg:absolute lg:bottom-0 lg:right-6 lg:mt-0" />
        </motion.div>
      </div>

      {/* Supporting feature strip (§5) */}
      <div className="border-t border-border bg-surface/60 py-4">
        <Marquee durationSeconds={36}>
          {hero.featureStrip.map((f) => (
            <span key={f.label} className="flex items-center gap-2.5 whitespace-nowrap font-heading text-sm font-semibold text-text">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-brand-glow">
                <DynamicIcon name={f.icon} className="h-4 w-4" />
              </span>
              {f.label}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
