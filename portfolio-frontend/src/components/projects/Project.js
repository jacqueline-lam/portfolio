import React from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <p>{project.description}</p>
      {/* <CommentsContainer comments={project.comments} /> */}
    </div >
  )
}
export default Project