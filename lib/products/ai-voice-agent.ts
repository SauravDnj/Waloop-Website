import type { OverviewPoint } from "@/components/product/OverviewSection";
import type { FeatureCard } from "@/components/product/FeatureGrid";
import type { Step } from "@/components/product/HowItWorks";
import type { IconGridItem } from "@/components/product/IconGrid";
import type { StatItem } from "@/components/product/StatStrip";

type CtaLink = { label: string; href: string };

export const heroContent: {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  badge: "AI-Powered Voice Agent",
  title: "AI Voice Agent",
  description:
    "Let a human-sounding AI voice assistant handle your calls end to end — answering every ring, qualifying leads, booking appointments, and delivering round-the-clock support without adding headcount.",
  bullets: ["No coding required", "24/7 availability", "20+ languages"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "Try Live Demo", href: "/#contact" },
};

export const heroWidgetStats: StatItem[] = [
  { label: "Response Time", value: "<1s" },
  { label: "Accuracy", value: "98.9%" },
  { label: "Languages", value: "20+" },
  { label: "Uptime", value: "99.9%" },
];

export const overviewContent: {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
} = {
  eyebrow: "Understanding AI Voice",
  heading: "What is an AI Voice Agent?",
  description:
    "A WALOOP Voice Agent is an always-on virtual receptionist that picks up every call, follows natural conversation, takes the right action on the spot, and delivers a premium caller experience — no human agent required.",
  points: [
    {
      icon: "Bot",
      title: "Human-like Conversations",
      description:
        "Neural text-to-speech and natural language understanding produce a warm, empathetic voice callers mistake for a real person.",
    },
    {
      icon: "Zap",
      title: "Instant Responses",
      description: "Calls are answered and understood in under a second — no hold music, no IVR menus to navigate.",
    },
    {
      icon: "Clock",
      title: "24/7 Availability",
      description: "Nights, weekends, and holidays are covered automatically, so a lead is never lost to a closed office.",
    },
    {
      icon: "PhoneCall",
      title: "No Missed Calls",
      description: "The agent handles unlimited simultaneous calls, so busy signals and voicemail become a thing of the past.",
    },
    {
      icon: "TrendingUp",
      title: "Cost Savings",
      description: "Automating routine call volume can cut call-center operating costs by up to 60%.",
    },
    {
      icon: "Sparkles",
      title: "Better Experience",
      description: "Zero wait times and consistent, on-brand answers keep customers happier on every call.",
    },
    {
      icon: "Workflow",
      title: "Business Automation",
      description: "Every call flows straight into your stack — the agent answers, updates the CRM, and triggers follow-up.",
    },
    {
      icon: "ShieldCheck",
      title: "Ready to Deploy",
      description: "Built on enterprise-grade infrastructure and configured to go live for your business in days, not months.",
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
  heading: "Everything your voice channel needs",
  description: "A complete toolkit for handling inbound and outbound calls, capturing leads, and keeping every conversation on record.",
  items: [
    {
      icon: "PhoneCall",
      title: "Inbound Call Handling",
      description: "Every incoming call is answered instantly and routed based on intent — no queue, no wait.",
      tags: ["Auto-Answer", "24/7", "Zero Wait"],
    },
    {
      icon: "Headset",
      title: "Outbound Calling",
      description: "Run automated outreach, reminder, and follow-up campaigns that sound natural and scale on demand.",
      tags: ["Campaigns", "Follow-ups", "Scale"],
    },
    {
      icon: "Calendar",
      title: "Appointment Booking",
      description: "The agent checks live availability, books the slot, and sends confirmations without a scheduler on the line.",
      tags: ["Calendar Sync", "Reminders", "Smart"],
    },
    {
      icon: "Users",
      title: "Lead Qualification",
      description: "Callers are scored on intent and budget in real time, with qualified leads pushed straight to your CRM.",
      tags: ["Scoring", "CRM Push", "Real-Time"],
    },
    {
      icon: "Bot",
      title: "Customer Support Automation",
      description: "Common questions, order tracking, and refund requests are resolved automatically, day or night.",
      tags: ["FAQ Bot", "Order Track", "Refunds"],
    },
    {
      icon: "Workflow",
      title: "Human Call Transfer",
      description: "Complex calls are warm-transferred to a live agent with full context and sentiment already attached.",
      tags: ["Warm Transfer", "Context", "Sentiment"],
    },
    {
      icon: "Globe",
      title: "Multi-Language Support",
      description: "Converse naturally in Hindi, English, and 20+ other languages without switching setups.",
      tags: ["Hindi", "English", "20+ Languages"],
    },
    {
      icon: "Mic",
      title: "Call Recording",
      description: "Every call is captured automatically for compliance review, quality checks, and coaching.",
      tags: ["Compliance", "QA", "Training"],
    },
    {
      icon: "FileText",
      title: "Conversation Transcripts",
      description: "Full, searchable transcripts with sentiment tags are generated for every call and ready to export.",
      tags: ["Searchable", "Sentiment", "Export"],
    },
    {
      icon: "Webhook",
      title: "CRM Integration",
      description: "Sync call outcomes and contact data directly with HubSpot, Salesforce, or any system via webhooks.",
      tags: ["HubSpot", "Salesforce", "Webhooks"],
    },
    {
      icon: "Sparkles",
      title: "AI Knowledge Base",
      description: "Train the agent on your own documents and policies with retrieval-augmented answers, no scripting needed.",
      tags: ["RAG", "Custom Training", "Docs"],
    },
    {
      icon: "BarChart3",
      title: "Analytics Dashboard",
      description: "Track call volume, satisfaction, and outcomes in real time with reports ready for every stakeholder.",
      tags: ["Real-Time", "CSAT", "Reports"],
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
  heading: "From ring to resolution in five steps",
  description: "A single call moves through the agent's pipeline in seconds, from pickup to logged outcome.",
  steps: [
    {
      step: "01",
      title: "Customer Calls",
      description: "A caller dials your business number, just as they always have.",
    },
    {
      step: "02",
      title: "AI Answers Instantly",
      description: "The agent picks up in under a second — no hold music, no waiting in a queue.",
    },
    {
      step: "03",
      title: "Understands Intent",
      description: "Natural language processing interprets what the caller wants, in their own words.",
    },
    {
      step: "04",
      title: "Takes Action",
      description: "The agent answers questions, qualifies the lead, books the appointment, or processes the request.",
    },
    {
      step: "05",
      title: "Transfers if Needed",
      description: "Anything outside its scope is warm-transferred to a human teammate, complete with call context.",
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
  heading: "Built for every call-heavy business",
  description: "WALOOP Voice Agent adapts its script and workflow to the way each industry actually operates.",
  items: [
    {
      icon: "HeartPulse",
      title: "Healthcare",
      description: "Triage common questions and route urgent calls while booking routine visits automatically.",
    },
    {
      icon: "Stethoscope",
      title: "Medical Clinics",
      description: "Schedule appointments, send reminders, and cut down on no-shows without front-desk overload.",
    },
    {
      icon: "Hospital",
      title: "Hospitals",
      description: "Handle high call volumes for departments, visiting hours, and follow-up scheduling around the clock.",
    },
    {
      icon: "Building2",
      title: "Real Estate",
      description: "Qualify buyer and renter inquiries instantly and book property viewings without missing a lead.",
    },
    {
      icon: "UtensilsCrossed",
      title: "Restaurants",
      description: "Take reservations and answer menu or hours questions even during the dinner rush.",
    },
    {
      icon: "Hotel",
      title: "Hotels",
      description: "Manage booking requests, room queries, and guest support without extending front-desk hours.",
    },
    {
      icon: "GraduationCap",
      title: "Coaching Institutes",
      description: "Field admissions questions and schedule counseling calls for prospective students automatically.",
    },
    {
      icon: "School",
      title: "Education",
      description: "Answer parent and student queries and route urgent matters to staff during term time.",
    },
    {
      icon: "ShieldCheck",
      title: "Insurance",
      description: "Pre-qualify policy inquiries and schedule agent callbacks without long hold times.",
    },
    {
      icon: "Truck",
      title: "Logistics",
      description: "Provide shipment status and delivery updates to callers without tying up dispatch staff.",
    },
    {
      icon: "ShoppingCart",
      title: "E-commerce",
      description: "Handle order status, returns, and product questions at any hour, including peak sale days.",
    },
    {
      icon: "Headset",
      title: "Customer Support",
      description: "Resolve first-line support tickets by phone and escalate only what truly needs a human touch.",
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
  heading: "Why teams switch to a voice agent",
  items: [
    { icon: "Clock", title: "24/7 Availability", description: "Calls are answered around the clock, including nights, weekends, and holidays." },
    { icon: "PhoneCall", title: "Never Miss Calls", description: "Unlimited concurrent call handling means no caller ever hits a busy signal." },
    { icon: "Zap", title: "Faster Customer Support", description: "Instant pickup and instant answers replace hold queues and callback promises." },
    { icon: "TrendingUp", title: "Reduce Operational Costs", description: "Automating routine calls lowers staffing and call-center overhead." },
    { icon: "Bot", title: "Human-like Conversations", description: "Natural, empathetic voice interactions keep callers comfortable and engaged." },
    { icon: "BarChart3", title: "Higher Lead Conversion", description: "Instant qualification and follow-up can drive up to 3x higher conversion." },
    { icon: "Sparkles", title: "Improved Satisfaction", description: "Zero wait times and consistent answers raise CSAT across every call." },
    { icon: "Workflow", title: "Easily Scalable", description: "Handle a sudden spike in call volume without hiring or training a single agent." },
    { icon: "Users", title: "Saves Staff Time", description: "Your team is freed from repetitive calls to focus on higher-value work." },
    { icon: "CheckCircle2", title: "Business Automation", description: "Every call outcome flows straight into your CRM and downstream workflows." },
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
    { icon: "MessageCircle", title: "WhatsApp", description: "Send booking confirmations and follow-ups over WhatsApp after the call ends." },
    { icon: "CalendarClock", title: "Google Calendar", description: "Check live availability and place confirmed bookings directly on the calendar." },
    { icon: "Users", title: "CRM", description: "Push call outcomes, lead scores, and contact updates into HubSpot, Salesforce, or Zoho." },
    { icon: "Webhook", title: "REST API", description: "Trigger the agent or pull call data programmatically from your own systems." },
    { icon: "GitBranch", title: "Webhooks", description: "Fire real-time events to any endpoint the moment a call completes." },
    { icon: "Repeat", title: "Zapier", description: "Connect the agent to thousands of apps without writing a line of code." },
    { icon: "Slack", title: "Slack", description: "Get instant call summaries and alerts posted straight to your team channel." },
    { icon: "Mail", title: "Email", description: "Automatically send transcripts, summaries, and follow-up emails after every call." },
  ],
};

export const faqContent: {
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
} = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know before putting WALOOP Voice Agent on your business line.",
  items: [
    {
      question: "What is an AI Voice Agent?",
      answer:
        "It's a virtual phone agent powered by AI that answers calls, understands natural speech, and carries out tasks like booking, support, and lead capture without a human on the line.",
    },
    {
      question: "How does it work?",
      answer:
        "The agent answers each call instantly, uses natural language processing to understand what the caller needs, and then takes the appropriate action — answering, qualifying, booking, or transferring.",
    },
    {
      question: "Can it transfer calls to humans?",
      answer:
        "Yes. Any call that needs a human touch is warm-transferred to your team along with a summary of the conversation and detected sentiment.",
    },
    {
      question: "Can it book appointments?",
      answer:
        "Yes, the agent checks your live calendar availability, books the slot the caller wants, and sends a confirmation and reminder automatically.",
    },
    {
      question: "Which languages are supported?",
      answer: "The agent converses naturally in Hindi, English, and 20+ other languages, so you can serve callers in their preferred language.",
    },
    {
      question: "Does it record calls?",
      answer: "Yes, every call is recorded and transcribed by default, giving you a searchable record for compliance, quality assurance, and training.",
    },
    {
      question: "Can it integrate with CRM?",
      answer: "Yes, it integrates with HubSpot, Salesforce, and other CRMs out of the box, and can push data to any system via webhooks or REST API.",
    },
    {
      question: "How long does setup take?",
      answer: "Most businesses are live within a few days — configuration is guided, and no coding is required to get started.",
    },
  ],
};

export const ctaContent: {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  heading: "Ready to Automate Your Business Calls?",
  description:
    "Put a WALOOP Voice Agent on your line to answer every call, qualify every lead, and schedule every appointment — so your business keeps growing around the clock.",
  primaryCta: { label: "Book a Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
