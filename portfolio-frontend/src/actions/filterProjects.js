// return JS object describing how state should be modified w/ type & payload properties
export const addFilter = stackId => {
  return {
    // type property - descriptive of action dispatched
    type: 'ADD_FILTER',
    stackId
  };
};

export const removeFilter = stackId => {
  return {
    type: 'REMOVE_FILTER',
    stackId
  };
};