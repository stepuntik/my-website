import { ReactComponent as Logo } from '../../images/logo.svg';
import NavigationButtoon from '../NavigationButton/NavigationButton';

import './Navigation.css';

const Navbar = () => {
  return (
    <header className="header">
      <Logo alt="logo" className="navigation__logo" />
      <nav className="navigation">
        {/* <a href="/" className="navigation__link">
          Home
        </a>
        <a href="/" className="navigation__link">
          Expertise
        </a>
        <a href="/" className="navigation__link">
          Projects
        </a>
  */}
        <a href="#contact" className="navigation__link">
          Contact
        </a>
        <NavigationButtoon text="Home" section="#home" />
        <NavigationButtoon text="Expertise" section="expertise" />
        <NavigationButtoon text="Projects" section="projects" />
        <NavigationButtoon text="Contact" section="contact" />
      </nav>
    </header>
  );
};
export default Navbar;
