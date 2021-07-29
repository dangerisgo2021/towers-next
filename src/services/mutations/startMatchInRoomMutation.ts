import { gql } from "@apollo/client";

export const startMatchInRoomMutation = gql`
  mutation startMatchInRoom($roomId: ID) {
    startMatch(roomId: $roomId) {
      id
    }
  }
`;
