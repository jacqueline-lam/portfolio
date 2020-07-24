// when action is dispatched to reducer,
// reducer is passed current state and dispatched action
// Everytime we update sth in our store, this reducer will return updated state
const projectsReducer = (state = {
  allProjects: [],
  stacks: [],
  selectedStackIds: [],
  filteredProjects: [],
  loading: false,
}, action) => {
  let stackIds;
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
        allProjects: [...state.allProjects],
        loading: true
      }

    case 'ADD_PROJECTS':
      return {
        ...state,
        allProjects: action.projects,
        filteredProjects: action.projects,
        loading: false
      }

    case 'ADD_FILTER':
      // Filter projects with the chosen stack
      filteredProjects = state.filteredProjects.filter(proj => {
        return proj.stacks.some(stack => stack.id.toString() === action.stackId)
      })

      // Concatnenating new values when stack filterbutton is pressed
      stackIds = state.selectedStackIds.concat(action.stackId)
      // Set store unique stackIds
      stackIds = [...new Set(stackIds)]

      console.log('action.stackId = ', typeof action.stackId, action.stackId)
      console.log('stackIds = ', typeof stackIds, stackIds)
      console.log('filteredProjects = ', typeof filteredProjects, filteredProjects)

      return {
        ...state,
        selectedStackIds: stackIds,
        filteredProjects: filteredProjects,
      }

    case 'REMOVE_FILTER':
      // Copy selectedStackIds array to allow removal w/o mutation
      stackIds = [...state.selectedStackIds]
      stackIds.splice(stackIds.indexOf(action.stackId), 1)

      filteredProjects = state.allProjects
      // Only include projects that have all the selected stacks
      if (stackIds.length > 0) {
        filteredProjects = state.allProjects.filter(proj => {
          const projectStacks = proj.stacks.map(proj => proj['id'].toString())
          const includesSelectedStacks = stackIds.every(selectedStack =>
            projectStacks.includes(selectedStack)
          )
          return includesSelectedStacks
        })
      }
      console.log('action.stackId', typeof action.stackId, action.stackId)
      console.log('stackIds', typeof stackIds, stackIds)
      console.log('filteredProjects', typeof filteredProjects, filteredProjects)

      return {
        ...state,
        filteredProjects: filteredProjects,
        selectedStackIds: stackIds,
      }

    case 'ADD_COMMENT':
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

    default:
      return state;
  }
}

export default projectsReducer;
