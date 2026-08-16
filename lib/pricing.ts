// Content data for the /pricing page.

export const hero = {
  badge: "Pricing",
  title: "Pricing that grows",
  highlight: "with your business.",
  description:
    "Whether you're a solo team testing WhatsApp automation or an enterprise running voice, SMS, and RCS at scale — WALOOP has a plan built for you.",
  tagline: { lead: "Simple plans.", emphasis: "No hidden fees." },
};

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  priceSuffix: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  cta: { label: string; href: string };
};

export const plans: PricingPlan[] = [
  {
    name: "Launch",
    description: "For solo sellers and small teams getting started with WhatsApp automation.",
    monthlyPrice: 29,
    yearlyPrice: 24,
    priceSuffix: "/mo",
    features: [
      "1 WhatsApp Business number",
      "1,000 conversations / month",
      "Shared team inbox",
      "Basic chatbot flows",
      "Email support",
    ],
    cta: { label: "Get Started Free", href: "/signup" },
  },
  {
    name: "Sprint",
    description: "For growing teams that want AI automation and campaign tools.",
    monthlyPrice: 79,
    yearlyPrice: 65,
    priceSuffix: "/mo",
    badge: "Most Popular",
    highlighted: true,
    features: [
      "Everything in Launch, plus:",
      "3 WhatsApp Business numbers",
      "10,000 conversations / month",
      "AI Voice Agent + Chatbot",
      "RCS & Bulk SMS gateway",
      "Priority support",
    ],
    cta: { label: "Start Free Trial", href: "/signup" },
  },
  {
    name: "Turbo",
    description: "For teams that need custom integrations, security, and dedicated support.",
    monthlyPrice: null,
    yearlyPrice: null,
    priceSuffix: "",
    features: [
      "Everything in Sprint, plus:",
      "Unlimited numbers & channels",
      "Custom AI voice + IVR flows",
      "Dedicated onboarding manager",
      "Enterprise SLA & security review",
    ],
    cta: { label: "Talk to Sales", href: "/#contact" },
  },
];

export const closingCta = {
  heading: "Still deciding which plan",
  highlight: "fits your team?",
  description: "Talk to our team — we'll help you map WALOOP's channels to your actual call and message volume.",
  primaryCta: { label: "Talk to Sales", href: "/#contact" },
  secondaryCta: { label: "Explore Products", href: "/products" },
};
