/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $id: ID
    $agentId: ID
    $username: String
    $rating: Int
    $email: String
  ) {
    onCreateProfile(
      id: $id
      agentId: $agentId
      username: $username
      rating: $rating
      email: $email
    ) {
      id
      agentId
      username
      rating
      email
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $id: ID
    $agentId: ID
    $username: String
    $rating: Int
    $email: String
  ) {
    onUpdateProfile(
      id: $id
      agentId: $agentId
      username: $username
      rating: $rating
      email: $email
    ) {
      id
      agentId
      username
      rating
      email
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $id: ID
    $agentId: ID
    $username: String
    $rating: Int
    $email: String
  ) {
    onDeleteProfile(
      id: $id
      agentId: $agentId
      username: $username
      rating: $rating
      email: $email
    ) {
      id
      agentId
      username
      rating
      email
    }
  }
`;
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch(
    $id: ID
    $created: Int
    $updated: Int
    $player1: ID
    $player2: ID
  ) {
    onCreateMatch(
      id: $id
      created: $created
      updated: $updated
      player1: $player1
      player2: $player2
    ) {
      id
      created
      updated
      player1
      player2
      boardId
    }
  }
`;
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch(
    $id: ID
    $created: Int
    $updated: Int
    $player1: ID
    $player2: ID
  ) {
    onUpdateMatch(
      id: $id
      created: $created
      updated: $updated
      player1: $player1
      player2: $player2
    ) {
      id
      created
      updated
      player1
      player2
      boardId
    }
  }
`;
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch(
    $id: ID
    $created: Int
    $updated: Int
    $player1: ID
    $player2: ID
  ) {
    onDeleteMatch(
      id: $id
      created: $created
      updated: $updated
      player1: $player1
      player2: $player2
    ) {
      id
      created
      updated
      player1
      player2
      boardId
    }
  }
`;
