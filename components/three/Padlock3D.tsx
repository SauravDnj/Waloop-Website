"use client";

import * as React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Torus } from "@react-three/drei";
import * as THREE from "three";

export function Padlock3D({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const group = React.useRef<THREE.Group>(null);
  const shackle = React.useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.35;
    }
    const targetX = reduceMotion ? 0 : pointer.y * 0.25;
    const targetZ = reduceMotion ? 0 : -pointer.x * 0.25;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetZ, 0.05);
  });

  return (
    <group ref={group}>
      {/* Shackle */}
      <Torus
        ref={shackle}
        args={[0.62, 0.14, 32, 64, Math.PI]}
        position={[0, 0.62, 0]}
      >
        <meshStandardMaterial color="#98ff03" metalness={0.7} roughness={0.25} />
      </Torus>
      <mesh position={[-0.62, 0.2, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.9, 32]} />
        <meshStandardMaterial color="#98ff03" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0.62, 0.2, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.9, 32]} />
        <meshStandardMaterial color="#98ff03" metalness={0.7} roughness={0.25} />
      </mesh>

      {/* Body */}
      <RoundedBox args={[1.7, 1.3, 0.9]} radius={0.18} smoothness={6} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#0a0a0a" metalness={0.4} roughness={0.35} />
      </RoundedBox>

      {/* Keyhole */}
      <mesh position={[0, -0.42, 0.46]}>
        <circleGeometry args={[0.13, 32]} />
        <meshStandardMaterial color="#b2ff43" emissive="#b2ff43" emissiveIntensity={1.4} />
      </mesh>
      <mesh position={[0, -0.62, 0.46]}>
        <planeGeometry args={[0.08, 0.24]} />
        <meshStandardMaterial color="#b2ff43" emissive="#b2ff43" emissiveIntensity={1.4} />
      </mesh>

      {/* Accent ring glow */}
      <Torus args={[0.95, 0.008, 16, 64]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshBasicMaterial color="#b2ff43" transparent opacity={0.5} />
      </Torus>
    </group>
  );
}
