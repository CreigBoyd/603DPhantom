"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative w-full mt-20">
      {/* Main Footer Content */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 tracking-tight">
                603D
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Crafting digital experiences that push the boundaries of 
                <span className="text-cyan-400 font-medium"> innovation</span> and 
                <span className="text-blue-300 font-medium"> creativity</span>.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-mono tracking-wider">AVAILABLE FOR PROJECTS</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 tracking-wide">
                QUICK LINKS
              </h4>
              <nav className="space-y-3">
                <Link href="/main" className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Home
                </Link>
                <Link href="/about" className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  About
                </Link>
                <Link href="/services" className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Services
                </Link>
                <Link href="/contact" className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </nav>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 tracking-wide">
                SERVICES
              </h4>
              <div className="space-y-3">
                <div className="text-slate-400 text-sm">Web Development</div>
                <div className="text-slate-400 text-sm">3D Experiences</div>
                <div className="text-slate-400 text-sm">UI/UX Design</div>
                <div className="text-slate-400 text-sm">Custom Solutions</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Divider */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-3 h-3 border-2 border-blue-300 rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-500 text-sm">
              © {currentYear} 603Design. All rights reserved.
            </div>
            
            {/* Tech Stack Indicators */}
            <div className="flex items-center space-x-6 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400">NEXT.JS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <span className="text-cyan-400">THREE.JS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <span className="text-indigo-400">TAILWIND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
    </footer>
  );
}