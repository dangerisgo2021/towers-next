import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-next-router";
import withRedux from "next-redux-wrapper";
import { compose } from "redux";
import { ApolloProvider } from "@apollo/client";

import { AppLayout } from "../src/app/Layout/Layout";
import { makeStore } from "../src/state/store";
import { withApollo } from "../src/services/withApollo";
import { Auth0Provider } from "../src/app/Auth/auth0/react-auth0-wrapper";
import { auth0Config } from "../src/app/Auth/auth0/auth0.config";

import "antd/dist/antd.min.css";

function MyApp({ Component, pageProps, store, apolloClient }) {
  return (
    <Provider store={store}>
      <Auth0Provider {...auth0Config}>
        <ConnectedRouter>
          <ApolloProvider client={apolloClient}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ApolloProvider>
        </ConnectedRouter>
      </Auth0Provider>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default compose(withApollo, withRedux(makeStore))(MyApp);
