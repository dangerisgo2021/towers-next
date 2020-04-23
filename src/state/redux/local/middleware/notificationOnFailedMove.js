import { notification } from "antd";

import { move } from "../../match/actions";
import { getLocalMatch } from "../selectors/getLocalMatch";

export const notificationOnFailedMove = (store) => (next) => (action) => {
  const prevState = store.getState();

  next(action);

  if (action.type === move.type && action.payload.matchId === "LOCAL") {
    const state = store.getState();
    const previousLocalMatch = getLocalMatch(prevState);
    const currentLocalMatch = getLocalMatch(state);

    if (previousLocalMatch === currentLocalMatch)
      notification.open({
        message: "Invalid Move",
      });
  }
};
