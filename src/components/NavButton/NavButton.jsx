import { Link } from 'react-scroll';

import './NavButton.css';

const NavButton = ({ text, section }) => {
  return (
    <Link
      className="navigation__link"
      to={section}
      spy
      smooth
      offset={-64}
      duration={700}
      activeClass="navigation__active"
    >
      {text}
    </Link>
  );
};

export default NavButton;
