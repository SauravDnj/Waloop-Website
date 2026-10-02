import { MetaVerifiedBadge } from "@/components/brand/MetaVerifiedBadge";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Badge } from "@/components/ui/Badge";
import { brandPromise, siteConfig, trust } from "@/lib/content";

/** §46.2 Trust / platform introduction + §67 capability-based trust + §1 brand promise. */
export function TrustIntro() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Badge className="mb-4">{trust.heading}</Badge>
            <h2 className="text-balance font-heading text-3xl font-bold text-text sm:text-4xl">
              {siteConfig.alternativeHeadline}
            </h2>
            <p className="mt-4 text-pretty text-base text-text-muted sm:text-lg">{siteConfig.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MetaVerifiedBadge size="md" />
              <p className="max-w-[14rem] text-sm font-semibold leading-snug text-text">
                <span className="text-brand-green-deep">Built on Trust.</span>{" "}
                <span className="text-brand-green">Driven by AI.</span>
              </p>
            </div>
          </Reveal>

          <div>
            <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-5">
              {brandPromise.map((p, i) => (
                <RevealItem key={p.title} className="soft-panel flex flex-col p-4 sm:min-h-44">
                  <span className="font-heading text-[11px] font-bold text-text-soft">0{i + 1}</span>
                  <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white">
                    <DynamicIcon name={p.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <p className="mt-3 font-heading text-base font-bold text-text">{p.title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-text-muted">{p.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <div className="mt-4 flex flex-wrap gap-2">
              {trust.capabilities.map((c) => (
                <span
                  key={c.title}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-text-muted"
                >
                  <DynamicIcon name={c.icon} className="h-3.5 w-3.5 text-brand-green-deep" /> {c.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
