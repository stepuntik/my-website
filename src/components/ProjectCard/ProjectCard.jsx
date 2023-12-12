import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import './ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, intro, imageUrl }) => {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <h4 className="project-card__intro">{intro}</h4>
        <div className="project-card__button-container">
          <Link to={`/projects/${title}`} className="project-card__button">
            View
            <KeyboardArrowRightIcon />
          </Link>
        </div>
      </div>
      <div className="project-card__image-container">
        <img className="project-card__image" src={imageUrl} alt={title} />
      </div>
    </div>
  );
};
export default ProjectCard;
