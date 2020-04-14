/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile($input: CreateProfileInput!) {
    createProfile(input: $input) {
      id
      agentId
      username
      rating
      email
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
      agentId
      username
      rating
      email
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile($input: DeleteProfileInput!) {
    deleteProfile(input: $input) {
      id
      agentId
      username
      rating
      email
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch($input: CreateMatchInput!) {
    createMatch(input: $input) {
      id
      created
      updated
      player1
      player2
      boardId
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch($input: UpdateMatchInput!) {
    updateMatch(input: $input) {
      id
      created
      updated
      player1
      player2
      boardId
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch($input: DeleteMatchInput!) {
    deleteMatch(input: $input) {
      id
      created
      updated
      player1
      player2
      boardId
    }
  }
`;
