import React from "react";

export default function About() {
    return (
        <section id="about" className="bg-[#faf8f5] py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-26 items-center">
                    
                    {/* LEFT SIDE: EDITORIAL PHOTO COLLAGE */}
                    <div className="lg:col-span-6">
                        <div className="grid grid-cols-2 gap-4 h-110px md:h-125px ">

                            {/* TALL LEFT PHOTO */}
                            <div className="h-full rounded-sm overflow-hidden bg-stone-200 shadow-md">
                                <img 
                                src="B1.jpg" 
                                alt="The Ramayan Sibs Duo Portrait" 
                                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* STACKED RIGHT PHOTO */}
                            <div className="grid grid-rows-2 gap-4 h-full">
                                <div className="rounded-sm overflow-hidden bg-stone-200 shadow-md">
                                    <img 
                                    src="B2.jpg" 
                                    alt="Acoustic Guitar Performance" 
                                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* BOTTOM IMAGE */}
                                <div className="rounded-sm overflow-hidden bg-stone-200 shadow-md">
                                    <img 
                                    src="B3.jpg" 
                                    alt="Wedding Ceremony Performance" 
                                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE: BRAND STORY & STATS */}
                    <div className="lg:col-span-6 space-y-6">

                        {/* SUBTITLE BADGE */}
                        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
                            THE SIBLING BOND
                        </span>

                        {/* SECTION HEADLINE */}
                        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[54px] leading-[1.12] text-stone-900 font-normal tracking-tight">
                            Two voices, one shared heartbeat
                        </h2>

                        {/* PARAGRAPH 1 */}
                        <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                        The Ramayan Sibs was founded in 2022 out of a lifelong family tradition of singing together in the quiet living rooms of Antipolo. Our sound relies heavily on the organic warmth of vocal alignment that only siblings can naturally project — where every pitch transition and vibrato breathe as one.
                        </p>
                        {/* PARAGRAPH 2 */}
                        <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                        We strip back the complexities of heavy digital productions to honor raw, warm acoustic intimacy. Accompanied by solo classical guitar or gentle piano, our focus remains on lyric-led authenticity.
                        </p>

                        {/* STATS COUNTER BOX AT THE BOTTOM */}
                        <div className="pt-6 border-t border-stone-200/80 flex items-baseline space-x-5">
                            <span className="font-editorial text-4xl md:text-5xl font-semibold text-[#b89362]">
                                150+
                            </span>
                        <div>
                            <span className="block text-xs font-bold tracking-[0.18em] text-stone-900 uppercase">
                                Sacred Union Celebrated
                            </span>
                            <span className="block text-xs text-stone-500 font-light mt-0.5">
                                Across Rizal Municipalities and bespoke destination events.
                            </span>
                        </div>
                    </div>
                
                    </div>

                </div>
            </div>
        </section>
    )
}