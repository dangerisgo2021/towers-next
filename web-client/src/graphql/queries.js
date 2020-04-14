/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      agentId
      username
      rating
      email
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: TableProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        agentId
        username
        rating
        email
      }
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      created
      updated
      player1
      player2
      boardId
    }
  }
`;
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: TableMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        created
        updated
        player1
        player2
        boardId
      }
      nextToken
    }
  }
`;
