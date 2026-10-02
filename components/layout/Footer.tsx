import Link from "next/link";
import { ArrowRight, Globe, LayoutDashboard, Mail, Phone } from "lucide-react";
import { BrandLockup } from "@/components/layout/Logo";
import { MetaVerifiedBadge } from "@/components/brand/MetaVerifiedBadge";
import { ChannelIcon } from "@/components/brand/ChannelIcon";
import { Button } from "@/components/ui/Button";
import { ctas, footer, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      {/* Footer CTA (§61) */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="font-heading text-2xl font-bold text-text sm:text-3xl">
              Build Smarter Customer Journeys With <span className="text-gradient-brand">WALOOP</span>
            </p>
            <p className="mt-2 text-sm text-text-muted">{siteConfig.coreMessage}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href={ctas.bookDemo.href} variant="secondary">
              {ctas.bookDemo.label}
            </Button>
            <Button as="a" href={ctas.getStarted.href} variant="brand" icon={<ArrowRight className="h-4 w-4" />}>
              {ctas.getStarted.label}
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-7">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" aria-label="WALOOP home" className="inline-block">
              <BrandLockup className="h-20" />
            </Link>
            <p className="mt-4 text-sm font-semibold">
              <span className="text-brand-green-deep">Built on Trust.</span> <span className="text-brand-green">Driven by AI.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">{footer.description}</p>
            <MetaVerifiedBadge size="sm" className="mt-5" />

            <div className="mt-6 flex flex-col gap-2.5 text-sm text-text-muted">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-text">
                <ChannelIcon channel="whatsapp" className="h-4 w-4 text-[#25D366]" /> {siteConfig.whatsapp} (WhatsApp)
              </a>
              <a href={siteConfig.phoneLink} className="flex items-center gap-2 hover:text-text">
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-text">
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
              <a href={siteConfig.website} className="flex items-center gap-2 hover:text-text">
                <Globe className="h-4 w-4" /> {siteConfig.websiteLabel}
              </a>
              <a href={siteConfig.appUrl} className="flex items-center gap-2 hover:text-text">
                <LayoutDashboard className="h-4 w-4" /> {siteConfig.appLabel}
              </a>
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-heading text-sm font-bold text-text">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-text-muted transition-colors hover:text-brand-green-deep">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-text-soft sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <p className="font-semibold">
            {siteConfig.name} — {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
