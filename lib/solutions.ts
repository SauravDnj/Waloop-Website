// Solutions content (spec §31–32, §27–28). Short, keyword-focused copy.

import type { Flow } from "@/lib/flows";
import type { PlatformSlug } from "@/lib/platform";

export type Solution = {
  slug: string;
  name: string;
  /** Primary SEO / AEO keyword. */
  keyword: string;
  icon: string;
  /** The natural question this page answers. */
  question: string;
  /** One-line description, also used as the direct answer to `question`. */
  short: string;
  seo: { title: string; description: string };
  hero: { title: string; description: string };
  flow: Flow;
  steps: { title: string; description: string }[];
  uses: PlatformSlug[];
};

export const solutions: Solution[] = [
  {
    slug: "lead-generation",
    name: "Lead Generation",
    keyword: "WhatsApp Lead Generation",
    icon: "Magnet",
    question: "What is WhatsApp lead generation?",
    short: "Capture enquiries, qualify leads with chatbots and route them to sales automatically.",
    seo: {
      title: "WhatsApp Lead Generation & Qualification | WALOOP",
      description: "Capture enquiries, qualify leads with chatbots, store them in the CRM and route them to sales with WALOOP.",
    },
    hero: {
      title: "Turn Campaign Interest Into Qualified Leads",
      description: "Capture, qualify and follow up on every WhatsApp enquiry.",
    },
    flow: {
      title: "Lead generation journey",
      caption: "A campaign brings a customer to WhatsApp; a bot qualifies them and sales follows up.",
      steps: ["Campaign", "WhatsApp", "Welcome Bot", "Qualification Questions", "CRM Contact", "Sales Department", "Demo"],
    },
    steps: [
      { title: "Capture", description: "Enquiries arrive tagged with their lead source." },
      { title: "Qualify", description: "Chatbots ask structured questions." },
      { title: "Organize", description: "Leads become CRM contacts in a segment." },
      { title: "Follow up", description: "Automations assign sales and schedule follow-up." },
    ],
    uses: ["channels", "chatbots", "crm", "automations", "workspace"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    keyword: "WhatsApp Marketing",
    icon: "Megaphone",
    question: "What is WhatsApp marketing?",
    short: "Segment audiences, send bulk WhatsApp campaigns and automate follow-up.",
    seo: {
      title: "WhatsApp Marketing | Bulk Campaigns & Segmentation | WALOOP",
      description: "Segment audiences, send bulk WhatsApp campaigns and automate follow-up with WALOOP.",
    },
    hero: {
      title: "WhatsApp Campaigns That Continue the Conversation",
      description: "Segment, send and follow up — all from one platform.",
    },
    flow: {
      title: "Marketing campaign",
      caption: "A segment receives a campaign; replies continue in a chatbot and update the CRM.",
      steps: ["Audience", "Segment", "Campaign", "Customer Response", "Chatbot", "CRM", "Follow-up"],
    },
    steps: [
      { title: "Segment", description: "Group customers by their data." },
      { title: "Send", description: "Run bulk campaigns on supported channels." },
      { title: "Engage", description: "Replies continue into chatbot journeys." },
      { title: "Follow up", description: "Responses trigger automated follow-up." },
    ],
    uses: ["crm", "channels", "chatbots", "dynamic-experiences", "automations"],
  },
  {
    slug: "sales",
    name: "Sales",
    keyword: "Conversational Sales on WhatsApp",
    icon: "TrendingUp",
    question: "What is conversational sales on WhatsApp?",
    short: "Qualify leads in conversation and hand them to sales with full context.",
    seo: {
      title: "Conversational Sales on WhatsApp | WALOOP",
      description: "Qualify leads with chatbots and give sales teams full customer context with WALOOP CRM.",
    },
    hero: {
      title: "Give Sales Teams Context Before the Conversation",
      description: "Know where each lead came from and what they need.",
    },
    flow: {
      title: "Sales journey",
      caption: "A chatbot qualifies the enquiry and sales follows up with full context.",
      steps: ["Lead Source", "Customer Enquiry", "Chatbot Qualification", "CRM", "Sales Team", "Follow-up"],
    },
    steps: [
      { title: "Discover", description: "Bots and Mini-Apps help customers explore." },
      { title: "Qualify", description: "Structured questions surface the right leads." },
      { title: "Hand over", description: "Sales gets the lead with its history." },
      { title: "Close", description: "Boards, payments and follow-ups complete it." },
    ],
    uses: ["chatbots", "crm", "whatsapp-mini-apps", "payments", "workspace"],
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    keyword: "WhatsApp Customer Support",
    icon: "Headset",
    question: "What is WhatsApp customer support?",
    short: "Answer common questions with bots and AI, and route the rest to the right team.",
    seo: {
      title: "WhatsApp Customer Support & Helpdesk | WALOOP",
      description: "Centralize support conversations, answer FAQs with bots and AI, and route to departments with WALOOP.",
    },
    hero: {
      title: "Resolve More, Route the Rest",
      description: "Automate common answers and route complex requests to the right team.",
    },
    flow: {
      title: "Support journey",
      caption: "A bot tries to answer; unresolved requests go to a human agent.",
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
    steps: [
      { title: "Centralize", description: "All support chats in one Live Chat inbox." },
      { title: "Answer", description: "Bots, canned replies and AI handle FAQs." },
      { title: "Route", description: "Departments get requests that need a person." },
      { title: "Record", description: "Resolutions are saved to CRM history." },
    ],
    uses: ["channels", "chatbots", "ai", "crm", "workspace"],
  },
  {
    slug: "customer-engagement",
    name: "Customer Engagement",
    keyword: "Customer Engagement Platform",
    icon: "HeartHandshake",
    question: "What is a customer engagement platform?",
    short: "Personalized conversations, interactive WhatsApp experiences and dynamic content.",
    seo: {
      title: "Customer Engagement Platform | WALOOP",
      description: "Create personalized conversations, interactive WhatsApp experiences and dynamic content with WALOOP.",
    },
    hero: {
      title: "Personal Conversations at Every Stage",
      description: "Engage every customer with personalized, interactive experiences.",
    },
    flow: {
      title: "Engagement journey",
      caption: "A personalized conversation leads to an interactive experience and tailored content.",
      conceptual: true,
      steps: ["Customer", "Personalized Conversation", "Interactive Experience", "Personalized Content", "Follow-up"],
    },
    steps: [
      { title: "Personalize", description: "Tailor messages with CRM fields and segments." },
      { title: "Interact", description: "Mini-Apps turn messages into experiences." },
      { title: "Delight", description: "Send personalized images and PDFs." },
      { title: "Continue", description: "Automations keep the relationship moving." },
    ],
    uses: ["channels", "whatsapp-mini-apps", "dynamic-experiences", "crm", "automations"],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    keyword: "Business Process Automation",
    icon: "Workflow",
    question: "What is business process automation?",
    short: "Turn repetitive tasks into no-code workflows with triggers, conditions and actions.",
    seo: {
      title: "Business Process Automation | No-Code Workflows | WALOOP",
      description: "Automate repetitive business tasks with WALOOP's no-code workflows — triggers, conditions and actions.",
    },
    hero: {
      title: "Repeatable Workflows for Repetitive Work",
      description: "Workflows that run every time, without manual steps.",
    },
    flow: {
      title: "Automation pattern",
      caption: "An event triggers the workflow; a condition decides the next action.",
      steps: [
        "Event",
        "Trigger",
        "Condition",
        { branches: [
          { label: "Yes", steps: ["Action", "Notification"] },
          { label: "No", steps: ["Follow-up"] },
        ] },
      ],
    },
    steps: [
      { title: "Trigger", description: "Start from CRM, chat or payment events." },
      { title: "Decide", description: "Conditions check your data." },
      { title: "Act", description: "Send messages, update records, call apps." },
      { title: "Measure", description: "Review workflow activity." },
    ],
    uses: ["automations", "crm", "payments", "analytics"],
  },
  {
    slug: "payment-journeys",
    name: "Payment Journeys",
    keyword: "Payments in Customer Conversations",
    icon: "CreditCard",
    question: "How do payments work in WhatsApp conversations?",
    short: "Go from conversation to payment order, confirmation and follow-up.",
    seo: {
      title: "Collect Payments in WhatsApp Conversations | WALOOP",
      description: "Move from conversation to payment order, gateway, confirmation and automated reminders with WALOOP.",
    },
    hero: {
      title: "From Conversation to Confirmation",
      description: "Orders, payments and confirmations inside the customer conversation.",
    },
    flow: {
      title: "Payment journey",
      caption: "A selection becomes a payment order; status drives confirmation and follow-up.",
      steps: ["Conversation", "Selection", "Payment Order", "Gateway", "Confirmation", "Automation"],
    },
    steps: [
      { title: "Select", description: "Customers choose in chat or a Mini-App." },
      { title: "Order", description: "A payment order is created." },
      { title: "Pay", description: "Payment via a configured gateway." },
      { title: "Confirm", description: "Status drives confirmations and reminders." },
    ],
    uses: ["payments", "whatsapp-mini-apps", "automations", "crm"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
