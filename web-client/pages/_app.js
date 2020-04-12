import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-next-router";
import withRedux from "next-redux-wrapper";
import { compose } from "redux";
import { ApolloProvider } from "@apollo/react-hooks";

import { AppLayout } from "../src/App/Layout/Layout";
import { makeStore } from "../src/App/State/store";
import { withApollo } from "../src/apollo/withApollo";

import "antd/dist/antd.min.css";

function MyApp({ Component, pageProps, store, apolloClient }) {
  console.log({ apolloClient });
  return (
    <Provider store={store}>
      <ConnectedRouter>
        <ApolloProvider client={apolloClient}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ApolloProvider>
      </ConnectedRouter>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default compose(withApollo, withRedux(makeStore))(MyApp);
