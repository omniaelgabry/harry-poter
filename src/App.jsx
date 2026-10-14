import React, { useState } from 'react';
import MagicalIntro from './components/MagicalIntro';
import CustomWandCursor from './components/CustomWandCursor';
import HeroSection from './components/HeroSection';
import TrailerSection from './components/TrailerSection';
import HorizontalGallery from './components/HorizontalGallery';
import MoviesTimeline from './components/MoviesTimeline';
import CastDirectory from './components/CastDirectory';
import MaraudersMapFooter from './components/MaraudersMapFooter';
import './App.css';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="hogwarts-app">
      {!introFinished && <MagicalIntro onComplete={() => setIntroFinished(true)} />}
      
      {introFinished && (
        <>
          <div className="site-logo-container">
            <img src="https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqNnB4l8XedDFtJQenCj36Xcw85KUaBsxM4ZEz" alt="Hogwarts Archive Logo" className="site-logo" />
          </div>
          <CustomWandCursor />
          
          <main>
            <HeroSection />
            <TrailerSection />
            <HorizontalGallery />
            <MoviesTimeline />
            <CastDirectory />
          </main>
          
          <MaraudersMapFooter />
        </>
      )}
    </div>
  );
}

export default App;
