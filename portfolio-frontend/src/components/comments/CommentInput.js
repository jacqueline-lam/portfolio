import React, { Component } from 'react';
import Comments from './Comments';

class CommentInput extends Component {
  state = {
    name: '',
    email: '',
    date: '',
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
    event.preventDefault();
    const comment = {
      ...this.state, projectId: this.props.projectId
    }
    this.props.addComment(comment);
    // Update component state to return to default state
    this.setState({
      name: '',
      email: '',
      date: '',
      content: '',
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange} />
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleOnChange} />
          <label>Comment here</label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default CommentInput;
