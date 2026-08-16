import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { aiFeatures, aiMetrics } from "@/lib/content";
import { AIAssistantWidget } from "@/components/home/AIAssistantWidget";

export function AIPlatform() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_15%_50%,var(--color-hero-glow-1),transparent)]"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Badge>AI-Powered Platform</Badge>
          <h2 className="mt-5 text-balance font-sans text-3xl font-bold text-text sm:text-4xl">
            Next-gen <span className="text-gradient-ai">conversational AI</span>
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-text-muted">
            WALOOP combines leading LLM and smart-technology frameworks to automate conversations and improve
            outcomes across every channel you run.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            {aiFeatures.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <div>
                  <p className="font-semibold text-text">{feature.title}</p>
                  <p className="text-sm text-text-muted">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {aiMetrics.map((metric) => (
              <div key={metric.label}>
                <AnimatedCounter value={metric.value} className="text-xl font-extrabold text-gradient-brand sm:text-2xl" />
                <p className="mt-1 text-xs leading-snug text-text-soft">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <AIAssistantWidget />
        </Reveal>
      </div>
    </section>
  );
}
