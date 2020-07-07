import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CommentInput extends Component {
  state = {
    name: '',
    email: '',
    content: '',
  }
  // sets a property of projectId on the comment input
  // from the parent components id
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const comment = {
      ...this.state,
      projectId: this.props.projectId,
      date: new Date(),
    }
    console.log(comment)
    // Send State to our addComment action creator
    this.props.addComment(comment);
    // Update component state to return to default state
    // this.setState({
    //   name: '',
    //   email: '',
    //   content: '',
    // });
  }


  render() {
    return (
      <div>

        {/* // <form onSubmit={this.handleOnSubmit}>
        //   <label>Name</label>
        //   <input
        //     type="text"
        //     value={this.state.name}
        //     onChange={this.handleOnChange} />
        //   <label>Email</label>
        //   <input
        //     type="text"
        //     value={this.state.email}
        //     onChange={this.handleOnChange} />
        //   <label>Comment here</label>
        //   <input
        //     type="text"
        //     value={this.state.content}
        //     onChange={this.handleOnChange} />
        //   <input type="submit" />
        // </form> */}
        <Card>
          <Form role="form" className='clearfix' onSubmit={this.handleSubmit}>
            <h5>Leave a comment</h5>
            <Form.Row>
              <Col>
                <Form.Group controlId="formName">
                  {/* <Form.Label>Name</Form.Label> */}
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="formComment">
              {/* <Form.Label>Enter your comment</Form.Label> */}
              <Form.Control
                name="content"
                as="textarea"
                rows="3"
                placeholder="Enter your comment here..."
                // value={this.state.content}
                onChange={this.handleOnChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Form>
        </Card>

      </div>
    );
  }
};

export default CommentInput;
