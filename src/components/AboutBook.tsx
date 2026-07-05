/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, MapPin, Award, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { BOOK_CHAPTERS, Chapter } from "../types";
import bookCoverImg from "../assets/images/book_cover_real_1783097385467.jpg";

export default function AboutBook() {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number | null>(null);
  const [showAllChapters, setShowAllChapters] = useState(false);

  // Show first 6 chapters initially, allow expanding to see all 21
  const visibleChapters = showAllChapters ? BOOK_CHAPTERS : BOOK_CHAPTERS.slice(0, 6);

  const toggleChapter = (index: number) => {
    if (activeChapterIndex === index) {
      setActiveChapterIndex(null);
    } else {
      setActiveChapterIndex(index);
    }
  };

  return (
    <section
      id="about-book"
      className="relative w-full bg-[#0b1622] py-24 md:py-32 overflow-hidden border-b border-slate-900"
      aria-label="About the Book Section"
    >
      {/* Background organic light glows */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#8ba2b5]/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-gold-500/2 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8ba2b5] block mb-3 font-medium">
            Discover the Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-100 font-medium tracking-wide">
            The Psychological Anatomy of Our Masks
          </h2>
          <div className="w-12 h-[1px] bg-gold-500/40 mx-auto mt-6"></div>
        </div>

        {/* 3D Mockup and Blurb Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mb-24">
          
          {/* Left: Interactive 3D CSS Book Mockup with Floating Pedestal */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* The Floating Container */}
            <div className="relative w-[280px] h-[380px] md:w-[310px] md:h-[410px] flex items-center justify-center group select-none">
              
              {/* Floating Animation Wrapper */}
              <div className="animate-float-book relative z-10">
                
                {/* 3D Book Box */}
                <div 
                  className="book-3d w-[220px] h-[300px] md:w-[240px] md:h-[330px] relative transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing hover:transform"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  
                  {/* Spine Side */}
                  <div 
                    className="absolute bg-slate-950 text-slate-200 border-r border-slate-800 h-full overflow-hidden shadow-2xl"
                    style={{
                      width: "36px",
                      left: "0px",
                      top: "0px",
                      transform: "rotateY(-90deg) translateZ(18px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img 
                      src={bookCoverImg} 
                      alt="Spine of The Art of Pretending" 
                      className="absolute top-0 left-0 h-full max-w-none object-cover"
                      style={{
                        width: "900%",
                        height: "100%",
                        transform: "translateX(0)",
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Page Edges Side (Right Side) */}
                  <div 
                    className="absolute bg-[#faf7f2] h-[97%] w-[32px] border-y border-slate-200 shadow-inner"
                    style={{
                      right: "0px",
                      top: "1.5%",
                      transform: "rotateY(90deg) translateZ(205px) translateX(16px)",
                      borderRadius: "0 3px 3px 0"
                    }}
                  >
                    {/* Simulated page line textures */}
                    <div className="w-full h-full bg-repeating-linear-gradient opacity-20"></div>
                  </div>

                  {/* Front Cover Face */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-r-md overflow-hidden shadow-2xl"
                    style={{
                      transform: "translateZ(18px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img 
                      src={bookCoverImg} 
                      alt="Front Cover of The Art of Pretending" 
                      className="h-full max-w-none object-cover"
                      style={{
                        width: "112.5%",
                        height: "100%",
                        marginLeft: "-12.5%",
                      }}
                      referrerPolicy="no-referrer"
                    />
                    {/* Realistic glossy spine-fold overlay effect */}
                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-black/45 to-transparent"></div>
                    <div className="absolute top-0 left-3 w-1.5 h-full bg-white/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/5 to-white/10 pointer-events-none"></div>
                  </div>

                  {/* Back Cover Face */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-[#08101a] rounded-l-md border border-slate-900 p-6 flex flex-col justify-between text-slate-300"
                    style={{
                      transform: "rotateY(180deg) translateZ(18px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex flex-col space-y-3">
                      <h4 className="font-serif italic text-sm text-slate-100 border-b border-slate-900/60 pb-2">
                        We all pretend sometimes...
                      </h4>
                      <p className="font-sans text-[9px] leading-relaxed text-slate-400">
                        The Art of Pretending explores the hidden struggles many carry in silence: loneliness, homesickness, and the heavy pressure to appear okay. It uncovers the feelings left unspoken.
                      </p>
                    </div>
                    <div className="flex justify-between items-end border-t border-slate-900/60 pt-4">
                      <div className="flex flex-col">
                        <span className="font-sans text-[7px] uppercase tracking-wider text-slate-500">ISBN-13</span>
                        <span className="font-mono text-[8px] text-slate-400">978-969-721-0</span>
                      </div>
                      <div className="w-10 h-10 bg-white p-0.5 rounded-sm">
                        {/* Interactive Scan QR Code visual placeholder */}
                        <div className="w-full h-full bg-slate-950 flex items-center justify-center">
                          <span className="font-mono text-[6px] text-white text-center leading-none">QR CODE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Glowing Pedestal Reflection & Drop Shadow */}
              <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[160px] h-[15px] bg-black/40 rounded-full filter blur-[10px] animate-float-shadow z-0"></div>
              <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-[110px] h-[6px] bg-[#d4af37]/10 rounded-full filter blur-[6px] z-0"></div>
            </div>

            <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.25em] text-[#8ba2b5] text-center max-w-xs leading-relaxed opacity-70">
              Real book cover artwork shown
            </p>
          </div>

          {/* Right: Detailed Blurb and Book Spec Card */}
          <div className="col-span-1 lg:col-span-7 flex flex-col space-y-8">
            
            <div className="border-l-[2px] border-gold-500/40 pl-6 space-y-4">
              <h3 className="font-serif text-2xl md:text-3xl italic text-slate-100 font-medium">
                "Behind every 'I'm fine' is a world waiting to be understood."
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed text-slate-300">
                A deeply personal companion for anyone who has ever smiled while quietly falling apart. Written from a place of acute psychological understanding and creative empathy, this book is an emotional sanctuary.
              </p>
            </div>

            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-300">
              The Art of Pretending uncovers the hidden battles we fight in silence. From loneliness, homesickness, and relationship distances to family expectations and heavy self-doubt, author Javeria Naseer acts as a gentle guide. She explains the psychological survival mechanisms behind why we construct masks, and how we can slowly, safely dismantle them to build genuine connections with ourselves.
            </p>

            {/* Spec Cards Container */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              
              <div className="bg-[#070e16]/80 border border-slate-900/60 p-4 rounded-sm flex flex-col justify-between">
                <div className="flex items-center text-gold-400 mb-2">
                  <Award size={16} />
                  <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400 ml-2 font-medium">Genre</span>
                </div>
                <span className="font-serif text-sm text-slate-200 font-medium">Self-Help Guide</span>
              </div>

              <div className="bg-[#070e16]/80 border border-slate-900/60 p-4 rounded-sm flex flex-col justify-between">
                <div className="flex items-center text-gold-400 mb-2">
                  <BookOpen size={16} />
                  <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400 ml-2 font-medium">Chapters</span>
                </div>
                <span className="font-serif text-sm text-slate-200 font-medium">21 Chapters Journey</span>
              </div>

              <div className="bg-[#070e16]/80 border border-slate-900/60 p-4 rounded-sm flex flex-col justify-between">
                <div className="flex items-center text-gold-400 mb-2">
                  <Calendar size={16} />
                  <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400 ml-2 font-medium">Published</span>
                </div>
                <span className="font-serif text-sm text-slate-200 font-medium">2026 Edition</span>
              </div>

              <div className="bg-[#070e16]/80 border border-slate-900/60 p-4 rounded-sm flex flex-col justify-between">
                <div className="flex items-center text-gold-400 mb-2">
                  <MapPin size={16} />
                  <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400 ml-2 font-medium">Origin</span>
                </div>
                <span className="font-serif text-sm text-slate-200 font-medium">Pakistan</span>
              </div>

            </div>

            {/* External Call to action triggers */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#sanctuary"
                className="px-6 py-3 bg-[#d4af37] hover:bg-[#c5a059] text-[#0b1622] rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
              >
                Enter the Sanctuary
              </a>
              <a
                href="#excerpt"
                className="px-6 py-3 bg-transparent border border-slate-700 hover:border-gold-500 text-slate-300 hover:text-gold-400 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                Read Excerpt
              </a>
            </div>

          </div>

        </div>

        {/* Interactive Chapters Anatomy Synopsis */}
        <div className="mt-20 pt-12 border-t border-slate-900/40">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-slate-100 font-medium tracking-wide">
                Interactive Chapters Map
              </h3>
              <p className="font-sans text-xs text-[#8ba2b5] mt-2">
                Trace the 21 chapters of psychological uncovering, progression, and ultimate healing.
              </p>
            </div>
            
            <button
              onClick={() => setShowAllChapters(!showAllChapters)}
              className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.25em] text-[#d4af37] hover:text-gold-400 transition-colors duration-300 focus:outline-none"
            >
              <span>{showAllChapters ? "Collapse Map" : "Explore All 21 Chapters"}</span>
              {showAllChapters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleChapters.map((chapter, index) => {
                const isOpen = activeChapterIndex === index;
                return (
                  <motion.div
                    key={chapter.number}
                    layout="position"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-[#070e16]/60 border transition-all duration-300 rounded-sm cursor-pointer overflow-hidden ${
                      isOpen 
                        ? "border-gold-500/50 shadow-md shadow-gold-500/5" 
                        : "border-slate-900/80 hover:border-slate-800"
                    }`}
                    onClick={() => toggleChapter(index)}
                  >
                    <div className="p-5 flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xs text-gold-500/75 w-6">
                          {String(chapter.number).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="font-serif text-base text-slate-200 font-medium tracking-wide">
                            {chapter.title}
                          </h4>
                          <span className="font-mono text-[9px] text-[#8ba2b5] uppercase tracking-widest mt-0.5 block">
                            {chapter.theme}
                          </span>
                        </div>
                      </div>
                      <div className="text-slate-500">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-slate-900 bg-slate-950/40"
                        >
                          <div className="p-5 space-y-4">
                            <p className="font-sans text-xs text-slate-300 leading-relaxed">
                              {chapter.description}
                            </p>
                            <div className="bg-[#0b1622]/40 border border-slate-900/40 p-3 rounded-sm">
                              <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-[#8ba2b5] block mb-1">
                                Psychological Insight
                              </span>
                              <span className="font-serif italic text-xs text-slate-400">
                                {chapter.psychologicalAspect}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {!showAllChapters && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAllChapters(true)}
                className="px-6 py-2.5 bg-transparent border border-slate-800 hover:border-gold-500/50 text-slate-400 hover:text-[#d4af37] font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-300 focus:outline-none"
              >
                Expand All 21 Chapters Map
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
