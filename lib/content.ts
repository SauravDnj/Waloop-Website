// Central content store for the WALOOP marketing site.
// Keeping copy here (rather than scattered in components) makes it easy to edit later.

export const siteConfig = {
  name: "WALOOP",
  tagline: "Built on Trust. Driven by AI.",
  domain: "waloop.ai",
  description:
    "Enterprise-grade communications platform powering WhatsApp Business API, RCS, Bulk SMS, IVR and AI Voice Bots for 500+ brands.",
  foundedYear: 2015,
  hq: "Gujarat, India",
  teamSize: "50+",
  email: "official.waloop@gmail.com",
  phone: "+91 87580 18050",
  whatsapp: "+91 87584 08987",
  whatsappLink: "https://wa.me/918758408987",
  rating: "4.8/5",
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  tag?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  columns: {
    heading: string;
    links: NavLink[];
  }[];
  highlight?: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const navGroups: NavGroup[] = [
  {
    label: "Products",
    href: "/products",
    columns: [
      {
        heading: "AI Products",
        links: [
          {
            label: "AI Voice Agent",
            href: "/products/ai-voice-agent",
            description: "Automate customer calls with a human-like AI voice assistant.",
          },
          {
            label: "WhatsApp AI Chatbot",
            href: "/products/whatsapp-ai-chatbot",
            description: "AI-powered conversations natively inside WhatsApp.",
          },
          {
            label: "Voice AI",
            href: "/products/voice-ai",
            description: "Speech recognition, NLU and natural voice synthesis engine.",
          },
          {
            label: "Conversational AI Platform",
            href: "/products/conversational-ai-platform",
            description: "One unified WALOOP platform for AI agents & voice.",
          },
        ],
      },
      {
        heading: "Core Channels",
        links: [
          {
            label: "WhatsApp Business API",
            href: "/products/whatsapp-business-api",
            description: "Official Meta-verified WhatsApp channel with broadcasts and Flows.",
          },
          {
            label: "RCS Business Messaging",
            href: "/products/rcs-messaging",
            description: "Interactive, rich messaging for a modern mobile customer experience.",
          },
          {
            label: "Bulk SMS Gateway",
            href: "/products/bulk-sms-gateway",
            description: "Send personalized SMS to large audiences, fast and reliably.",
          },
          {
            label: "WhatsApp Workflow Builder",
            href: "/products/whatsapp-workflow-builder",
            description: "No-code automation builder for WhatsApp journeys.",
          },
          {
            label: "Smart Voice & IVR",
            href: "/products/smart-voice-ivr",
            description: "Multi-level IVR, AI voice bots, and intelligent call routing.",
          },
          {
            label: "Missed Call Service",
            href: "/products/missed-call-service",
            description: "Zero-cost lead capture with sub-500ms CRM webhooks.",
          },
          {
            label: "Webhook Engine",
            href: "/products/webhook-engine",
            description: "Real-time event delivery with retries, HMAC security, and replay.",
          },
        ],
      },
    ],
    highlight: {
      badge: "New Feature",
      title: "GenAI Assistant 2.0",
      description: "50% faster responses with enhanced context retention for enterprise support.",
      cta: "Explore capabilities",
      href: "/#ai-suite",
    },
  },
  {
    label: "Integrations",
    href: "/integrations",
    columns: [
      {
        heading: "CRM & Sales",
        links: [
          { label: "Zoho CRM", href: "/integrations", description: "Seamless CRM synchronization." },
          { label: "HubSpot", href: "/integrations", description: "Two-way CRM sync and marketing automation." },
          { label: "Salesforce", href: "/integrations", description: "Enterprise CRM and support integration." },
        ],
      },
      {
        heading: "Growth & Engagement",
        links: [
          { label: "MoEngage", href: "/integrations", description: "Marketing automation & analytics." },
          { label: "WebEngage", href: "/integrations", description: "User engagement platform." },
          { label: "CleverTap", href: "/integrations", description: "Customer retention platform." },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/#about",
    columns: [
      {
        heading: "Our Company",
        links: [
          { label: "About Us", href: "/about", description: "Our mission, values, and journey since 2015." },
          { label: "Careers", href: "/careers", description: "Join our team of communication and AI experts." },
          { label: "Contact Us", href: "/contact", description: "Reach our enterprise support and sales team." },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "FAQ", href: "/#faq", description: "Fast answers about DLT, portals, and setup." },
          { label: "Blog", href: "/blog", description: "Latest insights, product updates, and articles." },
        ],
      },
    ],
  },
];

export type SimpleNavLink = { label: string; href: string };

export const simpleNavLinks: SimpleNavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Plugin", href: "/#integrations" },
  { label: "Compliance", href: "/#faq" },
];

export const productNavLinks = [
  { label: "AI Voice Agent", href: "/products/ai-voice-agent" },
  { label: "WhatsApp AI Chatbot", href: "/products/whatsapp-ai-chatbot" },
  { label: "Voice AI", href: "/products/voice-ai" },
  { label: "Conversational AI Platform", href: "/products/conversational-ai-platform" },
  { label: "WhatsApp Workflow Builder", href: "/products/whatsapp-workflow-builder" },
];

export const aiSuite = [
  {
    title: "AI Agent",
    tag: "BUILD · DEPLOY",
    description:
      "Build and deploy autonomous agents that handle support, sales, and follow-ups across every channel — no code required.",
    icon: "Bot",
  },
  {
    title: "AI Chatbot",
    tag: "CONVERSE · ENGAGE",
    description:
      "Converse naturally on WhatsApp, RCS and web chat — with context carried across the whole conversation, not just one turn.",
    icon: "MessageCircle",
  },
  {
    title: "Knowledge Base",
    tag: "DOCS · TRAIN",
    description:
      "Feed your docs, tickets and product data into a RAG-powered base so every AI answer is grounded in your own content.",
    icon: "BookOpen",
  },
  {
    title: "Voice AI",
    tag: "SPEECH · TTS · STT",
    description:
      "Natural text-to-speech and speech-to-text built for call flows — deploy voice bots that sound like a real agent.",
    icon: "AudioLines",
  },
  {
    title: "Prompt Studio",
    tag: "DESIGN · TEST",
    description:
      "Design, version, and A/B test prompts visually — then push updates to live agents without a redeploy.",
    icon: "Wand2",
  },
  {
    title: "AI Workflow",
    tag: "AUTOMATE · ORCHESTRATE",
    description:
      "Orchestrate multi-step automations that hand off between AI and human agents the moment a conversation needs one.",
    icon: "Workflow",
  },
];

export const businessSolutions = [
  {
    title: "Bulk Messaging",
    description: "Send personalized broadcasts to your entire customer base in a single campaign.",
    icon: "Send",
  },
  {
    title: "Order Updates",
    description: "Automated order and delivery status notifications, from checkout to doorstep.",
    icon: "PackageCheck",
  },
  {
    title: "Customer Support",
    description: "Resolve queries seamlessly through one unified conversation inbox.",
    icon: "Headset",
  },
  {
    title: "Smart Chatbots",
    description: "AI-powered bots that handle repetitive customer interactions automatically.",
    icon: "Bot",
  },
  {
    title: "Notifications",
    description: "Instant alerts, reminders and confirmations delivered the moment they matter.",
    icon: "BellRing",
  },
  {
    title: "Payment Collection",
    description: "Streamlined payment reminders and in-chat collection links.",
    icon: "Wallet",
  },
  {
    title: "External Integration",
    description: "Connect WALOOP with your existing CRM, ERP and business systems.",
    icon: "Plug",
  },
  {
    title: "Team Collaboration",
    description: "Multi-agent support with role-based access and shared visibility.",
    icon: "Users",
  },
];

export const products = [
  {
    eyebrow: "WhatsApp API Service Provider",
    title: "WhatsApp Business API",
    description: "Official Meta-partnered API for WhatsApp bulk broadcasting, chatbots & marketing.",
    tags: ["WhatsApp API", "WhatsApp Marketing", "Chatbot"],
    icon: "MessageSquare",
  },
  {
    eyebrow: "RCS Service Provider",
    title: "RCS Business Messaging",
    description: "Branded messages with rich media, interactive buttons, and verified sender IDs.",
    tags: ["Branded SMS", "Verified Sender", "Interactive"],
    icon: "Sparkles",
  },
  {
    eyebrow: "Best SMS Provider in India",
    title: "Bulk SMS Gateway",
    description: "Fastest bulk SMS provider for instant OTP delivery & marketing across India.",
    tags: ["Bulk SMS India", "DLT API", "India Coverage"],
    icon: "Send",
  },
  {
    eyebrow: "Voice Chatbot Automation",
    title: "AI Voice Bot",
    description: "Multilingual AI voice bot for automated lead qualification and support calls.",
    tags: ["Voice Chatbot", "AI Voice Bot", "Lead Gen"],
    icon: "Phone",
  },
  {
    eyebrow: "IVR Services in India",
    title: "Cloud IVR System",
    description: "Automated IVR virtual number with smart call routing & CRM integration.",
    tags: ["IVR Number", "Call Routing", "Smart IVR"],
    icon: "PhoneCall",
  },
  {
    eyebrow: "Missed Call Alert Service",
    title: "Missed Call Service",
    description: "Zero-cost lead capture with instant missed call alerts and caller verification.",
    tags: ["Missed Alert", "Verification", "Automated"],
    icon: "PhoneMissed",
  },
  {
    eyebrow: "Communications API Provider India",
    title: "Webhook Engine",
    description: "Connect any platform with secure WALOOP webhooks and instant JSON sync.",
    tags: ["WALOOP Platform", "Secure", "Instant Sync"],
    icon: "Webhook",
  },
  {
    eyebrow: "WALOOP Analytics",
    title: "Communication Analytics",
    description: "Unified dashboard for live channel reports & marketing performance tracking.",
    tags: ["Live Reports", "Marketing ROI", "CDR Logs"],
    icon: "BarChart3",
  },
  {
    eyebrow: "WALOOP Marketing Platform",
    title: "WALOOP Campaigner",
    description: "Scale broadcasts across WhatsApp, RCS, SMS & Voice from one workflow.",
    tags: ["WALOOP Channels", "Automation", "Broadcast"],
    icon: "Radio",
  },
];

export const aiMetrics = [
  { label: "Intent Recognition Accuracy", value: "98.9%" },
  { label: "Real-time Response Latency", value: "<500ms" },
  { label: "Global Language Support", value: "100+" },
];

export const aiFeatures = [
  {
    title: "Generative AI Conversations",
    description: "Build LLM-powered bots with hyper-personalization and deep context awareness.",
  },
  {
    title: "RAG-Powered Knowledge Base",
    description: "Fetch instant, accurate answers from your enterprise documents and PDF data.",
  },
  {
    title: "WALOOP AI Deployment",
    description: "Deploy smart bots seamlessly across WhatsApp API, RCS messaging, and Web Chat.",
  },
];

export const integrations = [
  {
    name: "MoEngage",
    category: "Marketing & Engagement",
    icon: "Megaphone",
    description: "Native triggers and APIs for campaigns, journeys, and real-time automation across channels.",
  },
  {
    name: "WebEngage",
    category: "Marketing & Engagement",
    icon: "Target",
    description: "Unified message orchestration and personalization powered by smart automation workflows.",
  },
  {
    name: "CleverTap",
    category: "Marketing & Engagement",
    icon: "BellRing",
    description: "Engagement workflows and analytics integrated with WhatsApp, RCS, SMS, and Voice channels.",
  },
  {
    name: "Zoho",
    category: "CRM & Sales",
    icon: "Building2",
    description: "CRM integration for synchronized sales, support, and customer communication.",
  },
  {
    name: "HubSpot",
    category: "CRM & Sales",
    icon: "Magnet",
    description: "Two-way CRM sync for lead capture, deal updates, and marketing automation.",
  },
  {
    name: "Salesforce",
    category: "CRM & Sales",
    icon: "Cloud",
    description: "Enterprise CRM integration for unified customer records and support tickets.",
  },
  {
    name: "Freshdesk",
    category: "CRM & Sales",
    icon: "LifeBuoy",
    description: "Route conversations into your helpdesk with full context and message history.",
  },
  {
    name: "Shopify",
    category: "Commerce & Payments",
    icon: "ShoppingBag",
    description: "Sync orders, customers, and abandoned carts directly into WhatsApp and SMS flows.",
  },
  {
    name: "Razorpay",
    category: "Commerce & Payments",
    icon: "CreditCard",
    description: "Collect payments in-chat with real-time confirmation and instant receipts.",
  },
  {
    name: "Zapier",
    category: "Automation",
    icon: "Zap",
    description: "Connect WALOOP to 5,000+ apps and workflows without writing a line of code.",
  },
];

export const deploySteps = [
  {
    step: "STEP 01",
    title: "Developer-Friendly API",
    description:
      "Scalable REST APIs with production-ready SDKs for Node.js, Python, PHP & Java. Seamless Postman integration for fast testing.",
    tags: ["REST API", "Web SDKs", "Postman Docs"],
  },
  {
    step: "STEP 02",
    title: "Automate Workflows",
    description:
      "Design complex IVR flows, real-time webhook endpoints, and WhatsApp templates using our no-code drag-and-drop builder.",
    tags: ["No-Code IVR", "Real-Time Webhooks", "CRM Sync"],
  },
  {
    step: "STEP 03",
    title: "Scale & Monitor Live",
    description:
      "Go live instantly with high-throughput gateways. Monitor every message, call, and campaign through a unified WALOOP dashboard.",
    tags: ["Live Tracking", "WALOOP CDR", "98.9% Uptime"],
  },
];

export const industries = [
  {
    tab: "Education",
    icon: "GraduationCap",
    title: "EdTech & Smart Coaching",
    category: "Education",
    count: "120+ Institutions",
    description:
      "Automate admissions, fee reminders, and doubt-resolution on WhatsApp so counsellors spend time on enrolments, not repetitive replies.",
    points: ["Automated admission & fee reminders", "WhatsApp doubt-resolution bots", "Parent-teacher broadcast updates"],
  },
  {
    tab: "BFSI & Fintech",
    icon: "Landmark",
    title: "Secure Banking Solutions",
    category: "BFSI & Fintech",
    count: "80+ BFSI Clients",
    description:
      "Deliver RBI-compliant alerts, KYC nudges, and secure two-way support without ever leaving your customer's most-used app.",
    points: ["Encrypted transaction alerts", "Automated KYC & document collection", "Fraud-alert escalation to voice IVR"],
  },
  {
    tab: "Healthcare",
    icon: "HeartPulse",
    title: "Hospitals & Telemedicine",
    category: "Healthcare",
    count: "60+ Healthcare Units",
    description:
      "Reduce no-shows and staff load with automated appointment reminders, report delivery, and telemedicine check-ins.",
    points: ["Appointment & prescription reminders", "Secure report delivery via WhatsApp", "AI Voice Agent for after-hours triage"],
  },
  {
    tab: "E-Commerce",
    icon: "ShoppingBag",
    title: "Retail, D2C & Marketplaces",
    category: "E-Commerce",
    count: "150+ D2C Brands",
    description:
      "Recover abandoned carts, answer product questions instantly, and turn order updates into a two-way sales channel.",
    points: ["Abandoned cart recovery flows", "Order & delivery status automation", "AI chatbot for product Q&A"],
  },
  {
    tab: "Logistics",
    icon: "Truck",
    title: "Delivery & Supply Chain",
    category: "Logistics",
    count: "90+ Logistics Partners",
    description:
      "Keep drivers, dispatchers, and customers in sync with real-time tracking updates and automated exception alerts.",
    points: ["Live shipment tracking updates", "Automated delay & exception alerts", "Driver coordination via bulk SMS"],
  },
  {
    tab: "Travel & Hospitality",
    icon: "Plane",
    title: "Bookings & Guest Comms",
    category: "Travel & Hospitality",
    count: "50+ Travel Brands",
    description:
      "Confirm bookings, send itinerary updates, and handle guest requests in one thread — before, during, and after the stay.",
    points: ["Instant booking confirmations", "Itinerary & check-in reminders", "In-stay guest request handling"],
  },
];

export const trustPoints = [
  { title: "Meta Business Solution Provider", description: "Verified partner status & credentials." },
  { title: `ESTD. ${siteConfig.foundedYear} in ${siteConfig.hq}`, description: "Verified partner status & credentials." },
  { title: `${siteConfig.teamSize} Communication Experts`, description: "Verified partner status & credentials." },
  { title: "On-Premise & Cloud Deployment", description: "Verified partner status & credentials." },
];

export const stats = [
  { value: "500+", label: "Enterprise Partnerships" },
  { value: "10B+", label: "High-Volume Deliveries" },
  { value: "99.99%", label: "Uptime SLA Guarantee" },
  { value: "195+", label: "Global Connectivity" },
];

export const clientLogos = [
  { name: "PizzaHub", category: "QSR & Food Tech" },
  { name: "FirstKid", category: "E-commerce & Retail" },
  { name: "PureEarth", category: "D2C & Personal Care" },
  { name: "TrustBank", category: "BFSI & Digital Banking" },
  { name: "MediGuard", category: "HealthTech & Pharmacy" },
  { name: "Nimbly", category: "SaaS & Enterprise Tech" },
];

export const faqs = [
  {
    question: "What does WALOOP actually do?",
    answer:
      "WALOOP lets businesses embed real-time messaging, voice, and video into their own apps and workflows via APIs — without building telecom infrastructure themselves. It unifies WhatsApp, RCS, SMS, IVR, and AI voice into one connected platform.",
  },
  {
    question: "How does the WhatsApp Business API work?",
    answer:
      "As an official Meta-partnered provider, WALOOP gives you API access to send template messages, run chatbots, and manage customer conversations at scale from a single dashboard, fully compliant with Meta's commerce and messaging policies.",
  },
  {
    question: "What is DLT registration & compliance in India?",
    answer:
      "TRAI's Distributed Ledger Technology (DLT) framework requires Indian businesses to register sender IDs and message templates before sending SMS. WALOOP's DLT API and onboarding team handle registration and template approval for you.",
  },
  {
    question: "How can we reduce Cash-on-Delivery (COD) RTO rates?",
    answer:
      "WALOOP's automated WhatsApp and voice confirmation workflows verify orders before dispatch, flag high-risk COD orders, and re-engage undecided customers — reducing return-to-origin rates for e-commerce and D2C brands.",
  },
  {
    question: "Does WALOOP support on-premise deployments?",
    answer:
      "Yes. Alongside our secure cloud platform, WALOOP offers on-premise deployment of WhatsApp Business API, IVR and voice bot infrastructure for enterprises with strict data residency or compliance needs.",
  },
];

export const footerLinks = {
  coreSolutions: [
    "WhatsApp Business",
    "WhatsApp AI Chatbot",
    "AI Voice Agent",
    "RCS Messaging",
    "Bulk SMS Gateway",
    "IVR & Voice Call",
  ],
  company: ["About Us", "Careers", "Contact Us", "FAQ", "Blog", "Privacy Policy", "Terms"],
  integrations: ["MoEngage", "WebEngage", "CleverTap", "Zoho CRM", "Zapier", "All Plugins"],
  resources: ["WhatsApp API Docs", "Google Business", "TRAI (DLT)", "Meta Business Help", "RCS Standards", "Sitemap"],
};
