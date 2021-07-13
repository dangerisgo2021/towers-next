import { gql } from "@apollo/client";

export const addPlayerToRoom = gql`
  mutation addPlayerToRoom($roomId: ID) {
    addPlayerToRoom(input: { roomId: $roomId }) {
      id
    }
  }
`;
