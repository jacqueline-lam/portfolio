import React from 'react';
import Moment from 'react-moment';

const BlogPost = ({ blogPost }) => {
  return (
    <div>
      <img className='blog-post-thumbnail' alt='blog post thumbnail' src={blogPost.cover_image} />
      <h6>{blogPost.title}</h6>
      <i><Moment format='MMM DD, YYYY'>{blogPost.published_timestamp}</Moment></i>
      <p>{blogPost.description}</p>
      <button className="btn btn-danger btn-lg" onClick={() => window.open(blogPost.url, "_blank")}>READ POST</button>
    </div >
  );
};

export default BlogPost;