import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const location = useLocation();

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <div className='button-container'>
          <button className='burger-menu' onClick={toggleNavLinks}>
            <GiHamburgerMenu />
          </button>
        </div>

        <ul className={showNavLinks ? "nav-links show" : "nav-links"}>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>Acerca de</Link></li>
          <li><Link to="/team" className={location.pathname === "/team" ? "active" : ""}>Equipo</Link></li>
          <li><Link to="/development" className={location.pathname === "/development" ? "active" : ""}>Desarrollo</Link></li>
          <li><Link to="/roadmap" className={location.pathname === "/roadmap" ? "active" : ""}>Roadmap</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
