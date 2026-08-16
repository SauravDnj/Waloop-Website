"use client";

import * as React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Torus, Sphere } from "@react-three/drei";
import * as THREE from "three";

export function IntegrationsLink3D({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const group = React.useRef<THREE.Group>(null);
  const ringA = React.useRef<THREE.Mesh>(null);
  const ringB = React.useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.28;
      if (ringA.current) ringA.current.rotation.z += delta * 0.15;
      if (ringB.current) ringB.current.rotation.z -= delta * 0.15;
    }
    const targetX = reduceMotion ? 0 : pointer.y * 0.22;
    const targetZ = reduceMotion ? 0 : -pointer.x * 0.22;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetZ, 0.05);
  });

  return (
    <group ref={group}>
      <Torus ref={ringA} args={[0.62, 0.16, 32, 64]} position={[-0.42, 0, 0]} rotation={[Math.PI / 2, 0.3, 0]}>
        <meshStandardMaterial color="#98ff03" metalness={0.6} roughness={0.25} />
      </Torus>
      <Torus ref={ringB} args={[0.62, 0.16, 32, 64]} position={[0.42, 0, 0]} rotation={[Math.PI / 2, -0.3, 0]}>
        <meshStandardMaterial color="#b2ff43" metalness={0.5} roughness={0.2} emissive="#b2ff43" emissiveIntensity={0.25} />
      </Torus>

      <Sphere args={[0.09, 24, 24]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" emissive="#b2ff43" emissiveIntensity={1.2} />
      </Sphere>

      <Torus args={[1.35, 0.006, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#b2ff43" transparent opacity={0.3} />
      </Torus>
    </group>
  );
}
