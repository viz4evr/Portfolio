'use client';

import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <About />
      <Contact />
    </div>
  );
}