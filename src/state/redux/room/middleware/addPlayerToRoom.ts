import { joinRoomClicked } from "state/redux/room/actions";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { addPlayerToRoom as addPlayerToRoomMutation } from "services/mutations/addPlayerToRoom";
import { getSessionUserId } from "state/redux/auth/selectors/getSessionUserId";

export const addPlayerToRoom = (store) => (next) => (action) => {
  next(action);

  if (action.type === joinRoomClicked.type) {
    const state = store.getState();
    const userId = getSessionUserId(state);

    if (userId && action.payload.roomId) {
      apolloClient.mutate({
        mutation: addPlayerToRoomMutation,
        variables: {
          roomId: action?.payload?.roomId,
          userId,
        },
        refetchQueries: ["roomPageQuery"],
      });
    }
  }
};
