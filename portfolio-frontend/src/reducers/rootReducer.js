import { combineReducers } from "redux";
import projectsReducer from './projectsReducer'
import blogPostsReducer from './blogPostsReducer'

// initial state:
// state = {
//   projects: {
//     allProjects: [],
//     stacks: [],
//     selectedStackIds: [],
//     filteredProjects: [],
//     loading: false,
//   },
//   blog: {
//     blogPosts: [],
//     loadingBlog: false
//   }
// }


// delegate diff pieces of state to separate reducer functions
const rootReducer = combineReducers({
  projects: projectsReducer,
  blog: blogPostsReducer
});

export default rootReducer;