import { sessionReceived } from "state/redux/auth/actions";

export const fetchProfile = (store) => (next) => async (action) => {
  next(action);

  if (action.type === sessionReceived.type) {
    const state = store.getState();
    console.log({ state });

  }
};
