import { get } from "lodash";

export const getShowModal = (state) =>
  get(state, `modals.createRoomModal.show`);
