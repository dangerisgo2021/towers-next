import { gql } from "@apollo/client";

export const addPlayerToRoom = gql`
  mutation addPlayerToRoom($profileId: ID, $roomId: ID) {
    addPlayerToRoom(
      addPlayerToRoomInput: { profileId: $profileId, roomId: $roomId }
    ) {
      id
    }
  }
`;
