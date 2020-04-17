export const setKeyToPayload = ({ key }) => (state, { payload }) => ({
  ...state,
  [key]: payload,
});
