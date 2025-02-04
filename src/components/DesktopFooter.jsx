import "./DesktopFooter.css"; // Import the CSS file

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
            <button>Button 2</button>
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
