// Central content store for the WALOOP marketing site.
// Source: WALOOP_Website_Content_Context_Specification_DETAILED.md
// Keeping copy here (rather than scattered in components) makes it easy to edit later.

import { platformAreas, platformHref } from "@/lib/platform";
import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";

// ───────────────────────────── Brand foundation (§1, §60)

export const siteConfig = {
  name: "WALOOP",
  tagline: "Built on Trust. Driven by AI.",
  coreMessage: "Connect. Automate. Engage. Grow.",
  alternativeHeadline: "Turn Every Customer Conversation Into a Connected Business Journey.",
  description:
    "WALOOP helps businesses communicate with customers, organize customer data, automate repetitive processes, create interactive experiences, and build AI-powered customer journeys from one platform.",
  supportingStatement:
    "WALOOP brings conversations, CRM, chatbots, automation, WhatsApp experiences, payments, dynamic experiences, and AI together so businesses can build connected customer journeys from one platform.",
  website: "https://www.waloop.in",
  websiteLabel: "www.waloop.in",
  appUrl: "https://app.waloop.in",
  appLabel: "app.waloop.in",
  email: "official.waloop@gmail.com",
  phone: "+91 87584 08987",
  phoneLink: "tel:+918758408987",
  whatsapp: "+91 87580 18450",
  whatsappLink: "https://wa.me/918758018450",
};

export function whatsappMessageLink(text: string) {
  return `${siteConfig.whatsappLink}?text=${encodeURIComponent(text)}`;
}

/** Primary / secondary CTAs (§3). */
export const ctas = {
  getStarted: { label: "Get Started", href: siteConfig.appUrl },
  bookDemo: { label: "Book a Demo", href: "/demo" },
  talkToSales: { label: "Talk to Sales", href: "/contact" },
  talkToWaloop: { label: "Talk to WALOOP", href: "/contact" },
};

/** §1 Brand promise. */
export const brandPromise = [
  { icon: "Plug", title: "Connect", description: "Bring supported channels together." },
  { icon: "ScanSearch", title: "Understand", description: "Organize conversations and customer information." },
  { icon: "Workflow", title: "Automate", description: "Turn repetitive processes into workflows." },
  { icon: "Sparkles", title: "Engage", description: "Create useful and personalized customer experiences." },
  { icon: "BarChart3", title: "Measure", description: "Understand activity and improve customer journeys." },
];

// ───────────────────────────── Navigation (§3)

export type NavLink = { label: string; href: string; description?: string; icon?: string };

export type NavGroup = {
  label: string;
  href: string;
  columns: { heading: string; links: NavLink[] }[];
  highlight?: { badge: string; title: string; description: string; cta: string; href: string };
};

export type NavEntry = NavGroup | NavLink;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "columns" in entry;
}

const platformLink = (slug: string): NavLink => {
  const area = platformAreas.find((a) => a.slug === slug)!;
  return { label: area.name, href: platformHref(area.slug), description: area.short, icon: area.icon };
};

export const mainNav: NavEntry[] = [
  {
    label: "Platform",
    href: "/platform",
    columns: [
      {
        heading: "Connect & Engage",
        links: ["channels", "crm", "chatbots", "automations", "whatsapp-mini-apps"].map(platformLink),
      },
      {
        heading: "Convert & Grow",
        links: ["payments", "dynamic-experiences", "ai", "analytics", "workspace"].map(platformLink),
      },
    ],
    highlight: {
      badge: "Platform overview",
      title: "One connected platform",
      description: "See how every WALOOP capability connects across the customer journey.",
      cta: "Explore the platform",
      href: "/platform",
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        heading: "Grow",
        links: solutions.slice(0, 4).map((s) => ({ label: s.name, href: `/solutions/${s.slug}`, description: s.short, icon: s.icon })),
      },
      {
        heading: "Operate",
        links: solutions.slice(4).map((s) => ({ label: s.name, href: `/solutions/${s.slug}`, description: s.short, icon: s.icon })),
      },
    ],
    highlight: {
      badge: "Use cases",
      title: "See complete customer journeys",
      description: "Lead generation, support, e-commerce, appointments and more — step by step.",
      cta: "View use cases",
      href: "/use-cases",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        heading: "Industries",
        links: industries.slice(0, 4).map((i) => ({ label: i.name, href: `/industries/${i.slug}`, description: i.short, icon: i.icon })),
      },
      {
        heading: " ",
        links: industries.slice(4).map((i) => ({ label: i.name, href: `/industries/${i.slug}`, description: i.short, icon: i.icon })),
      },
    ],
  },
  { label: "AI", href: "/platform/ai" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    columns: [
      {
        heading: "Learn",
        links: [
          { label: "Documentation", href: "/docs", description: "How each WALOOP capability works.", icon: "BookOpen" },
          { label: "Guides", href: "/guides", description: "Step-by-step guides to build journeys.", icon: "Compass" },
          { label: "Use Cases", href: "/use-cases", description: "Complete customer journeys, diagrammed.", icon: "Route" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "/faq", description: "Answers about WALOOP, plans and features.", icon: "CircleHelp" },
          { label: "Blog", href: "/blog", description: "Insights and product updates.", icon: "Newspaper" },
          { label: "Support", href: "/support", description: "Get help from the WALOOP team.", icon: "LifeBuoy" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "About WALOOP", href: "/about", description: "Built to connect the modern customer journey.", icon: "Building2" },
          { label: "Contact", href: "/contact", description: "Talk to the WALOOP team.", icon: "Mail" },
          { label: "Pricing", href: "/pricing", description: "Starter, Growth and Enterprise plans.", icon: "Tag" },
        ],
      },
      {
        heading: "Get started",
        links: [
          { label: "Book a Demo", href: "/demo", description: "See one continuous customer journey.", icon: "CalendarCheck" },
          { label: "Open the App", href: siteConfig.appUrl, description: siteConfig.appLabel, icon: "LogIn" },
        ],
      },
    ],
  },
];

