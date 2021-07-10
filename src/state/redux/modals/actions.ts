import { actionCreatorFactory } from "state/redux/utils/factories/actionCreatorFactory";

const namespace = "modal";

export const modalCanceled = actionCreatorFactory({
  namespace,
  type: "modalCanceled",
});

export const modalOk = actionCreatorFactory({
  namespace,
  type: "modalOk",
});

export const modalOpened = actionCreatorFactory({
  namespace,
  type: "modalOpened",
});

export const modalClosed = actionCreatorFactory({
  namespace,
  type: "modalClosed",
});
