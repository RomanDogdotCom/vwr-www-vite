import DesktopMenu from "./DesktopMenu";
import "./DesktopFooter.css"; // Import the CSS file

export default function DesktopFooter() {
  return (
    <div className="desktop-footer"> {/* Changed from dynamic-footer to desktop-footer */}
      <DesktopMenu />
    </div>
  );
}
