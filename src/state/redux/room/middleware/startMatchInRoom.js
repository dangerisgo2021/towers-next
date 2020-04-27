import { startButtonClicked } from "../actions";
import { apolloClient } from "../../../../services/apollo";
import { startMatchInRoom as startMatchInRoomMutation } from "../../../../services/mutations/startMatchInRoom";
import { getProfileId } from "../../auth/selectors/getProfileId";

export const startMatchInRoom = (store) => (next) => (action) => {
  next(action);

  if (action.type === startButtonClicked.type) {
    const state = store.getState();
    const profileId = getProfileId(state);
    if (profileId && action.payload.roomId) {
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
