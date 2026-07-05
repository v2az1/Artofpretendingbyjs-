/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface PullQuoteProps {
  quote: string;
  author?: string;
  italicizedAuthorSub?: string;
}

export default function PullQuote({ quote, author, italicizedAuthorSub }: PullQuoteProps) {
  return (
    <section className="relative w-full bg-[#070e16] border-y border-slate-900/60 py-20 md:py-28 overflow-hidden flex justify-center items-center">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gold-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-8 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="pl-6 md:pl-10 border-l-[3px] border-[#d4af37]/80"
        >
          {/* Double Quotes symbol decoration */}
          <span className="font-serif text-5xl md:text-6xl text-[#d4af37]/15 select-none absolute -left-2 md:-left-6 -top-6">
            “
          </span>

          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-slate-100 leading-relaxed tracking-wide drop-shadow-sm">
            {quote}
          </blockquote>

          {(author || italicizedAuthorSub) && (
            <footer className="mt-6 md:mt-8 flex items-center space-x-3">
              <div className="w-6 h-[1px] bg-[#d4af37]/40"></div>
              <cite className="not-italic font-sans text-xs md:text-sm tracking-widest text-slate-400">
                {author && (
                  <span className="uppercase font-medium text-slate-300">
                    {author}
                  </span>
                )}
                {italicizedAuthorSub && (
                  <span className="font-serif italic text-[#8ba2b5] ml-2">
                    {italicizedAuthorSub}
                  </span>
                )}
              </cite>
            </footer>
          )}
        </motion.div>
      </div>
    </section>
  );
}
