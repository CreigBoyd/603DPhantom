import React, { useState, useEffect, useRef } from 'react';

// This component will be used outside the Canvas
const SpeechBubbles = ({ phantomRef, isModelLoaded = false }) => {
  const [bubbles, setBubbles] = useState([]);
  const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef();

  // Message sequences with different bubble types
  const messages = [
    {
      text: "Welcome!",
      type: "speech",
      duration: 2000,
      delay: 1000
    },
    {
      text: "Glad you are here!",
      type: "speech", 
      duration: 2500,
      delay: 500
    },
    {
      text: "This is a 3D phantom experience...",
      type: "thought",
      duration: 3000,
      delay: 500
    },
    {
      text: "Built with React Three Fiber",
      type: "info",
      duration: 2500,
      delay: 500
    },
    {
      text: "Try interacting with me!",
      type: "speech",
      duration: 2000,
      delay: 500
    }
  ];

  // Function to update bubble position based on a fixed area
  const updateBubblePosition = () => {
    // Check if window exists (client-side only)
    if (typeof window === 'undefined') return;
    
    // Position bubbles in the upper center area where your phantom likely appears
    const x = window.innerWidth / 2;
    const y = window.innerHeight * 0.25; // 25% from top - above your phantom's head
    
    setBubblePosition({ x, y });
  };

  // Initialize position and handle resize
  useEffect(() => {
    updateBubblePosition();
    
    const handleResize = () => {
      updateBubblePosition();
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Start the welcome sequence when model is loaded
  useEffect(() => {
    if (!isModelLoaded) return;
    
    const startWelcomeSequence = () => {
      let totalDelay = 0;
      
      messages.forEach((message, index) => {
        totalDelay += message.delay;
        
        setTimeout(() => {
          const bubbleId = Date.now() + index;
          const newBubble = {
            id: bubbleId,
            ...message,
            opacity: 0,
            scale: 0.8
          };
          
          setBubbles(prev => [...prev, newBubble]);
          
          // Animate in
          setTimeout(() => {
            setBubbles(prev => prev.map(bubble => 
              bubble.id === bubbleId 
                ? { ...bubble, opacity: 1, scale: 1 }
                : bubble
            ));
          }, 100);
          
          // Animate out
          setTimeout(() => {
            setBubbles(prev => prev.map(bubble => 
              bubble.id === bubbleId 
                ? { ...bubble, opacity: 0, scale: 0.8 }
                : bubble
            ));
            
            // Remove after fade out
            setTimeout(() => {
              setBubbles(prev => prev.filter(bubble => bubble.id !== bubbleId));
            }, 500);
          }, message.duration);
          
        }, totalDelay);
        
        totalDelay += message.duration;
      });
    };

    // Start sequence after a brief delay to let the model load
    const timer = setTimeout(startWelcomeSequence, 1500);
    return () => clearTimeout(timer);
  }, [isModelLoaded]);

  const getBubbleStyle = (bubble) => {
    const baseStyle = {
      opacity: bubble.opacity,
      transform: `translate(-50%, -100%) scale(${bubble.scale})`,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'absolute',
      padding: '14px 18px',
      borderRadius: '25px',
      fontSize: '16px',
      fontWeight: '600',
      maxWidth: '250px',
      textAlign: 'center',
      pointerEvents: 'none',
      zIndex: 1000,
      wordWrap: 'break-word',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(12px)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    };

    switch (bubble.type) {
      case 'speech':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        };
      
      case 'thought':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          borderRadius: '50px',
        };
      
      case 'info':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          borderRadius: '20px',
        };
      
      default:
        return baseStyle;
    }
  };

  const getTailStyle = (bubble) => ({
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    borderTop: bubble.type === 'info' ? '10px solid #4facfe' : '10px solid #667eea',
    opacity: bubble.opacity,
    transition: 'opacity 0.5s ease',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
  });

  const getThoughtDotStyle = (size, left, top, bubble) => ({
    position: 'absolute',
    top: `${top}px`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    background: '#f093fb',
    borderRadius: '50%',
    transform: 'translate(-50%, 0)',
    opacity: bubble.opacity,
    transition: 'opacity 0.5s ease',
    boxShadow: '0 2px 8px rgba(240, 147, 251, 0.3)',
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        left: `${bubblePosition.x}px`,
        top: `${bubblePosition.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {bubbles.map((bubble) => (
        <div key={bubble.id} style={{ position: 'relative' }}>
          <div style={getBubbleStyle(bubble)}>
            {bubble.text}
          </div>
          
          {/* Tail for speech and info bubbles */}
          {(bubble.type === 'speech' || bubble.type === 'info') && (
            <div style={getTailStyle(bubble)} />
          )}
          
          {/* Dots for thought bubbles */}
          {bubble.type === 'thought' && (
            <>
              <div style={getThoughtDotStyle(10, 25, 5, bubble)} />
              <div style={getThoughtDotStyle(6, 15, 18, bubble)} />
              <div style={getThoughtDotStyle(3, 10, 28, bubble)} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SpeechBubbles;