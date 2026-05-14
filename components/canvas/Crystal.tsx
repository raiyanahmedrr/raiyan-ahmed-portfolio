"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function GlassShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  useEffect(() => {
    if (!meshRef.current) return;
    
    // 1. Move it aggressively UP and BACK
    gsap.to(meshRef.current.position, {
      y: 10,       // Fly completely off the top of the screen
      z: -10,     
      rotationZ: 5, 
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "body", // Trigger immediately on scroll
        start: "top top",
        end: "800px top", // Finish the animation quickly (within 800px of scrolling)
        scrub: 1, 
      }
    });

    // 2. Scale it down to 0 so it completely disappears
    gsap.to(meshRef.current.scale, {
      x: 0, y: 0, z: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "800px top",
        scrub: 1, 
      }
    });
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* We reset position to 0 because the HTML wrapper handles the layout now */}
      <mesh ref={meshRef} scale={2.5} position={[0, 0, 0]}>
        <tetrahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial 
          backside backsideThickness={2} thickness={1.5} chromaticAberration={0.8}
          anisotropy={1} distortion={0.2} distortionScale={0.3} temporalDistortion={0.1}
          ior={1.5} color="#ffffff" roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function CrystalScene() {
  return (
    // STRICT LAYOUT: top-0, right-0, w-1/2 (Takes up exactly the right half of the screen)
    <div className="fixed top-0 right-0 w-full md:w-1/2 h-screen z-[1] pointer-events-none flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <GlassShape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}