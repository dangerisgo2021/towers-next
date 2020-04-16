import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-next-router";
import withRedux from "next-redux-wrapper";
import { compose } from "redux";
import { ApolloProvider } from "@apollo/client";

import { AppLayout } from "../src/App/Layout/Layout";
import { makeStore } from "../src/App/State/store";
import { withApollo } from "../src/apollo/withApollo";
import { Auth0Provider } from "../src/App/Auth/auth0/react-auth0-wrapper";
import { auth0Config } from "../src/App/Auth/auth0/auth0.config";

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
