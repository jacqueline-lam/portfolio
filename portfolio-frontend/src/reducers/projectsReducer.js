// when action is dispatched to reducer,
// reducer is automatically passed previous state as 1st arg
const projectsReducer = (state = { projects: [], comments: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_PROJECTS':
      return {
        ...state,
        projects: [...state.projects],
        loading: true
      }
    case 'ADD_PROJECTS':
      return {
        ...state,
        projects: action.projects,
        loading: false
      }
    default:
      return state;
  }
}

export default projectsReducer;
