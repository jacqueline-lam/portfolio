import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { connect } from 'react-redux';

class CommentsContainer extends Component {
  render() {
    console.log(this.props.project.comments)
    return (
      <div>
        <Comments
          projectComments={this.props.project.comments}
          projectId={this.props.project.id}
        />
        {/* <CommentInput
          addComment={this.props.addComment}
          projectId={this.props.project.id}
        /> */}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { comments: state.comments }
// }

// const mapDispatchToProps = dispatch => ({
//   addComments: comment => dispatch({ type: 'ADD_COMMENT', comment })
// })

export default CommentsContainer;
//  connect(null, mapDispatchToProps)(CommentsContainer);