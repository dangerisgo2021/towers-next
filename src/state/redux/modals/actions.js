const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "modal";

export const modalCanceled = actionCreatorFactory({
  namespace,
  type: "modalCanceled",
  creator: ({ modal }) => ({ modal }),
});

export const modalOk = actionCreatorFactory({
  namespace,
  type: "modalOk",
  creator: ({ modal }) => ({ modal }),
});
