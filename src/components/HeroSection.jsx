import React from 'react';
import './HeroSection.css';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1 className="magic-text hero-title">Hogwarts Archive</h1>
        <p className="hero-quote">"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light."</p>
        <div className="hero-scroll-indicator">
          <span>Scroll to Explore</span>
          <ChevronDown className="bounce-animation" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
