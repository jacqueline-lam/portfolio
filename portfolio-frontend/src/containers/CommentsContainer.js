import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { connect } from 'react-redux';

class CommentsContainer extends Component {
  render() {
    console.log('test')
    return (
      <div>
        <Comments />
        <CommentInput />
      </div>
    )
  }

}

export default CommentsContainer