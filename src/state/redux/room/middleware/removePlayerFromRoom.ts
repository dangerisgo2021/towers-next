import { leaveRoomClicked } from "state/redux/room/actions";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { removePlayerFromRoom as removePlayerFromRoomMutation } from "services/mutations/removePlayerFromRoom";

export const removePlayerFromRoom = () => (next) => (action) => {
  next(action);

  if (action.type === leaveRoomClicked.type) {
    if (action.payload.roomId) {
      apolloClient.mutate({
        mutation: removePlayerFromRoomMutation,
        variables: {
          roomId: action.payload.roomId,
        },
        refetchQueries: ["roomPageQuery"],
      });
    }
  }
};
