import React from "react";
import { initGraphqlClient } from "services/gateway/graphql/initGraphqlClient";

export const withGateway = (App) => {
    return class Apollo extends React.Component {
        static displayName = "withApollo(App)";
        private readonly graphqlClient = null;

        constructor(props) {
            super(props);
            this.graphqlClient = initGraphqlClient();
        }

        render() {
            return <App graphqlClient={this.graphqlClient} {...this.props} />;
        }
    };
};