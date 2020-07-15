import React, { Component } from 'react';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';

class Comment extends Component {

  render() {
    const { comment } = this.props

    return (
      <div className='comment-card'>
        <Card
          bg='light'
          // mb='3'
          // border='warning'
          style={{ width: '100%' }}

        >
          <Card.Header>
            <b>{comment.author}</b>
            <br />
            <i><Moment fromNow>{comment.created_at}</Moment></i>
          </Card.Header>
          <Card.Body>

            <Card.Text>{comment.content}</Card.Text>
            {/* <button onClick={() => deleteComment(comment.id)}> X </button> */}
          </Card.Body>
        </Card >
      </div>
    );
  }

};

export default Comment;
