// Content data for pricing (spec §36–37).

import { siteConfig } from "@/lib/content";

export const hero = {
  badge: "Pricing",
  title: "WALOOP Pricing Plans",
  description:
    "Simple yearly plans — Starter, Growth and Enterprise.",
};

export type PricingPlan = {
  name: string;
  /** Short label shown on the card (§37). */
  label: string;
  positioning: string;
  price: string;
  priceSuffix: string;
  highlighted?: boolean;
  cta: { label: string; href: string };
};

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    label: "Business Engagement Foundation",
    positioning: "For businesses starting with WhatsApp engagement and automation.",
    price: "₹15,000",
    priceSuffix: "/ year",
    cta: { label: "Get Started", href: siteConfig.appUrl },
  },
  {
    name: "Growth",
    label: "Connected Customer Journeys",
    positioning: "For growing businesses that need more CRM, automation and campaigns.",
    price: "₹30,000",
    priceSuffix: "/ year",
    highlighted: true,
    cta: { label: "Get Started", href: siteConfig.appUrl },
  },
  {
    name: "Enterprise",
    label: "Customized Requirements",
    positioning: "For organizations with custom scale or integration needs.",
    price: "Custom Pricing",
    priceSuffix: "",
    cta: { label: "Talk to Sales", href: "/contact" },
  },
];

/** §36 Pricing notes — charges explained separately. */
export const pricingNotes = {
  heading: "What's Included — and What's Billed Separately",
  description: "Your plan covers the WALOOP platform. Other charges are separate where applicable.",
  items: [
    { icon: "LayoutDashboard", title: "Platform subscription", description: "The yearly WALOOP plan you choose." },
    { icon: "Gauge", title: "Usage charges", description: "Charges based on usage, where applicable." },
    { icon: "Server", title: "Provider charges", description: "Charges from communication service providers." },
    { icon: "MessageCircle", title: "WhatsApp / Meta charges", description: "Conversation or messaging charges set by WhatsApp/Meta." },
    { icon: "CreditCard", title: "Payment gateway charges", description: "Fees set by your payment gateway." },
    { icon: "Wrench", title: "Custom services", description: "Custom setup, build or integration work." },
  ],
};

export const closingCta = {
  heading: "Not sure which plan fits?",
  description: "Talk to the WALOOP team and we'll help you choose.",
  primaryCta: { label: "Talk to Sales", href: "/contact" },
  secondaryCta: { label: "Book a Demo", href: "/demo" },
};
