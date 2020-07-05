import React, { Component } from 'react';

class Comment extends Component {

  render() {
    const { comment } = this.props

    return (
      <Card>
        <Card.Title>{comment.author}</Card.Title>
        <Card.Subtitle>{comment.created_at}</Card.Subtitle>
        <Card.Text>{comment.content}</Card.Text>
        {/* <button onClick={() => deleteComment(comment.id)}> X </button> */}
      </Card >
    );
  }

};

export default Comment;
