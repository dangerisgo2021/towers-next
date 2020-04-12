import { createReduxStoreFromConfig } from "./redux/utils/factories/createReduxStoreFromConfig";
import config from "./redux/client.redux.config";
// const config = process.browser
//   ? require("./redux/client.redux.config").default
//   : require("./redux/server.redux.config").default;
// TODO: make only one redux config
export const makeStore = createReduxStoreFromConfig(config);
