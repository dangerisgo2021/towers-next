import { gql } from "@apollo/client";

export const removePlayerFromRoomMutation = gql`
  mutation removePlayerFromRoom($roomId: ID) {
    removePlayerFromRoom(input: { roomId: $roomId }) {
      id
    }
  }
`;
