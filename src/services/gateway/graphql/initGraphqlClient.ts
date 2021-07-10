import fetch from "isomorphic-unfetch";
import { createBrowserClient } from "services/gateway/graphql/clients/createBrowserClient";
import { createServerClient } from "services/gateway/graphql//clients/createServerClient";

const isServer = !process.browser;
// Polyfill fetch() on the server (used by apollo-client)
if (isServer) {
  global.fetch = fetch;
}

export let apolloClient = null;
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;

export const initGraphqlClient = (initialState = {}) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer) {
    return createServerClient({ initialState, uri: GRAPHQL_URL });
  }

  // Reuse client on the client-side
  if (!isServer && !apolloClient) {
    apolloClient = createBrowserClient({ initialState, uri: GRAPHQL_URL });
  }
  return apolloClient;
};
