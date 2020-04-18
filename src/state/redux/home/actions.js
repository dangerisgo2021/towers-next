const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "home-page";

export const createRoomButtonClicked = actionCreatorFactory({
  namespace,
  type: "createRoomButtonClicked",
});
