const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "room";

export const startButtonClicked = actionCreatorFactory({
  namespace,
  type: "startButtonClicked",
});

export const playerClicked = actionCreatorFactory({
  namespace,
  type: "playerClicked",
  creator: ({ playerIndex, roomId }) => ({ playerIndex, roomId }),
});
