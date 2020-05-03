import { gql } from "@apollo/client";

export const roomPageQuery = gql`
  query roomPageQuery($roomId: ID) {
    __type(name: "MoveName") {
      enumValues {
        name
      }
    }
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
            id
            location {
              x
              y
            }
            isCastle
            maxTowerSize
            size
            towerPieces {
              type
              owner
              id
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
