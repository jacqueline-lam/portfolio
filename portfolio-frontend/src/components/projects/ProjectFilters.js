import React, { Component } from 'react';
import FilterButton from './FilterButton';


class ProjectFilters extends Component {
  // state = {
  //   stack: ''
  // }

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   this.props.filterProjects(this.state.stacks);
  //   this.setState({
  //     stacks: '',
  //   });
  // }

  render() {
    const { stacks, addFilter, removeFilter } = this.props
    return (
      <div>
        <p>Filter projects by stacks</p>
        <div className="btn-group-toggle button-wrapper" data-toggle="buttons" >
          {/* <button
            id='0'
            type="button"
            className="btn btn-outline-primary btn-sm active"
            aria-pressed='true'
            value='all'
          >
            All
          </button > */}
          {stacks.map((stack, idx) => <FilterButton key={idx} stack={stack} addFilter={addFilter} removeFilter={removeFilter} />)}
        </div>

      </div>
    );
  }
}

export default ProjectFilters;