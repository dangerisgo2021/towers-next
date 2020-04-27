import { gql } from "@apollo/client";

export const roomById = gql`
  query roomById($id: ID) {
    room(id: $id) {
      id
      mode
      players
      name
      started
    }
  }
`;
