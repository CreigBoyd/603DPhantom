"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import clsx from "clsx";

export default function RenderModel({ children, className }) {
  console.log("🎨 RenderModel className:", className);
  
  return (
    <Canvas
      className={clsx("w-full h-full", className)}
      shadows
      dpr={[1, 2]}
      camera={{ 
        position: [0, 0.6, 5], // <-- slight raise of camera Y for nicer framing
        fov: 50
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10,
        pointerEvents: 'auto'
      }}
      gl={{
        alpha: true,
        premultipliedAlpha: false,
        antialias: true
      }}
    >
      {/* Basic lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      {/* Suspense fallback while model loads */}
      <Suspense fallback={null}>{children}</Suspense>
      
      {/* Environment lighting - NO BACKGROUND */}
      <Environment preset="dawn" background={false} />
      
      {/* Camera controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
        // Center the camera focus on the model
        target={[0, 0.8, 0]} // <-- match the model Y (baseY)
        enableDamping={true}
        dampingFactor={0.05}
      />
      
      {/* Ground shadow */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
}