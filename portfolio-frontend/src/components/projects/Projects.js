import React from 'react';
import ProjectList from './ProjectList'

const Projects = props => {
  return (
    <div>
      {props.projects.map(project => <ProjectList key={project.id} project={project} />)}
    </div>
  );
};

export default Projects;