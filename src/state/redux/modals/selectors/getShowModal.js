import get from "lodash.get";

export const getShowModal = (state) =>
  get(state, `modals.createRoomModal.show`);
