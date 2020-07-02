export const addFilter = stackId => {
  return {
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