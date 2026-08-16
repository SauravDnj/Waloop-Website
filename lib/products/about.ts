// Content data for the /about marketing page.
// Reuses the real company facts already defined in lib/content.ts (siteConfig, trustPoints, stats)
// rather than inventing new figures.

import type { IconGridItem } from "@/components/product/IconGrid";
import { siteConfig, trustPoints, stats } from "@/lib/content";

export const hero = {
  badge: "Our Story",
  title: "About WALOOP",
  description:
    "WALOOP is an enterprise-grade communications platform built to make WhatsApp, RCS, SMS, IVR and AI voice communication simple, secure, and scalable for every business, from the ground up.",
  tagline: { lead: "Small team.", emphasis: "Enterprise impact." },
  primaryCta: { label: "Get Started", href: "/#demo" },
  secondaryCta: { label: "Talk to Us", href: "/contact" },
};

export const mission = {
  eyebrow: "Why We Exist",
  heading: "Enterprise communication, without the complexity",
  description:
    `Most businesses end up stitching together a patchwork of vendors just to send a message, place a call, or run a campaign. We built ${siteConfig.name} to replace that patchwork with a single, unified platform — one dashboard, one API, and one team accountable for every channel. Our goal is simple: give businesses of every size access to the same enterprise-grade communication infrastructure the largest companies rely on, without the integration headaches that usually come with it.`,
};

export const values = {
  eyebrow: "What We Stand For",
  heading: "Our Values",
  description: "The principles that shape every product decision we make.",
  items: [
    {
      icon: "ShieldCheck",
      title: "Reliability",
      description: "Always-on infrastructure backed by a 99.99% uptime SLA, so your messages and calls get through, every time.",
    },
    {
      icon: "Lock",
      title: "Security",
      description: "Enterprise-grade encryption and compliant data handling built into the platform from day one, not bolted on after.",
    },
    {
      icon: "Sparkles",
      title: "Innovation",
      description: "AI-native from the ground up — our voice, chat, and automation products are built around modern AI, not retrofitted for it.",
    },
    {
      icon: "Handshake",
      title: "Partnership",
      description: "Dedicated onboarding and support from real people, because scaling communication should feel like a partnership, not a dashboard.",
    },
  ] satisfies IconGridItem[],
};

export const companyStats = stats;

export const companyFacts = {
  eyebrow: "By the Numbers",
  heading: "Company Facts",
  description: "A few details about who we are and how we got here.",
  items: trustPoints.map((point) => ({
    icon: "Building2",
    title: point.title,
    description: point.description,
  })) satisfies IconGridItem[],
};

export const closingCta = {
  heading: "Let's Build Something Together",
  description: `Whether you're evaluating ${siteConfig.name} for a single channel or an entire communication stack, our team is ready to help you plan the rollout, from pilot to full scale.`,
  primaryCta: { label: "Talk to Sales", href: "/contact" },
  secondaryCta: { label: "Explore Products", href: "/products" },
};
