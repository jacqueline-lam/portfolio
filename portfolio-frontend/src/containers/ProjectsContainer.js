import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import ProjectFilters from '../components/projects/ProjectFilters'
import ProjectList from '../components/projects/ProjectList'
import ProjectDetails from '../components/projects/ProjectDetails'
import { fetchStacks } from "../actions/fetchStacks";
import { fetchProjects } from "../actions/fetchProjects";
import { addFilter, removeFilter } from '../actions/filterProjects';

class ProjectsContainer extends Component {
  componentDidMount() {
    this.props.fetchStacks()
    this.props.fetchProjects()
  }

  render() {
    const { filteredProjects, stacks, selectedStackIds, loading, addFilter, removeFilter } = this.props
    return (
      <div id='projects-container' className='component'>
        {
          loading ?
            <h2>Loading...</h2>
            :
            < >
              {/* define parameter name in route path - show up in match.params */}
              {/* replace `component` prop w/ `render` prop so we can pass route info to `ProjectDetails` component*/}
              <Route path='/projects/:projectId' render={routerProps => <ProjectDetails {...routerProps} projects={filteredProjects} />} onUpdate={() => window.scrollTo(0, 0)} />
              <Route exact path='/projects' onUpdate={() => window.scrollTo(0, 0)} render={() =>
                <div id='portfolio'>
                  <h1>PORTFOLIO</h1>
                  <h3>My Latest Projects</h3>
                  <ProjectFilters stacks={stacks} selectedStackIds={selectedStackIds} addFilter={addFilter} removeFilter={removeFilter} />
                  <ProjectList filteredProjects={filteredProjects} />
                </div>
              } />
            </ >
        }
      </div >
    )
  }
}

// passing in the state from the Redux store
// so we can access values in our stores as props
const mapStateToProps = state => {
  return {
    stacks: state.projects.stacks,
    selectedStackIds: state.projects.selectedStackIds,
    filteredProjects: state.projects.filteredProjects,
    loading: state.projects.loading
  }
}

// gives us ability to dispatch new actions to our store directly from this component
const mapDispatchToProps = dispatch => {
  return {
    // wrap actions in a dispatch & anonymous fn to pass them as callback props
    // when called, dispstch fn will invoke reducer and result in new updated state
    fetchStacks: () => dispatch(fetchStacks()),
    fetchProjects: () => dispatch(fetchProjects()),
    addFilter: stackId => dispatch(addFilter(stackId)),
    removeFilter: stackId => dispatch(removeFilter(stackId))
  }
}

// connect redux store to this component
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)