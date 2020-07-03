import React from 'react';
import { Route } from 'react-router-dom';

const Project = ({ project }) => {
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');
  return (
    <div>
      <h1>{project.name}</h1>
      <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
      <i>{projectStacks}</i>
      <p>{project.description}</p>

      <button onClick={this.linkToSourceCode}>Source Code</button>
      <button onClick={this.linkToBlogPost}>Blog Post</button>
      {/* <h4>Project Demo</h4> */}
      {/* {project.demo_vid} */}
      {/* <CommentsContainer comments={project.comments} /> */}
    </div >
  )
}
export default Project