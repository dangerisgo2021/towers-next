import { roomMatchMoveClicked } from "state/redux/room/actions";
import { apolloClient } from "services/apollo";
import { applyMoveToMatch as applyMoveToMatchMutation } from "services/mutations/applyMoveToMatch";

export const applyMoveToMatch = () => (next) => (action) => {
  next(action);
  console.log({ action, x: action.type === roomMatchMoveClicked.type });

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
