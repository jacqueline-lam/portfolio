import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { addComment } from "../actions/addComment";
import { connect } from 'react-redux';

class CommentsContainer extends Component {
  render() {
    return (
      <div id='comments-container'>
        <CommentInput
          addComment={this.props.addComment}
          projectId={this.props.project.id}
        />
        {this.props.project.comments.length > 0 ?
          <Comments
            projectComments={this.props.project.comments}
          />
          :
          null
        }
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { comments: state.comments }
// }

// have access to dispatch fn inside addComment action to reducer
export default connect(null, { addComment })(CommentsContainer);