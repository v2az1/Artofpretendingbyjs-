/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function MaskDivider() {
  return (
    <div className="w-full flex justify-center items-center py-10 md:py-16 select-none overflow-hidden" id="mask-divider">
      <div className="relative group flex flex-col items-center">
        <svg
          className="w-20 h-20 md:w-28 md:h-28 text-slate-400 opacity-[0.06] transition-all duration-1000 ease-out group-hover:opacity-[0.12] group-hover:scale-105"
          viewBox="0 0 100 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Left half of the mask - Solid and structured */}
          <path d="M50,10 C28,10 18,28 18,52 C18,72 28,84 48,89.5 C49,89.8 49.6,90 50,90 Z" />
          
          {/* Right half of the mask - Outlined and vulnerable */}
          <path d="M50,10 C72,10 82,28 82,52 C82,72 72,84 52,89.5 C51,89.8 50.4,90 50,90" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" />
          
          {/* Left Eye (Shaded) */}
          <path d="M30,46 Q37,42 44,46 C41,48 34,48 30,46 Z" fill="currentColor" />
          
          {/* Right Eye (Outlined) */}
          <path d="M70,46 Q63,42 56,46" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Central tear/crack down the middle */}
          <path d="M50,15 L50,42 L49,46 L51,52 L50,75" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1,2" opacity="0.6" />
        </svg>
        <div className="absolute bottom-0 w-8 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent scale-0 group-hover:scale-100 transition-transform duration-700"></div>
      </div>
    </div>
  );
}
