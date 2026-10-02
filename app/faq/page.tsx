import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { ctas, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP FAQ | Channels, Chatbots, CRM, Automation, Payments, AI & Pricing",
  description:
    "Answers to common questions about WALOOP — supported channels, chatbots, CRM, automation, WhatsApp Mini-Apps, payments, dynamic experiences, AI, teams, analytics, plans and charges.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        icon="CircleHelp"
        title="Frequently Asked Questions"
        description="Everything you need to know about WALOOP, its capabilities, plans and charges."
        primary={ctas.talkToWaloop}
        secondary={ctas.bookDemo}
      />
      <FAQ items={faqs} heading="All questions" description={`${faqs.length} answers about the WALOOP platform.`} showMore={false} />
      <CTASection heading="Still Have a Question?" description="Talk to the WALOOP team on WhatsApp, phone or email." primary={ctas.talkToWaloop} />
    </>
  );
}
