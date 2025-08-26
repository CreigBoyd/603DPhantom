"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Phantom(props) {
  // Load the phantom model from the public/models folder
  const { scene, animations } = useGLTF("/models/monster.glb");
  const modelRef = useRef();
  
  // Interactive states
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // This hook handles playing animations from the GLB file
  const { actions } = useAnimations(animations, modelRef);
  
  // Play only the running animation on load
  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) {
      return;
    }
    
    console.log("Available actions:", Object.keys(actions));
    
    // Look for running animation (common names)
    const runAnimationNames = Object.keys(actions).filter(name => 
      name.toLowerCase().includes('run') || 
      name.toLowerCase().includes('walk') ||
      name.toLowerCase().includes('move')
    );
    
    // If no run animation found, just use the first available animation
    const animationToPlay = runAnimationNames[0] || Object.keys(actions)[0];
    
    if (animationToPlay && actions[animationToPlay]) {
      console.log("Playing animation:", animationToPlay);
      actions[animationToPlay].reset().play();
      actions[animationToPlay].setLoop(2, Infinity);
    }
    
    // Cleanup function
    return () => {
      if (actions) {
        Object.values(actions).forEach(action => {
          if (action && typeof action.stop === 'function') {
            action.stop();
          }
        });
      }
    };
  }, [actions]);

  // Handle click - just visual feedback
  const handleClick = (event) => {
    // Stop event propagation to prevent interference with OrbitControls
    event.stopPropagation();
    
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  const handlePointerOver = (event) => {
    // Stop event propagation to prevent interference with OrbitControls
    event.stopPropagation();
    setIsHovered(true);
  };

  const handlePointerOut = (event) => {
    // Stop event propagation to prevent interference with OrbitControls
    event.stopPropagation();
    setIsHovered(false);
  };

  // Animation loop for interactive effects
  useFrame((state) => {
    if (modelRef.current) {
      // Subtle floating effect
      const baseY = 0.8; // <-- changed from -1.5 to 0.8 (raises the model)
      const floatOffset = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      
      // Hover effect - scale up
      const hoverScale = isHovered ? 1.1 : 1.0;
      const clickScale = isClicked ? 0.9 : 1.0;
      
      // Normal behavior
      modelRef.current.position.y = baseY + floatOffset;
      
      // Smooth scale transitions - INCREASED BASE SCALE
      const targetScale = 0.8 * hoverScale * clickScale; // Changed from 0.4 to 0.8
      modelRef.current.scale.x += (targetScale - modelRef.current.scale.x) * 0.1;
      modelRef.current.scale.y += (targetScale - modelRef.current.scale.y) * 0.1;
      modelRef.current.scale.z += (targetScale - modelRef.current.scale.z) * 0.1;
      
      // Slow rotation when hovered
      if (isHovered) {
        modelRef.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <primitive
      {...props}
      ref={modelRef}
      object={scene}
      position={[0, 0.8, 0]} // <-- match the baseY above
      scale={[1.2, 1.2, 1.2]} 
      rotation={[0, 0, 0]}
      castShadow
      receiveShadow
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
}

// Preload the model for performance optimization
useGLTF.preload("/models/monster.glb");