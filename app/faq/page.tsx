import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ctas, faqs } from "@/lib/content";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "WALOOP FAQ | WhatsApp CRM, Chatbot, Automation & Pricing Questions",
  description: "Quick answers about WALOOP: WhatsApp CRM, chatbots, automation, WhatsApp Flows, payments, AI and pricing.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="FAQ"
        icon="CircleHelp"
        title="Frequently Asked Questions"
        description="Quick answers about WALOOP."
        primary={ctas.talkToWaloop}
        secondary={ctas.bookDemo}
      />
      <FAQ items={faqs} heading="All questions" description="" showMore={false} />
      <CTASection heading="Still Have a Question?" description="Talk to the WALOOP team on WhatsApp, phone or email." primary={ctas.talkToWaloop} />
    </>
  );
}
