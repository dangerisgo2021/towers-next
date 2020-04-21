import Router from "next/router";
import { openRoomsTableRowClicked } from "../actions";

export const navigateToRoom = () => (next) => (action) => {
  next(action);
  console.log("called")

  if (action.type === openRoomsTableRowClicked.type) {
    console.log("nav to room")
    Router.push(`/room/${action.payload.roomId}`);
  }
};
