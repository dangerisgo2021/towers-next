import { gql } from "@apollo/client";

export const newRoom = gql`
  subscription newRooms {
  newRoom {
    id
    mode
    name
  }
}
`
