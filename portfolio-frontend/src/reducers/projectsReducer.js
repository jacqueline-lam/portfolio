// when action is dispatched to reducer,
// reducer is automatically passed previous state as 1st arg
// Everytime we update sth in our store, this reducer will be returning the updated state
const projectsReducer = (state = {
  projects: [],
  stacks: [],
  selectedStackIds: [],
  filteredProjects: [],
  comments: [],
  loading: false,
}, action) => {
  let stackIds = state.selectedStackIds
  let filteredProjects = []

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
      return {
        ...state,
        projects: action.projects,
        filteredProjects: action.projects,
        loading: false
      }

    case 'ADD_FILTER':
      filteredProjects = state.filteredProjects.filter(proj => {
        return proj.stacks.some(stack => stack.id.toString() === action.stackId)
      })

      stackIds.push(action.stackId)
      // Set store unique stackIds
      stackIds = [...new Set(stackIds)]

      console.log('action.stackId', typeof action.stackId, action.stackId)
      console.log('stackIds', typeof stackIds, stackIds)
      console.log('filteredProjects', typeof filteredProjects, filteredProjects)

      return {
        ...state,
        selectedStackIds: stackIds,
        filteredProjects: filteredProjects,
      }

    case 'REMOVE_FILTER':
      stackIds = state.selectedStackIds
      stackIds.splice(stackIds.indexOf(action.stackId), 1)

      filteredProjects = state.projects
      if (stackIds.length > 0) {
        filteredProjects = state.projects.filter(proj => {
          return proj.stacks.some(stack => stackIds.includes(stack.id.toString()))
        })
      }

      console.log('action.stackId', typeof action.stackId, action.stackId)
      console.log('stackIds', typeof stackIds, stackIds)

      return {
        ...state,
        filteredProjects: filteredProjects,
        selectedStackIds: stackIds,
      }

    case 'ADD_COMMENT':
      console.log(action.comment)
      // const project = state.projects.find(project => project.id === action.comment.project_id)
      // const updatedProject = project.comments.concat(action.comment)

      // projects = Object.assign({}, state.projects)
      // projects.splice(state.projects.indexOf(project), 1, updatedProject)

      let index = state.filteredProjects.findIndex(project => project.id === action.comment.project_id);
      let project = state.filteredProjects[index];

      return {
        ...state,
        filteredProjects: [
          ...state.filteredProjects.slice(0, index),
          { ...project, comments: project.comments.concat(action.comment) },
          ...state.filteredProjects.slice(index + 1)
        ]
      }
    // return {
    //   ...state,
    //   filteredProjects: state.projects.splice(state.projects.indexOf(project), 1, updatedProject)
    // }

    default:
      return state;
  }
}


export default projectsReducer;
