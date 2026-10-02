// Solutions content (spec §31–32, §27–28, §51–55).

import type { Flow } from "@/lib/flows";
import type { PlatformSlug } from "@/lib/platform";

export type Solution = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  seo: { title: string; description: string };
  hero: { title: string; description: string };
  persona: { role: string; need: string };
  flow: Flow;
  steps: { title: string; description: string }[];
  uses: PlatformSlug[];
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "lead-generation",
    name: "Lead Generation",
    icon: "Magnet",
    short: "Capture enquiries, collect information, qualify leads, route conversations, and create structured follow-up workflows.",
    seo: {
      title: "Lead Generation on WhatsApp | WALOOP",
      description: "Capture enquiries, qualify leads with chatbots, store them in the CRM and route them to sales with WALOOP.",
    },
    hero: {
      title: "Turn Campaign Interest Into Qualified Leads",
      description:
        "WALOOP connects marketing activity with conversation, customer information, routing, and follow-up so the lead journey is easier to structure.",
    },
    persona: { role: "Sales Team", need: "Needs lead capture, qualification, customer context, and follow-up." },
    flow: {
      title: "Lead generation journey",
      caption:
        "A customer sees a campaign and messages on WhatsApp. A welcome bot asks about their interest and qualification questions, captures their data into a CRM contact and lead segment, and routes them to the sales department for human follow-up and a demo.",
      steps: [
        "Campaign",
        "WhatsApp",
        "Welcome Bot",
        "Product Interest",
        "Qualification Questions",
        "Customer Data Captured",
        "CRM Contact",
        "Lead Segment",
        "Sales Department",
        "Human Follow-up",
        "Demo",
      ],
    },
    steps: [
      { title: "Capture", description: "Campaigns and channels bring enquiries into one place, tagged with their lead source." },
      { title: "Qualify", description: "Chatbots ask structured questions and record answers in bot fields." },
      { title: "Organize", description: "Qualified leads become CRM contacts and join the right segment." },
      { title: "Follow up", description: "Automations assign the sales department and schedule follow-up." },
    ],
    uses: ["channels", "chatbots", "crm", "automations", "workspace"],
    outcomes: ["Every enquiry captured", "Consistent qualification", "Clear lead ownership", "Structured follow-up"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    icon: "Megaphone",
    short: "Build campaigns, segment audiences, engage customers through supported channels, and automate follow-up.",
    seo: {
      title: "WhatsApp Marketing Campaigns & Segmentation | WALOOP",
      description: "Segment audiences, send bulk campaigns on supported channels and automate follow-up with WALOOP.",
    },
    hero: {
      title: "Create More Connected Campaigns",
      description:
        "Link audience selection, conversations, customer data, and follow-up workflows — so a campaign doesn't end when the message is sent.",
    },
    persona: { role: "Marketing Team", need: "Needs campaigns, segmentation, communication, and engagement workflows." },
    flow: {
      title: "Marketing campaign",
      caption:
        "An audience is narrowed into a segment and sent a campaign on WhatsApp or another supported channel. Customer responses continue in a chatbot, update the CRM and trigger follow-up.",
      steps: ["Audience", "Segment", "Campaign", "WhatsApp / Supported Channel", "Customer Response", "Chatbot", "CRM", "Follow-up"],
    },
    steps: [
      { title: "Segment", description: "Group customers using available customer, engagement or business data." },
      { title: "Send", description: "Run bulk campaigns through supported channels and configurations." },
      { title: "Engage", description: "Replies continue into chatbot journeys and interactive experiences." },
      { title: "Follow up", description: "Responses update the CRM and trigger automated follow-up." },
    ],
    uses: ["crm", "channels", "chatbots", "dynamic-experiences", "automations"],
    outcomes: ["Targeted audiences", "Two-way campaigns", "Personalized content", "Automatic follow-up"],
  },
  {
    slug: "sales",
    name: "Sales",
    icon: "TrendingUp",
    short: "Use conversational journeys to help customers discover products or services and move qualified leads to sales teams.",
    seo: {
      title: "Conversational Sales on WhatsApp | WALOOP",
      description: "Give sales teams customer context with chatbots, CRM, segments and lead sources on WALOOP.",
    },
    hero: {
      title: "Give Sales Teams Context Before the Conversation",
      description:
        "Give sales teams customer context before the conversation reaches the next stage — where the lead came from, what they asked and what they need.",
    },
    persona: { role: "Sales Team", need: "Needs lead capture, qualification, customer context, and follow-up." },
    flow: {
      title: "Sales journey",
      caption:
        "A lead arrives from a known source with an enquiry. A chatbot qualifies it, the CRM stores it in a segment, and the sales team follows up with full context.",
      steps: ["Lead Source", "Customer Enquiry", "Chatbot", "Qualification", "CRM", "Segment", "Sales Team", "Follow-up"],
    },
    steps: [
      { title: "Discover", description: "Chatbots and Mini-Apps help customers explore products and services." },
      { title: "Qualify", description: "Structured questions surface the right leads." },
      { title: "Hand over", description: "Qualified leads reach the sales team with their history." },
      { title: "Close", description: "Boards track stages; payments and follow-ups complete the journey." },
    ],
    uses: ["chatbots", "crm", "whatsapp-mini-apps", "payments", "workspace"],
    outcomes: ["Context-rich handovers", "Organized pipelines", "Faster responses", "Connected payments"],
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    icon: "Headset",
    short: "Centralize conversations, use reusable responses, route customers to departments, and automate supported support journeys.",
    seo: {
      title: "WhatsApp Customer Support & Routing | WALOOP",
      description: "Centralize support conversations, answer FAQs with bots and AI, and route to departments with WALOOP.",
    },
    hero: {
      title: "Resolve More, Route the Rest",
      description:
        "Centralize conversations, answer common questions automatically, and route complex requests to the right department with the full history attached.",
    },
    persona: { role: "Customer Support Team", need: "Needs conversations, routing, canned replies, and customer history." },
    flow: {
      title: "Support journey",
      caption:
        "A support bot identifies the request and tries an FAQ or automated answer. If resolved, the conversation closes; if not, it goes to the right department and a human agent resolves it, with the outcome saved to CRM history.",
      steps: [
        "Customer Message",
        "Support Bot",
        "Identify Request",
        "FAQ / Automated Answer",
        "Resolved?",
        { branches: [
          { label: "Yes", steps: ["Close"] },
          { label: "No", steps: ["Department", "Human Agent", "Resolution", "CRM History"] },
        ] },
      ],
    },
    steps: [
      { title: "Centralize", description: "Bring support conversations from supported channels into Live Chat." },
      { title: "Answer", description: "Bots, canned replies and AI handle common questions." },
      { title: "Route", description: "Departments receive the requests that need a person." },
      { title: "Record", description: "Every resolution is kept in the customer's CRM history." },
    ],
    uses: ["channels", "chatbots", "ai", "crm", "workspace"],
    outcomes: ["One support inbox", "Faster answers to FAQs", "Clear department ownership", "Complete history"],
  },
  {
    slug: "customer-engagement",
    name: "Customer Engagement",
    icon: "HeartHandshake",
    short: "Create personalized conversations and interactive experiences across supported channels.",
    seo: {
      title: "Customer Engagement Platform | WALOOP",
      description: "Create personalized conversations, interactive WhatsApp experiences and dynamic content with WALOOP.",
    },
    hero: {
      title: "Personal Conversations at Every Stage",
      description:
        "Create personalized conversations and interactive experiences across supported channels — from the first hello to the follow-up.",
    },
    persona: { role: "Business Owner", need: "Needs a clearer overview of customer operations and automation." },
    flow: {
      title: "Engagement journey",
      caption:
        "A customer is reached on a supported channel with a personalized conversation, completes an interactive experience, receives personalized content, and is followed up automatically.",
      conceptual: true,
      steps: ["Customer", "Supported Channel", "Personalized Conversation", "Interactive Experience", "Personalized Content", "Follow-up"],
    },
    steps: [
      { title: "Personalize", description: "Use CRM fields and segments to tailor every message." },
      { title: "Interact", description: "WhatsApp Mini-Apps turn messages into structured experiences." },
      { title: "Delight", description: "Dynamic images and PDFs deliver content made for each customer." },
      { title: "Continue", description: "Automations keep the relationship moving." },
    ],
    uses: ["channels", "whatsapp-mini-apps", "dynamic-experiences", "crm", "automations"],
    outcomes: ["Personal experiences", "Structured interactions", "Relevant content", "Ongoing relationships"],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    icon: "Workflow",
    short: "Connect triggers, conditions, data, applications, and actions into repeatable workflows.",
    seo: {
      title: "Business Process Automation | WALOOP",
      description: "Connect triggers, conditions, data, applications and actions into repeatable workflows with WALOOP.",
    },
    hero: {
      title: "Repeatable Workflows for Repetitive Work",
      description:
        "Connect triggers, conditions, data, applications, and actions into repeatable workflows that run every time.",
    },
    persona: { role: "Operations Team", need: "Needs workflows, automation, data, and process visibility." },
    flow: {
      title: "Automation pattern",
      caption: "An event triggers the workflow, a condition checks the data, and the right action, notification and record update follow.",
      steps: [
        "Event",
        "Trigger",
        "Condition",
        { branches: [
          { label: "Yes", steps: ["Action", "Notification"] },
          { label: "No", steps: ["Follow-up"] },
        ] },
        "CRM Update",
      ],
    },
    steps: [
      { title: "Trigger", description: "Start from supported CRM, conversation, payment or business events." },
      { title: "Decide", description: "Conditions check customer and business data." },
      { title: "Act", description: "Send messages, update data, create records or call connected apps." },
      { title: "Measure", description: "Automation analytics show workflow activity." },
    ],
    uses: ["automations", "crm", "payments", "analytics"],
    outcomes: ["Fewer manual steps", "Consistent processes", "Connected applications", "Visible operations"],
  },
  {
    slug: "payment-journeys",
    name: "Payment Journeys",
    icon: "CreditCard",
    short: "Connect customer engagement with payment-related business actions.",
    seo: {
      title: "Payment Journeys in Conversations | WALOOP",
      description: "Move from conversation to payment order, gateway, status, confirmation and automation with WALOOP.",
    },
    hero: {
      title: "From Conversation to Confirmation",
      description: "Connect customer engagement with payment-related business actions — orders, gateways, status and follow-up.",
    },
    persona: { role: "Business Owner", need: "Needs a clearer overview of customer operations and automation." },
    flow: {
      title: "Payment journey",
      caption:
        "A conversation leads to a selection and a payment order. The order goes through the gateway, its status is checked, a confirmation is sent and automation continues the journey.",
      steps: ["Conversation", "Selection", "Payment Order", "Gateway", "Status", "Confirmation", "Automation"],
    },
    steps: [
      { title: "Select", description: "Customers choose products or services in the conversation or a Mini-App." },
      { title: "Order", description: "A payment order is created and the request is sent." },
      { title: "Pay", description: "The customer pays through a configured payment gateway." },
      { title: "Confirm", description: "Payment status drives confirmations, reminders and CRM updates." },
    ],
    uses: ["payments", "whatsapp-mini-apps", "automations", "crm"],
    outcomes: ["Fewer drop-offs", "Automatic reminders", "Clear payment status", "Connected records"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

/** §32 Solution diagram. */
export const solutionsFlow: Flow = {
  title: "WALOOP solutions",
  caption:
    "Lead generation, sales and marketing all feed customer engagement, which continues into customer support, business automation and payment journeys.",
  steps: [
    "WALOOP Solutions",
    { branches: [
      { label: "Lead Generation", steps: [] },
      { label: "Sales", steps: [] },
      { label: "Marketing", steps: [] },
    ] },
    "Customer Engagement",
    "Customer Support",
    "Business Automation",
    "Payment Journey",
  ],
};

/** §51 Customer personas. */
export const personas = [
  { icon: "Briefcase", role: "Business Owner", need: "Needs a clearer overview of customer operations and automation." },
  { icon: "Megaphone", role: "Marketing Team", need: "Needs campaigns, segmentation, communication, and engagement workflows." },
  { icon: "TrendingUp", role: "Sales Team", need: "Needs lead capture, qualification, customer context, and follow-up." },
  { icon: "Headset", role: "Customer Support Team", need: "Needs conversations, routing, canned replies, and customer history." },
  { icon: "Cog", role: "Operations Team", need: "Needs workflows, automation, data, and process visibility." },
  { icon: "Code2", role: "Technical / Product Team", need: "Needs integrations, APIs, webhooks, authentication, and structured data capabilities where supported." },
];
