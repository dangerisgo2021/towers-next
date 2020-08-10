import { rootReducer } from "./rootReducer";
import { middleware } from "./middleware";

const getReduxDevToolsEnhancer = () => {
  if (!process.browser) {
    return [];
  } else {
    //cannot reference window on server

    const reduxDevToolsEnhancer =
      // @ts-ignore __REDUX_DEVTOOLS_EXTENSION__ is injected by the extension
      typeof window?.__REDUX_DEVTOOLS_EXTENSION__ === "function" &&
      // @ts-ignore __REDUX_DEVTOOLS_EXTENSION__ is injected by the extension
      window?.__REDUX_DEVTOOLS_EXTENSION__();

    if (!reduxDevToolsEnhancer) {
      return [];
    } else {
      return [reduxDevToolsEnhancer];
    }
  }
};
    
export default {
  middleware,
  enhancers: [...getReduxDevToolsEnhancer()],
  rootReducer,
};
