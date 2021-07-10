import { signIn } from "next-auth/client";
import { userLoginRequested } from "state/redux/auth/actions";

export const signInUser = () => (next) => async (action) => {
  next(action);

  if (action.type === userLoginRequested.type) {
    console.log("starting sign-in");
    const result = await signIn();
    console.log("sign-in", { result });
  }
};
