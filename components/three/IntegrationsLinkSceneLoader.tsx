"use client";

import dynamic from "next/dynamic";
import { IntegrationsLinkFallback } from "@/components/three/IntegrationsLinkFallback";

export const IntegrationsLinkScene = dynamic(() => import("@/components/three/IntegrationsLinkScene"), {
  ssr: false,
  loading: () => <IntegrationsLinkFallback />,
});
