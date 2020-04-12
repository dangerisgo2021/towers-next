import React from "react";
import { initApollo } from "./initApollo";

export const withApollo = (App) => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";

    constructor(props) {
      super(props);
      this.apolloClient = initApollo();
    }

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};
