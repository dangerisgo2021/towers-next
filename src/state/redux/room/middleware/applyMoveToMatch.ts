import { roomMatchMoveClicked } from "state/redux/room/actions";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { applyMoveToMatchMutation } from "services/mutations/applyMoveToMatchMutation";

export const applyMoveToMatch = () => (next) => (action) => {
  next(action);

  if (action.type === roomMatchMoveClicked.type) {
    const { name, selectedCell, roomId, currentPlayer } = action.payload;
    if (roomId) {
      console.log({ name, selectedCell, roomId });
      apolloClient.mutate({
        mutation: applyMoveToMatchMutation,
        variables: {
          roomId,
          name,
          player: currentPlayer,
          cellId: selectedCell.id,
        },
        refetchQueries: ["roomPageQuery"],
      });
    }
  }
};
