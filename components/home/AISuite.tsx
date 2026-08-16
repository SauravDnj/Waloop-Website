"use client";

import * as React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { aiSuite } from "@/lib/content";
import { cn } from "@/lib/utils";

type AISuiteItem = (typeof aiSuite)[number];

const panelVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  exit: {},
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
  exit: { opacity: 0, scale: 0.6, transition: { duration: 0.15 } },
};

function AISuitePreview({ item }: { item: AISuiteItem }) {
  const Icon = (Icons[item.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;

  return (
    <motion.div
      key={item.title}
      variants={panelVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="soft-panel relative flex h-full flex-col justify-center overflow-hidden p-10 sm:p-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <motion.div
        variants={iconVariants}
        className="flex h-16 w-16 items-center justify-center rounded-[12px] bg-[image:var(--gradient-icon-lime)] text-[#1F1F25] shadow-brand-glow"
      >
        <Icon className="h-8 w-8" />
      </motion.div>
      <motion.p variants={childVariants} className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-brand-green-deep dark:text-brand-green">
        {item.tag}
      </motion.p>
      <motion.h3 variants={childVariants} className="mt-2 font-sans text-2xl font-semibold text-text sm:text-3xl">
        {item.title}
      </motion.h3>
      <motion.p variants={childVariants} className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
        {item.description}
      </motion.p>
      <motion.div variants={childVariants}>
        <Link href="#products" className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-green">
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function AISuite() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = aiSuite[activeIndex];

  return (
    <section id="ai-suite" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI Suite"
          title="AI that answers, routes, and speaks — natively in your WALOOP stack"
          description="From a single agent build to full voice automation — WALOOP ships AI Agents, Chatbots, RAG-powered knowledge bases, and Voice AI on the same infrastructure as your SMS, WhatsApp and RCS traffic. One API, one dashboard, zero stitching."
        />

        <Reveal delay={0.1} className="mt-10 flex justify-center gap-4">
          <Button as="a" href="#products" size="md">
            Explore AI Suite <ArrowRight className="h-4 w-4" />
          </Button>
          <Button as="a" href="#contact" variant="secondary" size="md">
            Talk to Sales
          </Button>
        </Reveal>

        {/* Desktop: card list + animated spotlight panel */}
        <div className="mt-16 hidden gap-6 lg:grid lg:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-2">
            {aiSuite.map((item, i) => {
              const Icon = (Icons[item.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  className={cn(
                    "relative flex items-center gap-3 overflow-hidden rounded-card py-3.5 pl-5 pr-4 text-left transition-colors duration-300",
                    isActive ? "soft-panel" : "hover:bg-surface-alt",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="ai-suite-active-bar"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-brand-green"
                    />
                  )}
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300",
                      isActive ? "bg-[image:var(--gradient-icon-lime)] text-[#1F1F25]" : "bg-surface-alt text-text-soft",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className={cn("text-sm font-semibold transition-colors", isActive ? "text-text" : "text-text-muted")}>
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[340px]">
            <AnimatePresence mode="wait">
              <AISuitePreview key={active.title} item={active} />
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / tablet: stacked cards */}
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {aiSuite.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
            return (
              <RevealItem
                key={item.title}
                direction={i % 2 === 0 ? "up" : "scale"}
                className="soft-panel p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[image:var(--gradient-icon-lime)] text-[#1F1F25]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-brand-green-deep dark:text-brand-green">{item.tag}</p>
                <h3 className="mt-1.5 font-sans text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
                <Link href="#products" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
