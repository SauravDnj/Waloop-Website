"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedCheckmark } from "@/components/ui/AnimatedCheckmark";

export function ContactPageForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Send a Message"
          title="We'd Love to Hear From You"
          description="Fill in your details and a WALOOP team member will get back to you within one business day."
        />

        <Reveal delay={0.15} className="mt-12">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="soft-panel flex flex-col items-center gap-4 p-12 text-center"
            >
              <AnimatedCheckmark />
              <h3 className="text-xl font-bold text-text">Thanks — we&apos;ve got your message</h3>
              <p className="max-w-sm text-sm text-text-muted">
                A WALOOP team member will reach out shortly to follow up on your request.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="soft-panel grid grid-cols-1 gap-5 p-8 sm:grid-cols-2 sm:p-10"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-text-soft">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jordan Lee"
                  className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-soft focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-text-soft">
                  Business Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-soft focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-text-soft">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-soft focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-text-soft">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="I'd like a demo of..."
                  className="resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-soft focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto" icon={<Send className="h-4 w-4" />}>
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
