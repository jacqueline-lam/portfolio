import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetchBlogPosts';
import Blog from '../components/blog/Blog'

class BlogPostsContainer extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts()
    console.log(this.props.fetchBlogPosts)
  }

  render() {
    return (
      <div>
        {
          this.props.loadingBlog ?
            <h2>Loading...</h2>
            :
            < >
              <Blog blogPosts={this.props.blogPosts} />
            </>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {

  console.log(state)
  return {
    blogPosts: state.blog.blogPosts,
    loadingBlog: state.blog.loading

  }
}

export default connect(mapStateToProps, { fetchBlogPosts })(BlogPostsContainer)