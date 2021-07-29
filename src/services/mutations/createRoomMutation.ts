import { gql } from "@apollo/client";

export const createRoomMutation = gql`
  mutation createRoom($name: String, $mode: Mode) {
    createRoom(input: { name: $name, mode: $mode }) {
      id
      name
      mode
      created
      updated
    }
  }
`;
