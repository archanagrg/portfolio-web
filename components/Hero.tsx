import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToSection } from '../utils/scroll';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Entrance animations
      tl.from(".hero-animate-left", {
        x: -50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3
      });

      tl.from(".hero-animate-right", {
        x: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.8");

      tl.from(".hero-animate-bottom", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.7");

      // Subtle parallax effect on background image
      gsap.to(".hero-photo", {
        yPercent: 12,
        scale: 1.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full overflow-hidden bg-[#071629] text-white flex flex-col justify-between pt-28 md:pt-36 pb-8 sm:pb-12 px-6 sm:px-10 md:px-16 lg:px-20"
      style={{
        background: "linear-gradient(180deg, #071629 0%, #0a1424 45%, #180808 85%, #071629 100%)"
      }}
    >
      {/* Background Hero Image with Natural Color Contour */}
      <div className="hero-photo absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <img 
          src="/image/hero_bg.jpg" 
          alt="Archana Gurung"
          className="w-full h-full object-cover object-center md:object-[center_22%] select-none scale-100"
        />

        {/* Seamless edge blending gradients */}
        {/* Top gradient for header contrast */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#071629] via-[#071629]/70 to-transparent"></div>

        {/* Left gradient to ensure pristine text legibility */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#071629]/80 via-[#071629]/40 to-transparent"></div>

        {/* Right gradient for right text clarity */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#071629]/70 via-[#071629]/30 to-transparent"></div>

        {/* Bottom red contour enhancement */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071629] via-[#1a0606]/70 to-transparent"></div>

        {/* Ambient Warm Red Glow Highlights matching the photo's rim light */}
        <div className="absolute -bottom-16 left-1/4 w-[500px] h-[350px] bg-[#ff3300]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 right-10 w-[450px] h-[350px] bg-[#ff2200]/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full my-auto py-6 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 w-full">
          
          {/* Left Column: Developer Role Headline (Contained strictly to left side) */}
          <div className="w-full md:w-5/12 lg:w-5/12 max-w-lg flex flex-col items-start hero-animate-left flex-shrink-0">
            <span className="text-[#f95721] font-semibold text-base sm:text-lg md:text-xl tracking-tight mb-2 md:mb-3">
              Hey, I'm a
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-bold font-sans tracking-tight text-white leading-[1.0] drop-shadow-lg normal-case">
              Full Stack<br />Developer
            </h1>
          </div>

          {/* Center Space: Open corridor framing portrait so face is partially shown and completely unobscured */}
          <div className="hidden lg:block lg:w-2/12 flex-shrink-0 pointer-events-none"></div>

          {/* Right Column: Statement / Philosophy (Anchored cleanly to the right edge with zero overlay) */}
          <div className="w-full md:w-5/12 lg:w-4/12 max-w-md flex flex-col items-start md:items-start hero-animate-right md:ml-auto flex-shrink-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-white leading-snug mb-3 drop-shadow-md normal-case">
              Great code should feel effortless.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed opacity-90 drop-shadow font-sans normal-case">
              From architecture to interaction, I build robust, high-performance web applications and secure digital platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row: 4 Developer Pillars */}
      <div className="relative z-10 w-full pt-8 md:pt-10 border-t border-white/10 hero-animate-bottom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full">
          <div>
            <span className="text-[#f95721] text-xs sm:text-sm font-mono font-bold tracking-wider block mb-1">
              # 01
            </span>
            <h3 className="text-white text-sm sm:text-base font-medium tracking-tight normal-case font-sans">
              Full Stack Web Dev
            </h3>
          </div>

          <div>
            <span className="text-[#f95721] text-xs sm:text-sm font-mono font-bold tracking-wider block mb-1">
              # 02
            </span>
            <h3 className="text-white text-sm sm:text-base font-medium tracking-tight normal-case font-sans">
              Native Android Dev
            </h3>
          </div>

          <div>
            <span className="text-[#f95721] text-xs sm:text-sm font-mono font-bold tracking-wider block mb-1">
              # 03
            </span>
            <h3 className="text-white text-sm sm:text-base font-medium tracking-tight normal-case font-sans">
              Cyber Security Auditing
            </h3>
          </div>

          <div>
            <span className="text-[#f95721] text-xs sm:text-sm font-mono font-bold tracking-wider block mb-1">
              # 04
            </span>
            <h3 className="text-white text-sm sm:text-base font-medium tracking-tight normal-case font-sans">
              AI & Cloud Systems
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}