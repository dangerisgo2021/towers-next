// @ts-ignore
import { createWrapper } from "next-redux-wrapper";
import { createReduxStoreFromConfig } from "state/redux/utils/factories/createReduxStoreFromConfig";
import { config } from "state/redux/client.redux.config";

const makeStore = (_context) => {
  const store = createReduxStoreFromConfig(config);

  if (process.browser) {
    if (!(window as any)?.__REDUX_STORE__) {
      (window as any).__REDUX_STORE__ = store;
    }
  }

  return store;
};

export const withRedux = createWrapper(makeStore).withRedux;
