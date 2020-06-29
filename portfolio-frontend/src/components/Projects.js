import Project from './Project'

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map(project => <Project key={project.id} project={project} />)}
    </div>
  );
};

export default Projects;