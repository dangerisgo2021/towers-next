import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
  concat,
  ApolloLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";
import { getSessionId } from "state/redux/session/selectors/getSessionId";
import { getAccessToken } from "state/redux/auth/selectors/getAccessToken";

export const createBrowserClient = ({ initialState, uri }) => {
  const httpLink = new HttpLink({ uri });

  const contextMiddleware = new ApolloLink((operation, forward) => {
    const state = (window as any)?.__REDUX_STORE__?.getState();
    const session = getSessionId(state);
    const accessToken = getAccessToken(state);
    operation.setContext(({ headers = {} }) => {
      return {
        headers: {
          ...headers,
          authorization: accessToken,
          session: session?.id,
          client: session?.clientId,
        },
      };
    });

    return forward(operation);
  });

  const wsLink = new WebSocketLink({
    uri: uri.replace("http", "ws"),
    options: {
      reconnect: true,
    },
  });
  const splitLink = split(
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
    link: concat(contextMiddleware, splitLink),
    connectToDevTools: true,
  });
};
