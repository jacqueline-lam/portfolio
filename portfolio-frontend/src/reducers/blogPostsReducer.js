// Reduce current state and action into updated state
// Reducer - Pure function because Redux compares old + new objects by memory location
// expects new object from reducer given any changes/ old obj if no change occurs
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