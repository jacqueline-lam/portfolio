import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');

  const fileName = project.image_url
  // special feature supported by webpack's compiler - allows you to get all matching modules starting from some base directory
  const images = require.context('../../images', true)
  let img = images('./' + fileName)

  return (
    <div id='project-list'>
      {/* render React Router LInks for each project */}
      <Link key={project.id} to={`/projects/${project.id}`}>
        <h4>{project.name}</h4>
      </Link>
      <img className='project-thumbnail' alt='project thumbnail' src={img} />
      <i>{projectStacks}</i>
      <hr />
    </div >
  );
};

export default ProjectCard;