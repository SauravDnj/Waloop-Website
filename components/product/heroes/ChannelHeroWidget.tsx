"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export type ChannelHeroWidgetStat = { label: string; value: string };
export type ChannelHeroFeedItem = { title: string; subtitle: string; tag: string };

export type ChannelHeroWidgetProps = {
  icon: string;
  title: string;
  status: string;
  stats: ChannelHeroWidgetStat[];
  feedLabel: string;
  feed: ChannelHeroFeedItem[];
};

export function ChannelHeroWidget({ icon, title, status, stats, feedLabel, feed }: ChannelHeroWidgetProps) {
  const Icon = (Icons[icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(closest-side,rgba(152,255,3,0.18),transparent)] blur-2xl" />

      <div className="soft-panel overflow-hidden">
        <div className="flex items-center justify-between bg-[image:var(--gradient-dark-btn)] px-5 py-4 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="flex items-center gap-1 text-[11px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> {status}
              </p>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> Live
          </motion.span>
        </div>

        <div className="grid grid-cols-2 gap-3 px-5 pt-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-border bg-surface-alt p-3 text-center"
            >
              <AnimatedCounter value={stat.value} className="font-heading text-lg font-extrabold text-gradient-heading" />
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-text-soft">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="px-5 py-6">
          <p className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-text-soft">
            <Icons.Activity className="h-3.5 w-3.5 text-brand-green" /> {feedLabel}
          </p>
          <div className="flex flex-col gap-2.5">
            {feed.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.4 }}
                className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface-alt px-3.5 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-text">{item.title}</p>
                  <p className="truncate text-[11px] text-text-soft">{item.subtitle}</p>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-bg px-2 py-0.5 text-[10px] font-medium text-text-muted">
                  {item.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
