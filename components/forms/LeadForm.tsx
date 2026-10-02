"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedCheckmark } from "@/components/ui/AnimatedCheckmark";
import { ChannelIcon } from "@/components/brand/ChannelIcon";
import { siteConfig, whatsappMessageLink } from "@/lib/content";
import { platformAreas } from "@/lib/platform";

const inputClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-soft focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/25";

type LeadFormProps = {
  /** "demo" adds a preferred-date field and phrases the message as a demo request. */
  intent?: "contact" | "demo";
  submitLabel?: string;
};

/**
 * The site has no backend, so the form hands the enquiry to WALOOP's official WhatsApp
 * number with the details prefilled (and offers email as an alternative).
 */
export function LeadForm({ intent = "contact", submitLabel }: LeadFormProps) {
  const [sentText, setSentText] = React.useState<string | null>(null);

  function buildMessage(data: FormData) {
    const lines = [
      intent === "demo" ? "Hi WALOOP, I'd like to book a demo." : "Hi WALOOP, I have a question.",
      `Name: ${data.get("name")}`,
      data.get("company") ? `Business: ${data.get("company")}` : "",
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : "",
      data.get("interest") ? `Interested in: ${data.get("interest")}` : "",
      data.get("date") ? `Preferred date: ${data.get("date")}` : "",
      data.get("message") ? `Message: ${data.get("message")}` : "",
    ];
    return lines.filter(Boolean).join("\n");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = buildMessage(new FormData(e.currentTarget));
    window.open(whatsappMessageLink(text), "_blank", "noopener,noreferrer");
    setSentText(text);
  }

  if (sentText) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="soft-panel flex flex-col items-center gap-4 p-10 text-center"
      >
        <AnimatedCheckmark />
        <h3 className="font-heading text-xl font-bold text-text">Your message is ready on WhatsApp</h3>
        <p className="max-w-sm text-sm text-text-muted">
          We opened WhatsApp with your details for {siteConfig.whatsapp}. Press send there and the WALOOP team will get back to you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button as="a" href={whatsappMessageLink(sentText)} variant="brand" size="sm">
            Open WhatsApp again
          </Button>
          <Button
            as="a"
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(intent === "demo" ? "Demo request" : "Enquiry")}&body=${encodeURIComponent(sentText)}`}
            variant="secondary"
            size="sm"
          >
            <Mail className="h-4 w-4" /> Send by email instead
          </Button>
        </div>
        <button type="button" onClick={() => setSentText(null)} className="text-xs font-semibold text-text-soft hover:text-text">
          Edit details
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="soft-panel grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 sm:p-9">
      <Field label="Your name" htmlFor="name">
        <input id="name" name="name" required autoComplete="name" placeholder="Your full name" className={inputClass} />
      </Field>
      <Field label="Business name" htmlFor="company">
        <input id="company" name="company" autoComplete="organization" placeholder="Company / brand" className={inputClass} />
      </Field>
      <Field label="Phone / WhatsApp" htmlFor="phone">
        <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91" className={inputClass} />
      </Field>
      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" className={inputClass} />
      </Field>
      <Field label="Interested in" htmlFor="interest" className={intent === "demo" ? "" : "sm:col-span-2"}>
        <select id="interest" name="interest" className={inputClass} defaultValue="">
          <option value="">Select (optional)</option>
          <option>Complete platform</option>
          {platformAreas.map((a) => (
            <option key={a.slug}>{a.name}</option>
          ))}
          <option>Pricing — Starter / Growth / Enterprise</option>
        </select>
      </Field>
      {intent === "demo" && (
        <Field label="Preferred date" htmlFor="date">
          <input id="date" name="date" type="date" className={inputClass} />
        </Field>
      )}
      <Field label="Tell us about your use case" htmlFor="message" className="sm:col-span-2">
        <textarea id="message" name="message" rows={4} placeholder="What would you like to build with WALOOP?" className={`${inputClass} resize-none`} />
      </Field>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-text-soft">Submitting opens WhatsApp with your details for {siteConfig.whatsapp}.</p>
        <Button type="submit" variant="brand" size="lg" icon={<ChannelIcon channel="whatsapp" className="h-4 w-4" />}>
          {submitLabel ?? (intent === "demo" ? "Request My Demo" : "Talk to WALOOP")}
        </Button>
      </div>
    </form>
  );
}

function Field({ label, htmlFor, children, className }: { label: string; htmlFor: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-wide text-text-soft">
        {label}
      </label>
      {children}
    </div>
  );
}
