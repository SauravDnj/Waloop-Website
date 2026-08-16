"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Padlock3D } from "@/components/three/Padlock3D";
import { useReducedMotion } from "@/components/three/useReducedMotion";

export default function PadlockScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-square w-full">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.8]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={40} color="#98ff03" />
        <pointLight position={[-3, -2, 2]} intensity={25} color="#b2ff43" />
        <directionalLight position={[0, 4, 5]} intensity={1.1} />
        <React.Suspense fallback={null}>
          <Float speed={reduceMotion ? 0 : 1.4} rotationIntensity={reduceMotion ? 0 : 0.3} floatIntensity={reduceMotion ? 0 : 0.6}>
            <Padlock3D reduceMotion={reduceMotion} />
          </Float>
          <Environment preset="city" />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
