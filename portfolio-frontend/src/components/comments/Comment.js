import React, { Component } from 'react';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';

class Comment extends Component {

  render() {
    const { comment } = this.props

    return (

      <Card
        bg='light'
        style={{ width: '50%' }}

      >
        <Card.Header>
          {comment.author}
          <br />
          <i><Moment fromNow>{comment.created_at}</Moment></i>
        </Card.Header>
        <Card.Body>

          <Card.Text>{comment.content}</Card.Text>
          {/* <button onClick={() => deleteComment(comment.id)}> X </button> */}
        </Card.Body>
      </Card >
    );
  }

};

export default Comment;
