import Logo from "../../assets/profile_picture.jpg";
import "./LandingSection.css";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="profile" className="header__image"/>
      <h2 className="header__name">Hello, Im Robin!</h2>
      <h1 className="header__title">A frontend developer <br/> specializing in react</h1>
    </header>
  )
}

export default Header;