import { ReactComponent as Logo } from '../../images/logo.svg';

import NavButton from '../NavButton/NavButton';
// import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './Navigation.css';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="navigation__logo-link">
          <Logo alt="logo" className="navigation__logo" />
        </a>
        <ul className="navigation__list">
          <NavButton text="Home" section="home" />
          <NavButton text="Expertise" section="expertise" />
          <NavButton text="Projects" section="projects" />
          <NavButton text="Contact" section="contact" />
        </ul>
        {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
};
export default Navbar;
