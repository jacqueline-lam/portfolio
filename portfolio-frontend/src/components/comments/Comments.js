import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  render() {
    const { projectComments } = this.props
    const commentList = projectComments.map(comment => {
      return <Comment key={comment.id} comment={comment} />
    })

    return (
      <div className='comments'>
        <h4>Comments</h4>
        {projectComments ? commentList : <i>This project does not have any comments yet.</i>}
      </div>
    );
  }
};

export default Comments;