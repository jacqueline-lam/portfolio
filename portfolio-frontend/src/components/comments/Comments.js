import React from 'react';
import Comment from './Comment';

const Comments = ({ projectComments }) => {
  const commentList = projectComments.map(comment => {
    return <Comment key={comment.id} comment={comment} />
  })

  return (
    <div className='comments'>
      <h4>Comments</h4>
      {projectComments ? commentList : <i>This project does not have any comments yet.</i>}
    </div>
  );
};

export default Comments;