import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGit } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-bar ${showNav ? 'nav-bar--visible' : 'nav-bar--hidden'}`}>
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#home">Home</a>
        </li>
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#projects">Projects</a>
        </li>
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#contact">Contact Me</a>
        </li>
      </ul>

      <ul className="nav-bar__socials">
        <li className="nav-bar__social-item">
          <a className="nav-bar__link" href="https://www.facebook.com/Robbbnn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="xl" inverse/>
          </a>
        </li>
        <li className="nav-bar__social-item">
          <a className="nav-bar__link" href="https://github.com/robraymundo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="xl" inverse/>
          </a>
        </li>
        <li className="nav-bar__social-item">
          <a className="nav-bar__link" href="https://www.linkedin.com/in/robin-raymundo-bb6003271/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="xl" inverse/>
          </a>
        </li>
        <li className="nav-bar__social-item">
          <a className="nav-bar__link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="xl" inverse/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;