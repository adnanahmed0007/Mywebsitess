import React, { useEffect, useState } from "react";
import cssimag from "../public/css.svg";
import expressima from "../public/express.svg";
import gityubgimage from "../public/github.svg";
import htmlimage from "../public/html5.svg";
import javascriptimage from "../public/javascript.svg";
import mongodbimage from "../public/mongodb.svg";
import nodemimage from "../public/nodedotjs.svg";
import postmanimage from "../public/postman.svg";
import mySqlimagd from "../public/mysql.svg";
import nodemon from "../public/nodemon.svg";
import java from "../public/java-svgrepo-com.svg";
import reactjs from "../public/react.svg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate cards
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "HTML", src: htmlimage, color: "#E44D26" },
    { name: "CSS", src: cssimag, color: "#264DE4" },
    { name: "JavaScript", src: javascriptimage, color: "#F7E018" },
    { name: "Node.js", src: nodemimage, color: "#3C873A" },
    { name: "Express.js", src: expressima, color: "#888888" },
    { name: "MongoDB", src: mongodbimage, color: "#4FAA41" },
    { name: "Postman", src: postmanimage, color: "#FF6C37" },
    { name: "GitHub", src: gityubgimage, color: "#6e5494" },
    { name: "MySQL", src: mySqlimagd, color: "#00758F" },
    { name: "Nodemon", src: nodemon, color: "#76D04B" },
    { name: "React", src: reactjs, color: "#61DBFB" },
    { name: "Java", src: java, color: "#E76F00" },
  ];

  const highlights = [
    {
      icon: "🚀",
      title: "Backend Specialist",
      description: "Building fast, secure, and scalable applications using Node.js, Express.js, and MongoDB with industry best practices.",
    },
    {
      icon: "⚡",
      title: "Full-Stack Developer",
      description: "Experienced with authentication, REST APIs, file handling, and database architecture for production systems.",
    },
    {
      icon: "💡",
      title: "Modern Tech Stack",
      description: "Skilled in React.js and Java for full-stack development — delivering clean, efficient, and production-ready solutions.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-gray-100 overflow-hidden">

      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-32 pb-16">

        {/* Hero Section */}
        <div className={`max-w-7xl mx-auto mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold">
                  👋 Available for Projects
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="block text-white">Adnan</span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Ahmed
                </span>
              </h1>

              <div className="flex items-center gap-3 text-xl md:text-2xl text-gray-400">
                <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent"></div>
                <p className="font-light">Backend & Full-Stack Developer</p>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Crafting robust, scalable web applications with modern technologies.
                Specialized in building secure backend systems and seamless user experiences.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  Let's Talk
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/aboutme"
                  className="px-8 py-4 border-2 border-white/10 text-white rounded-lg font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  View Projects
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">2+</div>
                  <div className="text-sm text-gray-500">Years Exp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">12+</div>
                  <div className="text-sm text-gray-500">Technologies</div>
                </div>
              </div>
            </div>

            {/* Right: Profile Card */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-3xl"></div>

                <div className="relative z-10 flex flex-col items-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-50 blur-xl"></div>
                    <img
                      src="/WhatsApp Image 2025-08-01 at 16.32.08_ac730dfc.jpg"
                      alt="Adnan Ahmed"
                      className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#0a0a0f] shadow-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Available
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Adnan Ahmed</h3>
                  <p className="text-gray-400 mb-6">B.Tech CS | IIMT University</p>

                  {/* Location & Contact Quick Info */}
                  <div className="w-full space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Delhi NCR, India
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      adnanahmed1212004@gmail.com
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-6 pt-6 border-t border-white/10 w-full justify-center">
                    <a href="https://github.com/adnanahmed0007" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    <a href="https://linkedin.com/in/adnan-ahmed-814006250" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className={`max-w-7xl mx-auto mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              What I Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(i)}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border rounded-2xl p-8 transition-all duration-500 cursor-pointer ${activeCard === i
                  ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-105'
                  : 'border-white/10 hover:border-white/20'
                  }`}
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Card Number */}
                <div className="absolute top-4 right-4 text-6xl font-black text-white/5">
                  0{i + 1}
                </div>

                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4">Technologies I work with daily</p>
          </div>

          {/* Scrolling Tech Stack */}
          <div className="relative overflow-hidden py-12">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10"></div>

            <div className="flex animate-scroll-slow gap-8">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex-none group"
                >
                  <div className="w-40 h-40 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-2 hover:scale-110">
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="w-16 h-16 object-contain mb-4 transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <p
                      className="text-base font-bold text-center"
                      style={{ color: skill.color }}
                    >
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Let's collaborate and bring your ideas to life with cutting-edge technology
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-2xl shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center border-t border-white/10 pt-12">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Adnan Ahmed. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Designed & Built with 💜 and React
          </p>
        </footer>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .animate-scroll-slow {
          animation: scroll-slow 45s linear infinite;
          width: max-content;
        }

        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Home;