// Content data for the /contact page (spec §60).

import { siteConfig } from "@/lib/content";

export const hero = {
  badge: "Contact",
  title: "Let's Build Your Customer Journey",
  description:
    "Have questions about WALOOP, plans, product capabilities, or your business use case? Connect with the WALOOP team.",
};

export const contactDetails = [
  { icon: "whatsapp", title: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.whatsappLink, note: "Fastest way to reach us" },
  { icon: "Phone", title: "Phone", value: siteConfig.phone, href: siteConfig.phoneLink },
  { icon: "Mail", title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "Globe", title: "Website", value: siteConfig.websiteLabel, href: siteConfig.website },
  { icon: "LayoutDashboard", title: "Application", value: siteConfig.appLabel, href: siteConfig.appUrl, note: "Log in to WALOOP" },
];
