const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "local";

export const startButtonClicked = actionCreatorFactory({
  namespace,
  type: "startButtonClicked",
});

export const localSessionStarted = actionCreatorFactory({
  namespace,
  type: "localSessionStarted",
  creator: ({ room }) => ({ room }),
});
