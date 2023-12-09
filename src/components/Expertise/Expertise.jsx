import NavigationButton from '../NavigationButton/NavigationButton';
import ToolContainer from '../ToolContainer/ToolContainer';

import './Expertise.css';

const Expertise = () => {
  return (
    <section className="expertise">
      <h2 className="expertise__title">My Expertise</h2>
      <ToolContainer />
      <NavigationButton section="projects" />
    </section>
  );
};
export default Expertise;
