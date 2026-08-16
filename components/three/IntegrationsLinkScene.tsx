"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { IntegrationsLink3D } from "@/components/three/IntegrationsLink3D";
import { useReducedMotion } from "@/components/three/useReducedMotion";

export default function IntegrationsLinkScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-square w-full">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={40} color="#98ff03" />
        <pointLight position={[-3, -2, 2]} intensity={25} color="#b2ff43" />
        <directionalLight position={[0, 4, 5]} intensity={1.1} />
        <React.Suspense fallback={null}>
          <Float speed={reduceMotion ? 0 : 1.3} rotationIntensity={reduceMotion ? 0 : 0.28} floatIntensity={reduceMotion ? 0 : 0.55}>
            <IntegrationsLink3D reduceMotion={reduceMotion} />
          </Float>
          <Environment preset="city" />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
