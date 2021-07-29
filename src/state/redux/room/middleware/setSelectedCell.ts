import { playerSelectedCell } from "state/redux/room/actions";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { setSelectedCellMutation } from "services/mutations/setSelectedCellMutation";

export const setSelectedCell = () => (next) => (action) => {
  next(action);

  if (action.type === playerSelectedCell.type) {
    const { player, roomId, selectedCell } = action.payload;
    if (Number.isInteger(player) && selectedCell) {
      console.log({ player, selectedCell });
      apolloClient.mutate({
        mutation: setSelectedCellMutation,
        variables: {
          player,
          roomId,
          cellId: selectedCell.id,
        },
        refetchQueries: ["roomPageQuery"],
      });
    }
  }
};
