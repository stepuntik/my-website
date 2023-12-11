import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Show the button when scrolling down beyond the first 50% of the viewport
      setIsVisible(scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const arrowUpIconStyle = {
    fontSize: '24px',
    color: 'black',
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
