import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const socialMediaLinks = [
  {
    icon: faFacebook,
    link: "https://www.facebook.com/Robbbnn"
  },
  {
    icon: faGithub,
    link: "https://github.com/robraymundo"
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/robin-raymundo-bb6003271/"
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/"
  }
]

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    lastScrollY = window.scrollY;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-bar ${showNav ? 'nav-bar--visible' : 'nav-bar--hidden'}`}>
      <button className="nav-bar__hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="xl" inverse/>
      </button>

      <div className={`nav-bar__content ${isMenuOpen ? 'nav-bar__content--open' : ''}`}>
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <a className="nav-bar__link" href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li className="nav-bar__item">
            <a className="nav-bar__link" href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          </li>
          <li className="nav-bar__item">
            <a className="nav-bar__link" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Me</a>
          </li>
        </ul>

        <ul className="nav-bar__socials">
          {socialMediaLinks.map(({ icon, link }, index) => (
            <li className="nav-bar__social-item" key={index}>
              <a className="nav-bar__link" href={link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="xl" inverse/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;