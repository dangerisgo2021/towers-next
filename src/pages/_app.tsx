import React from "react";
import { compose } from "redux";
import { withRedux } from "state/makeStore";
import { Provider as AuthProvider } from "next-auth/client";
import { ViewPort } from "app/layout/components/ViewPort";
import { GatewayProvider } from "services/gateway/GatewayProvider";

import "antd/dist/antd.min.css";
import "styles/reset.css";

function AppProvider({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <GatewayProvider>
        <ViewPort>
          <Component {...pageProps} />
        </ViewPort>
      </GatewayProvider>
    </AuthProvider>
  );
}

export default compose(withRedux)(AppProvider);
