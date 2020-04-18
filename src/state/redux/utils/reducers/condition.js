export const condition = ({ condition, reducer }) => (state, action) => {
  if (condition && condition(action)) {
    return reducer(state, action);
  }
  return state;
};
