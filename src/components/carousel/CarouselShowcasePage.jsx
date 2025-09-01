'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data
const slides = [
  {
    id: 0,
    title1: "custom",
    title2: "website polls",
    image: "/wall_phantom.jpg",
    number: "603D",
    text: "Engage your audience with personalized website polls crafted by 603D. We create intuitive and visually compelling polling interfaces to gather valuable insights and feedback."
  },
  {
    id: 1,
    title1: "creative",
    title2: "newsletters",
    image: "/Programming_Phantom.jpg",
    number: "603D",
    text: "Boost your outreach with bespoke newsletter designs from 603D. Our newsletters combine eye-catching visuals with clear messaging, ensuring your content connects effectively."
  },
  {
    id: 2,
    title1: "data-driven",
    title2: "poll analytics",
    image: "/Mail_Phantom.jpg",
    number: "603D",
    text: "Analyze user engagement with detailed poll analytics. We provide actionable insights that empower you to tailor your website's interaction strategy and improve user satisfaction."
  },
  {
    id: 3,
    title1: "responsive",
    title2: "design solutions",
    image: "/Architect_Phantom.jpg",
    number: "603D",
    text: "Create seamless user experiences across devices with 603D's responsive design solutions. We ensure your polls and newsletters perform flawlessly on all screen sizes."
  },
  {
    id: 4,
    title1: "innovative",
    title2: "web engagement",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80",
    number: "603D",
    text: "Transform your website with innovative engagement tools. Our custom polls and newsletters drive visitor interaction, helping you build stronger relationships and boost conversions."
  },
];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`carousel-container ${className}`}>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-menu">
            <div className="nav-menu__logo">
              <span>603D</span>
            </div>

            <div className="nav-menu__list">
              <div className="brand-tagline">
                <h2>Digital Excellence & Creative Solutions</h2>
              </div>
            </div>

            <ul className="nav-menu__icon">
              <li className="nav-icon">
                <Image src="https://img.icons8.com/ios-glyphs/30/EAEAEA/gender-neutral-user.png" alt="User" width={15} height={15} />
              </li>
              <li className="nav-icon">
                <Image src="https://img.icons8.com/ios-glyphs/30/EAEAEA/search--v1.png" alt="Search" width={15} height={15} />
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* App Content */}
      <div className="app-inner">
        {/* Background Images */}
        <ImagesComponent currentSlide={currentSlide} slides={slides} />
        
        {/* Body Content */}
        <BodyComponent 
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          currentSlide={currentSlide}
          slides={slides}
          goToSlide={goToSlide}
        />
      </div>

      {/* Styles */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          padding: 0.9rem 1.2rem;
          background: transparent;
          color: #EAEAEA;
          overflow: hidden;
          height: 100vh;
          font-family: 'Barlow', sans-serif;
          z-index: 1;
        }

        /* Header Styles */
        .header {
          max-width: 1190px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .nav-menu {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          font-family: "Barlow Semi Condensed", sans-serif;
        }

        .nav-menu__logo {
          min-width: 80px;
        }

        .nav-menu__logo span {
          display: inline-block;
          font-size: 22px;
          font-weight: 600;
          padding: 0.3rem 0.8rem 0.4rem 0.8rem;
          border: 2px solid #EAEAEA;
          letter-spacing: 1px;
        }

        .nav-menu__list {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 2rem;
        }

        .brand-tagline h2 {
          font-size: 14px;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(234, 234, 234, 0.8);
          margin: 0;
          text-align: center;
        }

        .nav-menu__icon {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-menu__icon li:first-child {
          margin: 0 1rem;
        }

        /* App Styles */
        .app-inner {
          max-width: 1190px;
          margin: 0 auto;
          font-family: "Barlow", sans-serif;
          position: relative;
          z-index: 5;
        }

        /* Global reset within component */
        .carousel-container * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .carousel-container ul {
          list-style: none;
        }

        .carousel-container img {
          cursor: pointer;
        }
      `}</style>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap" rel="stylesheet" />
    </div>
  );
};

// Images Component
const ImagesComponent = ({ currentSlide, slides }) => {
  return (
    <div className="imgs">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`imgs-div ${index === currentSlide ? 'active' : ''} ${index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1) ? 'prev' : ''}`}
        >
          <div className="imgs-div__number">
            <p className="numb">{slide.number}</p>
          </div>
        </div>
      ))}

      <style jsx global>{`
        .imgs {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          z-index: -2;
        }

        .imgs-div {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100vh;
          width: 100vw;
          opacity: 0;
          transform: scale(1.3);
          transition: all 0.8s ease-out;
        }

        .imgs-div:nth-child(1) {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url("${slides[0].image}") center/cover no-repeat;
        }

        .imgs-div:nth-child(2) {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url("${slides[1].image}") center/cover no-repeat;
        }

        .imgs-div:nth-child(3) {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url("${slides[2].image}") center/cover no-repeat;
        }

        .imgs-div:nth-child(4) {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url("${slides[3].image}") center/cover no-repeat;
        }

        .imgs-div:nth-child(5) {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url("${slides[4].image}") center/cover no-repeat;
        }

        .imgs-div__number {
          position: relative;
        }

        .imgs-div__number p {
          position: absolute;
          font-size: 220px;
          transform: rotate(-90deg);
          top: 300px;
          right: -50px;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: rgba(234, 234, 234, 0.2);
          opacity: 0;
          transition: opacity 0.5s ease-out 0.5s;
        }

        .imgs-div.active {
          opacity: 1;
          transform: scale(1);
          z-index: -1;
        }

        .imgs-div.active .numb {
          opacity: 1;
        }

        .imgs-div.prev {
          opacity: 0.6;
          transform: scale(1);
          z-index: -2;
        }
      `}</style>
    </div>
  );
};

// Navigation Component
const NavigationComponent = ({ currentSlide, goToSlide }) => {
  return (
    <div className="navigation">
      <div className="navigation-count">
        <div 
          className="curMove"
          style={{ top: `${currentSlide * 20}px` }}
        ></div>
        {[0, 1, 2, 3, 4].map((index) => (
          <div 
            key={index}
            className={`nav-count ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <span></span>
          </div>
        ))}
      </div>
      <div className="navigation-scroll">
        <Image src="https://img.icons8.com/ios-glyphs/30/EAEAEA/long-arrow-down.png" alt="Scroll" width={15} height={15} />
      </div>

      <style jsx>{`
        .navigation {
          display: flex;
          justify-content: space-between;
          align-items: none;
          flex-direction: column;
          grid-row: 2/3;
        }

        .navigation-count {
          position: relative;
          width: 100%;
        }

        .nav-count {
          position: relative;
          width: 45px;
          height: 20px;
          cursor: pointer;
          transition: height 0.3s ease-in;
        }

        .nav-count span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 5px;
          width: 5px;
          border: 1px solid #EAEAEA;
          border-radius: 100vh;
          transition: all 0.3s ease;
        }

        .curMove {
          position: absolute;
          width: 45px;
          height: 45px;
          border: 1px solid #EAEAEA;
          border-radius: 100vh;
          transition: top 0.3s ease-in;
        }

        .navigation-scroll {
          position: relative;
          height: 40px;
          width: 40px;
          border: 1px solid #EAEAEA;
          border-radius: 100vh;
          cursor: pointer;
        }

        .navigation-scroll img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .nav-count.active {
          height: 45px;
        }

        .nav-count.active span {
          border: none;
          background: #EAEAEA;
        }
      `}</style>
    </div>
  );
};

