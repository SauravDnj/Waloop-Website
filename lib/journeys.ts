// Cross-platform journeys and diagrams (spec §4, §25–30, §45, §47, §50, §52–56, §69–71, §80).

import type { Flow } from "@/lib/flows";

/** §4 / §77 Global website story — the eight stages. */
export const journeyStages = [
  { stage: "Connect", description: "Connect customers through supported communication channels." },
  { stage: "Capture", description: "Capture customer information, conversations, preferences, and business data." },
  { stage: "Understand", description: "Use CRM, segments, fields, lead sources, and conversation history to understand the customer journey." },
  { stage: "Engage", description: "Use conversations, campaigns, chatbots, and personalized experiences." },
  { stage: "Automate", description: "Use workflows, triggers, data, integrations, and automated actions." },
  { stage: "Convert", description: "Guide customers toward a requested action, enquiry, booking, order, or payment." },
  { stage: "Support", description: "Route conversations to the appropriate team or department." },
  { stage: "Analyze", description: "Review available activity and conversion information." },
];

/** §5 Hero graphic — the connected business journey. */
export const heroJourney = [
  "Customer",
  "WhatsApp / Instagram / Facebook / RCS",
  "Conversation",
  "Chatbot / Human Agent",
  "CRM",
  "Automation",
  "Mini-App / Dynamic Experience",
  "Payment / Business Action",
  "Follow-up",
  "Analytics",
];

/** §25 / §71 Master customer journey. */
export const masterJourney: Flow = {
  title: "The complete WALOOP customer journey",
  caption:
    "A customer reaches the business on WhatsApp or social channels. A bot or human handles the conversation, the CRM organizes contact and data, and automation runs the rules. The journey continues into a Mini-App, a payment journey or a dynamic experience, supported by AI, then follow-up and analytics.",
  steps: [
    "Customer",
    "Communication — WhatsApp / Social / RCS",
    "Conversation — Bot / Human",
    "CRM — Contact / Data",
    "Automation — Rules / Workflow",
    { branches: [
      { label: "Mini-App / Flow", steps: [] },
      { label: "Payment Journey", steps: [] },
      { label: "Dynamic Experience", steps: [] },
    ] },
    "AI",
    "Follow-up",
    "Analytics",
  ],
};

/** §47 "From First Message to Meaningful Action". */
export const connectedJourney = [
  "Message",
  "Conversation",
  "Customer Data",
  "CRM",
  "Bot / Human",
  "Automation",
  "Action",
  "Payment",
  "Follow-up",
  "Analytics",
];

/** §50 Interactive customer journey — Message → CRM → Bot → Automation → Payment → AI. */
export const interactiveJourney = [
  {
    key: "message",
    label: "Message",
    icon: "MessageCircle",
    title: "It starts with a message",
    description:
      "A customer messages your business on WhatsApp, Instagram, Facebook or RCS. The conversation enters WALOOP through a supported channel and lands in one shared workspace.",
    points: ["Supported channels in one hub", "Shared Live Chat for teams", "Conversation history kept"],
  },
  {
    key: "crm",
    label: "CRM",
    icon: "Contact",
    title: "The customer is recognized",
    description:
      "WALOOP identifies the contact and connects the conversation to their CRM record — fields, data, segment and history — so every reply has context.",
    points: ["Contact identified", "Super Fields & Data Stores", "Segments for targeting"],
  },
  {
    key: "bot",
    label: "Bot",
    icon: "Bot",
    title: "A chatbot guides the conversation",
    description:
      "A visual chatbot welcomes the customer, offers choices, asks questions and captures answers — then hands over to a human agent when needed.",
    points: ["Buttons, questions, conditions", "Bot fields capture answers", "Human handoff"],
  },
  {
    key: "automation",
    label: "Automation",
    icon: "Workflow",
    title: "Workflows take the next step",
    description:
      "The event triggers a workflow. Conditions check the data and actions run — assign a department, notify the team, update the CRM, schedule a follow-up.",
    points: ["Triggers & conditions", "Actions & notifications", "App Authentications"],
  },
  {
    key: "payment",
    label: "Payment",
    icon: "CreditCard",
    title: "The customer completes an action",
    description:
      "An interactive Mini-App collects the details, a payment order is created and sent through a configured gateway, and the payment status drives confirmation or a reminder.",
    points: ["WhatsApp Mini-Apps", "Payment orders & gateways", "Confirmation or reminder"],
  },
  {
    key: "ai",
    label: "AI",
    icon: "BrainCircuit",
    title: "AI helps with knowledge-based answers",
    description:
      "AI trained on your business content answers supported questions about products, services and policies — and routes to your team when a human is needed.",
    points: ["Trained on your content", "Answers supported questions", "Human team when needed"],
  },
];

/** §26 Conversation-to-platform graphic. */
export const conversationToPlatform: Flow = {
  title: "What happens behind the conversation",
  caption:
    "The customer's message reaches a chatbot, their choice becomes lead data in the CRM, and the sales team takes it to a demo or other action.",
  steps: ["Customer Message", "Chatbot", "Customer Choice", "Lead Data", "CRM", "Sales Team", "Demo / Action"],
};

