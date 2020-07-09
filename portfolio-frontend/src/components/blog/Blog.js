import React, { Component } from 'react';
import BlogPost from './BlogPost'

class Blog extends Component {
  render() {
    const { blogPosts } = this.props
    console.log(blogPosts)

    const blogPostList = blogPosts.map(blogPost => {
      return <BlogPost key={blogPost.id} blogPost={blogPost} />
    })

    return (
      <div>
        <h3>BLOG</h3>
        {blogPostList}
      </div>
    );
  }
};

export default Blog;