import React, { Component } from 'react'
import { connect } from 'react-redux';

import ProjectFilters from '../components/projects/ProjectFilters'
import ProjectList from '../components/projects/ProjectList'
import { fetchStacks } from "../actions/fetchStacks";
import { fetchProjects } from "../actions/fetchProjects";
import { addFilter, removeFilter } from '../actions/filterProjects';
// import { filterProjects } from "../actions/filterProjects";

class ProjectsContainer extends Component {
  componentDidMount() {
    console.log(this.props)
    fetchStacks()
    fetchProjects()
  }

  render() {
    const { fetchStacks, fetchProjects, projects, stacks, loading, addFilter, removeFilter } = this.props
    return (
      <div>
        {
          loading ?
            <h2>Loading...</h2>
            :
            < >
              <ProjectFilters stacks={stacks} addFilter={addFilter} removeFilter={removeFilter} />
              <ProjectList projects={projects} />
            </ >
        }
      </div>
    )
  }
}

//passing in the state from the Redux store
// so we can acccess values in our stores as props
const mapStateToProps = state => {
  return {
    projects: state.projects,
    stacks: state.stacks,
    loading: state.loading
  }
}

// gives us ability to dispatch new actions to our store directly from this component
const mapDispatchToProps = dispatch => {
  return {
    fetchStacks: () => dispatch(fetchStacks()),
    fetchProjects: () => dispatch(fetchProjects()),
    addFilter: stackId => dispatch(addFilter(stackId)),
    removeFilter: stackId => dispatch(removeFilter(stackId))
  }
}

// connect redux store to this component
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)