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
  badge: "RCS Business Messaging",
  title: "RCS Business Messaging",
  description:
    "Send branded, interactive messages that land natively in Android Messages — rich cards, swipeable carousels, and quick-reply buttons under a Google-verified sender badge, with automatic SMS fallback so no message ever goes undelivered.",
  bullets: ["Google-verified sender", "Automatic SMS fallback", "No app install required"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "Try Live Demo", href: "/#contact" },
};

export const heroWidgetProps: ChannelHeroWidgetProps = {
  icon: "Sparkles",
  title: "WALOOP RCS Sender",
  status: "VERIFIED · GOOGLE SENDER",
  stats: [
    { label: "Read Rate", value: "97%" },
    { label: "CTR vs SMS", value: "3x" },
  ],
  feedLabel: "Live Activity",
  feed: [
    { title: "Order Update Carousel", subtitle: "Rich card · 4 items sent", tag: "Delivered" },
    { title: "OTP Verification", subtitle: "Authentication template", tag: "Read" },
    { title: "Flash Sale Card", subtitle: "SMS fallback triggered", tag: "Fallback" },
  ],
};

export const overviewContent: {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
} = {
  eyebrow: "Understanding RCS",
  heading: "What is RCS Business Messaging?",
  description:
    "RCS (Rich Communication Services) is Google's official upgrade to SMS — it turns a plain text thread into a branded, app-like conversation that opens natively in Android Messages, with no download or opt-in app required from the recipient.",
  points: [
    {
      icon: "BadgeCheck",
      title: "Google-Verified Sender",
      description: "Every message carries your verified brand name and logo, so recipients see exactly who's messaging them and spoofed senders can't impersonate you.",
    },
    {
      icon: "GalleryHorizontal",
      title: "Rich Cards & Carousels",
      description: "Swap plain text for swipeable image carousels, product cards, and buttons that turn a message into a mini storefront.",
    },
    {
      icon: "MousePointerClick",
      title: "Interactive Quick Replies",
      description: "Tappable quick-reply and call-to-action buttons let customers respond, browse, or act without typing a single word.",
    },
    {
      icon: "ShieldCheck",
      title: "Secure OTP Delivery",
      description: "One-time passcodes and authentication codes arrive inside a verified, branded bubble that's far harder to spoof than SMS.",
    },
    {
      icon: "RefreshCw",
      title: "Automatic SMS Fallback",
      description: "If a device or carrier doesn't support RCS, the message silently falls back to SMS so delivery is never blocked.",
    },
    {
      icon: "TrendingUp",
      title: "Higher Engagement",
      description: "Rich, branded formatting consistently drives significantly higher click-through and read rates than plain-text SMS.",
    },
    {
      icon: "Smartphone",
      title: "No App Install Needed",
      description: "Messages open in the Android Messages app every recipient already has — there's nothing new to download or approve.",
    },
    {
      icon: "BarChart3",
      title: "Built-In Read Receipts",
      description: "Delivered, read, and typing indicators give you real visibility into how customers are engaging with every message.",
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
  heading: "Everything your RCS channel needs",
  description: "A complete toolkit for sending rich, branded, and interactive messages at scale — with SMS always there as a safety net.",
  items: [
    {
      icon: "BadgeCheck",
      title: "Verified Sender Profile",
      description: "Your logo, brand name, and verification badge appear on every message, blocking impersonation and building trust.",
      tags: ["Brand Logo", "Verified Badge", "Anti-Spoofing"],
    },
    {
      icon: "GalleryHorizontal",
      title: "Rich Cards",
      description: "Combine images, titles, descriptions, and buttons into a single tappable card that looks like a native app screen.",
      tags: ["Images", "Buttons", "App-Like"],
    },
    {
      icon: "Layers",
      title: "Swipeable Carousels",
      description: "Showcase multiple products, offers, or steps in one message that recipients swipe through, no extra taps needed.",
      tags: ["Multi-Item", "Swipe", "Catalog"],
    },
    {
      icon: "MousePointerClick",
      title: "Quick-Reply Buttons",
      description: "Let customers reply with a single tap — confirm, cancel, or choose an option without typing anything.",
      tags: ["One-Tap", "Structured", "Fast"],
    },
    {
      icon: "MapPin",
      title: "Action Buttons",
      description: "Trigger a call, open a map location, launch a URL, or add a calendar event directly from the message.",
      tags: ["Call", "Map", "URL"],
    },
    {
      icon: "KeyRound",
      title: "OTP & Authentication",
      description: "Deliver one-time passcodes and login verifications through a verified sender identity that's resistant to phishing.",
      tags: ["OTP", "2FA", "Verified"],
    },
    {
      icon: "RefreshCw",
      title: "Automatic SMS Fallback",
      description: "Unsupported devices and carriers automatically receive the SMS equivalent, so every send still reaches its recipient.",
      tags: ["Failover", "Zero Gap", "Reliable"],
    },
    {
      icon: "Radar",
      title: "Capability Detection",
      description: "The platform checks RCS support per device in real time and routes each message down the best available channel.",
      tags: ["Real-Time", "Smart Routing", "Per-Device"],
    },
    {
      icon: "Eye",
      title: "Read Receipts & Typing Indicators",
      description: "See delivered and read status plus live typing indicators for a true two-way conversational experience.",
      tags: ["Delivered", "Read", "Typing"],
    },
    {
      icon: "LayoutTemplate",
      title: "Template Builder",
      description: "Design and preview rich cards, carousels, and button sets visually, then reuse approved templates across campaigns.",
      tags: ["Drag & Drop", "Preview", "Reusable"],
    },
    {
      icon: "Send",
      title: "Bulk Campaign Sending",
      description: "Launch branded RCS campaigns to large audiences with scheduling, throttling, and delivery monitoring built in.",
      tags: ["Scheduling", "Throttling", "Scale"],
    },
    {
      icon: "BarChart3",
      title: "Analytics Dashboard",
      description: "Track delivery, read rate, click-through, and fallback rate for every campaign in one real-time reporting view.",
      tags: ["CTR", "Fallback Rate", "Real-Time"],
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
  heading: "From send to reply in five steps",
  description: "Every RCS message is checked, formatted, and routed automatically, so a rich experience reaches every recipient one way or another.",
  steps: [
    {
      step: "01",
      title: "Message Is Queued",
      description: "A rich card, carousel, or text message is built and queued for delivery through the WALOOP platform.",
    },
    {
      step: "02",
      title: "Device Capability Checked",
      description: "The platform checks in real time whether the recipient's device and carrier support RCS.",
    },
    {
      step: "03",
      title: "Rich Message Delivered",
      description: "If RCS is supported, the branded card, carousel, or buttons render natively inside Android Messages.",
    },
    {
      step: "04",
      title: "SMS Fallback if Needed",
      description: "If RCS isn't available, the message automatically falls back to standard SMS with no manual intervention.",
    },
    {
      step: "05",
      title: "Engagement Tracked",
      description: "Delivery, read status, taps, and replies flow back into your dashboard in real time for every send.",
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
  heading: "Built for every brand that messages customers",
  description: "WALOOP RCS adapts its card formats and workflows to the way each industry actually reaches its customers.",
  items: [
    {
      icon: "ShoppingCart",
      title: "E-commerce",
      description: "Send shoppable carousels, order updates, and delivery tracking cards that look like a native storefront.",
    },
    {
      icon: "Landmark",
      title: "Banking & Finance",
      description: "Deliver verified OTPs, transaction alerts, and statement links through a trusted, spoof-resistant sender.",
    },
    {
      icon: "Truck",
      title: "Logistics & Delivery",
      description: "Share real-time shipment cards with maps, tracking links, and delivery-window action buttons.",
    },
    {
      icon: "Hotel",
      title: "Travel & Hospitality",
      description: "Send booking confirmations, boarding cards, and itinerary carousels recipients can tap through instantly.",
    },
    {
      icon: "HeartPulse",
      title: "Healthcare",
      description: "Deliver appointment reminders and verified health notices with one-tap confirm or reschedule buttons.",
    },
    {
      icon: "Building2",
      title: "Real Estate",
      description: "Showcase property listings as swipeable carousels with photos, pricing, and a tap-to-call agent button.",
    },
    {
      icon: "GraduationCap",
      title: "Education",
      description: "Send admissions updates, fee reminders, and event cards with verified branding parents can trust.",
    },
    {
      icon: "ShieldCheck",
      title: "Insurance",
      description: "Deliver policy renewals, claim status cards, and verified authentication messages that resist phishing.",
    },
    {
      icon: "UtensilsCrossed",
      title: "Food & QSR",
      description: "Send order confirmations, loyalty offers, and menu carousels that drive customers straight to reorder.",
    },
    {
      icon: "Headset",
      title: "Customer Support",
      description: "Escalate support tickets into rich, interactive conversations with quick-reply resolution options.",
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
  heading: "Why brands are upgrading from SMS to RCS",
  items: [
    { icon: "BadgeCheck", title: "Verified Brand Identity", description: "A Google-verified badge builds trust and blocks impersonation on every message." },
    { icon: "TrendingUp", title: "Higher Click-Through", description: "Rich cards and buttons routinely drive far higher CTR than plain-text SMS." },
    { icon: "RefreshCw", title: "Zero Delivery Gaps", description: "Automatic SMS fallback means every message still reaches unsupported devices." },
    { icon: "GalleryHorizontal", title: "App-Like Experience", description: "Carousels, images, and buttons give customers a native, on-brand experience with no install." },
    { icon: "ShieldCheck", title: "Stronger Security", description: "Verified sender identity makes OTPs and alerts far more resistant to phishing and spoofing." },
    { icon: "Eye", title: "Real Engagement Visibility", description: "Read receipts and typing indicators show exactly how customers interact with each send." },
    { icon: "DollarSign", title: "Better Cost Efficiency", description: "Higher engagement per message improves the return on every campaign compared to plain SMS." },
    { icon: "Workflow", title: "Simple Migration", description: "Existing SMS workflows upgrade to RCS with automatic fallback, so nothing breaks in transition." },
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
    { icon: "MessageCircle", title: "WhatsApp", description: "Run RCS and WhatsApp campaigns side by side from a single unified messaging workspace." },
    { icon: "Users", title: "CRM", description: "Sync delivery, read, and reply data with HubSpot, Salesforce, or Zoho automatically." },
    { icon: "Webhook", title: "REST API", description: "Send rich cards, carousels, and OTPs programmatically from your own systems." },
    { icon: "GitBranch", title: "Webhooks", description: "Fire real-time events to any endpoint the moment a message is delivered or read." },
    { icon: "Repeat", title: "Zapier", description: "Trigger RCS sends from thousands of connected apps without writing code." },
    { icon: "ShoppingBag", title: "E-commerce Platforms", description: "Push order and shipping updates as rich cards straight from Shopify, WooCommerce, or your store." },
    { icon: "Mail", title: "Marketing Automation", description: "Add RCS as a channel inside your existing lifecycle and campaign automation flows." },
    { icon: "BarChart3", title: "Analytics Tools", description: "Export delivery, read, and CTR data to your BI dashboards for deeper reporting." },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know before adding RCS Business Messaging to your channel mix.",
  items: [
    {
      question: "What is RCS Business Messaging?",
      answer:
        "RCS (Rich Communication Services) is Google's official upgrade to SMS. It lets businesses send branded, interactive messages — rich cards, carousels, and buttons — natively inside the Android Messages app, with no separate app install required.",
    },
    {
      question: "What happens if a recipient's device doesn't support RCS?",
      answer:
        "The message automatically falls back to standard SMS, so every recipient still receives it — you never have to choose between rich formatting and reliable delivery.",
    },
    {
      question: "How is RCS different from SMS?",
      answer:
        "RCS supports rich cards, swipeable carousels, quick-reply buttons, read receipts, typing indicators, and a verified sender badge with your brand logo — none of which plain SMS can display.",
    },
    {
      question: "What is the verified sender badge?",
      answer:
        "It's a Google-verified badge showing your brand name and logo on every message, confirming to recipients that the sender is genuine and blocking spoofed or impersonated senders.",
    },
    {
      question: "Can RCS be used for OTPs and authentication?",
      answer:
        "Yes. OTPs and authentication codes can be delivered through RCS with a verified sender identity, making them harder to spoof than a standard SMS OTP.",
    },
    {
      question: "Does RCS require the recipient to install an app?",
      answer:
        "No. RCS messages open natively inside the Android Messages app that comes pre-installed on Android devices, so there's nothing for the recipient to download or approve.",
    },
    {
      question: "How much better is engagement compared to SMS?",
      answer:
        "Rich cards, images, and interactive buttons typically drive several times higher click-through rates than plain-text SMS, though results vary by industry and message type.",
    },
    {
      question: "How long does it take to get set up?",
      answer:
        "Sender verification and template approval are handled as part of onboarding, and most businesses are sending RCS campaigns within a few days.",
    },
  ],
};

export const ctaContent: {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  heading: "Ready to Upgrade From SMS to RCS?",
  description:
    "Give customers a branded, interactive messaging experience with a Google-verified sender badge and automatic SMS fallback — so every message lands, rich or plain.",
  primaryCta: { label: "Book a Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
