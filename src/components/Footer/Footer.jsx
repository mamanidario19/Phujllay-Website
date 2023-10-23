import React from 'react';
import './Footer.css';
import gmail from '../../assets/logo_gmail.png';
import insta from '../../assets/logo_instagram.png';
import tiktok from '../../assets/logo_tiktok.png';
import twitter from '../../assets/logo_twitter_x.png';

const Footer = () => {
  return (
    <footer>
      <div className='footer-name'>
        <h3>Nombre del Equipo</h3>
      </div>
      <div className='footer-social-media'>
        <h4>Contact Us: </h4>
        <div className='social-media'>
          <a href='https://www.google.com/intl/es/gmail/about/'><img src={gmail} alt='Gmail'/></a>
          <a href='https://www.instagram.com/'><img src={insta} alt='Instagram'/></a>
          <a href='https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des'><img src={tiktok} alt='TikTok'/></a>
          <a href='https://twitter.com/?lang=es'><img src={twitter} alt='Twitter'/></a>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>
          @{new Date().getFullYear()} NameInc. All right reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer;
