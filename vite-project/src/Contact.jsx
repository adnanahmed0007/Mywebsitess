import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaUser, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: <FaUser className="text-indigo-400" />,
      text: 'Adnan Ahmed',
      label: 'Full Name',
    },
    {
      icon: <FaMapMarkerAlt className="text-teal-400" />,
      text: 'Delhi NCR, India',
      label: 'Location',
    },
    {
      icon: <FaEnvelope className="text-pink-400" />,
      text: 'adnanahmed1212004@gmail.com',
      link: 'mailto:adnanahmed1212004@gmail.com',
      label: 'Email',
      copyable: true
    },
    {
      icon: <FaLinkedin className="text-blue-400" />,
      text: 'linkedin.com/in/adnan-ahmed',
      link: 'https://linkedin.com/in/adnan-ahmed-814006250',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub className="text-purple-400" />,
      text: 'github.com/adnanahmed0007',
      link: 'https://github.com/adnanahmed0007',
      label: 'GitHub',
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1TI0CqzIiaIp3QMA9T_PN08J8FiH7IgST/view', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 relative overflow-hidden">

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

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-32 pb-16">
        <div className="w-full max-w-6xl">

          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-lg md:text-xl">
              Let's build something amazing together
            </p>
          </div>

          {/* Contact Card */}
          <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Profile Section */}
            <div className="flex flex-col items-center justify-center text-center lg:border-r lg:border-white/10 lg:pr-12">
              <div className="relative group mb-8">
                {/* Subtle glow like Home page */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-50 blur-xl"></div>
                <img
                  src="/WhatsApp Image 2025-08-01 at 16.32.08_ac730dfc.jpg"
                  alt="Adnan Ahmed"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#0a0a0f] shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />

                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Available
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Adnan Ahmed
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-6">
                Backend & Full-Stack Developer
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md mt-8">
                {[
                  { label: 'Projects', value: '10+' },
                  { label: 'Experience', value: '2+ Yrs' },
                  { label: 'Technologies', value: '12+' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-4 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Download Resume Button */}
              <button
                onClick={handleResumeDownload}
                className="mt-8 group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold cursor-pointer border-2 border-transparent hover:border-white/30 hover:shadow-2xl hover:shadow-indigo-500/50"
              >
                <span className="flex items-center gap-3">
                  <FaDownload className="transform group-hover:translate-y-1 transition-transform text-xl" />
                  <div className="flex flex-col items-start">
                    <span className="font-bold">Download Resume</span>
                    <span className="text-xs text-white/80">View my CV</span>
                  </div>
                </span>
              </button>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                Contact Information
              </h3>

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">
                        {item.label}
                      </div>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors duration-300 break-all"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-gray-300 break-all">{item.text}</span>
                      )}
                    </div>

                    {/* Copy Button for Email */}
                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.text)}
                        className="flex-shrink-0 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group/copy"
                        title="Copy to clipboard"
                      >
                        <svg className="w-5 h-5 text-gray-400 group-hover/copy:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    )}

                    {/* External Link Icon */}
                    {item.link && !item.copyable && (
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Media Section */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-center mb-4">Connect with me on social media</p>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: <FaGithub />, link: 'https://github.com/adnanahmed0007', color: 'hover:bg-purple-500/20' },
                    { icon: <FaLinkedin />, link: 'https://linkedin.com/in/adnan-ahmed-814006250', color: 'hover:bg-blue-500/20' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 ${social.color} transition-all duration-300 transform hover:scale-110 hover:border-white/20`}
                    >
                      <div className="text-2xl text-gray-300 hover:text-white transition-colors">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
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
      </div>
    </div>
  );
};

export default Contact;