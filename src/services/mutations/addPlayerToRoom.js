import { gql } from "@apollo/client";

export const addPlayerToRoom = gql`
  mutation addPlayerToRoom($profileId: ID, $roomId: ID) {
    addPlayerToRoom(input: { profileId: $profileId, roomId: $roomId }) {
      id
    }
  }
`;
