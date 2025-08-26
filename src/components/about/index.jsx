import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Digital Engagement Specialist
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            At 603D, I craft compelling digital experiences that connect brands with their audiences. 
            Specializing in custom web polls and engaging newsletters, I transform static content into 
            interactive experiences that drive meaningful engagement. My approach combines strategic 
            design thinking with cutting-edge web technologies to create polling systems that capture 
            valuable insights and newsletters that people actually want to read. Every project is 
            tailored to amplify your voice and strengthen your connection with your community.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 "}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            50+ <sub className="font-semibold text-base">polls created</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 "}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years crafting engagement</sub>
          </p>
        </ItemLayout>

        {/* Interactive Services Showcase */}
        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4"}>
          <div className="w-full text-center">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-lg font-semibold text-accent-gradient mb-2">Custom Polls</h3>
            <p className="text-sm font-light">Interactive polling systems with real-time analytics</p>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4"}>
          <div className="w-full text-center">
            <div className="text-4xl mb-2">📧</div>
            <h3 className="text-lg font-semibold text-accent-gradient mb-2">Newsletters</h3>
            <p className="text-sm font-light">Engaging email designs that drive conversions</p>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4"}>
          <div className="w-full text-center">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="text-lg font-semibold text-accent-gradient mb-2">Brand Design</h3>
            <p className="text-sm font-light">Visual identity that resonates with your audience</p>
          </div>
        </ItemLayout>

        {/* Engagement Metrics */}
        <ItemLayout className={"col-span-full md:col-span-6"}>
          <div className="w-full">
            <h3 className="text-lg font-semibold text-accent-gradient mb-4">Engagement Impact</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Poll Response Rate</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-accent h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">78%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Newsletter Open Rate</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-accent h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">65%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Client Satisfaction</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-accent h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm font-semibold">95%</span>
                </div>
              </div>
            </div>
          </div>
        </ItemLayout>

        {/* Process Overview */}
        <ItemLayout className={"col-span-full md:col-span-6"}>
          <div className="w-full">
            <h3 className="text-lg font-semibold text-accent-gradient mb-4">Design Process</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center text-xs font-bold mr-3">1</div>
                <span className="text-sm">Strategy & Research</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center text-xs font-bold mr-3">2</div>
                <span className="text-sm">Custom Design & Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center text-xs font-bold mr-3">3</div>
                <span className="text-sm">Testing & Optimization</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center text-xs font-bold mr-3">4</div>
                <span className="text-sm">Launch & Analytics</span>
              </div>
            </div>
          </div>
        </ItemLayout>

        {/* Featured Project */}
        <ItemLayout className={"col-span-full"}>
          <div className="w-full text-center">
            <h3 className="text-lg font-semibold text-accent-gradient mb-4">Latest Project Highlight</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Interactive Brand Survey</h4>
                <p className="text-sm font-light">Multi-step polling system with conditional logic and real-time data visualization</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Weekly Newsletter Design</h4>
                <p className="text-sm font-light">Responsive email template with interactive elements and personalized content blocks</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Engagement Analytics Dashboard</h4>
                <p className="text-sm font-light">Custom analytics interface for tracking poll responses and newsletter performance</p>
              </div>
            </div>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;