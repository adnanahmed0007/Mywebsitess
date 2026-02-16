import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const projects = [
  {
    name: "IIMT PDF Saver",
    description: "A comprehensive platform for students to upload, view, and download academic PDFs. Features secure user authentication and personal file management.",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    github: "https://github.com/adnanahmed0007/Uploadpdf2.0",
    live: "https://uploadpdf2-0.vercel.app/",
    category: "Full Stack",
    features: ["User Authentication", "File Upload", "PDF Viewer", "Download Management"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Farmer Online Market",
    description: "Revolutionary marketplace connecting farmers directly with consumers, eliminating middlemen and ensuring fair prices for agricultural products.",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    github: "https://github.com/adnanahmed0007/MarketPlace",
    live: "https://market-place-66ln.vercel.app/",
    category: "E-Commerce",
    features: ["Product Listing", "Order Tracking"],
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Blood Donation Platform",
    description: "Life-saving platform connecting blood donors with recipients. Features emergency alerts and location-based donor search.",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    github: "https://github.com/adnanahmed0007/Blooddonation2.0",
    live: "https://blooddonation2-0.vercel.app/",
    category: "Healthcare",
    features: ["Emergency Alerts", "Donor Search", "Blood Bank Directory", "Donation History"],
    color: "from-red-500 to-rose-500"
  },
];

const Myprojects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">

      {/* Animated Grid Background - Same as Home */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 px-6 pt-32 pb-16">

        {/* About Section */}
        <section className={`mb-20 max-w-5xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:bg-white/10 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  Hello! I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Adnan Ahmed</span>, a passionate backend and full-stack developer based in <span className="text-indigo-300">Delhi NCR</span>.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  I'm currently a <span className="text-purple-300 font-semibold">B.Tech Computer Science 4th year</span> student at IIMT University. I enjoy building modern web applications with clean UI and robust backend architecture.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { icon: <FaCode className="text-indigo-400" />, label: "Clean Code" },
                  { icon: <FaServer className="text-purple-400" />, label: "Scalable Backend" },
                  { icon: <FaDatabase className="text-pink-400" />, label: "Database Design" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl px-6 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-lg">
              Building solutions that make a difference
            </p>
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gradient-to-br from-white/5 to-white/[0.02] text-gray-300 hover:bg-white/10 border border-white/10 hover:border-white/20'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{
                  animationDelay: `${(index + 4) * 100}ms`,
                }}
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                <div className="p-6 md:p-8 flex flex-col h-full">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-400">Live</span>
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCode className="text-indigo-400" />
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Tech Stack</span>
                    </div>
                    <p className="text-sm text-indigo-300 font-medium">{project.tech}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Key Features</div>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, hoveredIndex === index ? 4 : 2).map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && hoveredIndex !== index && (
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-white/10">
                    {/* GitHub Button */}
                    <button
                      onClick={() => handleLinkClick(project.github)}
                      className="w-full group/github flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border-2 border-gray-700 hover:border-purple-500 rounded-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                    >
                      <FaGithub className="text-2xl text-white group-hover/github:scale-110 transition-all duration-300" />
                      <div className="flex flex-col items-start">
                        <span className="font-bold text-sm text-white">View on GitHub</span>
                        <span className="text-xs text-gray-400 group-hover/github:text-purple-300 transition-colors">See the source code</span>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover/github:text-purple-400 group-hover/github:translate-x-1 transition-all ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>

                    {/* Live Demo Button */}
                    <button
                      onClick={() => handleLinkClick(project.live)}
                      className={`w-full group/live flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${project.color} rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg cursor-pointer border-2 border-transparent hover:border-white/30`}
                    >
                      <FaExternalLinkAlt className="text-2xl text-white group-hover/live:scale-110 transition-all duration-300" />
                      <div className="flex flex-col items-start">
                        <span className="font-bold text-sm text-white">View Live Demo</span>
                        <span className="text-xs text-white/80">Visit the website</span>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-xs font-bold text-white uppercase">Live</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No projects found in this category.</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Want to collaborate?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Let's Talk
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

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
    </div>
  );
};

export default Myprojects;