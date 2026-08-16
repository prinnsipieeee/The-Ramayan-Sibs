import React from "react";
import { Check } from "lucide-react";
import { li } from "framer-motion/client";

export default function BookingGuide() {
    const packages = [
        {
            id: "intimate-harana",
            title: "The Intimate Harana",
            subtitle: "ideal for bespoke proposals, home serenades & anniversaries.",
            price: "₱18,000",
            rate: "/ event rate",
            isPopular: false,
            features: [
                'Acoustic Duo (Vocal Harmonies & Classical Guitar)',
                '3 Customized songs of your choice',
                'Traditional greeting / serenade narrative',
                'Travel within Metro Manila included',
            ],
            buttonStyle: "border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white",
        },
        {
            id: "sacred-union",
            title: "The Sacred Union",
            subtitle: "Perfect for full chapel ceremonies & elegant litrugies.",
            price: "₱35,000",
            rate: "/ event rate",
            isPopular: true,
            features: [
                'Full Vocal Harmony Trio + Guitarist/Pianist accompaniment',
                'Customized prelude, march, veil, cord & recessional songs',
                'Professional wedding sound system integration',
                'Virtual music curation consultation with the Sibs',
            ],
            buttonStyle: "bg-[#1c1917] text-white hover:bg-stone-800 shadow-sm",
        },
        {
            id: 'grand-soiree',
            title: 'The Grand Soirée',
            subtitle: 'Complete musical score from ceremony walk to dinner toast.',
            price: '₱55,000',
            rate: '/ event rate',
            isPopular: false,
            features: [
                'Full sibling ensemble performance',
                'Bespoke music for Ceremony + Cocktail Hour + First Hour at Reception',
                'Pre-event sound coordination with venue manager',
                'Tailored custom vocal arrangement of your chosen theme song',
            ],
            buttonStyle: 'border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white',
        },
    ];

    return (
        <section id="booking" className="bg-[#faf8f5] py-20 md:py-28 border-t border-stone-200/60 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">


                {/* CENTERED HEADER */}
                <div className="text-center space-y-2 mb-16">
                    <span className="block text-[11px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
                        INVESTMENT GUIDE
                    </span>

                    <h2 className="font-editorial text-4xl sm:text-5xl md:text-[52px] leading-tight text-stone-900 font-normal tracking-light">
                        Pricing &amp; Performance Curation
                    </h2>
                </div>

                {/* 3 PRICING CARDS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {packages.map((pg) => (
                        <div
                        key={pg.id} 
                        className={`bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-sm flex flex-col justify-between space-y-8 transition-all duration-300 ${
                            pg.isPopular
                            ? 'border-2 border-[#b89362] shadow-xl relative -translate-y-1 lg:-translate-y-2'
                            : 'border border-stone-200/80 shadow-sm hover:shadow-md'
                        }`}
                        >
                            {/* CARD TOP INFOR */}
                            <div className="space-y-6">

                                <div className="space-y-2">
                                    <h3 className="font-editorial text-2xl md:text-3xl text-stone-900 font-normal">
                                        {pg.title}
                                    </h3>
                                    <p className="text-xs text-stone-900 font-light font-editorial min-h-9">
                                        {pg.subtitle}
                                    </p>
                                </div>

                                <div className="pt-2 border-t border-stone-100 flex items-baseline space-x-2">
                                    <span className="font-editorial text-3xl md:text-4xl font-semibold text-stone-900">
                                        {pg.price}
                                    </span>
                                    <span className="text-xs text-stone-400 font-light font-sans">
                                        {pg.rate}
                                    </span>
                                </div>

                                    <ul className="space-y-3 5 pt-4">
                                        {pg.features.map((features, idx) => (
                                            <li key={idx} className="flex items-start space-x-3 text-xs text-stone-600 font-light leading-relaxed">
                                                <span className="mt-0 5 shrink-0 text-[#c49a6c]">
                                                    <Check size={14} strokeWidth={2.5} />
                                                </span>
                                                <span>{features}</span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>

                                {/* CTA BUTTON */}
                                <div className="pt-6">
                                    <a 
                                    href="#contact" 
                                    className={`block w-full py-3.5 text-center text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${pg.buttonStyle}`}
                                    >
                                        INQUIRE AVAILABILITY
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
        </section>
    )
}