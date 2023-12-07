import { useState, useEffect } from 'react';

import { ReactComponent as Logo } from '../../images/logo.svg';
import NavigationButton from '../NavigationButton/NavigationButton';

import './Navigation.css';

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollThreshold = 500; // Adjust the scroll point as needed

      // Check if the scroll position is beyond the scroll threshold
      setIsFixed(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isFixed ? 'fixed' : ''}`}>
      <button className="navigation__logo-btn">
        <Logo alt="logo" className="navigation__logo" />
      </button>
      <nav className="navigation">
        <NavigationButton text="Home" section="home" />
        <NavigationButton text="Expertise" section="expertise" />
        <NavigationButton text="Projects" section="projects" />
        <NavigationButton text="Contact" section="contact" />
      </nav>
    </header>
  );
};
export default Navbar;
