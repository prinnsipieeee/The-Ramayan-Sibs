import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#161514] text-stone-300 pt-20 pb-12 overflow-hidden border-t border-stone-800">
      
      {/* ==================== SUBTLE ARCHITECTURAL GRID TEXTURE OVERLAY ==================== */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      ></div>

      {/* RADIAL GLOW ACCENT IN THE BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-62.5 bg-[#c49a6c]/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ==================== TOP SECTION GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800/80">
          
          {/* BRAND COLUMN (6 Columns) */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-editorial text-2xl md:text-3xl text-stone-100 font-normal tracking-tight">
              The Ramayan Sibs
            </h3>
            <p className="text-xs text-stone-400 font-light max-w-md leading-relaxed">
              Filipino sibling acoustic group orchestrating organic acoustic harmonies and curated luxury serenades for life's sacred moments. Est. 2022.
            </p>
          </div>

          {/* LINK COLUMN 1: INQUIRE (3 Columns) */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-[10px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
              INQUIRE
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li>
                <a href="#services" className="hover:text-stone-100 transition-colors">Weddings</a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-100 transition-colors">Harana</a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-100 transition-colors">Brand Events</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-stone-100 transition-colors">Bespoke Requests</a>
              </li>
            </ul>
          </div>

          {/* LINK COLUMN 2: OUR LEGACY (3 Columns) */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-[10px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
              OUR LEGACY
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li>
                <a href="#about" className="hover:text-stone-100 transition-colors">The Sibling Bond</a>
              </li>
              <li>
                <a href="#media" className="hover:text-stone-100 transition-colors">Performance Reel</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-stone-100 transition-colors">F.A.Q.</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-stone-100 transition-colors">Press Kit</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ==================== BOTTOM SUB-FOOTER BAR ==================== */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-stone-500 font-light">
          
          {/* COPYRIGHT NOTICE */}
          <div>
            © 2022 - 2026 The Ramayan Sibs. Elegantly Orchestrated. All Rights Reserved.
          </div>

          {/* SOCIAL LINKS & BACK TO TOP */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-200 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-200 transition-colors"
            >
              YouTube
            </a>
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-200 transition-colors"
            >
              Facebook
            </a>

            {/* BACK TO TOP BUTTON */}
            <button
              onClick={scrollToTop}
              className="p-2 border border-stone-800 rounded-full hover:border-[#c49a6c] hover:text-[#c49a6c] transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}