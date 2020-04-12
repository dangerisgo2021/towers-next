import { createRouterMiddleware } from "connected-next-router";

import { debounceMiddleware } from "./utils/middleware/debounceMiddleware";
import { loggerMiddleware } from "./utils/middleware/loggerMiddleware";
import { throttleMiddleware } from "./utils/middleware/throttleMiddleware";
import { rootReducer } from "./rootReducer";
import { expandSliderOnMenuButtonClick } from "./sider/middleware/expandSliderOnMenuButtonClick";

const getReduxDevToolsEnhancer = () =>
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : [];

export default {
  middleware: [
    loggerMiddleware,
    throttleMiddleware,
    debounceMiddleware,
    createRouterMiddleware(),
    expandSliderOnMenuButtonClick,
  ],
  enhancers: [...getReduxDevToolsEnhancer()],
  rootReducer,
};
