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
  badge: "Cloud Telephony & IVR",
  title: "Smart Voice & IVR",
  description:
    "Build multi-level IVR menus, route every call to the right destination, and give agents live caller context — all from a drag-and-drop call flow builder built for enterprise call volumes.",
  bullets: ["Drag-and-drop builder", "20+ Indian languages", "Real-time CRM sync"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "Try Live Demo", href: "/#contact" },
};

export const heroWidgetProps: ChannelHeroWidgetProps = {
  icon: "PhoneCall",
  title: "WALOOP Voice & IVR",
  status: "LIVE · ROUTING CALLS",
  stats: [
    { label: "Active Calls", value: "128" },
    { label: "Bot Resolved Rate", value: "71%" },
  ],
  feedLabel: "Live Call Activity",
  feed: [
    { title: "Caller ****4821", subtitle: "Routed to Sales queue · IVR L2", tag: "Routing" },
    { title: "Caller ****0937", subtitle: "Resolved by voice bot · Billing", tag: "Contained" },
    { title: "Caller ****6650", subtitle: "Transferred to Support agent", tag: "Live" },
  ],
};

export const overviewContent: {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
} = {
  eyebrow: "Understanding Smart Voice & IVR",
  heading: "What is Smart Voice & IVR?",
  description:
    "WALOOP Smart Voice & IVR is a cloud telephony platform that lets you design multi-level call menus, route calls intelligently, and keep every conversation synced with your business systems — with an AI voice bot handling routine calls as just one part of a much larger routing engine.",
  points: [
    {
      icon: "Workflow",
      title: "Visual Call Flow Builder",
      description:
        "Design multi-level IVR trees with a drag-and-drop canvas — no telephony scripting or vendor tickets required to change a menu.",
    },
    {
      icon: "GitBranch",
      title: "Intelligent Routing",
      description:
        "Route by DTMF keypress, spoken response, time of day, caller ID, or live CRM data so every call reaches the right queue first try.",
    },
    {
      icon: "Languages",
      title: "Multilingual Speech Recognition",
      description: "Callers speak naturally in Hindi, English, or 20+ Indian regional languages and are understood accurately.",
    },
    {
      icon: "Database",
      title: "Real-Time CRM Sync",
      description: "Caller identity, call recordings, and IVR selections sync to your CRM the moment a call connects.",
    },
    {
      icon: "Mic",
      title: "Automatic Recording & Transcription",
      description: "Every call is recorded, transcribed, and tagged with sentiment automatically for review and compliance.",
    },
    {
      icon: "Megaphone",
      title: "Outbound Campaign Dialer",
      description: "Launch bulk voice broadcasts for alerts, reminders, and promotions from the same platform that handles inbound calls.",
    },
    {
      icon: "BarChart3",
      title: "Live Analytics Dashboard",
      description: "Monitor call volumes, wait times, agent occupancy, and bot containment rate as calls happen, not after the fact.",
    },
    {
      icon: "ShieldCheck",
      title: "Enterprise-Grade Reliability",
      description: "Built on redundant carrier infrastructure so menus stay live and calls keep routing during peak volume.",
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
  heading: "Everything your call center needs to route smarter",
  description: "A complete telephony toolkit for building menus, routing calls, capturing data, and measuring performance in real time.",
  items: [
    {
      icon: "Workflow",
      title: "Drag-and-Drop IVR Builder",
      description: "Build multi-level menus visually — add prompts, branches, and routing rules without writing a line of code.",
      tags: ["No-Code", "Multi-Level", "Visual Canvas"],
    },
    {
      icon: "GitBranch",
      title: "Smart Call Routing",
      description: "Route calls by keypress, spoken intent, time of day, caller ID, or live CRM lookup to the right queue or agent.",
      tags: ["DTMF", "Speech", "CRM-Based"],
    },
    {
      icon: "Languages",
      title: "Multilingual Speech Recognition",
      description: "Recognize and respond to speech in Hindi, English, and 20+ Indian regional languages inside the same menu.",
      tags: ["Hindi", "English", "20+ Languages"],
    },
    {
      icon: "Database",
      title: "Real-Time CRM Sync",
      description: "Caller data, IVR path, and call recordings push into your CRM live, so agents see full context before they pick up.",
      tags: ["Live Sync", "Caller Context", "CRM"],
    },
    {
      icon: "Mic",
      title: "Automatic Call Recording",
      description: "Every inbound and outbound call is recorded by default and stored for compliance and quality review.",
      tags: ["Auto-Record", "Compliance", "Storage"],
    },
    {
      icon: "FileText",
      title: "AI Transcription & Sentiment",
      description: "Calls are transcribed automatically and tagged with sentiment so you can spot at-risk conversations at a glance.",
      tags: ["Transcripts", "Sentiment", "Searchable"],
    },
    {
      icon: "Megaphone",
      title: "Outbound Campaign Dialer",
      description: "Run bulk voice broadcast campaigns for reminders, alerts, and promotions with detailed delivery reporting.",
      tags: ["Bulk Dialer", "Broadcasts", "Reporting"],
    },
    {
      icon: "Bot",
      title: "AI Voice Bot Menus",
      description: "Add a conversational voice bot node to any menu level to resolve routine queries without an agent.",
      tags: ["Self-Service", "Containment", "Conversational"],
    },
    {
      icon: "Users",
      title: "Skill-Based Agent Queuing",
      description: "Queue and distribute calls to agents based on skill, language, or availability instead of simple round robin.",
      tags: ["Skills", "Availability", "Fair Distribution"],
    },
    {
      icon: "BarChart3",
      title: "Live Analytics Dashboard",
      description: "Track call volumes, wait times, agent occupancy, and bot containment rate on one real-time dashboard.",
      tags: ["Real-Time", "Occupancy", "Containment"],
    },
    {
      icon: "Clock",
      title: "Time & Holiday Routing",
      description: "Set business hours, holiday schedules, and after-hours flows so callers always reach the right menu.",
      tags: ["Business Hours", "Holidays", "After-Hours"],
    },
    {
      icon: "Webhook",
      title: "Open API & Webhooks",
      description: "Trigger call events, pull recordings, or push routing decisions programmatically into your own systems.",
      tags: ["REST API", "Webhooks", "Extensible"],
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
  heading: "From dial-in to the right destination in five steps",
  description: "Every call moves through your custom-built flow in seconds, from the first ring to a logged outcome.",
  steps: [
    {
      step: "01",
      title: "Caller Dials In",
      description: "A caller reaches your business number and enters the call flow you designed.",
    },
    {
      step: "02",
      title: "IVR Menu Plays",
      description: "The multi-level menu greets the caller in their preferred language and presents the available options.",
    },
    {
      step: "03",
      title: "Caller Responds",
      description: "The caller selects an option by keypress or by speaking naturally, and the system captures their choice.",
    },
    {
      step: "04",
      title: "Smart Routing Decides",
      description: "The routing engine checks time of day, caller ID, and live CRM data to pick the best destination.",
    },
    {
      step: "05",
      title: "Call Connects & Logs",
      description: "The call reaches a bot, queue, or agent with full context attached, and the recording and transcript are saved.",
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
  heading: "Built for every high-call-volume business",
  description: "WALOOP Smart Voice & IVR adapts its routing rules and menu structure to how each industry actually takes calls.",
  items: [
    {
      icon: "Landmark",
      title: "Banking & Finance",
      description: "Route account, loan, and card queries securely with caller verification built into the flow.",
    },
    {
      icon: "ShieldCheck",
      title: "Insurance",
      description: "Direct claims, renewals, and policy questions to the right specialist queue automatically.",
    },
    {
      icon: "HeartPulse",
      title: "Healthcare",
      description: "Triage appointment, billing, and urgent-care calls to the correct department without delay.",
    },
    {
      icon: "ShoppingCart",
      title: "E-commerce & Retail",
      description: "Handle order status, returns, and delivery queries at scale during peak sale traffic.",
    },
    {
      icon: "Truck",
      title: "Logistics",
      description: "Route shipment tracking and delivery escalations straight to dispatch or self-service.",
    },
    {
      icon: "Building2",
      title: "Real Estate",
      description: "Send buyer, renter, and site-visit inquiries to the right regional sales desk.",
    },
    {
      icon: "GraduationCap",
      title: "Education",
      description: "Route admissions, fee, and academic queries to the correct counter during peak enrollment.",
    },
    {
      icon: "Plug",
      title: "Utilities",
      description: "Manage outage reports, billing disputes, and new-connection requests with priority routing.",
    },
    {
      icon: "Headset",
      title: "BPO & Contact Centers",
      description: "Distribute high call volumes across skill-based queues with live occupancy visibility.",
    },
    {
      icon: "Hotel",
      title: "Hospitality",
      description: "Route booking, concierge, and guest-service calls to the right desk across properties.",
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
  heading: "Why call centers switch to Smart Voice & IVR",
  items: [
    { icon: "Workflow", title: "Change Menus in Minutes", description: "Update routing rules and prompts yourself, with no vendor ticket or downtime." },
    { icon: "GitBranch", title: "Fewer Misrouted Calls", description: "Multi-signal routing gets callers to the right queue on the first attempt." },
    { icon: "Languages", title: "Serve Callers in Their Language", description: "Multilingual recognition covers Hindi, English, and 20+ regional languages." },
    { icon: "Database", title: "Agents See Full Context", description: "Real-time CRM sync means no agent starts a call blind." },
    { icon: "Mic", title: "Built-In Compliance", description: "Automatic recording and transcription keep every call audit-ready." },
    { icon: "Bot", title: "Higher Containment", description: "Voice bot menus resolve routine queries without tying up live agents." },
    { icon: "BarChart3", title: "Full Visibility", description: "Live dashboards surface wait times and occupancy before they become complaints." },
    { icon: "TrendingUp", title: "Scales With Volume", description: "Handle seasonal spikes and campaign surges without adding phone lines." },
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
    { icon: "Users", title: "CRM", description: "Sync caller data, IVR paths, and recordings with HubSpot, Salesforce, or Zoho in real time." },
    { icon: "Headset", title: "Contact Center Software", description: "Plug routing decisions straight into your existing agent desktop and queuing tools." },
    { icon: "Webhook", title: "REST API", description: "Pull call events, recordings, and transcripts programmatically from your own systems." },
    { icon: "GitBranch", title: "Webhooks", description: "Fire real-time events to any endpoint the moment a call is routed or completed." },
    { icon: "Repeat", title: "Zapier", description: "Connect call outcomes to thousands of apps without writing custom integration code." },
    { icon: "MessageCircle", title: "WhatsApp", description: "Follow up a call automatically with a WhatsApp confirmation or summary." },
    { icon: "Slack", title: "Slack", description: "Send live queue alerts and call summaries straight to your team channel." },
    { icon: "BarChart3", title: "BI Tools", description: "Export call analytics into your existing dashboards and reporting stack." },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know before building your call flows on WALOOP Smart Voice & IVR.",
  items: [
    {
      question: "What is Smart Voice & IVR?",
      answer:
        "It's a cloud telephony platform for building multi-level IVR menus and routing calls intelligently by keypress, speech, time of day, caller ID, or CRM data, with live analytics and recording built in.",
    },
    {
      question: "Do I need developers to build a call flow?",
      answer:
        "No. The drag-and-drop builder lets you design and update multi-level menus and routing rules yourself, without writing telephony scripts.",
    },
    {
      question: "Which languages does speech recognition support?",
      answer: "Callers can speak naturally in Hindi, English, and 20+ Indian regional languages, and the system understands and routes accordingly.",
    },
    {
      question: "How is this different from the AI Voice Agent product?",
      answer:
        "Smart Voice & IVR is the call infrastructure and routing layer for your whole phone line — menus, queues, and analytics — with an AI voice bot as one optional menu node. The AI Voice Agent is a dedicated conversational assistant that handles entire calls end to end, such as booking and lead qualification.",
    },
    {
      question: "Are calls recorded and transcribed automatically?",
      answer: "Yes, every call is recorded by default and transcribed with sentiment tagging, ready for compliance review and coaching.",
    },
    {
      question: "Can it run outbound campaigns as well as inbound routing?",
      answer: "Yes, the built-in campaign dialer runs bulk voice broadcasts for reminders, alerts, and promotions alongside your inbound flows.",
    },
    {
      question: "Does it sync with our CRM in real time?",
      answer: "Yes, caller data, IVR selections, and call recordings sync to your CRM as the call happens, not after it ends.",
    },
    {
      question: "How long does setup take?",
      answer: "Most teams have their first call flow live within days using the visual builder and guided configuration.",
    },
  ],
};

export const ctaContent: {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  heading: "Ready to Route Every Call Perfectly?",
  description:
    "Put WALOOP Smart Voice & IVR on your business line to build smarter menus, route every call to the right place, and see your entire call center in one live dashboard.",
  primaryCta: { label: "Book a Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
