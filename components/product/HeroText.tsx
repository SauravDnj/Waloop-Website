"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type CtaLink = { label: string; href: string };
export type PageTagline = { lead: string; emphasis: string };

type HeroTextProps = {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  tagline?: PageTagline;
  bullets?: string[];
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export function HeroText({ badge, title, highlight, description, tagline, bullets, primaryCta, secondaryCta }: HeroTextProps) {
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-block rounded-full border border-border bg-surface px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-brand-green-deep shadow-card dark:text-brand-green"
      >
        {badge}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="text-display text-gradient-heading text-balance text-4xl sm:text-5xl"
      >
        {title} {highlight && <span className="text-gradient-brand">{highlight}</span>}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.16 }}
        className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg"
      >
        {description}
      </motion.p>

      {tagline && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm font-semibold"
        >
          <span className="text-text">{tagline.lead}</span> <span className="text-brand-green">{tagline.emphasis}</span>
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <Button as="a" href={primaryCta.href} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
          {primaryCta.label}
        </Button>
        {secondaryCta && (
          <Button as="a" href={secondaryCta.href} variant="secondary" size="lg">
            {secondaryCta.label}
          </Button>
        )}
      </motion.div>

      {bullets && bullets.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {bullets.map((bullet) => (
            <span key={bullet} className="flex items-center gap-1.5 text-sm font-medium text-text-muted">
              <CheckCircle2 className="h-4 w-4 text-brand-green" />
              {bullet}
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
