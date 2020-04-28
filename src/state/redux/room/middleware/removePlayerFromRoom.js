import { leaveRoomClicked } from "../actions";
import { apolloClient } from "../../../../services/apollo";
import { removePlayerFromRoom as removePlayerFromRoomMutation } from "../../../../services/mutations/removePlayerFromRoom";
import { getProfileId } from "../../auth/selectors/getProfileId";

export const removePlayerFromRoom = (store) => (next) => (action) => {
  next(action);

  if (action.type === leaveRoomClicked.type) {
    const state = store.getState();
    const profileId = getProfileId(state);
    if (profileId && action.payload.roomId) {
      apolloClient.mutate({
        mutation: removePlayerFromRoomMutation,
        variables: {
          roomId: action.payload.roomId,
          profileId,
        },
        refetchQueries: ["roomPageQuery"],
      });
    }
  }
};
