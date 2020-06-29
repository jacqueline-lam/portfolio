// Action Creator creates an action object and then
// action obj will be dispatched to reducer ->
// then return new ver. of our state based on sent action

export const fetchProjects = () => {
  return (dispatch) => {
    // action dispatched before to fetch() request is called
    dispatch({ type: 'LOADING_PROJECTS' });
    // call fetch, dispatching returned data
    fetch('http://localhost:3000/api/v1/projects')
      // we won't do anything with this data until we get resp back
      // take resp and turn into JS object notation
      // .then() fn to parse JSON of response to this request
      .then(resp => resp.json())
      // execute asynchronous code, once resolved, we can use dispatch to update our store
      // grab the actual collection of project objects
      // call dispatch + send project JSON data to your store
      // action dispatched along with a payload of the projects JSON collection
      .then(respJSON => dispatch({ type: 'ADD_PROJECTS', projects: respJSON }));
  }
}