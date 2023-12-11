import { useState } from 'react';

import { CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';

import { ReactComponent as Logo } from '../../images/logo.svg';

import NavButton from '../NavButton/NavButton';
// import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './Navigation.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => {
    setClick(false);
  };

  const navIcon = click ? (
    <TfiClose size={30} style={{ color: '#ffffff' }} />
  ) : (
    <CiMenuBurger size={30} style={{ color: '#ffffff' }} />
  );

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="navigation__logo-link">
          <img
            src="https://imgpile.com/images/GE5Gkw.jpg"
            alt="logo"
            className="navigation__logo"
          />
        </a>
        <div className="navigation__icon" onClick={handleClick}>
          {navIcon}
        </div>
        <ul className={click ? 'navigation__list active' : 'navigation__list'}>
          <NavButton text="Home" section="home" onClose={closeMenu} />
          <NavButton text="Expertise" section="expertise" onClose={closeMenu} />
          <NavButton text="Projects" section="projects" onClose={closeMenu} />
          <NavButton text="Contact" section="contact" onClose={closeMenu} />
        </ul>
        {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
};
export default Navbar;
