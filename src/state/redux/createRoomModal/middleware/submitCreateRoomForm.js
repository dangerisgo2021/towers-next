import { modalOk, modalClosed } from "../../modals/actions";
import { NAME } from "../consts";

export const submitCreateRoomForm = (store) => (next) => (action) => {
  next(action);
  console.log({ action });
  if (action.type === modalOk.type) {
    const { modal } = action.payload;
    console.log({ modal, NAME });
    if (modal === NAME) {
      store.dispatch(modalClosed({ modal: NAME }));
    }
  }
};
