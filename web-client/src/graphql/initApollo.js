import AWSAppSyncClient from "aws-appsync";
import fetch from 'isomorphic-unfetch'

import { InMemoryCache } from "apollo-cache-inmemory";

import appSyncConfig from "./aws-exports";

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

let apolloClient = null;

function create(initialState) {
  return new AWSAppSyncClient(
    {
      url: appSyncConfig.aws_appsync_graphqlEndpoint,
      region: appSyncConfig.aws_appsync_region,
      auth: {
        type: appSyncConfig.aws_appsync_authenticationType,
        apiKey: appSyncConfig.aws_appsync_apiKey,
      },
      disableOffline: true,
    },
    {
      cache: new InMemoryCache().restore(initialState || {}),
      ssrMode: true,
      connectToDevTools: true,
    }
  );
}

export const initApollo = (initialState) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};
