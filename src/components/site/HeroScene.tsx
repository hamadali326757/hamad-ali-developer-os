import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 1200;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.06;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function Cube({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.x = s.clock.elapsedTime * 0.3;
    ref.current.rotation.y = s.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Sphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function MouseCamera() {
  useFrame((state) => {
    const { mouse, camera } = state;
    camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.04;
    camera.position.y += (mouse.y * 0.8 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={["#03040a", 6, 14]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#7c3aed" />
      <pointLight position={[-5, -3, 3]} intensity={1} color="#06b6d4" />
      <pointLight position={[0, 4, -4]} intensity={0.8} color="#2563eb" />

      <MouseCamera />
      <ParticleField />

      <Cube position={[-3.2, 1.6, -1]} color="#2563eb" scale={0.9} />
      <Cube position={[3, -1.5, -2]} color="#7c3aed" scale={1.1} />
      <Cube position={[2.5, 2.2, 0.5]} color="#06b6d4" scale={0.7} />
      <Cube position={[-2.8, -1.8, 1]} color="#a855f7" scale={0.8} />

      <Sphere position={[-1.8, 0.6, -2.5]} color="#7c3aed" />
      <Sphere position={[2.2, 0.2, -3]} color="#06b6d4" />
      <Sphere position={[0.5, -2.4, -1.5]} color="#2563eb" />
    </Canvas>
  );
}
