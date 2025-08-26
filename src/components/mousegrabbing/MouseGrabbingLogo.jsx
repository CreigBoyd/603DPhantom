// components/MouseGrabbingLogo.jsx
"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Logo603D from '../logo603D/Logo603D';

// Get the base path for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/603DPhantom' : '';

// Custom hooks from the original script
const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", enter);
      ref.current.addEventListener("mouseleave", leave);
      return () => {
        if (ref.current) {
          ref.current.removeEventListener("mouseenter", enter);
          ref.current.removeEventListener("mouseleave", leave);
        }
      };
    }
  }, [ref]);

  return [ref, hovered];
};

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};

const usePosition = () => {
  const ref = useRef();
  const [position, setPosition] = useState({});

  const handleResize = () => {
    if (ref.current) {
      setPosition(ref.current.getBoundingClientRect());
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [ref, position];
};

const MouseGrabbingLogo = () => {
  const [cursorGrabbed, setCursorGrabbed] = useState(false);
  const [outerRef, outerHovered] = useHover();
  const [innerRef, innerHovered] = useHover();
  const [isExtended, setExtendedArm] = useState(false);
  const mousePos = useMousePosition();
  const [armRef, armPosition] = usePosition();

  // SVG asset paths - Fixed with basePath for GitHub Pages
  const ASSETS = {
    head: `${basePath}/svg/head2.svg`,
    waiting: `${basePath}/svg/hand.svg`,
    stalking: `${basePath}/svg/hand-waiting.svg`,
    grabbing: `${basePath}/svg/hand.svg`,
    grabbed: `${basePath}/svg/hand-with-cursor.svg`,
    shaka: `${basePath}/svg/hand-surfs-up.svg`
  };

  // Determine the grabber state
  let state = "waiting";
  if (outerHovered) {
    state = "stalking";
  }
  if (innerHovered) {
    state = "grabbing";
  }
  if (cursorGrabbed) {
    state = "grabbed";
  }

  // Handle cursor grabbing
  const handleCursorGrabbed = () => {
    setCursorGrabbed(true);
    setTimeout(() => {
      setCursorGrabbed(false);
    }, 2000);
  };

  // Extended arm logic for clever users
  useEffect(() => {
    let timer;
    if (state === "grabbing") {
      timer = setTimeout(() => {
        setExtendedArm(true);
      }, 2000);
    }
    return () => {
      setExtendedArm(false);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [state]);

  // Calculate arm rotation - exactly as in original
  const x = armPosition.left + armPosition.width * 0.5;
  const y = armPosition.top + armPosition.height * 0.5;
  const angle = Math.atan2(mousePos.x - x, -(mousePos.y - y)) * (180 / Math.PI);
  const rotation = Math.min(Math.max(parseInt(angle), -79), 79);

  const screenStyle = cursorGrabbed ? { cursor: "none" } : {};
  const handImageSrc = ASSETS[state];

  return (
    <div style={screenStyle}>
      {/* Original Logo Container */}
      <div className="fixed bottom-6 right-6 z-30">
        <div className="bg-black/10 backdrop-blur-sm rounded-lg border border-blue-400/20 p-3 shadow-xl hover:bg-black/20 transition-all duration-300 hover:scale-105">
          <Logo603D 
            width={150} 
            height={60} 
            className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-300" 
          />
        </div>
      </div>

      {/* Grab Zone - positioned exactly like original */}
      <div 
        className="fixed bottom-0 right-0 z-40 pointer-events-none"
        style={{
          transform: 'translateX(30%) translateY(50%)',
        }}
      >
        <div 
          ref={outerRef}
          className="flex items-center justify-center rounded-full pointer-events-auto"
          style={{ width: '700px', height: '700px' }}
        >
          <div 
            ref={innerRef}
            className="flex items-center justify-center rounded-full"
            style={{ width: '400px', height: '400px' }}
          >
            {/* The Grabber - exact replica of original */}
            <div className={`grabber grabber--${state} ${isExtended ? 'grabber--extended' : ''}`}>
              {/* Grabber Body */}
              <div className="grabber__body"></div>
              
              {/* Grabber Face */}
              <img className="grabber__face" src={ASSETS.head} alt="" />
              
              {/* Grabber Arm Wrapper */}
              <div 
                className="grabber__arm-wrapper" 
                ref={armRef}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="grabber__arm">
                  <img
                    className="grabber__hand"
                    src={handImageSrc}
                    alt=""
                    onMouseEnter={handleCursorGrabbed}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original CSS styles from the HTML file */}
      <style jsx>{`
        .grabber {
          position: relative;
          width: 100px;
          height: 100px;
        }
        
        .grabber__arm-wrapper {
          position: absolute;
          top: -80px;
          width: 24px;
          height: 260px;
        }
        
        .grabber__arm {
          position: relative;
          width: 24px;
          height: 200px;
          background: #363640;
          border-radius: 20px;
          overflow: visible;
          transform: translateY(100%);
          transition: transform 0.2s ease;
        }
        
        .grabber__hand {
          display: block;
          position: absolute;
          top: -12px;
          transform: scale(1.4) rotate(-10deg) translateY(100%);
          transform-origin: bottom center;
          transition: transform 0.3s ease;
        }
        
        .grabber__face {
          position: absolute;
          width: 75px;
          height: 84px;
          right: 5%;
          transition: transform 0.3s ease;
        }
        
        .grabber__body {
          position: absolute;
          top: 50%;
          left: 0%;
          width: 110px;
          height: 95px;
          border-radius: 50%;
          background: #363640;
          transition: transform 0.3s ease;
        }
        
        .grabber--waiting .grabber__hand {
          transform: scale(1.4) rotate(-10deg);
        }
        .grabber--waiting .grabber__arm {
          transform: translateY(80%);
        }
        .grabber--waiting .grabber__face {
          transform: translateY(60%);
        }
        
        .grabber--stalking .grabber__hand {
          transform: scale(1.4) rotate(-10deg);
        }
        .grabber--stalking .grabber__arm {
          transform: translateY(70%);
        }
        .grabber--stalking .grabber__face {
          transform: translateY(10%);
        }
        
        .grabber--grabbing .grabber__face {
          transform: translateY(-40%) rotate(10deg);
        }
        .grabber--grabbing .grabber__arm {
          transform: translateY(0%);
        }
        .grabber--grabbing .grabber__body {
          transform: translateY(-20%);
        }
        .grabber--grabbing .grabber__hand {
          transform: scale(1.7) rotate(10deg);
        }
        
        .grabber--grabbed .grabber__arm {
          transition: transform 1s ease;
        }
        .grabber--grabbed .grabber__hand {
          transition: transform 2.5s ease;
        }
        .grabber--grabbed .grabber__face {
          transform: translateY(70%);
          transition: transform 1s ease;
        }
        .grabber--grabbed .grabber__body {
          transform: translateY(50%);
          transition: transform 1s ease;
        }
        
        .grabber--extended .grabber__arm {
          transform: translateY(-20%);
        }
        .grabber--extended .grabber__face {
          transform: translateY(-60%) rotate(15deg);
        }
        .grabber--extended .grabber__body {
          transform: translateY(-40%);
        }
      `}</style>
    </div>
  );
};

export default MouseGrabbingLogo;