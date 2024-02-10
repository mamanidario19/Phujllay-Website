import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const location = useLocation();

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);

    document.body.classList.toggle("no-scroll");
  };

  return (
    <nav className={showNavLinks ? "navbar navbar-active" : "navbar"}>
      <div className="navbar-links">
        <div className={showNavLinks ? "button-container nav-active" : "button-container"}>
          <button className='burger-menu' onClick={toggleNavLinks}>
            <GiHamburgerMenu className={showNavLinks ? "show-icon-01" : "icon-01"} />
            <IoMdClose className={showNavLinks ? "show-icon-02" : "icon-02"} />
          </button>
        </div>

        <ul className={showNavLinks ? "nav-links show" : "nav-links"}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={toggleNavLinks}>Acerca de</Link>
          </li>
          <li>
            <Link to="/team" className={location.pathname === "/team" ? "active" : ""} onClick={toggleNavLinks}>Equipo</Link>
          </li>
          <li>
            <Link to="/development" className={location.pathname === "/development" ? "active" : ""} onClick={toggleNavLinks}>Desarrollo</Link>
          </li>
          <li>
            <Link to="/roadmap" className={location.pathname === "/roadmap" ? "active" : ""} onClick={toggleNavLinks}>Roadmap</Link>
          </li>
        </ul>
      </div>

      <span className={showNavLinks ? "space-cover-active" : "space-cover"} onClick={toggleNavLinks}></span>
    </nav>
  );
}

export default Navbar;
