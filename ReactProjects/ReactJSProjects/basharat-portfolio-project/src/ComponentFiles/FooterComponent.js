import React from "react";
import "../CSSFiles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="footer-glass">
        <div className="footer-content">
          <div className="footer-left">
            &copy; {currentYear} Basharat Rashid. All Rights Reserved
          </div>

          <div className="footer-right">
            Designed & Developed by Afaan Beigh
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;