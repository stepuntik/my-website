// ScrollToTopButton.jsx
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to determine when to show/hide the button
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Show the button when scrolling down beyond the first 100% of the viewport
      setIsVisible(scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const arrowUpIconStyle = {
    fontSize: '24px',
    color: 'var(--primary-color)', // Using the color variable
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon style={arrowUpIconStyle} />
    </button>
  );
};

export default ScrollToTopButton;
