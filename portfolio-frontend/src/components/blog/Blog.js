import React from 'react';
import BlogPost from './BlogPost';
import icon from '../../images/blog-icon.png';

const Blog = ({ blogPosts }) => {
  const blogPostList = blogPosts.map(blogPost => {
    return <BlogPost key={blogPost.id} blogPost={blogPost} />
  })

  return (
    <div className='component'>
      <div className='title-with-icon'>
        <img src={icon} alt='blog icon' />
        <h1>BLOG</h1>
      </div>
      {blogPostList}
    </div>
  );
}

export default Blog