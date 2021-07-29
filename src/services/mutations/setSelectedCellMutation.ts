import { gql } from "@apollo/client";

export const setSelectedCellMutation = gql`
  mutation setSelectedCell($roomId: ID, $player: Int, $cellId: ID, ) {
    setSelectedCell(input: { roomId: $roomId, player: $player, cellId: $cellId }) {
      id
    }
  }
`;
