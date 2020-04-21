export const localSessionStarted = (state, action) => {
  return {
    ...state,
    started: true,
    roomId: action.payload.room.id,
  };
};
