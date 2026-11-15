import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ChannelIcon } from "@/components/brand/ChannelIcon";
import { FAQ } from "@/components/home/FAQ";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP Customer Support | WhatsApp, Phone & Email Help",
  description: `Get help with WALOOP. WhatsApp ${siteConfig.whatsapp}, phone ${siteConfig.phone}, email ${siteConfig.email}, or raise a Support Ticket in your workspace.`,
  alternates: { canonical: "/support" },
};

const channels = [
  { key: "whatsapp", title: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.whatsappLink, description: "Message the WALOOP team." },
  { key: "Phone", title: "Phone", value: siteConfig.phone, href: siteConfig.phoneLink, description: "Call the WALOOP team." },
  { key: "Mail", title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, description: "Write to us with details." },
  { key: "LifeBuoy", title: "Support Ticket", value: siteConfig.appLabel, href: siteConfig.appUrl, description: "Raise a ticket from your workspace." },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        icon="LifeBuoy"
        title="We're Here to Help"
        description="Reach the WALOOP team on WhatsApp, phone, email or a Support Ticket."
        primary={{ label: "Chat on WhatsApp", href: siteConfig.whatsappLink }}
        secondary={{ label: "Open Your Workspace", href: siteConfig.appUrl }}
      />

      <Section>
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <RevealItem key={c.title} className="h-full">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group soft-panel flex h-full flex-col p-6 transition-shadow hover:shadow-soft"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                  style={{ background: c.key === "whatsapp" ? "#25D366" : "var(--gradient-brand)" }}
                >
                  {c.key === "whatsapp" ? <ChannelIcon channel="whatsapp" /> : <DynamicIcon name={c.key} className="h-5 w-5" />}
                </span>
                <h2 className="mt-5 font-heading text-lg font-bold text-text">{c.title}</h2>
                <p className="mt-1 break-words text-sm font-semibold text-brand-green-deep">{c.value}</p>
                <p className="mt-2 text-sm text-text-muted">{c.description}</p>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FAQ />
    </>
  );
}
