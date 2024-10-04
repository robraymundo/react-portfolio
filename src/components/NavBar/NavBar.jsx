import './NavBar.css';

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
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#">Contact Me</a>
        </li>
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#">Contact Me</a>
        </li>
        <li className="nav-bar__item">
          <a className="nav-bar__link" href="#">Contact Me</a>
        </li>
        
      </ul>
    </nav>
  );
}

export default NavBar;