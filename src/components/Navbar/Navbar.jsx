import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/placeholder_icon.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="project-logo">
          <img src={logo} alt="Icono del proyecto" />
          <span>Phujllay</span>
        </div>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerda de</Link>
          </li>
          <li>
            <Link to="/team">Equipo</Link>
          </li>
          <li>
            <Link to="/development">Desarrollo</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;