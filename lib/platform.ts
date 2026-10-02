// Platform content — the 10 WALOOP platform areas (spec §9–24, §41–45, §63, §73, §76).
// Every area follows the same page template: hero → problem → solution → features →
// example journey → diagram → connections → use cases → FAQ → CTA.

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

export type ContentGroup = {
  eyebrow: string;
  heading: string;
  description?: string;
  items: { icon?: string; title: string; description?: string; list?: string[] }[];
  /** Optional diagram rendered beside this group. */
  flow?: Flow;
  note?: string;
};

export type PlatformArea = {
  slug: PlatformSlug;
  name: string;
  /** One-line description used in menus, cards and the footer. */
  short: string;
  icon: string;
  visual: PlatformVisual;
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; description: string; bullets: string[] };
  /** §76: What is it? */
  whatIsIt: string;
  problem: { heading: string; body: string[] };
  solution: { heading: string; body: string[] };
  features: { heading: string; description: string; items: Feature[] };
  /** Primary diagram — the realistic journey for this area. */
  flow: Flow;
  extraFlows?: Flow[];
  groups?: ContentGroup[];
  connections: { slug: PlatformSlug; how: string }[];
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
    short: "WhatsApp, Instagram, Facebook and RCS in one connected environment.",
    icon: "MessagesSquare",
    visual: "channels",
    seo: {
      title: "WALOOP Channels | WhatsApp, Instagram, Facebook & RCS in One Platform",
      description:
        "Connect supported communication channels — WhatsApp, Instagram, Facebook and RCS — and manage customer interactions from one centralized WALOOP environment.",
    },
    hero: {
      eyebrow: "Platform · Channels",
      title: "One Platform. Every Conversation.",
      description:
        "Connect supported communication channels and manage customer interactions through a centralized WALOOP environment.",
      bullets: ["WhatsApp", "Instagram", "Facebook", "RCS"],
    },
    whatIsIt:
      "Channels is where customer conversations enter WALOOP — supported WhatsApp, Instagram, Facebook and RCS interactions brought together in one workspace.",
    problem: {
      heading: "Conversations scattered across apps lose their context",
      body: [
        "Customers reach businesses on the channel that suits them. When each channel lives in its own app, teams switch between tools and the history behind a conversation gets lost.",
        "That makes it harder to respond consistently, hand conversations between team members, or follow up at the right time.",
      ],
    },
    solution: {
      heading: "A single channel hub connected to the rest of WALOOP",
      body: [
        "WALOOP brings supported channels into one environment, so every conversation can connect to a CRM record, a chatbot journey, an automation or a follow-up.",
        "Teams work from one place, and the customer's context travels with the conversation.",
      ],
    },
    features: {
      heading: "Channel categories",
      description: "Each supported channel feeds the same connected workspace.",
      items: [
        {
          icon: "MessageCircle",
          title: "WhatsApp",
          description:
            "Use WhatsApp for customer conversations, notifications, campaigns, chatbot journeys, interactive experiences, and supported business workflows.",
        },
        {
          icon: "Instagram",
          title: "Instagram",
          description: "Bring supported Instagram customer interactions into a broader engagement workflow.",
        },
        {
          icon: "Facebook",
          title: "Facebook",
          description: "Manage supported Facebook conversations alongside other customer communication channels.",
        },
        {
          icon: "MessageSquareText",
          title: "RCS",
          description: "Use supported RCS capabilities to create richer messaging experiences.",
        },
        {
          icon: "LayoutGrid",
          title: "All Channels",
          description:
            "Provide a unified view of supported communication channels so teams can work from one environment.",
        },
      ],
    },
    flow: {
      title: "Channel hub",
      caption:
        "Messages from WhatsApp, Instagram, Facebook and RCS enter one WALOOP channel hub, then continue into CRM, chatbot journeys and automation.",
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
    groups: [
      {
        eyebrow: "Channel value",
        heading: "Why a connected channel hub matters",
        items: [
          { icon: "Inbox", title: "Centralized communication" },
          { icon: "History", title: "Consistent customer context" },
          { icon: "Users", title: "Easier team handling" },
          { icon: "Bot", title: "Connected chatbot journeys" },
          { icon: "Contact", title: "Connected CRM records" },
          { icon: "RefreshCw", title: "Automated follow-up" },
          { icon: "Layers", title: "Cross-channel organization" },
        ],
      },
    ],
    connections: [
      { slug: "crm", how: "Every conversation can be linked to a contact record and its history." },
      { slug: "chatbots", how: "Start visual chatbot journeys on supported channels." },
      { slug: "automations", how: "Trigger follow-up workflows from channel activity." },
      { slug: "analytics", how: "Review channel and conversation activity." },
    ],
    useCases: ["Customer conversations", "Notifications", "Campaigns", "Chatbot journeys", "Interactive experiences", "Support"],
    faqs: [
      {
        question: "Which channels are supported?",
        answer:
          "WALOOP identifies WhatsApp, Instagram, Facebook, and RCS as supported channel categories. The exact capabilities available for each channel depend on the active product configuration.",
      },
      {
        question: "Is WALOOP only for WhatsApp?",
        answer:
          "No. WhatsApp is an important supported channel, but WALOOP is a broader customer engagement platform with additional supported channels and business capabilities.",
      },
    ],
    cta: {
      heading: "Your Customers Are Already Messaging. Make Every Conversation Count.",
      description: "Connect supported channels and create structured customer experiences.",
      label: "Connect Your Channels",
    },
  },

  // ───────────────────────────── CRM (§10)
  {
    slug: "crm",
    name: "CRM",
    short: "Contacts, conversations, segments, campaigns and boards — built around conversations.",
    icon: "Contact",
    visual: "crm",
    seo: {
      title: "WALOOP CRM | Conversations, Contacts, Campaigns & Customer Management",
      description:
        "Manage customer conversations, contacts, segments, campaigns, data, and team workflows with WALOOP CRM.",
    },
    hero: {
      eyebrow: "Platform · CRM",
      title: "A CRM Built Around Conversations",
      description:
        "WALOOP CRM connects customer conversations with contacts, data, segments, campaigns, team workflows, and follow-up actions.",
      bullets: ["Live Chat", "Contacts & Segments", "Bulk Campaigns", "Boards"],
    },
    whatIsIt:
      "WALOOP CRM is a conversational CRM — the place where a business keeps context around every customer interaction and the actions that follow it.",
    problem: {
      heading: "Customer records drift away from the real conversation",
      body: [
        "Traditional customer records can become disconnected from the actual customer conversation.",
        "Sales, support and marketing then work from partial information, and follow-ups depend on someone remembering what was said.",
      ],
    },
    solution: {
      heading: "Keep conversations and customer information connected",
      body: [
        "In WALOOP, the conversation, the contact, its custom fields, its segment and the next action live together.",
        "Teams can see the history, organize work on boards, reach the right audience with campaigns and automate follow-up from CRM events.",
      ],
    },
    features: {
      heading: "CRM capabilities",
      description: "Everything needed to organize customer operations around conversations.",
      items: [
        { icon: "MessagesSquare", title: "Live Chat", description: "Provide a shared workspace for teams to handle customer conversations." },
        { icon: "Radio", title: "Channel", description: "Organize conversations and connected channel activity." },
        { icon: "Contact", title: "Contacts", description: "Maintain customer records and relevant customer attributes." },
        { icon: "KanbanSquare", title: "Boards", description: "Organize sales, service, follow-up, or operational processes into structured stages." },
        { icon: "Database", title: "Data Stores", description: "Maintain reusable structured information for customer and business workflows." },
        { icon: "TextCursorInput", title: "Super Field", description: "Capture custom information required by specific business processes." },
        { icon: "Filter", title: "Segments", description: "Group customers based on available customer, engagement, or business data." },
        { icon: "Megaphone", title: "Bulk Campaign", description: "Send structured campaigns to appropriate audiences through supported channels and configurations." },
        { icon: "MessageSquareQuote", title: "Canned Replies", description: "Create reusable responses for common questions and customer interactions." },
        { icon: "Zap", title: "CRM Triggers", description: "Create actions based on supported CRM events and customer activity." },
        { icon: "Upload", title: "Imports", description: "Bring existing customer information into WALOOP." },
        { icon: "Download", title: "Exports", description: "Export relevant data for reporting, analysis, or other supported workflows." },
      ],
    },
    flow: {
      title: "CRM journey",
      caption:
        "A customer message identifies the contact, adds to its conversation history and CRM record, enriches fields and data, places the customer in a segment, and drives campaign, sales or support follow-up.",
      steps: [
        "Customer Message",
        "Contact Identified",
        "Conversation History",
        "CRM Record",
        "Fields / Data",
        "Segment",
        "Campaign / Sales / Support",
        "Follow-up",
      ],
    },
    connections: [
      { slug: "channels", how: "Conversations from supported channels land on the contact record." },
      { slug: "chatbots", how: "Bot answers and bot fields update customer data." },
      { slug: "automations", how: "CRM triggers start workflows from customer activity." },
      { slug: "payments", how: "Payment status can update the customer's record." },
    ],
    useCases: ["Lead management", "Sales pipelines", "Support history", "Audience segmentation", "Bulk campaigns", "Team follow-up"],
    faqs: [
      {
        question: "Can I use WALOOP as a CRM?",
        answer:
          "WALOOP includes CRM capabilities such as contacts, conversations, boards, data stores, segments, campaigns, canned replies, triggers, imports, and exports.",
      },
      {
        question: "Can WALOOP collect customer information?",
        answer:
          "Supported chatbot, CRM, Mini-App, and workflow features can be used to capture structured information.",
      },
    ],
    cta: {
      heading: "Keep Every Conversation Connected to the Customer",
      description: "Organize contacts, conversations, segments and campaigns in one conversational CRM.",
      label: "Explore CRM",
    },
  },

  // ───────────────────────────── Chatbots (§11–12)
  {
    slug: "chatbots",
    name: "Chatbots",
    short: "Design multi-step conversation journeys with a visual flow builder.",
    icon: "Bot",
    visual: "chatbot",
    seo: {
      title: "WALOOP Chatbot Builder | Build Visual Multi-Channel Chatbots",
      description:
        "Build structured chatbot journeys using WALOOP's visual flow builder, bot fields, data, templates, and supported analytics.",
    },
    hero: {
      eyebrow: "Platform · Chatbots",
      title: "Build Conversations Without Building Every Interaction From Code",
      description: "Create structured multi-step customer conversations using a visual flow builder.",
      bullets: ["Visual Flow Builder", "Buttons & Conditions", "Bot Fields", "Human Handoff"],
    },
    whatIsIt:
      "The WALOOP Chatbot Builder is a visual flow builder for designing conversation journeys as connected steps — triggers, messages, questions, choices and conditions.",
    problem: {
      heading: "Repetitive questions take time away from real conversations",
      body: [
        "Many customer conversations follow the same pattern: a greeting, a few questions, a choice, and a next step.",
        "Handling each one manually is slow, and hand-coding every interaction is hard for business teams to maintain.",
      ],
    },
    solution: {
      heading: "Design the conversation visually, connect it to your data",
      body: [
        "Build journeys as connected visual steps. Ask questions, offer buttons, route with conditions and capture answers into bot fields and data stores.",
        "When a request needs a person, route it to the right department and human agent.",
      ],
    },
    features: {
      heading: "Core capabilities",
      description: "The building blocks of a structured conversation.",
      items: [
        { icon: "Workflow", title: "Visual Flow Builder", description: "Design conversation journeys as connected visual steps." },
        { icon: "Zap", title: "Triggers", description: "Start a conversation based on supported customer or business events." },
        { icon: "MessageCircle", title: "Messages", description: "Send appropriate responses throughout the journey." },
        { icon: "CircleHelp", title: "Questions", description: "Collect customer information." },
        { icon: "MousePointerClick", title: "Buttons and Choices", description: "Allow customers to select predefined options." },
        { icon: "GitBranch", title: "Conditions", description: "Route customers to different paths based on available information." },
        { icon: "Database", title: "Data", description: "Read, capture, and use relevant information within the supported flow." },
        { icon: "TextCursorInput", title: "Bot Fields", description: "Capture information specific to the conversation." },
        { icon: "HardDrive", title: "Bot Data Stores", description: "Use structured information inside chatbot journeys." },
        { icon: "Copy", title: "Templates", description: "Reuse common conversation structures." },
        { icon: "BarChart3", title: "Analytics", description: "Review available chatbot activity and interaction information." },
      ],
    },
    flow: {
      title: "Example bot",
      caption:
        "The bot welcomes the customer and asks what they need. Products, Pricing and Support each open their own path; a Demo request captures the lead, creates a CRM record and triggers sales follow-up.",
      steps: [
        "Start",
        "Welcome Message",
        "“What do you need?”",
        { branches: [
          { label: "Products", steps: ["Product Menu"] },
          { label: "Pricing", steps: ["Pricing Information"] },
          { label: "Support", steps: ["Support Flow"] },
          { label: "Demo", steps: ["Lead Capture", "CRM Record", "Sales Follow-up"] },
        ] },
      ],
    },
    extraFlows: [
      {
        title: "Simple bot",
        caption: "A trigger starts the bot, which welcomes the customer, asks a question, records the choice as customer data, updates the CRM and responds.",
        steps: ["Trigger", "Welcome", "Question", "Choice", "Customer Data", "CRM Update", "Response"],
      },
      {
        title: "Branching bot",
        caption: "After a welcome the customer selects a need — Sales goes to the CRM, Support opens a ticket, Pricing shares an offer.",
        steps: [
          "Customer",
          "Welcome",
          "Select Need",
          { branches: [
            { label: "Sales", steps: ["CRM"] },
            { label: "Support", steps: ["Ticket"] },
            { label: "Pricing", steps: ["Offer"] },
          ] },
        ],
      },
      {
        title: "Human handoff",
        caption: "When a customer asks a complex question, a condition routes the conversation to the right department and a human agent resolves it.",
        steps: ["Bot", "Customer asks complex question", "Condition", "Department Routing", "Human Agent", "Resolution"],
      },
    ],
    connections: [
      { slug: "channels", how: "Run bot journeys on supported channels." },
      { slug: "crm", how: "Lead capture creates or updates CRM records." },
      { slug: "automations", how: "Bot answers can start business workflows." },
      { slug: "ai", how: "Add knowledge-based AI answers where supported." },
    ],
    useCases: [
      "Lead qualification",
      "Product discovery",
      "FAQs",
      "Customer support",
      "Appointment requests",
      "Demo requests",
      "Order information",
      "Feedback",
      "Surveys",
      "Campaign journeys",
      "Sales assistance",
    ],
    faqs: [
      { question: "Can I build chatbots?", answer: "Yes. WALOOP includes a visual chatbot/flow builder for creating supported conversation journeys." },
      {
        question: "Do I need to code to create a chatbot?",
        answer:
          "The visual builder is designed to let business teams create structured conversation flows without manually coding every interaction.",
      },
    ],
    cta: {
      heading: "Build Your First Conversation Journey",
      description: "Welcome, qualify and route customers with a visual chatbot builder.",
      label: "Build a Bot",
    },
  },

  // ───────────────────────────── Automations (§13)
  {
    slug: "automations",
    name: "Automations",
    short: "Visual workflows that connect triggers, conditions, data and actions.",
    icon: "Workflow",
    visual: "automation",
    seo: {
      title: "WALOOP Automation | Visual Workflow & Business Process Automation",
      description: "Create visual workflows that connect triggers, conditions, data, actions, and supported integrations.",
    },
    hero: {
      eyebrow: "Platform · Automations",
      title: "Automate Workflows. Eliminate Repetitive Tasks.",
      description:
        "Build visual workflows that connect triggers, conditions, data, communication, applications, and business actions.",
      bullets: ["Drag-and-Drop Builder", "Triggers & Conditions", "App Authentications", "Automation Analytics"],
    },
    whatIsIt:
      "WALOOP Automations is a visual workflow builder: when a supported event happens, a workflow checks conditions and runs actions — messages, data updates, records and follow-ups.",
    problem: {
      heading: "Manual follow-up does not scale",
      body: [
        "Assigning leads, sending reminders, updating records and notifying teams are repetitive tasks that are easy to delay or forget.",
        "Spread across tools, these steps are hard to see and harder to keep consistent.",
      ],
    },
    solution: {
      heading: "Turn repetitive processes into visual workflows",
      body: [
        "Define the trigger, add conditions on customer or business data, and choose the actions. WALOOP runs the workflow every time the event occurs.",
        "Connect supported external applications through App Authentications and review activity in Automation Analytics.",
      ],
    },
    features: {
      heading: "Core capabilities",
      description: "Everything needed to model a business process as a workflow.",
      items: [
        { icon: "Workflow", title: "Workflow Builder", description: "Create visual business workflows." },
        { icon: "Zap", title: "Triggers", description: "Start a workflow when a supported event occurs." },
        { icon: "GitBranch", title: "Conditions", description: "Make decisions based on customer or business data." },
        { icon: "Play", title: "Actions", description: "Send messages, update data, create records, trigger supported operations, or continue the workflow." },
        { icon: "Database", title: "Data Stores", description: "Store information needed by the workflow." },
        { icon: "Copy", title: "Templates", description: "Reuse common automation patterns." },
        { icon: "KeyRound", title: "App Authentications", description: "Connect supported external applications that require authentication." },
        { icon: "BarChart3", title: "Automation Analytics", description: "Review workflow activity and available performance information." },
      ],
    },
    flow: {
      title: "How a workflow runs",
      caption:
        "An event fires a trigger. A condition checks the data: if yes, action A sends a message and updates the CRM; if no, action B schedules a follow-up.",
      steps: [
        "Event",
        "Trigger",
        "Condition",
        { branches: [
          { label: "Yes", steps: ["Action A", "Message", "CRM Update"] },
          { label: "No", steps: ["Action B", "Follow-up"] },
        ] },
      ],
    },
    extraFlows: [
      {
        title: "Example — Lead automation",
        caption: "A new lead is captured and checked. Qualified leads are assigned to sales, the team is notified and the CRM updated; others enter a nurture follow-up.",
        steps: [
          "New Lead",
          "Capture Information",
          "Check Lead Data",
          "Qualified?",
          { branches: [
            { label: "Yes", steps: ["Assign Sales", "Notify Team", "CRM Update"] },
            { label: "No", steps: ["Nurture", "Follow-up"] },
          ] },
        ],
      },
      {
        title: "Example — Payment automation",
        caption: "When a payment order is created, its status decides the next step: successful payments get a confirmation and CRM update; pending ones get a reminder and follow-up.",
        steps: [
          "Payment Order Created",
          "Payment Status",
          { branches: [
            { label: "Success", steps: ["Confirmation", "CRM Update"] },
            { label: "Pending", steps: ["Reminder", "Follow-up"] },
          ] },
        ],
      },
    ],
    connections: [
      { slug: "crm", how: "CRM triggers start workflows; actions update records." },
      { slug: "chatbots", how: "Continue a bot conversation with automated actions." },
      { slug: "payments", how: "Use payment events as workflow triggers." },
      { slug: "analytics", how: "Review workflow, trigger and action activity." },
    ],
    useCases: ["Lead assignment", "Team notifications", "Reminders", "Payment follow-up", "Data updates", "Nurture sequences"],
    faqs: [
      {
        question: "Can I automate business processes?",
        answer:
          "Yes. WALOOP includes a visual automation/workflow builder for supported triggers, conditions, actions, data, and integrations.",
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
    short: "Interactive WhatsApp experiences for forms, selections and structured actions.",
    icon: "Smartphone",
    visual: "miniapp",
    seo: {
      title: "WALOOP WhatsApp Mini-Apps | Build Interactive WhatsApp Experiences",
      description:
        "Create interactive WhatsApp journeys for supported forms, selections, data collection, and business actions.",
    },
    hero: {
      eyebrow: "Platform · WhatsApp Mini-Apps",
      title: "Turn WhatsApp Into an Interactive Business Experience",
      description: "Create structured interactive WhatsApp experiences for supported customer journeys.",
      bullets: ["Forms", "Selections", "Data Collection", "Confirmations"],
    },
    whatIsIt:
      "WhatsApp Mini-Apps (WhatsApp Flows) are structured, interactive screens inside WhatsApp — for selecting options, filling forms and confirming details.",
    problem: {
      heading: "Long free-text exchanges are hard to complete",
      body: [
        "A customer may need to select an option, submit information, choose a service, provide details, or complete a structured action.",
        "Doing that through a long sequence of free-text messages is slow for the customer and messy for the business.",
      ],
    },
    solution: {
      heading: "Structured interactive experiences inside the chat",
      body: [
        "Interactive experiences make those journeys more organized. Customers open a Mini-App, choose, fill in and confirm — and the result updates WALOOP.",
      ],
    },
    features: {
      heading: "What you can build",
      description: "Example use cases for supported interactive journeys.",
      items: [
        { icon: "ShoppingBag", title: "Product selection", description: "Let customers pick products or services from a structured list." },
        { icon: "ClipboardList", title: "Lead forms", description: "Collect enquiry details in a few organized steps." },
        { icon: "UserPlus", title: "Registration", description: "Register customers for programmes, events or services." },
        { icon: "CalendarCheck", title: "Appointment requests", description: "Capture preferred services and options for an appointment request." },
        { icon: "Wrench", title: "Service requests", description: "Collect structured details about a service need." },
        { icon: "ListChecks", title: "Surveys", description: "Gather feedback and preferences." },
        { icon: "ShoppingCart", title: "Order forms", description: "Collect order details in a structured format." },
        { icon: "Database", title: "Data collection", description: "Capture the fields a business process needs." },
        { icon: "CreditCard", title: "Payment journeys", description: "Lead into supported payment-related actions." },
        { icon: "FileText", title: "Applications", description: "Run structured application journeys." },
        { icon: "SlidersHorizontal", title: "Preference collection", description: "Record customer preferences for later personalization." },
      ],
    },
    flow: {
      title: "Example flow",
      caption:
        "The customer receives a message, opens the interactive experience, selects a product or service, provides information and confirms. The business action runs, the CRM is updated and a confirmation is sent.",
      steps: [
        "Customer receives message",
        "Opens interactive experience",
        "Selects product/service",
        "Provides information",
        "Confirms details",
        "Business action",
        "CRM updated",
        "Confirmation",
      ],
    },
    connections: [
      { slug: "channels", how: "Mini-Apps run inside supported WhatsApp conversations." },
      { slug: "crm", how: "Submitted details update the customer record." },
      { slug: "automations", how: "A completed Mini-App can start a workflow." },
      { slug: "payments", how: "Continue into a supported payment journey." },
    ],
    useCases: ["Product selection", "Lead forms", "Registration", "Appointment requests", "Surveys", "Order forms"],
    faqs: [
      {
        question: "Can I create WhatsApp interactive experiences?",
        answer: "WALOOP includes WhatsApp Mini-App / Flow capabilities for supported interactive journeys.",
      },
    ],
    cta: {
      heading: "Make WhatsApp Interactive",
      description: "Create forms, selections and confirmations customers complete inside the chat.",
      label: "Build a Mini-App",
    },
  },

  // ───────────────────────────── Payments (§15)
  {
    slug: "payments",
    name: "Payments",
    short: "Payment orders, gateways and payment automation connected to conversations.",
    icon: "CreditCard",
    visual: "payments",
    seo: {
      title: "WALOOP Payments | Payment Orders, Gateways & Automation",
      description:
        "Connect customer conversations with payment orders, supported gateways, and payment-related automation.",
    },
    hero: {
      eyebrow: "Platform · Payments",
      title: "Connect Conversations With Payments",
      description: "Move from customer conversation to payment-related action through a connected journey.",
      bullets: ["Payment Orders", "Payment Gateways", "Payment Automations"],
    },
    whatIsIt:
      "WALOOP Payments connects a customer conversation to a payment order, a supported payment gateway and the automation that follows the payment status.",
    problem: {
      heading: "The conversation stops where the payment starts",
      body: [
        "When payment happens in a separate tool, it is harder to know who paid, who needs a reminder, and what should happen next.",
      ],
    },
    solution: {
      heading: "One journey from selection to confirmation",
      body: [
        "Create a payment order from the conversation, send the request through a configured gateway, and let the payment status drive confirmations, reminders and CRM updates.",
      ],
    },
    features: {
      heading: "Payment capabilities",
      description: "Connect payment activity to the rest of the customer journey.",
      items: [
        { icon: "Receipt", title: "Payment Orders", description: "Create and manage payment orders." },
        { icon: "Landmark", title: "Payment Gateways", description: "Configure supported payment gateway connections." },
        { icon: "Workflow", title: "Payment Automations", description: "Use supported payment events as part of business workflows." },
      ],
    },
    flow: {
      title: "Payment journey",
      caption:
        "From a conversation the customer selects a product or service, an order is created and a payment request sent through the gateway. Paid orders are confirmed and recorded in the CRM; pending ones receive a reminder and follow-up.",
      steps: [
        "Customer Conversation",
        "Product / Service Selection",
        "Order Created",
        "Payment Request",
        "Payment Gateway",
        "Payment Status",
        { branches: [
          { label: "Paid", steps: ["Confirm", "CRM"] },
          { label: "Pending", steps: ["Reminder", "Follow-up"] },
        ] },
      ],
    },
    connections: [
      { slug: "whatsapp-mini-apps", how: "Collect selections and order details before payment." },
      { slug: "automations", how: "Payment events trigger confirmations and reminders." },
      { slug: "crm", how: "Payment status updates the customer record." },
      { slug: "analytics", how: "Review payment order and status activity." },
    ],
    useCases: ["Order payments", "Service payments", "Payment reminders", "Confirmations", "Payment follow-up"],
    faqs: [
      {
        question: "Can I connect payments?",
        answer: "WALOOP includes payment orders, payment gateways, and payment automation capabilities for supported configurations.",
      },
      {
        question: "Are payment gateway charges included?",
        answer:
          "Payment gateway charges are separate from the WALOOP subscription. Available gateways depend on your configuration.",
      },
    ],
    cta: {
      heading: "Close the Loop From Conversation to Payment",
      description: "Connect payment orders, gateways and automation to your customer journeys.",
      label: "Explore Payments",
    },
    note: "Available payment gateways depend on your account configuration. Gateway charges are billed separately.",
  },

  // ───────────────────────────── Dynamic Experiences (§16)
  {
    slug: "dynamic-experiences",
    name: "Dynamic Experiences",
    short: "Personalized images and PDFs generated from customer and business data.",
    icon: "FileImage",
    visual: "dynamic",
    seo: {
      title: "WALOOP Dynamic Experiences | Personalized Images & PDFs From Your Data",
      description:
        "Turn business and customer data into personalized image and PDF experiences — offers, product cards, quotations, statements and more.",
    },
    hero: {
      eyebrow: "Platform · Dynamic Experiences",
      title: "Create Personalized Experiences From Your Data",
      description: "Turn business and customer data into dynamic visual experiences.",
      bullets: ["Image Experience", "PDF Experience", "Template-Based"],
    },
    whatIsIt:
      "Dynamic Experiences combine customer data, business data and a template to generate a personalized image or PDF for each customer.",
    problem: {
      heading: "Personalized content is slow to produce by hand",
      body: [
        "Creating an individual offer, quotation or certificate for every customer takes time, and generic content is easy to ignore.",
      ],
    },
    solution: {
      heading: "Data + template = personalized content",
      body: [
        "Design the template once. WALOOP fills it with the customer's and the business's information to produce a personalized image or PDF the customer receives.",
      ],
    },
    features: {
      heading: "Two experience types",
      description: "Choose the format that fits the use case.",
      items: [
        { icon: "Image", title: "Image Experience", description: "Create image-based experiences that can use supported dynamic information." },
        { icon: "FileText", title: "PDF Experience", description: "Create personalized PDF-based experiences for supported use cases." },
      ],
    },
    flow: {
      title: "Dynamic content",
      caption:
        "Customer data and business data are merged with a template to produce a dynamic experience — an image or a PDF — and the customer receives personalized content.",
      steps: [
        "Customer Data + Business Data + Template",
        "Dynamic Experience",
        { branches: [
          { label: "Image", steps: [] },
          { label: "PDF", steps: [] },
        ] },
        "Customer receives personalized content",
      ],
    },
    groups: [
      {
        eyebrow: "Examples",
        heading: "What you can personalize",
        items: [
          {
            icon: "Image",
            title: "Image Experience",
            list: ["Personalized offers", "Product cards", "Event information", "Campaign visuals", "Customer updates", "Business notifications"],
          },
          {
            icon: "FileText",
            title: "PDF Experience",
            list: ["Quotations", "Statements", "Reports", "Certificates", "Product documents", "Personalized information", "Campaign documents"],
          },
        ],
      },
    ],
    connections: [
      { slug: "crm", how: "Use contact fields and data stores as the content source." },
      { slug: "automations", how: "Generate and send content as a workflow action." },
      { slug: "channels", how: "Deliver personalized content in conversations." },
    ],
    useCases: ["Personalized offers", "Quotations", "Certificates", "Statements", "Event passes", "Campaign visuals"],
    faqs: [
      { question: "Can I create personalized PDFs or images?", answer: "WALOOP includes Dynamic Experience capabilities for image and PDF experiences." },
    ],
    cta: {
      heading: "Personalize Every Customer Experience",
      description: "Generate images and PDFs from your customer and business data.",
      label: "Explore Dynamic Experiences",
    },
  },

  // ───────────────────────────── AI (§17–18, §56)
  {
    slug: "ai",
    name: "AI",
    short: "Train AI on your business content and use it inside customer experiences.",
    icon: "BrainCircuit",
    visual: "ai",
    seo: {
      title: "WALOOP AI | Train AI on Your Business Content",
      description: "Use relevant business content to create AI-powered customer experiences with WALOOP.",
    },
    hero: {
      eyebrow: "Platform · AI Dashboard",
      title: "Train AI On Your Content",
      description:
        "Give AI access to relevant business knowledge and content so it can support more useful customer experiences.",
      bullets: ["AI Dashboard", "Business Knowledge", "AI + Human Handoff"],
    },
    whatIsIt:
      "The WALOOP AI Dashboard is where a business prepares its own content as AI knowledge, so AI can answer supported customer questions inside conversations.",
    problem: {
      heading: "Generic AI doesn't know your business",
      body: [
        "Customers ask about your products, services and policies. Without your knowledge, an AI assistant can't give useful answers.",
      ],
    },
    solution: {
      heading: "Your Business Knowledge. Your AI Experience.",
      body: [
        "Prepare business content as AI knowledge. When a customer asks a question, AI responds using that knowledge — and hands the conversation to your team when it can't help.",
        "Businesses should regularly review their AI knowledge and workflows.",
      ],
    },
    features: {
      heading: "AI use cases",
      description: "Where AI supports the customer journey.",
      items: [
        { icon: "Headset", title: "Customer Support", description: "Answer supported customer questions using relevant business knowledge." },
        { icon: "Package", title: "Product Information", description: "Help customers understand products or services." },
        { icon: "CircleHelp", title: "FAQ Assistance", description: "Handle common informational questions." },
        { icon: "UserCheck", title: "Customer Qualification", description: "Support structured customer conversations." },
        { icon: "Sparkles", title: "Conversation Assistance", description: "Help provide context-aware responses where supported." },
      ],
    },
    flow: {
      title: "AI flow",
      caption:
        "Business content is prepared as AI knowledge. When a customer asks a question, AI responds using that knowledge and the conversation continues or leads to an action.",
      steps: [
        "Business Content",
        "Knowledge / Content Preparation",
        "AI Knowledge",
        "Customer Question",
        "AI Response",
        "Conversation / Action",
      ],
    },
    extraFlows: [
      {
        title: "Knowledge to answer",
        caption: "Product data, FAQs, policies and content become WALOOP AI knowledge, which answers the customer's question.",
        steps: [
          { branches: [
            { label: "Product data", steps: [] },
            { label: "FAQs", steps: [] },
            { label: "Policies", steps: [] },
            { label: "Content", steps: [] },
          ] },
          "WALOOP AI Knowledge",
          "Customer Question",
          "Response",
        ],
      },
      {
        title: "AI + human",
        caption: "The AI assistant checks whether it can handle the request. If yes it responds; if not, the conversation goes to the human team for resolution.",
        steps: [
          "Customer",
          "AI Assistant",
          "Can AI handle request?",
          { branches: [
            { label: "Yes", steps: ["AI Response"] },
            { label: "No", steps: ["Human Team", "Resolution"] },
          ] },
        ],
      },
    ],
    groups: [
      {
        eyebrow: "Content",
        heading: "Business knowledge AI can learn from",
        description: "Supported content sources depend on the current WALOOP implementation.",
        items: [
          { icon: "Building2", title: "Business information" },
          { icon: "Package", title: "Product information" },
          { icon: "Wrench", title: "Service information" },
          { icon: "CircleHelp", title: "FAQs" },
          { icon: "ShieldCheck", title: "Policies" },
          { icon: "BookOpen", title: "Documentation" },
          { icon: "Library", title: "Knowledge resources" },
        ],
      },
    ],
    connections: [
      { slug: "chatbots", how: "Use AI answers inside chatbot journeys." },
      { slug: "channels", how: "Answer questions on supported channels." },
      { slug: "crm", how: "Hand off to the right team with full context." },
      { slug: "workspace", how: "Route to departments when a human is needed." },
    ],
    useCases: ["Customer support", "Product questions", "FAQ answers", "Qualification", "After-hours assistance"],
    faqs: [
      {
        question: "Can AI use my business information?",
        answer:
          "The AI Dashboard is designed around training AI on relevant business content. The exact supported content sources and processing behaviour are documented according to the current implementation.",
      },
      {
        question: "Is the AI always correct?",
        answer:
          "No AI is always correct. WALOOP AI responds using the business content you provide, and conversations can be handed to your team. Businesses should review their AI knowledge and workflows regularly.",
      },
    ],
    cta: {
      heading: "Put Your Business Knowledge to Work",
      description: "Train AI on your content and use it in supported customer experiences.",
      label: "Explore WALOOP AI",
    },
    note: "AI responses depend on the content provided. Review AI knowledge and workflows regularly; WALOOP does not claim AI is always correct.",
  },

  // ───────────────────────────── Analytics (§22)
  {
    slug: "analytics",
    name: "Analytics",
    short: "See conversation, CRM, chatbot, automation and payment activity.",
    icon: "BarChart3",
    visual: "analytics",
    seo: {
      title: "WALOOP Analytics | See Activity Across Your Customer Journey",
      description:
        "Understand conversation, CRM, chatbot, automation and payment activity across supported WALOOP capabilities.",
    },
    hero: {
      eyebrow: "Platform · Analytics",
      title: "See What Is Happening Across Your Customer Journey",
      description: "Analytics helps you understand activity across supported WALOOP capabilities.",
      bullets: ["Conversations", "CRM", "Chatbots", "Automations", "Payments"],
    },
    whatIsIt:
      "WALOOP Analytics brings available activity from conversations, CRM, chatbots, automations and payments into views a team can review.",
    problem: {
      heading: "You can't improve what you can't see",
      body: ["When activity is split across tools, it is hard to understand where a journey is working and where it stalls."],
    },
    solution: {
      heading: "Activity from every stage of the journey",
      body: [
        "Review available activity for each part of the platform and use it to refine bots, workflows and campaigns.",
      ],
    },
    features: {
      heading: "Metric groups",
      description: "Activity areas available across supported capabilities.",
      items: [
        { icon: "MessagesSquare", title: "Conversations", description: "Conversation activity, channel activity and customer interactions." },
        { icon: "Contact", title: "CRM", description: "Contacts, leads, segments and campaign activity." },
        { icon: "Bot", title: "Chatbots", description: "Bot interactions, flow activity and conversation completion where available." },
        { icon: "Workflow", title: "Automations", description: "Workflow activity, trigger activity and action activity." },
        { icon: "CreditCard", title: "Payments", description: "Payment order activity, payment status activity and payment-related events." },
        { icon: "Target", title: "Conversion", description: "Available conversion events and visitor activity where enabled." },
      ],
    },
    flow: {
      title: "Where analytics comes from",
      caption: "Activity from conversations, CRM, automation and payments feeds one analytics view.",
      steps: [
        { branches: [
          { label: "Conversations", steps: ["Channel activity", "Engagement"] },
          { label: "CRM", steps: ["Leads", "Segments"] },
          { label: "Automation", steps: ["Workflows", "Actions"] },
          { label: "Payments", steps: ["Orders", "Status"] },
        ] },
        "WALOOP Analytics",
      ],
    },
    connections: [
      { slug: "channels", how: "Channel and conversation activity." },
      { slug: "chatbots", how: "Bot interaction and flow activity." },
      { slug: "automations", how: "Workflow, trigger and action activity." },
      { slug: "payments", how: "Payment order and status activity." },
    ],
    useCases: ["Journey reviews", "Bot optimization", "Workflow monitoring", "Campaign activity", "Payment tracking"],
    faqs: [
      {
        question: "Does WALOOP have analytics?",
        answer: "WALOOP includes analytics areas for supported chatbot, automation, and broader platform activity.",
      },
    ],
    cta: {
      heading: "Understand Every Stage of the Journey",
      description: "Review activity across conversations, CRM, chatbots, automations and payments.",
      label: "Explore Analytics",
    },
    note: "Dashboard visuals on this page are illustrative. Real analytics reflect your own account activity.",
  },

  // ───────────────────────────── Workspace (§19–21, §23–24)
  {
    slug: "workspace",
    name: "Workspace",
    short: "Teams, roles, departments, billing and operations in one workspace.",
    icon: "LayoutDashboard",
    visual: "workspace",
    seo: {
      title: "WALOOP Workspace | Teams, Roles, Departments & Business Administration",
      description:
        "Manage team members, roles and permissions, departments, lead sources, media, billing, wallet and support from one WALOOP workspace.",
    },
    hero: {
      eyebrow: "Platform · Workspace",
      title: "One Workspace for Your Entire Operation",
      description:
        "WALOOP workspace capabilities provide the operational layer around the communication, CRM, automation, and customer engagement systems.",
      bullets: ["Roles & Permissions", "Departments", "Lead Source", "Media Manager"],
    },
    whatIsIt:
      "Workspace is the operational layer of WALOOP — team members, roles, departments, lead sources, media, billing and support in one place.",
    problem: {
      heading: "Growing teams need structure",
      body: [
        "As customer operations grow, different requests need different teams, and different team members need different access.",
      ],
    },
    solution: {
      heading: "Organize teams, responsibilities and operations",
      body: [
        "Set up roles and permissions, organize departments, route conversations to the right team, track where leads come from, and manage media, billing and support requests from the same workspace.",
      ],
    },
    features: {
      heading: "Workspace capabilities",
      description: "The administration behind your customer operations.",
      items: [
        { icon: "Settings", title: "Account Settings", description: "Manage account-level configuration and supported preferences." },
        { icon: "Wallet", title: "Wallet & Transactions", description: "View supported wallet activity and transactions." },
        { icon: "ReceiptText", title: "Billing", description: "Manage subscription and billing information." },
        { icon: "ShieldCheck", title: "Roles & Permissions", description: "Control access according to team responsibilities." },
        { icon: "Users", title: "Manage Team", description: "Manage team members." },
        { icon: "MousePointer2", title: "Visitors & Conversion", description: "Manage supported visitor and conversion functionality." },
        { icon: "HandCoins", title: "Commission & Payout", description: "Manage applicable commission and payout information where enabled." },
        { icon: "Link", title: "Links & Alias", description: "Manage supported links and aliases." },
        { icon: "LifeBuoy", title: "Support Ticket", description: "Create and manage support requests." },
      ],
    },
    flow: {
      title: "Team and permissions",
      caption:
        "A business workspace defines roles, roles carry permissions, team members are assigned to departments, and departments run customer operations.",
      steps: ["Business Workspace", "Roles", "Permissions", "Team Members", "Departments", "Customer Operations"],
    },
    groups: [
      {
        eyebrow: "Departments",
        heading: "Route Every Conversation to the Right Team",
        description:
          "As customer operations grow, different requests need different teams. WALOOP can organize supported customer workflows around departments and team responsibilities — a way to structure team responsibility, not just another setting.",
        items: [
          { icon: "TrendingUp", title: "Sales" },
          { icon: "Headset", title: "Customer Support" },
          { icon: "Megaphone", title: "Marketing" },
          { icon: "Calculator", title: "Accounts" },
          { icon: "Cog", title: "Operations" },
          { icon: "UserRound", title: "HR" },
          { icon: "Wrench", title: "Service" },
        ],
        flow: {
          title: "Department routing",
          caption: "A customer's message is categorized by a rule and routed to Sales, Support, Accounts or Operations.",
          steps: [
            "Customer",
            "Message",
            "Category / Rule",
            { branches: [
              { label: "Sales", steps: [] },
              { label: "Support", steps: [] },
              { label: "Accounts", steps: [] },
              { label: "Operations", steps: [] },
            ] },
          ],
        },
      },
      {
        eyebrow: "Lead Source",
        heading: "Know Where Your Leads Come From",
        description: "Lead Source helps businesses organize information about where customer opportunities originate.",
        items: [
          { icon: "Globe", title: "Website" },
          { icon: "MessageCircle", title: "WhatsApp campaign" },
          { icon: "Share2", title: "Social campaign" },
          { icon: "Handshake", title: "Referral" },
          { icon: "PhoneIncoming", title: "Direct enquiry" },
          { icon: "Plus", title: "Other supported sources" },
        ],
        flow: {
          title: "Lead source journey",
          caption: "A campaign brings a customer through a channel; the lead is tagged with its source, stored in the CRM and followed up by sales.",
          steps: ["Campaign", "Channel", "Customer", "Lead", "Lead Source", "CRM", "Sales Follow-up"],
        },
      },
      {
        eyebrow: "Media Manager",
        heading: "Manage the Media Behind Your Customer Experiences",
        description:
          "A centralized media-management capability for assets used across supported conversations, campaigns, bots, and experiences.",
        items: [
          { icon: "Image", title: "Images" },
          { icon: "Video", title: "Videos" },
          { icon: "FileText", title: "Documents" },
          { icon: "File", title: "Files" },
        ],
        flow: {
          title: "Media flow",
          caption: "Images, videos, documents and files are stored in the Media Manager and reused in campaigns, bots, conversations and experiences.",
          steps: ["Images · Videos · Documents · Files", "Media Manager", "Campaigns / Bots / Conversations / Experiences"],
        },
        note: "Supported file types depend on the channel and configuration.",
      },
      {
        eyebrow: "Team structure",
        heading: "Give Every Team Member the Right Access",
        description: "Different teams need different access. Organize your workspace by role and department.",
        items: [
          { icon: "Crown", title: "Admin", description: "Oversees the workspace and its teams." },
          { icon: "TrendingUp", title: "Sales" },
          { icon: "Headset", title: "Customer Support" },
          { icon: "Megaphone", title: "Marketing" },
          { icon: "Calculator", title: "Accounts" },
          { icon: "Cog", title: "Operations" },
        ],
        note: "Available roles and permissions depend on your plan and configuration.",
      },
    ],
    connections: [
      { slug: "crm", how: "Assign conversations and records to teams." },
      { slug: "chatbots", how: "Hand off from bots to departments." },
      { slug: "ai", how: "Route to a human team when AI can't help." },
      { slug: "analytics", how: "Visitor and conversion activity where enabled." },
    ],
    useCases: ["Team onboarding", "Department routing", "Access control", "Lead source tracking", "Billing management", "Support requests"],
    faqs: [
      {
        question: "Can teams work together?",
        answer: "WALOOP includes team management, roles, permissions, and department-oriented capabilities.",
      },
      {
        question: "Can I manage customer support?",
        answer:
          "Yes. WALOOP provides live conversations, canned replies, department organization, CRM information, chatbots, and automation capabilities that can support customer service workflows.",
      },
    ],
    cta: {
      heading: "Run Your Customer Operations From One Workspace",
      description: "Organize teams, roles, departments and administration with WALOOP.",
      label: "Explore Workspace",
    },
  },
];

export function getPlatformArea(slug: string) {
  return platformAreas.find((area) => area.slug === slug);
}

export const platformHref = (slug: PlatformSlug) => `/platform/${slug}`;

/** The eight core pillars shown on the homepage platform overview (§7). */
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

/** Product feature matrix (§41). */
export const featureMatrix: { area: string; slug?: PlatformSlug; capabilities: string; value: string }[] = [
  { area: "Channels", slug: "channels", capabilities: "WhatsApp, Instagram, Facebook, RCS, All Channels", value: "Centralized customer communication" },
  { area: "CRM", slug: "crm", capabilities: "Live Chat, Contacts, Boards, Data Stores, Segments, Campaigns", value: "Organized customer operations" },
  { area: "Chatbots", slug: "chatbots", capabilities: "Flow Builder, Fields, Data Stores, Templates, Analytics", value: "Automated conversations" },
  { area: "Automation", slug: "automations", capabilities: "Workflow Builder, Data Stores, Templates, App Authentications, Analytics", value: "Automated business processes" },
  { area: "Mini-Apps", slug: "whatsapp-mini-apps", capabilities: "WhatsApp Mini-Apps / Flows", value: "Interactive customer actions" },
  { area: "Payments", slug: "payments", capabilities: "Orders, Gateways, Automations", value: "Connected payment journeys" },
  { area: "Dynamic Experiences", slug: "dynamic-experiences", capabilities: "Image, PDF", value: "Personalized content" },
  { area: "AI", slug: "ai", capabilities: "AI Dashboard, Business Content", value: "Knowledge-based AI experiences" },
  { area: "Analytics", slug: "analytics", capabilities: "Activity and engagement reporting", value: "Visibility into operations" },
  { area: "Workspace", slug: "workspace", capabilities: "Billing, Team, Roles, Wallet, Support", value: "Business administration" },
];

/** Master feature inventory (§42). */
export const featureInventory: { group: string; items: string[] }[] = [
  { group: "Channels", items: ["All Channels", "WhatsApp", "Instagram", "Facebook", "RCS"] },
  {
    group: "CRM",
    items: ["Live Chat", "Channel", "Contacts", "Boards", "Data Stores", "Super Field", "Segment", "Bulk Campaign", "Canned Replies", "CRM Triggers", "Imports", "Exports"],
  },
  { group: "Chatbots", items: ["Analytics", "Chatbots / Flow", "Data Stores", "Bot Fields", "Templates"] },
  { group: "Automations", items: ["Analytics", "Workflow", "Data Stores", "Templates", "App Authentications"] },
  { group: "WhatsApp Mini-Apps", items: ["Mini Apps"] },
  { group: "Payments", items: ["Payment Orders", "Payment Gateways", "Automations"] },
  { group: "Dynamic Experiences", items: ["Image Experience", "PDF Experience"] },
  { group: "Operations", items: ["Lead Source", "Departments", "Media Manager"] },
  { group: "AI", items: ["AI Dashboard", "Train AI on Business Content"] },
  {
    group: "Workspace",
    items: ["Account Settings", "Wallet & Transactions", "Billing", "Roles & Permissions", "Manage Team", "Visitors & Conversion", "Commission & Payout", "Links & Alias", "Support Ticket"],
  },
];
