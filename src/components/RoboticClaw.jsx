import React, { useRef, useEffect, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, Center, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Loader() {
  return null; 
}

function ClawModel({ startAnimation }) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/ClawModel.glb');

  // Clone scene to prevent caching issues
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const { actions } = useAnimations(animations, group);

  // 1. Force Scale & Center
  useEffect(() => {
    if (clonedScene) {
      const box = new THREE.Box3().setFromObject(clonedScene);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      
      const targetSize = 40.0; 
      const scaleFactor = maxDim > 0 ? targetSize / maxDim : 1;
      
      clonedScene.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  }, [clonedScene]);

  // 2. Simple Entrance Animation
  useEffect(() => {
    if (startAnimation && actions) {
      Object.keys(actions).forEach((key) => {
        const action = actions[key];
        if (action) {
          action.reset().fadeIn(0.5).play();
        }
      });
    }
  }, [startAnimation, actions]);

  return (
    <group ref={group}>
      <Center>
        <primitive object={clonedScene} />
      </Center>
    </group>
  );
}

export default function RoboticClaw({ startAnimation }) {
  return (
    // FIX 1: Set explicit 100% width/height so it respects the parent container in Hero.jsx strictly
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        dpr={[1, 2]}
        // FIX 2: Prevent Canvas from recalculating on scroll events
        performance={{ min: 1 }}
        resize={{ scroll: false }}
        camera={{ position: [4, 2, 8], fov: 45 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <Environment preset="city" />

        <Suspense fallback={<Loader />}>
          <ClawModel startAnimation={startAnimation} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/ClawModel.glb');