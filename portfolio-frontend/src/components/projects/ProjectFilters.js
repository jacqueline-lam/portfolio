import React, { Component } from 'react';
import { addFilter, removeFilter } from '../../actions/filterProjects';

class ProjectFilters extends Component {
  stacks = ["ActiveRecord", "BCrypt", "Bootstrap", "CRUD", "HTML & CSS", "Fetch API", "JavaScript", "MVC", "Nokogiri", "Omniauth", "PostgreSQL", "React.JS", "React Router", "Redux", "Redux Thunk", "RESTful API", "Ruby", "Ruby on Rails", "Sinatra", "SQLite3"]
  state = {
    stack: ''
  }

  handleOnClick = event => {
    let pressed = (event.target.getAttribute("aria-pressed") === "true");
    const stackClicked = event.target.value

    if (!pressed) {
      debugger
      addFilter(stack)

      // this.setState(prevState => ({
      //   stacks: [...prevState.stacks, stackClicked]
      // }));
      // this.setState({
      //   stack: stackClicked
      // });

      event.target.setAttribute("aria-pressed", "true")
      event.target.classList.add('active')
    } else {
      //   // this.setState(prevState => ({
      //   //   stacks: prevState.stacks.filter(stack => stack !== stackClicked),
      //   // }));
      //   this.setState({
      //     stack: ''
      //   })
      removeFilter(stack)
      event.target.setAttribute("aria-pressed", "false")
      event.target.classList.remove('active')
    }
    // this.props.filterProjects(this.state.stack);
    this.props.filterProjects(event.target.value)

  }

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   this.props.filterProjects(this.state.stacks);
  //   this.setState({
  //     stacks: '',
  //   });
  // }

  renderStackBtn = (stack, idx) => {
    return (
      // <label className="btn btn-outline-secondary" >
      //   <input type="checkbox" autocomplete="off" value={stack} aria-pressed="false" onClick={this.handleOnClick} /> {stack}
      // </label>
      <button key={idx} type="button" className="btn btn-outline-primary btn-sm" aria-pressed='false' value={stack} onClick={this.handleOnClick}>
        {stack}
      </button>
    )
  }

  render() {
    return (
      <div>
        <p>Filter projects by stacks</p>
        <div className="btn-group-toggle" data-toggle="buttons" >
          {/* <form onSubmit={this.handleOnSubmit}>
          <fieldset>
            <label className="btn btn-outline-secondary active">
              <input type="checkbox" checked="" aria-pressed="true" /> All
            </label> */}
          {/* <button type="button" id="allBtn" className="btn btn-outline-primary btn-sm active" aria-pressed="true" >
          All
        </button> */}
          {this.stacks.map((stack, idx) => this.renderStackBtn(stack, idx))}
          {/* <input type="submit" />
          </fieldset>
        </form> */}
        </div >
      </div>
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