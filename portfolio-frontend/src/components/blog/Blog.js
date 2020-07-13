import React, { Component } from 'react';
import BlogPost from './BlogPost';
import icon from '../../images/blog-icon.png';

class Blog extends Component {
  render() {
    const { blogPosts } = this.props
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
};

export default Blog