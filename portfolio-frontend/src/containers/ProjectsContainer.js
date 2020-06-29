import React, { Component } from 'react'
import Projects from '../components/restaurants/Projects'
import { connect } from 'react-redux';

class ProjectsContainer extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

//passing in the state from the Redux store
const mapStateToProps = state => {
  return {
    projects: state.projects,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)