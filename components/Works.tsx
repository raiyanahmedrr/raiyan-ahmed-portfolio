"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    let scrollTween = gsap.to(trackRef.current, {
      x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1, 
        end: () => "+=" + trackRef.current!.scrollWidth,
        invalidateOnRefresh: true 
      }
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  // YOUR ACTUAL PROJECTS
  const projects = [
    { title: "Cryptography", type: "Security & Encryption", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" },
    { title: "Blockchain", type: "Solidity & Smart Contracts", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" },
    { title: "AI Optimization", type: "Machine Learning Integration", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2165&auto=format&fit=crop" },
    { title: "Backend Systems", type: "Data Architecture", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" },
    { title: "Web Apps", type: "Full Stack Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
    { title: "Frontend Design", type: "UI/UX & WebGL", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
  ];

  return (
    <section ref={sectionRef} id="works" className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center border-t border-white/10 z-[50]">
      <div className="absolute top-20 left-10 md:left-20 z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white/50 mix-blend-difference">
          Selected Works
        </h2>
      </div>

      <div ref={trackRef} className="flex gap-10 px-10 md:px-20 h-[60vh] items-center absolute left-0">
        
        {projects.map((proj, i) => (
          <div 
            key={i} 
            className="group relative w-[80vw] md:w-[40vw] h-full bg-[#0a0a0a] border border-white/10 flex-shrink-0 flex flex-col justify-end p-10 cursor-pointer overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-70"
              style={{ backgroundImage: `url(${proj.image})` }}
            ></div>

            <div className="absolute top-10 right-10 font-mono text-sm text-white tracking-widest transition-transform duration-500 group-hover:-translate-y-2 z-10">
              0{i + 1}
            </div>
            
            <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-2 text-white drop-shadow-lg">
                {proj.title}
              </h3>
              <p className="font-mono text-xs tracking-widest uppercase text-white drop-shadow-md">
                {proj.type}
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          </div>
        ))}

      </div>
    </section>
  );
}