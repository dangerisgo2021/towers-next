import authConfig from "../../graphql/aws-exports";
import appSyncConfig from "../graphql/aws-exports";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Auth, Hub } from "aws-amplify";
import { ApolloClient, ApolloLink } from "@apollo/client";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

export const createClientApolloClient = (initialState) => {
  // https://aws-amplify.github.io/docs/js/hub
  Hub.listen(/.*/, ({ channel, payload }) =>
    console.debug(`[hub::${channel}::${payload.event}]`, payload)
  );
  // https://aws-amplify.github.io/docs/js/authentication#manual-setup
  Auth.configure({
    region: authConfig.aws_cognito_region,
    userPoolId: authConfig.aws_user_pools_id,
    userPoolWebClientId: authConfig.aws_user_pools_web_client_id,

    // Cognito Hosted UI configuration
    oauth: {
      domain: process.env.REACT_APP_AUTH_DOMAIN,
      scope: ["email", "profile", "openid"],
      redirectSignIn: document.location.origin,
      redirectSignOut: document.location.origin,
      responseType: "code",
    },
  });

  const getAccessToken = async () =>
    Auth.currentSession().then((session) =>
      session.getAccessToken().getJwtToken()
    );

  const url = process.env.REACT_APP_APPSYNC_URL;
  const region = process.env.REACT_APP_APPSYNC_REGION;

  const auth = {
    type: "AMAZON_COGNITO_USER_POOLS",
    jwtToken: getAccessToken,
  };
  const link = ApolloLink.from([
    createAuthLink({ url, region, auth }),
    createSubscriptionHandshakeLink({ url, region, auth }),
  ]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache().restore(initialState || {}),
  });
};
