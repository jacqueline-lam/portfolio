import React from 'react';

const ProjectCard = ({ project }) => {
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');

  return (
    <div>
      <h3><a href="#">{project.name}</a></h3>
      <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
      <i>{projectStacks}</i>
      <hr />
      {/* <iframe src="https://drive.google.com/file/d/1WwtgDcBwrXa-tJ1pXbyBwBBkClDNdvst/preview" width="640" height="480"></iframe> */}
      {/* <CommentsContainer comments={project.comments} /> */}
    </div >
  );
};

export default ProjectCard;