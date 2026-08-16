"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";

type Field = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
};

type AuthCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  fields: Field[];
  submitLabel: string;
  footerText: string;
  footerLinkLabel: string;
  footerLinkHref: string;
};

export function AuthCard({
  eyebrow,
  title,
  description,
  fields,
  submitLabel,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: AuthCardProps) {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-grid py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-hero-glow"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="soft-panel w-full max-w-md p-8 sm:p-10"
      >
        <div className="flex justify-center">
          <Logo />
        </div>

        <span className="mt-6 block text-center text-xs font-semibold uppercase tracking-widest text-brand-green-deep dark:text-brand-green">
          {eyebrow}
        </span>
        <h1 className="mt-2 text-center text-2xl font-extrabold text-text">{title}</h1>
        <p className="mt-2 text-center text-sm text-text-muted">{description}</p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface-alt p-6 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-deep dark:text-brand-green">
              <Lock className="h-6 w-6" />
            </span>
            <p className="text-sm font-semibold text-text">The WALOOP customer portal is invite-only right now</p>
            <p className="text-xs text-text-muted">
              This preview site isn&apos;t connected to a live account system yet. Reach out and our team will set up
              access for you.
            </p>
            <Button as="a" href="/contact" size="sm" className="mt-1">
              Request Access
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label htmlFor={field.id} className="text-xs font-semibold uppercase tracking-wide text-text-soft">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-soft focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                />
              </div>
            ))}

            <Button type="submit" size="lg" className="mt-2 w-full justify-center">
              {submitLabel}
            </Button>
          </form>
        )}

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-text-muted">
          <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" />
          {footerText}{" "}
          <Link href={footerLinkHref} className="font-semibold text-brand-green-deep hover:underline dark:text-brand-green">
            {footerLinkLabel}
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
