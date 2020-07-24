import React from 'react';
import FilterButton from './FilterButton';

const ProjectFilters = ({ stacks, selectedStackIds, addFilter, removeFilter }) => {
  return (
    <div id='filters-container'>
      <p>Filter projects by stacks</p>
      <div className="btn-group-toggle button-wrapper" data-toggle="buttons" >
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