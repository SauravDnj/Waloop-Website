// Cross-platform journeys and diagrams (spec §25–30, §52–56, §69). Short, keyword-focused.

import type { Flow } from "@/lib/flows";

/** §25 / §71 Master customer journey. */
export const masterJourney: Flow = {
  title: "The complete WALOOP customer journey",
  caption:
    "A message arrives, a bot or human replies, the CRM stores the data and automation runs the next step — through to payment, follow-up and analytics.",
  steps: [
    "Customer",
    "WhatsApp / Social / RCS",
    "Bot / Human",
    "CRM",
    "Automation",
    { branches: [
      { label: "Mini-App", steps: [] },
      { label: "Payment", steps: [] },
      { label: "Dynamic Experience", steps: [] },
    ] },
    "Follow-up",
    "Analytics",
  ],
};

/** §27–30, §52–56 — use-case journeys. */
export const useCaseFlows: (Flow & { slug: string; icon: string })[] = [
  {
    slug: "lead-generation",
    icon: "Magnet",
    title: "WhatsApp lead generation",
    caption: "A campaign brings a customer to WhatsApp; a bot qualifies them and sales follows up.",
    steps: ["Campaign", "WhatsApp", "Welcome Bot", "Qualification", "CRM Contact", "Sales Follow-up"],
  },
  {
    slug: "customer-support",
    icon: "Headset",
    title: "WhatsApp customer support",
    caption: "A bot answers common questions; unresolved requests go to a human agent.",
    steps: [
      "Customer Message",
      "Support Bot",
      "Resolved?",
      { branches: [
        { label: "Yes", steps: ["Close"] },
        { label: "No", steps: ["Department", "Human Agent"] },
      ] },
    ],
  },
  {
    slug: "e-commerce",
    icon: "ShoppingBag",
    title: "WhatsApp e-commerce",
    caption: "Customers discover products on WhatsApp, select, pay and get a confirmation.",
    conceptual: true,
    steps: ["Campaign", "WhatsApp", "Product Discovery", "Selection", "Payment", "Confirmation"],
  },
  {
    slug: "appointment",
    icon: "CalendarCheck",
    title: "Appointment booking on WhatsApp",
    caption: "A WhatsApp form captures the service request, then a confirmation and reminder follow.",
    conceptual: true,
    steps: ["WhatsApp", "Chatbot", "Select Service", "Interactive Form", "Confirmation", "Reminder"],
  },
  {
    slug: "marketing-campaign",
    icon: "Megaphone",
    title: "WhatsApp marketing campaign",
    caption: "A segment receives a campaign; replies continue in a chatbot and update the CRM.",
    steps: ["Segment", "Campaign", "Customer Response", "Chatbot", "CRM", "Follow-up"],
  },
  {
    slug: "sales",
    icon: "TrendingUp",
    title: "Conversational sales",
    caption: "A chatbot qualifies the enquiry and sales follows up with full context.",
    steps: ["Lead Source", "Enquiry", "Chatbot", "CRM", "Sales Team", "Follow-up"],
  },
  {
    slug: "payment",
    icon: "CreditCard",
    title: "WhatsApp payments",
    caption: "A selection becomes a payment order; status drives confirmation and follow-up.",
    steps: ["Conversation", "Payment Order", "Gateway", "Status", "Confirmation"],
  },
  {
    slug: "ai-support",
    icon: "BrainCircuit",
    title: "AI customer support",
    caption: "AI answers from your business content, with human handoff if required.",
    steps: ["Business Content", "AI Knowledge", "Customer Question", "AI Response", "Human Handoff if required"],
  },
];

/** §69 Product demo flow — one continuous customer journey. */
export const demoFlow = [
  "Customer sends a WhatsApp message.",
  "Chatbot responds and captures details.",
  "CRM contact is created and segmented.",
  "Automation routes it to the right team.",
  "Mini-App or payment journey is presented.",
  "Follow-up and analytics.",
];
