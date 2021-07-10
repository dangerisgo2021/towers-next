import { isEmpty } from "lodash";
export default class ReducerBuilder {
  private initialState: {};
  private typeToReducer: {};
  private keyToReducer: {};
  constructor() {
    this.initialState = {};
    this.typeToReducer = {};
    this.keyToReducer = {};
  }

  setInitialState(initialState) {
    this.initialState = initialState;
    return this;
  }

  //should you be able to add multiple reducers for the same type?
  addReducer(type, reducer) {
    this.typeToReducer[type] = reducer;
    return this;
  }

  combine(key, reducer) {
    this.keyToReducer[key] = reducer;

    // need initial state to be an object for combine work.
    // if you call combine and set initial state to undefined it crashes
    // Not sure how to handle combine with non object truthy values
    if (!this.initialState) this.initialState = {};
    return this;
  }

  build() {
    const _this = this;

    if (isEmpty(_this.keyToReducer)) {
      return (state = _this.initialState, action) => {
        const reducer = _this.typeToReducer[action.type];
        return reducer ? reducer(state, action) : state;
      };
    } else {
      return (state = _this.initialState, action) => {
        const rootReducer = _this.typeToReducer[action.type];

        const nextRootState = rootReducer ? rootReducer(state, action) : state;

        let hasChanged = state !== nextRootState;

        const nextCombinedReducersState = Object.keys(
          _this.keyToReducer
        ).reduce((nextState, key) => {
          const reducer = _this.keyToReducer[key];
          const stateForKey = state[key];
          const nextStateForKey = reducer
            ? reducer(stateForKey, action)
            : stateForKey;

          nextState[key] = nextStateForKey;
          hasChanged = hasChanged || nextStateForKey !== stateForKey;

          return nextState;
        }, {});

        return hasChanged
          ? { ...nextRootState, ...nextCombinedReducersState }
          : state;
      };
    }
  }
}
