/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Sparkles, RefreshCw, Send, Lock, EyeOff } from "lucide-react";
import { SUGGESTED_MASKS, ReflectionResponse } from "../types";

export default function Sanctuary() {
  const [selectedMask, setSelectedMask] = useState<string | null>(null);
  const [customConfession, setCustomConfession] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reflectionResult, setReflectionResult] = useState<ReflectionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelectMask = (maskId: string) => {
    setSelectedMask(maskId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMask && !customConfession.trim()) return;

    setIsLoading(true);
    setError(null);

    const POETIC_FALLBACKS: Record<string, { empatheticQuote: string; poeticResponse: string; actionableStep: string }> = {
      strong: {
        empatheticQuote: "You carry a mountain on your shoulders, yet you pretend it is only a summer breeze.",
        poeticResponse: "You have spent so long being the pillar of everyone else's temple that you have forgotten that columns, too, can crack under constant pressure. It is exhausting to be strong for a world that forgets you are human. You do not have to hold up the sky alone today. It is okay to let yourself rest, to bend, and to receive the warmth you so freely give to others.",
        actionableStep: "Let one small thing go unmanaged today. Tell someone you care about, 'I am tired, and I need a little help with this.' Notice how the sky does not fall when you do."
      },
      happy: {
        empatheticQuote: "The brightest smiles often cast the deepest, most silent shadows.",
        poeticResponse: "You have styled yourself as the sun in everyone's sky, bringing warmth and laughter to keep their clouds away. But when the laughter fades and the room goes quiet, you are left in the cold. It is a lonely burden to carry a cheerful face when your soul is quietly weeping. Your sadness is not an inconvenience, nor is your weariness a failure. It is simply a truth waiting to be held.",
        actionableStep: "Find a mirror or a quiet room tonight. Take a deep, slow breath, let your facial muscles completely relax, take off your public smile, and let your face rest in its quietest, most honest shape for three minutes."
      },
      perfect: {
        empatheticQuote: "Your worth was never meant to be measured by the weight of your accomplishments.",
        poeticResponse: "You run at full speed, chasing checklists, titles, and flawless standards, hoping that if you achieve enough, you will finally feel like you are enough. But this perfection is a beautiful cage. Beneath your accomplishments is a soul that is tired of performing. You do not need to be flawless to be loved, and you do not need to be exceptional to deserve to exist.",
        actionableStep: "Purposely do one small thing imperfectly today, or leave a low-priority task completely unfinished. Look at it, breathe through the anxiety, and whisper: 'I am still worthy of peace.'"
      },
      fine: {
        empatheticQuote: "Behind every 'I'm fine' is an ocean of words waiting to be understood.",
        poeticResponse: "You have trained your voice to be small and your pain to be quiet, believing that to speak your struggles is to become a burden. But by swallowing your storms, you are drowning from the inside. Your pain does not need to be a global crisis to be valid. Your quiet hurts deserve a soft space to land, and your voice deserves to be heard without apology.",
        actionableStep: "Write down your honest answer to 'How are you?' on a scrap of paper. Don't edit it. Keep it just for yourself, or tear it up as a physical release of the silence you've been holding."
      },
      general: {
        empatheticQuote: "Behind every mask is a beautiful story of survival, waiting for the courage to be told.",
        poeticResponse: "Pretending is how we survived the moments that felt too heavy to carry. It was your armor, and it served you well. But armor eventually becomes a cage if we never learn to take it off. Your silent battles, your hidden tears, and your unspoken fears are safe here. Healing does not ask you to never be afraid; it only asks you to stop hiding your heart from yourself.",
        actionableStep: "Spend five minutes in complete silence today. Place a hand on your heart, acknowledge the weight you've been carrying, and gently tell yourself: 'I see how hard you've been trying. It is okay to let go.'"
      }
    };

    try {
      const response = await fetch("/api/reflect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          maskType: selectedMask,
          customConfession: customConfession,
        }),
      });

      if (!response.ok) {
        throw new Error("Sanctuary was unable to receive reflection.");
      }

      const data = await response.json();
      setReflectionResult(data);
    } catch (err) {
      console.warn("API reflect endpoint failed, falling back to local poetic generator.", err);
      // Seamless graceful client fallback
      const type = selectedMask || "general";
      const fb = POETIC_FALLBACKS[type] || POETIC_FALLBACKS.general;
      
      if (customConfession && customConfession.trim() !== "") {
        setReflectionResult({
          empatheticQuote: fb.empatheticQuote,
          poeticResponse: `You shared: "${customConfession}". This is a deeply honest step. ${fb.poeticResponse}`,
          actionableStep: fb.actionableStep
        });
      } else {
        setReflectionResult(fb);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedMask(null);
    setCustomConfession("");
    setReflectionResult(null);
    setError(null);
  };

  return (
    <section
      id="sanctuary"
      className="relative w-full bg-[#070e16] py-24 md:py-32 overflow-hidden border-b border-slate-900"
      aria-label="Interactive Sanctuary Section"
    >
      {/* Background starlight dots and glows */}
      <div className="absolute inset-0 bg-radial-gradient-dots opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] bg-gold-500/3 rounded-full filter blur-[90px] pointer-events-none"></div>
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-[#8ba2b5]/3 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8ba2b5] block mb-3 font-medium">
            Interactive Reflection Sanctuary
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-100 font-medium tracking-wide">
            Behind Your "I'm Fine"
          </h2>
          <div className="w-12 h-[1px] bg-[#d4af37]/40 mx-auto mt-6"></div>
          <p className="font-serif italic text-sm md:text-base text-slate-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Before you open the book, take off your shield for just a moment. Share what you are pretending today, and receive a gentle, compassionate reflection.
          </p>
        </div>

        {/* Sanctuary Sandbox Card */}
        <div className="bg-[#0b1622]/80 border border-slate-900/80 rounded-sm p-6 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle lock security badge */}
          <div className="absolute top-4 right-6 flex items-center space-x-1.5 opacity-40">
            <Lock size={10} className="text-slate-500" />
            <span className="font-mono text-[8px] uppercase tracking-widest text-slate-500">
              Private sanctuary • Secure & Anonymous
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!reflectionResult && !isLoading ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* 1. Mask selection */}
                <div className="space-y-4">
                  <label className="font-serif text-lg text-slate-200 block font-medium">
                    1. Which mask feels heaviest today?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SUGGESTED_MASKS.map((mask) => {
                      const isSelected = selectedMask === mask.id;
                      return (
                        <div
                          key={mask.id}
                          onClick={() => handleSelectMask(mask.id)}
                          className={`border p-5 rounded-sm cursor-pointer transition-all duration-300 relative group flex flex-col justify-between h-[120px] ${
                            isSelected
                              ? "border-[#d4af37] bg-gold-500/5 shadow-[0_0_15px_rgba(212,175,55,0.08)]"
                              : "border-slate-900 bg-slate-950/40 hover:border-slate-800"
                          }`}
                        >
                          <div>
                            <h4 className={`font-serif text-base font-medium transition-colors ${
                              isSelected ? "text-[#d4af37]" : "text-slate-200"
                            }`}>
                              {mask.label}
                            </h4>
                            <p className="font-sans text-[11px] text-slate-400 mt-1 leading-relaxed line-clamp-2">
                              {mask.description}
                            </p>
                          </div>
                          <span className={`font-serif italic text-[11px] transition-colors mt-2 block ${
                            isSelected ? "text-slate-300" : "text-[#8ba2b5] opacity-80"
                          }`}>
                            "{mask.tagline}"
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Custom input */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="confession-input" className="font-serif text-lg text-slate-200 block font-medium">
                      2. Put your unspoken storm into words (Optional)
                    </label>
                    <span className="font-sans text-[10px] text-slate-500 tracking-wider">
                      We never store your confessions
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="confession-input"
                      value={customConfession}
                      onChange={(e) => setCustomConfession(e.target.value)}
                      placeholder={
                        selectedMask 
                          ? `E.g. "I pretend I'm okay being independent, but honestly, I just want someone to listen and ask if I'm doing alright..."`
                          : `Describe your mask or confession here. What are you hiding behind your "I'm fine" today?`
                      }
                      rows={4}
                      className="w-full bg-slate-950/60 border border-slate-900 rounded-sm p-4 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#d4af37]/80 focus:ring-1 focus:ring-[#d4af37]/35 text-xs md:text-sm font-sans leading-relaxed resize-none transition-colors"
                    />
                    <div className="absolute right-3 bottom-3 text-slate-600">
                      <EyeOff size={14} />
                    </div>
                  </div>
                </div>

                {/* Submission button */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={!selectedMask && !customConfession.trim()}
                    className={`px-8 py-3.5 rounded-sm font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 flex items-center justify-center space-x-2 mx-auto focus:outline-none focus:ring-1 focus:ring-[#d4af37] cursor-pointer ${
                      selectedMask || customConfession.trim()
                        ? "bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10"
                        : "border border-slate-800 text-slate-600 cursor-not-allowed"
                    }`}
                  >
                    <Send size={12} />
                    <span>Receive Calm Reflection</span>
                  </button>
                  {error && <p className="text-red-400 font-sans text-xs mt-4">{error}</p>}
                </div>
              </motion.form>
            ) : isLoading ? (
              // 3. Breathing loading state
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 flex flex-col items-center justify-center text-center space-y-10"
              >
                {/* Slow pulse ring */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 border border-[#d4af37]/25 rounded-full animate-ping-slow pointer-events-none"></div>
                  <div className="absolute w-16 h-16 border border-[#d4af37]/45 rounded-full animate-ping-medium pointer-events-none"></div>
                  <div className="w-10 h-10 bg-[#d4af37]/15 rounded-full flex items-center justify-center text-[#d4af37]">
                    <Heart size={18} className="animate-pulse" />
                  </div>
                </div>

                <div className="space-y-4 max-w-xs">
                  <h4 className="font-serif text-lg italic text-slate-200">
                    Listening quietly...
                  </h4>
                  {/* Slow cycling subtexts */}
                  <p className="font-sans text-xs text-[#8ba2b5] animate-pulse leading-relaxed">
                    Preparing a compassionate response from the pages of 'The Art of Pretending'
                  </p>
                </div>
                
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500 flex space-x-4 items-center">
                  <span>INHALE SLOWLY</span>
                  <span className="w-1 h-1 bg-gold-500/30 rounded-full"></span>
                  <span>EXHALE PERFORMING</span>
                </div>
              </motion.div>
            ) : (
              // 4. Output reflection results
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Empathetic quote panel */}
                <div className="pl-6 md:pl-8 border-l-[2px] border-[#d4af37] py-1.5 space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#8ba2b5] block font-medium">
                    The Sanctuary Echo
                  </span>
                  <p className="font-serif text-xl md:text-2xl italic text-slate-100 leading-relaxed font-medium">
                    "{reflectionResult?.empatheticQuote}"
                  </p>
                </div>

                {/* Poetic literary response body */}
                <div className="space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#8ba2b5] block font-medium">
                    A Reflection for You
                  </span>
                  <p className="font-serif text-sm md:text-base leading-relaxed text-slate-300 tracking-wide">
                    {reflectionResult?.poeticResponse}
                  </p>
                </div>

                {/* Practical small step */}
                <div className="bg-[#070e16]/80 border border-slate-900 p-5 rounded-sm">
                  <div className="flex items-center space-x-2 text-[#d4af37] mb-2">
                    <Sparkles size={14} />
                    <span className="font-sans text-[10px] uppercase tracking-[0.18em] font-medium text-slate-300">
                      A Gentle Step for Tonight
                    </span>
                  </div>
                  <p className="font-serif italic text-xs md:text-sm text-slate-400 leading-relaxed">
                    {reflectionResult?.actionableStep}
                  </p>
                </div>

                {/* Repeat reset trigger */}
                <div className="text-center pt-6 border-t border-slate-900/60 flex flex-col md:flex-row justify-between items-center gap-4">
                  <span className="font-serif italic text-xs text-slate-400">
                    Behind every "I'm fine" is a heart waiting to be held.
                  </span>
                  <button
                    onClick={handleReset}
                    className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.25em] text-[#d4af37] hover:text-gold-400 transition-colors duration-300 focus:outline-none"
                  >
                    <RefreshCw size={12} />
                    <span>Reflect Again</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
