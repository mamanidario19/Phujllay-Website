import React from 'react';
//import {Footer} from 'flowbite-react';
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
        <div className='footer-legal'>
          <a href=''>Terminos y Condiciones</a>
          <a href=''>Politica de Privacidad</a>
        </div>
        <div className='footer-follow'>
          <h4>Contact Us: </h4>
          <div className='social-media'>
            <a href=''><img src={gmail} alt='Gmail' /></a>
            <a href=''><img src={insta} alt='Instagram' /></a>
            <a href=''><img src={tiktok} alt='TikTok' /></a>
            <a href=''><img src={twitter} alt='Twitter' /></a>
          </div>
        </div>
        
        
      </div>
      <div className='footer-copyright'>
        <p>
          @{new Date().getFullYear()} AndinosGames. All right reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer;
