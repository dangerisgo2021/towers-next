import React from "react";
import { initApollo } from "./apollo";

export const withApollo = (App) => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";
    private apolloClient;

    constructor(props) {
      super(props);
      this.apolloClient = initApollo();
    }

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};
