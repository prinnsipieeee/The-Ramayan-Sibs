import React, { useState } from "react";
import { MapPin, Mail, CheckCircle2 } from 'lucide-react';
import confetti from "canvas-confetti";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        eventDate: '',
        eventType: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Confetti animation

        try {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: {y: 0.6},
                colors: ['#c49a6c', '#1c1917', '#b89362'],
            });
        } catch (err) {
            console.log ("Confetti Submitted");
        }
    };

    return (
        <section id="contact" className="bg-[#faf8f5] py-20 md:py-28 border-t border-stone-200/60 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: DIRECT CONTACT DETAILS */}
                    <div className="lg:col-span-5 space-y-6">

                        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#c49a6c] uppercase">
                            BEGIN CURATION
                        </span>

                        <h2 className="font-editorial text-4xl sm:text-5xl md:text-[52px] leading-tight text-stone-900 font-normal tracking-tight">
                            Inquire About Your Date
                        </h2>

                        <p className="text-stone-900 text-sm md:text-base leading-relaxed font-light">
                             As vocal quality is our highest standard, 
                             we limit our booking availability to ensure our voices remain pristine for your momentous occasion. 
                             Please submit your ceremony details below and we will contact you within 48 hours.
                        </p>

                        {/* LOCATION & EMAIL DETAILS */}
                        <div className="space-y-4 pt-4 border-t border-stone-200/80">
                            <div className="flex items-center space-x-3 text-xs text-stone-700 font-light">
                                <MapPin size={16} className="text-[#c49a6c] shrink-0" />
                                <span>Serving Antipolo, Manila, Tagaytay and bespoke destinations</span> 
                            </div>

                            <div className="flex items-center space-x-3 text-xs text-stone-700 font-light">
                                <Mail size={16} className="text-[#c49a6c] shrink-0" />
                                <a href="mailto:booking@theramayansibs.com" className="hover:text-[#b89362] transition-colors underline underline-offset-4">
                                    booking@theramayansibs.com
                                </a>
                            </div>
                        </div>
                        
                    </div>

                    {/* RIGHT: INQUIRY DETAILS FORM */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#f5f2ec]/80 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-stone-200/60 shadow-sm">

                            <h3 className="font-editorial text-2xl md:text-3xl text-stone-900 font-normal mb-8">
                                Inquiry Details
                            </h3>

                            {submitted ? (
                                <div className="py-12 text-center space-y-4 bg-white/80 p-8 rounded-sm border border-stone-200/80">

                                    <CheckCircle2 size={48} className="text-[#c49a6c] mx-auto" />
                                    <h4 className="font-editorial text-2xl text-stone-900">
                                        Inquiry Receive with Warmth
                                    </h4>
                                    <p className="text-xs text-stone-900 max-w-md mx-auto font-light leading-relaxed">
                                        Thank you, {formData.fullName || 'valued guest'}! The Ramayan Sibs team will review your date availability and respond to your email within 48 hours.
                                    </p>

                                    <button 
                                    onClick={() => setSubmitted(false)}
                                    className="inline-block mt-4 px-6 py-2.5 border border-stone-800 text-stone-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all"
                                    >
                                        SEND ANOTHER INQUIRY
                                    </button>
                                </div>    
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-bold tracking-[0.2em] text-stone-600 uppercase">
                                                YOUR FULL NAME *
                                            </label>
                                            <input 
                                            type="text" 
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="E.g. Maria Clara"
                        className="w-full px-4 py-3 bg-white text-stone-900 text-xs border border-stone-300/80 focus:border-stone-800 focus:outline-none transition-colors"
                                            />
                                        </div>

                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-bold tracking-[0.2em] text-stone-600 uppercase">
                                                    EMAIL ADDRESS *
                                                </label>
                                                <input 
                                                type="email" 
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="maria@clara.ph"
                                                className="w-full px-4 py-3 bg-white text-stone-900 text-xs border border-stone-300/80 focus:border-stone-800 focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-bold tracking-[0.2em] text-stone-600 uppercase">
                                                    TARGET EVENT DATE *
                                                </label>
                                                <input 
                                                type="date"
                                                name="eventDate"
                                                required
                                                maxLength={14}
                                                value={formData.eventDate}
                                                onChange={handleChange}
                                                placeholder="DD / MM / YYYY"
                                                className="w-full px-4 py-3 bg-white text-stone-900 text-xs border border-stone-300/80 focus:border-stone-800 focus:outline-none transition-colors"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-bold tracking-[0.2em] text-stone-600 uppercase">
                                                    EVENT TYPE *
                                                </label>
                                                <select 
                                                name="eventType"
                                                required 
                                                value={formData.eventType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white text-stone-900 text-xs border border-stone-300/80 focus:border-stone-800 focus:outline-none transition-colors"
                                                >
                                                    <option value="">Choose Experience</option>
                                                    <option value="Wedding Liturgy & Banquet">Wedding Liturgy &amp; Banquet</option>
                                                    <option value="Traditional Harana Serenade">Traditional Harana Serenade</option>
                                                    <option value="Corporate & Special Soirée">Corporate &amp; Special Soirée</option>
                                                    <option value="Proposal / Private Gathering">Proposal / Private Gathering</option>
                                                </select>
                                            </div>
                                        </div>

                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-bold tracking-[0.2em] text-stone-600 uppercase">
                                                SHARE YOUR STORY &amp; MUSIC REQUESTS
                                                </label>
                                                <textarea
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your theme, desired songs, or venue details..."
                                                className="w-full px-4 py-3 bg-white text-stone-900 text-xs border border-stone-300/80 focus:border-stone-800 focus:outline-none transition-colors resize-none"
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full py-4 bg-[#1c1917] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-800 transition-all shadow-sm"
                                            >
                                                SUBMIT BOOKING REQUEST
                                            </button>
                                </form>
                            )}

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}