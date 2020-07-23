import React from 'react';
import BlogPost from './BlogPost';
import icon from '../../images/blog-icon.png';

// Presentational component
// receive props from blogPostsContainer and display content
// update based on prop changes or if parent component re-renders
// obj destructuring used to extract out values from props
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