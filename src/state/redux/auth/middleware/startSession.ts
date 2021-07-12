import { signIn } from "next-auth/client";
import { userLoginRequested } from "state/redux/auth/actions";

export const startSession = () => (next) => async (action) => {
  next(action);

  if (action.type === userLoginRequested.type) {
    await signIn();
  }
};
