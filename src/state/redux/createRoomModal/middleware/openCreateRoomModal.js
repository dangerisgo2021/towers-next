import { createRoomButtonClicked } from "../../home/actions";
import { modalOpened } from "../../modals/actions";
import { NAME } from "../consts";

export const openCreateRoomModal = (store) => (next) => (action) => {
  next(action);

  if (action.type === createRoomButtonClicked.type) {
    store.dispatch(modalOpened({ modal: NAME }));
  }
};
