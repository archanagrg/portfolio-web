import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, GraduationCap } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from('.about-pill', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.about-bio', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from('.about-portrait', {
        scale: 0.9,
        opacity: 0,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from('.about-education', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-education',
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-[#071629] text-white relative overflow-hidden border-t border-white/5"
      style={{
        background: 'linear-gradient(180deg, #071629 0%, #061224 50%, #071629 100%)',
      }}
    >
      {/* Subtle background decorative bezier lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C 300 100, 600 450, 1100 250 C 1350 150, 1500 350, 1600 300"
            stroke="rgba(56, 189, 248, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-50 450 C 400 350, 700 700, 1200 400 C 1400 280, 1550 500, 1650 450"
            stroke="rgba(249, 87, 33, 0.2)"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="mb-10 md:mb-14 about-pill">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-heading">
    About me
  </h2>
</div>

        {/* 2-Column Grid: Left Text & Contact, Right Cutout Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bio & Contact Info */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 about-bio">
            <div className="space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-sans">
              <p className="text-xl sm:text-2xl font-medium text-white">Hi!</p>
              <p>
                My name is{' '}
                <span className="text-[#f95721] font-semibold text-base sm:text-lg md:text-xl tracking-tight mb-2 md:mb-3">
                  Archana Gurung
                </span>
                .
              </p>
              <p className="text-gray-300">
                I am a{' '}
                <span className="text-white font-semibold">Full Stack Developer</span> &{' '}
                <span className="text-[#38bdf8] font-semibold">Cyber Security Enthusiast</span> based in
                Pokhara, Nepal with hands-on experience building scalable web applications, mobile architectures,
                and robust digital experiences.
              </p>
              <p className="text-gray-300 pt-2">
                <span className="text-white font-semibold">My objective:</span> Challenge myself in
                innovative tech environments to learn, develop, and engineer high-impact software systems,
                sharpen cybersecurity practices across different projects, and contribute meaningfully to
                high-performing engineering teams.
              </p>
            </div>

            {/* Contact Sub-section */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="font-heading italic font-bold text-2xl md:text-3xl text-white mb-6 tracking-tight">
                Contact
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Email */}
                <a
                  href="mailto:archanagurung2k21@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0b1f3b]/70 hover:bg-[#0f2a4f] border border-white/10 hover:border-[#f95721]/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f95721] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-gray-200 group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-gray-400 block tracking-wider">Email</span>
                    <span className="text-sm font-medium text-white truncate block group-hover:text-[#f95721] transition-colors">
                      archanagurung2k21@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+9779816669731"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0b1f3b]/70 hover:bg-[#0f2a4f] border border-white/10 hover:border-[#f95721]/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f95721] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-gray-200 group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-gray-400 block tracking-wider">Phone</span>
                    <span className="text-sm font-medium text-white truncate block group-hover:text-[#f95721] transition-colors">
                      +977 9816669731
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/archana-gurung-927282326/?skipRedirect=true"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0b1f3b]/70 hover:bg-[#0f2a4f] border border-white/10 hover:border-[#38bdf8]/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4 text-gray-200 group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-gray-400 block tracking-wider">LinkedIn</span>
                    <span className="text-sm font-medium text-white truncate block group-hover:text-[#38bdf8] transition-colors">
                      archana-gurung-927282326
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/archanagrg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0b1f3b]/70 hover:bg-[#0f2a4f] border border-white/10 hover:border-white/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                    <Github className="w-4 h-4 text-gray-200 group-hover:text-black" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-gray-400 block tracking-wider">GitHub</span>
                    <span className="text-sm font-medium text-white truncate block group-hover:text-white transition-colors">
                      github.com/archanagrg
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Cutout Portrait Highlight (Enlarged, No rectangle, no background) */}
          <div className="lg:col-span-6 flex justify-center items-center relative about-portrait">
            {/* Ambient Backlight Aura directly behind the silhouette */}
            <div 
              className="absolute w-[340px] h-[420px] sm:w-[420px] sm:h-[520px] md:w-[460px] md:h-[580px] rounded-full bg-gradient-to-tr from-[#f95721]/25 via-[#38bdf8]/15 to-transparent blur-3xl pointer-events-none -z-10" 
            />

            {/* Transparent Cutout Image with Silhouette Contour Highlight */}
            <img
              src="/image/archana.png"
              alt="Archana Gurung"
              className="w-full max-w-[400px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[540px] h-auto object-contain transition-all duration-500 hover:scale-[1.03] select-none pointer-events-auto"
              style={{
                filter: 'drop-shadow(0 15px 35px rgba(249, 87, 33, 0.3)) drop-shadow(0 0 50px rgba(56, 189, 248, 0.15))',
              }}
            />
          </div>
        </div>

        {/* Education Highlight Card (Matching Screenshot) */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto about-education">
          <div className="rounded-2xl bg-[#091b33]/75 border border-white/10 p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl hover:border-white/20 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2.5 justify-center sm:justify-start flex-wrap">
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Informatics College Pokhara
                  </span>
                  <span className="px-2.5 py-0.5 text-[11px] font-mono text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/10 font-semibold">
                    2023 — 2026
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 font-sans">
                  Bachelor of Information Technology (BIT) • Software Engineering & Cyber Security
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-gray-300 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Pokhara, NP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}