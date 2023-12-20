import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/team">Equipo</Link>
          </li>
          {/*
          <li>
            <Link to="/development">Desarrollo</Link>
          </li>
          */}
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
