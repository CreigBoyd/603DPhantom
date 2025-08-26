import Image from "next/image";
import bg from "../../../public/background/phantom.png";
import dynamic from "next/dynamic";
import Navigation from "@/components/navigation";
import RenderModel from "@/components/RenderModel";
import MouseGrabbingLogo from "@/components/mousegrabbing/MouseGrabbingLogo";

const Phantom = dynamic(() => import("@/components/models/Phantom"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background image - lowest layer */}
      <div className="fixed inset-0 z-0">
        <Image
          priority
          sizes="100vw"
          src={bg}
          alt="background-image"
          fill
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>
      
      {/* Canvas with 3D model - middle layer */}
      <RenderModel>
        <Phantom />
      </RenderModel>
      
      {/* Hero Title Section - Top Left */}
      <div className="fixed top-6 left-6 z-30 max-w-xs">
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-400/20 p-5 shadow-2xl">
          {/* Main Title */}
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 mb-2 tracking-tight leading-tight">
              WELCOME
            </h1>
            <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent opacity-80"></div>
          </div>
          
          {/* Subtitle */}
          <div className="mb-4">
            <h2 className="text-base md:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-2 tracking-wide">
              TO MY DIGITAL REALM
            </h2>
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed mb-3">
              Where <span className="text-cyan-400 font-medium">creativity</span> meets 
              <span className="text-blue-300 font-medium"> technology</span>, and visions become reality.
            </p>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Explore my portfolio of immersive experiences.
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400 via-blue-300 to-transparent opacity-50"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-mono tracking-wider">READY TO INNOVATE</span>
          </div>
        </div>
      </div>
      
  {/* Mouse Grabbing Logo - replaces the old logo */}
      <MouseGrabbingLogo />
      
      {/* Navigation - top layer */}
      <div className="relative z-20">
        <Navigation />
      </div>
    </main>
  );
}