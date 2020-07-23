import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetchBlogPosts';
import Blog from '../components/blog/Blog'

// Container component deal with managing blog state and class methods
class BlogPostsContainer extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts()
  }

  render() {
    return (
      <div className='component'>
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
  return {
    blogPosts: state.blog.blogPosts,
    loadingBlog: state.blog.loadingBlog
  }
}

// pass in objec containing k-v pairs for action creator `fetchBlogPosts`
export default connect(mapStateToProps, { fetchBlogPosts })(BlogPostsContainer)