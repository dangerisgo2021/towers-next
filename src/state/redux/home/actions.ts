const {
  actionCreatorFactory,
} = require("state/redux/utils/factories/actionCreatorFactory");
const namespace = "home-page";

export const createRoomButtonClicked = actionCreatorFactory({
  namespace,
  type: "createRoomButtonClicked",
});

export const openRoomsTableRowClicked = actionCreatorFactory({
  namespace,
  type: "openRoomsTableRowClicked",
});
