// Content data for the /contact marketing page.
// Reuses the real contact details already defined in lib/content.ts (siteConfig)
// rather than inventing new ones.

import type { IconGridItem } from "@/components/product/IconGrid";
import { siteConfig } from "@/lib/content";

export const hero = {
  badge: "Get in Touch",
  title: "Contact WALOOP",
  description:
    `Reach our team for product demos, enterprise pricing, or technical support. ${siteConfig.name} typically responds within one business day.`,
};

export const contactDetails = {
  eyebrow: "Reach Us",
  heading: "Contact Details",
  items: [
    {
      icon: "Mail",
      title: "Email",
      description: siteConfig.email,
    },
    {
      icon: "Phone",
      title: "Phone",
      description: siteConfig.phone,
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: siteConfig.whatsapp,
    },
    {
      icon: "MapPin",
      title: "Office",
      description: siteConfig.hq,
    },
  ] satisfies IconGridItem[],
};
