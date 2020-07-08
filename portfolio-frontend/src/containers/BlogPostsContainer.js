import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBlogPosts } from "../actions/fetchBlogPosts";

class BlogPostsContainer extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts()
  }
  render() {
    return (
      <div>
        BlogPostsContainer
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blogPosts: state.blogPosts
  }
}

export default connect(mapStateToProps, { fetchBlogPosts })(BlogPostsContainer)