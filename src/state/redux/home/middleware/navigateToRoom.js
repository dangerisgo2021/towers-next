import Router from "next/router";
import { openRoomsTableRowClicked } from "../actions";

export const navigateToRoom = () => (next) => (action) => {
  next(action);

  if (action.type === openRoomsTableRowClicked.type) {
    Router.push(`/room/${openRoomsTableRowClicked.payload.roomId}`);
  }
};
