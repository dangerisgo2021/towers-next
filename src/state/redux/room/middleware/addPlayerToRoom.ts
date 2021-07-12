import { joinRoomClicked } from "state/redux/room/actions";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { addPlayerToRoom as addPlayerToRoomMutation } from "services/mutations/addPlayerToRoom";
import { getProfileId } from "state/redux/auth/selectors/getProfileId";

export const addPlayerToRoom = (store) => (next) => (action) => {
  next(action);

  if (action.type === joinRoomClicked.type) {
    const state = store.getState();
    const profileId = getProfileId(state);
    if (profileId && action.payload.roomId) {
      apolloClient.mutate({
        mutation: addPlayerToRoomMutation,
        variables: {
          roomId: action.payload.roomId,
          profileId,
        },
        refetchQueries: ["roomPageQuery"],
      });
    }
  }
};
