"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GridShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  },
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 pos = position;

      // Mouse Distance Calculation
      float dist = distance(uv, uMouse);
      
      // The wave effect
      float wave = sin(dist * 15.0 - uTime * 3.0) * 0.2;
      float intensity = smoothstep(0.5, 0.0, dist);
      pos.z += wave * intensity;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    void main() {
      // Scale up the UV to create more grid squares
      vec2 gridUv = vUv * 40.0;
      
      // The magic math for drawing sharp lines instead of dots
      vec2 grid = abs(fract(gridUv - 0.5) - 0.5) / fwidth(gridUv);
      float line = min(grid.x, grid.y);
      
      // If the line value is less than 1.0, color it white with 15% opacity, else black
      float alpha = 1.0 - min(line, 1.0);
      vec4 gridColor = vec4(1.0, 1.0, 1.0, alpha * 0.15);
      
      gl_FragColor = gridColor;
    }
  `,
  transparent: true,
};

export function InteractivePlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Convert ThreeJS mouse coordinates
      materialRef.current.uniforms.uMouse.value.set(
        (state.pointer.x + 1) / 2,
        (state.pointer.y + 1) / 2
      );
    }
  });

  return (
    <mesh position={[0, 0, -2]}>
      {/* 30x20 plane with plenty of vertices for bending */}
      <planeGeometry args={[30, 20, 150, 150]} />
      <shaderMaterial 
        ref={materialRef}
        args={[GridShaderMaterial]}
        wireframe={false}
      />
    </mesh>
  );
}