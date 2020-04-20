import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const createSsrApolloClient = ({ initialState, uri }) => {
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    link: new HttpLink({ uri }),
  });
};
