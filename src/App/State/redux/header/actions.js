const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "header";

export const openMenuButtonClicked = actionCreatorFactory({
  namespace,
  type: "openMenuButtonClicked"
});
