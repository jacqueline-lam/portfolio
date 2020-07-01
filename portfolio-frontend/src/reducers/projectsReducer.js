// when action is dispatched to reducer,
// reducer is automatically passed previous state as 1st arg
// Everytime we update sth in our store, this reducer will be returning the updated state
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

    case 'FILTER_PROJECTS':
      return {
        ...state,
        projects: state.projects.filter(proj => proj.stacks.include(action.stack))
      }

    default:
      return state;
  }
}


export default projectsReducer;
