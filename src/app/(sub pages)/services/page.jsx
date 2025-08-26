"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter
import Image from "next/image";
import bg from "../../../../public/background/phantom.png";
import Footer from '@/components/footer/Footer';
import Modal from "@/components/modal/Modal";  // import our modal component

export default function Services() {
  const router = useRouter();  // Initialize router
  const [activeService, setActiveService] = useState(null);
   /*const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });*/
  const [isVisible, setIsVisible] = useState({});

  // Track mouse for interactive effects
  /*
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  */

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

    // Services Array with extra modalDescription for modal content:
  const services = [
    {
      id: 0,
      title: "WEB DEVELOPMENT",
      subtitle: "Full-Stack Solutions",
      description:
        "Custom websites and applications built with cutting-edge technologies. From responsive designs to complex web applications.",
      modalDescription:
        "Our Web Development service includes custom full-stack development, using Next.js, React, Node.js, and TypeScript to deliver scalable and maintainable websites tailored to your business needs.",
      tech: ["Next.js", "React", "Node.js", "TypeScript"],
      icon: "🌐",
      gradient: "from-cyan-400 via-blue-400 to-indigo-500",
    },
    {
      id: 1,
      title: "3D EXPERIENCES",
      subtitle: "Immersive Interactions",
      description:
        "Interactive 3D models, animations, and virtual experiences that captivate and engage your audience.",
      modalDescription:
        "With 3D Experiences, we create captivating interactive visuals using Three.js, WebGL, Blender, and GSAP, perfect for product demos, virtual tours, and more.",
      tech: ["Three.js", "WebGL", "Blender", "GSAP"],
      icon: "🎮",
      gradient: "from-purple-400 via-pink-400 to-red-500",
    },
    {
      id: 2,
      title: "UI/UX DESIGN",
      subtitle: "Digital Aesthetics",
      description:
        "Beautiful, intuitive interfaces that convert visitors into customers. Every pixel crafted with purpose.",
      modalDescription:
        "Our UI/UX Design focuses on crafting intuitive user journeys and aesthetically pleasing interfaces, utilizing tools like Figma, Adobe XD, Framer, and Principle.",
      tech: ["Figma", "Adobe XD", "Framer", "Principle"],
      icon: "🎨",
      gradient: "from-green-400 via-emerald-400 to-teal-500",
    },
    {
      id: 3,
      title: "CUSTOM SOLUTIONS",
      subtitle: "Bespoke Development",
      description:
        "Tailored solutions for unique challenges. API integrations, automation, and specialized functionality.",
      modalDescription:
        "Custom Solutions include API integrations, automation workflows, and cloud computing approaches to solve your unique business challenges with Python, APIs, and cloud tools.",
      tech: ["Python", "APIs", "Automation", "Cloud"],
      icon: "⚡",
      gradient: "from-yellow-400 via-orange-400 to-red-500",
    },
  ];

  const handleCTAClick = () => {
    router.push('/contact');
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50 bg-gray-900">
        <Image
          src={bg}
          alt="603Design services background"
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>

 {/* Floating Cursor Effect */}
      {/*
      <div 
        className="fixed w-8 h-8 rounded-full bg-cyan-400/20 pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${activeService !== null ? 1.5 : 1})`
        }}
      />
      */}

       {/* Modal for service info */}
      <Modal
        title={activeService !== null ? services[activeService].title : ""}
        isOpen={activeService !== null}
        onClose={() => setActiveService(null)}
      >
        {activeService !== null && (
          <>
            <p className="mb-4 text-slate-300">{services[activeService].modalDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {services[activeService].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => {
                setActiveService(null);
                router.push("/services/details");
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg transition transform hover:scale-105"
            >
              Learn More
            </button>
          </>
        )}
      </Modal>

      <main className="relative min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-8 pb-12">
          <div 
            id="animate-hero"
            className={`transition-all duration-1000 ${
              isVisible['animate-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-8">
               <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-7xl text-gradient-blue leading-tight select-none">
                SERVICES
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"></div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-6 tracking-wide">
                ELEVATING DIGITAL EXPERIENCES
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed">
                Transforming visions into 
                <span className="text-cyan-400 font-medium"> interactive reality</span> through 
                <span className="text-blue-300 font-medium"> cutting-edge solutions</span>
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Services Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={`animate-service-${index}`}
                className={`group relative overflow-hidden rounded-2xl border-2 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeService === index 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/25' 
                    : 'border-cyan-400/20 hover:border-cyan-400/50'
                } ${
                  isVisible[`animate-service-${index}`] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setActiveService(activeService === index ? null : index)}

              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 transition-opacity duration-300 group-hover:opacity-20`} />
                
                {/* Floating Animation Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-50`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 10}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>

                <div className="relative p-8 bg-black/20 backdrop-blur-sm h-full">
                  {/* Service Icon */}
                  <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-2 tracking-tight`}>
                    {service.title}
                  </h3>
                  
                  <h4 className="text-lg text-slate-300 font-light mb-4">
                    {service.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20 transition-all duration-300 hover:bg-cyan-400/20"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${service.gradient} transition-all duration-1000 ease-out ${
                        activeService === index ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute top-6 right-6 transition-all duration-300 ${
                    activeService === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-cyan-400 text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section 
          id="animate-cta"
          className={`text-center py-20 transition-all duration-1000 ${
            isVisible['animate-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let&apos;s discuss how we can bring your vision to life with cutting-edge technology and stunning design.
            </p>
            
            {/* Animated CTA Button */}
            <button onClick={handleCTAClick} className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25">
              <span className="relative z-10">START YOUR PROJECT</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </section>

        {/* Decorative Bottom Section */}
        <div className="flex justify-center items-center space-x-8 py-12">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="w-4 h-4 border-2 border-blue-300 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
        <Footer />
      </main>
    </>
  );
}