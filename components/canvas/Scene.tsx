"use client";

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
// Import Bloom from postprocessing
import { EffectComposer, ChromaticAberration, Noise, Vignette, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

import { GlassShape } from './Crystal';
import { InteractivePlane } from './WaveGrid';

export default function MasterScene() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-auto bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="studio" />

        <InteractivePlane />
        <GlassShape />

        <EffectComposer disableNormalPass>
          {/* THE CYBERPUNK GLOW ENGINE */}
          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur={true} 
            intensity={1.5} 
          />
          
          <ChromaticAberration 
            blendFunction={BlendFunction.NORMAL} 
            offset={new THREE.Vector2(0.0005, 0.0005)} 
          />
          <Noise 
            premultiply 
            blendFunction={BlendFunction.ADD} 
            opacity={0.3} 
          />
          <Vignette 
            eskil={false} 
            offset={0.1} 
            darkness={1.1} 
          />
        </EffectComposer>

      </Canvas>
    </div>
  );
}