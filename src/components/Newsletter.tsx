/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MailCheck } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }

    // Success transition
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative w-full bg-[#070e16] py-20 md:py-24 border-b border-slate-900 overflow-hidden">
      {/* Subtle glowing backgrounds */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-500/3 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="newsletter-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8ba2b5] block font-medium">
                Follow the Literary Journey
              </span>
              <h3 className="font-serif text-2xl md:text-4xl text-slate-100 font-medium tracking-wide">
                Join Javeria Naseer's Circle of Honesty
              </h3>
              <p className="font-serif italic text-xs md:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                Receive intimate bimonthly newsletters examining cognitive defense mechanisms, creative writing updates, and notifications on the print release.
              </p>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto pt-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow bg-slate-950/60 border border-slate-900 rounded-sm py-3 px-4 text-slate-300 placeholder-slate-700 focus:outline-none focus:border-[#d4af37] text-xs font-sans transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="sm:px-6 py-3 bg-[#d4af37] hover:bg-[#c5a059] text-[#0b1622] font-sans text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none shadow-lg shadow-gold-500/10"
                  >
                    <span>Subscribe</span>
                    <Send size={11} />
                  </button>
                </div>
                {error && <p className="text-red-400 font-sans text-[11px] text-left mt-2 pl-1">{error}</p>}
              </form>

              <p className="font-mono text-[8px] uppercase tracking-widest text-slate-600">
                Quiet updates only • Never spam • Unsubscribe at any time
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="newsletter-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 py-6"
            >
              <div className="w-12 h-12 bg-[#d4af37]/10 text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <MailCheck size={20} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-slate-100 font-medium">
                Welcome to the Circle of Honesty
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                Thank you for taking off your mask. Your email has been added. We look forward to sharing our first quiet newsletter with you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
