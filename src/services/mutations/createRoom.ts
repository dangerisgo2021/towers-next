import { gql } from "@apollo/client";

export const createRoom = gql`
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
