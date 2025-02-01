import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/www.loader.js",
    dataUrl: "build/www.data",
    frameworkUrl: "build/www.framework.js",
    codeUrl: "build/www.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}
export default App;