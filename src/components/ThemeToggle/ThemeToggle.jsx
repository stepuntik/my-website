// ThemeToggle.js
import { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    // Retrieve the theme preference from localStorage, or default to light mode
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Update the theme in localStorage when the theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      <Tooltip
        title={isDarkMode ? 'Light Theme' : 'Dark Theme'}
        placement="left"
      >
        <IconButton onClick={toggleTheme} className="toggle-button">
          {isDarkMode ? <WbSunnyIcon /> : <Brightness3Icon />}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ThemeToggle;
