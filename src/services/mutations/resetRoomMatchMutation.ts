import { gql } from "@apollo/client";

export const resetRoomMatchMutation = gql`
  mutation resetMatch($roomId: ID) {
    resetMatch(roomId: $roomId) {
      id
    }
  }
`;
