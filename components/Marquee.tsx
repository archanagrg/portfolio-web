import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Infinite Horizontal Scroll
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={marqueeRef} className="py-12 md:py-24 overflow-hidden bg-[#050e1b] text-white border-y border-white/10">
      <div className="marquee-inner flex whitespace-nowrap w-fit">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="text-[8vw] font-heading font-bold uppercase leading-none text-transparent stroke-text hover:text-white transition-colors duration-500 cursor-default">
              Engineering
            </span>
            <span className="w-4 h-4 rounded-full bg-[#f95721]"></span>
            <span className="text-[8vw] font-heading font-bold uppercase leading-none text-white">
              Full Stack
            </span>
            <span className="w-4 h-4 rounded-full bg-[#f95721]"></span>
            <span className="text-[8vw] font-heading font-bold uppercase leading-none text-transparent stroke-text hover:text-white transition-colors duration-500 cursor-default">
              Cyber Security
            </span>
            <span className="w-4 h-4 rounded-full bg-[#f95721]"></span>
          </div>
        ))}
      </div>
    </div>
  );
}