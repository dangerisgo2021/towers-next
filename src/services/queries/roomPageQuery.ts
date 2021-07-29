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
      currentPlayer
      victoryProgress {
        winner
        playerProgress {
          player
          castles
          crowns
        }
      }
      selectedCells {
        cellId
        player
      }
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
          userId
          name
        }
      }
    }
  }
`;
