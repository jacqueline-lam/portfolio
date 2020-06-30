import React, { Component } from 'react';
// import CommentsContainer from '../../containers/CommentsContainer'
import Project from './Project'

class ProjectList extends Component {
  render() {
    const project = this.props.project
    return (
      <div>
        <h2>{project.name} </h2>
        <p>{project.description}</p>
        <i>{project.stacks.map(stack => stack.name + '--')}</i>
        <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
        <hr />
        {/* <iframe src="https://drive.google.com/file/d/1WwtgDcBwrXa-tJ1pXbyBwBBkClDNdvst/preview" width="640" height="480"></iframe> */}
        {/* <CommentsContainer comments={project.comments} /> */}
      </div >
    )
  }
}

export default ProjectList