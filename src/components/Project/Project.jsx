import './Project.css';

const Project = ({
  projectData: { title, description, projectUrl, imageUrl },
}) => {
  return (
    <div className="project">
      <h1 className="project__title uppercase">{title}</h1>
      <h2 className="project__description">{description}</h2>
      <img src={imageUrl} alt={title} className="project__image" />
      <a
        className="project__url project-card__button uppercase"
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
      >
        Go to Project
      </a>
    </div>
  );
};
export default Project;
