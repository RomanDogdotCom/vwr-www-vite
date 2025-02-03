import React, { Fragment, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

// Debug utility
const debug = (...args) => {
    if (import.meta.env.VITE_DEBUG === "true") {
        console.log(...args);
    }
};


function UnityContainer({ onLoadingProgress }) {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/www.loader.js", // Correct path
    dataUrl: "build/www.data",       // Correct path
    frameworkUrl: "build/www.framework.js", // Correct path
    codeUrl: "build/www.wasm",       // Correct path
  });

  const loadingPercentage = Math.round(loadingProgression * 100);
  debug(loadingProgression); 
  debug(loadingPercentage); 
  debug(isLoaded); 

  useEffect(() => {
    onLoadingProgress(loadingProgression); // Call the callback
  }, [loadingProgression, onLoadingProgress]); // Add onLoadingProgress to the dependency array


  return <Fragment>
            <Unity unityProvider={unityProvider} />
        </Fragment>
}

export default UnityContainer;