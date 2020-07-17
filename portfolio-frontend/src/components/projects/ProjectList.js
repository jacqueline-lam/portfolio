import React from 'react';
import ProjectCard from './ProjectCard'

const ProjectList = ({ filteredProjects }) => {
  // map thru an array & return array of JSX to dynamically create our ProjectCards components
  const renderProjects = filteredProjects.map(project =>
    <ProjectCard key={project.id} project={project} />
  )

  return (
    < >
      {(filteredProjects.length > 0) ?
        renderProjects
        :
        <i>There are no matching results.</i>
      }
    </ >
  )
}

export default ProjectList
