import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CommentInput extends Component {
  state = {
    author: '',
    email: '',
    content: '',
  }

  // Fired everytime form changes
  handleOnChange = event => {
    // Abstracting `setState` - name attrs matching keys in state
    // new state values used to set value attrs of inputs
    // component re-renders the input w/ new updated value
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit = event => {
    // Prevent submit event to redirect browser to new URL
    event.preventDefault()
    // Sets property of projectId on comment input from parent components id
    const comment = {
      ...this.state,
      project_id: this.props.projectId,
    }
    // Send State to our addComment action creator
    this.props.addComment(comment);
    // Update component state to return to default state
    this.setState({
      author: '',
      email: '',
      content: '',
    });
  }

  render() {
    return (
      // Controlled form - form dervives its input values from state
      // explicitly set value of component using state + update value in resp to changes
      <div className='comment-form'>
        <Card>
          <Form role="form" className='clearfix' onSubmit={this.handleOnSubmit}>
            <h5>Leave a comment</h5>
            <Form.Row>
              <Col>
                <Form.Group controlId="formAuthor">
                  <Form.Control
                    name="author"
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    required
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={this.state.email}
                    required
                    onChange={this.handleOnChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="formContent">
              <Form.Control
                name="content"
                as="textarea"
                rows="3"
                placeholder="Enter your comment here..."
                value={this.state.content}
                required
                onChange={this.handleOnChange}
              />
            </Form.Group>
            <Button className="float-right" type="submit">
              Post
            </Button>
          </Form>
        </Card>

      </div>
    );
  }
};

export default CommentInput;
