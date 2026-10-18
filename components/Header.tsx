import React, { useEffect, useState } from 'react';
import { scrollToSection } from '../utils/scroll';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-20 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#071629]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' 
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        {/* Brand Logo matching Folioblox® / Archana® style */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-white flex items-center group cursor-pointer"
        >
          <span>Archana</span>
          <span className="text-[#f95721] text-xs font-sans align-top ml-1">®</span>
        </a>

        {/* Right Nav: Links & "Get in touch" Pill Button */}
        <div className="flex items-center gap-6 sm:gap-10">
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 text-[15px] font-medium text-gray-200">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => handleNavClick(e, 'skills')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  onClick={(e) => handleNavClick(e, 'work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          {/* White Pill "Get in touch" Button with Orange Circular Arrow matching screenshot */}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white hover:bg-neutral-100 text-[#18181b] text-sm sm:text-[15px] font-semibold pl-6 sm:pl-7 pr-1.5 py-1.5 rounded-full flex items-center gap-3.5 transition-all shadow-md group cursor-pointer"
          >
            <span className="tracking-tight">Get in touch</span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f95721] text-white flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" strokeWidth={2.4} />
            </div>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-1.5 cursor-pointer ml-1"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#071629]/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 flex flex-col justify-center items-center ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <nav className="flex flex-col items-center space-y-7 text-xl font-medium text-white mb-8">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="hover:text-[#f95721] transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-[#f95721] transition-colors"
          >
            About
          </a>
          <a 
            href="#work" 
            onClick={(e) => handleNavClick(e, 'work')}
            className="hover:text-[#f95721] transition-colors"
          >
            Projects
          </a>
        </nav>

        <button
          onClick={() => {
            scrollToSection('contact');
            setMobileMenuOpen(false);
          }}
          className="bg-white hover:bg-neutral-100 text-[#18181b] text-base font-semibold pl-7 pr-2 py-2 rounded-full flex items-center gap-4 shadow-lg cursor-pointer"
        >
          <span>Get in touch</span>
          <div className="w-9 h-9 rounded-full bg-[#f95721] text-white flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.4} />
          </div>
        </button>
      </div>
    </>
  );
}