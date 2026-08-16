import { Reveal } from "@/components/ui/Reveal";

type LegalSection = { heading: string; body: string[] };

type LegalLayoutProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalLayout({ title, updated, intro, sections }: LegalLayoutProps) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-border bg-surface-alt px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green-deep dark:text-brand-green">
            Legal
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-text-soft">Last updated: {updated}</p>
          <p className="mt-6 text-pretty text-base leading-relaxed text-text-muted">{intro}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 0.04, 0.3)}>
              <h2 className="text-lg font-bold text-text">{section.heading}</h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((paragraph, j) => (
                  <p key={j} className="text-sm leading-relaxed text-text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
