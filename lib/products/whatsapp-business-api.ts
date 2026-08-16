import type { OverviewPoint } from "@/components/product/OverviewSection";
import type { FeatureCard } from "@/components/product/FeatureGrid";
import type { Step } from "@/components/product/HowItWorks";
import type { IconGridItem } from "@/components/product/IconGrid";
import type { ChannelHeroWidgetProps } from "@/components/product/heroes/ChannelHeroWidget";

type CtaLink = { label: string; href: string };

export const heroContent: {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  badge: "Official Meta-Verified Channel",
  title: "WhatsApp Business API",
  description:
    "Put your brand on WhatsApp the official way — a Meta-verified Green Tick account with approved broadcast templates, native WhatsApp Flows, catalog commerce, and a shared team inbox synced straight to your CRM.",
  bullets: ["Meta Business Verified", "Official Green Tick", "99.9% Uptime"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "Try Live Demo", href: "/#contact" },
};

export const heroWidgetProps: ChannelHeroWidgetProps = {
  icon: "MessageSquare",
  title: "WALOOP WhatsApp API",
  status: "ONLINE · OFFICIAL ACCOUNT",
  stats: [
    { label: "Delivery Rate", value: "98.9%" },
    { label: "Read Rate", value: "82.4%" },
  ],
  feedLabel: "Live Activity",
  feed: [
    { title: "Order Update Template", subtitle: "+91 98••• 43210", tag: "Delivered" },
    { title: "Payment Reminder Broadcast", subtitle: "+1 415••• 7821", tag: "Read" },
    { title: "Appointment Confirmation", subtitle: "+44 7700••• 9021", tag: "Sent" },
  ],
};

export const overviewContent: {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
} = {
  eyebrow: "Understanding the API",
  heading: "What is the WhatsApp Business API?",
  description:
    "The WhatsApp Business API is Meta's official, verified channel for enterprises — built for scale, compliance, and trust, not the consumer app. WALOOP sets up, verifies, and runs the whole account for you.",
  points: [
    {
      icon: "BadgeCheck",
      title: "Meta-Verified Green Tick",
      description:
        "Complete Meta Business Verification and earn the official Green Tick badge, so customers know they're messaging the real, authenticated brand.",
    },
    {
      icon: "Megaphone",
      title: "Approved Broadcast Templates",
      description:
        "Send bulk notifications, offers, and alerts using message templates reviewed and approved by Meta — fully compliant at any volume.",
    },
    {
      icon: "Layers",
      title: "Native WhatsApp Flows",
      description:
        "Collect structured information with multi-step forms that open and submit entirely inside the chat window — no redirect to an external page.",
    },
    {
      icon: "ShoppingBag",
      title: "Commerce & Catalog Messaging",
      description:
        "Showcase your product catalog and let customers browse, select, and check out without ever leaving the conversation.",
    },
    {
      icon: "Inbox",
      title: "Shared Team Inbox",
      description:
        "One business number, one shared inbox — your whole team collaborates on conversations with assignment, notes, and status tracking.",
    },
    {
      icon: "RefreshCw",
      title: "CRM Sync",
      description:
        "Every conversation, contact, and outcome flows into your CRM automatically, keeping sales and support on the same source of truth.",
    },
    {
      icon: "ShieldCheck",
      title: "Enterprise-Grade Trust",
      description:
        "Built on official Meta infrastructure with end-to-end delivery guarantees, so the channel holds up to enterprise compliance standards.",
    },
    {
      icon: "TrendingUp",
      title: "Built to Scale",
      description:
        "From thousands to millions of conversations a month, the same account scales without changing your workflow or number.",
    },
  ],
};

