const blogPostsReducer = (state = {
  blogPosts: [],
  loadingBlog: false
}, action) => {
  switch (action.type) {
    case 'LOADING_BLOG':
      return {
        ...state,
        blogPosts: [...state.blogPosts],
        loadingBlog: true
      }

    case 'ADD_BLOG':
      return {
        ...state,
        blogPosts: action.blog,
        loadingBlog: false
      }

    default:
      return state
  }

}
export default blogPostsReducer;