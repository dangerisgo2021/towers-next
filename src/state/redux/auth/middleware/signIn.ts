import { signIn } from "next-auth/client";
import { userLoginRequested } from "state/redux/auth/actions";

export const signInUser = () => (next) => async (action) => {
  next(action);

  if (action.type === userLoginRequested.type) {
    await signIn();
  }
};
