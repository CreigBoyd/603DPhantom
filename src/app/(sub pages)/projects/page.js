import Image from "next/image";
import bg from "../../../../public/background/EKh0XcEANmiguqKxiUfj--0--5tllo.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50 bg-slate-800" style={{backgroundColor: '#1e3a5f'}}>
        <Image
          src={bg}
          alt="Background image"
          className="w-full h-full object-contain object-center opacity-50"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Hero Section with Title */}
      <div className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
             <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-7xl text-gradient-blue leading-tight select-none">
              PROJECTS
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"></div>
          </div>
          
          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light leading-relaxed mb-6">
              Crafting digital experiences that push the boundaries of 
              <span className="text-cyan-400 font-medium"> innovation</span> and 
              <span className="text-blue-300 font-medium"> creativity</span>
            </p>
            <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto">
              Each project tells a story of passion, precision, and the relentless pursuit of excellence
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-x-8 -top-2">
              <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-x-8 -top-2">
              <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto">
              <div className="w-1 h-3 bg-slate-400 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
            <p className="text-slate-500 text-sm mt-3 font-medium">Explore My Work</p>
          </div>
        </div>
      </div>
      
      <ProjectList projects={projectsData} />
      
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
      </div>
      <Footer />
    </>
  );
}