import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import { CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';

import NavButton from '../NavButton/NavButton';

// import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './Navigation.css';

const Navigation = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current route is the home route ('/')
  const isHomeRoute = location.pathname === '/';

  const handleClick = () => setClick(!click);

  const closeMenu = () => {
    setClick(false);
  };

  const menuIcon = click ? (
    <TfiClose size={30} style={{ color: '#ffffff' }} />
  ) : (
    <CiMenuBurger size={30} style={{ color: '#ffffff' }} />
  );

  const goBack = () => {
    navigate(-1);
  };

  const navButtons = isHomeRoute ? (
    <>
      <div className="navigation__icon" onClick={handleClick}>
        {menuIcon}
      </div>
      <ul className={click ? 'navigation__list active' : 'navigation__list'}>
        <NavButton text="Home" section="home" onClose={closeMenu} />
        <NavButton text="Expertise" section="expertise" onClose={closeMenu} />
        <NavButton text="Projects" section="projects" onClose={closeMenu} />
        <NavButton text="Contact" section="contact" onClose={closeMenu} />
      </ul>
    </>
  ) : (
    <Link className="navigation__link go-back" onClick={goBack}>
      <KeyboardArrowLeftIcon style={{ fontSize: '2rem' }} />
      Go Back
    </Link>
  );

  return (
    <header className="header">
      <nav className="navigation">
        <a href="/" className="navigation__logo-link">
          <img
            src="https://imgpile.com/images/GE5Gkw.jpg"
            alt="logo"
            className="navigation__logo"
          />
        </a>
        {navButtons}
        {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
};
export default Navigation;
