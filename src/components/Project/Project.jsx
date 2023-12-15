import { PiProjectorScreenChart, PiGitBranchLight } from 'react-icons/pi';

import './Project.css';

const Project = ({
  projectData: { title, description, projectUrl, sourceUrl, images },
}) => {
  const content = images.map(({ imageUrl, imageDesc }, index) => {
    return (
      <div key={index} className="project__container">
        <img src={imageUrl} alt={title} className="project__image" />
        <p className="project__image-description">{imageDesc}</p>
      </div>
    );
  });

  return (
    <div className="project">
      <h1 className="project__title uppercase">{title}</h1>
      <h2 className="project__description">{description}</h2>
      <div className="project__content">{content}</div>
      <div className="project__button-container">
        <a
          className="project__button-url project-card__button uppercase"
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          Go to Project
          <PiProjectorScreenChart className="project__icon" />
        </a>
        <a
          className="project__button-url project-card__button uppercase"
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          Source Code
          <PiGitBranchLight className="project__icon" />
        </a>
      </div>
    </div>
  );
};
export default Project;
