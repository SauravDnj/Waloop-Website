// Content data for the /careers marketing page.
// WALOOP is a small team (see siteConfig.teamSize) with no public job board today,
// so this page is intentionally an honest, evergreen "join our team" page rather
// than a fabricated listings board with invented job titles or departments.

import type { IconGridItem } from "@/components/product/IconGrid";
import { siteConfig } from "@/lib/content";

export const hero = {
  badge: "We're Hiring",
  title: "Careers at WALOOP",
  description: `Join a team of ${siteConfig.teamSize} communication and AI experts building the communications infrastructure that powers 500+ enterprises. We're based out of ${siteConfig.hq}, and we've been engineering WhatsApp, RCS, SMS, IVR, and AI voice technology since ${siteConfig.foundedYear}.`,
  tagline: { lead: "Build the infrastructure.", emphasis: "Own the outcome." },
};

export const culture = {
  eyebrow: "Life at WALOOP",
  heading: "Why WALOOP",
  description: "What it actually feels like to build here, day to day.",
  items: [
    {
      icon: "Target",
      title: "Ownership",
      description: `We're a lean team of ${siteConfig.teamSize} — the work you ship goes straight into the product our enterprise customers rely on, not lost in layers of process.`,
    },
    {
      icon: "BookOpen",
      title: "Learning",
      description: "You'll work across AI, voice, and messaging infrastructure at once, picking up real depth in speech technology, LLMs, and telecom systems along the way.",
    },
    {
      icon: "Compass",
      title: "Flexibility",
      description: "We organize around what needs to get done, not rigid hours or seating charts — the team trusts you to manage your own time and focus.",
    },
    {
      icon: "TrendingUp",
      title: "Growth",
      description: `As a communications company that's been growing since ${siteConfig.foundedYear}, there's more scope to take on than people to take it — you can grow as fast as you're ready to.`,
    },
  ] satisfies IconGridItem[],
};

export const openRoles = {
  eyebrow: "Open Roles",
  heading: "No public job board yet",
  description:
    "We don't have a formal careers board today, but we're always interested in meeting people who want to build enterprise communication infrastructure. If that sounds like you, reach out and tell us what you'd bring to the team.",
  email: siteConfig.email,
};

export const closingCta = {
  heading: "Want to Build With Us?",
  description:
    "Send us a note about what you'd like to work on — even without a specific role open, we'd love to hear from people who want to build with WALOOP.",
  primaryCta: { label: "Get in Touch", href: "/contact" },
  secondaryCta: { label: "Learn About WALOOP", href: "/about" },
};
