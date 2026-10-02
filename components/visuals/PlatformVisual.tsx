"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  CircleHelp,
  Clock,
  CreditCard,
  FileText,
  Image as ImageIcon,
  Package,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import { BuilderCanvas } from "@/components/visuals/BuilderCanvas";
import { MiniAppPhone } from "@/components/mockups/MiniAppPhone";
import { ChannelIcon, channelMeta, type ChannelKey } from "@/components/brand/ChannelIcon";
import type { PlatformVisual as VisualKey } from "@/lib/platform";
import { cn } from "@/lib/utils";

function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-border bg-surface p-4 shadow-soft", className)}>{children}</div>;
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-widest text-text-soft">{children}</p>;
}

function Illustrative() {
  return (
    <p className="mt-3 text-center text-[11px] text-text-soft">Illustrative example — your workspace shows your own data.</p>
  );
}

// ───────────────────────────── Channels — channel icons → WALOOP hub → operations (§48)

function ChannelsVisual() {
  const channels: ChannelKey[] = ["whatsapp", "instagram", "facebook", "rcs"];
  const outputs = ["CRM", "Chatbots", "Automation", "Analytics"];
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-1">
        {channels.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center gap-1 rounded-xl border border-border bg-surface px-2 py-2.5 shadow-card sm:flex-row sm:gap-2 sm:px-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ background: channelMeta[c].color }}>
              <ChannelIcon channel={c} className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-semibold text-text sm:text-xs">{channelMeta[c].label}</span>
          </motion.div>
        ))}
      </div>

      <div aria-hidden className="relative mx-auto h-6 w-px overflow-hidden bg-border sm:h-px sm:w-10">
        <span className="animate-flow-y absolute left-0 top-0 h-3 w-px bg-brand-gradient sm:hidden" />
        <span className="animate-flow-x absolute left-0 top-0 hidden h-px w-4 bg-brand-gradient sm:block" />
      </div>

      <div className="border-brand-gradient flex flex-1 flex-col items-center gap-2 rounded-2xl px-4 py-6 text-center shadow-glow">
        <Image src="/brand/waloop-icon.png" alt="" width={512} height={228} className="w-20" />
        <p className="font-heading text-sm font-bold text-text">WALOOP Channel Hub</p>
        <p className="text-[11px] text-text-muted">One shared workspace for every conversation</p>
      </div>

      <div aria-hidden className="relative mx-auto h-6 w-px overflow-hidden bg-border sm:h-px sm:w-10">
        <span className="animate-flow-y absolute left-0 top-0 h-3 w-px bg-brand-gradient sm:hidden" />
        <span className="animate-flow-x absolute left-0 top-0 hidden h-px w-4 bg-brand-gradient sm:block" />
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-1">
        {outputs.map((o) => (
          <span key={o} className="rounded-lg border border-brand-green/30 bg-brand-green/[0.08] px-2 py-2 text-center text-[11px] font-semibold text-text sm:px-3 sm:text-xs">
            {o}
          </span>
        ))}
      </div>
    </div>
  );
}

// ───────────────────────────── CRM — profile + conversation + timeline (§10)

function CrmVisual() {
  const timeline = [
    "Message received on WhatsApp",
    "Bot: selected “Pricing”",
    "Lead captured · Super Field updated",
    "Added to segment “Growth interest”",
    "Assigned to Sales department",
    "Follow-up scheduled",
  ];
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col gap-3">
          <Panel>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-heading text-sm font-bold text-white">
                PS
              </span>
              <div>
                <p className="text-sm font-bold text-text">Priya Sharma</p>
                <p className="text-[11px] text-text-muted">+91 98••• •••10 · Ahmedabad</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Lead", "Growth interest", "Source: WhatsApp campaign"].map((t) => (
                <span key={t} className="rounded-full bg-brand-blue/[0.08] px-2 py-0.5 text-[10px] font-semibold text-brand-green-deep">
                  {t}
                </span>
              ))}
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]">
              {[
                ["Business type", "Retail"],
                ["Team size", "11–50"],
                ["Interest", "Pricing"],
                ["Owner", "Sales"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-text-soft">{k}</dt>
                  <dd className="font-semibold text-text">{v}</dd>
                </div>
              ))}
            </dl>
          </Panel>
          <Panel>
            <Label>Timeline</Label>
            <ol className="space-y-2">
              {timeline.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2 text-[11.5px] text-text-muted"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gradient" />
                  {t}
                </motion.li>
              ))}
            </ol>
          </Panel>
        </div>
        <Panel className="flex flex-col bg-[#efeae2] p-3 dark:bg-[#0b141a]">
          <Label>Live Chat</Label>
          <div className="flex flex-1 flex-col gap-2 text-[12px]">
            <span className="max-w-[85%] self-end rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 text-[#111b21] dark:bg-[#005c4b] dark:text-[#e9edef]">
              Hi, I want to know about your product.
            </span>
            <span className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 text-[#111b21] dark:bg-[#202c33] dark:text-[#e9edef]">
              Absolutely! What would you like to explore?
            </span>
            <span className="max-w-[85%] self-end rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 text-[#111b21] dark:bg-[#005c4b] dark:text-[#e9edef]">
              Pricing
            </span>
            <span className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 text-[#111b21] dark:bg-[#202c33] dark:text-[#e9edef]">
              Starter — ₹15,000/year · Growth — ₹30,000/year
            </span>
            <div className="mt-auto rounded-lg border border-dashed border-black/15 bg-white/70 px-2.5 py-2 text-[11px] text-[#54656f] dark:border-white/15 dark:bg-white/5 dark:text-[#8696a0]">
              <span className="font-semibold">Canned reply:</span> “Would you like to book a demo with our team?”
            </div>
          </div>
        </Panel>
      </div>
      <Illustrative />
    </div>
  );
}

