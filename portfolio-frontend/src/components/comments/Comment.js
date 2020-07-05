import React, { Component } from 'react';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';

class Comment extends Component {

  render() {
    const { comment } = this.props

    return (
      <Card>
        <Card.Title>{comment.author}</Card.Title>
        <Card.Subtitle><Moment fromNow>{comment.created_at}</Moment></Card.Subtitle>
        <Card.Text>{comment.content}</Card.Text>
        {/* <button onClick={() => deleteComment(comment.id)}> X </button> */}
      </Card >
    );
  }

};

export default Comment;
