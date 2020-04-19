import { rootReducer } from "./rootReducer";
import { middleware } from "./middleware";

// noinspection JSUnresolvedVariable
const reduxDevToolsEnhancer = () =>
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : [];

export default {
  middleware,
  enhancers: [...reduxDevToolsEnhancer()],
  rootReducer,
};
