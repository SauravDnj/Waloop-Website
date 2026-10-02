// Content data for pricing (spec §36–37).

import { siteConfig } from "@/lib/content";

export const hero = {
  badge: "Pricing",
  title: "Choose the WALOOP Plan That Fits Your Business",
  description:
    "Simple yearly plans for every stage — from a structured foundation for customer conversations to customized enterprise requirements.",
};

export type PricingPlan = {
  name: string;
  /** Short label shown on the card (§37). */
  label: string;
  positioning: string;
  description: string;
  price: string;
  priceSuffix: string;
  highlighted?: boolean;
  cta: { label: string; href: string };
};

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    label: "Business Engagement Foundation",
    positioning: "For businesses starting with customer engagement, communication, and automation.",
    description:
      "A starting plan for businesses that need a structured foundation for customer conversations and digital engagement.",
    price: "₹15,000",
    priceSuffix: "/ year",
    cta: { label: "Get Started", href: siteConfig.appUrl },
  },
  {
    name: "Growth",
    label: "Connected Customer Journeys",
    positioning:
      "For growing businesses that need broader customer management, automation, campaign, and engagement capabilities.",
    description:
      "A broader platform option for businesses building more connected customer journeys and workflows.",
    price: "₹30,000",
    priceSuffix: "/ year",
    highlighted: true,
    cta: { label: "Get Started", href: siteConfig.appUrl },
  },
  {
    name: "Enterprise",
    label: "Customized Requirements",
    positioning: "For organizations with customized requirements, scale, integrations, or operational needs.",
    description: "A tailored setup scoped with the WALOOP team around your requirements.",
    price: "Custom Pricing",
    priceSuffix: "",
    cta: { label: "Talk to Sales", href: "/contact" },
  },
];

/** §36 Pricing notes — charges explained separately. */
export const pricingNotes = {
  heading: "What the subscription covers — and what's billed separately",
  description:
    "Your WALOOP plan is the platform subscription. The following are separate where applicable, and are not included unless confirmed in writing.",
  items: [
    { icon: "LayoutDashboard", title: "Platform subscription", description: "The yearly WALOOP plan you choose." },
    { icon: "Gauge", title: "Usage charges", description: "Charges based on usage, where applicable." },
    { icon: "Server", title: "Provider charges", description: "Charges from communication service providers." },
    { icon: "MessageCircle", title: "WhatsApp / Meta charges", description: "Conversation or messaging charges set by WhatsApp/Meta." },
    { icon: "CreditCard", title: "Payment gateway charges", description: "Fees set by your payment gateway." },
    { icon: "Wrench", title: "Custom services", description: "Custom setup, build or integration work." },
    { icon: "Building2", title: "Enterprise requirements", description: "Scoped individually for Enterprise plans." },
  ],
};

export const closingCta = {
  heading: "Not sure which plan fits?",
  description: "Talk to the WALOOP team — we'll map the plan to your channels, journeys and requirements.",
  primaryCta: { label: "Talk to Sales", href: "/contact" },
  secondaryCta: { label: "Book a Demo", href: "/demo" },
};
