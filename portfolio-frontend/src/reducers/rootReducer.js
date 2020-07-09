import { combineReducers } from "redux";
import projectsReducer from './projectsReducer'
import blogPostsReducer from './blogPostsReducer'

const rootReducer = combineReducers({
  projects: projectsReducer,
  blog: blogPostsReducer
});

export default rootReducer;