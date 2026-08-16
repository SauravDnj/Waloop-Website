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
  badge: "Zero-Cost Lead Capture",
  title: "Missed Call Service",
  description:
    "Publish one number on ads, packaging, or hoardings. Every call rings once, disconnects free for the caller, and WALOOP fires the caller's data to your CRM in well under a second — no app, no data cost, no missed lead.",
  bullets: ["Free for the caller", "Sub-500ms webhook delivery", "No app required"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "Try Live Demo", href: "/#contact" },
};

export const heroWidgetProps: ChannelHeroWidgetProps = {
  icon: "PhoneMissed",
  title: "WALOOP Missed Call Engine",
  status: "LIVE · CAPTURING LEADS",
  stats: [
    { label: "Leads Today", value: "1,842" },
    { label: "Avg. Webhook Speed", value: "<500ms" },
  ],
  feedLabel: "Live Activity",
  feed: [
    { title: "Caller ••••••4821", subtitle: "Delhi · just now → CRM", tag: "Webhook Sent" },
    { title: "Caller ••••••1093", subtitle: "Maharashtra · 4s ago → CRM", tag: "SMS Sent" },
    { title: "Caller ••••••7756", subtitle: "Karnataka · 11s ago → CRM", tag: "WhatsApp Sent" },
  ],
};

