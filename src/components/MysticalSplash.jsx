"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MysticalSplash = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < 3) {
        setCurrentPhase(currentPhase + 1);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 1000);
      }
    }, currentPhase === 0 ? 1000 : currentPhase === 1 ? 2000 : currentPhase === 2 ? 2500 : 1000);

    return () => clearTimeout(timer);
  }, [currentPhase, onComplete]);

  // Floating particles animation
  const FloatingParticle = ({ delay = 0 }) => (
    <motion.div
      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: 0 
      }}
      animate={{ 
        y: -100,
        scale: [0, 1, 0],
        opacity: [0, 0.8, 0]
      }}
      transition={{
        duration: 3,
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
        duration: 2,
        delay: delay,
        ease: "easeOut"
      }}
    />
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
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
          {Array.from({ length: 20 }).map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.2} />
          ))}

          {/* Portal Rings */}
          <PortalRing delay={0} size={100} />
          <PortalRing delay={0.3} size={200} />
          <PortalRing delay={0.6} size={300} />
          <PortalRing delay={0.9} size={400} />

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
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div
                className="w-96 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute"
                animate={{
                  scaleY: currentPhase >= 1 ? [1, 0.1, 1] : 1,
                  opacity: currentPhase >= 1 ? [1, 0.3, 1] : 1,
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.75 }}
              />
            </motion.div>

            {/* Phase 2: 603D Title Emergence */}
            <motion.div
              className="text-center z-10"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={currentPhase >= 2 ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
              } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.h1
                className="text-8xl md:text-9xl font-bold mb-4 tracking-wider"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 20px rgba(6, 182, 212, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <span className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-7xl text-gradient-blue leading-tight select-none">
                  603D
                </span>
              </motion.h1>

              <motion.div
                className="w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"
                initial={{ scaleX: 0 }}
                animate={currentPhase >= 2 ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Phase 3: Subtitle and Description */}
            <motion.div
              className="text-center max-w-2xl px-6"
              initial={{ opacity: 0, y: 30 }}
              animate={currentPhase >= 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.p
                className="text-2xl md:text-3xl text-cyan-300 font-light mb-4 tracking-wide"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                Digital Realm Architect
              </motion.p>
              
              <motion.p
                className="text-lg text-blue-200/80 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={currentPhase >= 3 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Crafting <span className="text-cyan-300 font-medium">immersive web experiences</span> and 
                <span className="text-purple-300 font-medium"> interactive polling solutions</span> from the ethereal dimensions of code
              </motion.p>

              {/* Mystical loading indicator */}
              <motion.div
                className="flex justify-center mt-8 space-x-2"
                initial={{ opacity: 0 }}
                animate={currentPhase >= 3 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Phase 4: Portal closing effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={currentPhase >= 3 ? { opacity: 1 } : {}}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900"
                animate={{
                  scale: currentPhase >= 3 ? [0, 2] : 0,
                  opacity: currentPhase >= 3 ? [0, 1] : 0
                }}
                transition={{ duration: 2, delay: 1 }}
              />
            </motion.div>
          </div>

          {/* Mystical border effects */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MysticalSplash;