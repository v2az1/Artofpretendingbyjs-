/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// Importing the clean background artwork image (without text)
import heroBgImg from "../assets/images/real_book_cover_1784180966710.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePreorderWhatsapp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const message = encodeURIComponent("Hi! I want to order 📚");
    const whatsappUrl = `https://wa.me/923324882840?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center select-none"
      role="banner"
      aria-label="Welcome and Book Hero"
    >
      {/* Parallax Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full scale-105"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={heroBgImg}
          alt="The Art Of Pretending: It Doesn't Hurt Cinematic Cover Background"
          className="w-full h-full object-cover filter brightness-90 saturate-[0.85]"
          style={{ objectPosition: "center 90%" }}
          referrerPolicy="no-referrer"
        />
        {/* Subtle Ambient Vignette & Linear Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1622] via-[#0b1622]/40 to-[#0b1622]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1622]/80 via-transparent to-transparent"></div>
      </div>

      {/* Specified Dark Overlay: rgba(11, 22, 34, 0.75) */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ backgroundColor: "rgba(11, 22, 34, 0.75)" }}
      ></div>

      {/* Cinematic Soft Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const left = Math.random() * 100;
          const delay = Math.random() * 15;
          const duration = Math.random() * 20 + 20;
          return (
            <div
              key={i}
              className="absolute bg-slate-400/25 rounded-full filter blur-[1px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                bottom: `-20px`,
                animation: `float-particle ${duration}s infinite linear`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content Container (Top to bottom precisely structured) */}
      <div className="relative z-30 max-w-4xl px-6 text-center flex flex-col items-center justify-center h-full pt-16">
        
        {/* 1. JAVERIA NASEER: 11px, spaced uppercase, mist blue color */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-[#8ba2b5] mb-4 font-medium"
        >
          Javeria Naseer
        </motion.p>

        {/* 2. The Art Of Pretending: It Doesn't Hurt: 52-60px Cormorant Garamond Italic, near white */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-[42px] sm:text-[54px] md:text-[68px] italic leading-tight text-slate-100 mb-6 drop-shadow-sm font-medium tracking-wide"
        >
          The Art Of Pretending: It Doesn't Hurt
        </motion.h1>

        {/* 3. "Behind every 'I'm fine' is a world waiting to be understood." : 14px italic, mist blue */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="font-serif text-sm sm:text-base italic leading-relaxed text-[#8ba2b5] max-w-lg mb-10 tracking-wide"
        >
          "Behind every 'I'm fine' is a world waiting to be understood."
        </motion.p>

        {/* 4. Pre-order Now: gold border button, gold text, no fill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          <button
            onClick={handlePreorderWhatsapp}
            className="group px-8 py-3.5 bg-transparent border border-[#d4af37] text-[#d4af37] rounded-sm font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:bg-[#d4af37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] focus:outline-none focus:ring-1 focus:ring-[#d4af37] cursor-pointer"
          >
            Pre-order Now
          </button>
        </motion.div>
      </div>

      {/* Drifting Mist waves at the bottom of the section */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] z-20 pointer-events-none overflow-hidden select-none">
        <div className="absolute bottom-0 left-0 w-[200%] h-full opacity-10 bg-gradient-to-t from-slate-200/40 via-transparent to-transparent animate-mist-drift-slow"></div>
        <div className="absolute bottom-[-10px] left-[-50%] w-[200%] h-[80%] opacity-[0.08] bg-gradient-to-t from-slate-100/30 via-transparent to-transparent animate-mist-drift-fast"></div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#8ba2b5]/60 mb-2">
          Scroll to enter
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#8ba2b5]/60" size={16} />
        </motion.div>
      </div>
    </section>
  );
}
