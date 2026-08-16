import type { OverviewPoint } from "@/components/product/OverviewSection";
import type { FeatureCard } from "@/components/product/FeatureGrid";
import type { Step } from "@/components/product/HowItWorks";
import type { IconGridItem } from "@/components/product/IconGrid";
import type { StatItem } from "@/components/product/StatStrip";

export const hero = {
  badge: "Official WhatsApp AI Solution",
  title: "WhatsApp AI Chatbot",
  description:
    "Automate every customer conversation on WhatsApp with a WALOOP AI chatbot that answers questions instantly, captures and qualifies leads, books appointments, and delivers round-the-clock support — no agent required.",
  bullets: ["Official Meta Partner", "99.99% Uptime Guarantee", "20+ Indian Languages"],
  primaryCta: { label: "Book Demo", href: "#demo" },
  secondaryCta: { label: "Try Live Demo", href: "/#contact" },
};

export const overview = {
  eyebrow: "Smart Business Automation",
  heading: "What is a WhatsApp AI Chatbot?",
  description:
    "A WALOOP WhatsApp AI Chatbot is an intelligent virtual assistant built on generative AI and retrieval-augmented generation (RAG) that runs natively inside Meta's official WhatsApp Business API — so every reply feels like a genuine conversation, not a scripted bot.",
  points: [
    {
      icon: "Bot",
      title: "AI-Powered Assistant",
      description: "Understands natural language and tracks multi-turn intent, so customers can ask follow-up questions naturally instead of picking from rigid menus.",
    },
    {
      icon: "Zap",
      title: "Instant Replies",
      description: "Responds in well under a second with up to 99.9% accuracy, drawing answers from your business knowledge base in real time.",
    },
    {
      icon: "Clock",
      title: "24/7 Availability",
      description: "Keeps every WhatsApp thread active around the clock, across time zones and holidays, so no customer message ever waits.",
    },
    {
      icon: "TrendingUp",
      title: "Lead & Sales Engine",
      description: "Qualifies inbound leads, books appointments automatically, and nudges conversations toward checkout to grow WhatsApp-driven revenue.",
    },
  ] satisfies OverviewPoint[],
};

export const features: FeatureCard[] = [
  {
    icon: "Zap",
    title: "Instant WhatsApp Replies",
    description: "Every incoming message gets an accurate, sub-second response so customers never sit in a queue.",
    tags: ["Sub-Second", "24-7", "Auto-Reply"],
  },
  {
    icon: "Bot",
    title: "AI-Powered Conversations",
    description: "Large-language-model reasoning keeps replies contextual and human-like across long conversations.",
    tags: ["LLM", "Contextual", "Human-Like"],
  },
  {
    icon: "MessageCircle",
    title: "FAQ Automation",
    description: "Common questions are answered instantly from your knowledge base, clearing support backlogs.",
    tags: ["Instant FAQ", "Zero Queue", "99% Accuracy"],
  },
  {
    icon: "Users",
    title: "Lead Qualification",
    description: "The bot scores intent, captures contact details, and routes hot leads straight into your CRM.",
    tags: ["Lead Score", "Data Capture", "CRM Sync"],
  },
  {
    icon: "Calendar",
    title: "Appointment Booking",
    description: "Customers pick and confirm a slot inside the chat, synced with your calendar and reminders.",
    tags: ["Calendar Sync", "Reminders", "Auto-Book"],
  },
  {
    icon: "ShoppingCart",
    title: "Order Status Updates",
    description: "Real-time order and shipment tracking answers 'where is my order' questions without an agent.",
    tags: ["WISMO", "Tracking", "Real-Time"],
  },
  {
    icon: "Sparkles",
    title: "Product Recommendations",
    description: "The AI suggests relevant products from your catalog to drive upsells and cross-sells.",
    tags: ["Upsell", "Catalog", "Recommendations"],
  },
  {
    icon: "Globe",
    title: "Multi-language Support",
    description: "Auto-detects the customer's language and replies fluently in 20+ regional languages.",
    tags: ["20+ Languages", "Auto-Detect", "Regional"],
  },
  {
    icon: "Headphones",
    title: "Human Chat Handoff",
    description: "Complex conversations are handed off warmly to a live agent through a shared team inbox.",
    tags: ["Live Agent", "Shared Inbox", "Warm Transfer"],
  },
  {
    icon: "Webhook",
    title: "CRM Integration",
    description: "Conversations, leads, and bookings sync automatically with the CRM your sales team already uses.",
    tags: ["HubSpot", "Salesforce", "Zoho Sync"],
  },
  {
    icon: "FileText",
    title: "AI Knowledge Base",
    description: "A RAG engine indexes your docs, URLs, and catalogs so answers stay grounded and accurate.",
    tags: ["RAG Engine", "Custom Docs", "Vectors"],
  },
  {
    icon: "BarChart3",
    title: "Analytics Dashboard",
    description: "Track conversation volume, CSAT, and conversions live from a single reporting dashboard.",
    tags: ["Real-Time", "CSAT", "Insights"],
  },
  {
    icon: "Workflow",
    title: "Broadcast & Campaign Support",
    description: "Send Meta-approved template broadcasts and recover abandoned carts directly on WhatsApp.",
    tags: ["Broadcasts", "Cart Recovery", "Meta Approved"],
  },
  {
    icon: "ShieldCheck",
    title: "Conversation History",
    description: "Every chat is logged and exportable, giving you a full, audit-ready conversation trail.",
    tags: ["Audit Logs", "History", "Exportable"],
  },
];

