import React, { Component } from 'react';

class Comment extends Component {

  render() {
    const { comment } = this.props

    return (
      <div>
        <h6>{comment.author}</h6>
        <i>{comment.created_at}</i>
        <p>{comment.content}</p>
        {/* <button onClick={() => deleteComment(comment.id)}> X </button> */}
      </div >
    );
  }

};

export default Comment;
