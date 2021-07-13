import { gql } from "@apollo/client";

export const removePlayerFromRoom = gql`
  mutation removePlayerFromRoom($roomId: ID) {
    removePlayerFromRoom(input: { roomId: $roomId }) {
      id
    }
  }
`;
