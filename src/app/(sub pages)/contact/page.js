import Image from "next/image";
import bg from "../../../../public/background/phantom.png";
import Form from "@/components/contact/Form-EmailJs";
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: "Contact - 603Design",
};

export default function Contact() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50 bg-gray-900">
        <Image
          src={bg}
          alt="603Design contact page background image"
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>
      
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-12">
        
        {/* Hero Section with Epic Styling */}
        <div className="text-center mb-12 pt-8 pb-6">
          {/* Main Title with Enhanced Styling */}
          <div className="mb-8">
             <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-7xl text-gradient-blue leading-tight select-none">
              CONTACT
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 mb-6"></div>
          </div>
          
          {/* Enhanced Subtitle Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-6 tracking-wide">
              LET&apos;S CREATE TOGETHER
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed mb-4">
              Ready to transform your vision into 
              <span className="text-cyan-400 font-medium"> digital reality</span>?
            </p>
            <p className="text-base md:text-lg text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-6">
              At 603Design, we specialize in creating stunning, user-friendly websites tailored to your unique needs. 
              Whether you&apos;re launching a new business, refreshing your online presence, or need specialized functionality, 
we&apos;re here to turn your ideas into 
              <span className="text-blue-300 font-medium"> exceptional experiences</span>.
            </p>
            <p className="text-sm md:text-base text-slate-500 font-light max-w-2xl mx-auto">
              Get in touch below and let&apos;s discuss how we can elevate your online presence.
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
                <span className="text-green-400">AVAILABLE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <span className="text-blue-400">RESPONSIVE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <span className="text-purple-400">READY TO BUILD</span>
              </div>
            </div>
          </div>
          
          {/* Form Indicator */}
          <div className="animate-bounce mb-8">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-300 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
            <p className="text-slate-500 text-xs mt-3 font-medium tracking-wider">START YOUR PROJECT</p>
          </div>
        </div>

{/* Enhanced Decorative Tech Elements - Version 3: Futuristic Grid */}
<div className="relative mb-16 w-full max-w-4xl mx-auto px-4">
  <div className="relative h-20 flex items-center justify-center">
    {/* Background Grid Effect */}
    <div className="absolute inset-0 opacity-20">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent absolute top-1/3"></div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent absolute top-2/3"></div>
      <div className="h-full w-px bg-gradient-to-b from-transparent via-indigo-300 to-transparent absolute left-1/4"></div>
      <div className="h-full w-px bg-gradient-to-b from-transparent via-purple-300 to-transparent absolute right-1/4"></div>
    </div>
    
    {/* Main Elements */}
    <div className="flex justify-center items-center space-x-12 relative z-10">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
        <div className="w-px h-6 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </div>
      
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-blue-300 to-transparent relative">
        <div className="absolute -top-1 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative">
        <div className="w-10 h-10 border-2 border-blue-300 rotate-45 animate-spin shadow-lg shadow-blue-300/30 bg-black/20 backdrop-blur-sm" style={{animationDuration: '8s'}}></div>
        <div className="absolute inset-3 border border-blue-400 rotate-45 animate-pulse"></div>
      </div>
      
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-indigo-400 to-transparent relative">
        <div className="absolute -top-1 right-1/3 w-2 h-2 bg-indigo-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="flex flex-col items-center space-y-2">
        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-400/50" style={{animationDelay: '0.7s'}}></div>
        <div className="w-px h-6 bg-gradient-to-b from-indigo-400 to-transparent"></div>
      </div>
    </div>
  </div>
</div>
        
        {/* Form Introduction Section */}
        <div className="max-w-2xl mx-auto text-center mb-8 px-6">
          <div className="bg-black/10 backdrop-blur-sm rounded-xl border border-cyan-400/10 p-6 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-4">
              Share Your Vision
            </h3>
            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-4">
              Tell us about your project, goals, and timeline. The more details you share, 
              the better we can tailor our approach to exceed your expectations.
            </p>
            <div className="flex justify-center items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-xs font-mono tracking-wider">SECURE & CONFIDENTIAL</span>
              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
        
        <Form />
      </article>
      <Footer />
    </>
  );
}