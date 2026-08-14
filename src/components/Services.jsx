import React from "react";

export default function Services() {

    const offerings = [
        {
            id: 'wedding-liturgies',
            image: '/O1.jpg',
            title: 'Wedding Liturgies & Banquets',
            subtag: 'THE SOUNDTRACK OF YOUR FOREVER',
            description: 'From the delicate bridal march to the soaring harmonies of your first dance. We curate a customized acoustic songlist that mirrors the weight of your vows.',
        },
        {
            id: 'harana-serenades',
            image: '/O3.jpg',
            title: 'Traditional Harana Serenades',
            subtag: 'AN AUTHENTIC FILIPINO GIFT OF SONG',
            description: 'Keep the romance of traditional courtship alive. A surprise acoustic performance at the bridal suite, home proposals, or pre-wedding dinners.',
        },
        {
            id: 'corporate-soirees',
            image: '/O2.jpg',
            title: 'Corporate & Special Soirees',
            subtag: 'SOPHISTICATED AMBIENT VOCALS',
            description: 'Elegantly curated live background acoustic music. Ideal for luxury brand launches, private cocktail gatherings, and curated celebratory dinners.'
        },
    ];

    return (
        <section id="services" className="bg-[#f5f2ec]/ py-20 md:py-28 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* SECTION HEADER 2 COLUMNS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pb-12 broder-b border-stone-300/60 mb-14">

                    {/* LEFT HEADER: TAG & MAIN TITLE */}
                    <div className="md:col-span-8 space-y-2">
                        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
                            OUR OFFERING
                        </span>
                        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[52px] leading-tight text-stone-900 font-normal tracking-light">
                            Curated Musical Experiences
                        </h2>
                    </div>

                    {/* RIGHT HEADER: DESCRIPTION PARAGRAPH */}
                    <div className="md:col-span-4">
                        <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light font-sans md:text-right">
                            Each milestone is entirely unique. We tailor our instrumentation and sibling vocal arrangements to deliver unparalleled acoustic grace.
                        </p>
                    </div>

                </div>

                {/* OFFERINGS CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {offerings.map((card) => (
                        <div key={card.id} className="group space-y-5">

                            {/* CARD IMAGES CONTAINER */}
                            <div className="relative aspect-3/4 w-full overflow-hidden bg-stone-200 rounded-sm shadow-sm">
                                <img 
                                src={card.image} 
                                alt={card.title}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                                />
                            </div>

                            {/* CARD TEXT CONTENT */}
                            <div className="space-y-2">
                                <h3 className="font-editorial text-2xl text-stone-900 font-normal leading-snug group-hover:text-[#b89362] transition-colors">
                                    {card.title}
                                </h3>

                                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#c49a6c] uppercase">
                                    {card.subtag}
                                </span>

                                <p className="text-stone-600 text-xs leading-relaxed font-light pt-1">
                                    {card.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}