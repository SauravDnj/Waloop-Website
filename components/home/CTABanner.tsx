import { ArrowRight, Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="section-dark relative overflow-hidden rounded-card p-10 text-center sm:p-16">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-60" />
            <h2 className="text-display text-gradient-heading mx-auto max-w-2xl text-balance text-3xl sm:text-5xl">
              Transform to an <span className="text-gradient-brand">AI-Powered Communications Stack</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-text-muted">
              The all-in-one WALOOP messaging platform for WhatsApp Business API, RCS Messaging, Bulk
              Messaging, Smart IVR, and Voice Bots — with webhooks and real-time analytics built in.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href="#contact" size="lg" icon={<Rocket className="h-4 w-4" />}>
                Request Your Free Demo
              </Button>
              <Button as="a" href="#products" variant="ghost-dark" size="lg">
                Explore Our Solutions <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
