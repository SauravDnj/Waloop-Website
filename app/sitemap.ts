import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";
import { platformAreas } from "@/lib/platform";
import { solutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";

const staticPaths = [
  "/",
  "/platform",
  "/solutions",
  "/industries",
  "/pricing",
  "/integrations",
  "/use-cases",
  "/demo",
  "/about",
  "/contact",
  "/faq",
  "/docs",
  "/guides",
  "/resources",
  "/blog",
  "/support",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...platformAreas.map((a) => `/platform/${a.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteConfig.website}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
