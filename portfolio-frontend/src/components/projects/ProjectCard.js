import React from 'react';
import ProjectDetails from './ProjectDetails'
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');

  return (
    <div>
      <Link key={project.id} to={`/projects/${project.id}`}>
        {project.name}
      </Link>
      {/* <h3><a href="#">{project.name}</a></h3> */}
      <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
      <i>{projectStacks}</i>
      <hr />
      {/* <iframe src="https://drive.google.com/file/d/1WwtgDcBwrXa-tJ1pXbyBwBBkClDNdvst/preview" width="640" height="480"></iframe> */}
      {/* <CommentsContainer comments={project.comments} /> */}
      <ProjectDetails project={project} />
    </div >
  );
};

export default ProjectCard;