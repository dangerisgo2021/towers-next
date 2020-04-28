const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "room";

export const startButtonClicked = actionCreatorFactory({
  namespace,
  type: "startButtonClicked",
});

export const joinRoomClicked = actionCreatorFactory({
  namespace,
  type: "joinRoomClicked",
  creator: ({ roomId }) => ({ roomId }),
});

export const leaveRoomClicked = actionCreatorFactory({
  namespace,
  type: "leaveRoomClicked",
  creator: ({ roomId }) => ({ roomId }),
});
