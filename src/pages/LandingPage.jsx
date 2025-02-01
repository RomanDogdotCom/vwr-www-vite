// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';
import { performBrowserChecks } from '../lib/browserChecks';

function LandingPage({ onComplete }) {
  useEffect(() => {
    performBrowserChecks();
    onComplete(); // Call immediately after checks
  }, [onComplete]);

  return null; // Return null: No HTML is rendered
}

export default LandingPage;