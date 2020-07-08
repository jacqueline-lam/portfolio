import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { addComment } from "../actions/addComment";
import { connect } from 'react-redux';

class CommentsContainer extends Component {
  render() {
    return (
      <div>
        <CommentInput
          addComment={this.props.addComment}
          projectId={this.props.project.id}
        />
        <Comments
          projectComments={this.props.project.comments}
        />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { comments: state.comments }
// }

// have access to dispatch fn inside addComment action to reducer
export default connect(null, { addComment })(CommentsContainer);