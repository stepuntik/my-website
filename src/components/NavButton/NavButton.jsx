import { Link } from 'react-scroll';

import './NavButton.css';

const NavButton = ({ text, section, onClose }) => {
  return (
    <Link
      className="navigation__link"
      activeClass="navigation__link--active"
      to={section}
      spy
      smooth
      offset={-64}
      duration={700}
      onClick={onClose}
    >
      {text}
    </Link>
  );
};

export default NavButton;
