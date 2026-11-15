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

// ───────────────────────────── Homepage (§5–8)

export const hero = {
  headline: "WhatsApp CRM, Chatbot & AI Automation Platform",
  copy: [
    "WALOOP connects WhatsApp, Instagram, Facebook and RCS with CRM, chatbots, automation, payments and AI — in one platform.",
  ],
  featureStrip: [
    "WhatsApp CRM",
    "Chatbot Builder",
    "Workflow Automation",
    "WhatsApp Flows",
    "Payments",
    "AI",
    "Analytics",
  ],
};

export const problem = {
  heading: "Customer Conversations Shouldn't Live in Silos.",
  copy: [
    "Messaging, CRM, automation and payments often sit in separate tools.",
    "WALOOP connects them in one platform.",
  ],
  silos: ["Messaging Tool", "CRM", "Automation Tool", "Payment Tool", "Support Tool", "Analytics"],
};

// ───────────────────────────── FAQ (§57)

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is WALOOP?",
    answer:
      "WALOOP is a customer engagement platform that combines WhatsApp and multi-channel messaging, CRM, chatbots, automation, payments and AI.",
  },
  {
    question: "Is WALOOP only for WhatsApp?",
    answer: "No. WALOOP also supports Instagram, Facebook and RCS, depending on your configuration.",
  },
  {
    question: "Can I build a WhatsApp chatbot without coding?",
    answer: "Yes. WALOOP's visual flow builder lets you build chatbots without code.",
  },
  {
    question: "Can I use WALOOP as a WhatsApp CRM?",
    answer: "Yes. It includes contacts, live chat, boards, segments, bulk campaigns and CRM triggers.",
  },
  {
    question: "Can I automate business processes?",
    answer: "Yes. The visual workflow builder connects triggers, conditions and actions.",
  },
  {
    question: "Does WALOOP support WhatsApp Flows?",
    answer: "Yes. WhatsApp Mini-Apps (Flows) let customers fill forms and make selections inside WhatsApp.",
  },
  {
    question: "Can I collect payments through WhatsApp?",
    answer: "Yes. WALOOP supports payment orders, configured payment gateways and payment automation.",
  },
  {
    question: "Can AI answer using my business information?",
    answer: "Yes. The AI Dashboard trains AI on your business content, with human handoff when needed.",
  },
  {
    question: "How much does WALOOP cost?",
    answer: "Starter is ₹15,000/year, Growth is ₹30,000/year, and Enterprise is custom pricing.",
  },
  {
    question: "Are WhatsApp/Meta charges included?",
    answer: "No. Provider, usage, payment gateway and WhatsApp/Meta charges are billed separately.",
  },
];

/** Shorter list for the homepage. */
export const homeFaqs: Faq[] = [faqs[0], faqs[1], faqs[2], faqs[3], faqs[8], faqs[9]];

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
