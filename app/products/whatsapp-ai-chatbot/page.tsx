import type { Metadata } from "next";
import { HeroText } from "@/components/product/HeroText";
import { ChatbotHeroWidget } from "@/components/product/heroes/ChatbotHeroWidget";
import { OverviewSection } from "@/components/product/OverviewSection";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { HowItWorks } from "@/components/product/HowItWorks";
import { IconGrid } from "@/components/product/IconGrid";
import { AnalyticsPreview } from "@/components/product/AnalyticsPreview";
import { ProductFAQSection } from "@/components/product/ProductFAQSection";
import { ProductCTA } from "@/components/product/ProductCTA";
import {
  hero,
  overview,
  features,
  howItWorks,
  industries,
  benefits,
  integrations,
  analyticsStats,
  analyticsBars,
  analyticsBreakdown,
  faqs,
  closingCta,
} from "@/lib/products/whatsapp-ai-chatbot";

export const metadata: Metadata = {
  title: "WhatsApp AI Chatbot | WALOOP",
  description:
    "Automate customer conversations on WhatsApp with WALOOP's AI-powered chatbot — instant replies, lead capture, appointment booking, and 24/7 support on the official WhatsApp Business API.",
};

export default function WhatsAppAIChatbotPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-hero-glow"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <HeroText
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            bullets={hero.bullets}
            primaryCta={hero.primaryCta}
            secondaryCta={hero.secondaryCta}
          />
          <ChatbotHeroWidget />
        </div>
      </section>

      <OverviewSection
        eyebrow={overview.eyebrow}
        heading={overview.heading}
        description={overview.description}
        points={overview.points}
      />

      <FeatureGrid
        eyebrow="Platform Features"
        heading="Everything You Need to Automate WhatsApp"
        description="A complete set of AI-powered tools to handle conversations, capture leads, and support customers at scale."
        items={features}
        tinted
      />

      <HowItWorks
        eyebrow="Get Started in Minutes"
        heading="How It Works"
        description="Go from connecting your WhatsApp number to running a fully automated AI assistant in five simple steps."
        steps={howItWorks}
      />

      <IconGrid
        eyebrow="Built For Every Industry"
        heading="Industry Use Cases"
        description="WALOOP's WhatsApp AI Chatbot adapts to the way your industry actually sells and supports customers."
        items={industries}
        columns={3}
      />

      <IconGrid
        eyebrow="Why Teams Choose WALOOP"
        heading="Key Business Benefits"
        description="Measurable gains in response time, conversion, and cost efficiency from day one."
        items={benefits}
        columns={2}
        tinted
      />

      <IconGrid
        eyebrow="Connected Ecosystem"
        heading="Integrations"
        description="Plug the chatbot into the tools your sales, support, and operations teams already rely on."
        items={integrations}
        columns={4}
      />

      <AnalyticsPreview
        eyebrow="Real-Time Intelligence"
        heading="Analytics Dashboard Preview"
        description="Get full visibility into conversations, lead intent, and customer satisfaction as they happen."
        stats={analyticsStats}
        bars={analyticsBars}
        breakdown={analyticsBreakdown}
      />

      <ProductFAQSection
        heading="Frequently Asked Questions"
        description="Answers to the questions teams ask most before deploying a WhatsApp AI chatbot."
        items={faqs}
      />

      <ProductCTA
        heading={closingCta.heading}
        description={closingCta.description}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
      />
    </>
  );
}
