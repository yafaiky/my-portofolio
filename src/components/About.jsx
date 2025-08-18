import React from "react";
import { useScrollAnimation } from "../hooks/UseScrollAnimation.jsx";
import gambar from "../assets/image.png"

const About = () => {
  const isVisible = useScrollAnimation();

  return (
    <section id="about" className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="about-content"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible["about-content"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center gap-y-16">
            {/* Profile Image */}
            <div className="relative order-2 lg:order-2">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white p-2 rounded-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src= {gambar}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right- w-15 h-15 sm:w-20 sm:h-20 bg-sky-950 rounded-full flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                    alt="icon/tools"
                    className="w-10 h-10 "
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 sm:-bottom-4 sm:-left-10 w-15 h-15 sm:w-16 sm:h-16 bg-sky-950 rounded-full flex items-center justify-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEiUxhq8rE9PRZywY8yqbErqkdA-4YB8r4A&s"
                    alt="icon/tools"
                    className="w-10 h-7"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Web Developer
              </h3>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Hi, I'm Muhammad Rizky Yafa, a passionate web developer and
                student at SMK Plus Pelita Nusantara. While studying, I actively
                build modern websites using technologies like React and others.
                I'm always exploring new tools to improve my skills. In my free
                time, I enjoy contributing to small projects and deepening my
                understanding of full-stack development.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    <strong>Email:</strong> yafaiky@gmail.com
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    <strong>Phone:</strong> +62 813-8736-1949
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-sm sm:text-base text-gray-700">
                    <strong>Location:</strong> SMK Plus Pelita Nusantara
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
