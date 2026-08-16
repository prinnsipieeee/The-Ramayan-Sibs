import React from "react";

export default function Gallery() {
    return (
        <section id="media" className="bg-[#faf8f5] py-20 md:py-28 border-t border-stone-200/60 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* SECTION HEADER */}
                <div className="space-y-2 mb-12">
                    <span className="block text-[11px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
                        PERFORMANCE GALLERY
                    </span>

                    <h2 className="font-editorial text-4xl sm:text-5xl md:text-[52px] leading-tight text-stone-900 font-normal tracking-light">
                        Moments we've orchestrated
                    </h2>
                </div>

                {/* ASYMMETRICAL 4-PHOTOS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    <div className="md:col-span-5 h-75 md:h-85 rounded-sm overflow-hidden bg-stone-200 shadow-sm group">
                        <img 
                        src="M9.jpg" 
                        alt="Orchestrated Moment 1" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                    <div className="md:col-span-7 h-75 md:h-85 rounded-sm overlfow-hidden bg-stone-200 shadow-sm group">
                        <img 
                        src="M5.jpg" 
                        alt="Orchestrated Moment 2" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                    <div className="md:col-span-7 h-75 md:h-85 rounded-sm overlfow-hidden bg-stone-200 shadow-sm group">
                        <img 
                        src="M8.jpg" 
                        alt="Orchestrated Moment 3" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                    <div className="md:col-span-5 h-75 md:h-85 rounded-sm overlfow-hidden bg-stone-200 shadow-sm group">
                        <img 
                        src="M4.jpg" 
                        alt="Orchestrated Moment 4" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}