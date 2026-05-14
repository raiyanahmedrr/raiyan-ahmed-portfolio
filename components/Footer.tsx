"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Parallax reveal effect for the footer text
    gsap.fromTo(".footer-text", 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full bg-[#050505] pt-32 pb-10 px-6 md:px-12 border-t border-white/10 overflow-hidden z-10">
      
      {/* Top Section: Links & Info */}
      <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600 block mb-6">Location</span>
          <p className="text-white text-sm font-light tracking-wide">Dhaka, Bangladesh</p>
          <p className="text-gray-500 text-sm font-light tracking-wide mt-2">Available for remote execution globally.</p>
        </div>
        
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600 block mb-6">Socials</span>
          <ul className="space-y-3">
            <li><a href="#" className="text-white text-sm font-light tracking-wide hover:text-gray-400 transition-colors">LinkedIn ↗</a></li>
            <li><a href="#" className="text-white text-sm font-light tracking-wide hover:text-gray-400 transition-colors">GitHub ↗</a></li>
            <li><a href="#" className="text-white text-sm font-light tracking-wide hover:text-gray-400 transition-colors">Twitter (X) ↗</a></li>
          </ul>
        </div>

        <div className="md:text-right">
           <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600 block mb-6">Direct Line</span>
           <a href="mailto:hello@raiyanahmed.com" className="text-white text-lg md:text-xl font-medium tracking-wide hover:text-gray-400 transition-colors">
             hello@raiyanahmed.com
           </a>
        </div>
      </div>

      {/* Giant Background Text */}
      <div className="w-full text-center overflow-hidden">
        <h2 className="footer-text text-[15vw] font-black uppercase tracking-tighter leading-none text-white">
          LET'S TALK
        </h2>
      </div>

      {/* Copyright */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600">
          © {new Date().getFullYear()} Raiyan Ahmed. All rights reserved.
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-600 mt-4 md:mt-0">
          System Architecture by Raiyan
        </p>
      </div>

    </footer>
  );
}