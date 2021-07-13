import { gql } from "@apollo/client";

export const profileQuery = gql`
  query profileQuery($userId: ID) {
    profile(userId: $userId) {
      id
      userId
      created
      updated
      rating
    }
  }
`;
