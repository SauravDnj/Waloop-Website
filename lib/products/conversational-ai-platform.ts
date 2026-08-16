import type { OverviewPoint } from "@/components/product/OverviewSection";
import type { FeatureCard } from "@/components/product/FeatureGrid";
import type { Step } from "@/components/product/HowItWorks";
import type { IconGridItem } from "@/components/product/IconGrid";
import type { ChannelHeroWidgetProps } from "@/components/product/heroes/ChannelHeroWidget";

type CtaLink = { label: string; href: string };

export const heroContent: {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  bullets: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  badge: "Next-Gen Enterprise Conversational AI",
  title: "One Unified Platform for WALOOP AI Agents",
  highlight: "& Voice Automation",
  description:
    "Orchestrate autonomous support, lead qualification, and automated voice calling across WhatsApp, RCS, SMS, and Web — all from a single platform built on enterprise-grade security and retrieval-augmented intelligence.",
  bullets: ["Omnichannel Deployment", "Enterprise-Grade Security", "RAG-Powered Intelligence"],
  primaryCta: { label: "Explore Platform", href: "#features" },
  secondaryCta: { label: "Book Platform Demo", href: "/#contact" },
};

export const heroWidgetProps: ChannelHeroWidgetProps = {
  icon: "LayoutGrid",
  title: "WALOOP AI Platform",
  status: "LIVE · MULTI-CHANNEL",
  stats: [
    { label: "Containment Rate", value: "92%" },
    { label: "Avg. Response Time", value: "<2s" },
  ],
  feedLabel: "Live Agent Activity",
  feed: [
    { title: "Lead qualified via WhatsApp", subtitle: "Sales Agent · Web Store", tag: "Converted" },
    { title: "Support call resolved", subtitle: "Voice Agent · Inbound Call", tag: "Resolved" },
    { title: "Order query answered", subtitle: "Support Agent · RCS", tag: "Contained" },
  ],
};

export const overviewContent: {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
} = {
  eyebrow: "Understanding the Platform",
  heading: "What is the WALOOP Conversational AI Platform?",
  description:
    "The WALOOP Conversational AI Platform is the unified layer that lets you design, deploy, and manage AI-driven agents — chat and voice — across every customer channel from one workspace, instead of stitching together separate bots for each channel.",
  points: [
    {
      icon: "LayoutGrid",
      title: "One Agent, Every Channel",
      description: "Build an agent once and deploy it across WhatsApp, RCS, SMS, Web Chat, and Voice from a single configuration.",
    },
    {
      icon: "Wand2",
      title: "Visual Prompt Studio",
      description: "Design, version, and A/B test conversation prompts visually, then push updates live without a code deployment.",
    },
    {
      icon: "BookOpen",
      title: "Retrieval-Augmented Intelligence",
      description: "Ground every response in fact by connecting vector databases, documentation, and live APIs into the agent's reasoning.",
    },
    {
      icon: "GitBranch",
      title: "No-Code Workflow Builder",
      description: "Assemble multi-step automations with branching logic, webhooks, and human escalation on a drag-and-drop canvas.",
    },
    {
      icon: "Users",
      title: "Unified Agent Workspace",
      description: "Give human agents one shared inbox with full customer history, sentiment signals, and AI co-pilot suggestions.",
    },
    {
      icon: "BarChart3",
      title: "Real-Time AI Analytics",
      description: "Monitor intent accuracy, CSAT, containment, and channel-level ROI in dashboards built for enterprise reporting.",
    },
    {
      icon: "ShieldCheck",
      title: "Enterprise-Grade Security",
      description: "Encrypted data in transit and at rest, role-based access controls, and compliance-ready infrastructure by default.",
    },
    {
      icon: "UserCheck",
      title: "Seamless Human Handoff",
      description: "Agents escalate to a human teammate mid-conversation with full context, so no customer repeats themselves.",
    },
  ],
};

