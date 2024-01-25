import React from 'react';
//import {Footer} from 'flowbite-react';
import { Link } from 'react-router-dom';
import './Footer.css';
import gmail from '../../assets/SocialMediaFooter/logo_gmail.png';
import insta from '../../assets/SocialMediaFooter/logo_instagram.png';
import tiktok from '../../assets/SocialMediaFooter/logo_tiktok.png';
import twitter from '../../assets/SocialMediaFooter/logo_twitter_x.png';

const Footer = () => {
  return (
    <footer>
      <div className='footer-logo'>
        <img src='' alt='LOGO'/>
      </div>
      <div className='line'></div>
      <div className='footer'>

        <div className='footer-follow'>
          <h4>Contact Us: </h4>
          <div className='social-media'>
            <a href=''><img src={gmail} alt='Gmail' /></a>
            <a href=''><img src={insta} alt='Instagram' /></a>
            <a href=''><img src={tiktok} alt='TikTok' /></a>
            <a href=''><img src={twitter} alt='Twitter' /></a>
          </div>
        </div>
        <div className='footer-nav-link'>
          <ul>
            <li><Link>Inicio</Link></li>
            <li><Link>Juego</Link></li>
            <li><Link>Desarrollo</Link></li>
            <li><Link>Equipo</Link></li>
            <li><Link>Roadmap</Link></li>
          </ul>
        </div>
      </div>
      <div className='other'>
        <div className='footer-legal'>
          <ul><li><Link>Politica de Privacidad</Link></li></ul>
        </div>
        <div className='footer-copyright'>
          <p> @{new Date().getFullYear()} AndinosGames. All right reserved </p>
        </div>
        <div className='footer-faq'>
          <ul><li><Link>FAQ</Link></li></ul>
        </div>
      </div>
      
    </footer>
  )
}
export default Footer;
