import { gql } from "@apollo/client";

export const roomPageQuery = gql`
  query roomPageQuery($roomId: ID) {
    room(id: $roomId) {
      id
      name
      mode
      started
      match {
        id
        created
        started
        board {
          width
          height
          cells {
            location {
              x
              y
            }
            maxTowerSize
            size
            towerPieces {
              type
              owner
            }
          }
        }
      }
      players {
        profile {
          id
          agentId
          name
        }
      }
    }
  }
`;
