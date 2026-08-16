// Content data for the /integrations hub page — every native connector WALOOP
// ships with, grouped by category, plus how integration setup actually works.

import type { ProductLinkItem } from "@/components/product/ProductLinkGrid";
import type { IconGridItem } from "@/components/product/IconGrid";
import type { Step } from "@/components/product/HowItWorks";
import type { StatItem } from "@/components/product/StatStrip";

export const hero = {
  badge: "Integrations",
  title: "Connect WALOOP to",
  highlight: "Your Entire Stack",
  description:
    "Native, two-way connectors for the CRM, marketing, commerce, and automation tools you already run — plus a REST API and webhooks for everything else. No custom engineering required.",
  tagline: { lead: "Connect once.", emphasis: "Sync everywhere." },
  bullets: ["10+ Native Connectors", "5,000+ Apps via Zapier", "Set Up in Under 10 Minutes"],
  primaryCta: { label: "Get Started Free", href: "/#demo" },
  secondaryCta: { label: "Talk to Sales", href: "/#contact" },
};

export const heroStats: StatItem[] = [
  { label: "Native Connectors", value: "10+" },
  { label: "Apps via Zapier", value: "5,000+" },
  { label: "Avg. Setup Time", value: "<10min" },
  { label: "Sync Latency", value: "<1s" },
];

export const categoryIntro: Record<string, { eyebrow: string; heading: string; description: string }> = {
  "Marketing & Engagement": {
    eyebrow: "Marketing & Engagement",
    heading: "Trigger campaigns from customer behavior",
    description: "Push WALOOP conversation and delivery events straight into your engagement platform, and trigger WALOOP messages from any campaign or journey.",
  },
  "CRM & Sales": {
    eyebrow: "CRM & Sales",
    heading: "Keep every conversation on the customer record",
    description: "Every message, call, and lead syncs to your CRM automatically, so sales and support always have full context.",
  },
  "Commerce & Payments": {
    eyebrow: "Commerce & Payments",
    heading: "Turn conversations into transactions",
    description: "Sync orders and carts, and collect payments without ever leaving the chat.",
  },
  Automation: {
    eyebrow: "Automation",
    heading: "Connect to anything else you run",
    description: "No native connector for your tool? Zapier bridges WALOOP to thousands of apps with zero code.",
  },
};

export const howItWorksContent: {
  eyebrow: string;
  heading: string;
  description: string;
  steps: Step[];
} = {
  eyebrow: "How It Works",
  heading: "From connection to live sync in four steps",
  description: "Every integration follows the same guided setup, whether it's a one-click native connector or a custom webhook.",
  steps: [
    {
      step: "01",
      title: "Connect Your Account",
      description: "Authenticate with the partner platform using OAuth or an API key — no developer required for native connectors.",
    },
    {
      step: "02",
      title: "Map Your Data",
      description: "Match WALOOP fields (contacts, tags, message events) to the equivalent fields in your connected tool.",
    },
    {
      step: "03",
      title: "Set Up Triggers",
      description: "Choose which events fire in each direction — a new lead, a delivered message, a completed order, and more.",
    },
    {
      step: "04",
      title: "Go Live & Sync in Real Time",
      description: "Turn it on. Data flows both ways automatically, with every sync logged for troubleshooting.",
    },
  ],
};

export const benefitsContent: {
  eyebrow: string;
  heading: string;
  description?: string;
  items: IconGridItem[];
} = {
  eyebrow: "Why Integrate with WALOOP",
  heading: "Built to fit into your stack, not replace it",
  items: [
    {
      icon: "MousePointerClick",
      title: "No-Code Setup",
      description: "Native connectors are configured through guided screens — no engineering ticket required to go live.",
    },
    {
      icon: "RefreshCw",
      title: "Real-Time, Two-Way Sync",
      description: "Data flows both directions the moment it changes, so no system is ever working from a stale record.",
    },
    {
      icon: "ShieldCheck",
      title: "Enterprise-Grade Security",
      description: "OAuth authentication, encrypted credentials, and scoped access keep every connected account safe.",
    },
    {
      icon: "Webhook",
      title: "REST API & Webhooks",
      description: "No native connector for your tool? Build a custom integration on our documented API and webhook events.",
    },
    {
      icon: "Users",
      title: "Dedicated Onboarding Support",
      description: "Our integration team helps map fields and validate triggers before anything goes live in production.",
    },
    {
      icon: "Database",
      title: "One Unified Data Layer",
      description: "Every connector reads from and writes to the same contact and conversation records — no duplicate data entry.",
    },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Integration FAQs",
  description: "Common questions about connecting WALOOP to the rest of your stack.",
  items: [
    {
      question: "How long does it take to set up an integration?",
      answer:
        "Most native connectors (MoEngage, WebEngage, CleverTap, Zoho, HubSpot, Salesforce, Shopify) can be authenticated and mapped in under 10 minutes. Custom API or webhook integrations depend on your own development timeline.",
    },
    {
      question: "Do you support tools that aren't listed here?",
      answer:
        "Yes. Connect any of the 5,000+ apps supported by Zapier without writing code, or build a fully custom integration using our documented REST API and real-time webhooks.",
    },
    {
      question: "Is my data secure during sync?",
      answer:
        "All connections use OAuth or scoped API keys, credentials are encrypted at rest, and every sync event is logged for audit and troubleshooting.",
    },
    {
      question: "Are integrations one-way or two-way?",
      answer:
        "Most native connectors sync in both directions — for example, a new WALOOP lead can create a CRM record, and a CRM status change can trigger a WALOOP message. You can also limit any connector to one direction if that's all you need.",
    },
    {
      question: "Does adding integrations cost extra?",
      answer:
        "Native connectors are included on every WALOOP plan. Usage-based costs from the partner platform itself (like your Zapier or CRM subscription) are billed separately by that provider.",
    },
    {
      question: "Can I build a custom integration myself?",
      answer:
        "Yes. WALOOP's REST API and webhook events are fully documented, so your own engineering team can build and maintain a custom integration against any system, internal or external.",
    },
  ],
};

export const closingCta = {
  heading: "Ready to connect",
  highlight: "your entire stack?",
  description: "Set up your first integration in under 10 minutes, or talk to our team about a custom connector for your systems.",
  primaryCta: { label: "Get Started Free", href: "/#demo" },
  secondaryCta: { label: "Talk to Sales", href: "/#contact" },
};

export function toProductLinkItems(
  items: { name: string; category: string; icon: string; description: string }[],
): ProductLinkItem[] {
  return items.map((item) => ({
    icon: item.icon,
    title: item.name,
    description: item.description,
    href: "/#contact",
    ctaLabel: "Request Integration",
  }));
}
