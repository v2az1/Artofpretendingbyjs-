/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, FileText, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Excerpt() {
  const [isReadExpanded, setIsReadExpanded] = useState(false);

  return (
    <section
      id="excerpt"
      className="relative w-full bg-[#0b1622] py-24 md:py-32 overflow-hidden border-b border-slate-900"
      aria-label="Book Excerpt Section"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-gold-500/3 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8ba2b5] block mb-3 font-medium">
            A Whispered Passage
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-100 font-medium tracking-wide">
            Excerpt from the Introduction
          </h2>
          <div className="w-12 h-[1px] bg-[#d4af37]/40 mx-auto mt-6"></div>
        </div>

        {/* Elegant Reader Frame */}
        <div className="bg-[#070e16]/80 border border-slate-900/80 rounded-sm p-8 md:p-14 shadow-2xl relative">
          
          {/* Top notebook headers */}
          <div className="flex justify-between items-center border-b border-slate-900/60 pb-6 mb-8 text-[#8ba2b5]/50 font-mono text-[9px] uppercase tracking-widest">
            <span>The Art of Pretending</span>
            <span className="hidden sm:inline">Introduction Excerpt</span>
            <span>Page IX</span>
          </div>

          <div className="space-y-6">
            
            {/* The primary required teaser quote in elegant style */}
            <div className="relative pl-0 md:px-6">
              <span className="font-serif text-7xl text-[#d4af37]/15 select-none absolute left-0 top-[-25px]">
                “
              </span>
              <p className="font-serif text-lg md:text-2xl italic leading-relaxed text-slate-200 tracking-wide">
                We were all learning the same unspoken truth that growing up often feels like pretending you have it together while quietly falling apart when no one is watching.
              </p>
              <footer className="mt-4 flex items-center space-x-2 justify-end">
                <span className="w-4 h-[1px] bg-gold-500/40"></span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8ba2b5] font-medium">
                  Javeria Naseer, The Art of Pretending
                </span>
              </footer>
            </div>

            {/* Standard blurb divider */}
            <div className="w-8 h-[1px] bg-slate-900 mx-auto my-8"></div>

            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-300">
              In this introduction, titled <strong className="font-serif italic text-slate-100 font-medium">"The Hardest Lie We Tell,"</strong> Javeria Naseer examines how we wear our public smiles like defensive shields. We spend so much energy meeting expectations and sustaining a flawless exterior that we slowly disconnect from our authentic, fragile inner realities, burying our quiet struggles in silence.
            </p>

            {/* Collapsed vs Expanded Excerpt Details */}
            <AnimatePresence>
              {isReadExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-4 border-t border-slate-900/40 mt-6 text-slate-300 font-sans text-sm md:text-base leading-relaxed">
                    <p>
                      <span className="font-serif text-4xl text-[#d4af37] float-left mr-3 line-height-none font-medium mt-1">W</span>e carry our silence like a second language—fluent in <em className="italic text-slate-200">"I'm fine,"</em> but deeply lost in translation. In a crowded room, the loneliness doesn't whisper; it echoes, reminding us of the growing distance between who we are and who we feel we must pretend to be. For many of us, homesickness is not about a physical house, but a homesickness of the soul—a quiet, desperate longing for a space where we can take off our armor, our smiles, and our roles, and simply exist without explanation.
                    </p>
                    <p>
                      This armor is often built early. We learn to meet family expectations with a silent, iron resolve, folding our own needs into neat, hidden corners to maintain harmony or keep the peace. We survive relationship distances by constructing high, unbreakable emotional walls, convincing ourselves that if they cannot see our fragility, they cannot hurt us. But the weight of this constant performance is exhausting. It feeds a heavy self-doubt, a relentless whisper that if the mask ever slipped, we would be found wanting and left behind.
                    </p>
                    <p>
                      But healing does not begin with steel. It does not begin with tightening your grip or doubling down on your composure. It begins with the soft, radical courage to say: <em className="italic text-[#d4af37]">"I am tired, and I do not have it all together today."</em>
                    </p>
                    <p>
                      This book is a quiet companion for those silent rooms. It is a guide to unmasking—not to leave you exposed or vulnerable to harm, but to help you find the absolute, unbreakable authenticity that has been waiting underneath your armor all along.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand / Close Actions */}
            <div className="text-center pt-8 border-t border-slate-900/60 mt-8">
              <button
                onClick={() => setIsReadExpanded(!isReadExpanded)}
                className="group inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.25em] text-[#d4af37] hover:text-gold-400 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-gold-500 py-2 px-4 rounded-sm"
              >
                <BookOpen size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>{isReadExpanded ? "Close Excerpt Reader" : "Read Full Excerpt (3 Min)"}</span>
                {isReadExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
