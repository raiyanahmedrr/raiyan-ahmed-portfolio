"use client";

import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function GlassShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  useEffect(() => {
    if (!meshRef.current) return;
    
    gsap.to(meshRef.current.position, {
      y: 10,       
      z: -10,     
      rotationZ: 5, 
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "body", 
        start: "top top",
        end: "800px top", 
        scrub: 1, 
      }
    });

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
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Hollow Triangle Rotation & Scale */}
      <mesh ref={meshRef} scale={1.8} rotation={[0, 0, Math.PI / 2]}>
        {/* The Hollow Triangle Shape */}
        <torusGeometry args={[1.5, 0.4, 32, 3]} />
        
        {/* Your older, heavy-distortion Glass Material */}
        <MeshTransmissionMaterial 
          backside 
          backsideThickness={2} 
          thickness={1.5} 
          chromaticAberration={0.8}
          anisotropy={1} 
          distortion={0.2} 
          distortionScale={0.3} 
          temporalDistortion={0.1}
          ior={1.5} 
          color="#ffffff" 
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}