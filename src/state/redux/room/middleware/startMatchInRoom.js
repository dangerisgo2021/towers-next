import { startButtonClicked } from "../actions";
import { apolloClient } from "../../../../services/apollo";
import { startMatchInRoom as startMatchInRoomMutation } from "../../../../services/mutations/startMatchInRoom";

export const startMatchInRoom = () => (next) => (action) => {
  next(action);

  if (action.type === startButtonClicked.type) {
    if (action.payload.roomId) {
      apolloClient.mutate({
        mutation: startMatchInRoomMutation,
        variables: {
          roomId: action.payload.roomId,
        },
        refetchQueries: ["roomPageQuery"],
      });
    }
  }
};
