"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { SquareDotFrame } from "@/components/ui/SquareDotFrame";
import { PadlockFallback } from "@/components/three/PadlockFallback";
import { siteConfig } from "@/lib/content";

const PadlockScene = dynamic(() => import("@/components/three/PadlockScene"), {
  ssr: false,
  loading: () => <PadlockFallback />,
});

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-grid pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Parallax offset={40} className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]">
        <div aria-hidden className="h-full w-full bg-hero-glow" />
      </Parallax>

      <SquareDotFrame className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 border-x border-border px-4 py-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-wide text-text-muted shadow-card"
          >
            <span className="flex items-center gap-1 text-brand-green-deep dark:text-brand-green">
              <Star className="h-3.5 w-3.5 fill-current" /> {siteConfig.rating}
            </span>
            Customer Rating · Trusted by 500+ enterprises
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-gradient-heading text-balance text-4xl sm:text-5xl lg:text-[3.6rem]"
          >
            Empowering Communication with{" "}
            <span className="text-gradient-brand">AI-Driven Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg"
          >
            Deploy official WhatsApp Business API, A2P bulk SMS, IVR, and AI voice bots on your own server — or run
            on WALOOP&apos;s secure cloud communications platform, built for enterprise scale and trust.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-4 text-sm font-semibold"
          >
            <span className="text-text">Built on Trust.</span> <span className="text-brand-green">Driven by AI.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button as="a" href="#demo" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Get Started
            </Button>
            <Button as="a" href="#products" variant="secondary" size="lg">
              <Play className="h-4 w-4" />
              Explore Products
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-wide text-text-soft"
          >
            <span>Meta Business Solution Provider</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>ESTD. {siteConfig.foundedYear}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>99.99% Uptime SLA</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(152,255,3,0.22),transparent)] blur-2xl" />
          <PadlockScene />

          <Parallax offset={18} className="absolute -right-2 top-4">
            <div className="soft-panel px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-soft">Encrypted</p>
              <p className="text-sm font-bold text-text">End-to-end secure</p>
            </div>
          </Parallax>
          <Parallax offset={-22} className="absolute -left-4 bottom-6">
            <div className="soft-panel px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-soft">Uptime</p>
              <p className="text-sm font-bold text-text">99.99% SLA</p>
            </div>
          </Parallax>

          <Parallax offset={26} className="absolute -right-6 bottom-16 hidden sm:block">
            <div className="soft-panel flex items-center gap-2 px-4 py-3">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand-green" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-text-soft">AI Agent</p>
                <p className="text-sm font-bold text-text">Auto-replied · 1.2s</p>
              </div>
            </div>
          </Parallax>
        </motion.div>
      </SquareDotFrame>
    </section>
  );
}
