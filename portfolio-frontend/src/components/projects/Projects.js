import React from 'react';
import ProjectList from './ProjectList'
import ProjectFilters from './ProjectFilters'

const Projects = props => {
  return (
    <div>
      <ProjectFilters projects={props.projects} />
      {props.projects.map(project => <ProjectList key={project.id} project={project} />)}
    </div>
  );
};

export default Projects;