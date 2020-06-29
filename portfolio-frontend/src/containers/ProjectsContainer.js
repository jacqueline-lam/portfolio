import React, { Component } from 'react'
import Projects from '../components/projects/Projects'
import { connect } from 'react-redux';
import { fetchProjects } from "../actions/fetchProjects";

class ProjectsContainer extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.fetchProjects()
  }

  render() {
    return (
      <div>
        {this.props.loading ? <h2>Loading...</h2> : <Projects projects={this.props.projects} />}
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