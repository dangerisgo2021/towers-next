const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "room";

export const loginToJoinClicked = actionCreatorFactory({
  namespace,
  type: "loginToJoinClicked",
});

export const startButtonClicked = actionCreatorFactory({
  namespace,
  type: "startButtonClicked",
});

export const joinRoomClicked = actionCreatorFactory({
  namespace,
  type: "joinRoomClicked",
});

export const leaveRoomClicked = actionCreatorFactory({
  namespace,
  type: "leaveRoomClicked",
});

export const roomMatchMoveClicked = actionCreatorFactory({
  namespace,
  type: "roomMatchMoveClicked",
});

export const roomResetClicked = actionCreatorFactory({
  namespace,
  type: "roomResetClicked",
});
