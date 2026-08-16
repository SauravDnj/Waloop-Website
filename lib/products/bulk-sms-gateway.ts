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
  badge: "Enterprise SMS Platform",
  title: "Bulk SMS Gateway",
  description:
    "Deliver OTPs, transactional alerts, and marketing campaigns at scale with a DLT-compliant SMS gateway built for India and global reach — sub-3-second delivery, smart carrier routing, and real-time reports on every message.",
  bullets: ["DLT Compliant", "Sub-3s OTP Delivery", "99.9% Uptime"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "Try Live Demo", href: "/#contact" },
};

export const heroWidgetProps: ChannelHeroWidgetProps = {
  icon: "Send",
  title: "WALOOP SMS Gateway",
  status: "LIVE · DLT COMPLIANT",
  stats: [
    { label: "Delivery Rate", value: "98.9%" },
    { label: "Avg. Delivery Speed", value: "<3s" },
  ],
  feedLabel: "Live Activity",
  feed: [
    { title: "Order confirmation SMS", subtitle: "+91 98XXX XX214", tag: "Delivered" },
    { title: "OTP verification", subtitle: "+91 87XXX XX562", tag: "Delivered" },
    { title: "Shipping update SMS", subtitle: "+91 90XXX XX748", tag: "Sent" },
  ],
};

