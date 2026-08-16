import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { SquareDotFrame } from "@/components/ui/SquareDotFrame";
import { footerLinks, siteConfig } from "@/lib/content";

const knownLinks: Record<string, string> = {
  "AI Voice Agent": "/products/ai-voice-agent",
  "WhatsApp AI Chatbot": "/products/whatsapp-ai-chatbot",
  "WhatsApp Business": "/products/whatsapp-business-api",
  "RCS Messaging": "/products/rcs-messaging",
  "Bulk SMS Gateway": "/products/bulk-sms-gateway",
  "IVR & Voice Call": "/products/smart-voice-ivr",
  "About Us": "/about",
  Careers: "/careers",
  "Contact Us": "/contact",
  FAQ: "/#faq",
  Blog: "/blog",
  "Privacy Policy": "/privacy-policy",
  Terms: "/terms",
  MoEngage: "/integrations",
  WebEngage: "/integrations",
  CleverTap: "/integrations",
  "Zoho CRM": "/integrations",
  "All Plugins": "/integrations",
};

const columns: { title: string; items: string[] }[] = [
  { title: "Core Solutions", items: footerLinks.coreSolutions },
  { title: "Company", items: footerLinks.company },
  { title: "Integrations", items: footerLinks.integrations },
  { title: "Resources", items: footerLinks.resources },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-3 text-sm font-semibold">
              <span className="text-text">Built on Trust.</span> <span className="text-brand-green">Driven by AI.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
              Enterprise-grade communications platform — empowering 500+ leaders with Official WhatsApp Business API, RCS
              Messaging, Bulk SMS Gateway, and AI Voice Bots since {siteConfig.foundedYear}.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-text-muted">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-brand-green-deep dark:hover:text-brand-green">
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-brand-green-deep dark:hover:text-brand-green">
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-semibold text-text">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={knownLinks[item] ?? "/#contact"}
                      className="text-sm text-text-muted transition-colors hover:text-brand-green-deep dark:hover:text-brand-green"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <SquareDotFrame className="mx-4 flex items-center justify-center border-y border-border py-14 sm:mx-6 lg:mx-8">
        <Logo className="[&_img]:h-12 [&_span]:text-4xl sm:[&_span]:text-6xl" />
      </SquareDotFrame>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-text-soft sm:flex-row">
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-brand-green hover:text-brand-green"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="order-first sm:order-none">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <p>India&apos;s WALOOP Messaging Platform for WhatsApp API, RCS &amp; AI Voice Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
