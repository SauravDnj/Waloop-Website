// Content data for the /products hub page — a catalog of every WALOOP
// product and channel, positioned as one connected platform.

import type { ProductLinkItem } from "@/components/product/ProductLinkGrid";
import type { IconGridItem } from "@/components/product/IconGrid";

export const hero = {
  badge: "All Products",
  title: "All Products.",
  highlight: "One Unified Platform.",
  description:
    "AI voice agents, WhatsApp chatbots, RCS, bulk SMS, and voice IVR — every WALOOP product runs on one connected platform, one dashboard, and one API. Explore what you can build.",
  tagline: { lead: "Every channel.", emphasis: "One WALOOP account." },
  bullets: ["Official Meta Business Partner", "One Dashboard, Every Channel", "Enterprise-Grade Security"],
  primaryCta: { label: "Get Started Free", href: "/#demo" },
  secondaryCta: { label: "Talk to Sales", href: "/#contact" },
};

export const coreProducts = {
  eyebrow: "Deep Dive",
  heading: "Explore every AI product",
  description: "Five purpose-built AI products, each with its own deep dive — all sharing the same underlying platform.",
  items: [
    {
      icon: "Phone",
      eyebrow: "Voice Automation",
      title: "AI Voice Agent",
      description:
        "A human-like AI voice assistant that answers every call, qualifies leads, and books appointments — 24/7, in 20+ languages.",
      href: "/products/ai-voice-agent",
    },
    {
      icon: "MessageCircle",
      eyebrow: "WhatsApp AI",
      title: "WhatsApp AI Chatbot",
      description:
        "Generative AI conversations that run natively inside WhatsApp — instant answers, lead capture, and round-the-clock support.",
      href: "/products/whatsapp-ai-chatbot",
    },
    {
      icon: "AudioLines",
      eyebrow: "Speech Engine",
      title: "Voice AI",
      description:
        "The speech recognition, natural language understanding, and voice synthesis engine powering every WALOOP voice product.",
      href: "/products/voice-ai",
    },
    {
      icon: "LayoutGrid",
      eyebrow: "Unified AI",
      title: "Conversational AI Platform",
      description:
        "Build, train, and deploy WALOOP AI agents from one workspace — spanning chat, WhatsApp, and voice.",
      href: "/products/conversational-ai-platform",
    },
    {
      icon: "Workflow",
      eyebrow: "No-Code Automation",
      title: "WhatsApp Workflow Builder",
      description:
        "A drag-and-drop builder for multi-step WhatsApp journeys — qualify, route, and convert without writing a line of code.",
      href: "/products/whatsapp-workflow-builder",
    },
  ] satisfies ProductLinkItem[],
};

export const channels = {
  eyebrow: "Every Channel",
  heading: "One platform for every way you reach customers",
  description:
    "WhatsApp, RCS, SMS, and voice — deploy the right channel for every message, all from the same WALOOP account.",
};

export const benefits = {
  eyebrow: "Why One Platform",
  heading: "Built to work as one system, not nine",
  description:
    "Every channel shares the same contacts, automations, analytics, and billing — so your team never juggles logins or exports.",
  items: [
    {
      icon: "Inbox",
      title: "One Unified Inbox",
      description: "Manage WhatsApp, RCS, SMS, and voice conversations from a single shared team inbox — no more switching tabs.",
    },
    {
      icon: "Workflow",
      title: "Cross-Channel Automation",
      description: "Build an automation once and run it across every channel your customers use, with shared triggers and logic.",
    },
    {
      icon: "Users",
      title: "Shared Contacts & CRM Sync",
      description: "One customer record, synced automatically to Zoho, MoEngage, WebEngage, and CleverTap — no duplicate data entry.",
    },
    {
      icon: "BarChart3",
      title: "Unified Analytics & Billing",
      description: "Track delivery, engagement, and spend across every channel from a single dashboard and a single monthly invoice.",
    },
  ] satisfies IconGridItem[],
};

export const closingCta = {
  heading: "Ready to put every channel",
  highlight: "on one platform?",
  description: "Join 500+ enterprises already running WhatsApp, RCS, SMS, and Voice on WALOOP's connected platform.",
  primaryCta: { label: "Get Started Free", href: "/#demo" },
  secondaryCta: { label: "Talk to Sales", href: "/#contact" },
};
