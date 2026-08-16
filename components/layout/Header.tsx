"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { SquareDotFrame } from "@/components/ui/SquareDotFrame";
import { navGroups, simpleNavLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileGroup, setMobileGroup] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-bg/95 backdrop-blur-lg" : "border-border bg-bg",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-stretch justify-between">
        <SquareDotFrame className="flex items-center border-r border-border pl-4 pr-6 sm:pl-6">
          <Logo />
        </SquareDotFrame>

        <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
          {navGroups.map((group) => (
            <MegaMenu key={group.label} group={group} />
          ))}
          {simpleNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative px-3.5 py-2 font-heading text-xs font-semibold uppercase tracking-wide text-text transition-colors after:absolute after:bottom-1 after:left-3.5 after:h-px after:w-0 after:bg-brand-green after:transition-all after:duration-300 hover:after:w-[calc(100%-1.75rem)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SquareDotFrame className="hidden items-center gap-4 border-l border-border pl-6 pr-4 lg:flex sm:pr-6">
          <ThemeToggle />
          <Link
            href="/login"
            className="font-heading text-xs font-semibold uppercase tracking-wide text-text-muted transition-colors hover:text-text"
          >
            Login
          </Link>
          <Button as="a" href="/#demo" variant="primary" size="sm">
            Request Demo
          </Button>
        </SquareDotFrame>

        <div className="flex items-center gap-2 border-l border-border pl-4 pr-4 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
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
            className="overflow-hidden border-t border-border bg-bg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navGroups.map((group) => (
                <div key={group.label} className="border-b border-border/70 last:border-none">
                  <button
                    type="button"
                    onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}
                    className="flex w-full items-center justify-between py-3 text-left font-heading text-sm font-semibold uppercase tracking-wide text-text"
                  >
                    {group.label}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", mobileGroup === group.label && "rotate-180")}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileGroup === group.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pb-4 pl-2">
                          {group.columns.flatMap((c) => c.links).map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm text-text-muted"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="flex flex-col gap-1 border-b border-border/70 py-2">
                {simpleNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-1.5 font-heading text-sm font-semibold uppercase tracking-wide text-text"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button as="a" href="/login" variant="secondary" size="sm">
                  Login
                </Button>
                <Button as="a" href="/#demo" variant="primary" size="sm">
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
