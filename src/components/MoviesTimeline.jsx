import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './MoviesTimeline.css';

gsap.registerPlugin(ScrollTrigger);

const movies = [
  { id: 1, title: "The Sorcerer's Stone", year: "2001", highlight: "Harry discovers he's a wizard." },
  { id: 2, title: "The Chamber of Secrets", year: "2002", highlight: "The heir of Slytherin opens the Chamber." },
  { id: 3, title: "The Prisoner of Azkaban", year: "2004", highlight: "Sirius Black escapes Azkaban." },
  { id: 4, title: "The Goblet of Fire", year: "2005", highlight: "The Triwizard Tournament and Voldemort's return." },
  { id: 5, title: "The Order of the Phoenix", year: "2007", highlight: "Dumbledore's Army is formed." },
  { id: 6, title: "The Half-Blood Prince", year: "2009", highlight: "Voldemort's past is revealed." },
  { id: 7, title: "The Deathly Hallows – Part 1", year: "2010", highlight: "The hunt for Horcruxes begins." },
  { id: 8, title: "The Deathly Hallows – Part 2", year: "2011", highlight: "The Battle of Hogwarts." }
];

const MoviesTimeline = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.timeline-card');
    
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="timeline-section">
      <h2 className="magic-text section-title">The Magical Journey</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {movies.map((movie, index) => (
          <div key={movie.id} className={`timeline-card-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="movie-year">{movie.year}</span>
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-highlight">{movie.highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoviesTimeline;