export const overviewContent: {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
} = {
  eyebrow: "Understanding Bulk SMS",
  heading: "What is a Bulk SMS Gateway?",
  description:
    "The WALOOP Bulk SMS Gateway is a high-throughput messaging platform that sends transactional and promotional SMS at scale, with DLT registration handled for you, smart routing across carriers, and delivery reports on every single message.",
  points: [
    {
      icon: "Zap",
      title: "Lightning-Fast Delivery",
      description: "OTPs and transactional alerts reach handsets in under 3 seconds, even during peak traffic.",
    },
    {
      icon: "ShieldCheck",
      title: "DLT Compliant",
      description: "Every message is routed through TRAI's Distributed Ledger Technology framework, with registration handled end to end.",
    },
    {
      icon: "Globe",
      title: "India & Global Reach",
      description: "Send domestically across every Indian carrier or internationally to 190+ countries from one platform.",
    },
    {
      icon: "Route",
      title: "Smart Carrier Routing",
      description: "Messages are automatically routed through the best-performing carrier path to maximize delivery success.",
    },
    {
      icon: "BarChart3",
      title: "Real-Time Delivery Reports",
      description: "Track sent, delivered, and failed status for every message with live DLR updates down to the second.",
    },
    {
      icon: "Webhook",
      title: "Developer-Friendly API",
      description: "A REST API with webhooks lets your team send, track, and automate SMS without touching a dashboard.",
    },
    {
      icon: "TrendingUp",
      title: "Built to Scale",
      description: "Push millions of messages a day without a dip in throughput or delivery performance.",
    },
    {
      icon: "Clock",
      title: "Always On",
      description: "A redundant, enterprise-grade infrastructure keeps your messages flowing around the clock.",
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
  heading: "Everything your SMS channel needs",
  description: "A complete toolkit for sending, tracking, and scaling transactional and promotional SMS across every use case.",
  items: [
    {
      icon: "Timer",
      title: "Sub-3-Second OTP Delivery",
      description: "One-time passwords and login codes land on the handset in under 3 seconds, keeping conversion friction low.",
      tags: ["OTP", "Instant", "High Priority"],
    },
    {
      icon: "ShieldCheck",
      title: "DLT Registration Assistance",
      description: "We guide you through entity, header, and template registration on the DLT platform so every message stays compliant.",
      tags: ["TRAI", "Compliance", "Guided Setup"],
    },
    {
      icon: "Webhook",
      title: "REST API & Webhooks",
      description: "Send single or bulk messages programmatically and receive real-time status callbacks on your own endpoint.",
      tags: ["REST API", "Webhooks", "Docs"],
    },
    {
      icon: "BarChart3",
      title: "Real-Time DLR Reports",
      description: "Delivery reports update live for every message, with sent, delivered, and failed states visible instantly.",
      tags: ["DLR", "Live Status", "Reports"],
    },
    {
      icon: "Route",
      title: "Smart Carrier Routing",
      description: "Traffic is dynamically routed across multiple carrier connections to maximize delivery rates and minimize latency.",
      tags: ["Multi-Carrier", "Failover", "Optimized"],
    },
    {
      icon: "Layers",
      title: "Template Management",
      description: "Create, submit, and manage DLT-approved templates for transactional and promotional messages from one place.",
      tags: ["Templates", "DLT Approved", "Reusable"],
    },
    {
      icon: "Users",
      title: "Bulk Contact Lists",
      description: "Upload, segment, and manage large contact lists for targeted promotional campaigns.",
      tags: ["Segmentation", "CSV Import", "Targeting"],
    },
    {
      icon: "CalendarClock",
      title: "Scheduled Campaigns",
      description: "Queue promotional or reminder blasts in advance and let the platform send them at the optimal time.",
      tags: ["Scheduling", "Automation", "Campaigns"],
    },
    {
      icon: "Globe2",
      title: "Global SMS Delivery",
      description: "Reach customers in 190+ countries with local routing that keeps international delivery fast and reliable.",
      tags: ["190+ Countries", "Local Routes", "Global"],
    },
    {
      icon: "Gauge",
      title: "High-Throughput Sending",
      description: "Push millions of messages per day through a horizontally scalable gateway built for enterprise volume.",
      tags: ["Millions/Day", "Scalable", "Enterprise"],
    },
    {
      icon: "Lock",
      title: "Sender ID Management",
      description: "Register and manage approved sender IDs and headers so every message arrives with a trusted, branded identity.",
      tags: ["Sender ID", "Branded", "Trusted"],
    },
    {
      icon: "LineChart",
      title: "Analytics Dashboard",
      description: "Monitor delivery rates, latency, and campaign performance in a single real-time dashboard.",
      tags: ["Dashboard", "Insights", "Real-Time"],
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
  heading: "From trigger to delivered in seconds",
  description: "A single message moves through the gateway's pipeline in seconds, from API call to confirmed delivery.",
  steps: [
    {
      step: "01",
      title: "Trigger the Send",
      description: "Your app calls the REST API or dashboard to send a transactional or promotional message.",
    },
    {
      step: "02",
      title: "Template & DLT Check",
      description: "The message is matched against your approved DLT template and sender ID before it leaves the gateway.",
    },
    {
      step: "03",
      title: "Smart Routing",
      description: "The gateway selects the fastest, most reliable carrier path for the destination in real time.",
    },
    {
      step: "04",
      title: "Delivered to Handset",
      description: "The message reaches the recipient's phone, typically in under 3 seconds for priority traffic like OTPs.",
    },
    {
      step: "05",
      title: "Live Status Reported",
      description: "A delivery report is pushed to your webhook the instant the message is sent, delivered, or fails.",
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
  heading: "Built for every high-volume business",
  description: "WALOOP Bulk SMS Gateway adapts to the messaging patterns each industry relies on most.",
  items: [
    {
      icon: "ShoppingCart",
      title: "E-commerce",
      description: "Send order confirmations, shipping updates, and delivery alerts the moment they happen.",
    },
    {
      icon: "Landmark",
      title: "Banking & Finance",
      description: "Deliver OTPs, transaction alerts, and fraud notifications with the speed compliance demands.",
    },
    {
      icon: "ShieldCheck",
      title: "Insurance",
      description: "Send policy reminders, renewal alerts, and claim status updates directly to policyholders.",
    },
    {
      icon: "Truck",
      title: "Logistics & Delivery",
      description: "Keep customers updated with real-time shipment tracking and delivery-window notifications.",
    },
    {
      icon: "Hospital",
      title: "Healthcare",
      description: "Send appointment reminders, prescription alerts, and lab report notifications reliably.",
    },
    {
      icon: "GraduationCap",
      title: "Education",
      description: "Notify students and parents about admissions, results, fee due dates, and attendance.",
    },
    {
      icon: "Hotel",
      title: "Travel & Hospitality",
      description: "Send booking confirmations, check-in reminders, and itinerary updates at scale.",
    },
    {
      icon: "Megaphone",
      title: "Retail & Marketing",
      description: "Run promotional blasts, flash-sale alerts, and loyalty campaigns to segmented audiences.",
    },
    {
      icon: "Utensils",
      title: "Food Delivery",
      description: "Push order status, delivery ETAs, and offer codes the moment an order updates.",
    },
    {
      icon: "Building2",
      title: "Real Estate",
      description: "Send site-visit confirmations, payment reminders, and project updates to buyers.",
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
  heading: "Why teams switch to WALOOP SMS",
  items: [
    { icon: "Zap", title: "Sub-3-Second Delivery", description: "OTPs and time-sensitive alerts reach customers before they lose interest." },
    { icon: "ShieldCheck", title: "Guaranteed DLT Compliance", description: "Stay fully aligned with TRAI regulations without managing the paperwork yourself." },
    { icon: "Route", title: "Higher Delivery Rates", description: "Smart multi-carrier routing keeps delivery rates consistently high, even at peak volume." },
    { icon: "Globe", title: "Global Coverage", description: "Reach customers across India and 190+ countries from a single integration." },
    { icon: "TrendingUp", title: "Scales With You", description: "Send a few thousand messages or a few million without changing your setup." },
    { icon: "BarChart3", title: "Full Visibility", description: "Real-time delivery reports mean you always know exactly where a message stands." },
    { icon: "Webhook", title: "Easy Integration", description: "A well-documented REST API and webhooks get your team live in days, not weeks." },
    { icon: "TrendingDown", title: "Lower Cost Per Message", description: "Smart routing and volume-based pricing keep your cost per delivered message down." },
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
    { icon: "Webhook", title: "REST API", description: "Send, schedule, and track messages programmatically from any application." },
    { icon: "GitBranch", title: "Webhooks", description: "Receive real-time delivery status callbacks the instant a message state changes." },
    { icon: "ShoppingBag", title: "E-commerce Platforms", description: "Connect order and shipping events directly to automated SMS notifications." },
    { icon: "Users", title: "CRM", description: "Sync contacts and trigger messages from HubSpot, Salesforce, Zoho, and more." },
    { icon: "Repeat", title: "Zapier", description: "Trigger SMS sends from thousands of apps without writing a line of code." },
    { icon: "Database", title: "CDP & Data Platforms", description: "Pull segments from your customer data platform to power targeted campaigns." },
    { icon: "Code2", title: "SDKs", description: "Drop in ready-made libraries for popular languages to integrate in minutes." },
    { icon: "Slack", title: "Slack", description: "Get delivery failure alerts and campaign summaries posted to your team channel." },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know before putting WALOOP Bulk SMS Gateway to work.",
  items: [
    {
      question: "What is DLT compliance and why does it matter?",
      answer:
        "DLT is TRAI's Distributed Ledger Technology framework that requires every commercial sender, header, and message template in India to be pre-registered. It exists to curb spam and fraud — messages sent outside a registered template are blocked by carriers. WALOOP handles entity, header, and template registration on your behalf.",
    },
    {
      question: "How fast are OTPs delivered?",
      answer: "Priority transactional traffic like OTPs is typically delivered to the handset in under 3 seconds through our smart carrier routing.",
    },
    {
      question: "Can I send SMS outside India?",
      answer: "Yes, the gateway supports delivery to 190+ countries with local routing optimized for each region's carrier network.",
    },
    {
      question: "What's the difference between transactional and promotional SMS?",
      answer:
        "Transactional messages (OTPs, order updates, alerts) are triggered by user actions and delivered on priority routes. Promotional messages (offers, campaigns) go through separate DLT-approved templates and respect consent and time-of-day sending rules.",
    },
    {
      question: "Do you provide delivery reports?",
      answer: "Yes, real-time delivery reports (DLR) are available for every message, with sent, delivered, and failed statuses pushed live to your webhook.",
    },
    {
      question: "Is there a REST API?",
      answer: "Yes, a full REST API with webhooks lets you send single or bulk messages, manage templates, and receive delivery callbacks programmatically.",
    },
    {
      question: "How much SMS volume can the platform handle?",
      answer: "The gateway is built to scale from a few hundred messages to several million per day without any change to your integration.",
    },
    {
      question: "How long does DLT registration take?",
      answer: "Entity and header registration typically takes a few business days once documentation is submitted; our team guides you through every step.",
    },
  ],
};

export const ctaContent: {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  heading: "Ready to Send SMS at Scale?",
  description:
    "Put a DLT-compliant Bulk SMS Gateway behind your product to deliver OTPs, order updates, and campaigns in seconds — with delivery reports on every message.",
  primaryCta: { label: "Book a Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
