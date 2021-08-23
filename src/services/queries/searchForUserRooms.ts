import { gql } from "@apollo/client";

export const searchForUserRooms = gql`
  query searchForUserRooms($userId: ID) {
    rooms(
      search: { started: true, mode: [CASUAL, RANKED], players: [$userId] }
    ) {
      nodeCount
      nodes {
        id
        mode
        name
        started
        players {
          profile {
            id
          }
        }
        victoryProgress {
          winner
        }
      }
    }
  }
`;
