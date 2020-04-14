import AWSAppSyncClient from "aws-appsync";
import appSyncConfig from "../../graphql/aws-exports";
import { InMemoryCache } from "apollo-cache-inmemory";

export const createApolloClient = (initialState) => {
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
};
