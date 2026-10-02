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
    title: "Build your first chatbot journey",
    icon: "Bot",
    area: "chatbots",
    summary: "Welcome customers, offer choices and capture leads with the visual flow builder.",
    steps: [
      { title: "Choose a trigger", description: "Start the conversation from a supported customer or business event." },
      { title: "Add a welcome message", description: "Greet the customer and explain what the bot can help with." },
      { title: "Ask a question with buttons", description: "Offer predefined choices such as Products, Pricing, Support or Demo." },
      { title: "Route with conditions", description: "Send each choice down its own path." },
      { title: "Capture answers in bot fields", description: "Store the information the journey collects." },
      { title: "Hand off when needed", description: "Route complex requests to a department and human agent." },
    ],
  },
  {
    slug: "lead-automation",
    title: "Create a lead automation",
    icon: "Workflow",
    area: "automations",
    summary: "Assign qualified leads to sales and nurture the rest automatically.",
    steps: [
      { title: "Start from a new lead", description: "Use a supported event as the workflow trigger." },
      { title: "Check lead data", description: "Read the information captured by the bot or CRM." },
      { title: "Add a condition", description: "Decide whether the lead is qualified." },
      { title: "Qualified: assign and notify", description: "Assign the sales department and notify the team." },
      { title: "Not yet: nurture", description: "Schedule a follow-up for leads that need more time." },
      { title: "Update the CRM", description: "Keep the record current at the end of the workflow." },
    ],
  },
  {
    slug: "whatsapp-mini-app",
    title: "Launch a WhatsApp Mini-App",
    icon: "Smartphone",
    area: "whatsapp-mini-apps",
    summary: "Turn a long chat into a structured selection, form and confirmation.",
    steps: [
      { title: "Pick the journey", description: "Product selection, lead form, registration, survey or service request." },
      { title: "Design the selection step", description: "Let customers choose a product or service." },
      { title: "Collect the details", description: "Ask only for the information the process needs." },
      { title: "Confirm", description: "Show a summary before the customer submits." },
      { title: "Connect the result", description: "Update the CRM and start the next workflow." },
    ],
  },
  {
    slug: "payment-journey",
    title: "Set up a payment journey",
    icon: "CreditCard",
    area: "payments",
    summary: "Move from conversation to payment order, gateway and confirmation.",
    steps: [
      { title: "Configure a payment gateway", description: "Connect a supported gateway in your workspace." },
      { title: "Create the payment order", description: "Generate an order from the customer's selection." },
      { title: "Send the payment request", description: "Share it in the conversation." },
      { title: "Automate by status", description: "Paid: confirm and update CRM. Pending: send a reminder and follow up." },
    ],
  },
  {
    slug: "train-ai",
    title: "Train AI on your business content",
    icon: "BrainCircuit",
    area: "ai",
    summary: "Prepare business knowledge so AI can answer supported customer questions.",
    steps: [
      { title: "Gather your content", description: "Business, product and service information, FAQs and policies." },
      { title: "Prepare it as AI knowledge", description: "Add the content in the AI Dashboard." },
      { title: "Use it in conversations", description: "Let AI answer supported questions." },
      { title: "Keep a human in the loop", description: "Route requests AI can't handle to your team." },
      { title: "Review regularly", description: "Check your AI knowledge and workflows as your business changes." },
    ],
  },
  {
    slug: "team-setup",
    title: "Set up your team, roles and departments",
    icon: "Users",
    area: "workspace",
    summary: "Give every team member the right access and route conversations to the right team.",
    steps: [
      { title: "Invite your team", description: "Add team members in Manage Team." },
      { title: "Define roles", description: "Create roles that match team responsibilities." },
      { title: "Set permissions", description: "Control access according to each role." },
      { title: "Create departments", description: "Sales, Support, Marketing, Accounts, Operations and more." },
      { title: "Route conversations", description: "Use rules and categories to send requests to the right department." },
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
