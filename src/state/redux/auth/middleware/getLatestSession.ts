import { getSession } from "next-auth/client";
import { sessionReceived } from "state/redux/auth/actions";

let firedOnceOnLoad = false;

export const getLatestSession = (store) => (next) => async (action) => {
  next(action);

  if (!firedOnceOnLoad) {
    firedOnceOnLoad = true;
    const session = await getSession();

    store.dispatch(sessionReceived({ session }));
  }
};
