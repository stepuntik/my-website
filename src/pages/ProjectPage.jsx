import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Project from '../components/Project/Project';

import projects from '../data/projects.json';

const ProjectPage = () => {
  const { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((proj) => proj.title === title);

  return (
    <main>
      <Project projectData={project} />
    </main>
  );
};
export default ProjectPage;
