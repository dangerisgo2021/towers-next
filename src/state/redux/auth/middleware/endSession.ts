import { signout } from "next-auth/client";
import { userLogoutRequested } from "state/redux/auth/actions";

export const endSession = () => (next) => async (action) => {
  next(action);

  if (action.type === userLogoutRequested.type) {
    await signout();
  }
};
