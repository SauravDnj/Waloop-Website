import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2 ${className ?? ""}`}>
      <img
        src="/WALOOP_Brand_Kit_FINAL/02_LOGO_ONLY/WALOOP_logo_512.png"
        alt="WALOOP"
        className="h-8 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-heading text-xl font-semibold tracking-tight text-text">
        <span className="text-brand-green-deep dark:text-brand-green">WA</span>
        LOOP
      </span>
    </Link>
  );
}
