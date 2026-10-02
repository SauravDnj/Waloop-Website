import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ChannelIcon } from "@/components/brand/ChannelIcon";
import { FAQ } from "@/components/home/FAQ";
import { siteConfig } from "@/lib/content";
import { resourceHub } from "@/lib/resources";

export const metadata: Metadata = {
  title: "WALOOP Support | WhatsApp, Phone, Email & Support Tickets",
  description: `Get help with WALOOP. WhatsApp ${siteConfig.whatsapp}, phone ${siteConfig.phone}, email ${siteConfig.email}, or raise a Support Ticket in your workspace.`,
};

const channels = [
  { key: "whatsapp", title: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.whatsappLink, description: "Message the WALOOP team." },
  { key: "Phone", title: "Phone", value: siteConfig.phone, href: siteConfig.phoneLink, description: "Call the WALOOP team." },
  { key: "Mail", title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, description: "Write to us with details." },
  { key: "LifeBuoy", title: "Support Ticket", value: siteConfig.appLabel, href: siteConfig.appUrl, description: "Create and manage support requests from your WALOOP workspace." },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        icon="LifeBuoy"
        title="We're Here to Help"
        description="Reach the WALOOP team on WhatsApp, phone or email — or raise a Support Ticket from inside your workspace."
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

      <Section tone="tint">
        <SectionHeading eyebrow="Self-service" title="Find answers yourself" />
        <RevealGroup className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {resourceHub
            .filter((r) => r.href !== "/support")
            .map((r) => (
              <RevealItem key={r.href}>
                <Link href={r.href} className="group flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 hover:border-brand-blue/40">
                  <DynamicIcon name={r.icon} className="h-5 w-5 text-brand-green-deep" />
                  <span className="flex-1 font-heading text-sm font-bold text-text">{r.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-text-soft" />
                </Link>
              </RevealItem>
            ))}
        </RevealGroup>
      </Section>

      <FAQ />
    </>
  );
}
