import { gql } from "@apollo/client";

export const searchForOpenRooms = gql`
  query searchForOpenRooms {
    rooms(search: { started: false }) {
      nodeCount
      nodes {
        id
        mode
        name
        started
      }
    }
  }
`;