export const howItWorks: Step[] = [
  {
    step: "01",
    title: "Connect WhatsApp Account",
    description: "Link your official Meta WhatsApp Business API number to the WALOOP dashboard in a few clicks.",
  },
  {
    step: "02",
    title: "Train the AI",
    description: "Feed your website URL, FAQs, product catalog, and PDFs into the RAG engine so the bot learns your business.",
  },
  {
    step: "03",
    title: "Customize Workflows",
    description: "Set the assistant's persona, lead-scoring rules, handoff triggers, and brand tone of voice.",
  },
  {
    step: "04",
    title: "Deploy & Automate",
    description: "Go live and let the bot handle queries, leads, and bookings automatically, 24 hours a day.",
  },
  {
    step: "05",
    title: "Monitor & Optimize",
    description: "Track engagement, conversions, and CSAT in real time, and keep refining the bot's responses.",
  },
];

export const industries: IconGridItem[] = [
  { icon: "Headphones", title: "Customer Support", description: "Resolve routine queries instantly and free agents for complex issues." },
  { icon: "TrendingUp", title: "Sales Automation", description: "Guide prospects from first message to purchase without manual follow-up." },
  { icon: "Users", title: "Lead Generation", description: "Capture and qualify inbound leads the moment they start chatting." },
  { icon: "Calendar", title: "Appointment Booking", description: "Let customers self-schedule consultations, demos, and service visits." },
  { icon: "ShoppingCart", title: "E-commerce", description: "Handle order tracking, returns, and product discovery on WhatsApp." },
  { icon: "Stethoscope", title: "Healthcare", description: "Automate appointment reminders, prescription queries, and patient intake." },
  { icon: "GraduationCap", title: "Education", description: "Answer admissions questions and guide students through enrollment." },
  { icon: "Building2", title: "Real Estate", description: "Qualify buyers, share listings, and schedule site visits automatically." },
  { icon: "Sparkles", title: "Restaurants", description: "Take reservations, share menus, and manage table bookings via chat." },
  { icon: "Hotel", title: "Hotels", description: "Handle booking queries, check-in details, and guest requests instantly." },
  { icon: "Plane", title: "Travel", description: "Assist with itinerary questions, bookings, and travel updates in real time." },
  { icon: "Landmark", title: "Insurance", description: "Guide customers through policy queries, renewals, and claims status." },
];

export const benefits: IconGridItem[] = [
  { icon: "Clock", title: "24/7 WhatsApp Support", description: "Customers get help any time of day, without adding night-shift staff." },
  { icon: "Zap", title: "Instant Responses", description: "Sub-second replies keep customers engaged instead of switching to a competitor." },
  { icon: "MessageCircle", title: "Never Miss Messages", description: "Every inbound chat is answered automatically, even during traffic spikes." },
  { icon: "TrendingUp", title: "Higher Lead Conversion", description: "Businesses see up to 3x more leads converted with instant, guided replies." },
  { icon: "BarChart3", title: "Lower Support Costs", description: "Deflect up to 85% of repetitive queries away from your human support team." },
  { icon: "Bot", title: "Human-like Conversations", description: "Natural, contextual replies keep the experience warm, not robotic." },
  { icon: "Sparkles", title: "Faster Customer Engagement", description: "WhatsApp's 98%+ open rates mean messages get seen and acted on quickly." },
  { icon: "Workflow", title: "Business Automation", description: "Connect the chatbot to your existing workflows and cut manual busywork." },
  { icon: "Globe", title: "Multi-language Support", description: "Serve a diverse customer base in their preferred regional language." },
  { icon: "CheckCircle2", title: "Easy Scalability", description: "Handle ten conversations or ten thousand without adding headcount." },
];

