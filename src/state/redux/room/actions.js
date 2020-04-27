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

export const joinRoomClicked = actionCreatorFactory({
  namespace,
  type: "joinRoomClicked",
  creator: ({ roomId }) => ({ roomId }),
});
