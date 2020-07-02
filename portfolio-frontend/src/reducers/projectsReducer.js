// when action is dispatched to reducer,
// reducer is automatically passed previous state as 1st arg
// Everytime we update sth in our store, this reducer will be returning the updated state
const projectsReducer = (state = { projects: [], stacks: [], comments: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_STACKS':
      return {
        ...state,
        stacks: [...state.stacks],
        loading: true
      }

    case 'ADD_STACKS':
      return {
        ...state,
        stacks: action.stacks,
        loading: false
      }

    case 'LOADING_PROJECTS':
      return {
        ...state,
        projects: [...state.projects],
        loading: true
      }

    case 'ADD_PROJECTS':
      // const reformatProjects = projects => {
      //   return projects.map(proj => {
      //     return { ...proj, stacks: proj.stacks.map(stack => Object.values(stack)).flat() }
      //   })
      // }
      return {
        ...state,
        projects: action.projects,
        loading: false
      }

    case 'ADD_FILTER':
      debugger
      const filteredProjects = state.projects.filter(proj => {
        proj.stacks.some(stack => stack.id === action.stackId)
        // proj.stacks.some(s => action.stacks.indexOf(s) !== -1)
      })

      return {
        ...state,
        projects: filteredProjects(action.stackId)
      }
      action.stackId

    case 'REMOVE_FILTER':


    default:
      return state;
  }
}


export default projectsReducer;
