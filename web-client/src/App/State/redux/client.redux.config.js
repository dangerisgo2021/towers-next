import { createRouterMiddleware } from "connected-next-router";

import { debounceMiddleware } from "./utils/middleware/debounceMiddleware";
import { loggerMiddleware } from "./utils/middleware/loggerMiddleware";
import { throttleMiddleware } from "./utils/middleware/throttleMiddleware";
import { rootReducer } from "./rootReducer";
import { fetchProfileOnUserReceived } from "./auth/middleware/fetchProfileOnUserReceived";
import { expandSliderOnOpenMenuButtonClick } from "./sider/middleware/expandSliderOnOpenMenuButtonClick";
import { collapseSliderOnOutsideExpandedSliderClick } from "./sider/middleware/collapseSliderOnOutsideExpandedSliderClick";

// noinspection JSUnresolvedVariable
const reduxDevToolsEnhancer = () =>
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : [];

export default {
  middleware: [
    loggerMiddleware,
    throttleMiddleware,
    debounceMiddleware,
    createRouterMiddleware(),
    expandSliderOnOpenMenuButtonClick,
    collapseSliderOnOutsideExpandedSliderClick,
    fetchProfileOnUserReceived,
  ],
  enhancers: [...reduxDevToolsEnhancer()],
  rootReducer,
};
