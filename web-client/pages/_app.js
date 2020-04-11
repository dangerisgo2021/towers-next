import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-next-router";
import withRedux from "next-redux-wrapper";

import { AppLayout } from "../App/Layout/Layout";
import { makeStore } from "../App/State/store";

import "antd/dist/antd.min.css";

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <ConnectedRouter>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ConnectedRouter>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default withRedux(makeStore)(MyApp);
