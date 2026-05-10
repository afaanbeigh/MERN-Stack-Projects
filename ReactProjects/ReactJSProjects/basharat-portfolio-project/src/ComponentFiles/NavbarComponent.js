import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSSFiles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">

      {/* Hamburger */}
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu */}
      <div className={`nav-menu ${open ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>About Me</NavLink>
        <NavLink to="/publications" onClick={closeMenu}>Publications</NavLink>
        <NavLink to="/courses" onClick={closeMenu}>Courses</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;