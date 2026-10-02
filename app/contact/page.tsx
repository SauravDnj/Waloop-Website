import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ChannelIcon } from "@/components/brand/ChannelIcon";
import { MetaVerifiedBadge } from "@/components/brand/MetaVerifiedBadge";
import { LeadForm } from "@/components/forms/LeadForm";
import { ctas, siteConfig } from "@/lib/content";
import { contactDetails, hero } from "@/lib/products/contact";

export const metadata: Metadata = {
  title: "Contact WALOOP | Let's Build Your Customer Journey",
  description: `Talk to the WALOOP team about plans, product capabilities or your use case. WhatsApp ${siteConfig.whatsapp}, phone ${siteConfig.phone}, email ${siteConfig.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={hero.badge}
        icon="Mail"
        title={hero.title}
        description={hero.description}
        primary={{ label: "Chat on WhatsApp", href: siteConfig.whatsappLink }}
        secondary={ctas.bookDemo}
      />

      <Section>
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((d) => (
            <RevealItem key={d.title} className="h-full">
              <a
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group soft-panel flex h-full flex-col p-5 transition-shadow hover:shadow-soft"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                  style={{ background: d.icon === "whatsapp" ? "#25D366" : "var(--gradient-brand)" }}
                >
                  {d.icon === "whatsapp" ? <ChannelIcon channel="whatsapp" /> : <DynamicIcon name={d.icon} className="h-5 w-5" />}
                </span>
                <p className="mt-4 font-heading text-xs font-bold uppercase tracking-widest text-text-soft">{d.title}</p>
                <p className="mt-1 flex items-center gap-1 break-words text-sm font-bold text-text">
                  {d.value}
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
                {d.note && <p className="mt-1 text-xs text-text-muted">{d.note}</p>}
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="tint" className="pt-0 sm:pt-0">
        <div className="grid grid-cols-1 gap-10 pt-20 sm:pt-28 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">Talk to WALOOP</h2>
            <p className="mt-4 text-base text-text-muted">
              Share a few details and we&apos;ll continue the conversation on WhatsApp — the same channel your customers use.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-text-muted">
              <li>• Plans: Starter, Growth and Enterprise</li>
              <li>• Capabilities: channels, CRM, chatbots, automation, Mini-Apps, payments, AI</li>
              <li>• Your use case and the journey you want to build</li>
            </ul>
            <MetaVerifiedBadge className="mt-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
