// Platform content — the 10 WALOOP platform areas (spec §9–24, §41–45, §63, §73, §76).
// Kept short on purpose: every page focuses on one primary keyword.
// Page template: hero → "What is {keyword}?" answer → features → journey diagram → FAQ → CTA.

import type { Flow } from "@/lib/flows";

export type PlatformSlug =
  | "channels"
  | "crm"
  | "chatbots"
  | "automations"
  | "whatsapp-mini-apps"
  | "payments"
  | "dynamic-experiences"
  | "ai"
  | "analytics"
  | "workspace";

export type PlatformVisual =
  | "channels"
  | "crm"
  | "chatbot"
  | "automation"
  | "miniapp"
  | "payments"
  | "dynamic"
  | "ai"
  | "analytics"
  | "workspace";

export type Feature = { icon: string; title: string; description: string };

export type PlatformArea = {
  slug: PlatformSlug;
  name: string;
  /** Primary SEO / AEO keyword the page is built around. */
  keyword: string;
  /** Secondary keywords for metadata. */
  keywords: string[];
  /** One-line description used in menus, cards and the footer. */
  short: string;
  icon: string;
  visual: PlatformVisual;
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; description: string; bullets: string[] };
  /** The natural question this page answers, e.g. "What is a WhatsApp CRM?". */
  question: string;
  /** Direct answer to `question` — written for answer engines (§76). */
  whatIsIt: string;
  features: { heading: string; items: Feature[] };
  flow: Flow;
  useCases: string[];
  faqs: { question: string; answer: string }[];
  cta: { heading: string; description: string; label: string };
  note?: string;
};

