import { roomResetClicked } from "state/redux/room/actions";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { resetRoomMatch as resetRoomMatchMutation } from "services/mutations/resetRoomMatch";

export const resetRoomMatch = () => (next) => (action) => {
  next(action);

  if (action.type === roomResetClicked.type) {
    const { roomId } = action.payload;
    if (roomId) {
      apolloClient.mutate({
        mutation: resetRoomMatchMutation,
        variables: {
          roomId,
        },
        refetchQueries: ["roomPageQuery"],
      });
    }
  }
};
