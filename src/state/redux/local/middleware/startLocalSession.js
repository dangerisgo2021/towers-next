import { get } from "lodash";
import { localSessionStarted, startButtonClicked } from "../actions";
import { apolloClient } from "../../../../services/apollo";
import { createRoom } from "../../../../services/mutations/createRoom";
import { v4 as generateId } from "uuid";

export const startLocalSession = (store) => (next) => (action) => {
  next(action);

  if (action.type === startButtonClicked.type) {
    //create new room
    apolloClient
      .mutate({
        mutation: createRoom,
        variables: { name: generateId(), mode: "LOCAL" },
      })
      .then(({ data }) => {
        console.log({ data });
        const room = get(data, "createRoom");
        store.dispatch(localSessionStarted({ room }));
      });
    //set started to true
  }
};
