import React from 'react';
import ProjectCard from './ProjectCard'
// import CommentsContainer from '../../containers/CommentsContainer'
// import Project from './Project'

const ProjectList = ({ filteredProjects }) => {
  return (
    <div>
      {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
    </div>
  )
}

export default ProjectList