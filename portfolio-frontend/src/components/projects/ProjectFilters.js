import React, { Component } from 'react'

class ProjectFilters extends Component {
  STACKS = ["ActiveRecord", "BCrypt", "Bootstrap", "CRUD", "HTML & CSS", "Fetch API", "JavaScript", "MVC", "Nokogiri", "Omniauth", "PostgreSQL", "React.JS", "React Router", "Redux", "Redux Thunk", "RESTful API", "Ruby", "Ruby on Rails", "Sinatra", "SQLite3"]
  state = {
    stacks: []
  }

  handleOnClick = event => {
    let pressed = (event.target.getAttribute("aria-pressed") === "true");
    const stackClicked = event.target.value
    // console.log(pressed)
    // console.log(this.state.stacks)

    if (!pressed) {
      this.setState(prevState => ({
        stacks: [...prevState.stacks, stackClicked]
      }));
      event.target.setAttribute("aria-pressed", "true")
      event.target.classList.add('active')
    } else {
      this.setState(prevState => ({
        stacks: prevState.stacks.filter(stack => stack !== stackClicked),
      }));
      event.target.setAttribute("aria-pressed", "false")
      event.target.classList.remove('active')
    }

    // this.props.filterProjects(this.state.stacks);
    // console.log(pressed)
    // console.log(this.state.stacks)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.filterProjects(this.state.stacks);
    this.setState({
      stacks: '',
    });
  }

  renderStack = stack => {
    return (
      <label className="btn btn-outline-secondary" >
        <input type="checkbox" autocomplete="off" value={stack} onClick={this.handleOnClick} /> {stack}
      </label>
      // <button type="button" className="btn btn-outline-secondary btn-sm" aria-pressed='false' value={stack} onClick={this.handleOnClick}>
      //   {stack}
      // </button>
    )
  }

  render() {
    return (
      // <div>
      //   <form onSubmit={(event) => this.handleOnSubmit(event)}>
      //     <button
      //       type="text"
      //       value={this.state.bandName}
      //       onChange={(event) => this.handleOnChange(event)} />
      //     <input type="submit" />
      //   </form>
      // </div>

      <div className="btn-group-toggle" data-toggle="buttons" >
        <form onSubmit={this.handleOnSubmit}>
          <label className="btn btn-outline-secondary active">
            <input type="checkbox" checked="" aria-pressed="true" /> All
          </label>
          {/* <button type="button" className="btn btn-outline-secondary btn-sm active" aria-pressed="true" >
            All
          </button> */}
          {this.stacks.map(stack => this.renderStack(stack))}
        </form>
      </div >

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