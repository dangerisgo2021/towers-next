import fetch from "isomorphic-unfetch";

import { createServerApolloClient } from "./createServerApolloClient";
import { createClientApolloClient } from "./createClientApolloClient";

const isServer = !process.browser;
// Polyfill fetch() on the server (used by apollo-client)
if (isServer) {
  global.fetch = fetch;
}

let apolloClient = null;

export const initApollo = (initialState) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer) {
    return createServerApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!isServer && !apolloClient) {
    apolloClient = createServerApolloClient(initialState);
  }

  return apolloClient;
};