import { gql } from "@apollo/client";

export const applyMoveToMatchMutation = gql`
  mutation applyMoveToMatch(
    $roomId: ID
    $player: Int
    $cellId: ID
    $name: MoveName
  ) {
    applyMoveToMatch(
      input: { roomId: $roomId, player: $player, cellId: $cellId, name: $name }
    ) {
      id
    }
  }
`;
