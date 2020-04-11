import { take, spawn } from "redux-saga/effects";

export const createWatcherSaga = ({
  args = {},
  actionType,
  worker,
  mergeArgs = ({ args, payload }) => ({ ...args, ...payload })
}) => {
  return function*() {
    while (true) {
      const action = yield take(actionType);
      console.log("spawning worker saga", { action });
      yield spawn(worker, mergeArgs({ args, payload: action.payload }));
    }
  };
};
