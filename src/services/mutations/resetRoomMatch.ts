import { gql } from "@apollo/client";

export const resetRoomMatch = gql`
  mutation resetMatch($roomId: ID) {
    resetMatch(roomId: $roomId) {
      id
    }
  }
`;
