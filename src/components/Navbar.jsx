import React, {useState} from "react";
import {Menu, X } from "lucide-react";
import { header } from "framer-motion/client";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <header className="sticky top-0 z-50 bg bg-[#faf8f5]/90 backdrop-blur-md borde-b border-stone-200/60 transition-all">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

                {/* LEFT: BRAND NAME & ESTABLISHED YEAR */}
                <div className="flex items-center">
                <a href="#" className="flex items-center space-x-3 group">
                    
                    {/* STACKED BRAND TITLE */}
                    <div className="font-editorial text-lg md:text-xl font-bold leading-tight text-stone-900 group-hover:text-[#b89362] transition-colors">
                    <div>The Ramayan</div>
                    <div>Sibs</div>
                    </div>

                    {/* VERTICAL DIVIDER (Naka-center) */}
                    <span className="text-stone-300 font-light text-lg select-none">|</span>

                    {/* STACKED ESTABLISHED YEAR (Mas malapit at katapat ng text) */}
                    <div className="text-[9px] md:text-[10px] tracking-[0.2em] text-stone-400 font-medium uppercase leading-tight">
                    <div>ESTABLISHED</div>
                    <div>2022</div>
                    </div>

                </a>
                </div>

                {/* CENTER: DESKSTOP NAVIGATION LINKS */}
                <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.15em] font-medium text-stone-500 uppercase">
                    <a href="#home" className="hover:text-yellow-800 transition-colors">Home</a>
                    <a href="#services" className="hover:text-yellow-800 transtition-colors">Services</a>
                    <a href="#about" className="hover:text-yellow-800 transition-colors">The Sibling Bond</a>
                    <a href="#media" className="hover:text-yellow-800 transition-colors">Media Showcase</a>
                    <a href="#booking" className="hover:text-yellow-800 transition-colors">Booking Guide</a>
                </nav>

                {/* RIGHT: INQUIRE BUTTON */}
                <div className="hidden md:flex items-center">
                    <a href="#contact" className="px-6 py-2.5 border border-stone-800 text-stone-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all duration-300"
                    >
                        INQUIRE NOW
                    </a>
                </div>

                {/* MOBILE MENU TOGGLE BUTTON */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-stone-800 hover:text-stone-600 focus:outline-none"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

                {/* MOBILE DROPDOWN MENU */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#faf8f5] border-b border-stone-200 px-6 py-6 space-y-4">
                        <a 
                        href="#home"
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-xs font-semibold uppercase tracking-[0.2em] text-stone-800"
                        >
                            Home
                        </a>
                        <a 
                        href="#services"
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-xs font-semibold uppercase tracking-[0.2em] text-stone-600"
                        >
                            Services
                        </a>
                        <a 
                        href="#about"
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-xs font-semibold uppercase tracking-[0.2em] text-stone-800"
                        >
                            The Sibling Bond
                        </a>
                        <a 
                        href="#media"
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-xs font-semibold uppercase tracking-[0.2em] text-stone-800"
                        >
                            Media Showcase
                        </a>
                        <a 
                        href="#booking"
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-xs font-semibold uppercase tracking-[0.2em] text-stone-800"
                        >
                            Booking Guide
                        </a>
                        <a 
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)} 
                        className="inline-block mt-2 px-6 py-2.5 border border-stone-800 text-stone-900 text-xs font-semibold tracking-[0.2em] uppercase"
                        >
                            INQUIRE NOW
                        </a>    
                    </div>
                )}
        </header>
    );
}