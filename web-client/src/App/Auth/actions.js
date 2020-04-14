import { actionCreatorFactory } from "../State/redux/utils/factories/actionCreatorFactory";

const namespace = "auth";

export const userReceived = actionCreatorFactory({
  namespace,
  type: "userReceived",
  creator: ({ user }) => ({ user }),
});
