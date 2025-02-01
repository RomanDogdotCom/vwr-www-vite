import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityContainer() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/www.loader.js", // Correct path
    dataUrl: "build/www.data",       // Correct path
    frameworkUrl: "build/www.framework.js", // Correct path
    codeUrl: "build/www.wasm",       // Correct path
  });

  const loadingPercentage = Math.round(loadingProgression * 100);
  console.log(loadingProgression); 
  console.log(loadingPercentage); 
  console.log(isLoaded); 


  return (
   
      <Unity className="unity" unityProvider={unityProvider} />
  
  );
}

export default UnityContainer;