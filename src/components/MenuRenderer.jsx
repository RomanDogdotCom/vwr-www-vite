import { useState, useEffect } from "preact/hooks";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function MenuRenderer() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const isMobile = localStorage.getItem("deviceType") === "mobile";

  useEffect(() => {
    console.log("MenuRenderer Mounted"); // Debug Log
    console.log("Initial Path:", currentPath);

    const updatePath = () => {
      console.log("Route Changed:", window.location.pathname);
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  console.log("Rendering Menu? Current Path:", currentPath);

  return currentPath === "/static" || currentPath === "/dynamic"
    ? isMobile ? <MobileMenu /> : <DesktopMenu />
    : null;
}
