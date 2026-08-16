import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Marquee } from "@/components/ui/Marquee";
import { clientLogos, stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green-deep to-brand-green-deep py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_80%_0%,rgba(255,255,255,0.14),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-2xl font-semibold uppercase tracking-tight sm:text-3xl">Powering Industry Leaders</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
            Enterprises across industries choose WALOOP for secure, scalable, and innovative communication
            solutions that drive real results.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <AnimatedCounter value={stat.value} className="font-heading text-3xl font-extrabold text-brand-green sm:text-4xl" />
              <p className="mt-2 text-xs uppercase tracking-wide text-white/75">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16 border-t border-white/15 pt-10">
          <Marquee>
            {clientLogos.map((client) => (
              <div key={client.name} className="flex shrink-0 flex-col items-center text-center">
                <p className="whitespace-nowrap text-sm font-bold">{client.name}</p>
                <p className="mt-0.5 whitespace-nowrap text-[10px] uppercase tracking-wide text-white/60">{client.category}</p>
              </div>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
}
