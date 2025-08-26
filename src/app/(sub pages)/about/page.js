import Image from "next/image";
import bg from "../../../../public/background/phantom.png";
import AboutDetails from "@/components/about";
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50 bg-gray-900">
        <Image
          src={bg}
          priority
          sizes="100vw"
          alt="603D Portfolio about background"
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>
      
      <div className="relative min-h-screen flex flex-col items-center px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-12 pt-8 pb-6">
          {/* Main Title with Enhanced Styling */}
          <div className="mb-8">
            <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-7xl text-gradient-blue leading-tight select-none">
              603D
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 mb-6"></div>
          </div>
          
          {/* Enhanced Subtitle Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-6 tracking-wide">
              DIGITAL ARCHITECT
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed mb-4">
              Transforming ideas into 
              <span className="text-cyan-400 font-medium"> immersive experiences</span> through 
              <span className="text-blue-300 font-medium"> cutting-edge technology</span>
            </p>
            <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Where creativity meets code, and innovation becomes reality. 
              Every pixel has purpose, every interaction tells a story.
            </p>
          </div>
          
          {/* Decorative Tech Elements */}
          <div className="relative mb-10">
            <div className="flex justify-center items-center space-x-8 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="w-3 h-3 border-2 border-blue-300 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            {/* Status Indicators */}
            <div className="flex justify-center space-x-8 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <span className="text-blue-400">CREATING</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <span className="text-yellow-400">INNOVATING</span>
              </div>
            </div>
          </div>
          
          {/* Journey Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-300 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
            <p className="text-slate-500 text-xs mt-3 font-medium tracking-wider">DISCOVER MY JOURNEY</p>
          </div>
        </div>
        
        {/* Main About Details and Stats */}
        <main className="w-full relative z-10">
          <AboutDetails />
        </main>
        <Footer />
      </div>
    </>
  );
}