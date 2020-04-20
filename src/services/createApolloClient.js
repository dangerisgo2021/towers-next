import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";

export const createApolloClient = ({ initialState, uri }) => {
  const httpLink = new HttpLink({ uri });

  const wsLink = new WebSocketLink({
    uri: uri.replace("http", "ws"),
    options: {
      reconnect: true,
    },
  });
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    link,
  });
};
