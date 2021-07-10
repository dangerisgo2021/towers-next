import { gql } from "@apollo/client";

export const searchForOpenRooms = gql`
  query searchForOpenRooms {
    rooms(search: { started: false, mode: [CASUAL, RANKED] }) {
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
