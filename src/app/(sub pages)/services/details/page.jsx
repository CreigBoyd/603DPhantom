"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "../../../../../public/background/phantom.png";
import Footer from "@/components/footer/Footer";

const services = [
  {
    id: 0,
    title: "WEB DEVELOPMENT",
    subtitle: "Full-Stack Solutions",
    icon: "🌐",
    gradient: "from-cyan-400 via-blue-400 to-indigo-500",
    overview: "Transform your digital presence with cutting-edge web development solutions that drive results and engage users.",
    detailedDescription: [
      "Our comprehensive web development service combines modern technologies with proven methodologies to deliver exceptional digital experiences. We specialize in creating responsive, performant, and scalable web applications that grow with your business.",
      "From concept to deployment, we handle every aspect of the development process. Our team stays current with the latest web standards, security practices, and performance optimization techniques to ensure your website not only looks great but performs flawlessly across all devices and browsers.",
      "We believe in creating websites that are not just visually appealing, but also strategically designed to convert visitors into customers. Every element is carefully crafted with your business goals in mind."
    ],
    technologies: [
      { name: "Next.js 14", description: "React framework for production-ready applications" },
      { name: "TypeScript", description: "Type-safe JavaScript for better code quality" },
      { name: "Node.js", description: "Server-side JavaScript runtime" },
      { name: "PostgreSQL", description: "Advanced open-source relational database" },
      { name: "MongoDB", description: "NoSQL database for flexible data storage" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      { name: "Vercel/AWS", description: "Cloud deployment and hosting solutions" }
    ],
    features: [
      "Responsive Design & Mobile Optimization",
      "SEO-Optimized Architecture",
      "Performance Monitoring & Analytics",
      "Content Management Systems",
      "E-commerce Integration",
      "API Development & Integration",
      "Database Design & Management",
      "Security Implementation"
    ],
    process: [
      { step: "Discovery", description: "Understanding your business needs and target audience" },
      { step: "Planning", description: "Creating wireframes, user flows, and technical specifications" },
      { step: "Development", description: "Building your website with clean, maintainable code" },
      { step: "Testing", description: "Comprehensive testing across devices and browsers" },
      { step: "Launch", description: "Deployment and go-live support" },
      { step: "Maintenance", description: "Ongoing support and updates" }
    ],
    caseStudy: {
      title: "E-commerce Platform Redesign",
      challenge: "A local retailer needed to modernize their online presence and improve conversion rates.",
      solution: "We built a custom Next.js e-commerce platform with Stripe integration and inventory management.",
      results: ["300% increase in online sales", "50% reduction in page load times", "95% mobile usability score"]
    },
    externalLinks: [
      { name: "Next.js Documentation", url: "https://nextjs.org/docs" },
      { name: "Web.dev Performance Guide", url: "https://web.dev/performance/" },
      { name: "MDN Web Standards", url: "https://developer.mozilla.org/en-US/" }
    ]
  },
  {
    id: 1,
    title: "3D EXPERIENCES",
    subtitle: "Immersive Interactions",
    icon: "🎮",
    gradient: "from-purple-400 via-pink-400 to-red-500",
    overview: "Create stunning 3D visuals and interactive experiences that captivate your audience and set your brand apart.",
    detailedDescription: [
      "Step into the future of web interaction with our immersive 3D experiences. We leverage cutting-edge WebGL technology and modern 3D frameworks to create visually stunning, interactive content that engages users like never before.",
      "Whether you need product visualizations, virtual showrooms, interactive demos, or educational content, our 3D solutions provide an unparalleled level of engagement. We optimize for performance across all devices while maintaining visual fidelity.",
      "Our team combines artistic vision with technical expertise to create 3D experiences that not only wow your audience but also serve your business objectives effectively."
    ],
    technologies: [
      { name: "Three.js", description: "JavaScript 3D library for WebGL rendering" },
      { name: "WebGL", description: "Web graphics library for 3D rendering" },
      { name: "Blender", description: "Professional 3D modeling and animation" },
      { name: "GSAP", description: "Professional animation library" },
      { name: "React Three Fiber", description: "React renderer for Three.js" },
      { name: "Cannon.js", description: "Physics engine for realistic interactions" },
      { name: "GLB/GLTF", description: "Optimized 3D model formats for web" }
    ],
    features: [
      "Interactive 3D Product Configurators",
      "Virtual Tours & Showrooms",
      "3D Data Visualizations",
      "WebAR/WebVR Experiences",
      "Real-time Physics Simulations",
      "3D Model Optimization",
      "Cross-platform Compatibility",
      "Performance Monitoring"
    ],
    process: [
      { step: "Concept Design", description: "Sketching ideas and defining the 3D experience" },
      { step: "3D Modeling", description: "Creating detailed 3D assets and environments" },
      { step: "Animation", description: "Bringing models to life with smooth animations" },
      { step: "Web Integration", description: "Implementing 3D scenes into web applications" },
      { step: "Optimization", description: "Ensuring smooth performance across devices" },
      { step: "Interactive Testing", description: "User testing for optimal experience" }
    ],
    caseStudy: {
      title: "Interactive Product Showcase",
      challenge: "A furniture manufacturer wanted to showcase their products in customers' homes before purchase.",
      solution: "We created an interactive 3D configurator with AR capabilities allowing virtual furniture placement.",
      results: ["40% increase in conversion rates", "60% reduction in returns", "Enhanced customer satisfaction"]
    },
    externalLinks: [
      { name: "Three.js Examples", url: "https://threejs.org/examples/" },
      { name: "WebGL Fundamentals", url: "https://webglfundamentals.org/" },
      { name: "Blender Learning Resources", url: "https://www.blender.org/support/" }
    ]
  },
  {
    id: 2,
    title: "UI/UX DESIGN",
    subtitle: "Digital Aesthetics",
    icon: "🎨",
    gradient: "from-green-400 via-emerald-400 to-teal-500",
    overview: "Design beautiful, intuitive interfaces that convert visitors into customers through strategic user experience design.",
    detailedDescription: [
      "Great design is more than just aesthetics—it's about creating meaningful connections between your brand and your users. Our UI/UX design process is rooted in user research, data-driven decisions, and conversion optimization.",
      "We craft interfaces that are not only visually stunning but also incredibly functional. Every design decision is made with your users' needs and your business goals in mind, ensuring maximum impact and engagement.",
      "From wireframes to final designs, we follow industry best practices and stay current with the latest design trends while maintaining timeless usability principles."
    ],
    technologies: [
      { name: "Figma", description: "Collaborative design and prototyping platform" },
      { name: "Adobe XD", description: "User experience design and prototyping tool" },
      { name: "Framer", description: "Interactive design and prototyping" },
      { name: "Principle", description: "Timeline-based animation and interaction design" },
      { name: "Adobe Creative Suite", description: "Professional design and image editing tools" },
      { name: "InVision", description: "Digital product design and collaboration" },
      { name: "Miro", description: "Collaborative whiteboarding and brainstorming" }
    ],
    features: [
      "User Research & Personas",
      "Wireframing & Information Architecture",
      "Visual Design Systems",
      "Interactive Prototypes",
      "Usability Testing",
      "Accessibility Compliance (WCAG)",
      "Mobile-First Design",
      "Conversion Rate Optimization"
    ],
    process: [
      { step: "Research", description: "Understanding users, competitors, and market trends" },
      { step: "Strategy", description: "Defining goals, user journeys, and success metrics" },
      { step: "Wireframing", description: "Creating structural blueprints of the interface" },
      { step: "Visual Design", description: "Applying brand elements and visual hierarchy" },
      { step: "Prototyping", description: "Building interactive mockups for testing" },
      { step: "Iteration", description: "Refining based on feedback and testing results" }
    ],
    caseStudy: {
      title: "SaaS Dashboard Redesign",
      challenge: "A B2B software company had high user churn due to complex interface and poor onboarding.",
      solution: "We redesigned the entire user experience with simplified navigation and guided onboarding flows.",
      results: ["45% reduction in user churn", "78% improvement in task completion", "92% user satisfaction score"]
    },
    externalLinks: [
      { name: "Figma Design Resources", url: "https://www.figma.com/resources/" },
      { name: "Nielsen Norman Group", url: "https://www.nngroup.com/" },
      { name: "Material Design Guidelines", url: "https://material.io/design" }
    ]
  },
  {
    id: 3,
    title: "CUSTOM SOLUTIONS",
    subtitle: "Bespoke Development",
    icon: "⚡",
    gradient: "from-yellow-400 via-orange-400 to-red-500",
    overview: "Solve unique business challenges with tailored solutions that integrate seamlessly with your existing systems.",
    detailedDescription: [
      "Every business has unique challenges that require custom solutions. We specialize in developing bespoke applications, integrations, and automation tools that address your specific needs and streamline your operations.",
      "Our custom development approach involves deep understanding of your business processes, identifying opportunities for optimization, and creating solutions that provide real value and ROI.",
      "From API integrations that connect disparate systems to custom automation workflows that save hours of manual work, we build solutions that grow with your business."
    ],
    technologies: [
      { name: "Python", description: "Versatile programming language for backend development" },
      { name: "FastAPI", description: "Modern, fast web framework for building APIs" },
      { name: "Django", description: "High-level Python web framework" },
      { name: "REST/GraphQL APIs", description: "Modern API development standards" },
      { name: "Docker", description: "Containerization for consistent deployments" },
      { name: "AWS/GCP", description: "Cloud computing platforms" },
      { name: "Kubernetes", description: "Container orchestration and scaling" }
    ],
    features: [
      "API Development & Integration",
      "Workflow Automation",
      "Data Processing & Analytics",
      "Legacy System Modernization",
      "Third-party Service Integration",
      "Custom CRM/ERP Solutions",
      "Microservices Architecture",
      "Cloud Migration Services"
    ],
    process: [
      { step: "Analysis", description: "Deep dive into your business processes and pain points" },
      { step: "Solution Design", description: "Architecting the most effective technical approach" },
      { step: "Development", description: "Building robust, scalable custom solutions" },
      { step: "Integration", description: "Seamlessly connecting with existing systems" },
      { step: "Testing", description: "Comprehensive testing and quality assurance" },
      { step: "Deployment", description: "Smooth rollout with minimal disruption" }
    ],
    caseStudy: {
      title: "Inventory Management Automation",
      challenge: "A growing e-commerce business struggled with manual inventory tracking across multiple channels.",
      solution: "We built a custom inventory management system with real-time sync across all sales channels.",
      results: ["80% reduction in manual work", "99.5% inventory accuracy", "25% increase in operational efficiency"]
    },
    externalLinks: [
      { name: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/" },
      { name: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/" },
      { name: "Python.org Resources", url: "https://www.python.org/doc/" }
    ]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    service: "Web Development",
    quote: "603Design transformed our online presence completely. The new website is not only beautiful but has increased our conversions by 250%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Design Studio XYZ",
    service: "3D Experiences",
    quote: "The 3D product configurator they built for us has revolutionized how our customers interact with our products. Absolutely amazing work!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "GrowthCorp",
    service: "UI/UX Design",
    quote: "Their UX redesign reduced our support tickets by 40% and improved user satisfaction dramatically. They really understand user behavior.",
    rating: 5
  }
];

export default function ServiceDetails() {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50 bg-gray-900">
        <Image
          src={bg}
          alt="Background image for Services Details"
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-30"
        />
      </div>
      
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-16 px-6">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-7xl text-gradient-blue leading-tight select-none">
            Our Services in Detail
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive solutions designed to elevate your digital presence and drive business growth.
          </p>
        </section>

        {/* Service Navigation */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.gradient} text-black shadow-lg`
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </section>

        {/* Active Service Content */}
        <section className="max-w-6xl mx-auto px-6">
          {services.map((service, index) => (
            activeService === index && (
              <div key={service.id} className="space-y-12">
                {/* Service Header */}
                <div className="text-center mb-12">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-4`}>
                    {service.title}
                  </h2>
                  <h3 className="text-2xl text-slate-300 font-light mb-6">{service.subtitle}</h3>
                  <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {['overview', 'technologies', 'process', 'case-study'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === tab
                          ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                          : 'text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-2xl font-bold text-cyan-400 mb-4">What We Deliver</h4>
                          <div className="space-y-4">
                            {service.detailedDescription.map((paragraph, i) => (
                              <p key={i} className="text-slate-300 leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-cyan-400 mb-4">Key Features</h4>
                          <div className="grid gap-3">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                <span className="text-slate-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Technologies Tab */}
                  {activeTab === 'technologies' && (
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-6">Technologies We Use</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        {service.technologies.map((tech, i) => (
                          <div key={i} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                            <h5 className="text-lg font-semibold text-white mb-2">{tech.name}</h5>
                            <p className="text-slate-400 text-sm">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Process Tab */}
                  {activeTab === 'process' && (
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-6">Our Process</h4>
                      <div className="space-y-6">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex items-start space-x-4">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-black font-bold text-sm`}>
                              {i + 1}
                            </div>
                            <div>
                              <h5 className="text-lg font-semibold text-white mb-2">{step.step}</h5>
                              <p className="text-slate-400">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Case Study Tab */}
                  {activeTab === 'case-study' && (
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-6">Case Study</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-xl font-semibold text-white mb-3">{service.caseStudy.title}</h5>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-slate-800/30 rounded-lg p-4">
                            <h6 className="font-semibold text-red-400 mb-2">Challenge</h6>
                            <p className="text-slate-300 text-sm">{service.caseStudy.challenge}</p>
                          </div>
                          <div className="bg-slate-800/30 rounded-lg p-4">
                            <h6 className="font-semibold text-blue-400 mb-2">Solution</h6>
                            <p className="text-slate-300 text-sm">{service.caseStudy.solution}</p>
                          </div>
                          <div className="bg-slate-800/30 rounded-lg p-4">
                            <h6 className="font-semibold text-green-400 mb-2">Results</h6>
                            <ul className="text-slate-300 text-sm space-y-1">
                              {service.caseStudy.results.map((result, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                  <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* External Resources */}
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-4">Learning Resources</h4>
                  <div className="flex flex-wrap gap-4">
                    {service.externalLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-700/70 transition-all duration-300"
                      >
                        <span>{link.name}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                  <p className="text-xs text-cyan-400 font-medium">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-slate-300 mb-8">
              Let&apos;s discuss how we can help bring your vision to life with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300">
                Start Your Project
              </Link>
              <Link href="/projects" className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10 transition-all duration-300">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}