export const setKeyToValue = ({ key, value }) => (state) => ({
  ...state,
  [key]: value,
});
