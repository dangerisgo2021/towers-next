import { startButtonClicked } from "state/redux/room/actions";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { startMatchInRoomMutation } from "services/mutations/startMatchInRoomMutation";

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
