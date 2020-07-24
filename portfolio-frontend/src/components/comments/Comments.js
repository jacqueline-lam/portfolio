import React from 'react';
import Comment from './Comment';

const Comments = ({ projectComments }) => {
  const renderComments = projectComments.map(comment => {
    return <Comment key={comment.id} comment={comment} />
  })

  return (
    <div className='comments'>
      <h4>Comments</h4>
      {renderComments}
    </div>
  );
};

export default Comments;