"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < 3) {
        setCurrentPhase(currentPhase + 1);
      } else {
        // Auto redirect to main page after splash sequence
        setTimeout(() => {
          router.push('/main');
        }, 1500);
      }
    }, currentPhase === 0 ? 1000 : currentPhase === 1 ? 2000 : currentPhase === 2 ? 2500 : 1000);

    return () => clearTimeout(timer);
  }, [currentPhase, router]);

  // Floating particles animation
  const FloatingParticle = ({ delay = 0 }) => (
    <motion.div
      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
      initial={{ 
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
        y: typeof window !== 'undefined' ? window.innerHeight : 1080,
        scale: 0 
      }}
      animate={{ 
        y: -100,
        scale: [0, 1, 0],
        opacity: [0, 0.8, 0]
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );

  // Portal effect rings
  const PortalRing = ({ delay = 0, size = 200 }) => (
    <motion.div
      className="absolute border border-cyan-400/30 rounded-full"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        marginLeft: -size/2,
        marginTop: -size/2,
      }}
      initial={{ scale: 0, opacity: 0, rotate: 0 }}
      animate={currentPhase >= 1 ? { 
        scale: [0, 1.5, 3], 
        opacity: [0, 0.6, 0],
        rotate: 360
      } : {}}
      transition={{
        duration: 2.5,
        delay: delay,
        ease: "easeOut"
      }}
    />
  );

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background with mystical gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, 
              rgba(59, 130, 246, 0.3) 0%, 
              rgba(147, 51, 234, 0.2) 30%, 
              rgba(6, 182, 212, 0.1) 60%, 
              rgba(17, 24, 39, 0.95) 100%
            )
          `
        }}
        animate={{
          background: currentPhase >= 2 ? [
            `radial-gradient(circle at 50% 50%, 
              rgba(59, 130, 246, 0.4) 0%, 
              rgba(147, 51, 234, 0.3) 30%, 
              rgba(6, 182, 212, 0.2) 60%, 
              rgba(17, 24, 39, 0.95) 100%
            )`,
            `radial-gradient(circle at 50% 50%, 
              rgba(59, 130, 246, 0.2) 0%, 
              rgba(147, 51, 234, 0.1) 30%, 
              rgba(6, 182, 212, 0.05) 60%, 
              rgba(17, 24, 39, 0.98) 100%
            )`
          ] : undefined
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} />
      ))}

      {/* Portal Rings */}
      <PortalRing delay={0} size={80} />
      <PortalRing delay={0.3} size={160} />
      <PortalRing delay={0.6} size={240} />
      <PortalRing delay={0.9} size={320} />
      <PortalRing delay={1.2} size={400} />

      {/* Central Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
        {/* Phase 1: Portal Opening Effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentPhase >= 1 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-2 h-96 bg-gradient-to-t from-transparent via-cyan-400 to-transparent"
            animate={{
              scaleX: currentPhase >= 1 ? [1, 0.1, 1] : 1,
              opacity: currentPhase >= 1 ? [1, 0.3, 1] : 1,
            }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="w-96 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute"
            animate={{
              scaleY: currentPhase >= 1 ? [1, 0.1, 1] : 1,
              opacity: currentPhase >= 1 ? [1, 0.3, 1] : 1,
            }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
          />
        </motion.div>

        {/* Phase 2: 603D Title Emergence */}
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={currentPhase >= 2 ? { 
            opacity: 1, 
            y: 0, 
            scale: 1,
          } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-7xl md:text-9xl lg:text-[12rem] font-bold mb-6 tracking-wider"
            animate={{
              textShadow: [
                "0 0 30px rgba(6, 182, 212, 0.5)",
                "0 0 60px rgba(6, 182, 212, 0.9)",
                "0 0 30px rgba(6, 182, 212, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              603D
            </span>
          </motion.h1>

          <motion.div
            className="w-64 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={currentPhase >= 2 ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>

        {/* Phase 3: Subtitle and Description */}
        <motion.div
          className="text-center max-w-4xl px-8"
          initial={{ opacity: 0, y: 40 }}
          animate={currentPhase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.p
            className="text-3xl md:text-4xl text-cyan-300 font-light mb-6 tracking-wide"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          >
            Digital Realm Architect
          </motion.p>
          
          <motion.p
            className="text-xl md:text-2xl text-blue-200/90 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={currentPhase >= 3 ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            Crafting <span className="text-cyan-300 font-medium">immersive web experiences</span> and 
            <span className="text-purple-300 font-medium"> interactive polling solutions</span> from the ethereal dimensions of code
          </motion.p>

          {/* Loading indicator */}
          <motion.div
            className="flex justify-center space-x-3"
            initial={{ opacity: 0 }}
            animate={currentPhase >= 3 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>

          <motion.p
            className="text-cyan-200/60 text-lg mt-6 tracking-widest"
            initial={{ opacity: 0 }}
            animate={currentPhase >= 3 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2 }}
          >
            ENTERING THE DIGITAL DIMENSION...
          </motion.p>
        </motion.div>
      </div>

      {/* Mystical border effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 3.5 }}
        />
        <motion.div
          className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 4 }}
        />
        <motion.div
          className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 4.5 }}
        />
      </div>
    </div>
  );
}