export const featuresContent: {
  eyebrow: string;
  heading: string;
  description: string;
  items: FeatureCard[];
} = {
  eyebrow: "Platform Features",
  heading: "Everything your official WhatsApp channel needs",
  description: "A complete toolkit for verified messaging, broadcast campaigns, commerce, and team collaboration on WhatsApp.",
  items: [
    {
      icon: "BadgeCheck",
      title: "Meta Business Verification",
      description: "WALOOP manages your end-to-end Meta Business Verification and Official Business Account (Green Tick) application.",
      tags: ["Green Tick", "Meta Verified", "Managed Setup"],
    },
    {
      icon: "FileText",
      title: "Message Template Management",
      description: "Create, submit, and version message templates with Meta approval tracking built right into the dashboard.",
      tags: ["Templates", "Approval Tracking", "Versioning"],
    },
    {
      icon: "Megaphone",
      title: "Broadcast Campaigns",
      description: "Segment your audience and send approved template broadcasts at scale, with delivery and read analytics per send.",
      tags: ["Segmentation", "Bulk Send", "Analytics"],
    },
    {
      icon: "Layers",
      title: "WhatsApp Flows Builder",
      description: "Design multi-step, native in-chat forms for lead capture, bookings, surveys, and onboarding with a drag-and-drop builder.",
      tags: ["No-Code", "Multi-Step", "In-Chat"],
    },
    {
      icon: "ShoppingBag",
      title: "Product Catalog & Commerce",
      description: "Sync your product catalog and let customers browse, add to cart, and pay directly inside the WhatsApp conversation.",
      tags: ["Catalog Sync", "Cart", "In-Chat Checkout"],
    },
    {
      icon: "Inbox",
      title: "Shared Team Inbox",
      description: "Every conversation lands in one collaborative inbox, so agents never duplicate replies or lose context on a thread.",
      tags: ["Unified Inbox", "Collaboration", "Threading"],
    },
    {
      icon: "Users",
      title: "Agent Assignment & Routing",
      description: "Route incoming chats to the right team or agent automatically based on rules, load, or customer intent.",
      tags: ["Auto-Routing", "Load Balancing", "Rules"],
    },
    {
      icon: "RefreshCw",
      title: "CRM & Helpdesk Sync",
      description: "Two-way sync keeps contacts, conversation history, and ticket status aligned across your CRM and helpdesk tools.",
      tags: ["Two-Way Sync", "CRM", "Helpdesk"],
    },
    {
      icon: "Image",
      title: "Rich Media Messaging",
      description: "Send images, videos, PDFs, location pins, and voice notes alongside text for a richer conversation experience.",
      tags: ["Images", "Documents", "Location"],
    },
    {
      icon: "ListChecks",
      title: "Interactive Buttons & Lists",
      description: "Turn replies into quick-reply buttons and list menus that guide customers to a resolution in fewer taps.",
      tags: ["Quick Replies", "List Menus", "Guided UX"],
    },
    {
      icon: "BarChart3",
      title: "Delivery & Engagement Analytics",
      description: "Track sent, delivered, read, and reply rates for every template and campaign in a single live dashboard.",
      tags: ["Delivery Rate", "Read Rate", "Live Dashboard"],
    },
    {
      icon: "Webhook",
      title: "Developer API & Webhooks",
      description: "Trigger messages and receive real-time events programmatically to plug WhatsApp into any internal system.",
      tags: ["REST API", "Webhooks", "Real-Time"],
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
  heading: "From verification to conversation in five steps",
  description: "WALOOP handles the official setup so your team can focus on the conversation, not the compliance paperwork.",
  steps: [
    {
      step: "01",
      title: "Apply for Meta Verification",
      description: "WALOOP submits and manages your Meta Business Verification and Official Business Account application.",
    },
    {
      step: "02",
      title: "Design Templates & Flows",
      description: "Build message templates and native WhatsApp Flows for the journeys your customers go through most often.",
    },
    {
      step: "03",
      title: "Connect Your Number",
      description: "Register or migrate your existing business number to the WhatsApp Business API without changing your identity.",
    },
    {
      step: "04",
      title: "Launch Broadcasts & Commerce",
      description: "Send approved broadcast campaigns and share your product catalog for browsing and checkout in-chat.",
    },
    {
      step: "05",
      title: "Manage in Shared Inbox",
      description: "Your team replies from one shared inbox while every conversation and outcome syncs live to your CRM.",
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
  heading: "Trusted infrastructure for every customer-facing team",
  description: "WALOOP WhatsApp Business API adapts its templates, Flows, and catalog setup to how each industry actually sells and supports.",
  items: [
    {
      icon: "Landmark",
      title: "Banking & Financial Services",
      description: "Send verified account alerts, statements, and payment reminders through a Meta-authenticated channel customers trust.",
    },
    {
      icon: "ShieldCheck",
      title: "Insurance",
      description: "Deliver policy renewals, claim updates, and document collection through approved templates and in-chat Flows.",
    },
    {
      icon: "ShoppingCart",
      title: "Retail & E-commerce",
      description: "Broadcast offers, share catalogs, and let shoppers check out without leaving the WhatsApp conversation.",
    },
    {
      icon: "Building2",
      title: "Real Estate",
      description: "Share verified listings, brochures, and site-visit booking Flows directly with qualified buyers and renters.",
    },
    {
      icon: "Plane",
      title: "Travel & Hospitality",
      description: "Send booking confirmations, itinerary updates, and check-in Flows from an account guests recognize as official.",
    },
    {
      icon: "HeartPulse",
      title: "Healthcare",
      description: "Deliver appointment reminders and reports through a verified channel that meets patient-communication expectations.",
    },
    {
      icon: "GraduationCap",
      title: "Education",
      description: "Automate admissions updates, fee reminders, and counselling Flows for prospective and current students alike.",
    },
    {
      icon: "Truck",
      title: "Logistics & Delivery",
      description: "Push real-time shipment and delivery notifications through approved templates at any volume.",
    },
    {
      icon: "Car",
      title: "Automotive",
      description: "Run service reminders, test-drive booking Flows, and new-launch broadcasts from one verified dealership number.",
    },
    {
      icon: "Utensils",
      title: "D2C & Food Brands",
      description: "Turn broadcast campaigns and catalog messaging into a direct, verified sales channel on WhatsApp.",
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
  heading: "Why enterprises move to the official API",
  items: [
    { icon: "BadgeCheck", title: "Brand Trust & Credibility", description: "The Green Tick badge signals to every customer that they're talking to the verified, real business." },
    { icon: "Megaphone", title: "Scale Without Spam Risk", description: "Approved templates let you broadcast at volume while staying fully within Meta's messaging policy." },
    { icon: "TrendingUp", title: "Higher Engagement", description: "WhatsApp messages routinely see far higher open and read rates than email or SMS." },
    { icon: "Layers", title: "Frictionless Data Capture", description: "Native Flows collect structured information in-chat, without ever sending a customer to an external form." },
    { icon: "ShoppingBag", title: "Revenue Inside the Chat", description: "Catalog and commerce messaging turn conversations into completed purchases without app-switching." },
    { icon: "Inbox", title: "Unified Team Collaboration", description: "A shared inbox keeps every agent working from the same conversation history, with nothing duplicated." },
    { icon: "RefreshCw", title: "Single Source of Truth", description: "CRM sync keeps sales, support, and marketing aligned on the same customer record automatically." },
    { icon: "ShieldCheck", title: "Enterprise-Grade Reliability", description: "Official Meta infrastructure backs every message with strong delivery guarantees at any scale." },
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
    { icon: "Users", title: "CRM", description: "Sync contacts, conversation history, and deal stages with HubSpot, Salesforce, or Zoho." },
    { icon: "Headset", title: "Helpdesk", description: "Push and resolve support tickets directly from WhatsApp threads via Zendesk or Freshdesk." },
    { icon: "ShoppingCart", title: "Shopify & WooCommerce", description: "Sync your storefront catalog and order status straight into WhatsApp commerce messaging." },
    { icon: "CreditCard", title: "Payment Gateways", description: "Accept payments in-chat through supported gateways linked to your WhatsApp catalog checkout." },
    { icon: "Webhook", title: "REST API", description: "Send messages and receive delivery events programmatically from your own systems." },
    { icon: "GitBranch", title: "Webhooks", description: "Fire real-time events to any endpoint the moment a message is sent, delivered, or read." },
    { icon: "Repeat", title: "Zapier", description: "Connect broadcasts and Flows to thousands of apps without writing a line of code." },
    { icon: "Sheet", title: "Google Sheets", description: "Feed broadcast lists and export campaign results straight to a spreadsheet." },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know before putting the official WhatsApp Business API to work for your brand.",
  items: [
    {
      question: "What is the WhatsApp Green Tick and how do we get it?",
      answer:
        "The Green Tick is Meta's Official Business Account badge, granted after Meta Business Verification confirms your brand's identity. WALOOP manages the entire verification and application process for you.",
    },
    {
      question: "What are message templates and why do they need approval?",
      answer:
        "Templates are pre-approved message formats required for any business-initiated conversation outside a customer's 24-hour reply window. Meta reviews each template for policy compliance before it can be sent.",
    },
    {
      question: "What can I build with WhatsApp Flows?",
      answer:
        "Flows are native, multi-step forms that open inside the chat — used for lead capture, appointment booking, surveys, and onboarding — so customers never have to leave WhatsApp to submit information.",
    },
    {
      question: "Can customers buy products directly on WhatsApp?",
      answer:
        "Yes. Your product catalog can be shared, browsed, and checked out entirely within the conversation using commerce and catalog messaging.",
    },
    {
      question: "Can multiple agents share one WhatsApp number?",
      answer:
        "Yes, the shared team inbox lets your whole team access and reply to conversations from a single verified business number, with assignment and routing built in.",
    },
    {
      question: "Can we keep our existing business number?",
      answer:
        "In most cases, yes. Your existing number can be migrated to the WhatsApp Business API without changing how customers reach you.",
    },
    {
      question: "Does it integrate with our CRM?",
      answer:
        "Yes, conversations, contacts, and outcomes sync automatically with HubSpot, Salesforce, Zoho, and other CRMs, or with any system via webhooks and REST API.",
    },
    {
      question: "How long does setup and verification take?",
      answer:
        "Meta Business Verification typically completes within a few business days once documentation is submitted, and WALOOP guides the process end to end.",
    },
  ],
};

export const ctaContent: {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  heading: "Ready to Go Live with a Verified WhatsApp Channel?",
  description:
    "Get your Meta Business Verification, Green Tick badge, and full WhatsApp Business API setup handled end to end — so your brand can broadcast, sell, and support at enterprise scale.",
  primaryCta: { label: "Book a Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
