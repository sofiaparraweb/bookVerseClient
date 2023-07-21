import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Bookverse</h1>
        <h2>Contact</h2>
        <address>
          5534 Somewhere In. The World 22193-10212<br />
          <a className="footer__btn" href="mailto:info@bookverse.com">Email Us</a>
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

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Technology</h2>
          <ul className="nav__ul nav__ul--extra">
            <li><a href="#">Hardware Design</a></li>
            <li><a href="#">Software Design</a></li>
            <li><a href="#">Digital Signage</a></li>
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
