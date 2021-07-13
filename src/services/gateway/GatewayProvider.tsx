import dynamic from "next/dynamic";
import React from "react";

const ApolloProvider = dynamic(
  import("@apollo/client")
    .then(({ ApolloProvider }) => ApolloProvider)
    .then(async (ApolloProvider) => {
      const graphqlClient = await import(
        "services/gateway/graphql/initGraphqlClient"
      ).then(({ initGraphqlClient }) => initGraphqlClient());
      return ({ children }) => {
        return (
          <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>
        );
      };
    }),
  // @ts-ignore
  { loading: ({ children }) => <>{children}</> }
);

export const GatewayProvider = ({ children }) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};
