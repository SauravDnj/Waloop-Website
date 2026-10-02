import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "tint" | "dark";
  size?: "default" | "wide" | "narrow";
};

/** Standard page section: vertical rhythm, container width and background tone. */
export function Section({ id, children, className, containerClassName, tone = "default", size = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-20 sm:py-28",
        tone === "tint" && "bg-section-tint",
        tone === "dark" && "section-dark overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          size === "default" && "max-w-7xl",
          size === "wide" && "max-w-[88rem]",
          size === "narrow" && "max-w-3xl",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
