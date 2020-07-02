export const addFilter = stack => {
  return {
    type: 'ADD_FILTER',
    stack
  };
};

export const removeFilter = stack => {
  return {
    type: 'REMOVE_FILTER',
    stack
  };
};