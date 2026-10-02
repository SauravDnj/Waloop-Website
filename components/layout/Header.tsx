"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MegaMenu, NavIcon } from "@/components/layout/MegaMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { ctas, isNavGroup, mainNav, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileGroup, setMobileGroup] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-bg/90 backdrop-blur-lg" : "border-transparent bg-bg",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex">
          {mainNav.map((entry) =>
            isNavGroup(entry) ? (
              <MegaMenu key={entry.label} group={entry} />
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                className={cn(
                  "rounded-lg px-2.5 py-2 font-heading text-[13px] font-semibold text-text transition-colors hover:bg-surface-alt hover:text-brand-green-deep",
                  pathname === entry.href && "text-brand-green-deep",
                )}
              >
                {entry.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <ThemeToggle />
          <Link
            href={siteConfig.appUrl}
            className="font-heading text-[13px] font-semibold text-text-muted transition-colors hover:text-text"
          >
            Login
          </Link>
          <Button as="a" href={ctas.bookDemo.href} variant="secondary" size="sm">
            {ctas.bookDemo.label}
          </Button>
          <Button as="a" href={ctas.getStarted.href} variant="brand" size="sm">
            {ctas.getStarted.label}
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="btn-soft-dark flex h-10 w-10 items-center justify-center rounded-btn"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-bg xl:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col px-4 py-3"
              onClick={(e) => {
                if ((e.target as HTMLElement).closest("a")) setMobileOpen(false);
              }}
            >
              {mainNav.map((entry) =>
                isNavGroup(entry) ? (
                  <div key={entry.label} className="border-b border-border/70">
                    <button
                      type="button"
                      onClick={() => setMobileGroup(mobileGroup === entry.label ? null : entry.label)}
                      aria-expanded={mobileGroup === entry.label}
                      className="flex w-full items-center justify-between py-3.5 text-left font-heading text-[15px] font-semibold text-text"
                    >
                      {entry.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileGroup === entry.label && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {mobileGroup === entry.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pb-3">
                            <Link href={entry.href} className="px-2 py-1.5 text-sm font-semibold text-brand-green-deep">
                              {entry.label} overview →
                            </Link>
                            {entry.columns
                              .flatMap((c) => c.links)
                              .map((link) => (
                                <Link key={link.label} href={link.href} className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-text-muted">
                                  <NavIcon name={link.icon} className="h-4 w-4 text-brand-green-deep" />
                                  {link.label}
                                </Link>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={entry.label}
                    href={entry.href}
                    className="border-b border-border/70 py-3.5 font-heading text-[15px] font-semibold text-text"
                  >
                    {entry.label}
                  </Link>
                ),
              )}
              <div className="mt-4 grid grid-cols-2 gap-2 pb-2">
                <Button as="a" href={ctas.bookDemo.href} variant="secondary" size="sm">
                  {ctas.bookDemo.label}
                </Button>
                <Button as="a" href={ctas.getStarted.href} variant="brand" size="sm">
                  {ctas.getStarted.label}
                </Button>
                <Link href={siteConfig.appUrl} className="col-span-2 py-2 text-center text-sm font-semibold text-text-muted">
                  Login to {siteConfig.appLabel}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
