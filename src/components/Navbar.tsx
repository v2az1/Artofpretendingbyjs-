/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, Heart, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const WHATSAPP_MESSAGE = encodeURIComponent("Hello Javeria Naseer! I am interested in pre-ordering your book \"The Art of Pretending\". Please let me know the process.");
const WHATSAPP_URL = `https://wa.me/923000000000?text=${WHATSAPP_MESSAGE}`;

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About the Book", href: "#about-book" },
    { name: "Behind the Mask", href: "#sanctuary" },
    { name: "Read Excerpt", href: "#excerpt" },
    { name: "The Author", href: "#about-author" },
    { name: "Community", href: "#community" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-4 md:py-6 ${
          isScrolled
            ? "bg-[#0b1622]/95 backdrop-blur-md border-b border-slate-900 shadow-xl"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Author Name */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="group flex flex-col focus:outline-none"
            aria-label="Javeria Naseer - Home"
          >
            <span className="font-serif text-xl md:text-2xl tracking-wide text-slate-100 group-hover:text-gold-400 transition-colors duration-300">
              Javeria Naseer
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-400 group-hover:text-slate-200 transition-colors duration-300 -mt-1">
              BS Psychology Student | Author
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`font-sans text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 relative py-1 focus:outline-none hover:text-gold-400 ${
                    activeSection === link.href.slice(1)
                      ? "text-gold-400"
                      : "text-slate-300"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Premium CTA Link */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gold-500/40 hover:border-gold-500 rounded-sm font-sans text-[11px] uppercase tracking-[0.2em] text-gold-400 hover:text-gold-300 hover:bg-gold-500/5 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold-500"
            >
              Pre-order Copy
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-gold-400 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-gold-500 p-2 rounded-md"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[60px] md:top-[75px] bg-[#0b1622]/98 backdrop-blur-lg z-40 lg:hidden flex flex-col justify-between p-8 border-t border-slate-900"
          >
            <div className="flex flex-col space-y-6 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`font-sans text-sm uppercase tracking-[0.2em] py-2 border-b border-slate-900 focus:outline-none hover:text-gold-400 ${
                    activeSection === link.href.slice(1)
                      ? "text-gold-400 font-semibold"
                      : "text-slate-300"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pt-8 border-t border-slate-900/60 pb-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center bg-transparent border border-gold-500 text-gold-400 rounded-sm font-sans text-xs uppercase tracking-[0.25em] hover:bg-gold-500/10 transition-colors duration-300 focus:outline-none"
              >
                Pre-order Now
              </a>
              <div className="text-center text-[10px] font-mono tracking-widest text-slate-500">
                JAVERIA NASEER &copy; 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
