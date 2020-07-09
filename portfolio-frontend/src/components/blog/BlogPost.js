import React from 'react';
import Moment from 'react-moment';

const BlogPost = ({ blogPost }) => {
  return (
    <div>
      <img className='project-thumbnail' alt='project thumbnail' src={blogPost.cover_image} />
      <h6>{blogPost.title}</h6>
      <i><Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment></i>
      <p>{blogPost.description}</p>
    </div >
  );
};

export default BlogPost;