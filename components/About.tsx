"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridItems = gsap.utils.toArray('.skill-cell');
    
    gsap.fromTo(gridItems, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative w-full bg-[#050505] border-t border-white/10 pt-32 pb-40 z-10">
      
      {/* 1. INFINITE KINETIC MARQUEE - Updated with your tech */}
      <div className="w-full overflow-hidden flex flex-col gap-4 mb-32 border-y border-white/5 py-10 opacity-30">
        <div className="flex whitespace-nowrap animate-marquee">
          <h2 className="text-[8vw] font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px white' }}>
            FULL STACK DEVELOPER • BLOCKCHAIN ENGINEER • AI OPTIMIZATION • SYSTEM ARCHITECT • FULL STACK DEVELOPER • BLOCKCHAIN ENGINEER • 
          </h2>
        </div>
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <h2 className="text-[8vw] font-black uppercase tracking-tighter text-white">
            PYTHON • MONGODB • SOLIDITY • NEXT.JS • PHP • WEBGL • PYTHON • MONGODB • SOLIDITY • NEXT.JS • PHP • WEBGL • 
          </h2>
        </div>
      </div>

      {/* 2. THE DATA GRID (Skills & Background) */}
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 border border-white/10">
        
        {/* Left Column: Bio */}
        <div className="skill-cell md:col-span-5 bg-[#050505] p-10 md:p-16">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600 block mb-10">01 / Profile</span>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-none mb-8">
            Engineering <span className="italic text-gray-500">Systems</span> <br/>for the Future.
          </h3>
          <p className="text-gray-400 font-light leading-relaxed text-sm">
            I architect digital ecosystems. From writing secure Solidity smart contracts and optimizing AI models, to building robust Full Stack web applications. I bridge the gap between heavy, data-intensive backend management and high-performance, interactive frontend design.
          </p>
        </div>

        {/* Right Column: Skills */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          
          <div className="skill-cell bg-[#050505] p-10 hover:bg-[#0A0A0A] transition-colors duration-500">
             <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600 block mb-6">Logic & Data</span>
             <ul className="space-y-4 font-mono text-sm uppercase text-gray-300">
               <li>→ Python / AI Optimization</li>
               <li>→ MongoDB / Databases</li>
               <li>→ Solidity / Web3</li>
               <li>→ PHP / Legacy Integration</li>
             </ul>
          </div>

          <div className="skill-cell bg-[#050505] p-10 hover:bg-[#0A0A0A] transition-colors duration-500">
             <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600 block mb-6">Interface & Systems</span>
             <ul className="space-y-4 font-mono text-sm uppercase text-gray-300">
               <li>→ Full Stack Web Apps</li>
               <li>→ Next.js / React</li>
               <li>→ UI/UX Frontend Design</li>
               <li>→ Cryptography / Security</li>
             </ul>
          </div>

          {/* Contact Button */}
          <div className="skill-cell bg-[#050505] p-10 hover:bg-[#0A0A0A] transition-colors duration-500 md:col-span-2 flex items-center justify-between group cursor-pointer">
             <div>
               <h4 className="text-2xl font-medium tracking-tight uppercase">Ready to deploy?</h4>
               <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600 mt-2">Initialize Contact Protocol</p>
             </div>
             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <span className="text-white group-hover:text-black transform group-hover:rotate-45 transition-transform duration-500">↗</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}