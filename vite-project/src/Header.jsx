import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Contact', path: '/contact', icon: '📧' },
    { name: 'About Me', path: '/aboutme', icon: '👨‍💻' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'backdrop-blur-xl bg-[#0a0a0f]/95 border-b border-white/10 shadow-2xl'
          : 'backdrop-blur-sm bg-[#0a0a0f]/80 border-b border-white/5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="group relative">
              <h1 className="relative text-2xl md:text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  &lt;/Adnan.Dev&gt;
                </span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group relative px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${isActive
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl"></div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <span className="relative flex items-center gap-2">
                      <span className="text-base">{item.icon}</span>
                      {item.name}
                    </span>

                    {/* Animated Underline */}
                    {!isActive && (
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] hover:bg-white/10 border border-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span
                  className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                ></span>
                <span
                  className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                ></span>
                <span
                  className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'pointer-events-auto'
          : 'pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-20 left-0 right-0 bg-[#0a0a0f]/98 border-b border-white/10 transition-all duration-500 ${isMobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
            }`}
        >
          <nav className="p-6 space-y-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative block px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gradient-to-br from-white/5 to-white/[0.02] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>

                  {isActive && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="px-6 pb-6 pt-4 border-t border-white/10">
            <p className="text-center text-sm text-gray-400">
              Build amazing things 💜
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;