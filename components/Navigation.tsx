"use client";

import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
      {/* Left: Brand - MADE SMALLER */}
      <div className="pointer-events-auto">
        <h1 className="font-bold text-xs md:text-sm tracking-[0.3em] uppercase leading-none">Raiyan Ahmed</h1>
      </div>

      {/* Center: Links */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden md:flex gap-10">
        {['News', 'Works', 'About', 'Skills'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="font-mono text-[11px] tracking-widest uppercase hover:text-gray-400 transition-colors">
            {item}
          </a>
        ))}
      </div>

      {/* Right: Contact */}
      <div className="pointer-events-auto hidden md:block">
        <button className="border border-white/40 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Contact</span>
        </button>
      </div>
    </nav>
  );
}