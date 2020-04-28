import { gql } from "@apollo/client";

export const removePlayerFromRoom = gql`
  mutation removePlayerFromRoom($profileId: ID, $roomId: ID) {
    removePlayerFromRoom(input: { profileId: $profileId, roomId: $roomId }) {
      id
    }
  }
`;
