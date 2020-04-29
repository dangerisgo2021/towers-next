import { gql } from "@apollo/client";

export const startMatchInRoom = gql`
  mutation startMatchInRoom($roomId: ID) {
    startMatch(roomId: $roomId) {
      id
    }
  }
`;
