import { ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { siteConfig, trustPoints } from "@/lib/content";

export function TrustSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <Badge>
              <ShieldCheck className="h-3.5 w-3.5" /> Enterprise Trust
            </Badge>
            <h2 className="mt-5 text-balance font-sans text-3xl font-semibold text-text sm:text-4xl">
              Enterprise communications built on trust
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-text-muted">
              WALOOP is an enterprise-grade communications platform, established in {siteConfig.foundedYear} with
              corporate headquarters in {siteConfig.hq}, and backed by a dedicated team of {siteConfig.teamSize}{" "}
              communication experts. As an official Meta Business Solution Provider (BSP) partner, we provide
              official WhatsApp Business API, A2P bulk SMS, IVR voice solutions, missed call alerts, and RCS
              business messaging on a single unified, secure platform.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <RevealItem key={point.title} direction="right" className="border-l-2 border-brand-green/30 pl-4">
                <p className="font-semibold text-text">{point.title}</p>
                <p className="mt-1 text-xs text-text-soft">{point.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
