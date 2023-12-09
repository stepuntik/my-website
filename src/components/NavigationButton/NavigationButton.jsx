import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll, Events, scrollSpy } from 'react-scroll';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './NavigationButton.css';

const NavigationButton = ({ text, section }) => {
  const scrollToSection = () => {
    // Scroll to a specific section by providing the correct element's ID
    scroll.scrollTo(section, {
      duration: 500, // Animation duration in milliseconds
      smooth: 'easeInOutQuart', // Easing function
    });
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Add event listeners for scrollSpy
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    // Configure scrollSpy
    scrollSpy.update();

    // Remove event listeners when the component unmounts
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Link
      to={section} // ID of the target section
      spy={true}
      smooth={true}
      offset={-64} // Adjust the offset if you have a fixed header
      duration={700}
      onSetActive={() => setIsActive(true)}
      onSetInactive={() => setIsActive(false)}
    >
      <button
        onClick={scrollToSection}
        className={`navigation__button ${isActive ? 'active' : ''}`}
      >
        {text ? (
          text
        ) : (
          <KeyboardArrowDownIcon
            className="arrow__icon"
            style={{ fontSize: '4rem' }}
          />
        )}
      </button>
    </Link>
  );
};

export default NavigationButton;
