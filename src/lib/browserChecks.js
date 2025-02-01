import platform from "platform";

// Debug utility
const debug = (...args) => {
    if (import.meta.env.VITE_DEBUG === "true") {
        console.log(...args);
    }
};

// Check if WebGL is supported
export const checkWebGL = () => {
    try {
        const canvas = document.createElement("canvas");
        return (
            (!!window.WebGLRenderingContext && !!canvas.getContext("webgl")) ||
            (!!window.WebGL2RenderingContext && !!canvas.getContext("webgl2"))
        );
    } catch {
        return false;
    }
};

// Check if the device is mobile based on user-agent
export const isMobileDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
};

// Check if WebAssembly threads are supported
export const checkWasmThreads = () => {
    try {
        return (
            typeof WebAssembly === "object" &&
            typeof WebAssembly.validate === "function" &&
            typeof SharedArrayBuffer === "function"
        );
    } catch {
        return false;
    }
};

// Get detailed browser and OS information
export const getBrowserInfo = () => {
    const browserName = platform.name || "Unknown";
    const browserVersion = platform.version || "Unknown";
    const osName = platform.os?.family || "Unknown";
    const osVersion = platform.os?.version || "Unknown";
    const description = platform.description || "Unknown";

    return {
        browserName,
        browserVersion,
        osName,
        osVersion,
        description,
    };
};

// Centralized browser checks and localStorage updates
export const performBrowserChecks = () => {
    const webGLSupported = checkWebGL();
    const wasmThreadsSupported = checkWasmThreads();
    const isMobile = isMobileDevice();
    const browserInfo = getBrowserInfo();

    // Store results in localStorage (excluding viewport dimensions for now)
    localStorage.setItem("deviceType", isMobile ? "mobile" : "desktop");
    localStorage.setItem("webGLSupported", webGLSupported.toString());

    // Viewport dimensions logic (moved to the bottom)
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    localStorage.setItem("viewportWidth", viewportWidth.toString());
    localStorage.setItem("viewportHeight", viewportHeight.toString());

    // Debugging information (all at the bottom)
    debug("Code is querying the browser...");
    debug("WebGL Supported:", webGLSupported);
    debug("Wasm Threads Supported:", wasmThreadsSupported);
    debug("Is Mobile Device:", isMobile);
    debug("Browser Info:", browserInfo);
    debug("Viewport Width:", viewportWidth);
    debug("Viewport Height:", viewportHeight);
    debug("Browser Checks Completed!");
};

