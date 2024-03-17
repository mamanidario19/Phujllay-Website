import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaGooglePlusG, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer'>
      <hr className='line' />
      <div className='footer-logo'> <img src='' alt='LOGO' /> </div>

      <div className='footer-media'>
        <div className='footer-follow-media'>
          <div className='media'> <a href=''> <FaGooglePlusG /> </a> <span>Gmail</span> </div>
          <div className='media'> <a href=''> <FaInstagram /> </a> <span>Instagram</span> </div>
          <div className='media'> <a href=''> <FaTiktok /> </a> <span>TikTok</span> </div>
          <div className='media'> <a href=''> <FaFacebookF /> </a> <span>Facebook</span> </div>
          <div className='media'> <a href=''> <FaGithub /> </a> <span>GitHub</span> </div>
          <div className='media'> <a href=''> <FaLinkedinIn /> </a> <span>LinkedIn</span> </div>
        </div>
        <div className='footer-nav-link'>
          <ul>
            <li><Link to="/" className='footer-nav'>Inicio</Link></li>
            <li><Link to="/" className='footer-nav'>Juego</Link></li>
            <li><Link to="/development" className='footer-nav'>Desarrollo</Link></li>
            <li><Link to="/team" className='footer-nav'>Equipo</Link></li>
            <li><Link to="/roadmap" className='footer-nav'>Roadmap</Link></li>
          </ul>
        </div>
      </div>

      <hr className='line' />

      <div className='footer-other'>
        <div className='footer-other-links'>
          <ul>
            <li><div className='footer-other-link-item'> <Link>Politica de Privacidad</Link></div></li>
            <li><div className='footer-other-link-item'> <Link>FAQ</Link></div></li>
          </ul>
        </div>
        
        <div className='footer-other-creator'> <p> @{new Date().getFullYear()} AndinosGames. All right reserved </p> </div>
        
      </div>
    </footer>
  )
}

export default Footer;
