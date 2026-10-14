import React, { useEffect, useRef } from 'react';
import './CustomWandCursor.css';

const CustomWandCursor = () => {
  const cursorRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Hide default cursor
    document.body.classList.add('custom-cursor-active');

    const cursor = cursorRef.current;
    const canvas = canvasRef.current;
    if (!cursor || !canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Smooth trailing positions
    let cursorX = mouseX;
    let cursorY = mouseY;

    const particles = [];

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Add particle on move
      if (Math.random() > 0.3) {
        particles.push({
          x: mouseX,
          y: mouseY,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1 + 0.5,
          life: 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      // Smooth cursor follow
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      // Handle particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 2;

        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${p.life / 100})`;
          ctx.fill();
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-canvas"></canvas>
      <div ref={cursorRef} className="wand-cursor">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Simple wand representation using Lucide-style SVG */}
          <path d="M15 4l5 5-13 13-5-5 13-13z" stroke="var(--accent-color)" fill="var(--bg-secondary)"/>
          <line x1="13" y1="6" x2="18" y2="11" stroke="var(--accent-color)" />
        </svg>
      </div>
    </>
  );
};

export default CustomWandCursor;
