import { gql } from "@apollo/client";

export const roomPageQuery = gql`
  query roomPageQuery($roomId: ID) {
    room(id: $roomId) {
      id
      mode
      players {
        profile {
          id
          agentId
          name
        }
      }
      name
    }
  }
`;
