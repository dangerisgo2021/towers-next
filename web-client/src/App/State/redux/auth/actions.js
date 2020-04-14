import { actionCreatorFactory } from "../utils/factories/actionCreatorFactory";

const namespace = "auth";

export const userReceived = actionCreatorFactory({
  namespace,
  type: "userReceived",
  creator: ({ user }) => ({ user }),
});
