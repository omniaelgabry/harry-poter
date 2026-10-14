import React from 'react';
import './TrailerSection.css';

const TrailerSection = () => {
  return (
    <section className="trailer-section">
      <video 
        className="trailer-video" 
        src="https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqblFzDgimoPfCY9KagJrVnOFAtp57DGERiLhH" 
        autoPlay 
        loop 
        muted 
        playsInline
        controls
      ></video>
    </section>
  );
};

export default TrailerSection;
