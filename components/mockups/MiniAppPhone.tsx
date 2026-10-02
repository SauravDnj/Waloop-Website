"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle2, ChevronRight, Database, X } from "lucide-react";
import { Bubble, PhoneFrame, ReplyButton } from "@/components/mockups/PhoneFrame";
import { cn } from "@/lib/utils";

// §14 / §50 — interactive Mini-App: Welcome → Select → Form → Confirm → CRM update.
const steps = ["Welcome", "Select", "Form", "Confirm", "CRM update"] as const;
const services = ["Product demo", "Consultation", "Service request"];

export function MiniAppPhone({ className }: { className?: string }) {
  const [step, setStep] = React.useState(0);
  const [choice, setChoice] = React.useState(services[0]);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));

  return (
    <div className={cn("flex flex-col items-center gap-5", className)}>
      {/* Step selector — lets the visitor follow the flow (§50) */}
      <div role="tablist" aria-label="Mini-App steps" className="flex flex-wrap justify-center gap-1.5">
        {steps.map((s, i) => (
          <button
            key={s}
            role="tab"
            type="button"
            aria-selected={step === i}
            onClick={() => setStep(i)}
            className={cn(
              "rounded-full px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide transition-colors",
              step === i ? "bg-brand-gradient text-white shadow-brand-glow" : "bg-surface-alt text-text-muted hover:text-text",
            )}
          >
            {i + 1}. {s}
          </button>
        ))}
      </div>

      <PhoneFrame>
        <div className="flex h-full flex-col gap-2 px-3 py-3">
          <Bubble from="business">Hi! Book your appointment request in a few taps 👇</Bubble>
          <div className="max-w-[85%]">
            <ReplyButton active={step === 0}>Open booking</ReplyButton>
          </div>

          <AnimatePresence mode="wait">
            {step >= 1 && step <= 3 && (
              <motion.div
                key={step}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 26, stiffness: 260 }}
                className="absolute inset-x-0 bottom-0 top-10 flex flex-col rounded-t-2xl bg-white text-[#111b21] shadow-[0_-10px_30px_rgba(0,0,0,0.15)] dark:bg-[#111b21] dark:text-[#e9edef]"
              >
                <div className="flex items-center gap-2 border-b border-black/5 px-4 py-3 dark:border-white/10">
                  <X className="h-4 w-4 opacity-60" aria-hidden />
                  <p className="flex-1 text-center text-sm font-semibold">
                    {step === 1 ? "Select a service" : step === 2 ? "Your details" : "Confirm details"}
                  </p>
                  <span className="w-4" />
                </div>

                <div className="flex-1 space-y-2.5 overflow-y-auto px-4 py-4 text-[13px]">
                  {step === 1 &&
                    services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setChoice(s)}
                        className="flex w-full items-center justify-between rounded-xl border border-black/10 px-3 py-2.5 text-left dark:border-white/10"
                      >
                        {s}
                        <span
                          className={cn(
                            "flex h-4 w-4 items-center justify-center rounded-full border",
                            choice === s ? "border-[#008069] bg-[#008069] text-white" : "border-black/30 dark:border-white/30",
                          )}
                        >
                          {choice === s && <Check className="h-2.5 w-2.5" />}
                        </span>
                      </button>
                    ))}

                  {step === 2 &&
                    [
                      ["Full name", "Priya Sharma"],
                      ["Phone", "+91 98••• •••10"],
                      ["City", "Ahmedabad"],
                    ].map(([label, value]) => (
                      <label key={label} className="block">
                        <span className="text-[11px] text-[#667781] dark:text-[#8696a0]">{label}</span>
                        <span className="mt-0.5 block rounded-lg border border-black/10 px-3 py-2 dark:border-white/10">{value}</span>
                      </label>
                    ))}

                  {step === 3 && (
                    <div className="space-y-2 rounded-xl bg-[#f0f2f5] p-3 dark:bg-[#202c33]">
                      <p>
                        <span className="text-[#667781] dark:text-[#8696a0]">Service:</span> {choice}
                      </p>
                      <p>
                        <span className="text-[#667781] dark:text-[#8696a0]">Name:</span> Priya Sharma
                      </p>
                      <p>
                        <span className="text-[#667781] dark:text-[#8696a0]">City:</span> Ahmedabad
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-3">
                  <button
                    type="button"
                    onClick={next}
                    className="flex w-full items-center justify-center gap-1 rounded-full bg-[#008069] py-2.5 text-sm font-semibold text-white dark:bg-[#00a884]"
                  >
                    {step === 3 ? "Confirm" : "Continue"} <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {step === 4 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
              <Bubble from="customer">✅ Submitted: {choice}</Bubble>
              <Bubble from="business">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366]" /> Request confirmed
                </span>
                <br />
                Thanks Priya! Our team will contact you shortly.
              </Bubble>
              <div className="mx-auto mt-2 flex items-center gap-2 rounded-xl border border-[#0b5cff]/30 bg-white px-3 py-2 text-[11px] font-semibold text-[#0b5cff] shadow-sm dark:bg-[#0b1429] dark:text-[#4fb8ff]">
                <Database className="h-3.5 w-3.5" /> WALOOP CRM updated · Lead created
              </div>
            </motion.div>
          )}
        </div>
      </PhoneFrame>

      {step === 0 && (
        <button type="button" onClick={next} className="text-sm font-semibold text-brand-green-deep hover:underline">
          Tap “Open booking” to start →
        </button>
      )}
      {step === 4 && (
        <button type="button" onClick={() => setStep(0)} className="text-sm font-semibold text-brand-green-deep hover:underline">
          Replay the Mini-App
        </button>
      )}
    </div>
  );
}
