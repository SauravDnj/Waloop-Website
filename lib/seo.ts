// SEO / AEO helpers — schema.org builders shared across pages.

import { siteConfig } from "@/lib/content";

type QA = { question: string; answer: string };

const url = (path: string) => `${siteConfig.website}${path === "/" ? "" : path}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.website,
    logo: url("/brand/waloop-logo-light.png"),
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    contactPoint: [{ "@type": "ContactPoint", telephone: siteConfig.phone, contactType: "sales" }],
  };
}

export function softwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    url: siteConfig.website,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: [
      { "@type": "Offer", name: "Starter", price: "15000", priceCurrency: "INR" },
      { "@type": "Offer", name: "Growth", price: "30000", priceCurrency: "INR" },
    ],
  };
}

export function faqSchema(items: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: url(t.path) })),
  };
}
