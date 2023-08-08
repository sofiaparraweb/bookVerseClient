import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Bookverse</h1>
        <h2>Contact</h2>
        <address> SOMEWHERE IN THE WORLD <br />
          <a className="footer__btn" href="mailto:bookverse@gmail.com">Email Us</a>
        </address>
      </div>

      <ul className="footer__nav">
       
        <li className="nav__item">
          <h2 className="nav__title">Social Media</h2>
          <ul className="nav__ul">
            <li><a href="https://www.instagram.com/amazonkindle/">Instagram</a></li>
            <li><a href="https://www.facebook.com/kindle">Facebook</a></li>
          </ul>
        </li>

        <li className="nav__item" >
          <h2 className="nav__title">Have questions?</h2>
          <ul className="nav__ul">
          <li> <Link to="/qa">Q&A</Link></li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Be part of the CLUB!</h2>
          <ul className="nav__ul">
          <li> <Link to="/suscription">Suscribe now</Link></li>
          </ul>
        </li>

      </ul>

      <div className="legal">
        <p>&copy; {new Date().getFullYear()} Bookverse. All rights reserved.</p>
        <div className="legal__links">
          <span>Made with <span className="heart">♥</span> from Argentina</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
