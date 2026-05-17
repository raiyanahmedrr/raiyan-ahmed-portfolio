"use client";
import Footer from "@/components/Footer";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MasterScene from "../components/canvas/Scene";
import Works from "@/components/Works";
import About from "@/components/About";

export default function Home() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const bgSkills = [
    { text: "PYTHON", top: "15%", left: "15%" },
    { text: "MONGODB", top: "75%", left: "12%" },
    { text: "SOLIDITY", top: "25%", left: "80%" },
    { text: "NEXT.JS", top: "85%", left: "75%" },
    { text: "AI OPTIMIZATION", top: "15%", left: "50%" },
    { text: "WEBGL", top: "65%", left: "45%" },
    { text: "SYSTEMS", top: "45%", left: "15%" },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(progressBarRef.current, { width: "100%", duration: 1.2, ease: "power2.inOut" })
      .to(loaderRef.current, { yPercent: -100, duration: 1, ease: "power4.inOut" })
      .fromTo(".nav-item", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-text-main", { scale: 0.8, opacity: 0, filter: "blur(10px)" }, { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power4.out" }, "-=0.8")
      .fromTo(".floating-skill", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 0.15, duration: 1.5, stagger: 0.1, ease: "power3.out" }, 
        "-=1.0"
      );

    gsap.to(".floating-skill", {
      y: "-=20",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: { each: 0.5, from: "random" }
    });
  }, []);

  return (
    <div className="main-scroll-area relative min-h-screen overflow-hidden">

      {/* --- INITIAL LOADING SCREEN --- */}
      <div ref={loaderRef} className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center">
        <p className="font-mono text-xs tracking-[0.4em] uppercase text-gray-500 mb-6 animate-pulse">System Initializing</p>
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <div ref={progressBarRef} className="absolute top-0 left-0 h-full w-0 bg-white"></div>
        </div>
      </div>

      {/* --- THE UNIFIED ALCHE STUDIO ENGINE --- */}
      <MasterScene />

      {/* --- FLOATING BACKGROUND SKILLS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {bgSkills.map((skill, index) => (
          <div 
            key={index}
            className="floating-skill absolute font-mono text-sm md:text-xl tracking-[0.3em] text-white opacity-0 uppercase"
            style={{ top: skill.top, left: skill.left, transform: 'translate(-50%, -50%)' }}
          >
            {skill.text}
          </div>
        ))}
      </div>

      {/* --- MAIN HERO SECTION --- */}
      <main className="relative z-10 w-full h-screen flex flex-col items-center justify-center pointer-events-none">
         
         {/* Central Hero Text */}
         <div className="hero-text-main text-center flex flex-col items-center">
            <h1 className="text-[16vw] md:text-[14vw] font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl mix-blend-difference">
               PORTFOLIO
            </h1>
            <p className="font-mono text-sm md:text-base tracking-[0.4em] uppercase text-gray-400 mt-4 mix-blend-difference">
               Creative Developer & WebGL Architect
            </p>
         </div>
      </main>
      
      {/* --- SYSTEM STATUS (Moved completely outside the flexbox to force it to the corner) --- */}
      <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 text-right z-50 pointer-events-none">
          <p className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">System Status</p>
          <p className="font-mono text-sm text-white max-w-[200px] ml-auto">Full Stack architecture online. AI optimization active.</p>
      </div>

      <Works />
      <About />
      <Footer /> 

    </div>
  );
}
