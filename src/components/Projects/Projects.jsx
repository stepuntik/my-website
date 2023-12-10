import projectData from '../../data/projects.json';
import ProjectCard from '../ProjectCard/ProjectCard';

import './Projects.css';

const Projects = () => {
  console.log(projectData);

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">My Work</h2>
      <h3 className="projects__subtitle">Check out some of my projects</h3>
      {projectData.map(({ title, intro, imageUrl, projectUrl }) => (
        <ProjectCard
          key={title}
          title={title}
          intro={intro}
          imageUrl={imageUrl}
          projectUrl={projectUrl}
        />
      ))}
    </section>
  );
};
export default Projects;
