import React, { useState, useEffect } from "react";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "../assets/anime.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Web Developer";
  const typingSpeed = 100; // milliseconds
  const pauseTime = 2000; // pause before restarting

  useEffect(() => {
    let timeout;

    if (currentIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, fullText]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <img
          src={heroBg}
          alt="anime background"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce delay-500"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-shadow-2xs">Rizky Yafa</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-200 font-light">
            <span className="inline-block min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate developers creating delightful digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection("#projects")}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              View My Work
              <div className="group-hover:translate-x-1 transition-transform">
                →
              </div>
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/yafaiky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rizky-yafa-5787a136b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
