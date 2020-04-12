import { applyMiddleware, compose, createStore } from "redux";

export const createReduxStoreFromConfig = ({
  rootReducer = (state) => state,
  middleware = [],
  enhancers = [],
}) => (initialState) => {
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );
  return createStore(rootReducer, initialState, composedEnhancers);
};
