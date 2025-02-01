// src/components/UnityContainer.jsx (Create a new component file)
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityContainer() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/www.loader.js", // Correct paths relative to the public directory
    dataUrl: "build/www.data",
    frameworkUrl: "build/www.framework.js",
    codeUrl: "build/www.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default UnityContainer;