export const platformAreas: PlatformArea[] = [
  // ───────────────────────────── Channels (§9)
  {
    slug: "channels",
    name: "Channels",
    keyword: "Multi-Channel Customer Messaging",
    keywords: ["WhatsApp Business platform", "Instagram messaging", "Facebook Messenger", "RCS messaging", "omnichannel inbox"],
    short: "WhatsApp, Instagram, Facebook and RCS in one connected environment.",
    icon: "MessagesSquare",
    visual: "channels",
    seo: {
      title: "Multi-Channel Messaging Platform | WhatsApp, Instagram, Facebook & RCS | WALOOP",
      description: "Manage WhatsApp, Instagram, Facebook and RCS customer conversations from one WALOOP workspace.",
    },
    hero: {
      eyebrow: "Platform · Channels",
      title: "One Platform. Every Conversation.",
      description: "Manage WhatsApp, Instagram, Facebook and RCS conversations from one workspace.",
      bullets: ["WhatsApp", "Instagram", "Facebook", "RCS"],
    },
    question: "What is multi-channel customer messaging?",
    whatIsIt:
      "WALOOP Channels brings supported WhatsApp, Instagram, Facebook and RCS conversations into one workspace, connected to CRM, chatbots and automation.",
    features: {
      heading: "Supported channels",
      items: [
        { icon: "MessageCircle", title: "WhatsApp", description: "Conversations, campaigns, chatbots and interactive journeys." },
        { icon: "Instagram", title: "Instagram", description: "Bring Instagram conversations into the same workflow." },
        { icon: "Facebook", title: "Facebook", description: "Manage Facebook conversations alongside other channels." },
        { icon: "MessageSquareText", title: "RCS", description: "Richer messaging experiences where supported." },
      ],
    },
    flow: {
      title: "Channel hub",
      caption: "Messages from every supported channel enter one hub, then continue into CRM, chatbots and automation.",
      steps: [
        { branches: [
          { label: "WhatsApp", steps: [] },
          { label: "Instagram", steps: [] },
          { label: "Facebook", steps: [] },
          { label: "RCS", steps: [] },
        ] },
        "WALOOP Channel Hub",
        "CRM",
        "Chatbot",
        "Automation",
      ],
    },
    useCases: ["Customer conversations", "Notifications", "Campaigns", "Support"],
    faqs: [
      {
        question: "Which channels does WALOOP support?",
        answer: "WhatsApp, Instagram, Facebook and RCS. Exact capabilities per channel depend on your configuration.",
      },
      {
        question: "Is WALOOP only for WhatsApp?",
        answer: "No. WhatsApp is a key channel, but WALOOP is a full customer engagement platform.",
      },
    ],
    cta: {
      heading: "Make Every Conversation Count",
      description: "Connect your channels to one workspace.",
      label: "Connect Your Channels",
    },
  },

  // ───────────────────────────── CRM (§10)
  {
    slug: "crm",
    name: "CRM",
    keyword: "WhatsApp CRM",
    keywords: ["conversational CRM", "WhatsApp bulk campaigns", "customer segmentation", "live chat CRM"],
    short: "Contacts, conversations, segments, campaigns and boards — built around conversations.",
    icon: "Contact",
    visual: "crm",
    seo: {
      title: "WhatsApp CRM | Conversational CRM, Contacts & Bulk Campaigns | WALOOP",
      description: "WALOOP is a conversational WhatsApp CRM for live chat, contacts, segments, boards and bulk campaigns.",
    },
    hero: {
      eyebrow: "Platform · CRM",
      title: "A CRM Built Around Conversations",
      description: "Live chat, contacts, segments and campaigns — connected to every customer conversation.",
      bullets: ["Live Chat", "Contacts & Segments", "Bulk Campaigns", "Boards"],
    },
    question: "What is a WhatsApp CRM?",
    whatIsIt:
      "WALOOP CRM is a conversational CRM that keeps every customer conversation, contact record, segment and follow-up together in one place.",
    features: {
      heading: "CRM capabilities",
      items: [
        { icon: "MessagesSquare", title: "Live Chat", description: "A shared inbox for team conversations." },
        { icon: "Contact", title: "Contacts", description: "Customer records with custom fields." },
        { icon: "KanbanSquare", title: "Boards", description: "Track sales and service in stages." },
        { icon: "Filter", title: "Segments", description: "Group customers by their data." },
        { icon: "Megaphone", title: "Bulk Campaigns", description: "Send campaigns to the right audience." },
        { icon: "Zap", title: "CRM Triggers", description: "Start actions from customer activity." },
      ],
    },
    flow: {
      title: "CRM journey",
      caption: "A message identifies the contact, updates the CRM record and segment, and drives follow-up.",
      steps: ["Customer Message", "Contact Identified", "CRM Record", "Segment", "Campaign / Sales / Support", "Follow-up"],
    },
    useCases: ["Lead management", "Sales pipelines", "Bulk campaigns", "Support history"],
    faqs: [
      {
        question: "Can I send bulk WhatsApp campaigns?",
        answer: "Yes. WALOOP CRM includes bulk campaigns to segmented audiences, subject to supported configurations.",
      },
    ],
    cta: {
      heading: "Keep Every Conversation Connected to the Customer",
      description: "Contacts, segments and campaigns in one conversational CRM.",
      label: "Explore CRM",
    },
  },

  // ───────────────────────────── Chatbots (§11–12)
  {
    slug: "chatbots",
    name: "Chatbots",
    keyword: "WhatsApp Chatbot Builder",
    keywords: ["no-code chatbot", "visual flow builder", "WhatsApp bot", "chatbot for business"],
    short: "Design multi-step conversation journeys with a visual flow builder.",
    icon: "Bot",
    visual: "chatbot",
    seo: {
      title: "WhatsApp Chatbot Builder | No-Code Visual Flow Builder | WALOOP",
      description: "Build no-code WhatsApp chatbots with WALOOP's visual flow builder — questions, buttons, conditions and human handoff.",
    },
    hero: {
      eyebrow: "Platform · Chatbots",
      title: "Build Chatbots Without Code",
      description: "Create multi-step customer conversations with a visual flow builder.",
      bullets: ["Visual Flow Builder", "Buttons & Conditions", "Bot Fields", "Human Handoff"],
    },
    question: "What is a WhatsApp chatbot builder?",
    whatIsIt:
      "The WALOOP Chatbot Builder is a no-code visual flow builder for creating WhatsApp and multi-channel chatbots with messages, questions, buttons and conditions.",
    features: {
      heading: "Core capabilities",
      items: [
        { icon: "Workflow", title: "Visual Flow Builder", description: "Design journeys as connected steps." },
        { icon: "MousePointerClick", title: "Buttons & Choices", description: "Let customers pick predefined options." },
        { icon: "GitBranch", title: "Conditions", description: "Route customers down different paths." },
        { icon: "TextCursorInput", title: "Bot Fields", description: "Capture answers as customer data." },
        { icon: "Copy", title: "Templates", description: "Reuse common conversation structures." },
        { icon: "BarChart3", title: "Analytics", description: "Review chatbot activity." },
      ],
    },
    flow: {
      title: "Example bot",
      caption: "The bot asks what the customer needs and opens the right path. A demo request captures the lead for sales.",
      steps: [
        "Welcome Message",
        "“What do you need?”",
        { branches: [
          { label: "Products", steps: ["Product Menu"] },
          { label: "Support", steps: ["Support Flow"] },
          { label: "Demo", steps: ["Lead Capture", "CRM Record", "Sales Follow-up"] },
        ] },
      ],
    },
    useCases: ["Lead qualification", "FAQs", "Customer support", "Appointment requests"],
    faqs: [
      {
        question: "Can I build a WhatsApp chatbot without coding?",
        answer: "Yes. WALOOP's visual flow builder lets business teams build chatbots without writing code.",
      },
      {
        question: "Can the chatbot hand off to a human?",
        answer: "Yes. Conditions can route a conversation to the right department and agent.",
      },
    ],
    cta: {
      heading: "Build Your First Chatbot",
      description: "Welcome, qualify and route customers with a visual builder.",
      label: "Build a Bot",
    },
  },

  // ───────────────────────────── Automations (§13)
  {
    slug: "automations",
    name: "Automations",
    keyword: "WhatsApp Automation",
    keywords: ["workflow automation", "business process automation", "no-code automation", "drag-and-drop workflow builder"],
    short: "Visual workflows that connect triggers, conditions, data and actions.",
    icon: "Workflow",
    visual: "automation",
    seo: {
      title: "WhatsApp Automation | No-Code Workflow & Business Process Automation | WALOOP",
      description: "Automate follow-ups, lead assignment and reminders with WALOOP's drag-and-drop workflow builder.",
    },
    hero: {
      eyebrow: "Platform · Automations",
      title: "Automate Workflows. Eliminate Repetitive Tasks.",
      description: "Connect triggers, conditions and actions in a drag-and-drop workflow builder.",
      bullets: ["Drag-and-Drop Builder", "Triggers & Conditions", "App Authentications", "Automation Analytics"],
    },
    question: "What is WhatsApp automation?",
    whatIsIt:
      "WALOOP Automations is a no-code workflow builder: when an event happens, it checks conditions and runs actions like messages, CRM updates and follow-ups.",
    features: {
      heading: "Core capabilities",
      items: [
        { icon: "Workflow", title: "Workflow Builder", description: "Build business workflows visually." },
        { icon: "Zap", title: "Triggers", description: "Start a workflow from a supported event." },
        { icon: "GitBranch", title: "Conditions", description: "Decide using customer or business data." },
        { icon: "Play", title: "Actions", description: "Send messages, update data, create records." },
        { icon: "KeyRound", title: "App Authentications", description: "Connect supported external apps." },
        { icon: "BarChart3", title: "Automation Analytics", description: "Review workflow activity." },
      ],
    },
    flow: {
      title: "How a workflow runs",
      caption: "An event fires a trigger; a condition decides whether to send a message and update the CRM or schedule a follow-up.",
      steps: [
        "Event",
        "Trigger",
        "Condition",
        { branches: [
          { label: "Yes", steps: ["Message", "CRM Update"] },
          { label: "No", steps: ["Follow-up"] },
        ] },
      ],
    },
    useCases: ["Lead assignment", "Reminders", "Payment follow-up", "Team notifications"],
    faqs: [
      {
        question: "What can I automate with WALOOP?",
        answer: "Repetitive tasks like lead assignment, reminders, notifications, CRM updates and payment follow-ups.",
      },
      {
        question: "Do I need to code to build automations?",
        answer: "No. Workflows are built visually with triggers, conditions and actions.",
      },
    ],
    cta: {
      heading: "Automate the Work. Personalize the Experience.",
      description: "Build connected customer workflows with WALOOP.",
      label: "Create an Automation",
    },
  },

  // ───────────────────────────── WhatsApp Mini-Apps (§14)
  {
    slug: "whatsapp-mini-apps",
    name: "WhatsApp Mini-Apps",
    keyword: "WhatsApp Flows",
    keywords: ["WhatsApp Mini-Apps", "WhatsApp forms", "interactive WhatsApp", "WhatsApp lead forms"],
    short: "Interactive WhatsApp experiences for forms, selections and structured actions.",
    icon: "Smartphone",
    visual: "miniapp",
    seo: {
      title: "WhatsApp Flows & Mini-Apps | Interactive WhatsApp Forms | WALOOP",
      description: "Build WhatsApp Flows for forms, product selection, registrations and appointment requests with WALOOP Mini-Apps.",
    },
    hero: {
      eyebrow: "Platform · WhatsApp Mini-Apps",
      title: "Turn WhatsApp Into an Interactive Experience",
      description: "Forms, selections and confirmations customers complete inside the chat.",
      bullets: ["Forms", "Selections", "Data Collection", "Confirmations"],
    },
    question: "What are WhatsApp Flows?",
    whatIsIt:
      "WALOOP WhatsApp Mini-Apps (WhatsApp Flows) are interactive screens inside WhatsApp where customers select options, fill forms and confirm details.",
    features: {
      heading: "What you can build",
      items: [
        { icon: "ShoppingBag", title: "Product selection", description: "Pick products or services from a list." },
        { icon: "ClipboardList", title: "Lead forms", description: "Collect enquiry details in a few steps." },
        { icon: "UserPlus", title: "Registration", description: "Sign customers up for events or services." },
        { icon: "CalendarCheck", title: "Appointment requests", description: "Capture preferred service and options." },
        { icon: "ListChecks", title: "Surveys", description: "Gather feedback and preferences." },
        { icon: "CreditCard", title: "Payment journeys", description: "Lead into supported payment actions." },
      ],
    },
    flow: {
      title: "Example flow",
      caption: "The customer opens the Mini-App, selects, fills in and confirms. The CRM updates and a confirmation is sent.",
      steps: ["Opens Mini-App", "Selects product/service", "Provides details", "Confirms", "CRM updated", "Confirmation"],
    },
    useCases: ["Lead forms", "Registration", "Appointment requests", "Order forms"],
    faqs: [
    ],
    cta: {
      heading: "Make WhatsApp Interactive",
      description: "Forms and selections customers complete inside the chat.",
      label: "Build a Mini-App",
    },
  },

  // ───────────────────────────── Payments (§15)
  {
    slug: "payments",
    name: "Payments",
    keyword: "WhatsApp Payments",
    keywords: ["payment links on WhatsApp", "payment gateway integration", "payment automation", "payment reminders"],
    short: "Payment orders, gateways and payment automation connected to conversations.",
    icon: "CreditCard",
    visual: "payments",
    seo: {
      title: "WhatsApp Payments | Payment Orders, Gateways & Reminders | WALOOP",
      description: "Collect payments from WhatsApp conversations with payment orders, supported gateways and automated reminders.",
    },
    hero: {
      eyebrow: "Platform · Payments",
      title: "Connect Conversations With Payments",
      description: "Go from customer conversation to payment in one connected journey.",
      bullets: ["Payment Orders", "Payment Gateways", "Payment Automations"],
    },
    question: "What are WhatsApp payments?",
    whatIsIt:
      "WALOOP Payments links a customer conversation to a payment order and a supported gateway, then automates confirmations and reminders.",
    features: {
      heading: "Payment capabilities",
      items: [
        { icon: "Receipt", title: "Payment Orders", description: "Create and manage payment orders." },
        { icon: "Landmark", title: "Payment Gateways", description: "Configure supported gateway connections." },
        { icon: "Workflow", title: "Payment Automations", description: "Trigger confirmations and reminders." },
      ],
    },
    flow: {
      title: "Payment journey",
      caption: "An order is created from the conversation. Paid orders are confirmed; pending ones get a reminder.",
      steps: [
        "Customer Conversation",
        "Order Created",
        "Payment Request",
        "Payment Status",
        { branches: [
          { label: "Paid", steps: ["Confirm", "CRM"] },
          { label: "Pending", steps: ["Reminder"] },
        ] },
      ],
    },
    useCases: ["Order payments", "Service payments", "Payment reminders"],
    faqs: [
      {
        question: "Can I collect payments on WhatsApp with WALOOP?",
        answer: "Yes. Create payment orders from conversations through a supported, configured payment gateway.",
      },
      {
        question: "Are payment gateway charges included?",
        answer: "No. Gateway charges are separate from the WALOOP subscription.",
      },
    ],
    cta: {
      heading: "Close the Loop From Conversation to Payment",
      description: "Payment orders, gateways and automation in one journey.",
      label: "Explore Payments",
    },
    note: "Available gateways depend on your configuration. Gateway charges are billed separately.",
  },

  // ───────────────────────────── Dynamic Experiences (§16)
  {
    slug: "dynamic-experiences",
    name: "Dynamic Experiences",
    keyword: "Personalized Images & PDFs",
    keywords: ["dynamic PDF generation", "personalized images", "WhatsApp personalized content", "automated quotations"],
    short: "Personalized images and PDFs generated from customer and business data.",
    icon: "FileImage",
    visual: "dynamic",
    seo: {
      title: "Personalized Images & PDFs From Your Data | Dynamic Experiences | WALOOP",
      description: "Generate personalized images and PDFs — offers, quotations, certificates — from customer data with WALOOP.",
    },
    hero: {
      eyebrow: "Platform · Dynamic Experiences",
      title: "Personalized Images and PDFs From Your Data",
      description: "Turn customer and business data into personalized content.",
      bullets: ["Image Experience", "PDF Experience", "Template-Based"],
    },
    question: "What are WALOOP Dynamic Experiences?",
    whatIsIt:
      "WALOOP Dynamic Experiences merge customer data with a template to generate a personalized image or PDF for each customer.",
    features: {
      heading: "Two formats",
      items: [
        { icon: "Image", title: "Image Experience", description: "Personalized offers, product cards and campaign visuals." },
        { icon: "FileText", title: "PDF Experience", description: "Quotations, statements, reports and certificates." },
      ],
    },
    flow: {
      title: "Dynamic content",
      caption: "Customer data and a template produce a personalized image or PDF the customer receives.",
      steps: [
        "Customer Data + Template",
        "Dynamic Experience",
        { branches: [
          { label: "Image", steps: [] },
          { label: "PDF", steps: [] },
        ] },
        "Personalized content delivered",
      ],
    },
    useCases: ["Personalized offers", "Quotations", "Certificates", "Statements"],
    faqs: [
      {
        question: "Can WALOOP create personalized PDFs and images?",
        answer: "Yes. Dynamic Experiences generate personalized images and PDFs from your data and templates.",
      },
    ],
    cta: {
      heading: "Personalize Every Customer Experience",
      description: "Generate images and PDFs from your data.",
      label: "Explore Dynamic Experiences",
    },
  },

  // ───────────────────────────── AI (§17–18, §56)
  {
    slug: "ai",
    name: "AI",
    keyword: "AI Chatbot Trained on Your Business",
    keywords: ["AI customer support", "train AI on business content", "WhatsApp AI assistant", "AI knowledge base"],
    short: "Train AI on your business content and use it inside customer experiences.",
    icon: "BrainCircuit",
    visual: "ai",
    seo: {
      title: "AI Chatbot Trained on Your Business Content | WALOOP AI",
      description: "Train WALOOP AI on your business content to answer customer questions, with human handoff when needed.",
    },
    hero: {
      eyebrow: "Platform · AI Dashboard",
      title: "Train AI On Your Content",
      description: "AI that answers customers using your own business knowledge.",
      bullets: ["AI Dashboard", "Business Knowledge", "AI + Human Handoff"],
    },
    question: "What is an AI chatbot trained on your business?",
    whatIsIt:
      "WALOOP AI lets a business train AI on its own content so it can answer supported customer questions — and hand off to a human when needed.",
    features: {
      heading: "AI use cases",
      items: [
        { icon: "Headset", title: "Customer Support", description: "Answer questions from your knowledge." },
        { icon: "Package", title: "Product Information", description: "Explain products and services." },
        { icon: "CircleHelp", title: "FAQ Assistance", description: "Handle common questions." },
        { icon: "UserCheck", title: "Customer Qualification", description: "Support structured conversations." },
      ],
    },
    flow: {
      title: "AI + human",
      caption: "AI answers from your business knowledge. If it can't help, the conversation goes to your team.",
      steps: [
        "Business Content",
        "AI Knowledge",
        "Customer Question",
        "Can AI handle it?",
        { branches: [
          { label: "Yes", steps: ["AI Response"] },
          { label: "No", steps: ["Human Team"] },
        ] },
      ],
    },
    useCases: ["Customer support", "Product questions", "FAQ answers", "After-hours assistance"],
    faqs: [
      {
        question: "Can I train AI on my business information?",
        answer: "Yes. The AI Dashboard uses your business content as AI knowledge. Supported sources depend on the current implementation.",
      },
      {
        question: "Is the AI always correct?",
        answer: "No AI is always correct. Review your AI knowledge regularly; conversations can be handed to your team.",
      },
    ],
    cta: {
      heading: "Put Your Business Knowledge to Work",
      description: "Train AI on your content and use it in customer conversations.",
      label: "Explore WALOOP AI",
    },
    note: "AI responses depend on the content provided. Review AI knowledge and workflows regularly.",
  },

  // ───────────────────────────── Analytics (§22)
  {
    slug: "analytics",
    name: "Analytics",
    keyword: "Customer Engagement Analytics",
    keywords: ["WhatsApp analytics", "chatbot analytics", "automation analytics", "conversation reporting"],
    short: "See conversation, CRM, chatbot, automation and payment activity.",
    icon: "BarChart3",
    visual: "analytics",
    seo: {
      title: "Customer Engagement Analytics | WhatsApp, Chatbot & Automation Reports | WALOOP",
      description: "Track conversation, CRM, chatbot, automation and payment activity in WALOOP Analytics.",
    },
    hero: {
      eyebrow: "Platform · Analytics",
      title: "See What Is Happening Across Your Customer Journey",
      description: "Activity from conversations, CRM, chatbots, automations and payments.",
      bullets: ["Conversations", "CRM", "Chatbots", "Automations", "Payments"],
    },
    question: "What is customer engagement analytics?",
    whatIsIt:
      "WALOOP Analytics shows available activity from conversations, CRM, chatbots, automations and payments so teams can improve their customer journeys.",
    features: {
      heading: "What you can track",
      items: [
        { icon: "MessagesSquare", title: "Conversations", description: "Channel and conversation activity." },
        { icon: "Contact", title: "CRM", description: "Contacts, leads, segments and campaigns." },
        { icon: "Bot", title: "Chatbots", description: "Bot interactions and flow activity." },
        { icon: "Workflow", title: "Automations", description: "Workflow, trigger and action activity." },
        { icon: "CreditCard", title: "Payments", description: "Payment order and status activity." },
        { icon: "Target", title: "Conversion", description: "Visitor and conversion events where enabled." },
      ],
    },
    flow: {
      title: "Where analytics comes from",
      caption: "Activity from conversations, CRM, automation and payments feeds one analytics view.",
      steps: [
        { branches: [
          { label: "Conversations", steps: [] },
          { label: "CRM", steps: [] },
          { label: "Automation", steps: [] },
          { label: "Payments", steps: [] },
        ] },
        "WALOOP Analytics",
      ],
    },
    useCases: ["Bot optimization", "Workflow monitoring", "Campaign activity", "Payment tracking"],
    faqs: [
      {
        question: "Does WALOOP have analytics?",
        answer: "Yes. WALOOP includes analytics for chatbots, automations and broader platform activity.",
      },
    ],
    cta: {
      heading: "Understand Every Stage of the Journey",
      description: "Review activity across your whole customer journey.",
      label: "Explore Analytics",
    },
    note: "Dashboard visuals are illustrative. Real analytics reflect your own account activity.",
  },

  // ───────────────────────────── Workspace (§19–21, §23–24)
  {
    slug: "workspace",
    name: "Workspace",
    keyword: "Team Roles & Department Management",
    keywords: ["team roles and permissions", "department routing", "lead source tracking", "media manager"],
    short: "Teams, roles, departments, billing and operations in one workspace.",
    icon: "LayoutDashboard",
    visual: "workspace",
    seo: {
      title: "Team Roles, Departments & Permissions | WALOOP Workspace",
      description: "Manage team members, roles, departments, lead sources, media and billing from one WALOOP workspace.",
    },
    hero: {
      eyebrow: "Platform · Workspace",
      title: "One Workspace for Your Entire Operation",
      description: "Teams, roles, departments and administration in one place.",
      bullets: ["Roles & Permissions", "Departments", "Lead Source", "Media Manager"],
    },
    question: "What is WALOOP Workspace?",
    whatIsIt:
      "WALOOP Workspace is the admin layer for your team — roles and permissions, departments, lead sources, media, billing and support in one place.",
    features: {
      heading: "Workspace capabilities",
      items: [
        { icon: "ShieldCheck", title: "Roles & Permissions", description: "Control access by responsibility." },
        { icon: "Users", title: "Departments", description: "Route conversations to the right team." },
        { icon: "Globe", title: "Lead Source", description: "Track where leads come from." },
        { icon: "Image", title: "Media Manager", description: "Store images, videos and documents." },
        { icon: "ReceiptText", title: "Billing & Wallet", description: "Manage subscription and transactions." },
        { icon: "LifeBuoy", title: "Support Ticket", description: "Create and manage support requests." },
      ],
    },
    flow: {
      title: "Department routing",
      caption: "A customer's message is categorized by a rule and routed to the right department.",
      steps: [
        "Customer Message",
        "Category / Rule",
        { branches: [
          { label: "Sales", steps: [] },
          { label: "Support", steps: [] },
          { label: "Accounts", steps: [] },
          { label: "Operations", steps: [] },
        ] },
      ],
    },
    useCases: ["Department routing", "Access control", "Lead source tracking", "Billing management"],
    faqs: [
      {
        question: "Can my team work together in WALOOP?",
        answer: "Yes. WALOOP includes team management, roles, permissions and departments.",
      },
    ],
    cta: {
      heading: "Run Your Customer Operations From One Workspace",
      description: "Organize teams, roles and departments with WALOOP.",
      label: "Explore Workspace",
    },
    note: "Available roles and permissions depend on your plan and configuration.",
  },
];

export function getPlatformArea(slug: string) {
  return platformAreas.find((area) => area.slug === slug);
}

export const platformHref = (slug: PlatformSlug) => `/platform/${slug}`;

/** The core pillars shown on the homepage platform overview (§7). */
export const corePillars: PlatformSlug[] = [
  "channels",
  "crm",
  "chatbots",
  "automations",
  "whatsapp-mini-apps",
  "payments",
  "dynamic-experiences",
  "ai",
];
