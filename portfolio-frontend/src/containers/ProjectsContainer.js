import React, { Component } from 'react'
import ProjectFilters from '../components/projects/ProjectFilters'
import ProjectList from '../components/projects/ProjectList'
import { connect } from 'react-redux';
import { fetchProjects } from "../actions/fetchProjects";
// import { filterProjects } from "../actions/filterProjects";

class ProjectsContainer extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.fetchProjects()
  }

  render() {
    return (
      <div>
        {
          this.props.loading ?
            <h2>Loading...</h2>
            :
            < >
              <ProjectFilters filterProjects={this.props.filterProjects} />
              <ProjectList projects={this.props.projects} />
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
    loading: state.loading
  }
}

// gives us ability to dispatch new actions to our store directly from this component
const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    filterProjects: stack => dispatch({ type: "FILTER_PROJECTS", stack })
  }
}

// connect redux store to this component
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)