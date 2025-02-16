// src/pages/DynamicPage.jsx
import React, { useEffect, useState } from 'react';
import DesktopFooter from '../components/DesktopFooter';
import MobileMenu from '../components/MobileMenu';
import UnityContainer from '../components/UnityContainer';
import './DynamicPage.css'; 
import './Gauge.css';  
import '../components/UnityContainer.css';    
import jumperWebP from '../assets/images/jumper.webp';

function DynamicPage() { // Changed to a regular function component
  const isMobile = localStorage.getItem('deviceType') === 'mobile';
  const [isLoaded, setIsLoaded] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const [loadingProgression, setLoadingProgression] = useState(0); // State in DynamicPage
  const [rotationDegrees, setRotationDegrees] = useState(0);
  
  const handleLoadingProgress = (progress) => {
    setLoadingProgression(progress);

    if (progress < 0.9) {
      setRotationDegrees(progress * -364);
    } else if (progress >= 0.9 && progress < 1) {
      // Random jumpy rotation between -364 and -328
      const randomRotation = -364 + Math.random() * 36; // Generates between -364 and -328
      setRotationDegrees(randomRotation);
    } else if (progress === 1) {
      setRotationDegrees(-364); // Final position
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = jumperWebP;
    img.onload = () => setIsLoaded(true);

    setTimeout(() => {
      setOverlayVisible(false);
      document.querySelector('.dynamic-page')?.classList.add('content-visible'); // Optional chaining
    }, 100);
  }, []);

  return (
    <div className="dynamic-page">
      <div className={`fade-overlay ${overlayVisible ? '' : 'fade-out'}`}></div>
      <div className={`dynamic-content ${isMobile ? "full-height" : ""}`}>
      {loadingProgression < 1 && (
          <div className="loading-wrapper">
            <div className="loading-background"></div>
              <img src={jumperWebP} alt="Jumper Animation" className="webp-overlay" />
              <div className={`gauge-wrapper ${isMobile ? 'mobile' : ''}`}>
                <div className="gauge-container">
                  <div className="gauge-body"></div>
                  <div className="gauge-needle-container" style={{ transform: `rotate(${rotationDegrees}deg)` }}></div>
                </div>
              </div>
          </div>
      )}
        <UnityContainer onLoadingProgress={handleLoadingProgress}/>

        {isMobile && <MobileMenu />}
      </div>

      {!isMobile && (
        <div className="dynamic-footer">
          <DesktopFooter />
        </div>
      )}
    </div>
  );
}

export default DynamicPage; // Export the component