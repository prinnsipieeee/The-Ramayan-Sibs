import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </div>
  );
}