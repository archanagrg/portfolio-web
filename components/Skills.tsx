import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const skillsData: SkillItem[] = [
  {
    name: 'ShadcnUI',
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="none">
        <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
        <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-9 sm:h-9">
        <path fill="#38bdf8" d="M64 28c-18.7 0-28 9.3-28 28 4.7-9.3 11.7-14 21-14 11.7 0 18.7 7 21 18.7 2.3 11.7 9.3 18.7 21 18.7 18.7 0 28-9.3 28-28-4.7 9.3-11.7 14-21 14-11.7 0-18.7-7-21-18.7-2.3-11.7-9.3-18.7-21-18.7zm-36 28c-18.7 0-28 9.3-28 28 4.7-9.3 11.7-14 21-14 11.7 0 18.7 7 21 18.7 2.3 11.7 9.3 18.7 21 18.7 18.7 0 28-9.3 28-28-4.7 9.3-11.7 14-21 14-11.7 0-18.7-7-21-18.7-2.3-11.7-9.3-18.7-21-18.7z" />
      </svg>
    ),
  },
  {
    name: 'Github',
    icon: (
      <svg viewBox="0 0 98 96" className="w-8 h-8 sm:w-9 sm:h-9 fill-white">
        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.215-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
      </svg>
    ),
  },
  {
    name: 'Javascript',
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#f7df1e] flex items-end justify-end p-1 text-[#000] font-black text-xs font-mono shadow-sm">
        JS
      </div>
    ),
  },
  {
    name: 'Typescript',
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#3178c6] flex items-end justify-end p-1 text-white font-bold text-xs font-mono shadow-sm">
        TS
      </div>
    ),
  },
  {
    name: 'ReactJs',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 sm:w-9 sm:h-9 text-[#61dafb]" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'NextJs',
    icon: (
      <svg viewBox="0 0 180 180" className="w-8 h-8 sm:w-9 sm:h-9 fill-none">
        <circle cx="90" cy="90" r="86" fill="#000" stroke="#fff" strokeWidth="6" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="#fff" />
        <rect x="115" y="54" width="12" height="42" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'NodeJs',
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-9 sm:h-9">
        <path fill="#539e43" d="M64 10.2l46.7 27v53.6L64 117.8 17.3 90.8V37.2L64 10.2zm0 13.9L28.7 44.5v39L64 103.9l35.3-20.4v-39L64 24.1z" />
        <path fill="#ffffff" d="M64 42.4c-12.8 0-19.1 6.5-19.1 16.4 0 9.8 6.4 15.1 19.1 18.2 8.7 2.1 12.3 4.1 12.3 7.8 0 3.7-3.7 6.1-9.9 6.1-7.4 0-12.2-3.3-14.7-7.2l-6.8 5.4c3.9 6.4 11.5 10.7 21.5 10.7 13.9 0 20.8-6.9 20.8-17.2 0-9.8-6.6-15.3-19.5-18.4-8.5-2-12-3.9-12-7.5 0-3.4 3.4-5.5 8.9-5.5 6.6 0 10.7 2.7 13.2 6.1l6.7-5.4C71.3 45.3 68.2 42.4 64 42.4z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-9 sm:h-9">
        <path fill="#387eb8" d="M63.5 12c-26.6 0-25 11.5-25 11.5l.03 11.9h25.4v3.6H29.1c-16 0-23.4 9.1-23.4 23.3 0 14.1 7 22.8 19.8 22.8h7.9v-11.2c0-12.7 10.7-12.7 10.7-12.7h25.2c10.4 0 10.4-10.1 10.4-10.1V23.5s1.2-11.5-26.2-11.5zm-7.6 7.3a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z" />
        <path fill="#ffe052" d="M64.5 116c26.6 0 25-11.5 25-11.5l-.03-11.9H64.1V89h34.8c16 0 23.4-9.1 23.4-23.3 0-14.1-7-22.8-19.8-22.8h-7.9v11.2c0 12.7-10.7 12.7-10.7 12.7H38.7c-10.4 0-10.4 10.1-10.4 10.1v27.6s-1.2 11.5 26.2 11.5zm7.6-7.3a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z" />
      </svg>
    ),
  },
  {
    name: 'Security',
    icon: <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-400" />,
  },
  {
    name: 'Kotlin',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <defs>
          <linearGradient id="kg_skills" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F52FF" />
            <stop offset="50%" stopColor="#C711E1" />
            <stop offset="100%" stopColor="#E4485D" />
          </linearGradient>
        </defs>
        <path fill="url(#kg_skills)" d="M24 24H0V0h24L12 12Z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-[#2496ed]">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m21.758 1.543c-.495-.316-1.62-.486-2.65-.407-.15-1.748-1.423-3.05-3.02-3.05-.333 0-.66.056-.967.164a6.046 6.046 0 00-4.043-1.685v.006H1.18a1.18 1.18 0 00-1.18 1.18 8.653 8.653 0 001.95 5.485c2.19 2.564 5.568 4.043 9.497 4.155a16.03 16.03 0 008.272-1.928c3.272-1.895 4.398-4.225 4.398-4.225s-.58.337-1.42.502" />
      </svg>
    ),
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from('.skills-heading-wrap', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Smooth Infinite Horizontal Marquee
      const marquee = marqueeRef.current;
      if (marquee) {
        const tween = gsap.to(marquee, {
          xPercent: -50,
          repeat: -1,
          duration: 28,
          ease: 'linear',
        });

        const handleMouseEnter = () => tween.pause();
        const handleMouseLeave = () => tween.play();

        marquee.addEventListener('mouseenter', handleMouseEnter);
        marquee.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          marquee.removeEventListener('mouseenter', handleMouseEnter);
          marquee.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Double array to create seamless loop
  const displaySkills = [...skillsData, ...skillsData];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-28 bg-[#040c18] text-white relative overflow-hidden border-t border-white/5"
    >
      {/* Retro-futuristic Cyber Grid Background (Matching Sandip Nepali Reference) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top and Bottom Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071629] via-transparent to-[#071629] pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Centered Heading (Matching "SKILLS" from reference screenshot) */}
        <div className="text-center mb-12 sm:mb-16 skills-heading-wrap">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.25em] text-white uppercase font-heading">
            SKILLS
          </h2>
        </div>

        {/* Horizontal Marquee / Track of Glowing Cards (Matching Reference Screenshot) */}
        <div className="w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing">
          <div
            ref={marqueeRef}
            className="flex items-center gap-4 sm:gap-6 whitespace-nowrap w-fit will-change-transform px-4"
          >
            {displaySkills.map((skill, index) => (
              <div
                key={index}
                className="w-28 h-32 sm:w-36 sm:h-40 md:w-40 md:h-44 rounded-2xl sm:rounded-3xl border border-emerald-500/40 hover:border-emerald-400 bg-[#020b14]/85 backdrop-blur-md p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] flex-shrink-0 cursor-pointer group"
              >
                {/* Tech Icon */}
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                {/* Tech Name */}
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
