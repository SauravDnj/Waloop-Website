import type { FeatureCard } from "@/components/product/FeatureGrid";
import type { Step } from "@/components/product/HowItWorks";
import type { StatItem } from "@/components/product/StatStrip";

export const hero = {
  badge: "No-Code Platform",
  title: "WhatsApp No-Code Workflow Builder",
  description:
    "Automate WhatsApp messages, triggers, and actions on a visual canvas — no code required. Design a flow once and let WALOOP run it on autopilot for every customer.",
  bullets: ["Meta Authorised BSP", "TRAI / DLT Compliant", "Go Live in 24–48 hrs", "Multi-language Support"],
  primaryCta: { label: "Get Started Free", href: "#demo" },
  secondaryCta: { label: "Book a Demo", href: "/#contact" },
};

export const overviewLead =
  "Connect triggers, conditions, and actions on a visual canvas so notifications, follow-ups, and full customer journeys run themselves — from abandoned-cart recovery to appointment reminders. Design the flow once, wire up your apps, and go live in minutes on the official WhatsApp Business API.";

export const overviewStats: StatItem[] = [
  { label: "Message Open Rate", value: "98%" },
  { label: "Messages / Day", value: "10M+" },
  { label: "Go-Live Time", value: "24–48h" },
  { label: "Platform Uptime", value: "98.9%" },
];

export const features: FeatureCard[] = [
  {
    icon: "Workflow",
    title: "Visual Canvas",
    description: "Drag, drop, and connect steps on a visual canvas to build any automation without writing a line of code.",
    tags: ["Drag & Drop", "No-Code"],
  },
  {
    icon: "GitBranch",
    title: "Triggers & Conditions",
    description: "Kick off flows from real events and branch the journey based on customer data and behaviour.",
    tags: ["Event Triggers", "Branching"],
  },
  {
    icon: "Route",
    title: "Multi-step Journeys",
    description: "Sequence messages, delays, and actions across days to guide customers through a full journey.",
    tags: ["Journeys", "Scheduling"],
  },
  {
    icon: "Puzzle",
    title: "App Integrations",
    description: "Connect your CRM, spreadsheets, e-commerce platform, and 1,000+ other apps to your workflows.",
    tags: ["CRM", "1000+ Apps"],
  },
  {
    icon: "LayoutTemplate",
    title: "Templates Library",
    description: "Start fast with ready-made workflow templates for common use cases, then customise to fit your brand.",
    tags: ["Templates", "Quick Start"],
  },
  {
    icon: "FlaskConical",
    title: "Testing & Versioning",
    description: "Preview and test flows before they go live, then update running workflows safely with versioning.",
    tags: ["Preview", "Versioning"],
  },
];

export const howItWorks: Step[] = [
  {
    step: "01",
    title: "Tell Us Your Goal",
    description: "Share the outcome you're after and we'll map the right WhatsApp setup for your business.",
  },
  {
    step: "02",
    title: "Build & Configure",
    description: "Set up flows, templates, and integrations on the visual canvas — no heavy lifting required.",
  },
  {
    step: "03",
    title: "Connect Your Tools",
    description: "Plug the builder into your CRM, store, or app using the API or ready-made no-code connectors.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Go live on the official WhatsApp Business API and grow with real-time analytics at your side.",
  },
];

export const useCases: string[] = [
  "Cart Recovery",
  "Welcome Journeys",
  "Reminders",
  "Drip Campaigns",
  "Order Updates",
  "Renewals",
  "Re-engagement",
  "Surveys",
];

export const whyWaloop: string[] = [
  "Launch automations in minutes, not weeks.",
  "No developers or code needed.",
  "Built on the compliant official WhatsApp API.",
];

export const faqs = [
  {
    question: "Do I need coding skills to build a workflow?",
    answer:
      "No. The builder is entirely visual — drag steps onto the canvas, connect them, and configure each one through simple forms. Anyone on your team can put together and launch a flow.",
  },
  {
    question: "Can flows react to customer data?",
    answer:
      "Yes. Every flow can branch on conditions such as order status, tags, past replies, or custom fields, so each customer moves down the path that fits them.",
  },
  {
    question: "Which apps can I connect to my workflows?",
    answer:
      "The builder connects to your CRM, e-commerce platform, spreadsheets, and over 1,000 other apps through native integrations, webhooks, and the API.",
  },
];

export const closingCta = {
  heading: "Start with the Best WhatsApp No-Code Workflow Builder",
  description:
    "Join the businesses growing sales and support on the official WhatsApp Business API with WALOOP — talk to the team and go live this week.",
  primaryCta: { label: "Chat on WhatsApp", href: "/#contact" },
  secondaryCta: { label: "+91 9712222776", href: "tel:+919712222776" },
};
