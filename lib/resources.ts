// Resources content: guides, docs overview and support (spec §3 Resources submenu, §72).
// Guides are overview-level walkthroughs built only from capabilities described in the spec.

import type { PlatformSlug } from "@/lib/platform";

export type Guide = {
  slug: string;
  title: string;
  icon: string;
  area: PlatformSlug;
  summary: string;
  steps: { title: string; description: string }[];
};

export const guides: Guide[] = [
  {
    slug: "first-chatbot",
    title: "How to build a WhatsApp chatbot",
    icon: "Bot",
    area: "chatbots",
    summary: "Welcome customers, offer choices and capture leads — no code needed.",
    steps: [
      { title: "Add a welcome message", description: "Greet the customer." },
      { title: "Ask with buttons", description: "Offer choices like Products, Support or Demo." },
      { title: "Capture answers", description: "Store replies in bot fields." },
      { title: "Hand off when needed", description: "Route complex requests to a human." },
    ],
  },
  {
    slug: "lead-automation",
    title: "How to automate lead follow-up",
    icon: "Workflow",
    area: "automations",
    summary: "Assign qualified leads to sales and nurture the rest automatically.",
    steps: [
      { title: "Trigger on a new lead", description: "Start the workflow from a supported event." },
      { title: "Check qualification", description: "Add a condition on the lead data." },
      { title: "Assign and notify", description: "Send qualified leads to sales." },
      { title: "Nurture the rest", description: "Schedule a follow-up." },
    ],
  },
  {
    slug: "whatsapp-mini-app",
    title: "How to create a WhatsApp Flow (Mini-App)",
    icon: "Smartphone",
    area: "whatsapp-mini-apps",
    summary: "Turn a long chat into a quick form and confirmation.",
    steps: [
      { title: "Pick the journey", description: "Lead form, registration, survey or order." },
      { title: "Add selection and fields", description: "Ask only what you need." },
      { title: "Confirm", description: "Show a summary before submit." },
      { title: "Connect the result", description: "Update the CRM and start a workflow." },
    ],
  },
  {
    slug: "payment-journey",
    title: "How to collect payments on WhatsApp",
    icon: "CreditCard",
    area: "payments",
    summary: "Go from conversation to payment order and confirmation.",
    steps: [
      { title: "Configure a gateway", description: "Connect a supported payment gateway." },
      { title: "Create the order", description: "Generate it from the customer's selection." },
      { title: "Send the request", description: "Share it in the conversation." },
      { title: "Automate by status", description: "Confirm paid orders; remind pending ones." },
    ],
  },
  {
    slug: "train-ai",
    title: "How to train AI on your business content",
    icon: "BrainCircuit",
    area: "ai",
    summary: "Let AI answer customer questions from your own knowledge.",
    steps: [
      { title: "Gather content", description: "Products, services, FAQs and policies." },
      { title: "Add it as AI knowledge", description: "Use the AI Dashboard." },
      { title: "Keep a human in the loop", description: "Route what AI can't handle." },
      { title: "Review regularly", description: "Keep knowledge up to date." },
    ],
  },
  {
    slug: "team-setup",
    title: "How to set up team roles and departments",
    icon: "Users",
    area: "workspace",
    summary: "Give every team member the right access.",
    steps: [
      { title: "Invite your team", description: "Add members in Manage Team." },
      { title: "Define roles", description: "Set permissions per role." },
      { title: "Create departments", description: "Sales, Support, Accounts and more." },
      { title: "Route conversations", description: "Send requests to the right department." },
    ],
  },
];

export const resourceHub = [
  { title: "Documentation", href: "/docs", icon: "BookOpen", description: "How each WALOOP capability works, area by area." },
  { title: "Guides", href: "/guides", icon: "Compass", description: "Step-by-step walkthroughs for common journeys." },
  { title: "Use Cases", href: "/use-cases", icon: "Route", description: "Complete customer journeys, diagrammed." },
  { title: "FAQ", href: "/faq", icon: "CircleHelp", description: "Answers about WALOOP, plans and features." },
  { title: "Blog", href: "/blog", icon: "Newspaper", description: "Insights and product updates." },
  { title: "Support", href: "/support", icon: "LifeBuoy", description: "Get help from the WALOOP team." },
];
