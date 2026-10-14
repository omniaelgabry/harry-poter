import React, { useState, useEffect, useRef } from 'react';
import './MagicalIntro.css';

const MagicalIntro = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle system for golden sparkles
    const particles = [];
    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5 - 0.2, // slightly floating up
        life: Math.random() * 100,
        opacity: Math.random()
      };
    };

    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 0.5;
        
        if (p.life <= 0) {
          particles[i] = createParticle();
          particles[i].y = canvas.height + 10;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * (p.life / 100)})`;
        ctx.fill();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    // Auto complete after 9 seconds if not clicked
    const timer = setTimeout(() => {
      handleComplete();
    }, 9000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 1000); // match transition duration
  };

  return (
    <div className={`magical-intro ${!isVisible ? 'fade-out' : ''}`} onClick={handleComplete}>
      <video 
        className="intro-video" 
        src="https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqiHde5mwNc4obmAzslt9pGhfIK8DjuayFdeSR" 
        autoPlay 
        loop 
        muted 
        playsInline
      ></video>
      <canvas ref={canvasRef} className="intro-particles"></canvas>
      <div className="intro-content">
      </div>
    </div>
  );
};

export default MagicalIntro;
