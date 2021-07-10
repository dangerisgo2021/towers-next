import { createRoomButtonClicked } from "state/redux/home/actions";
import { modalOpened } from "state/redux/modals/actions";
import { NAME } from "state/redux/createRoomModal/consts";

export const openCreateRoomModal = (store) => (next) => (action) => {
  next(action);

  if (action.type === createRoomButtonClicked.type) {
    store.dispatch(modalOpened({ modal: NAME }));
  }
};