// ───────────────────────────── Payments — order → payment → confirmation (§15)

function PaymentsVisual() {
  const [paid, setPaid] = React.useState(true);
  React.useEffect(() => {
    const id = setInterval(() => setPaid((p) => !p), 3200);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <Panel>
          <Label>Payment order</Label>
          <p className="font-heading text-sm font-bold text-text">Order #WL-1042</p>
          <ul className="mt-2 space-y-1 text-[12px] text-text-muted">
            <li className="flex justify-between">
              <span>Selected service</span>
              <span className="font-semibold text-text">Consultation</span>
            </li>
            <li className="flex justify-between">
              <span>Customer</span>
              <span className="font-semibold text-text">Priya Sharma</span>
            </li>
          </ul>
          <button
            type="button"
            tabIndex={-1}
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#008069] py-2 text-xs font-semibold text-white"
          >
            <CreditCard className="h-3.5 w-3.5" /> Pay via payment gateway
          </button>
        </Panel>

        <ArrowRight className="mx-auto hidden h-5 w-5 text-brand-blue sm:block" aria-hidden />
        <ArrowDown className="mx-auto h-5 w-5 text-brand-blue sm:hidden" aria-hidden />

        <Panel>
          <Label>Payment status</Label>
          <div className="mb-3 flex gap-1.5">
            {["Paid", "Pending"].map((s) => (
              <span
                key={s}
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors",
                  (s === "Paid") === paid ? "bg-brand-gradient text-white" : "bg-surface-alt text-text-soft",
                )}
              >
                {s}
              </span>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.ul
              key={paid ? "paid" : "pending"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="space-y-2 text-[12px]"
            >
              {(paid
                ? [
                    { icon: CheckCircle2, t: "Confirmation sent on WhatsApp" },
                    { icon: UserRound, t: "CRM record updated" },
                  ]
                : [
                    { icon: BellRing, t: "Reminder automation scheduled" },
                    { icon: Clock, t: "Follow-up in the workflow" },
                  ]
              ).map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-center gap-2 text-text">
                  <Icon className={cn("h-4 w-4", paid ? "text-brand-green" : "text-amber-500")} /> {t}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </Panel>
      </div>
      <Illustrative />
    </div>
  );
}

// ───────────────────────────── Dynamic experiences — data → template → image/PDF (§16)

function DynamicVisual() {
  return (
    <div>
      <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[0.9fr_auto_1.1fr]">
        <div className="flex flex-col gap-2">
          <Panel className="p-3">
            <Label>Customer data</Label>
            <p className="text-[12px] text-text">Name: <b>Priya</b> · City: <b>Ahmedabad</b></p>
          </Panel>
          <Panel className="p-3">
            <Label>Business data</Label>
            <p className="text-[12px] text-text">Offer: <b>Festive offer</b> · Valid: <b>this week</b></p>
          </Panel>
          <Panel className="p-3">
            <Label>Template</Label>
            <p className="font-mono text-[11px] text-text-muted">Hi {"{{name}}"}, your {"{{offer}}"} is ready</p>
          </Panel>
        </div>
        <ArrowRight className="mx-auto hidden h-5 w-5 text-brand-blue sm:block" aria-hidden />
        <ArrowDown className="mx-auto h-5 w-5 text-brand-blue sm:hidden" aria-hidden />
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ rotate: -4, opacity: 0 }}
            whileInView={{ rotate: -3, opacity: 1 }}
            viewport={{ once: true }}
            className="flex aspect-[4/5] flex-col justify-between rounded-xl bg-brand-gradient p-3 text-white shadow-brand-glow"
          >
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider opacity-90">
              <ImageIcon className="h-3 w-3" /> Image
            </span>
            <div>
              <p className="text-[11px] opacity-90">Hi Priya,</p>
              <p className="font-heading text-base font-bold leading-tight">Your festive offer is ready</p>
            </div>
            <span className="rounded-md bg-white/20 px-2 py-1 text-center text-[10px] font-semibold">Valid this week</span>
          </motion.div>
          <motion.div
            initial={{ rotate: 4, opacity: 0 }}
            whileInView={{ rotate: 3, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex aspect-[4/5] flex-col gap-1.5 rounded-xl border border-border bg-white p-3 text-[#071330] shadow-soft"
          >
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0b5cff]">
              <FileText className="h-3 w-3" /> PDF
            </span>
            <p className="font-heading text-[13px] font-bold">Quotation</p>
            <p className="text-[10px] text-[#55617a]">Prepared for Priya · Ahmedabad</p>
            <span className="mt-1 h-1.5 w-full rounded bg-[#eef3f9]" />
            <span className="h-1.5 w-4/5 rounded bg-[#eef3f9]" />
            <span className="h-1.5 w-3/5 rounded bg-[#eef3f9]" />
            <span className="mt-auto h-1.5 w-2/5 self-end rounded bg-[#14c95f]" />
          </motion.div>
        </div>
      </div>
      <Illustrative />
    </div>
  );
}

// ───────────────────────────── AI — content → AI knowledge → question → response (§17–18)

function AiVisual() {
  const sources = [
    { icon: Package, label: "Product data" },
    { icon: CircleHelp, label: "FAQs" },
    { icon: ShieldCheck, label: "Policies" },
    { icon: BookOpen, label: "Content" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-4 gap-2">
        {sources.map(({ icon: Icon, label }) => (
          <span key={label} className="flex flex-col items-center gap-1 rounded-xl border border-border bg-surface px-1 py-2 text-[10.5px] font-semibold text-text shadow-card">
            <Icon className="h-4 w-4 text-brand-green-deep" /> {label}
          </span>
        ))}
      </div>
      <ArrowDown className="mx-auto h-4 w-4 text-brand-blue" aria-hidden />
      <div className="border-brand-gradient flex items-center justify-center gap-2 rounded-xl px-4 py-3 shadow-glow">
        <BrainCircuit className="h-5 w-5 text-brand-green-deep" />
        <span className="font-heading text-sm font-bold text-text">WALOOP AI Knowledge</span>
      </div>
      <ArrowDown className="mx-auto h-4 w-4 text-brand-blue" aria-hidden />
      <Panel className="space-y-2 bg-[#efeae2] p-3 text-[12px] dark:bg-[#0b141a]">
        <p className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 text-[#111b21] dark:bg-[#005c4b] dark:text-[#e9edef]">
          Do you have a yearly plan for small businesses?
        </p>
        <p className="max-w-[90%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 text-[#111b21] dark:bg-[#202c33] dark:text-[#e9edef]">
          <span className="mb-0.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0b5cff] dark:text-[#4fb8ff]">
            <BrainCircuit className="h-3 w-3" /> AI response
          </span>
          Yes — Starter is ₹15,000/year for businesses starting with customer engagement. Want me to connect you with our team?
        </p>
        <p className="mx-auto w-fit rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold text-[#54656f] dark:bg-white/10 dark:text-[#8696a0]">
          <Users className="mr-1 inline h-3 w-3" /> Human handoff available
        </p>
      </Panel>
    </div>
  );
}

// ───────────────────────────── Analytics — conceptual dashboard (§22)

function AnalyticsVisual() {
  const bars = [38, 52, 44, 66, 58, 74, 62, 80, 71, 88, 76, 92];
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <Panel className="col-span-2">
          <div className="flex items-center justify-between">
            <Label>Conversations · channel activity</Label>
            <span className="flex gap-2 text-[10px] text-text-soft">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-brand-blue" />WhatsApp</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-brand-green" />Other</span>
            </span>
          </div>
          <div className="flex h-24 items-end gap-1.5" aria-hidden>
            {bars.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="flex-1 rounded-t bg-gradient-to-t from-brand-blue to-brand-cyan"
              />
            ))}
          </div>
        </Panel>
        {[
          { title: "CRM", rows: ["Leads", "Contacts", "Segments"] },
          { title: "Automation", rows: ["Workflows", "Triggers", "Actions"] },
          { title: "Chatbots", rows: ["Bot interactions", "Flow activity"] },
          { title: "Payments", rows: ["Orders", "Status"] },
        ].map((card, ci) => (
          <Panel key={card.title} className="p-3">
            <Label>{card.title}</Label>
            <ul className="space-y-2">
              {card.rows.map((r, i) => (
                <li key={r}>
                  <span className="text-[11px] text-text-muted">{r}</span>
                  <span className="mt-0.5 block h-1.5 overflow-hidden rounded-full bg-surface-alt">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${45 + ((ci * 17 + i * 23) % 50)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                      className="block h-full rounded-full bg-brand-gradient"
                    />
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] text-text-soft">Conceptual dashboard — no real figures shown. Your analytics reflect your own account activity.</p>
    </div>
  );
}

// ───────────────────────────── Workspace — team → roles → departments → permissions (§23–24)

function WorkspaceVisual() {
  const teams = ["Sales", "Support", "Marketing", "Accounts", "Operations"];
  return (
    <div>
      <div className="flex flex-col items-center">
        <Panel className="flex items-center gap-2 px-4 py-2.5">
          <BadgeCheck className="h-4 w-4 text-brand-green-deep" />
          <span className="font-heading text-sm font-bold text-text">Admin</span>
          <span className="rounded-full bg-brand-blue/[0.08] px-2 py-0.5 text-[10px] font-semibold text-brand-green-deep">All permissions</span>
        </Panel>
        <div aria-hidden className="h-5 w-px bg-border" />
        <div aria-hidden className="h-px w-[80%] bg-border" />
        <div className="grid w-full grid-cols-5 gap-1.5">
          {teams.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center"
            >
              <span aria-hidden className="h-4 w-px bg-border" />
              <span className="w-full rounded-lg border border-border bg-surface px-1 py-2 text-center text-[10.5px] font-semibold text-text shadow-card">
                {t}
              </span>
              <span className="mt-1.5 flex -space-x-1.5" aria-hidden>
                {[0, 1].map((a) => (
                  <span key={a} className="h-5 w-5 rounded-full border-2 border-surface bg-brand-gradient opacity-80" />
                ))}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px]">
        {["Roles", "Permissions", "Departments"].map((t) => (
          <span key={t} className="rounded-lg bg-surface-alt px-2 py-1.5 font-semibold text-text-muted">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ───────────────────────────── Router

export function PlatformVisual({ visual, className }: { visual: VisualKey; className?: string }) {
  const content = (() => {
    switch (visual) {
      case "channels":
        return <ChannelsVisual />;
      case "crm":
        return <CrmVisual />;
      case "chatbot":
        return (
          <BuilderCanvas
            label="Chatbot flow builder"
            nodes={[
              { type: "Trigger", title: "Customer sends a message", tone: "trigger" },
              { type: "Message", title: "Welcome message" },
              { type: "Question · Buttons", title: "“What do you need?”", tone: "logic" },
            ]}
            branches={[
              { label: "Products", nodes: [{ type: "Message", title: "Product menu" }] },
              { label: "Support", nodes: [{ type: "Handoff", title: "Support department" }] },
              { label: "Demo", nodes: [{ type: "Bot field", title: "Lead capture → CRM", tone: "end" }] },
            ]}
          />
        );
      case "automation":
        return (
          <BuilderCanvas
            label="Workflow builder"
            nodes={[
              { type: "Trigger", title: "New lead created", tone: "trigger" },
              { type: "Action", title: "Check lead data" },
              { type: "Condition", title: "Qualified?", tone: "logic" },
            ]}
            branches={[
              { label: "Yes", nodes: [{ type: "Action", title: "Assign Sales + notify team" }] },
              { label: "No", nodes: [{ type: "Action", title: "Nurture follow-up" }] },
            ]}
            after={[{ type: "Action", title: "CRM update", tone: "end" }]}
          />
        );
      case "miniapp":
        return <MiniAppPhone />;
      case "payments":
        return <PaymentsVisual />;
      case "dynamic":
        return <DynamicVisual />;
      case "ai":
        return <AiVisual />;
      case "analytics":
        return <AnalyticsVisual />;
      case "workspace":
        return <WorkspaceVisual />;
    }
  })();
  return <div className={cn("relative", className)}>{content}</div>;
}
