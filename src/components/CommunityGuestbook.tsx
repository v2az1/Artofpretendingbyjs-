/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Heart, Sparkles, Star, ShieldCheck, Trash2 } from "lucide-react";
import { INITIAL_REVIEWS, Review } from "../types";
import { collection, query, orderBy, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function CommunityGuestbook() {
  const [reviews, setReviews] = useState<Review[]>([]);
  
  const [clientUserId] = useState<string>(() => {
    try {
      let id = localStorage.getItem("sanctuary_client_user_id");
      if (!id) {
        id = "user-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem("sanctuary_client_user_id", id);
      }
      return id;
    } catch {
      return "user-temp-" + Math.random().toString(36).substring(2, 15);
    }
  });
  
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("sanctuary_guestbook_likes");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [myReviewIds, setMyReviewIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("sanctuary_my_review_ids");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Custom form state
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [selectedMask, setSelectedMask] = useState("The Strong One");
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch reviews from Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched: Review[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        fetched.push({
          id: doc.id,
          name: data.name,
          location: data.location || "Sanctuary Reader",
          rating: data.rating,
          text: data.text,
          date: data.date,
          verified: data.verified || false,
          userId: data.userId
        });
      });
      setReviews(fetched);
    }, (err) => {
      console.error("Error listening to reviews:", err);
    });
    return () => unsubscribe();
  }, []);

  const toggleLike = (id: string) => {
    const updated = { ...likedReviews, [id]: !likedReviews[id] };
    setLikedReviews(updated);
    try {
      localStorage.setItem("sanctuary_guestbook_likes", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save like to localStorage", e);
    }
  };

  const handleDeleteReview = async (id: string) => {
    try {
      await deleteDoc(doc(db, "reviews", id));
      
      const updatedMyIds = myReviewIds.filter((myId) => myId !== id);
      setMyReviewIds(updatedMyIds);
      localStorage.setItem("sanctuary_my_review_ids", JSON.stringify(updatedMyIds));
    } catch (e) {
      console.error("Failed to delete review from Firestore:", e);
      setError("You do not have permission to delete this reflection.");
      setTimeout(() => setError(null), 4000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      setError("Please complete both your name and your reflection.");
      return;
    }

    try {
      const newReviewData = {
        name: name.trim(),
        location: location.trim() ? location.trim() : "Sanctuary Reader",
        rating: rating,
        text: text.trim(),
        date: new Date().toISOString().split("T")[0],
        verified: false,
        userId: clientUserId
      };

      const docRef = await addDoc(collection(db, "reviews"), newReviewData);

      const updatedMyIds = [docRef.id, ...myReviewIds];
      setMyReviewIds(updatedMyIds);
      localStorage.setItem("sanctuary_my_review_ids", JSON.stringify(updatedMyIds));
      
      setSuccess(true);
      setError(null);

      // Reset fields
      setName("");
      setLocation("");
      setText("");
      
      // Clear success message after 4s
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (e) {
      console.error("Failed to save review to Firestore:", e);
      setError("Failed to save your reflection. Please try again.");
      setTimeout(() => setError(null), 4000);
    }
  };

  return (
    <section
      id="community"
      className="relative w-full bg-[#0b1622] py-24 md:py-32 overflow-hidden border-b border-slate-900"
      aria-label="Community reviews and Guestbook Section"
    >
      {/* Glows */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-gold-500/3 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#8ba2b5] block mb-3 font-medium">
            A Collective Sanctuary
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-100 font-medium tracking-wide">
            Words of Connection & Encouragement
          </h2>
          <div className="w-12 h-[1px] bg-[#d4af37]/40 mx-auto mt-6"></div>
          <p className="font-serif italic text-sm text-slate-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Read reflections from fellow readers, and leave your own notes in our guestbook sanctuary. Here, you are never alone.
          </p>
        </div>

        {/* Form and Feed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Beautiful Guestbook Form */}
          <div className="col-span-1 lg:col-span-5 bg-[#070e16]/80 border border-slate-900/80 rounded-sm p-6 md:p-8 shadow-2xl backdrop-blur-md">
            <div className="flex items-center space-x-2 text-[#d4af37] mb-6">
              <MessageSquare size={16} />
              <h3 className="font-serif text-lg text-slate-200 font-medium tracking-wide">
                Write in the Guestbook
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label htmlFor="guestbook-name" className="font-sans text-[10px] uppercase tracking-wider text-slate-400 block mb-1 font-medium">
                  Your Name (or Anonymous)
                </label>
                <input
                  id="guestbook-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="E.g. Zain, or 'A Quiet Heart'"
                  className="w-full bg-slate-950/60 border border-slate-900 rounded-sm py-2.5 px-3.5 text-slate-300 placeholder-slate-700 focus:outline-none focus:border-[#d4af37] text-xs font-sans transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="guestbook-location" className="font-sans text-[10px] uppercase tracking-wider text-slate-400 block mb-1 font-medium">
                  Your Location (Optional)
                </label>
                <input
                  id="guestbook-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="E.g. Islamabad, Pakistan"
                  className="w-full bg-slate-950/60 border border-slate-900 rounded-sm py-2.5 px-3.5 text-slate-300 placeholder-slate-700 focus:outline-none focus:border-[#d4af37] text-xs font-sans transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guestbook-rating" className="font-sans text-[10px] uppercase tracking-wider text-slate-400 block mb-1 font-medium">
                    Comfort Score
                  </label>
                  <select
                    id="guestbook-rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full bg-slate-950/60 border border-slate-900 rounded-sm py-2.5 px-3.5 text-slate-300 focus:outline-none focus:border-[#d4af37] text-xs font-sans transition-colors cursor-pointer"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (Deepest Comfort)</option>
                    <option value={4}>⭐⭐⭐⭐ (Very Comforting)</option>
                    <option value={3}>⭐⭐⭐ (Comforting)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guestbook-mask" className="font-sans text-[10px] uppercase tracking-wider text-slate-400 block mb-1 font-medium">
                    Your Current Mask
                  </label>
                  <select
                    id="guestbook-mask"
                    value={selectedMask}
                    onChange={(e) => setSelectedMask(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-900 rounded-sm py-2.5 px-3.5 text-slate-300 focus:outline-none focus:border-[#d4af37] text-xs font-sans transition-colors cursor-pointer"
                  >
                    <option value="The Strong One">The Strong One</option>
                    <option value="The Constant Joy">The Constant Joy</option>
                    <option value="The Perfect Achiever">The Perfect Achiever</option>
                    <option value="The 'I'm Fine' Quietist">The 'I'm Fine' Quietist</option>
                    <option value="Unmasked & Honest">Unmasked & Honest</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="guestbook-message" className="font-sans text-[10px] uppercase tracking-wider text-slate-400 block mb-1 font-medium">
                  Your Reflection or Encourage Words
                </label>
                <textarea
                  id="guestbook-message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Share a message of encouragement for fellow readers, or a quiet realization about your mask..."
                  rows={4}
                  className="w-full bg-slate-950/60 border border-slate-900 rounded-sm p-3.5 text-slate-300 placeholder-slate-700 focus:outline-none focus:border-[#d4af37] text-xs font-sans leading-relaxed resize-none transition-colors"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer text-center focus:outline-none"
                >
                  Post to Guestbook Sanctuary
                </button>
              </div>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-center p-3 rounded-sm font-sans text-xs"
                  >
                    ✓ Your reflection is beautiful. It is now shining in our guestbook.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-red-950/20 border border-red-900/40 text-red-400 text-center p-3 rounded-sm font-sans text-xs"
                  >
                    ✕ {error}
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

          {/* Right: Reviews & Notes Feed */}
          <div className="col-span-1 lg:col-span-7 flex flex-col space-y-6 max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
            
            <AnimatePresence initial={false}>
              {reviews.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#070e16]/30 border border-dashed border-slate-900 p-10 rounded-sm text-center flex flex-col items-center justify-center space-y-4"
                >
                  <MessageSquare size={24} className="text-[#d4af37]/45" />
                  <div className="space-y-2">
                    <h4 className="font-serif text-base text-slate-300 font-medium">The Guestbook is Quiet</h4>
                    <p className="font-sans text-xs text-slate-500 max-w-xs leading-relaxed mx-auto">
                      Be the first to share an honest reflection or a note of encouragement for other readers. Use the form on the left.
                    </p>
                  </div>
                </motion.div>
              ) : (
                reviews.map((rev) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#070e16]/40 border border-slate-900/60 p-6 rounded-sm space-y-4 hover:border-slate-800/80 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-serif text-base text-slate-200 font-medium">
                            {rev.name}
                          </span>
                          {rev.verified ? (
                            <div className="text-gold-500/80 flex items-center space-x-1" title="Verified Pre-order Reader">
                              <ShieldCheck size={14} />
                              <span className="font-mono text-[8px] uppercase tracking-wider text-gold-500/70">Verified Reader</span>
                            </div>
                          ) : (
                            <span className="font-mono text-[8px] uppercase tracking-wider text-slate-500">Sanctuary Visitor</span>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2 text-[#8ba2b5] text-[10px] font-mono tracking-wide">
                          <span>{rev.location}</span>
                          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                          <span>{rev.date}</span>
                        </div>
                      </div>

                      <div className="flex text-[#d4af37] opacity-80 scale-90">
                        {[...Array(rev.rating)].map((_, idx) => (
                          <Star key={idx} size={12} fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed italic">
                      "{rev.text}"
                    </p>

                    <div className="flex justify-between items-center border-t border-slate-900/40 pt-3">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8ba2b5]/60">
                        The Art of Pretending Companion Feed
                      </span>
                      <div className="flex items-center space-x-4">
                        {(myReviewIds.includes(rev.id) || (rev.userId && rev.userId === clientUserId)) && (
                          <button
                            onClick={() => handleDeleteReview(rev.id)}
                            className="flex items-center space-x-1 text-red-500 hover:text-red-400 transition-colors focus:outline-none cursor-pointer"
                            aria-label="Delete your reflection"
                          >
                            <Trash2 size={12} />
                            <span className="font-mono text-[9px] uppercase tracking-wider font-medium">
                              Delete
                            </span>
                          </button>
                        )}
                        <button
                          onClick={() => toggleLike(rev.id)}
                          className={`flex items-center space-x-1.5 transition-colors focus:outline-none cursor-pointer ${
                            likedReviews[rev.id] ? "text-[#d4af37]" : "text-[#8ba2b5] hover:text-[#d4af37]"
                          }`}
                          aria-label={likedReviews[rev.id] ? "Disconnect with reader" : "Connect with reader"}
                        >
                          <Heart size={12} className={likedReviews[rev.id] ? "fill-current" : "fill-none"} />
                          <span className="font-mono text-[9px] uppercase tracking-wider">
                            {likedReviews[rev.id] ? "Connected" : "Connect"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
