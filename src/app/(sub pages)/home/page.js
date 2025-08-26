"use client";

import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import bg from "../../../../public/background/phantom.png";
import Footer from '@/components/footer/Footer';

export default function Home() {
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
      
      dots.forEach((dot, i) => {
        dot.classList.remove('active', 'bg-cyan-400');
        dot.classList.add('bg-slate-600');
        if (i === index) {
          dot.classList.add('active', 'bg-cyan-400');
          dot.classList.remove('bg-slate-600');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    // Event listeners
    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Auto-play functionality
    const autoPlay = setInterval(nextSlide, 6000);

    // Cleanup
    return () => {
      clearInterval(autoPlay);
      nextBtn?.removeEventListener('click', nextSlide);
      prevBtn?.removeEventListener('click', prevSlide);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .testimonial-container {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        
        .testimonial-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(100%);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .testimonial-slide.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .testimonial-slide:not(.active) {
          pointer-events: none;
        }
        
        .testimonial-dot {
          cursor: pointer;
        }
        
        .testimonial-dot.active {
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .testimonial-container {
            height: 450px;
          }
        }
      `}</style>
      
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 bg-gray-900">
        <Image
          src={bg}
          priority
          sizes="100vw"
          alt="603D Portfolio home background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Animated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
      </div>
      
      <div className="relative min-h-screen flex flex-col">
        
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 sm:px-12 py-12">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-400/30 rotate-12 animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rotate-45 animate-bounce" style={{animationDuration: '3s'}}></div>
            </div>
            
            {/* Main Title */}
            <div className="relative z-10 mb-8">
              <div className="mb-6">
                <h1 className="font-bold text-8xl xs:text-9xl sm:text-10xl lg:text-11xl text-gradient-blue leading-none select-none tracking-tight">
                  603D
                </h1>
                {/* Dynamic underline */}
                <div className="h-2 w-48 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-blue-400 opacity-80 mt-4 rounded-full animate-pulse"></div>
              </div>
              
              {/* Tagline with typing effect styling */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 mb-8 tracking-wide">
                  DIGITAL ARCHITECT
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
                  Crafting the future of digital experiences, one 
                  <span className="text-cyan-400 font-medium"> pixel </span>
                  at a time
                </p>
              </div>
              
              {/* Interactive CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link href="/about" className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  <span className="relative z-10">Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link href="/contact" className="group relative px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20">
                  <span>Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Link>
              </div>
              
              {/* Skills Preview */}
              <div className="mb-16">
                <p className="text-slate-400 text-sm uppercase tracking-widest mb-6 font-medium">Expertise</p>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  {[
                    "React & Next.js",
                    "3D Development", 
                    "UI/UX Design",
                    "Full Stack",
                    "Creative Coding",
                    "Performance Optimization"
                  ].map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-sm font-medium backdrop-blur-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
                <div className="text-center p-6 bg-slate-900/30 border border-slate-700/30 rounded-xl backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wide">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-slate-900/30 border border-slate-700/30 rounded-xl backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-slate-900/30 border border-slate-700/30 rounded-xl backdrop-blur-sm hover:border-indigo-400/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">∞</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wide">Ideas Generated</div>
                </div>
              </div>
              
              {/* Tech Stack Visualization */}
              <div className="mb-16">
                <p className="text-slate-400 text-sm uppercase tracking-widest mb-8 font-medium">Tech Stack</p>
                <div className="flex justify-center items-center space-x-8 mb-8">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                  <div className="w-4 h-4 border-2 border-blue-300 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                  <div className="w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-400 rotate-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Status Indicators */}
                <div className="flex justify-center space-x-12 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">AVAILABLE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <span className="text-blue-400">BUILDING</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    <span className="text-purple-400">INNOVATING</span>
                  </div>
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto relative mb-4">
                  <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-300 rounded-full mx-auto mt-2 animate-pulse"></div>
                </div>
                <p className="text-slate-500 text-xs font-medium tracking-wider">SCROLL TO EXPLORE</p>
              </div>
            </div>
          </div>
        </main>
        
        {/* Testimonials Slider */}
        <section className="px-6 sm:px-12 py-20 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/40 backdrop-blur-sm relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border border-cyan-400/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-blue-400/10 rotate-45"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="mx-4 w-3 h-3 border-2 border-cyan-400 rotate-45"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 mb-4">
                Client Testimonials
              </h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                What industry leaders say about working with 603D
              </p>
            </div>
            
            {/* Testimonials Container */}
            <div className="relative">
              {/* Main testimonial display */}
              <div className="testimonial-container max-w-4xl mx-auto">
                <div className="testimonial-slide active bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
                  {/* Quote decoration */}
                  <div className="absolute top-6 left-8 text-6xl text-cyan-400/20 font-serif">"</div>
                  <div className="absolute bottom-6 right-8 text-6xl text-blue-400/20 font-serif rotate-180">"</div>
                  
                  <div className="relative z-10">
                    <blockquote className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 pl-8">
                      "603D transformed our digital presence completely. The attention to detail and innovative approach exceeded all expectations. The 3D interactive elements they created are simply breathtaking."
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">SJ</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">Sarah Johnson</div>
                        <div className="text-slate-400 text-sm">CEO, TechFlow Solutions</div>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="testimonial-slide bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-6 left-8 text-6xl text-blue-400/20 font-serif">"</div>
                  <div className="absolute bottom-6 right-8 text-6xl text-indigo-400/20 font-serif rotate-180">"</div>
                  
                  <div className="relative z-10">
                    <blockquote className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 pl-8">
                      "Working with 603D was a game-changer for our startup. The modern, sleek design and flawless functionality helped us secure our Series A funding. Absolutely phenomenal work!"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">MC</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">Marcus Chen</div>
                        <div className="text-slate-400 text-sm">Founder, InnovateLab</div>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="testimonial-slide bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-6 left-8 text-6xl text-indigo-400/20 font-serif">"</div>
                  <div className="absolute bottom-6 right-8 text-6xl text-purple-400/20 font-serif rotate-180">"</div>
                  
                  <div className="relative z-10">
                    <blockquote className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 pl-8">
                      "The level of creativity and technical expertise 603D brings is unmatched. Our e-commerce platform saw a 300% increase in engagement after the redesign. Simply outstanding!"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">AR</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">Amanda Rodriguez</div>
                        <div className="text-slate-400 text-sm">CMO, Digital Dynamics</div>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-center items-center mt-12 space-x-6">
                <button className="testimonial-prev group p-3 bg-slate-800/60 border border-slate-600/50 rounded-full hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all duration-300">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-3">
                  <button className="testimonial-dot active w-3 h-3 rounded-full bg-cyan-400 transition-all duration-300"></button>
                  <button className="testimonial-dot w-3 h-3 rounded-full bg-slate-600 hover:bg-slate-500 transition-all duration-300"></button>
                  <button className="testimonial-dot w-3 h-3 rounded-full bg-slate-600 hover:bg-slate-500 transition-all duration-300"></button>
                </div>
                
                <button className="testimonial-next group p-3 bg-slate-800/60 border border-slate-600/50 rounded-full hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all duration-300">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-slate-700/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-400 mb-1">50+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-400 mb-1">98%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-400 mb-1">5.0</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-400 mb-1">24/7</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="px-6 sm:px-12 py-16 bg-slate-900/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-4">
                Featured Projects
              </h3>
              <p className="text-slate-400 text-lg">A glimpse into my digital creations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Interactive 3D Experience", tech: "Three.js • React", color: "cyan" },
                { title: "E-commerce Platform", tech: "Next.js • Tailwind", color: "blue" },
                { title: "Creative Portfolio", tech: "WebGL • GSAP", color: "indigo" }
              ].map((project, index) => (
                <div 
                  key={project.title}
                  className="group relative p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br from-${project.color}-400 to-${project.color}-600 rounded-lg mb-4 flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white/20 rounded rotate-45"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{project.tech}</p>
                  <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    View Project →
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/portfolio" className="inline-flex items-center px-6 py-3 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                View All Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}