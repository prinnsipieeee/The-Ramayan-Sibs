import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonial />
      </main>
    </div>
  );
}