export const integrations: IconGridItem[] = [
  { icon: "MessageCircle", title: "WhatsApp Business API", description: "Built natively on Meta's official WhatsApp Business Platform." },
  { icon: "Users", title: "CRM", description: "Sync leads and conversations with HubSpot, Salesforce, Zoho, and more." },
  { icon: "Globe", title: "Website", description: "Embed a click-to-chat widget that opens straight into WhatsApp." },
  { icon: "Calendar", title: "Google Calendar", description: "Push confirmed bookings directly into your team's shared calendar." },
  { icon: "ShoppingCart", title: "Payment Gateway", description: "Accept payments in-chat via Razorpay, PayU, Stripe, and UPI." },
  { icon: "Webhook", title: "API", description: "Trigger custom actions and pull data from your own systems in real time." },
  { icon: "Workflow", title: "Webhooks", description: "Fire events into any downstream tool the moment a conversation happens." },
  { icon: "Zap", title: "Zapier", description: "Connect the chatbot to thousands of apps without writing code." },
  { icon: "Bot", title: "Slack", description: "Get instant handoff and lead alerts inside your team's Slack channels." },
];

export const analyticsStats: StatItem[] = [
  { label: "Total Conversations", value: "128,450" },
  { label: "Messages Sent", value: "942,100" },
  { label: "Leads Generated", value: "14,820" },
  { label: "Avg Response Time", value: "<0.8s" },
  { label: "CSAT Score", value: "4.9/5.0" },
  { label: "Bot Containment Rate", value: "88.4%" },
];

export const analyticsBars: number[] = [4500, 6000, 5500, 8000, 9500, 7000, 8800, 10000, 8500, 9200, 11000, 12000];

export const analyticsBreakdown = [
  { label: "Product Inquiries", percent: 48 },
  { label: "Demo / Appointment Booking", percent: 32 },
  { label: "Support & Order Tracking", percent: 20 },
];

export const faqs = [
  {
    question: "What is a WhatsApp AI Chatbot?",
    answer:
      "It's an AI-powered virtual assistant that runs inside your official WhatsApp Business number, answering customer questions, capturing leads, and booking appointments automatically.",
  },
  {
    question: "How does it work?",
    answer:
      "WALOOP connects to your WhatsApp Business API number and trains a generative AI model on your website, FAQs, and documents so it can hold accurate, natural conversations with customers.",
  },
  {
    question: "Does it require WhatsApp Business API?",
    answer:
      "Yes. The chatbot is built on Meta's official WhatsApp Business API, which WALOOP helps you set up and verify as an official Meta partner.",
  },
  {
    question: "Can it answer customer questions automatically?",
    answer:
      "Yes. The AI draws on your knowledge base to answer FAQs, product questions, and support queries instantly, with human handoff available for anything it can't resolve.",
  },
  {
    question: "Can it book appointments?",
    answer:
      "Yes. Customers can view available slots and confirm a booking directly inside the chat, with the appointment synced to your calendar automatically.",
  },
  {
    question: "Can it transfer chats to human agents?",
    answer:
      "Yes. Whenever a conversation needs a human touch, it's handed off warmly to your support team through a shared inbox, along with full chat context.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "The chatbot supports 20+ languages, including major Indian regional languages, and automatically detects and replies in the customer's language.",
  },
  {
    question: "Can I integrate my CRM?",
    answer:
      "Yes. WALOOP syncs conversations, leads, and bookings with CRMs like HubSpot, Salesforce, and Zoho, plus custom systems via API and webhooks.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses go live within a few days — connecting the WhatsApp number, training the AI on existing content, and customizing workflows.",
  },
];

export const closingCta = {
  heading: "Ready to Automate Your WhatsApp Customer Support?",
  description:
    "Give every customer an instant response and turn WhatsApp into a growth channel — book a free demo and see the WALOOP AI chatbot in action.",
  primaryCta: { label: "Book Free Demo", href: "/#contact" },
  secondaryCta: { label: "Contact Sales", href: "/#contact" },
};
