import { actionCreatorFactory } from "state/redux/utils/factories/actionCreatorFactory";

const namespace = "auth";

export const userReceived = actionCreatorFactory({
  namespace,
  type: "userReceived",
});

export const sessionReceived = actionCreatorFactory({
  namespace,
  type: "sessionReceived",
});

export const profileReceived = actionCreatorFactory({
  namespace,
  type: "profileReceived",
});

export const userLoginRequested = actionCreatorFactory({
  namespace,
  type: "userLoginRequested",
});
export const userLogoutRequested = actionCreatorFactory({
  namespace,
  type: "userLogoutRequested",
});
