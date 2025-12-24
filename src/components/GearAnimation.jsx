import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations, Center, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function Loader() {
  return (
    <Html center>
      <div style={{ color: '#333', fontSize: '1.2rem', fontFamily: 'sans-serif' }}>
        Loading...
      </div>
    </Html>
  );
}

function GearModel() {
  const { scene, animations } = useGLTF('/models/gearmetal.glb'); 
  const { actions } = useAnimations(animations, scene);
  const groupRef = useRef();

  // Play Internal Animations
  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((key) => {
        actions[key]?.play();
      });
    }
  }, [actions]);

  // Gentle Levitation (Up/Down only - No rotation, No orbit)
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t) * 0.1; 
    }
  });

  return (
    <group ref={groupRef}>
      {/* <Center> automatically calculates the bounding box and centers the model at (0,0,0) */}
      <Center top>
        {/* --- SIZE CHANGED TO 1.0 --- */}
        <primitive object={scene} scale={1.0} />
      </Center>
    </group>
  );
}

function CameraController() {
  const { camera } = useThree();
  const controlsRef = useRef();
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Top-Down View
  const originalPos = new THREE.Vector3(0, 10, 0); 
  const returnSpeed = 0.03; 

  useFrame(() => {
    // Auto-Return Logic
    if (!isInteracting && controlsRef.current) {
      camera.position.lerp(originalPos, returnSpeed);
      controlsRef.current.target.lerp(new THREE.Vector3(0, 0, 0), returnSpeed);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping={true}
      dampingFactor={0.05}
      minDistance={2} // Allowed getting closer since model is smaller
      maxDistance={20}
      onStart={() => setIsInteracting(true)}
      onEnd={() => setTimeout(() => setIsInteracting(false), 500)}
    />
  );
}

export default function GearAnimation() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 10, 0], fov: 45 }}
        gl={{ outputColorSpace: THREE.SRGBColorSpace, antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 7]} intensity={1.5} />
        <spotLight position={[-5, 10, -5]} intensity={1} angle={0.5} />

        <Suspense fallback={<Loader />}>
            <GearModel />
        </Suspense>

        <CameraController />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/gearmetal.glb');