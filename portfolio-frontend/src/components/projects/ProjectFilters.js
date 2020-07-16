import React from 'react';
import FilterButton from './FilterButton';

const ProjectFilters = ({ stacks, selectedStackIds, addFilter, removeFilter }) => {
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
  return (
    <div id='filters-container'>
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
        {
          stacks.map(
            (stack) => <FilterButton
              key={stack.id}
              stack={stack}
              selectedStackIds={selectedStackIds}
              addFilter={addFilter}
              removeFilter={removeFilter}
            />
          )
        }
      </div>

    </div>
  );
}

export default ProjectFilters;