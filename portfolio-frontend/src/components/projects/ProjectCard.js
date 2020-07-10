import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');

  const fileName = project.image_url
  // special feature supported by webpack's compiler - allows you to get all matching modules starting from some base directory
  const images = require.context('../../images', true)
  let img = images('./' + fileName)

  return (
    <div>
      <Link key={project.id} to={`/projects/${project.id}`}>
        <h4>{project.name}</h4>
      </Link>
      {/* <h3><a href="#">{project.name}</a></h3> */}
      <img className='project-thumbnail' alt='project thumbnail' src={img} />
      <i>{projectStacks}</i>
      <hr />
      {/* <iframe src="https://drive.google.com/file/d/1WwtgDcBwrXa-tJ1pXbyBwBBkClDNdvst/preview" width="640" height="480"></iframe> */}
      {/* <CommentsContainer comments={project.comments} /> */}
    </div >
  );
};

export default ProjectCard;