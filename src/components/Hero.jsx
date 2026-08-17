import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
    return(
        <section id="home" className="bg-[#faf8f5] pt-8 pb-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* LEFT COLUMN: HEADLINE, TAG, SUBTITLE, & BUTTONS */}
                    <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6">

                        {/* CIRCULAR EMBLEM LOGO & SUBTITLE BADGE */}
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 rounded-full border border-stone-300 p-1 flex items-center justify-center bg-white shadow-sm shrink-0">
                                <img 
                                src="/logo.svg" 
                                alt="Ramayan Sibs Logo" 
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    // Fallback visually if logo isn't loaded yet
                                    e.currentTarget.style.display = 'none';
                                }}      
                                />
                            </div>

                            <div>
                                <span className="block text-[11px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
                                    ACOUSTIC HARMONIES
                                </span>
                                <span className="block font-garamond italic text-stone-500 text-sm md:text-base">
                                    The Traditional Filipino Serenades
                                </span>
                            </div>
                        </div>

                        {/* MAIN HEADLINE WITH WARM GOLD ACCENT */}
                        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.12] text-stone-900 font-normal tracking-tight ">
                            Weaving{' '}
                            <span className="text-[#b89362] italic font-editorial font-normal">
                                timeless sibling 
                            </span>{' '}
                            harmonies into your sacred milestones
                        </h1>

                        {/* SUBTITLE DESCRIPTION */}
                        <p className="font-editorial text-stone-600 text-sm md:text-base leading-relaxed max-w-xl font-light">
                            From the hills of Antipolo, we create intimate acoustic scores and traditional Harana serenades, thoughtfully composed for weddings, modern love stories, and high-editorial celebrations.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex flex-wrap items-center gap-6 pt-2">
                            <a 
                            href="#contact"
                            className="px-8 py-4 bg-[#1c1917] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-800 transition-all shadow-sm"
                            >
                                RESERVE YOUR DATE
                            </a>

                            {/* SECONDARY CTA: LISTEN TO HARMONIES WITH PLAY ICON */}
                            <a 
                            href="#media" 
                            className="flex items-center space-x-3 text-stone-800 text-xs font-semibold tracking-[0.15em] uppercase hover:text-[#b89362] transition-colors group"
                            >
                                <span>LISTEN TO HARMONIES</span>
                                <span className="w-7 h-7 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-[#b89362] group-hover:bg-[#b89362] group-hover:text-white transition-all">
                                <Play size={12} className="ml-0.5 fill-current" />
                                </span>
                            </a>
                        </div>
                            
                    </div>

                        {/* RIGHT COLUMN: DUO FEATURED IMAGE */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-lg overflow-hidden shadow-xl bg-stone-200 aspect-16/10 w-full max-h-90px">
                            <img src="/hero.png" alt="Ramayan Sibs Duo" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* FLOATING OVERLAY BADGE */}
                                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-2.5 shadow-md">
                                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-stone-900 uppercase">
                                        NOW BOOKING 2026/2027 SEASON
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}