import { ArrowRight } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { PlatformVisual } from "@/components/visuals/PlatformVisual";
import { getPlatformArea } from "@/lib/platform";

const analytics = getPlatformArea("analytics")!;

/** §22 Analytics preview. */
export function AnalyticsSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Badge className="mb-4">Analytics</Badge>
          <h2 className="text-balance font-heading text-3xl font-bold text-text sm:text-4xl">{analytics.hero.title}</h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">{analytics.hero.description}</p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {analytics.features.items.map((m) => (
              <li key={m.title} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/[0.08] text-brand-green-deep">
                  <DynamicIcon name={m.icon} className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-text">{m.title}</span>
                  <span className="block text-[13px] leading-snug text-text-muted">{m.description}</span>
                </span>
              </li>
            ))}
          </ul>
          <Button as="a" href="/platform/analytics" className="mt-8" icon={<ArrowRight className="h-4 w-4" />}>
            Explore Analytics
          </Button>
        </Reveal>
        <Reveal delay={0.1}>
          <PlatformVisual visual="analytics" />
        </Reveal>
      </div>
    </Section>
  );
}
