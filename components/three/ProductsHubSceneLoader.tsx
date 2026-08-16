"use client";

import dynamic from "next/dynamic";
import { ProductsHubFallback } from "@/components/three/ProductsHubFallback";

export const ProductsHubScene = dynamic(() => import("@/components/three/ProductsHubScene"), {
  ssr: false,
  loading: () => <ProductsHubFallback />,
});
