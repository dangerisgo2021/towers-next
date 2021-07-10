export const setShow = (showValue) => (state, action) => {
  console.log({ state, action });
  const { modal } = action.payload;

  if (!modal) return state;

  return {
    ...state,
    [modal]: {
      ...state.modal,
      show: showValue,
    },
  };
};
