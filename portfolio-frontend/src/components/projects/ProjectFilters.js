import React, { Component } from 'react'

class ProjectFilters extends Component {
  state = {
    stacks: ''
  }

  handleOnClick = event => {
    this.setState({
      stacks: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.filterProjects(this.state.stacks);
    this.setState({
      stacks: '',
    });
  }

  render() {
    return (
      <div>Test</div>
      // <div>
      //   <form onSubmit={(event) => this.handleOnSubmit(event)}>
      //     <button
      //       type="text"
      //       value={this.state.bandName}
      //       onChange={(event) => this.handleOnChange(event)} />
      //     <input type="submit" />
      //   </form>
      // </div>

      // <div className="btn-group btn-group-toggle" data-toggle="buttons">
      //   <label className="btn btn-primary">
      //     <input type="checkbox" checked="" autocomplete="off" /> All
      //   </label>
      //   <label className="btn btn-primary">
      //     <input type="checkbox" autocomplete="off" value="Ruby" /> R
      //   </label>
      //   <label className="btn btn-primary active">
      //     <input type="checkbox" autocomplete="off" value="Rails" /> Rails
      //   </label>
      // </div>
    );
  }
}

// const ProjectFilters = ({ projects }) => {
//   const stacks = ["ActiveRecord", "BCrypt", "Bootstrap", "CRUD", "HTML & CSS", "Fetch API", "JavaScript", "MVC", "Nokogiri", "Omniauth", "PostgreSQL", "React.JS", "React Router", "Redux", "Redux Thunk", "RESTful API", "Ruby", "Ruby on Rails", "Sinatra", "SQLite3"]

//   // render buttons of stacks
//   // if a button is clicked, update chosenStacks array in state
//   console.log(projects.map(project.stacks))
//   // display projects with selected stacks

//   return (
//     <div>
//       {projects.map(project => <ProjectList key={project.id} project={project} />)}
//     </div>
//   );
// };

export default ProjectFilters;