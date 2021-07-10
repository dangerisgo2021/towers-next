const {
  actionCreatorFactory,
} = require("state/redux/utils/factories/actionCreatorFactory");
const namespace = "local";

export const startButtonClicked = actionCreatorFactory({
  namespace,
  type: "startButtonClicked",
});

export const localSessionStarted = actionCreatorFactory({
  namespace,
  type: "localSessionStarted",
});
