import React from 'react';
import './footer.css';
import LogoBranca from '../../assets/Logo-branca.svg'
import youtube from '../../icons/iconYoutube.svg'
import twitter from '../../icons/iconTwitter.svg'
import linkedin from '../../icons/iconLinkedin.svg'
import facebook from '../../icons/iconFacebook.svg'
import instagram from '../../icons/iconInstagram.svg'
import telegram from '../../icons/iconTelegram.svg' 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="logo" src={LogoBranca} alt="Logo" />

        <div className="redes-links">
          <p className="redes-links_p-redes">Acompanhe Nossas Redes</p>
          <div className="redes-links_img-redes">
            <a href=""><img src={youtube} alt="Youtube"/></a>
            <a href=""><img src={twitter} alt="Twitter"/></a>
            <a href=""><img src={linkedin} alt="LinkedIn"/></a>
            <a href=""><img src={facebook} alt="Facebook"/></a>
            <a href=""><img src={instagram} alt="Instagram"/></a>
            <a href=""><img src={telegram} alt="Telegram"/></a>
          </div>
        </div>
      </div>
      
      <p id="copyright">Todos os direitos reservados &copy; 2024</p>
      
    </footer>
  );
}

export default Footer;