/** §45 Feature relationship map. */
export const relationshipMap: Flow = {
  title: "How WALOOP capabilities connect",
  caption:
    "Channels feed the CRM and chatbots, which work together. CRM segments drive campaigns and bot data drives automation; both lead into Mini-Apps, payments, AI, follow-up and analytics.",
  steps: [
    "Channels",
    { branches: [
      { label: "CRM", steps: ["Segments", "Campaigns"] },
      { label: "Chatbots", steps: ["Bot Data", "Automation"] },
    ] },
    "Mini-Apps",
    "Payments",
    "AI",
    "Follow-up",
    "Analytics",
  ],
};

/** §43 Dashboard graphic. */
export const dashboardFlow: Flow = {
  title: "WALOOP dashboard",
  caption:
    "The dashboard is the control center: channels, CRM and chatbots feed automations, which connect to payments and AI and report into analytics.",
  steps: [
    "WALOOP Dashboard",
    { branches: [
      { label: "Channels", steps: [] },
      { label: "CRM", steps: [] },
      { label: "Chatbots", steps: [] },
    ] },
    "Automations",
    "Payments / AI",
    "Analytics",
  ],
};

/** §27–30, §52–56 — complete use-case journeys. */
export const useCaseFlows: (Flow & { slug: string; icon: string })[] = [
  {
    slug: "lead-generation",
    icon: "Magnet",
    title: "Lead generation",
    caption:
      "A customer sees a campaign and sends a message. A welcome bot asks about product interest and qualification questions, data is captured into a CRM contact and lead segment, and the sales department follows up with a demo.",
    steps: ["Campaign", "WhatsApp", "Welcome Bot", "Product Interest", "Qualification Questions", "Customer Data Captured", "CRM Contact", "Lead Segment", "Sales Department", "Human Follow-up", "Demo"],
  },
  {
    slug: "customer-support",
    icon: "Headset",
    title: "Customer support",
    caption:
      "A support bot identifies the request and offers an FAQ or automated answer. Resolved conversations close; others go to a department and a human agent, with the resolution saved in CRM history.",
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
  {
    slug: "e-commerce",
    icon: "ShoppingBag",
    title: "E-commerce",
    caption:
      "A campaign brings a customer to WhatsApp for product discovery in an interactive experience. Their selection is recorded in the CRM, they pay, receive a confirmation and get order follow-up.",
    conceptual: true,
    steps: ["Campaign", "Customer", "WhatsApp", "Product Discovery", "Interactive Experience", "Product Selection", "CRM", "Payment", "Confirmation", "Order Follow-up"],
  },
  {
    slug: "appointment",
    icon: "CalendarCheck",
    title: "Appointment journey",
    caption:
      "A customer messages on WhatsApp, the chatbot asks for the service, an interactive form collects a preferred option, the CRM is updated, a confirmation is sent and a reminder automation follows.",
    conceptual: true,
    steps: ["Customer", "WhatsApp", "Chatbot", "Select Service", "Interactive Form", "Select Available Option", "CRM", "Confirmation", "Reminder Automation"],
  },
  {
    slug: "marketing-campaign",
    icon: "Megaphone",
    title: "Marketing campaign",
    caption:
      "An audience becomes a segment and receives a campaign on WhatsApp or a supported channel. Responses continue in a chatbot, update the CRM and trigger follow-up.",
    steps: ["Audience", "Segment", "Campaign", "WhatsApp / Supported Channel", "Customer Response", "Chatbot", "CRM", "Follow-up"],
  },
  {
    slug: "sales",
    icon: "TrendingUp",
    title: "Sales",
    caption: "Lead source and enquiry flow into a qualifying chatbot, the CRM and a segment, then the sales team follows up.",
    steps: ["Lead Source", "Customer Enquiry", "Chatbot", "Qualification", "CRM", "Segment", "Sales Team", "Follow-up"],
  },
  {
    slug: "payment",
    icon: "CreditCard",
    title: "Payment",
    caption: "A conversation leads to a selection and payment order, processed by the gateway; the status triggers confirmation and automation.",
    steps: ["Conversation", "Selection", "Payment Order", "Gateway", "Status", "Confirmation", "Automation"],
  },
  {
    slug: "ai-support",
    icon: "BrainCircuit",
    title: "AI customer support",
    caption: "Business content becomes AI knowledge that answers the customer's question, with a human handoff if required.",
    steps: ["Business Content", "AI Knowledge", "Customer Question", "AI Response", "Customer", "Human Handoff if required"],
  },
];

/** §69 Product demo flow — one continuous customer journey. */
export const demoFlow = [
  "Customer sends WhatsApp message.",
  "Chatbot responds.",
  "Customer selects an option.",
  "Customer information is captured.",
  "CRM contact is created or updated.",
  "Customer is segmented.",
  "Automation starts.",
  "Sales/support department receives the request.",
  "Interactive experience or payment journey is presented.",
  "Follow-up is triggered.",
  "Analytics show activity.",
];

/** §70 Full website storyboard. */
export const storyboard = [
  { scene: "Customer", text: "A customer sends a message." },
  { scene: "Channel", text: "The message enters WALOOP through a supported channel." },
  { scene: "Conversation", text: "A chatbot or team member handles the interaction." },
  { scene: "CRM", text: "Customer information is organized." },
  { scene: "Automation", text: "A workflow responds to the event." },
  { scene: "Interactive Experience", text: "The customer completes a structured action." },
  { scene: "Payment", text: "If applicable, the customer moves through a payment-related journey." },
  { scene: "AI", text: "AI can provide supported knowledge-based assistance." },
  { scene: "Team", text: "The appropriate team receives the conversation when human involvement is required." },
  { scene: "Analytics", text: "The business can review available activity." },
];
