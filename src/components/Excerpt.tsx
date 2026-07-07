/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, FileText, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Excerpt() {
  const [activeTab, setActiveTab] = useState<"chapter1" | "chapter9">("chapter1");
  const [isReadExpanded, setIsReadExpanded] = useState(false);

  const handleTabChange = (tab: "chapter1" | "chapter9") => {
    setActiveTab(tab);
    setIsReadExpanded(false);
  };

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
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8ba2b5] block mb-3 font-medium">
            A Whispered Passage
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-100 font-medium tracking-wide">
            Excerpts from the Book
          </h2>
          <div className="w-12 h-[1px] bg-[#d4af37]/40 mx-auto mt-6"></div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
          <button
            onClick={() => handleTabChange("chapter1")}
            className={`px-4 py-2.5 rounded-sm font-sans text-xs uppercase tracking-widest transition-all duration-300 border ${
              activeTab === "chapter1"
                ? "bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/30 font-semibold"
                : "bg-[#070e16]/40 text-slate-400 border-slate-900 hover:text-slate-200 hover:bg-[#070e16]/80"
            }`}
          >
            Chapter 1: Exam Stress & Beyond
          </button>
          <button
            onClick={() => handleTabChange("chapter9")}
            className={`px-4 py-2.5 rounded-sm font-sans text-xs uppercase tracking-widest transition-all duration-300 border ${
              activeTab === "chapter9"
                ? "bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/30 font-semibold"
                : "bg-[#070e16]/40 text-slate-400 border-slate-900 hover:text-slate-200 hover:bg-[#070e16]/80"
            }`}
          >
            Chapter 9: The Masks We Wear
          </button>
        </div>

        {/* Elegant Reader Frame */}
        <div className="bg-[#070e16]/80 border border-slate-900/80 rounded-sm p-8 md:p-14 shadow-2xl relative">
          
          {/* Top notebook headers */}
          <div className="flex justify-between items-center border-b border-slate-900/60 pb-6 mb-8 text-[#8ba2b5]/50 font-mono text-[9px] uppercase tracking-widest">
            <span>The Art of Pretending</span>
            <span>
              {activeTab === "chapter1" ? "Chapter 1 Excerpt" : "Chapter 9 Excerpt"}
            </span>
            <span>{activeTab === "chapter1" ? "Page 1" : "Page 142"}</span>
          </div>

          <div className="space-y-6">
            
            {activeTab === "chapter1" ? (
              <>
                {/* Chapter 1: Header/Teaser */}
                <div className="relative pl-0 md:px-6">
                  <span className="font-serif text-7xl text-[#d4af37]/15 select-none absolute left-0 top-[-25px]">
                    “
                  </span>
                  <p className="font-serif text-lg md:text-2xl italic leading-relaxed text-slate-200 tracking-wide">
                    Life was good when the only stress was exams. Back in the good old days, stress had a shape to it. It arrived on a timetable...
                  </p>
                  <footer className="mt-4 flex items-center space-x-2 justify-end">
                    <span className="w-4 h-[1px] bg-gold-500/40"></span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8ba2b5] font-medium">
                      Javeria Naseer, Chapter 1
                    </span>
                  </footer>
                </div>

                <div className="w-8 h-[1px] bg-slate-900 mx-auto my-8"></div>

                <p className="font-sans text-sm md:text-base leading-relaxed text-slate-300">
                  Back in the good old days, stress had a shape to it. It arrived on a timetable, stamped with a date sheet, began at an appointed hour, and ended when the week dissolved. It had a beginning, a middle, and an end. And when it was over, it was truly over. All that remained was to compare answers, disparage the teacher's marking, and celebrate our survival with street food and idle weekend plans.
                </p>

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
                          That kind of stress had the decency not to rouse us at three in the morning. It was predictable. Containable. Almost courteous in its cruelty, a mercy I failed to recognize at the time.
                        </p>
                        <p>
                          I remember sitting in my hostel room one unremarkable night, not even during exam season, simply dwelling on all of it, on how uncomplicated things once were, back when the worst possible outcome had a syllabus and a due date. It felt peculiar to miss something I'd once resented. But I did. I sat there long enough that the thought stopped feeling trivial and started feeling undeniable.
                        </p>
                        <p className="font-serif italic text-lg text-slate-200 py-2 border-l-2 border-[#d4af37]/30 pl-4 my-4">
                          What I didn't yet grasp was that life would eventually hand me questions with no answer key.
                        </p>
                        <p>
                          Nobody warned us that growing up meant shouldering burdens that resisted measurement. Nobody warned us we'd one day long for the certainty of those old anxieties, not because those days were painless, but because the suffering came with instructions: Study harder. Try again. Await the results.
                        </p>
                        <p className="font-serif text-[#d4af37] font-medium tracking-wide">
                          Adult pain arrives with no instructions at all.
                        </p>
                        <p>
                          There's another species of stress. The kind nobody prepares you for. It ignores timetables. It surfaces in the dead of night, presses against your chest, and amplifies every thought until it feels unbearably loud. It thrusts your deepest fears into your hands and demands you hold them, even when you're already depleted.
                        </p>
                        <p>
                          It compels you to interrogate every silence, every message left unanswered, every conversation you never intended to replay. It trails you into a crowded room and still leaves you isolated. And gradually, without your noticing, it transforms honesty into performance, teaching you to say "I'm fine" so convincingly that even you begin to believe the lie.
                        </p>
                        <p>
                          We assumed adulthood would mean liberation. Instead, it became clamor: deadlines, comparisons, heartbreak, and pressure, layered so densely that it grows difficult to discern where one ends and the next begins. Somewhere along the way, achievement stopped feeling like cause for celebration and started feeling like an obligation.
                        </p>
                        <p>
                          We learned to quantify our worth in grades, followers, internships. To watch others flourish and wonder why we lagged behind. To bear impossible standards and mistake them for ambition.
                        </p>
                        <p>
                          For countless students, the pressure takes root long before adulthood arrives. In the dread of disappointing parents who sacrificed everything. In the unease of choosing the right path, wondering whether years of effort lead anywhere meaningful at all. In watching peers appear certain of their futures while you remain uncertain of yours.
                        </p>
                        <p>
                          And somewhere amid all this, we mastered the art of pretending. Pretending we have everything under control when we don't. Pretending we've moved past something that still lingers, unresolved. Pretending we aren't terrified of the future, or lonely, or adrift, all while performing the role of someone who knows precisely where they're headed.
                        </p>
                        <p>
                          Exams were never truly the point. The real burden is the relentless effort to feel sufficient in a world that keeps demanding more: from teachers, from parents, and from ourselves.
                        </p>
                        <p>
                          Perhaps you're mourning a version of your life that never came to pass. Perhaps you're homesick, or simply exhausted from the constant performance of strength. If either rings true, you haven't failed. You're merely carrying something that never appears on a report card.
                        </p>
                        <p>
                          Unlike exam season, this pressure doesn't conclude when you submit the paper. There's no closing bell, no results sheet, no definitive moment when it simply ceases. It molds how you perceive yourself, how you measure your worth, long after the chapter that shaped you has ended.
                        </p>
                        <p>
                          Healing, if it arrives here, isn't sudden or dramatic. It's choosing to pause when everything feels unbearable. It's resting without guilt. It's learning, gradually, that being human was never meant to resemble unbroken strength.
                        </p>
                        <p>
                          Nearly everyone carries something they never chose to bear. The self-assured girl crumbles in private sometimes. The loudest laughter often conceals the quietest, most sleepless nights. The person who appears strongest may be the one barely managing to hold themselves together.
                        </p>
                        <p className="text-slate-100 font-medium">
                          Most of us aren't nearly as fine as we appear. We're simply well-rehearsed at the illusion of being fine.
                        </p>
                        <p>
                          This book isn't here to remedy that. Perhaps it cannot. Some of this is merely the price of being conscious and alive in a world that outpaces our hearts more often than not.
                        </p>
                        <p>
                          What I want is humbler than a solution. I want to name it. To declare aloud that this is real, that you are not alone in feeling it, and that showing up like this even now still carries meaning.
                        </p>
                        <p className="font-serif text-[#d4af37] text-center text-lg mt-8 pt-4 border-t border-slate-900/60">
                          We survived exam season. We will survive this too.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <>
                {/* Chapter 9: Header/Teaser */}
                <div className="relative pl-0 md:px-6">
                  <span className="font-serif text-7xl text-[#d4af37]/15 select-none absolute left-0 top-[-25px]">
                    “
                  </span>
                  <p className="font-serif text-lg md:text-2xl italic leading-relaxed text-slate-200 tracking-wide">
                    Sometimes, we pretend so well, even we forget who we really are. If you're reading this, perhaps you've sensed it too: the urge to pretend...
                  </p>
                  <footer className="mt-4 flex items-center space-x-2 justify-end">
                    <span className="w-4 h-[1px] bg-gold-500/40"></span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8ba2b5] font-medium">
                      Javeria Naseer, Chapter 9
                    </span>
                  </footer>
                </div>

                <div className="w-8 h-[1px] bg-slate-900 mx-auto my-8"></div>

                <p className="font-sans text-sm md:text-base leading-relaxed text-slate-300">
                  If you're reading this, perhaps you've sensed it too: the urge to pretend. The urge to smile while aching inside, to project assurance while drowning in doubt, and to behave as though everything is perfectly fine when, beneath the surface, it feels like anything but. It is a quiet struggle that countless people carry every day, often without grasping how deeply it shapes them.
                </p>

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
                          We inhabit an age where appearances have grown extraordinarily significant. Social media showcases meticulously curated lives, academic and professional circles reward relentless achievement, and society frequently exalts strength while discouraging vulnerability.
                        </p>
                        <p>
                          Everywhere we turn, we are inundated with portraits of success, happiness, beauty, and flawlessness.
                        </p>
                        <p>
                          Gradually, these expectations begin to mold how we present ourselves to the world. We learn to bury our fears, stifle our insecurities, and disguise our struggles behind carefully engineered versions of who we are.
                        </p>
                        <p>
                          The truth is that pretending is seldom rooted in deceit. More often, it stems from self-preservation. Individuals wear disguises not because they wish to deceive others, but because they dread scrutiny, rejection, disappointment, or failure.
                        </p>
                        <p className="font-serif italic text-lg text-slate-200 py-2 border-l-2 border-[#d4af37]/30 pl-4 my-4">
                          These disguises evolve into emotional armor, insulating us from criticism and helping us navigate a world that can feel unforgiving. Yet the longer we wear them, the more burdensome they grow. What begins as a shield can gradually harden into a prison of self-concealment.
                        </p>
                        <p>
                          Over time, many people grow so accustomed to performing for an audience that they lose touch with who they truly are. They begin gauging their worth through outside approval rather than inner acceptance.
                        </p>
                        <p>
                          They become caught between who they genuinely are and who they believe they ought to be. This internal tug-of-war breeds emotional fatigue, anxiety, and a profound sense of isolation.
                        </p>
                        <p>
                          Ironically, even when surrounded by company, they may feel invisible because the world recognizes only the facade, never the soul hidden beneath it.
                        </p>
                        <p>
                          The habit of wearing disguises is hardly novel; it has persisted throughout human history. What has shifted is the intensity and frequency with which people feel compelled to adopt them in modern life.
                        </p>
                        <p>
                          The relentless visibility of our lives, the endless avenues for comparison, and the pressure to satisfy impossible standards have made authenticity increasingly elusive. Many feel as though they're living on a stage, perpetually enacting roles crafted to satisfy others' expectations.
                        </p>
                        <p>
                          Recognizing these disguises matters because awareness is the first step toward liberation. Before we can live genuinely, we must acknowledge the countless ways we conceal ourselves.
                        </p>
                        <p>
                          The masks we don often reveal our deepest fears, insecurities, and unmet longings. By examining them honestly, we come to understand not only how we present ourselves to the world but why we feel driven to do so.
                        </p>
                        <p>
                          This exploration isn't meant to condemn those who pretend. It is meant to illuminate a universal human experience. Every disguise tells a story. Every act of pretending reflects a longing to belong, to be embraced, to feel secure, or to guard oneself against pain.
                        </p>
                        <p>
                          Yet real growth begins when we confront these disguises and question whether they still serve a purpose.
                        </p>
                        <p className="text-[#d4af37] font-serif italic text-center text-lg mt-8 pt-4 border-t border-slate-900/60">
                          Because behind every elaborately constructed facade lives an authentic self awaiting recognition, one that requires no perfection, no ceaseless approval, no unending performance to be deemed worthy.
                        </p>
                        <p>
                          Before we can cast off our disguises, we must first learn to spot them. And that begins with understanding the different forms they take and the hidden motives behind why we choose to wear them.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* Expand / Close Actions */}
            <div className="text-center pt-8 border-t border-slate-900/60 mt-8">
              <button
                onClick={() => setIsReadExpanded(!isReadExpanded)}
                className="group inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.25em] text-[#d4af37] hover:text-gold-400 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-gold-500 py-2 px-4 rounded-sm"
              >
                <BookOpen size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>{isReadExpanded ? "Close Excerpt Reader" : `Read Full Excerpt (${activeTab === "chapter1" ? "5" : "4"} Min)`}</span>
                {isReadExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
