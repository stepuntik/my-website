import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './NavigationButton.css';

const NavigationButton = ({ text, section }) => {
  const scrollToSection = () => {
    // Scroll to a specific section by providing the correct element's ID
    scroll.scrollTo(section, {
      duration: 500, // Animation duration in milliseconds
      smooth: 'easeInOutQuart', // Easing function
    });
  };

  return (
    <Link
      to={section} // ID of the target section
      spy={true}
      smooth={true}
      offset={-70} // Adjust the offset if you have a fixed header
      duration={800}
    >
      <button onClick={scrollToSection} className="navigation__button">
        {text}
      </button>
    </Link>
  );
};

export default NavigationButton;
