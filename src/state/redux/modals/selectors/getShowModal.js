import get from "lodash.get";
//
// export const getShowModal = (modal) => (state) =>
//   get(state, `modals[${modal}].show`);
export const getShowModal = (state) =>
  get(state, `modals.createRoomModal.show`);
