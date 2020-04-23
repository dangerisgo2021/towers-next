import fetch from "isomorphic-unfetch";
import { createApolloClient } from "./createApolloClient";
import { createSsrApolloClient } from "./createSsrApolloClient";

const isServer = !process.browser;
// Polyfill fetch() on the server (used by apollo-client)
if (isServer) {
  global.fetch = fetch;
}

export let apolloClient = null;
const GRAPHQL_URI = "http://localhost:5000/graphql"; // dev
//const GRAPHQL_URI = "https://towers-graphql-server.herokuapp.com/graphql"; // prod

export const initApollo = (initialState) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer) {
    return createSsrApolloClient({ initialState, uri: GRAPHQL_URI });
  }

  // Reuse client on the client-side
  if (!isServer && !apolloClient) {
    apolloClient = createApolloClient({ initialState, uri: GRAPHQL_URI });
  }

  return apolloClient;
};
