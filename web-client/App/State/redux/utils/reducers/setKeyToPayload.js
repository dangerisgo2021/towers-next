export const setKeyToPayload = ({ key, value }) => (state, { payload }) => ({
  ...state,
  [key]: payload,
});
