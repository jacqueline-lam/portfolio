import React from 'react';
import ProjectCard from './ProjectCard'
import { Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetails'
// import CommentsContainer from '../../containers/CommentsContainer'
// import Project from './Project'

const ProjectList = ({ filteredProjects, match }) => {
  const renderProjects = filteredProjects.map(project =>
    <div key={project.id}>
      <ProjectCard project={project} />
    </div>
  )

  return (
    < >
      {renderProjects}
    </ >
  )
}

export default ProjectList