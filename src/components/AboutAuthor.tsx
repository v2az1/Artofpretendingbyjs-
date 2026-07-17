/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, GraduationCap, Heart, MapPin, Feather } from "lucide-react";
import { motion } from "motion/react";

export default function AboutAuthor() {
  return (
    <section
      id="about-author"
      className="relative w-full bg-[#070e16] py-24 md:py-32 overflow-hidden border-b border-slate-900"
      aria-label="About the Author Section"
    >
      {/* Background ambient circular glow */}
      <div className="absolute top-[50%] right-[-10%] w-[350px] h-[350px] bg-[#8ba2b5]/3 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8ba2b5] block mb-3 font-medium">
            The Mind Behind the Pages
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-100 font-medium tracking-wide">
            Meet Javeria Naseer
          </h2>
          <div className="w-12 h-[1px] bg-[#d4af37]/40 mx-auto mt-6"></div>
        </div>

        {/* Centered Poetic & Academic Bio */}
        <div className="flex flex-col space-y-8 items-center text-center">
          
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d4af37] font-medium block">
              Writer & Scholar
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-slate-100 font-medium max-w-2xl">
              Bridging Psychological Wisdom with Literary Empathy
            </h3>
          </div>

          <div className="space-y-6 max-w-3xl text-slate-300 font-sans text-sm md:text-base leading-relaxed">
            <p>
              Javeria Naseer is a debut author and BS Psychology student based in Pakistan. Her writing explores the intersection of emotional experience and human behaviour drawing on her academic background, her experience living away from home, and her deep curiosity about the stories people carry behind composed exteriors.
            </p>

            <p>
              <em className="italic text-slate-200">The Art of Pretending: It Doesn't Hurt</em> is her first book. It was written across nearly a year and a half of her life, beginning as a 20th birthday gift to herself and growing into something far larger than she planned much like growing up itself.
            </p>
          </div>

          {/* Academic & Author Highlights - Styled elegantly in a 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 w-full text-left">
            
            <div className="flex items-start space-x-3 bg-slate-950/40 p-5 rounded-sm border border-slate-900/60 hover:border-[#d4af37]/25 transition-colors">
              <div className="text-[#d4af37] mt-0.5">
                <GraduationCap size={16} />
              </div>
              <div>
                <h4 className="font-serif text-sm text-slate-200 font-medium">Academic Foundation</h4>
                <p className="font-sans text-xs text-slate-400 mt-1.5 leading-relaxed">
                  BS Psychology Student focusing on Cognitive Behavior, Defense Structures, and Emotional Regulation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-slate-950/40 p-5 rounded-sm border border-slate-900/60 hover:border-[#d4af37]/25 transition-colors">
              <div className="text-[#d4af37] mt-0.5">
                <Feather size={16} />
              </div>
              <div>
                <h4 className="font-serif text-sm text-slate-200 font-medium">Literary Calling</h4>
                <p className="font-sans text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Poetic prose styling that prioritizes emotional connection, authenticity, and gentle self-compassion.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-slate-950/40 p-5 rounded-sm border border-slate-900/60 hover:border-[#d4af37]/25 transition-colors">
              <div className="text-[#d4af37] mt-0.5">
                <MapPin size={16} />
              </div>
              <div>
                <h4 className="font-serif text-sm text-slate-200 font-medium">Origin & Base</h4>
                <p className="font-sans text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Pakistan. Infusing South Asian community realities and familial expectations into her therapeutic insights.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-slate-950/40 p-5 rounded-sm border border-slate-900/60 hover:border-[#d4af37]/25 transition-colors">
              <div className="text-[#d4af37] mt-0.5">
                <Heart size={16} />
              </div>
              <div>
                <h4 className="font-serif text-sm text-slate-200 font-medium">Safe Space Advocacy</h4>
                <p className="font-sans text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Host of private group connection circles encouraging anonymous expression and peer support.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
