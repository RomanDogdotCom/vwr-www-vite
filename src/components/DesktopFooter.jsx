import "./DesktopFooter.css"; // Import the CSS file
import vwrLogo from '../assets/images/vwr_logo.png';

export default function DesktopFooter() {
  return (
        <div className="footer-wrapper">
    
        <div className="column-left">
          <div className="left-contents">
            <button>Button 1</button>
          </div>
        </div>
    
        <div className="column-center">
          <div className="center-contents">
          <img src={vwrLogo} alt="VWR Logo" />
          </div>
        </div>
    
        <div className="column-right">
          <div className="right-contents">
            <button>Button 3</button>
          </div>
        </div>
    
      </div>
  );
}
