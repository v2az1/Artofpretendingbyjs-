/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Globe, Heart, ShoppingBag, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I want to order 📚");
  const WHATSAPP_URL = `https://wa.me/923324882840?text=${WHATSAPP_MESSAGE}`;

  return (
    <footer
      id="footer"
      className="bg-[#070e16] text-slate-400 py-16 md:py-20 border-t border-slate-900/40 relative"
      role="contentinfo"
      aria-label="Footer Navigation and Purchase Coordinates"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Book Branding and Tagline */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <span className="font-serif text-lg md:text-xl tracking-wide text-slate-100 font-medium">
              The Art Of Pretending: It Doesn't Hurt
            </span>
            <p className="font-serif italic text-xs md:text-sm text-slate-400 max-w-xs leading-relaxed">
              "Behind every 'I'm fine' is a world waiting to be understood."
            </p>
            <p className="font-sans text-[11px] leading-relaxed text-[#8ba2b5] opacity-80 max-w-xs">
              A psychological guide to unmasking, written with immense emotional care and academic rigor by Javeria Naseer.
            </p>
          </div>

          {/* Column 2: WhatsApp Pre-order Portal */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8ba2b5] font-medium">
              Pre-order Placement
            </span>
            <div className="flex flex-col space-y-4 font-sans text-xs">
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Pre-orders are managed directly by the author. Click below to place your request via WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 rounded-sm font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={12} />
                <span>Pre-order on WhatsApp</span>
              </a>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                ⚡ Directly connects to the author
              </span>
            </div>
          </div>

          {/* Column 3: Book Details & Specs */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8ba2b5] font-medium">
              Technical Details
            </span>
            <div className="font-sans text-[11px] leading-relaxed space-y-1.5 text-slate-500">
              <div>
                <strong className="text-slate-400">Genre:</strong> Psychological Self-help, Mental Health
              </div>
              <div>
                <strong className="text-slate-400">Published:</strong> 2026 | Lahore, Pakistan
              </div>
              <div>
                <strong className="text-slate-400">Total Length:</strong> 21 Chapters, ~280 Pages
              </div>
            </div>
          </div>

        </div>

        {/* Divider line with a gold accent dot */}
        <div className="relative w-full h-[1px] bg-slate-900 mb-10 flex justify-center items-center">
          <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 border border-[#070e16]"></div>
        </div>

        {/* Bottom copyright alignment */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-slate-600">
          <div>
            &copy; {currentYear} JAVERIA NASEER. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-1">
            <span>DESIGNED BY AZIB ABBASI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
