import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import SplashScreen from './pages/SplashScreen';
import DynamicPage from './pages/DynamicPage';
import StaticPage from './pages/StaticPage';

function App() {
  const [hasWebGL, setHasWebGL] = useState(null);
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    if (currentPage === 'splash') {
      const webGLSupported = localStorage.getItem('webGLSupported') === 'true';
      setHasWebGL(webGLSupported);

      setTimeout(() => {
        setCurrentPage(webGLSupported ? 'dynamic' : 'static');
      }, 5000); // Match animation duration (5 seconds)
    }
  }, [currentPage]);

  const handleLandingComplete = () => {
    setCurrentPage('splash');
  };

  if (currentPage === 'landing') {
    return <LandingPage onComplete={handleLandingComplete} />;
  } else if (currentPage === 'splash') {
    return <SplashScreen />;
  } else if (hasWebGL === true) {
    return <DynamicPage />;
  } else if (hasWebGL === false) {
    return <StaticPage />;
  } else {
    return <div>Checking browser capabilities...</div>;
  }
}

export default App;
