/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBook from "./components/AboutBook";
import Sanctuary from "./components/Sanctuary";
import Excerpt from "./components/Excerpt";
import AboutAuthor from "./components/AboutAuthor";
import CommunityGuestbook from "./components/CommunityGuestbook";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import PullQuote from "./components/PullQuote";
import MaskDivider from "./components/MaskDivider";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Custom Intersection Observer fallback: Scroll listener to track current section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = [
        "home",
        "about-book",
        "sanctuary",
        "excerpt",
        "about-author",
        "community",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0b1622] text-slate-100 min-h-screen font-sans selection:bg-[#d4af37]/20 selection:text-[#d4af37] overflow-x-hidden antialiased">
      
      {/* Premium Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Cinematic Full-screen Hero Section */}
      <Hero />

      {/* Pull Quote Panel 1: Transitioning to the Book details */}
      <PullQuote 
        quote="We were all learning the same unspoken truth that growing up often feels like pretending you have it together while quietly falling apart when no one is watching."
        author="Javeria Naseer"
        italicizedAuthorSub="The Art of Pretending"
      />

      {/* About the Book Section (with 3D CSS Mockup and Interactive Chapters map) */}
      <AboutBook />

      {/* Subtle Half-Face Mask Watermark Divider */}
      <MaskDivider />

      {/* Interactive AI Reflection Sanctuary: 'Behind Your I'm Fine' */}
      <Sanctuary />

      {/* Pull Quote Panel 2: Transitioning to Reader Excerpts */}
      <PullQuote 
        quote="Behind every 'I'm fine' is a world waiting to be understood."
        author="Javeria Naseer"
        italicizedAuthorSub="Chapter 2: Anatomy of 'I'm Fine'"
      />

      {/* Interactive Excerpt notebook-reader */}
      <Excerpt />

      {/* Subtle Half-Face Mask Watermark Divider */}
      <MaskDivider />

      {/* About the Author Section with framed portrait */}
      <AboutAuthor />

      {/* Pull Quote Panel 3: Transitioning to Community */}
      <PullQuote 
        quote="I never wrote because I had all the answers. I wrote because I was brave enough to sit with the questions."
        author="Javeria Naseer"
        italicizedAuthorSub="A Note to the Reader"
      />

      {/* Community Guestbook & Reader Reviews Feed */}
      <CommunityGuestbook />

      {/* Newsletter Follow-the-Journey updates */}
      <Newsletter />

      {/* Detailed specs, pre-order platforms, and copyright Footer */}
      <Footer />

    </div>
  );
}
