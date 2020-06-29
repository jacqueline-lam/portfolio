import React, { Component } from 'react';
// import CommentsContainer from '../../containers/CommentsContainer'

class Project extends Component {
  render() {
    const project = this.props.project
    return (
      <div>
        <h2>{project.name} </h2>
        <p>{project.description}</p>
        <i>{project.stacks.map(stack => stack.name + '--')}</i>
        {/* <CommentsContainer comments={project.comments} /> */}
      </div >
    )
  }
}

export default Project