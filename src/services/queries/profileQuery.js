import { gql } from "@apollo/client";

export const profileQuery = gql`
  query profileQuery($agentId: ID) {
    profile(agentId: $agentId) {
      id
      agentId
      created
      updated
      rating
    }
  }
`;
