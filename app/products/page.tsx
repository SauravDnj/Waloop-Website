import type { Metadata } from "next";
import { HeroText } from "@/components/product/HeroText";
import { ProductLinkGrid } from "@/components/product/ProductLinkGrid";
import { IconGrid } from "@/components/product/IconGrid";
import { ProductCTA } from "@/components/product/ProductCTA";
import { TrustSection } from "@/components/home/TrustSection";
import { StatsBand } from "@/components/home/StatsBand";
import { FAQ } from "@/components/home/FAQ";
import { ProductsHubScene } from "@/components/three/ProductsHubSceneLoader";
import { products as channelProducts } from "@/lib/content";
import { hero, coreProducts, channels, benefits, closingCta } from "@/lib/products/overview";

export const metadata: Metadata = {
  title: "All Products | WALOOP — One Unified Communications Platform",
  description:
    "Explore every WALOOP product — AI Voice Agent, WhatsApp AI Chatbot, Voice AI, Conversational AI Platform, WhatsApp Workflow Builder, RCS, Bulk SMS, and Voice IVR — all on one connected platform.",
};

const REAL_PAGE_HREF: Record<string, string> = {
  "WhatsApp Business API": "/products/whatsapp-business-api",
  "RCS Business Messaging": "/products/rcs-messaging",
  "Bulk SMS Gateway": "/products/bulk-sms-gateway",
  "AI Voice Bot": "/products/ai-voice-agent",
  "Cloud IVR System": "/products/smart-voice-ivr",
  "Missed Call Service": "/products/missed-call-service",
  "Webhook Engine": "/products/webhook-engine",
};

const channelItems = channelProducts.map((product) => {
  const href = REAL_PAGE_HREF[product.title] ?? "/#contact";
  return {
    icon: product.icon,
    eyebrow: product.eyebrow,
    title: product.title,
    description: product.description,
    tags: product.tags,
    href,
    ctaLabel: href.startsWith("/products/") ? "Explore Details" : "Talk to Sales",
  };
});

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <HeroText
            badge={hero.badge}
            title={hero.title}
            highlight={hero.highlight}
            description={hero.description}
            tagline={hero.tagline}
            bullets={hero.bullets}
            primaryCta={hero.primaryCta}
            secondaryCta={hero.secondaryCta}
          />
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(152,255,3,0.22),transparent)] blur-2xl" />
            <ProductsHubScene />
          </div>
        </div>
      </section>

      <ProductLinkGrid
        eyebrow={coreProducts.eyebrow}
        heading={coreProducts.heading}
        description={coreProducts.description}
        items={coreProducts.items}
      />

      <ProductLinkGrid
        eyebrow={channels.eyebrow}
        heading={channels.heading}
        description={channels.description}
        items={channelItems}
        tinted
      />

      <IconGrid
        eyebrow={benefits.eyebrow}
        heading={benefits.heading}
        description={benefits.description}
        items={benefits.items}
        columns={4}
      />

      <TrustSection />
      <StatsBand />
      <FAQ />

      <ProductCTA
        heading={closingCta.heading}
        highlight={closingCta.highlight}
        description={closingCta.description}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
      />
    </>
  );
}