export const featuresContent: {
  eyebrow: string;
  heading: string;
  description: string;
  items: FeatureCard[];
} = {
  eyebrow: "Enterprise Conversational AI",
  heading: "Core Capabilities",
  description: "Everything required to build, test, and scale AI agents across channels with zero complexity.",
  items: [
    {
      icon: "Workflow",
      title: "WALOOP Agent Deployment",
      description:
        "Build your AI agent once and launch it everywhere your customers already are — WhatsApp, RCS, Web Chat, Voice AI, and SMS, all from a single configuration.",
      tags: ["WhatsApp", "RCS", "Voice", "SMS"],
    },
    {
      icon: "Wand2",
      title: "Visual Prompt Studio & A/B Testing",
      description:
        "Design, version, and test conversation prompts in a visual studio, then push updates live to production agents without a single code deployment.",
      tags: ["Prompt Engineering", "A/B Test", "Zero Downtime"],
    },
    {
      icon: "BookOpen",
      title: "Enterprise RAG Knowledge Base",
      description:
        "Ground every response in fact by connecting vector databases, internal documentation, product catalogs, and live APIs directly into the agent's reasoning layer.",
      tags: ["RAG Engine", "Vector DB", "Enterprise Security"],
    },
    {
      icon: "GitBranch",
      title: "No-Code AI Workflow Builder",
      description:
        "Assemble multi-step automations with conditional branching, API webhooks, and seamless human escalation using a drag-and-drop canvas — no engineering required.",
      tags: ["Drag & Drop", "Webhooks", "Human Handoff"],
    },
    {
      icon: "Users",
      title: "Unified Agent Workspace",
      description:
        "Give human agents a single shared inbox with full customer history, real-time sentiment signals, and AI co-pilot suggestions for faster, smarter resolutions.",
      tags: ["Co-Pilot", "Shared Inbox", "Sentiment"],
    },
    {
      icon: "BarChart3",
      title: "Real-Time AI Analytics",
      description:
        "Monitor intent accuracy, CSAT, call resolution times, containment rates, and channel-level ROI in live dashboards built for enterprise reporting.",
      tags: ["CSAT", "Containment Rate", "Reports"],
    },
  ],
};

export const howItWorksContent: {
  eyebrow: string;
  heading: string;
  description: string;
  steps: Step[];
} = {
  eyebrow: "How It Works",
  heading: "From configuration to live agent in days",
  description: "One workspace takes an agent from first prompt to production across every channel your customers use.",
  steps: [
    {
      step: "01",
      title: "Connect Your Channels",
      description: "Link WhatsApp, RCS, SMS, Web Chat, and Voice so every conversation flows into one platform.",
    },
    {
      step: "02",
      title: "Design the Agent",
      description: "Draft prompts, conversation flows, and escalation rules in the visual Prompt Studio.",
    },
    {
      step: "03",
      title: "Ground with Knowledge",
      description: "Connect your knowledge base, product catalog, and internal APIs so answers stay accurate.",
    },
    {
      step: "04",
      title: "Test & A/B Launch",
      description: "Preview conversations, run prompt variants side by side, and roll out with confidence.",
    },
    {
      step: "05",
      title: "Monitor & Improve",
      description: "Track containment, CSAT, and intent accuracy live, then iterate without touching code.",
    },
  ],
};

export const industriesContent: {
  eyebrow: string;
  heading: string;
  description?: string;
  items: IconGridItem[];
} = {
  eyebrow: "Industries We Serve",
  heading: "Built for every conversation-heavy business",
  description: "The WALOOP Conversational AI Platform adapts to the support and sales patterns each industry relies on most.",
  items: [
    {
      icon: "ShoppingCart",
      title: "E-commerce & D2C",
      description: "Automate order status, returns, and product discovery across chat and voice around the clock.",
    },
    {
      icon: "Landmark",
      title: "Banking & Finance",
      description: "Handle balance checks, transaction alerts, and KYC support with enterprise-grade security.",
    },
    {
      icon: "ShieldCheck",
      title: "Insurance",
      description: "Guide claims, policy renewals, and coverage queries with agents grounded in policy documentation.",
    },
    {
      icon: "Hospital",
      title: "Healthcare",
      description: "Book appointments and answer routine care questions while keeping patient data compliant.",
    },
    {
      icon: "Hotel",
      title: "Travel & Hospitality",
      description: "Manage bookings, itinerary changes, and concierge requests across every channel guests use.",
    },
    {
      icon: "Building2",
      title: "Real Estate",
      description: "Qualify leads, schedule site visits, and answer project queries without a human in the loop.",
    },
    {
      icon: "GraduationCap",
      title: "Education",
      description: "Support admissions, fee queries, and student services with always-on conversational agents.",
    },
    {
      icon: "Laptop",
      title: "SaaS & Technology",
      description: "Deflect tier-1 support tickets and onboard new users with agents grounded in your product docs.",
    },
    {
      icon: "Truck",
      title: "Logistics & Delivery",
      description: "Automate shipment tracking and delivery-window updates across chat, RCS, and voice.",
    },
  ],
};

