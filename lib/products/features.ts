// Content data for the /features marketing page — a broad tour of WALOOP's
// platform capabilities across WhatsApp, RCS, Bulk SMS, and Voice/IVR.

import type { FeatureCard } from "@/components/product/FeatureGrid";

export const hero = {
  badge: "Powerful Features",
  title: "Powerful Features for",
  highlight: "Modern Business",
  description:
    "Everything you need to automate and scale business communication across WhatsApp, RCS, Bulk SMS, and Voice — all from one connected platform.",
  tagline: { lead: "Built for scale.", emphasis: "Made for simplicity." },
  bullets: ["Official Meta Business Partner", "AI-Powered Automation", "Instant Setup", "Enterprise Security"],
  primaryCta: { label: "Schedule a Call", href: "/#contact" },
  secondaryCta: { label: "Get Started", href: "/#demo" },
};

export const features = {
  eyebrow: "Platform Capabilities",
  heading: "Everything You Need, One Platform",
  description:
    "From messaging channels to built-in automation, CRM, and payments — WALOOP brings every tool for customer communication into a single connected workspace.",
  items: [
    {
      icon: "MessageSquare",
      title: "WhatsApp Business API",
      description:
        "Official Meta-partnered integration with direct API access for template messaging, broadcasts, and two-way conversations at scale.",
      tags: ["Meta Partner", "Direct API", "Broadcasts"],
    },
    {
      icon: "Sparkles",
      title: "RCS Business Messaging",
      description:
        "Rich, verified, interactive messaging on Android devices, with branded sender identity and in-message buttons and carousels.",
      tags: ["Verified Sender", "Rich Media", "Interactive"],
    },
    {
      icon: "Send",
      title: "Bulk SMS & Voice Broadcast",
      description:
        "Reach customers instantly across SMS and outbound voice, with high-throughput delivery built for large-scale campaigns and alerts.",
      tags: ["Bulk SMS", "Voice Broadcast", "High Throughput"],
    },
    {
      icon: "Database",
      title: "Intelligent CRM",
      description:
        "A built-in CRM to tag, segment, and track every customer conversation, giving your team full context before they reply.",
      tags: ["Segmentation", "Contact Tags", "History"],
    },
    {
      icon: "Workflow",
      title: "Visual Bot Builder",
      description:
        "Create intelligent chatbots with a drag-and-drop interface, no code required, and launch them across every connected channel.",
      tags: ["No-Code", "Drag & Drop", "Multi-Channel"],
    },
    {
      icon: "Wallet",
      title: "Native Payments",
      description:
        "Collect payments directly inside WhatsApp conversations, turning a chat into a checkout without redirecting customers elsewhere.",
      tags: ["In-Chat Checkout", "Secure", "WhatsApp Pay"],
    },
    {
      icon: "Calendar",
      title: "Calendar Bot",
      description:
        "A complete appointment-booking ecosystem with smart scheduling, reminders, and rescheduling handled entirely in chat.",
      tags: ["Smart Scheduling", "Reminders", "Bookings"],
    },
    {
      icon: "Ticket",
      title: "Tickets Bot",
      description:
        "Sell and manage event tickets with QR-code check-in support, so entry and validation happen without extra hardware.",
      tags: ["Event Ticketing", "QR Check-In", "Automated"],
    },
    {
      icon: "QrCode",
      title: "Dynamic QR Bot",
      description:
        "Generate and manage dynamic QR codes for campaigns and tracking, updating destinations without reprinting a single code.",
      tags: ["Dynamic Codes", "Campaign Tracking", "Reusable"],
    },
    {
      icon: "Gift",
      title: "Reward Points",
      description:
        "Run loyalty programs with point tracking inside chat, letting customers earn and redeem rewards without leaving the conversation.",
      tags: ["Loyalty", "Points Tracking", "In-Chat Redeem"],
    },
    {
      icon: "Inbox",
      title: "Unified Team Inbox",
      description:
        "A multi-channel chat panel so your whole team manages WhatsApp, RCS, and SMS conversations from one shared inbox.",
      tags: ["Shared Inbox", "Multi-Channel", "Team Collaboration"],
    },
    {
      icon: "Zap",
      title: "Automation Builder",
      description:
        "Connect WALOOP to 1,000+ tools, including Shopify, WooCommerce, and CRMs, with custom workflows that trigger on your business events.",
      tags: ["1,000+ Integrations", "Custom Workflows", "E-Commerce"],
    },
  ] satisfies FeatureCard[],
};

export const closingCta = {
  heading: "Ready to Transform Your Business Communication?",
  description:
    "Join 500+ enterprises already growing with WALOOP's platform for WhatsApp, RCS, SMS, and Voice communication.",
  primaryCta: { label: "Get Started Now", href: "/#demo" },
  secondaryCta: { label: "Talk to Sales", href: "/#contact" },
};