// ───────────────────────────── Footer (§61)

export const footer = {
  description:
    "WALOOP helps businesses connect with customers, manage conversations, automate workflows, create interactive experiences, and build AI-powered customer journeys.",
  cta: "Build Smarter Customer Journeys With WALOOP",
  columns: [
    { title: "Platform", links: platformAreas.map((a) => ({ label: a.name, href: platformHref(a.slug) })) },
    { title: "Solutions", links: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })) },
    { title: "Industries", links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })) },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "FAQ", href: "/faq" },
        { label: "Guides", href: "/guides" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
        { label: "Book a Demo", href: "/demo" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
};

// ───────────────────────────── Homepage (§5–8, §38–40)

export const hero = {
  headline: "The Intelligent Platform for Customer Conversations, Automation & Growth",
  copy: [
    "WALOOP brings WhatsApp, social channels, CRM, chatbots, automation, interactive experiences, payments, analytics, and AI together in one connected platform.",
    "Build customer journeys that start with a message, continue through intelligent conversations and automated workflows, and lead to meaningful business actions.",
  ],
  featureStrip: [
    "WhatsApp & Multi-Channel Engagement",
    "Conversational CRM",
    "Visual Chatbot Builder",
    "Drag-and-Drop Automation",
    "WhatsApp Mini-Apps",
    "Payments",
    "Dynamic Experiences",
    "AI",
    "Analytics",
  ],
};

export const problem = {
  heading: "Customer Conversations Shouldn't Live in Silos.",
  copy: [
    "Businesses often manage communication, customer data, campaigns, automation, support, payments, and reporting across different tools.",
    "That can make it harder to maintain context between a customer's conversation and the actions that follow.",
    "WALOOP brings these capabilities together so teams can create connected customer journeys.",
  ],
  silos: ["Messaging Tool", "CRM", "Automation Tool", "Payment Tool", "Support Tool", "Analytics"],
};

export const platformOverview = {
  heading: "Everything Your Customer Journey Needs. In One Platform.",
  intro:
    "From the first customer message to lead management, sales conversations, support, payment, follow-up, and analytics, WALOOP provides connected capabilities for the customer journey.",
};

/** §38 Why WALOOP. */
export const whyWaloop = {
  heading: "One Connected Platform for Modern Customer Engagement",
  items: [
    { icon: "Layers", title: "One Platform", description: "Bring communication, CRM, automation, and customer experiences into one environment." },
    { icon: "MessagesSquare", title: "Multi-Channel", description: "Manage supported communication channels from one workspace." },
    { icon: "Workflow", title: "Visual Automation", description: "Build structured workflows visually." },
    { icon: "Contact", title: "Conversational CRM", description: "Keep conversations and customer information connected." },
    { icon: "Smartphone", title: "Interactive Experiences", description: "Create supported WhatsApp interactive journeys." },
    { icon: "CreditCard", title: "Payments", description: "Connect payment-related actions to customer journeys." },
    { icon: "BrainCircuit", title: "AI", description: "Use business content as the foundation for supported AI experiences." },
    { icon: "Users", title: "Team Collaboration", description: "Organize departments, teams, roles, and permissions." },
    { icon: "BarChart3", title: "Analytics", description: "Monitor available customer engagement and workflow activity." },
  ],
};

/** §39–40 How WALOOP works. */
export const howItWorks = [
  { step: "01", title: "Connect", description: "Connect supported channels and services." },
  { step: "02", title: "Organize", description: "Manage contacts, customer information, teams, and departments." },
  { step: "03", title: "Build", description: "Create chatbots, workflows, campaigns, Mini-Apps, and dynamic experiences." },
  { step: "04", title: "Engage", description: "Communicate with customers through supported channels." },
  { step: "05", title: "Automate", description: "Trigger workflows and repetitive actions." },
  { step: "06", title: "Convert", description: "Move customers toward supported business actions." },
  { step: "07", title: "Support", description: "Route conversations and requests to the appropriate team." },
  { step: "08", title: "Measure", description: "Use available analytics and activity data." },
];

/** §67 Capability-based trust section. */
export const trust = {
  heading: "Built for Connected Customer Operations",
  description:
    "WALOOP is Meta Verified and gives teams the capabilities they need to run customer operations from one place.",
  capabilities: [
    { icon: "Inbox", title: "Centralized conversations" },
    { icon: "Database", title: "Structured customer data" },
    { icon: "Workflow", title: "Visual workflows" },
    { icon: "ShieldCheck", title: "Team permissions" },
    { icon: "Plug", title: "Supported integrations" },
    { icon: "BrainCircuit", title: "AI-ready customer experiences" },
  ],
};

// ───────────────────────────── FAQ (§57)

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is WALOOP?",
    answer:
      "WALOOP is a customer engagement and business automation platform that connects supported communication channels, CRM, chatbots, automation, interactive experiences, payments, dynamic content, analytics, and AI capabilities.",
  },
  {
    question: "Is WALOOP only for WhatsApp?",
    answer:
      "No. WhatsApp is an important supported channel, but WALOOP is a broader customer engagement platform with additional supported channels and business capabilities.",
  },
  {
    question: "Which channels are supported?",
    answer:
      "WALOOP identifies WhatsApp, Instagram, Facebook, and RCS as supported channel categories. The exact capabilities available for each channel depend on the active product configuration.",
  },
  { question: "Can I build chatbots?", answer: "Yes. WALOOP includes a visual chatbot/flow builder for creating supported conversation journeys." },
  {
    question: "Do I need to code to create a chatbot?",
    answer: "The visual builder is designed to let business teams create structured conversation flows without manually coding every interaction.",
  },
  {
    question: "Can I automate business processes?",
    answer: "Yes. WALOOP includes a visual automation/workflow builder for supported triggers, conditions, actions, data, and integrations.",
  },
  {
    question: "Can I use WALOOP as a CRM?",
    answer:
      "WALOOP includes CRM capabilities such as contacts, conversations, boards, data stores, segments, campaigns, canned replies, triggers, imports, and exports.",
  },
  {
    question: "Can WALOOP collect customer information?",
    answer: "Supported chatbot, CRM, Mini-App, and workflow features can be used to capture structured information.",
  },
  {
    question: "Can I create WhatsApp interactive experiences?",
    answer: "WALOOP includes WhatsApp Mini-App / Flow capabilities for supported interactive journeys.",
  },
  {
    question: "Can I connect payments?",
    answer: "WALOOP includes payment orders, payment gateways, and payment automation capabilities for supported configurations.",
  },
  { question: "Can I create personalized PDFs or images?", answer: "WALOOP includes Dynamic Experience capabilities for image and PDF experiences." },
  {
    question: "Can AI use my business information?",
    answer:
      "The AI Dashboard is designed around training AI on relevant business content. The exact supported content sources and processing behaviour are documented according to the current implementation.",
  },
  { question: "Can teams work together?", answer: "WALOOP includes team management, roles, permissions, and department-oriented capabilities." },
  {
    question: "Can I manage customer support?",
    answer:
      "Yes. WALOOP provides live conversations, canned replies, department organization, CRM information, chatbots, and automation capabilities that can support customer service workflows.",
  },
  { question: "Does WALOOP have analytics?", answer: "WALOOP includes analytics areas for supported chatbot, automation, and broader platform activity." },
  { question: "What are the current plans?", answer: "Starter is ₹15,000/year, Growth is ₹30,000/year, and Enterprise is custom pricing." },
  {
    question: "Are third-party charges included?",
    answer:
      "No. Applicable provider, usage, payment gateway, and WhatsApp/Meta charges are separate from the WALOOP subscription.",
  },
];

/** Shorter list for the homepage. */
export const homeFaqs: Faq[] = [faqs[0], faqs[1], faqs[2], faqs[4], faqs[6], faqs[9], faqs[11], faqs[15], faqs[16]];

// ───────────────────────────── CTA library (§58)

export const ctaLibrary = {
  journeys: {
    heading: "Ready to Build Better Customer Journeys?",
    description: "Bring conversations, CRM, automation, payments, and AI together with WALOOP.",
    cta: ctas.getStarted,
  },
  automate: {
    heading: "Automate the Work. Personalize the Experience.",
    description: "Build connected customer workflows with WALOOP.",
    cta: ctas.bookDemo,
  },
  messaging: {
    heading: "Your Customers Are Already Messaging. Make Every Conversation Count.",
    description: "Connect supported channels and create structured customer experiences.",
    cta: { label: "Start With WALOOP", href: siteConfig.appUrl },
  },
  next: {
    heading: "Build Your Next Customer Journey With WALOOP",
    description: "Connect. Automate. Engage.",
    cta: ctas.getStarted,
  },
};
