import Router from "next/router";
import { openRoomsTableRowClicked } from "../actions";

export const navigateToRoom = () => (next) => (action) => {
  next(action);

  if (action.type === openRoomsTableRowClicked.type) {
    // noinspection JSIgnoredPromiseFromCall
    Router.push(`/room/[roomId]`, `/room/${action.payload.roomId}`);
  }
};
