import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGit } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#">Home</a>
        </li>
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#">Projects</a>
        </li>
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#">Contact Me</a>
        </li>
      </ul>

      <ul className="nav-bar__socials">
        <li className="nav-bar__social-item">
          <a className="nav-bar__link" href="#">
            <FontAwesomeIcon icon={faFacebook} size="xl" inverse/>
          </a>
        </li>
        <li className="nav-bar__social-item">
          <a className="nav-bar__link" href="#">
            <FontAwesomeIcon icon={faGithub} size="xl" inverse/>
          </a>
        </li>
        <li className="nav-bar__social-item">
          <a className="nav-bar__link" href="#">
            <FontAwesomeIcon icon={faLinkedin} size="xl" inverse/>
          </a>
        </li>
        <li className="nav-bar__social-item">
          <a className="nav-bar__link" href="#">
            <FontAwesomeIcon icon={faInstagram} size="xl" inverse/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;