export const overviewContent: {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
} = {
  eyebrow: "Understanding Missed Call Marketing",
  heading: "What is a Missed Call Service?",
  description:
    "A WALOOP Missed Call Service turns a single published phone number into a zero-cost lead-capture channel. The caller's phone rings once and disconnects automatically, at no cost to them, while WALOOP instantly captures their number and campaign context and pushes it wherever your team works.",
  points: [
    {
      icon: "PhoneMissed",
      title: "Free for the Caller",
      description: "The call rings once and auto-disconnects before it connects, so the customer never pays a rupee or a minute.",
    },
    {
      icon: "Zap",
      title: "Sub-500ms Webhooks",
      description: "Caller data lands on your CRM or server in under half a second — fast enough to call back while intent is still hot.",
    },
    {
      icon: "Webhook",
      title: "Configurable Payload",
      description: "Design your own JSON payload with placeholders like %caller%, %circle%, %operator%, and %campaign% to fit any endpoint.",
    },
    {
      icon: "MessageCircle",
      title: "Instant Follow-Up",
      description: "Trigger an automatic WhatsApp or SMS reply the moment a call lands, keeping the caller engaged while they wait.",
    },
    {
      icon: "ShieldCheck",
      title: "DND-Friendly by Design",
      description: "Because no call ever actually connects, the channel works even for numbers registered on DND lists.",
    },
    {
      icon: "Filter",
      title: "Duplicate Filtering",
      description: "Repeat calls from the same number within a configurable window are automatically deduplicated before they reach your CRM.",
    },
    {
      icon: "BarChart3",
      title: "Per-Campaign Tracking",
      description: "Assign a unique number or tag to every ad, hoarding, or packaging run and see exactly which one drives calls.",
    },
    {
      icon: "TrendingUp",
      title: "Measurable ROI",
      description: "Compare cost per lead across print, outdoor, and digital campaigns using the same real-time missed call data.",
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
  heading: "Everything a missed call number needs to convert",
  description: "A complete toolkit for capturing, enriching, routing, and following up on every missed call, automatically.",
  items: [
    {
      icon: "PhoneMissed",
      title: "One-Ring Auto-Disconnect",
      description: "Calls are engineered to disconnect after a single ring, so callers are never charged and never wait on hold.",
      tags: ["Zero Cost", "One Ring", "Auto-Disconnect"],
    },
    {
      icon: "Webhook",
      title: "Sub-500ms Webhook Delivery",
      description: "Caller data is pushed to your endpoint in under half a second, so a callback or reply can go out immediately.",
      tags: ["<500ms", "Real-Time", "Reliable"],
    },
    {
      icon: "FileJson",
      title: "Configurable JSON Payload",
      description: "Build your own payload shape using placeholders such as %caller%, %circle%, %operator%, and %campaign%.",
      tags: ["%caller%", "%circle%", "Custom Fields"],
    },
    {
      icon: "MapPin",
      title: "Telecom Circle Detection",
      description: "Every capture is enriched with the caller's telecom circle, so you know the region behind every lead instantly.",
      tags: ["Circle Data", "Geo Insight", "Auto-Tagged"],
    },
    {
      icon: "Signal",
      title: "Operator Identification",
      description: "The caller's mobile operator is resolved automatically and included in the webhook for smarter routing.",
      tags: ["Operator ID", "Auto-Detect", "Routing"],
    },
    {
      icon: "MessageCircle",
      title: "Automatic WhatsApp/SMS Follow-Up",
      description: "Fire a pre-approved WhatsApp or SMS message the instant a call is captured, without a human touching it.",
      tags: ["WhatsApp", "SMS", "Auto-Trigger"],
    },
    {
      icon: "PhoneCall",
      title: "Automatic Callback Trigger",
      description: "Optionally queue an instant callback to a sales or support line so a human can follow up within seconds.",
      tags: ["Click-to-Call", "Instant", "Sales-Ready"],
    },
    {
      icon: "ShieldCheck",
      title: "DND & Duplicate Filtering",
      description: "DND-registered numbers stay reachable and repeat callers within a set window are filtered before they duplicate leads.",
      tags: ["DND-Safe", "Dedup", "Clean Data"],
    },
    {
      icon: "Tag",
      title: "Per-Campaign Number Tracking",
      description: "Assign dedicated numbers or campaign tags to every channel and see performance broken out line by line.",
      tags: ["Campaign Tags", "Multi-Number", "Attribution"],
    },
    {
      icon: "BarChart3",
      title: "ROI & Conversion Analytics",
      description: "A live dashboard shows call volume, response times, and lead-to-conversion rates for every campaign.",
      tags: ["Dashboards", "Conversion", "Live Data"],
    },
    {
      icon: "Clock",
      title: "24/7 Uninterrupted Capture",
      description: "The service runs around the clock, capturing leads from packaging, hoardings, and ads even after hours.",
      tags: ["24/7", "Always-On", "No Downtime"],
    },
    {
      icon: "Users",
      title: "CRM & Lead Management Sync",
      description: "Push enriched caller records straight into your CRM or lead-management tool the moment they're captured.",
      tags: ["CRM Sync", "Auto-Push", "No Manual Entry"],
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
  heading: "From ring to CRM in under a second",
  description: "A single missed call moves through WALOOP's pipeline in milliseconds, from the first ring to a logged, actioned lead.",
  steps: [
    {
      step: "01",
      title: "Number is Published",
      description: "Your dedicated missed call number goes live on ads, packaging, hoardings, or digital creatives.",
    },
    {
      step: "02",
      title: "Customer Calls, Free of Charge",
      description: "A customer dials the number; it rings once and auto-disconnects before it ever connects a minute.",
    },
    {
      step: "03",
      title: "Caller Data is Captured",
      description: "The phone number, telecom circle, operator, timestamp, and campaign tag are captured instantly.",
    },
    {
      step: "04",
      title: "Webhook Fires in <500ms",
      description: "A configurable JSON payload is pushed to your CRM or endpoint in well under half a second.",
    },
    {
      step: "05",
      title: "Automated Follow-Up Goes Out",
      description: "An optional WhatsApp/SMS message or callback trigger reaches the customer while their intent is still fresh.",
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
  heading: "Built for every offline-to-online lead flow",
  description: "WALOOP Missed Call Service turns any offline touchpoint — print, packaging, outdoor, or broadcast — into a trackable digital lead.",
  items: [
    {
      icon: "Building2",
      title: "Real Estate",
      description: "Capture inquiries from hoardings and property ads the moment a prospect drives past and dials in.",
    },
    {
      icon: "Package",
      title: "FMCG & Packaging",
      description: "Turn product packaging into a lead and engagement channel with a number printed on every unit.",
    },
    {
      icon: "Landmark",
      title: "Banking & Finance",
      description: "Let customers request a callback for loans, cards, or account services without spending a paisa.",
    },
    {
      icon: "ShieldCheck",
      title: "Insurance",
      description: "Generate pre-qualified policy inquiries from print and outdoor campaigns with instant agent callbacks.",
    },
    {
      icon: "Radio",
      title: "Media & Broadcast",
      description: "Run on-air call-to-action campaigns and capture every response in real time for follow-up.",
    },
    {
      icon: "Car",
      title: "Automotive",
      description: "Drive test-drive and showroom-visit requests from hoardings, brochures, and dealership signage.",
    },
    {
      icon: "GraduationCap",
      title: "Education",
      description: "Capture admissions interest from campus banners, prospectuses, and newspaper ads instantly.",
    },
    {
      icon: "ShoppingCart",
      title: "Retail & E-commerce",
      description: "Track footfall and offline campaign response with a dedicated missed call number per store or ad.",
    },
    {
      icon: "Stethoscope",
      title: "Healthcare",
      description: "Let patients request appointment callbacks from clinic signage and health-camp promotions.",
    },
    {
      icon: "Megaphone",
      title: "Political & Public Campaigns",
      description: "Measure grassroots engagement and build voter or supporter databases from a single published number.",
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
  heading: "Why brands run missed call campaigns",
  items: [
    { icon: "PhoneMissed", title: "Zero Cost to the Customer", description: "A one-ring, auto-disconnect call never charges the caller a paisa or a minute." },
    { icon: "Zap", title: "Sub-Second Lead Delivery", description: "Webhooks land in under 500ms, so follow-up can start while interest is still hot." },
    { icon: "Webhook", title: "Fully Configurable Payload", description: "Shape the JSON however your CRM expects it, with placeholders for every field you need." },
    { icon: "MessageCircle", title: "Automatic Engagement", description: "WhatsApp, SMS, or callback triggers fire the instant a lead is captured, no manual step needed." },
    { icon: "ShieldCheck", title: "DND-Safe Reach", description: "Since no call connects, the channel reaches even numbers registered on national DND lists." },
    { icon: "Filter", title: "Clean, Deduplicated Data", description: "Repeat calls are filtered automatically, keeping your lead list accurate and actionable." },
    { icon: "BarChart3", title: "Clear Campaign ROI", description: "Per-number and per-campaign tracking shows exactly which offline spend is working." },
    { icon: "Workflow", title: "No App, No Friction", description: "Customers just dial and hang up — no download, no form, no data connection required." },
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
    { icon: "Webhook", title: "Custom Webhooks", description: "Push a fully configurable JSON payload to any endpoint the instant a call is captured." },
    { icon: "MessageCircle", title: "WhatsApp", description: "Trigger automatic WhatsApp follow-up messages the moment a missed call lands." },
    { icon: "MessageSquare", title: "SMS", description: "Send an instant SMS acknowledgement or offer to every caller, automatically." },
    { icon: "Users", title: "CRM", description: "Sync enriched caller records directly into HubSpot, Salesforce, Zoho, or any CRM you use." },
    { icon: "GitBranch", title: "REST API", description: "Pull historical missed call and campaign data programmatically for your own systems." },
    { icon: "Repeat", title: "Zapier", description: "Route captured leads into thousands of downstream apps without writing any code." },
    { icon: "PhoneCall", title: "Click-to-Call / IVR", description: "Chain an automatic callback or IVR flow to any missed call in real time." },
    { icon: "BarChart3", title: "Analytics Dashboards", description: "Feed live campaign and conversion data into your BI tool or the built-in dashboard." },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know before launching a WALOOP Missed Call Service number.",
  items: [
    {
      question: "What is a Missed Call Service?",
      answer:
        "It's a lead-capture channel built around a published phone number. When a customer calls it, the call rings once and auto-disconnects — free for the caller — while WALOOP instantly captures their details and sends them to your systems.",
    },
    {
      question: "Does the caller get charged anything?",
      answer: "No. The call is engineered to disconnect after a single ring, before it ever actually connects, so it costs the caller nothing.",
    },
    {
      question: "How fast does the data reach my CRM?",
      answer: "Webhooks are delivered in well under 500 milliseconds from the moment the call is captured, fast enough to follow up while intent is still fresh.",
    },
    {
      question: "What data is included in the webhook?",
      answer:
        "Each webhook carries the caller's phone number, telecom circle, mobile operator, timestamp, and campaign tag, using a JSON payload you configure yourself with placeholders like %caller%, %circle%, %operator%, and %campaign%.",
    },
    {
      question: "Can it automatically follow up with the caller?",
      answer: "Yes. You can trigger an automatic WhatsApp or SMS message, or queue an instant callback, the moment a call is captured.",
    },
    {
      question: "Does it work with DND-registered numbers?",
      answer: "Yes. Because no call is ever actually connected, missed call campaigns can capture leads from numbers on DND lists.",
    },
    {
      question: "How do I track ROI across different campaigns?",
      answer: "Assign a unique number or campaign tag to each ad, hoarding, or packaging run and compare volume, response time, and conversions per campaign in the dashboard.",
    },
    {
      question: "How long does setup take?",
      answer: "Most businesses have a live missed call number and configured webhook within a day, with no coding required to get started.",
    },
  ],
};

export const ctaContent: {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  heading: "Ready to Turn Missed Calls into Leads?",
  description:
    "Publish a WALOOP missed call number on your next campaign and start capturing leads for free — with sub-second delivery straight into your CRM.",
  primaryCta: { label: "Book a Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
