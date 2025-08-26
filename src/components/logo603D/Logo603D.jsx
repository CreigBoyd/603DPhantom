// components/Logo603D.jsx
import React from 'react';

const Logo603D = ({ width = 200, height = 80, className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 300 120" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Blue Gradient for Main Text */}
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#4A90E2', stopOpacity: 1}} />
          <stop offset="25%" style={{stopColor: '#357ABD', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#2E5F8A', stopOpacity: 1}} />
          <stop offset="75%" style={{stopColor: '#1E4A6B', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0F2A3A', stopOpacity: 1}} />
        </linearGradient>
        
        {/* Metallic Highlight Gradient */}
        <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0}} />
          <stop offset="20%" style={{stopColor: '#ffffff', stopOpacity: 0.8}} />
          <stop offset="40%" style={{stopColor: '#ffffff', stopOpacity: 0.4}} />
          <stop offset="60%" style={{stopColor: '#ffffff', stopOpacity: 0.8}} />
          <stop offset="80%" style={{stopColor: '#ffffff', stopOpacity: 0}} />
          <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.2}} />
        </linearGradient>
        
        {/* Shadow Gradient */}
        <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 0}} />
          <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0.4}} />
        </linearGradient>
        
        {/* Inner Shadow */}
        <linearGradient id="innerShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 0.3}} />
          <stop offset="30%" style={{stopColor: '#000000', stopOpacity: 0}} />
          <stop offset="70%" style={{stopColor: '#000000', stopOpacity: 0}} />
          <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0.2}} />
        </linearGradient>
        
        {/* Drop Shadow Filter */}
        <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="2" dy="4" result="offset" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5"/>
          </feComponentTransfer>
          <feMerge> 
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Shadow */}
      <text 
        x="52" 
        y="74" 
        fontFamily="Arial, sans-serif" 
        fontSize="72" 
        fontWeight="bold" 
        fill="url(#shadowGradient)" 
        opacity="0.3"
      >
        603D
      </text>
      
      {/* Main Text with Blue Gradient */}
      <text 
        x="50" 
        y="70" 
        fontFamily="Arial, sans-serif" 
        fontSize="72" 
        fontWeight="bold" 
        fill="url(#blueGradient)" 
        filter="url(#dropshadow)"
      >
        603D
      </text>
      
      {/* Inner Shadow Overlay */}
      <text 
        x="50" 
        y="70" 
        fontFamily="Arial, sans-serif" 
        fontSize="72" 
        fontWeight="bold" 
        fill="url(#innerShadow)" 
        opacity="0.6"
      >
        603D
      </text>
      
      {/* Metallic Highlight */}
      <text 
        x="50" 
        y="70" 
        fontFamily="Arial, sans-serif" 
        fontSize="72" 
        fontWeight="bold" 
        fill="url(#metalHighlight)" 
        opacity="0.7"
      >
        603D
      </text>
      
      {/* Sharp Highlight Line */}
      <rect x="50" y="25" width="200" height="2" fill="#ffffff" opacity="0.9" rx="1"/>
      <rect x="50" y="28" width="180" height="1" fill="#4A90E2" opacity="0.6" rx="0.5"/>
    </svg>
  );
};

export default Logo603D;