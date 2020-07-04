import React from 'react';
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'
// import CommentsContainer from '../../containers/CommentsContainer'
// import Project from './Project'

const ProjectList = ({ filteredProjects }) => {
  const renderProjects = filteredProjects.map(project =>
    <ProjectCard key={project.id} project={project} />
  )

  return (
    < >
      {renderProjects}
    </ >
  )
}

export default ProjectList