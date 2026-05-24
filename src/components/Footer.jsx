import { FiGithub, FiMail, FiPhone, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-text">Annas</span>
              <span className="footer__logo-slash"> /</span>
              <span className="footer__logo-bracket">&gt;</span>
            </a>
            <p className="footer__tagline">
              Building intelligent solutions, one line of code at a time.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <nav className="footer__nav">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer__social">
            <h4 className="footer__links-title">Connect</h4>
            <div className="footer__social-links">
              <a href="https://github.com/AnnasSharif" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="mailto:sharifannas92@gmail.com" className="footer__social-link" aria-label="Email">
                <FiMail />
              </a>
              <a href="tel:+923176942548" className="footer__social-link" aria-label="Phone">
                <FiPhone />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Annas Sharif. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <FiHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
