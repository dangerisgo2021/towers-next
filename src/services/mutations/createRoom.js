import { gql } from "@apollo/client";

export const createRoom = gql`
  mutation createRoom($name: String, $mode: Mode) {
    createRoom(createRoomInput: { name: $name, mode: $mode }) {
      id
      name
      mode
      created
      updated
    }
  }
`;
