import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  render() {
    const { comments, deleteComment, projectId } = this.props
    const projectComments = comments.filter(comment => comment.projectId === projectId)

    const commentList = projectComments.map((comment, index) => {
      return <Comment key={index} comment={comment} deleteComment={deleteComment} />
    })
    return (
      <ul>
        {commentList}
      </ul>
    );
  }
};

export default Comments;