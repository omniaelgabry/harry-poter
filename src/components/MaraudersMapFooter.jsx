import React, { useEffect, useRef } from 'react';
import './MaraudersMapFooter.css';

const MaraudersMapFooter = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Generate footprint animations
    const container = footerRef.current;
    if (!container) return;
    
    const footprintsContainer = container.querySelector('.footprints-container');
    let footprintCount = 0;
    
    const createFootprint = () => {
      if (footprintCount > 20) return; // limit
      
      const footprint = document.createElement('div');
      footprint.classList.add('footprint');
      
      // Random position along a curve
      const x = Math.random() * window.innerWidth * 0.8;
      const y = Math.random() * 100 + 20;
      
      footprint.style.left = `${x}px`;
      footprint.style.bottom = `${y}px`;
      // Alternating left and right foot
      footprint.style.transform = `rotate(${Math.random() * 60 - 30}deg) ${footprintCount % 2 === 0 ? 'scaleX(-1)' : ''}`;
      
      footprintsContainer.appendChild(footprint);
      
      setTimeout(() => {
        footprint.remove();
        footprintCount--;
      }, 4000);
      
      footprintCount++;
    };
    
    const interval = setInterval(createFootprint, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer ref={footerRef} className="marauders-footer">
      <div className="parchment-texture"></div>
      <div className="footprints-container"></div>
      
      <div className="footer-content">
        <h2 className="magic-text mischief-text">Mischief Managed</h2>
        <p className="copyright">Created by Omnia Elgabry</p>
      </div>
    </footer>
  );
};

export default MaraudersMapFooter;
