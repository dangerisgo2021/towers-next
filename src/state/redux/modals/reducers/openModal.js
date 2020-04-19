export const openModal = (state, action) => {
  const { modal } = action.payload;

  if (!modal) return state;

  return {
    ...state,
    [modal]: {
      ...state.modal,
      show: true,
    },
  };
};
