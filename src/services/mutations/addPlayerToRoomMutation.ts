import { gql } from "@apollo/client";

export const addPlayerToRoomMutation = gql`
  mutation addPlayerToRoom($roomId: ID) {
    addPlayerToRoom(input: { roomId: $roomId }) {
      id
    }
  }
`;