export const benefitsContent: {
  eyebrow: string;
  heading: string;
  description?: string;
  items: IconGridItem[];
} = {
  eyebrow: "Benefits",
  heading: "Why enterprises standardize on WALOOP",
  items: [
    { icon: "LayoutGrid", title: "One Platform, Every Channel", description: "Retire fragmented, single-channel bots for one agent that works everywhere." },
    { icon: "BookOpen", title: "Answers Grounded in Fact", description: "RAG-powered retrieval keeps every response accurate to your live data." },
    { icon: "Wand2", title: "Ship Changes Without Code", description: "Prompt Studio and the workflow builder put iteration in the hands of your team." },
    { icon: "Users", title: "Faster Human Resolutions", description: "Co-pilot suggestions and full context cut average handling time for agents." },
    { icon: "ShieldCheck", title: "Enterprise-Ready Security", description: "Role-based access, encryption, and compliance-ready infrastructure by default." },
    { icon: "BarChart3", title: "Full Visibility", description: "Live dashboards surface containment, CSAT, and ROI at the channel level." },
    { icon: "TrendingUp", title: "Scales With Volume", description: "Handle a spike in conversations without adding headcount or infrastructure." },
    { icon: "Webhook", title: "Fits Your Stack", description: "Native integrations and webhooks connect agents to the tools you already run." },
  ],
};

export const integrationsContent: {
  eyebrow: string;
  heading: string;
  description?: string;
  items: IconGridItem[];
} = {
  eyebrow: "Integrations",
  heading: "Connects with the tools you already run",
  items: [
    { icon: "Database", title: "Vector Databases", description: "Plug in your vector store to power retrieval-augmented, fact-grounded responses." },
    { icon: "Webhook", title: "REST API & Webhooks", description: "Trigger actions and receive real-time events from any agent conversation." },
    { icon: "Users", title: "CRM", description: "Sync contacts and conversation history with HubSpot, Salesforce, Zoho, and more." },
    { icon: "Repeat", title: "Zapier", description: "Connect agent workflows to 5,000+ apps without writing a line of code." },
    { icon: "Headset", title: "Helpdesk Platforms", description: "Escalate conversations to your existing support desk with full context intact." },
    { icon: "ShoppingBag", title: "E-commerce Platforms", description: "Ground agents in live order, inventory, and product catalog data." },
    { icon: "Code2", title: "SDKs", description: "Drop in ready-made libraries for popular languages to integrate in minutes." },
    { icon: "Slack", title: "Slack", description: "Get escalation alerts and performance summaries posted to your team channel." },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know before putting the WALOOP Conversational AI Platform to work.",
  items: [
    {
      question: "What is a Conversational AI Platform?",
      answer:
        "It's the unified layer that lets you design, deploy, and manage AI-driven agents — chat and voice — across every customer channel from one place, instead of stitching together separate bots for each channel.",
    },
    {
      question: "Can I integrate my existing CRM and database?",
      answer:
        "Yes. The platform connects to your CRM, product databases, and internal systems through native integrations and API webhooks, so agents can pull live data and trigger actions in your existing tools.",
    },
    {
      question: "Is customer data secure on WALOOP?",
      answer:
        "Yes. WALOOP is built on enterprise-grade security with encrypted data in transit and at rest, role-based access controls, and compliance-ready infrastructure designed for regulated industries.",
    },
    {
      question: "What is RAG and why does it matter here?",
      answer:
        "Retrieval-augmented generation connects your agent's responses to a live knowledge base, product catalog, or documentation set, so answers stay accurate instead of relying on the model's memory alone.",
    },
    {
      question: "Do I need developers to build or update an agent?",
      answer:
        "No. The Visual Prompt Studio and no-code workflow builder let product, support, and marketing teams design and update agents directly — engineering is only needed for custom integrations.",
    },
    {
      question: "Can agents hand off to a human?",
      answer:
        "Yes. Any agent can escalate mid-conversation to a human teammate in the unified workspace, carrying the full conversation history and context so the customer never has to repeat themselves.",
    },
    {
      question: "Which channels does the platform support?",
      answer: "WhatsApp, RCS, SMS, Web Chat, and Voice — all deployable from a single agent configuration.",
    },
  ],
};

export const ctaContent: {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
} = {
  heading: "Scale Enterprise AI Conversations Today",
  description:
    "Join 500+ enterprises using WALOOP's Conversational AI Platform to automate support, sales, and voice operations across every channel their customers use.",
  primaryCta: { label: "Get Started Now", href: "/#contact" },
  secondaryCta: { label: "Book Platform Demo", href: "/#contact" },
};
