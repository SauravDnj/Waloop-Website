"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useInView } from "framer-motion";
import type { EcosystemSceneProps } from "@/components/three/EcosystemScene";
import { cn } from "@/lib/utils";

let webglSupport: boolean | undefined;

function detectWebGL() {
  if (webglSupport === undefined) {
    try {
      const canvas = document.createElement("canvas");
      webglSupport = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      webglSupport = false;
    }
  }
  return webglSupport;
}

const noopSubscribe = () => () => {};

/** WebGL availability — false during SSR so the 2D fallback renders first. */
function useWebGL() {
  return React.useSyncExternalStore(noopSubscribe, detectWebGL, () => false);
}

// ───────────────────────────── 2D fallbacks (also the server-rendered placeholder)

function JourneyFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src="/brand/waloop-icon.png"
        alt=""
        width={512}
        height={228}
        className="w-3/4 max-w-sm animate-[pulse_4s_ease-in-out_infinite] drop-shadow-[0_20px_40px_rgba(11,92,255,0.35)] motion-reduce:animate-none"
      />
    </div>
  );
}

/** Radial 2D wheel — a readable diagram on its own when 3D isn't available. */
export function EcosystemWheel({ nodes, centerLabel = "WALOOP", highlight }: EcosystemSceneProps) {
  const hasHighlight = !!highlight?.length;
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-[14%] rounded-full border border-dashed border-brand-blue/30" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <Image src="/brand/waloop-icon.png" alt="" width={512} height={228} className="w-24 sm:w-28" />
        <span className="rounded-full bg-brand-gradient px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-widest text-white">
          {centerLabel}
        </span>
      </div>
      {nodes.map((label, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const on = !hasHighlight || highlight!.includes(label);
        return (
          <span
            key={label}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border bg-surface px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-text shadow-card sm:text-[11px]",
              on ? "border-brand-blue/40" : "border-border opacity-50",
            )}
            style={{ left: `${50 + Math.cos(a) * 36}%`, top: `${50 + Math.sin(a) * 36}%` }}
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}

// ───────────────────────────── Lazy 3D scenes

const InfinityJourneyScene = dynamic(() => import("@/components/three/InfinityJourneyScene"), {
  ssr: false,
  loading: () => <JourneyFallback />,
});

const EcosystemScene = dynamic(() => import("@/components/three/EcosystemScene"), { ssr: false });

/** Hero visual — the WALOOP infinity loop with the customer journey travelling around it. */
export function InfinityJourney3D({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1 });
  const webgl = useWebGL();
  return (
    <div ref={ref} className={cn("relative aspect-[6/5] w-full", className)}>
      <p className="sr-only">
        Diagram: the WALOOP customer journey loop — Message, Channel, Conversation, CRM, Chatbot, Automation, Mini-App, Payment,
        Follow-up and Analytics.
      </p>
      {webgl ? <InfinityJourneyScene paused={!inView} /> : <JourneyFallback />}
    </div>
  );
}

/** Labelled WALOOP hub with connected nodes — ecosystem, industries, integrations, connections. */
export function Ecosystem3D({ className, ...props }: EcosystemSceneProps & { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1 });
  const webgl = useWebGL();
  return (
    <div ref={ref} className={cn("relative aspect-square w-full", className)}>
      <p className="sr-only">
        Diagram: {props.centerLabel ?? "WALOOP"} connected to {props.nodes.join(", ")}.
      </p>
      {webgl ? <EcosystemScene {...props} paused={!inView} /> : <EcosystemWheel {...props} />}
    </div>
  );
}
