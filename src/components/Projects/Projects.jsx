import projectData from '../../data/projects.json';
import Project from '../Project/Project';

import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">My Work</h2>
      <h2 className="projects__description">
        Take a look at some of my projects
      </h2>
      {projectData.map(({ title, description, images, url }) => (
        <Project
          key={title}
          title={title}
          description={description}
          images={images}
          url={url}
        />
      ))}
    </section>
  );
};
export default Projects;
