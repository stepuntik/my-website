import projectData from '../../data/projects.json';

import ProjectCard from '../ProjectCard/ProjectCard';

import './ProjectList.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title uppercase">My Work</h2>
      <h3 className="projects__subtitle">Check out some of my projects</h3>
      {projectData.map(({ title, intro, images, projectUrl }) => (
        <ProjectCard
          key={title}
          title={title}
          intro={intro}
          imageUrl={images[0].imageUrl}
          projectUrl={projectUrl}
        />
      ))}
    </section>
  );
};
export default Projects;
