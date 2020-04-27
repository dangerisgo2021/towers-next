import { playerClicked } from "../actions";
import { apolloClient } from "../../../../services/apollo";
import { addPlayerToRoom as addPlayerToRoomMutation } from "../../../../services/mutations/addPlayerToRoom";
import { getProfileId } from "../../auth/selectors/getProfileId";

export const addPlayerToRoom = (store) => (next) => (action) => {
  next(action);

  if (action.type === playerClicked.type) {
    const state = store.getState();
    const profileId = getProfileId(state);
    if (profileId && action.payload.roomId) {
      apolloClient.mutate({
        mutation: addPlayerToRoomMutation,
        variables: {
          roomId: action.payload.roomId,
          profileId,
        },
        refetchQueries: ['roomPageQuery']
      });
    }
  }
};
