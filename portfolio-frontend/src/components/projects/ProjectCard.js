import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
      <i>{project.stacks.join(' | ')}</i>
      <hr />
      {/* <iframe src="https://drive.google.com/file/d/1WwtgDcBwrXa-tJ1pXbyBwBBkClDNdvst/preview" width="640" height="480"></iframe> */}
      {/* <CommentsContainer comments={project.comments} /> */}
    </div >
  );
};

export default ProjectCard;