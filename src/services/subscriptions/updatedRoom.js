import { gql } from "@apollo/client";

export const updatedRoom = gql`
  subscription updatedRoom($roomId: ID) {
    updatedRoom(roomId: $roomId)
  }
`;
