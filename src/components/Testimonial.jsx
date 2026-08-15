import React from "react";

export default function Testimonial() {
    const reviews = [
        {
            id: 1,
            quote: "The Ramayan Sibs turned our garden wedding into a surreal, poetic experience. Their sibling vocal blend during my walk down the aisle brought absolute silence and tears of joy to every single guest. Truly a masterclass in Filipino warmth and grace.",
            author: "Ines & Gabriel",
            details: "Wedding Ceremony 2023 • San Agustin Church & Intramuros",
        },
        {
            id: 2,
            quote: "We surprised my mother with a traditional Harana serenade for her 60th birthday. The Sibs performed with such gentle humility and profound acoustic talent. It remains the most treasured memory our family has ever shared.",
            author: "The Roxas Family",
            details: "Traditional Harana Serenade • Makati, Philippines",
        },
    ];

    return (
        <section className="bg-[#f5f2ec]/60 py-20 md:py-28 border-t border-stone-200/50 overflow-hidden">
            <div className="max-w-7xl mx:auto px-6 md:px-12">
                
                {/* CENTERED HEADER */}
                <div className="text-center space-y-2 mb-10">
                    <span className="block text-[11px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
                        KIND WORDS
                    </span>
                    <h2 className="font-editorial text-4xl sm:text-5xl md:text-[52px] leading-tight text-stone-900 font-normal tracking-light">
                        Stories of Shared Joy
                    </h2>
                </div>

                {/* TESTIMONIAL CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {reviews.map((item) => (
                        <div
                        key={item.id} 
                        className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-sm border border-stone-200/60 flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="space-y-4">
                                <span className="font-garamond text-6xl text-[#c49a6c]/40 leading-none select-none block mb-4">
                                     “
                                </span>

                                <p className="font-garamond text-lg md:text-xl text-stone-700 leading-relaxed font-normal italic">
                                    {item.quote}
                                </p>
                            </div>

                            {/* AUTHOR & EVENT DETAILS */}
                            <div className="pt-6 border-t border-stone-100 space-y-1">
                                <h3 className="text-sm font-bold text-stone-900 tracking-wide font-sans">
                                    {item.author}
                                </h3>
                                <p className="text-xs text-stone-400 font-light font-sans">
                                    {item.details}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>    
    );
}