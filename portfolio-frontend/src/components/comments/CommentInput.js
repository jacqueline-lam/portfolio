import React, { Component } from 'react';
import Comments from './Comments';

class CommentInput extends Component {
  state = {
    name: '',
    email: '',
    date: '',
    content: '',
  }
  // sets a property of restaurantId on the comment input
  // from the parent components id
  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // this will be nested inside action's 'comment' key
    this.props.addComment({ content: this.state.content, restaurantId: this.props.restaurantId });
    this.setState({
      text: '',
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default CommentInput;
