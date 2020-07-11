import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import ProjectFilters from '../components/projects/ProjectFilters'
import ProjectList from '../components/projects/ProjectList'
import ProjectDetails from '../components/projects/ProjectDetails'
import { fetchStacks } from "../actions/fetchStacks";
import { fetchProjects } from "../actions/fetchProjects";
import { addFilter, removeFilter } from '../actions/filterProjects';
// import { filterProjects } from "../actions/filterProjects";

class ProjectsContainer extends Component {
  componentDidMount() {
    this.props.fetchStacks()
    this.props.fetchProjects()
  }

  render() {
    const { filteredProjects, stacks, selectedStackIds, loading, addFilter, removeFilter, match } = this.props
    return (
      <div id='projects' className='component'>
        {
          loading ?
            <h2>Loading...</h2>
            :
            < >
              <Route path='/projects/:projectId' render={routerProps => <ProjectDetails {...routerProps} projects={filteredProjects} />} />
              <Route exact path='/projects' render={routerProps =>
                <div id='portfolio'>
                  <h2>PORTFOLIO</h2>
                  <h5>My Latest Projects</h5>
                  <ProjectFilters stacks={stacks} selectedStackIds={selectedStackIds} addFilter={addFilter} removeFilter={removeFilter} />
                  <ProjectList filteredProjects={filteredProjects} match={match} />
                </div>
              } />
              {/* add `match` to the arguments so we can access the path information in `routerProps` that is passed from App.js */}
              {/* replace `component` prop with the `render` prop so we can pass the route information to the `ProjectDetails` component*/}
            </ >
        }
      </div >
    )
  }
}

//passing in the state from the Redux store
// so we can acccess values in our stores as props
const mapStateToProps = state => {
  return {
    stacks: state.projects.stacks,
    filteredProjects: state.projects.filteredProjects,
    loading: state.projects.loading
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