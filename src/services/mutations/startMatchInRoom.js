import { gql } from "@apollo/client";

export const startMatchInRoom = gql`
  mutation startMatchInRoom($roomId: ID) {
    startMatchInRoom(roomId: $roomId) {
      id
    }
  }
`;