// Note Component
const NoteComponent = ({ currentSlide, slides }) => {
  const currentSlideData = slides[currentSlide];

  return (
    <div className="main-note">
      <div className="main-title">
        <div className="main-title__1">
          <h1 className="main-h1">{currentSlideData.title1}</h1>
        </div>
        <div className="main-title__2">
          <h1 className="main-h1">{currentSlideData.title2}</h1>
        </div>
      </div>
      <div className="main-text">
        <p key={currentSlide} className="text-content">
          {currentSlideData.text}
        </p>
      </div>

      <style jsx>{`
        .main-note {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          padding: 4rem 0 0 0.6rem;
          height: 640px;
        }

        .main-title {
          text-transform: capitalize;
          padding-bottom: 3rem;
        }

        .main-title__1 h1 {
          font-size: 45px;
          margin-bottom: 0.5rem;
          animation: slideInFromLeft 0.6s ease-out;
        }

        .main-title__2 h1 {
          font-size: 60px;
          animation: slideInFromLeft 0.8s ease-out;
        }

        .main-text {
          font-size: 12px;
          width: 315px;
          color: rgba(234, 234, 234, 0.8);
          line-height: 1.6;
        }

        .text-content {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

// Icon Component
const IconComponent = ({ nextSlide, prevSlide }) => {
  return (
    <div className="main-icon">
      <div className="main-icon__inner">
        <div className="icon-control">
          <div className="icon-nav" onClick={prevSlide}>
            <Image src="https://img.icons8.com/ios-glyphs/30/EAEAEA/collapse-arrow.png" alt="Up" width={22} height={22} />
          </div>
          <div className="icon-nav" onClick={nextSlide}>
            <Image src="https://img.icons8.com/ios-glyphs/30/EAEAEA/expand-arrow--v1.png" alt="Down" width={22} height={22} />
          </div>
        </div>
        <div className="icon-social">
          <span className="account">
            <Image src="https://img.icons8.com/ios-glyphs/30/EAEAEA/facebook-f.png" alt="Facebook" width={17} height={17} />
          </span>
          <span className="account">
            <Image src="https://img.icons8.com/ios-glyphs/30/EAEAEA/twitter--v1.png" alt="Twitter" width={17} height={17} />
          </span>
          <span className="account">
            <Image src="https://img.icons8.com/windows/32/EAEAEA/behance.png" alt="Behance" width={17} height={17} />
          </span>
          <span className="account">
            <Image src="https://img.icons8.com/ios/50/EAEAEA/instagram-new--v1.png" alt="Instagram" width={17} height={17} />
          </span>
        </div>
      </div>

      <style jsx>{`
        .main-icon {
          justify-self: self-end;
          align-self: end;
        }

        .main-icon__inner {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 50vh;
        }

        .icon-control {
          width: 75px;
          margin-left: auto;
        }

        .icon-control .icon-nav {
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .icon-control .icon-nav:hover {
          opacity: 0.7;
        }

        .icon-control .icon-nav:last-child {
          text-align: right;
          padding: 0.6rem 0;
        }

        .icon-social {
          text-align: right;
        }

        .icon-social span {
          display: inline-block;
          padding-left: 1.3rem;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .icon-social span:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};

// Main Component
const MainComponent = ({ currentSlide, slides, nextSlide, prevSlide }) => {
  return (
    <div className="main">
      <div className="main-inner">
        <NoteComponent currentSlide={currentSlide} slides={slides} />
        <IconComponent nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>

      <style jsx>{`
        .main {
          grid-area: 1/2/3/3;
        }

        .main-inner {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding-left: 3rem;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

// Body Component
const BodyComponent = ({ currentSlide, slides, nextSlide, prevSlide, goToSlide }) => {
  return (
    <div className="Body">
      <NavigationComponent currentSlide={currentSlide} goToSlide={goToSlide} />
      <MainComponent 
        currentSlide={currentSlide} 
        slides={slides} 
        nextSlide={nextSlide} 
        prevSlide={prevSlide} 
      />

      <style jsx>{`
        .Body {
          display: grid;
          grid-template-columns: 1fr 21.5fr;
          grid-template-rows: 1fr 1.5fr;
        }
      `}</style>
    </div>
  );
};

export default Carousel;