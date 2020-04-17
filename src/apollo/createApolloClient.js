import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const createApolloClient = (initialState) => {
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    link: new HttpLink({
      uri: "https://towers-268705.uc.r.appspot.com/graphql",
    }),
  });
};
